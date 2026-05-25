import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { stripe } from '@/lib/stripe';

export const dynamic = 'force-dynamic';



const PLANS = {
  community: {
    name: 'LegacyShield Community',
    amount: 3900, // $39.00/mo after first month
    firstMonthAmount: 100, // $1.00 first month
    description: 'Full course library, monthly workshops, community access',
    couponId: 'first_month_community', // idempotent coupon ID
    discountAmount: 3800, // $39 - $1 = $38 off
    recurring: true,
  },
  legacy_builder: {
    name: 'LegacyShield Legacy Builder',
    amount: 9900, // $99.00/mo after first month
    firstMonthAmount: 100, // $1.00 first month
    description: 'Everything in Community + attorney Q&A, 1-on-1 coaching, priority support',
    couponId: 'first_month_legacy_builder', // idempotent coupon ID
    discountAmount: 9800, // $99 - $1 = $98 off
    recurring: true,
  },
  workshop: {
    name: 'LegacyShield Pro Workshop',
    amount: 14900, // $149.00 one-time
    description: 'Live virtual workshop on estate planning, life insurance, and generational wealth strategies',
    priceId: process.env.STRIPE_WORKSHOP_PRICE_ID || 'price_1Tb4tWAYfsIiJePSXvohwl8C',
    recurring: false,
  },
};

type SubscriptionPlan = 'community' | 'legacy_builder';

async function getOrCreateFirstMonthCoupon(plan: SubscriptionPlan): Promise<string> {
  const planData = PLANS[plan] as { name: string; amount: number; firstMonthAmount: number; description: string; couponId: string; discountAmount: number; recurring: boolean; };
  try {
    // Try to retrieve existing coupon first
    const existing = await stripe.coupons.retrieve(planData.couponId);
    return existing.id;
  } catch {
    // Coupon doesn't exist — create it
    const coupon = await stripe.coupons.create({
      id: planData.couponId,
      amount_off: planData.discountAmount,
      currency: 'usd',
      duration: 'once', // applies only to first invoice
      name: `$1 First Month — ${planData.name}`,
    });
    return coupon.id;
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { plan } = await req.json();
    const planData = PLANS[plan as keyof typeof PLANS];

    if (!planData) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });
    }

    const baseUrl = process.env.NEXTAUTH_URL || 'https://legacyshieldpro.com';

    // Handle one-time workshop payment
    if (!planData.recurring) {
      const checkoutSession = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        customer_email: session.user.email!,
        metadata: {
          userId: (session.user as any).id,
          plan,
        },
        line_items: [
          {
            price: (planData as any).priceId,
            quantity: 1,
          },
        ],
        success_url: `${baseUrl}/payment-success?session_id={CHECKOUT_SESSION_ID}&type=workshop`,
        cancel_url: `${baseUrl}/dashboard?canceled=true`,
      });
      return NextResponse.json({ url: checkoutSession.url });
    }

    // Handle recurring subscription plans
    const couponId = await getOrCreateFirstMonthCoupon(plan as SubscriptionPlan);

    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      customer_email: session.user.email!,
      metadata: {
        userId: (session.user as any).id,
        plan,
      },
      line_items: [
        {
          price_data: {
            currency: 'usd',
            recurring: { interval: 'month' },
            product_data: {
              name: planData.name,
              description: planData.description,
            },
            unit_amount: planData.amount,
          },
          quantity: 1,
        },
      ],
      discounts: [
        { coupon: couponId }, // $1 first month — auto-expires after first invoice
      ],
      subscription_data: {
        metadata: { userId: (session.user as any).id, plan },
      },
      success_url: `${baseUrl}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/dashboard?canceled=true`,
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (err) {
    console.error('[stripe/checkout]', err);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
