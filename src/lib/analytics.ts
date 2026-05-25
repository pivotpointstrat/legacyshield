/**
 * LegacyShield — Google Analytics 4 Event Tracking
 * ─────────────────────────────────────────────────
 * Usage: import { trackEvent } from '@/lib/analytics'
 * Requires: NEXT_PUBLIC_GA_ID env var set in Netlify + Railway
 *
 * Setup instructions:
 * 1. Go to analytics.google.com → Create Property → Web
 * 2. Copy your Measurement ID (format: G-XXXXXXXXXX)
 * 3. Add to Netlify: Site Config → Env Variables → NEXT_PUBLIC_GA_ID
 * 4. Add to Railway: Project → Variables → NEXT_PUBLIC_GA_ID
 * ─────────────────────────────────────────────────
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

// ─── Core event tracker ───────────────────────────────────────────────────────
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === 'undefined') return;
  if (!window.gtag) return;
  window.gtag('event', eventName, params ?? {});
}

// ─── Page view (called automatically by GA4 on route change) ─────────────────
export function trackPageView(url: string) {
  const measurementId = process.env.NEXT_PUBLIC_GA_ID;
  if (!measurementId) return;
  if (typeof window === 'undefined') return;
  if (!window.gtag) return;
  window.gtag('config', measurementId, { page_path: url });
}

// ─── Typed event helpers ──────────────────────────────────────────────────────

/** Fired when a user clicks a signup/join CTA */
export function trackSignupStarted(plan?: string) {
  trackEvent('signup_started', {
    plan: plan ?? 'unknown',
  });
}

/** Fired when Stripe checkout is initiated */
export function trackCheckoutStarted(plan: string, value: number) {
  trackEvent('begin_checkout', {
    currency: 'USD',
    value,
    plan,
  });
}

/** Fired when subscription is successfully activated (payment-success page) */
export function trackSubscriptionActivated(plan: string, value: number) {
  trackEvent('purchase', {
    currency: 'USD',
    value,
    plan,
    transaction_id: `ls_${Date.now()}`,
  });
}

/** Fired when a user opens a course */
export function trackCourseStarted(courseSlug: string, courseName: string) {
  trackEvent('course_started', {
    course_slug: courseSlug,
    course_name: courseName,
  });
}

/** Fired when a user views a lesson */
export function trackLessonViewed(courseSlug: string, lessonId: number, lessonTitle: string) {
  trackEvent('lesson_viewed', {
    course_slug: courseSlug,
    lesson_id: lessonId,
    lesson_title: lessonTitle,
  });
}

/** Fired when a user completes a lesson (clicks Next or finishes last lesson) */
export function trackLessonCompleted(courseSlug: string, lessonId: number, lessonTitle: string) {
  trackEvent('lesson_completed', {
    course_slug: courseSlug,
    lesson_id: lessonId,
    lesson_title: lessonTitle,
  });
}

/** Fired when a user completes all lessons in a course */
export function trackCourseCompleted(courseSlug: string, courseName: string) {
  trackEvent('course_completed', {
    course_slug: courseSlug,
    course_name: courseName,
  });
}

/** Fired when a user clicks an affiliate link */
export function trackAffiliateClick(partner: string, placement: string) {
  trackEvent('affiliate_click', {
    partner,
    placement,
  });
}

/** Fired when a user clicks a workshop registration CTA */
export function trackWorkshopInterest(workshopTitle: string) {
  trackEvent('workshop_interest', {
    workshop_title: workshopTitle,
  });
}
