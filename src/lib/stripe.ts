import Stripe from 'stripe';

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY environment variable is not set');
    }
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2026-04-22.dahlia',
      typescript: true,
    });
  }
  return _stripe;
}

// Lazy singleton export for backward compatibility
export const stripe = new Proxy({} as Stripe, {
  get(_target, prop) {
    return (getStripe() as any)[prop];
  },
});

export const PLANS = {
  community: {
    name: 'Community',
    price: 39,
    priceId: process.env.STRIPE_COMMUNITY_PRICE_ID || '',
    description: 'Full course library, monthly workshops, community access',
    recurring: true,
  },
  legacy_builder: {
    name: 'Legacy Builder',
    price: 99,
    priceId: process.env.STRIPE_LEGACY_PRICE_ID || '',
    description: 'Everything in Community + attorney Q&A, 1-on-1 coaching, priority support',
    recurring: true,
  },
  workshop: {
    name: 'LegacyShield Pro Workshop',
    price: 149,
    priceId: process.env.STRIPE_WORKSHOP_PRICE_ID || 'price_1Tb4tWAYfsIiJePSXvohwl8C',
    description: 'Live virtual workshop on estate planning, life insurance, and generational wealth strategies',
    recurring: false,
  },
};
