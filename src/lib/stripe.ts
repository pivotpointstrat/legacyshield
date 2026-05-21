import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-04-22.dahlia',
  typescript: true,
});

export const PLANS = {
  community: {
    name: 'Community',
    price: 39,
    priceId: process.env.STRIPE_COMMUNITY_PRICE_ID || '',
    description: 'Full course library, monthly workshops, community access',
  },
  legacy_builder: {
    name: 'Legacy Builder',
    price: 99,
    priceId: process.env.STRIPE_LEGACY_PRICE_ID || '',
    description: 'Everything in Community + attorney Q&A, 1-on-1 coaching, priority support',
  },
};
