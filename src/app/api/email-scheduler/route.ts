/**
 * Email Sequence Scheduler
 * ─────────────────────────────────────────────────────────────────────────────
 * Called daily by Railway cron (or Netlify scheduled function).
 * Checks all users and sends the appropriate sequence email based on
 * where they are in their onboarding, nurture, or re-engagement journey.
 *
 * Cron setup (Railway): Set a cron job to call POST /api/email-scheduler
 * with header: Authorization: Bearer <SCHEDULER_SECRET>
 * Schedule: 0 9 * * *  (9 AM UTC daily)
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import {
  sendOnboardingDay1Email,
  sendOnboardingDay3Email,
  sendOnboardingDay7Email,
  sendNurtureDay2Email,
  sendNurtureDay5Email,
  sendNurtureDay10Email,
  sendReengagementDay7Email,
  sendReengagementDay14Email,
  sendReengagementDay30Email,
} from '@/lib/email';

// ─── Auth guard ──────────────────────────────────────────────────────────────
function isAuthorized(req: NextRequest): boolean {
  const auth = req.headers.get('authorization') ?? '';
  const secret = process.env.SCHEDULER_SECRET;
  if (!secret) return false;
  return auth === `Bearer ${secret}`;
}

// ─── Day diff helper ─────────────────────────────────────────────────────────
function daysSince(date: Date): number {
  const ms = Date.now() - new Date(date).getTime();
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}

// ─── Result tracker ──────────────────────────────────────────────────────────
type SequenceResult = { userId: string; email: string; sequence: string; sent: boolean; error?: string };

// ─── Main handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();

  const results: SequenceResult[] = [];

  // Load all users who have any active sequence
  const users = await User.find({
    $or: [
      { onboardingStartedAt: { $exists: true } },
      { leadNurtureStartedAt: { $exists: true } },
      { reengagementStartedAt: { $exists: true } },
    ],
  });

  for (const user of users) {
    const { _id, name, email, plan, emailSequenceLog } = user;
    const log = emailSequenceLog as string[];
    const userId = String(_id);

    // ── Onboarding Sequence (active subscribers) ─────────────────────────────
    if (user.onboardingStartedAt) {
      const days = daysSince(user.onboardingStartedAt);

      if (days >= 1 && !log.includes('onboarding_day1')) {
        try {
          await sendOnboardingDay1Email({ name, email });
          await User.findByIdAndUpdate(_id, { $push: { emailSequenceLog: 'onboarding_day1' } });
          results.push({ userId, email, sequence: 'onboarding_day1', sent: true });
        } catch (err) {
          results.push({ userId, email, sequence: 'onboarding_day1', sent: false, error: String(err) });
        }
      }

      if (days >= 3 && !log.includes('onboarding_day3')) {
        try {
          await sendOnboardingDay3Email({ name, email });
          await User.findByIdAndUpdate(_id, { $push: { emailSequenceLog: 'onboarding_day3' } });
          results.push({ userId, email, sequence: 'onboarding_day3', sent: true });
        } catch (err) {
          results.push({ userId, email, sequence: 'onboarding_day3', sent: false, error: String(err) });
        }
      }

      if (days >= 7 && !log.includes('onboarding_day7')) {
        try {
          await sendOnboardingDay7Email({ name, email, plan });
          await User.findByIdAndUpdate(_id, { $push: { emailSequenceLog: 'onboarding_day7' } });
          results.push({ userId, email, sequence: 'onboarding_day7', sent: true });
        } catch (err) {
          results.push({ userId, email, sequence: 'onboarding_day7', sent: false, error: String(err) });
        }
      }
    }

    // ── Lead Nurture Sequence (free/community signups not yet subscribed) ────
    if (user.leadNurtureStartedAt && user.subscriptionStatus !== 'active') {
      const days = daysSince(user.leadNurtureStartedAt);

      if (days >= 2 && !log.includes('nurture_day2')) {
        try {
          await sendNurtureDay2Email({ name, email });
          await User.findByIdAndUpdate(_id, { $push: { emailSequenceLog: 'nurture_day2' } });
          results.push({ userId, email, sequence: 'nurture_day2', sent: true });
        } catch (err) {
          results.push({ userId, email, sequence: 'nurture_day2', sent: false, error: String(err) });
        }
      }

      if (days >= 5 && !log.includes('nurture_day5')) {
        try {
          await sendNurtureDay5Email({ name, email });
          await User.findByIdAndUpdate(_id, { $push: { emailSequenceLog: 'nurture_day5' } });
          results.push({ userId, email, sequence: 'nurture_day5', sent: true });
        } catch (err) {
          results.push({ userId, email, sequence: 'nurture_day5', sent: false, error: String(err) });
        }
      }

      if (days >= 10 && !log.includes('nurture_day10')) {
        try {
          await sendNurtureDay10Email({ name, email });
          await User.findByIdAndUpdate(_id, { $push: { emailSequenceLog: 'nurture_day10' } });
          results.push({ userId, email, sequence: 'nurture_day10', sent: true });
        } catch (err) {
          results.push({ userId, email, sequence: 'nurture_day10', sent: false, error: String(err) });
        }
      }
    }

    // ── Re-engagement Sequence (canceled/inactive) ───────────────────────────
    if (user.reengagementStartedAt && user.subscriptionStatus !== 'active') {
      const days = daysSince(user.reengagementStartedAt);

      if (days >= 7 && !log.includes('reengagement_day7')) {
        try {
          await sendReengagementDay7Email({ name, email });
          await User.findByIdAndUpdate(_id, { $push: { emailSequenceLog: 'reengagement_day7' } });
          results.push({ userId, email, sequence: 'reengagement_day7', sent: true });
        } catch (err) {
          results.push({ userId, email, sequence: 'reengagement_day7', sent: false, error: String(err) });
        }
      }

      if (days >= 14 && !log.includes('reengagement_day14')) {
        try {
          await sendReengagementDay14Email({ name, email });
          await User.findByIdAndUpdate(_id, { $push: { emailSequenceLog: 'reengagement_day14' } });
          results.push({ userId, email, sequence: 'reengagement_day14', sent: true });
        } catch (err) {
          results.push({ userId, email, sequence: 'reengagement_day14', sent: false, error: String(err) });
        }
      }

      if (days >= 30 && !log.includes('reengagement_day30')) {
        try {
          await sendReengagementDay30Email({ name, email });
          await User.findByIdAndUpdate(_id, { $push: { emailSequenceLog: 'reengagement_day30' } });
          results.push({ userId, email, sequence: 'reengagement_day30', sent: true });
        } catch (err) {
          results.push({ userId, email, sequence: 'reengagement_day30', sent: false, error: String(err) });
        }
      }
    }
  }

  const sent = results.filter(r => r.sent).length;
  const failed = results.filter(r => !r.sent).length;

  console.log(`[email-scheduler] Processed ${users.length} users. Sent: ${sent}, Failed: ${failed}`);

  return NextResponse.json({
    processed: users.length,
    sent,
    failed,
    results,
  });
}

// ─── GET: Status check ────────────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return NextResponse.json({ status: 'Email scheduler is active', endpoint: 'POST /api/email-scheduler' });
}
