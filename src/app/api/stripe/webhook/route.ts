import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import Stripe from 'stripe';


export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature')!;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error('[webhook] Signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  await connectDB();

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const { userId, plan } = session.metadata ?? {};
        if (userId) {
          await User.findByIdAndUpdate(userId, {
            subscriptionStatus: 'active',
            plan: plan || 'community',
            stripeCustomerId: session.customer as string,
            stripeSubscriptionId: session.subscription as string,
          });
          console.log(`[webhook] Activated subscription for user ${userId}`);
        }
        break;
      }

      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription;
        await User.findOneAndUpdate(
          { stripeSubscriptionId: sub.id },
          { subscriptionStatus: 'canceled' }
        );
        console.log(`[webhook] Canceled subscription ${sub.id}`);
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = invoice.customer as string;
        await User.findOneAndUpdate(
          { stripeCustomerId: customerId },
          { subscriptionStatus: 'inactive' }
        );
        console.log(`[webhook] Payment failed for customer ${customerId}`);
        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = invoice.customer as string;
        await User.findOneAndUpdate(
          { stripeCustomerId: customerId },
          { subscriptionStatus: 'active' }
        );
        console.log(`[webhook] Renewal succeeded for customer ${customerId}`);
        break;
      }

      case 'customer.subscription.updated': {
        const sub = event.data.object as Stripe.Subscription;
        const priceId = sub.items.data[0]?.price.unit_amount;
        const plan = priceId === 9900 ? 'legacy_builder' : 'community';
        await User.findOneAndUpdate(
          { stripeSubscriptionId: sub.id },
          { plan, subscriptionStatus: sub.status === 'active' ? 'active' : 'inactive' }
        );
        break;
      }

      default:
        console.log(`[webhook] Unhandled event: ${event.type}`);
    }
  } catch (err) {
    console.error('[webhook] Handler error:', err);
    return NextResponse.json({ error: 'Handler error' }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
