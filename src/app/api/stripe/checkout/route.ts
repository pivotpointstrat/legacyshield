import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { stripe } from '@/lib/stripe';

const PLANS = {
  community: {
    name: 'Community Plan',
    amount: 3900, // $39.00 in cents
    description: 'Full course library, monthly workshops, community access',
  },
  legacy_builder: {
    name: 'Legacy Builder Plan',
    amount: 9900, // $99.00 in cents
    description: 'Everything in Community + attorney Q&A, 1-on-1 coaching, priority support',
  },
};

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
              images: ['https://legacyshieldpro.com/logo.png'],
            },
            unit_amount: planData.amount,
          },
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/dashboard?subscribed=true`,
      cancel_url: `${baseUrl}/dashboard?canceled=true`,
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (err) {
    console.error('[stripe/checkout]', err);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
