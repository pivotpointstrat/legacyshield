import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { stripe } from '@/lib/stripe';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export const dynamic = 'force-dynamic';



export async function POST(req: NextRequest) {
  try {
    const { sessionId } = await req.json();

    if (!sessionId) {
      return NextResponse.json({ error: 'Missing session ID' }, { status: 400 });
    }

    // Verify the Stripe checkout session
    const checkoutSession = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['subscription'],
    });

    if (checkoutSession.payment_status !== 'paid' && checkoutSession.status !== 'complete') {
      return NextResponse.json({ error: 'Payment not completed' }, { status: 400 });
    }

    // Get user info from session metadata
    const userId = checkoutSession.metadata?.userId;
    const plan = checkoutSession.metadata?.plan || 'community';

    if (!userId) {
      return NextResponse.json({ error: 'No user ID in session' }, { status: 400 });
    }

    // Update MongoDB directly
    await connectDB();
    const subscription = checkoutSession.subscription as any;
    await User.findByIdAndUpdate(userId, {
      subscriptionStatus: 'active',
      plan,
      stripeCustomerId: checkoutSession.customer as string,
      stripeSubscriptionId: typeof subscription === 'string' ? subscription : subscription?.id,
    });

    return NextResponse.json({ success: true, plan });
  } catch (err) {
    console.error('[stripe/activate]', err);
    return NextResponse.json({ error: 'Activation failed' }, { status: 500 });
  }
}
