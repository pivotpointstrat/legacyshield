import { Resend } from 'resend';

function getResend() { return new Resend(process.env.RESEND_API_KEY!); }

const FROM = 'LegacyShield <hello@legacyshieldpro.com>';
const SITE = 'https://legacyshieldpro.com';

// ─── Shared HTML helpers ────────────────────────────────────────────────────

function emailHeader() {
  return `
    <tr><td style="background:#0a1628;padding:28px 40px;border-radius:16px 16px 0 0;text-align:center">
      <table cellpadding="0" cellspacing="0" style="margin:0 auto">
        <tr>
          <td style="vertical-align:middle;padding-right:12px">
            <div style="width:36px;height:36px;background:#d4a017;border-radius:50%;text-align:center;line-height:36px">
              <span style="color:#0a1628;font-weight:bold;font-size:16px">L</span>
            </div>
          </td>
          <td style="vertical-align:middle">
            <span style="color:white;font-size:20px;font-weight:700;letter-spacing:-0.3px">LegacyShield</span>
          </td>
        </tr>
      </table>
    </td></tr>`;
}

function emailFooter() {
  return `
    <tr><td style="padding:24px;text-align:center">
      <p style="color:#9ca3af;font-size:12px;margin:0">LegacyShield &middot; Washington DC Metro Area</p>
      <p style="color:#9ca3af;font-size:12px;margin:4px 0 0">
        <a href="${SITE}" style="color:#d4a017;text-decoration:none">legacyshieldpro.com</a>
        &nbsp;&middot;&nbsp;
        <a href="${SITE}/unsubscribe" style="color:#9ca3af;text-decoration:none">Unsubscribe</a>
      </p>
    </td></tr>`;
}

function ctaButton(text: string, url: string) {
  return `<a href="${url}" style="display:block;background:#d4a017;color:#0a1628;font-weight:700;text-align:center;padding:16px;border-radius:50px;text-decoration:none;font-size:15px;margin:0 0 28px">${text}</a>`;
}

function emailWrapper(bodyContent: string) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%">
        ${emailHeader()}
        <tr><td style="background:white;padding:40px;border-radius:0 0 16px 16px">
          ${bodyContent}
        </td></tr>
        ${emailFooter()}
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── 1. Welcome Email (Day 0 — on subscription activation) ──────────────────

export async function sendWelcomeEmail({
  name,
  email,
  plan,
}: {
  name: string;
  email: string;
  plan: 'community' | 'legacy_builder';
}) {
  const planLabel = plan === 'legacy_builder' ? 'Legacy Builder' : 'Community';
  const planPrice = plan === 'legacy_builder' ? '$99/month' : '$39/month';

  const body = `
    <h1 style="color:#0a1628;font-size:24px;margin:0 0 8px">Welcome to the family, ${name}! &#127881;</h1>
    <p style="color:#6b7280;font-size:15px;margin:0 0 24px">You&apos;re now a <strong style="color:#d4a017">${planLabel}</strong> member at <strong>${planPrice}</strong>. Your family&apos;s legacy starts today.</p>

    <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:20px;margin:0 0 28px">
      <p style="margin:0 0 4px;font-size:12px;font-weight:700;color:#d4a017;text-transform:uppercase;letter-spacing:0.05em">Your Plan</p>
      <p style="margin:0;font-size:18px;font-weight:700;color:#0a1628">${planLabel} &mdash; ${planPrice}</p>
    </div>

    <div style="background:#0a1628;border-radius:12px;padding:20px;margin:0 0 28px;text-align:center">
      <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#d4a017;text-transform:uppercase;letter-spacing:0.05em">&#127916; Welcome Video</p>
      <p style="color:#ffffff;font-size:15px;font-weight:600;margin:0 0 4px">A personal welcome from Darcia Sterling</p>
      <p style="color:#9ca3af;font-size:13px;margin:0 0 16px">Chief of Staff &mdash; watch this first to get oriented</p>
      <a href="${SITE}/dashboard" style="display:inline-block;background:#d4a017;color:#0a1628;font-weight:700;font-size:14px;padding:10px 24px;border-radius:8px;text-decoration:none">&#9654; Watch Welcome Video</a>
    </div>

    <p style="color:#374151;font-size:15px;margin:0 0 8px"><strong>Here&apos;s what&apos;s waiting for you:</strong></p>
    <ul style="color:#6b7280;font-size:14px;padding-left:20px;margin:0 0 28px">
      <li style="margin-bottom:6px">&#128218; Life Insurance 101 &mdash; start here first</li>
      <li style="margin-bottom:6px">&#128203; Estate Planning Basics &mdash; protect what you&apos;ve built</li>
      <li style="margin-bottom:6px">&#128176; Generational Wealth Playbook &mdash; real strategies for DC families</li>
      <li style="margin-bottom:6px">&#129309; Monthly community workshops</li>
      ${plan === 'legacy_builder' ? '<li style="margin-bottom:6px">&#9878;&#65039; Attorney Q&amp;A sessions (Legacy Builder exclusive)</li>' : ''}
    </ul>

    ${ctaButton('Go to Your Dashboard &rarr;', `${SITE}/dashboard`)}

    <hr style="border:none;border-top:1px solid #e5e7eb;margin:0 0 24px">
    <p style="color:#6b7280;font-size:14px;margin:0">I built LegacyShield because I watched too many good DC families leave nothing behind &mdash; not because they didn&apos;t work hard, but because no one ever taught them the tools. That changes today.</p>
    <p style="color:#6b7280;font-size:14px;margin:12px 0 0">I&apos;ll be in your inbox tomorrow with exactly where to start. See you inside.</p>
    <p style="color:#374151;font-size:14px;margin:12px 0 0"><strong>&mdash; Anthony Washington</strong><br><span style="color:#9ca3af;font-size:13px">Founder, LegacyShield &mdash; Retired DC Law Enforcement</span></p>`;

  return getResend().emails.send({
    from: FROM,
    to: email,
    subject: `Welcome to LegacyShield, ${name}! Your ${planLabel} membership is active &#127881;`,
    html: emailWrapper(body),
  });
}

// ─── 2. Onboarding Day 1 — "Start Here" ─────────────────────────────────────

export async function sendOnboardingDay1Email({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const body = `
    <h1 style="color:#0a1628;font-size:22px;margin:0 0 8px">Your first step, ${name}</h1>
    <p style="color:#6b7280;font-size:15px;margin:0 0 20px">Most people join LegacyShield and don&apos;t know where to begin. I&apos;m going to make it simple for you.</p>

    <div style="background:#fff7e6;border-left:4px solid #d4a017;padding:16px 20px;border-radius:0 8px 8px 0;margin:0 0 24px">
      <p style="margin:0;font-size:15px;font-weight:700;color:#0a1628">&#128073; Start with Life Insurance 101</p>
      <p style="margin:6px 0 0;font-size:14px;color:#6b7280">It&apos;s the foundation everything else is built on. 6 lessons, under 90 minutes total. You can finish it this week.</p>
    </div>

    <p style="color:#374151;font-size:15px;margin:0 0 16px"><strong>Here&apos;s the truth nobody tells DC families:</strong></p>
    <p style="color:#6b7280;font-size:14px;margin:0 0 16px">67% of Black families in America have no life insurance coverage. When something happens &mdash; and eventually something always happens &mdash; the family is left scrambling. Funeral costs. Lost income. The house. I&apos;ve seen it happen to good people my whole career.</p>
    <p style="color:#6b7280;font-size:14px;margin:0 0 24px">The Life Insurance 101 course teaches you exactly what to get, how much you need, and how to stop overpaying. 30 minutes from now you&apos;ll know more than most people ever will.</p>

    ${ctaButton('Start Life Insurance 101 &rarr;', `${SITE}/dashboard/courses/life-insurance-101`)}

    <hr style="border:none;border-top:1px solid #e5e7eb;margin:0 0 20px">
    <p style="color:#9ca3af;font-size:13px;margin:0">Reply to this email anytime with questions. I read every one.</p>
    <p style="color:#374151;font-size:14px;margin:8px 0 0"><strong>&mdash; Anthony</strong></p>`;

  return getResend().emails.send({
    from: FROM,
    to: email,
    subject: `${name}, here&apos;s exactly where to start &#128073;`,
    html: emailWrapper(body),
  });
}

// ─── 3. Onboarding Day 3 — Community Story / Why This Matters ───────────────

export async function sendOnboardingDay3Email({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const body = `
    <h1 style="color:#0a1628;font-size:22px;margin:0 0 8px">A story I need to tell you, ${name}</h1>
    <p style="color:#6b7280;font-size:15px;margin:0 0 20px">25 years in DC law enforcement taught me a lot of things. But nothing hit harder than what I saw happen to families after a tragedy.</p>

    <p style="color:#374151;font-size:15px;margin:0 0 16px">I&apos;ve responded to calls where a husband was gone &mdash; good man, worked every day &mdash; and his family had nothing. No will. No life insurance. No plan. The wife had 60 days before the mortgage came due and no idea where to start.</p>
    <p style="color:#374151;font-size:15px;margin:0 0 16px">I&apos;ve seen it happen in the best neighborhoods and the roughest ones. It doesn&apos;t discriminate. But I&apos;ve also seen the difference when a family <em>was</em> prepared. Same tragedy &mdash; completely different outcome.</p>

    <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:24px;margin:0 0 24px">
      <p style="margin:0 0 12px;font-size:15px;font-weight:700;color:#0a1628">That&apos;s why I built this.</p>
      <p style="margin:0;font-size:14px;color:#6b7280">LegacyShield exists so that DC families have the same access to financial protection knowledge that wealthy families take for granted. Plain language. Real tools. From someone who grew up in this city and will never leave it.</p>
    </div>

    <p style="color:#374151;font-size:15px;margin:0 0 24px">If you haven&apos;t started the courses yet, this week is a great time. The Estate Planning Basics course will show you how to get a will in place without spending thousands on a lawyer.</p>

    ${ctaButton('Continue Learning &rarr;', `${SITE}/dashboard/courses`)}

    <hr style="border:none;border-top:1px solid #e5e7eb;margin:0 0 20px">
    <p style="color:#9ca3af;font-size:13px;margin:0">Questions about your plan or the courses? Just reply. I&apos;m here.</p>
    <p style="color:#374151;font-size:14px;margin:8px 0 0"><strong>&mdash; Anthony Washington</strong><br><span style="color:#9ca3af;font-size:13px">Founder &mdash; Retired DC Law Enforcement Officer</span></p>`;

  return getResend().emails.send({
    from: FROM,
    to: email,
    subject: 'Why I built this (a story from 25 years on the job)',
    html: emailWrapper(body),
  });
}

// ─── 4. Onboarding Day 7 — 7-Day Check-In ───────────────────────────────────

export async function sendOnboardingDay7Email({
  name,
  email,
  plan,
}: {
  name: string;
  email: string;
  plan: 'community' | 'legacy_builder';
}) {
  const body = `
    <h1 style="color:#0a1628;font-size:22px;margin:0 0 8px">One week in &mdash; how are you doing, ${name}?</h1>
    <p style="color:#6b7280;font-size:15px;margin:0 0 20px">It&apos;s been a week since you joined LegacyShield. I wanted to check in personally.</p>

    <p style="color:#374151;font-size:15px;margin:0 0 16px">If you&apos;ve already started the courses &mdash; great. Keep going. The Generational Wealth Playbook is the one most members say changed how they think about money entirely.</p>
    <p style="color:#374151;font-size:15px;margin:0 0 16px">If you haven&apos;t had the chance to log in yet &mdash; that&apos;s okay too. Life is busy. But I want you to commit to one thing this week: <strong>just one lesson</strong>. 15 minutes. That&apos;s all it takes to start building something real for your family.</p>

    <div style="background:#fff7e6;border-left:4px solid #d4a017;padding:16px 20px;border-radius:0 8px 8px 0;margin:0 0 24px">
      <p style="margin:0;font-size:14px;font-weight:700;color:#0a1628">&#128218; Three courses. One goal.</p>
      <ul style="color:#6b7280;font-size:14px;padding-left:16px;margin:8px 0 0">
        <li style="margin-bottom:4px">Life Insurance 101 &mdash; protect your income</li>
        <li style="margin-bottom:4px">Estate Planning Basics &mdash; protect your assets</li>
        <li>Generational Wealth Playbook &mdash; build something that lasts</li>
      </ul>
    </div>

    ${plan === 'community' ? `
    <div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:12px;padding:20px;margin:0 0 24px">
      <p style="margin:0 0 8px;font-size:14px;font-weight:700;color:#0a1628">&#128276; Coming up: Live Workshop</p>
      <p style="margin:0;font-size:14px;color:#6b7280">Our next community workshop is open to all members. Watch for the announcement &mdash; these fill up fast and the Q&amp;A sessions are where the real learning happens.</p>
    </div>` : `
    <div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:12px;padding:20px;margin:0 0 24px">
      <p style="margin:0 0 8px;font-size:14px;font-weight:700;color:#0a1628">&#9878;&#65039; Legacy Builder Reminder</p>
      <p style="margin:0;font-size:14px;color:#6b7280">As a Legacy Builder member, you have access to our exclusive Attorney Q&amp;A sessions. The next one is coming up &mdash; check your dashboard for the schedule.</p>
    </div>`}

    ${ctaButton('Go to My Dashboard &rarr;', `${SITE}/dashboard`)}

    <p style="color:#374151;font-size:14px;margin:0"><strong>&mdash; Anthony</strong></p>`;

  return getResend().emails.send({
    from: FROM,
    to: email,
    subject: `Checking in on you, ${name} &#128075;`,
    html: emailWrapper(body),
  });
}

// ─── 5. Lead Nurture Day 2 — Free Content Reminder ──────────────────────────
// For community (free/unsubscribed) signups

export async function sendNurtureDay2Email({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const body = `
    <h1 style="color:#0a1628;font-size:22px;margin:0 0 8px">Your free resources are waiting, ${name}</h1>
    <p style="color:#6b7280;font-size:15px;margin:0 0 20px">You signed up for LegacyShield &mdash; I want to make sure you&apos;re getting full value from it.</p>

    <p style="color:#374151;font-size:15px;margin:0 0 16px">Here&apos;s something most people don&apos;t know: DC families are <strong>40% more likely</strong> to be underinsured than the national average. Meaning if something happened tomorrow, there wouldn&apos;t be enough coverage to keep the family stable.</p>
    <p style="color:#374151;font-size:15px;margin:0 0 16px">That&apos;s the gap LegacyShield is built to close. And we start with education &mdash; because once you understand how this stuff works, you make better decisions for your family.</p>

    <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:20px;margin:0 0 24px">
      <p style="margin:0 0 12px;font-size:14px;font-weight:700;color:#d4a017;text-transform:uppercase;letter-spacing:0.05em">Free with your account</p>
      <ul style="color:#6b7280;font-size:14px;padding-left:16px;margin:0">
        <li style="margin-bottom:6px">&#128218; Preview lessons from all 3 courses</li>
        <li style="margin-bottom:6px">&#128203; DC Family Estate Planning Checklist</li>
        <li>&#128176; Life Insurance Calculator Guide</li>
      </ul>
    </div>

    ${ctaButton('Access My Free Resources &rarr;', `${SITE}/dashboard`)}

    <p style="color:#9ca3af;font-size:13px;margin:0">Ready to unlock the full courses? Plans start at $39/month &mdash; less than a tank of gas.</p>
    <p style="color:#374151;font-size:14px;margin:8px 0 0"><strong>&mdash; Anthony</strong></p>`;

  return getResend().emails.send({
    from: FROM,
    to: email,
    subject: `${name}, your free LegacyShield resources are inside`,
    html: emailWrapper(body),
  });
}

// ─── 6. Lead Nurture Day 5 — Social Proof / Success Story ───────────────────

export async function sendNurtureDay5Email({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const body = `
    <h1 style="color:#0a1628;font-size:22px;margin:0 0 8px">What a real DC family did with this</h1>
    <p style="color:#6b7280;font-size:15px;margin:0 0 20px">Hi ${name} &mdash; I want to share something with you.</p>

    <div style="background:#f9fafb;border-left:4px solid #d4a017;padding:20px 24px;border-radius:0 12px 12px 0;margin:0 0 24px">
      <p style="margin:0 0 12px;font-size:15px;color:#374151;font-style:italic">&ldquo;I always thought estate planning was something rich people did. After going through the courses, I realized I had a $400,000 gap in coverage and no will. We got both taken care of in one month. I feel like I can breathe now.&rdquo;</p>
      <p style="margin:0;font-size:13px;color:#9ca3af">&mdash; Marcus T., PG County, MD &mdash; LegacyShield Member</p>
    </div>

    <p style="color:#374151;font-size:15px;margin:0 0 16px">Marcus isn&apos;t unusual. He&apos;s a hard-working guy who just never had access to this information in plain language. That&apos;s exactly who LegacyShield is built for.</p>
    <p style="color:#374151;font-size:15px;margin:0 0 24px">The full course library is one step away. <strong>$39/month</strong> &mdash; cancel anytime. No long-term contracts, no fine print.</p>

    ${ctaButton('Start Full Access &rarr;', `${SITE}/subscribe`)}

    <p style="color:#9ca3af;font-size:13px;margin:0">Questions before you subscribe? Reply to this email.</p>
    <p style="color:#374151;font-size:14px;margin:8px 0 0"><strong>&mdash; Anthony</strong></p>`;

  return getResend().emails.send({
    from: FROM,
    to: email,
    subject: 'What a DC family did with LegacyShield (real story)',
    html: emailWrapper(body),
  });
}

// ─── 7. Lead Nurture Day 10 — Upgrade Offer with Urgency ────────────────────

export async function sendNurtureDay10Email({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const body = `
    <h1 style="color:#0a1628;font-size:22px;margin:0 0 8px">Last thing I&apos;ll say about this, ${name}</h1>
    <p style="color:#6b7280;font-size:15px;margin:0 0 20px">I&apos;ve sent you a couple of emails over the past week. This is the last one about upgrading &mdash; after this, I&apos;ll just keep sending you value.</p>

    <p style="color:#374151;font-size:15px;margin:0 0 16px">But I&apos;d be doing you a disservice if I didn&apos;t make this simple:</p>

    <div style="background:#0a1628;border-radius:16px;padding:28px;margin:0 0 24px;text-align:center">
      <p style="color:#d4a017;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 8px">Full Membership</p>
      <p style="color:white;font-size:36px;font-weight:800;margin:0 0 4px">$39<span style="font-size:18px;font-weight:400">/month</span></p>
      <p style="color:#9ca3af;font-size:14px;margin:0 0 20px">Cancel anytime. No contracts.</p>
      <ul style="color:#d1d5db;font-size:14px;text-align:left;padding-left:20px;margin:0 0 20px">
        <li style="margin-bottom:8px">&#10003; All 3 full courses (Life Insurance, Estate Planning, Wealth Playbook)</li>
        <li style="margin-bottom:8px">&#10003; Monthly live community workshops</li>
        <li style="margin-bottom:8px">&#10003; DC-specific resources and guides</li>
        <li>&#10003; Direct access to the LegacyShield community</li>
      </ul>
      <a href="${SITE}/subscribe" style="display:inline-block;background:#d4a017;color:#0a1628;font-weight:700;padding:14px 32px;border-radius:50px;text-decoration:none;font-size:15px">Get Full Access &rarr;</a>
    </div>

    <p style="color:#374151;font-size:14px;margin:0">If now&apos;s not the right time, that&apos;s okay. Your free account is always here when you&apos;re ready.</p>
    <p style="color:#374151;font-size:14px;margin:8px 0 0"><strong>&mdash; Anthony</strong></p>`;

  return getResend().emails.send({
    from: FROM,
    to: email,
    subject: `${name}, last thing I&apos;ll say about this &#128274;`,
    html: emailWrapper(body),
  });
}

// ─── 8. Workshop Announcement ────────────────────────────────────────────────

export async function sendWorkshopAnnouncementEmail({
  name,
  email,
  workshopTitle,
  workshopDate,
  workshopDescription,
  registrationUrl,
}: {
  name: string;
  email: string;
  workshopTitle: string;
  workshopDate: string;
  workshopDescription: string;
  registrationUrl: string;
}) {
  const body = `
    <h1 style="color:#0a1628;font-size:22px;margin:0 0 8px">New Workshop: ${workshopTitle}</h1>
    <p style="color:#6b7280;font-size:15px;margin:0 0 20px">Hi ${name} &mdash; our next live workshop is open for registration.</p>

    <div style="background:#fff7e6;border:2px solid #d4a017;border-radius:16px;padding:24px;margin:0 0 24px">
      <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#d4a017;text-transform:uppercase;letter-spacing:0.08em">Live Workshop</p>
      <p style="margin:0 0 8px;font-size:20px;font-weight:700;color:#0a1628">${workshopTitle}</p>
      <p style="margin:0 0 12px;font-size:15px;font-weight:700;color:#374151">&#128197; ${workshopDate}</p>
      <p style="margin:0;font-size:14px;color:#6b7280">${workshopDescription}</p>
    </div>

    <p style="color:#374151;font-size:15px;margin:0 0 16px">These sessions are <strong>limited to 30 seats</strong> so the Q&amp;A stays personal. Last workshop sold out in 48 hours.</p>
    <p style="color:#374151;font-size:15px;margin:0 0 24px">Members attend for <strong>$149</strong>. That&apos;s it. No upsells, no pressure &mdash; just 2 hours of real talk about protecting your family&apos;s financial future.</p>

    ${ctaButton('Reserve My Seat &rarr;', registrationUrl)}

    <p style="color:#9ca3af;font-size:13px;margin:0">Can&apos;t make it live? A recording is available to all registered attendees.</p>
    <p style="color:#374151;font-size:14px;margin:8px 0 0"><strong>&mdash; Anthony</strong></p>`;

  return getResend().emails.send({
    from: FROM,
    to: email,
    subject: `New Workshop: ${workshopTitle} &mdash; Reserve your seat`,
    html: emailWrapper(body),
  });
}

// ─── 9. Workshop Last Chance (48 hours before) ───────────────────────────────

export async function sendWorkshopLastChanceEmail({
  name,
  email,
  workshopTitle,
  workshopDate,
  seatsRemaining,
  registrationUrl,
}: {
  name: string;
  email: string;
  workshopTitle: string;
  workshopDate: string;
  seatsRemaining: number;
  registrationUrl: string;
}) {
  const body = `
    <h1 style="color:#0a1628;font-size:22px;margin:0 0 8px">${name}, only ${seatsRemaining} seats left</h1>
    <p style="color:#6b7280;font-size:15px;margin:0 0 20px">The <strong>${workshopTitle}</strong> workshop is in 48 hours &mdash; and seats are almost gone.</p>

    <div style="background:#fef2f2;border:2px solid #fca5a5;border-radius:12px;padding:20px;margin:0 0 24px;text-align:center">
      <p style="margin:0 0 4px;font-size:28px;font-weight:800;color:#dc2626">${seatsRemaining}</p>
      <p style="margin:0;font-size:14px;color:#6b7280">seats remaining out of 30</p>
    </div>

    <p style="color:#374151;font-size:15px;margin:0 0 24px"><strong>${workshopDate}</strong> &mdash; 2 hours, live Q&amp;A, real answers. $149 for members. This is the one where we go deep on the stuff the courses introduce.</p>

    ${ctaButton('Claim My Seat Now &rarr;', registrationUrl)}

    <p style="color:#9ca3af;font-size:13px;margin:0">After this, registration closes. A replay will be available for attendees only.</p>
    <p style="color:#374151;font-size:14px;margin:8px 0 0"><strong>&mdash; Anthony</strong></p>`;

  return getResend().emails.send({
    from: FROM,
    to: email,
    subject: `&#128680; Last chance: ${workshopTitle} &mdash; ${seatsRemaining} seats left`,
    html: emailWrapper(body),
  });
}

// ─── 10. Re-engagement Day 7 — "We Miss You" ────────────────────────────────

export async function sendReengagementDay7Email({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const body = `
    <h1 style="color:#0a1628;font-size:22px;margin:0 0 8px">We miss you, ${name}</h1>
    <p style="color:#6b7280;font-size:15px;margin:0 0 20px">It&apos;s been a week since you left LegacyShield. I just wanted to reach out personally.</p>

    <p style="color:#374151;font-size:15px;margin:0 0 16px">Life gets busy &mdash; I get it. But I want to make sure you didn&apos;t leave because something didn&apos;t work for you. If there&apos;s anything I can improve, I genuinely want to know.</p>
    <p style="color:#374151;font-size:15px;margin:0 0 24px">And if you&apos;re ready to come back, your account is here waiting. Everything you had access to before is still there.</p>

    ${ctaButton('Reactivate My Membership &rarr;', `${SITE}/subscribe`)}

    <p style="color:#9ca3af;font-size:13px;margin:0">Or just reply to this email and tell me what happened. I read every one.</p>
    <p style="color:#374151;font-size:14px;margin:8px 0 0"><strong>&mdash; Anthony Washington</strong><br><span style="color:#9ca3af;font-size:13px">Founder, LegacyShield</span></p>`;

  return getResend().emails.send({
    from: FROM,
    to: email,
    subject: `${name}, we miss you at LegacyShield`,
    html: emailWrapper(body),
  });
}

// ─── 11. Re-engagement Day 14 — "What Changed?" ─────────────────────────────

export async function sendReengagementDay14Email({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const body = `
    <h1 style="color:#0a1628;font-size:22px;margin:0 0 8px">Quick question, ${name}</h1>
    <p style="color:#6b7280;font-size:15px;margin:0 0 20px">I keep things direct &mdash; 25 years in law enforcement will do that to you.</p>

    <p style="color:#374151;font-size:15px;margin:0 0 16px">What made you cancel? I ask because every piece of feedback helps me build something better for the DC families who come after you.</p>

    <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:20px;margin:0 0 24px">
      <p style="margin:0 0 12px;font-size:14px;font-weight:700;color:#0a1628">Was it one of these?</p>
      <ul style="color:#6b7280;font-size:14px;padding-left:16px;margin:0">
        <li style="margin-bottom:6px">Price wasn&apos;t right for the budget</li>
        <li style="margin-bottom:6px">Didn&apos;t have time to use it</li>
        <li style="margin-bottom:6px">Wasn&apos;t what I expected</li>
        <li>Personal reasons</li>
      </ul>
    </div>

    <p style="color:#374151;font-size:15px;margin:0 0 24px">Just reply to this email with your honest answer. No sales pitch, I promise. And if you&apos;re ever ready to come back, you&apos;ll always be welcome.</p>

    <p style="color:#374151;font-size:14px;margin:0"><strong>&mdash; Anthony</strong></p>`;

  return getResend().emails.send({
    from: FROM,
    to: email,
    subject: `Honest question for you, ${name}`,
    html: emailWrapper(body),
  });
}

// ─── 12. Re-engagement Day 30 — Win-Back Offer ──────────────────────────────

export async function sendReengagementDay30Email({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const body = `
    <h1 style="color:#0a1628;font-size:22px;margin:0 0 8px">One last thing, ${name}</h1>
    <p style="color:#6b7280;font-size:15px;margin:0 0 20px">It&apos;s been a month. I&apos;m not going to keep filling your inbox &mdash; but I want to leave the door open one more time.</p>

    <div style="background:#0a1628;border-radius:16px;padding:28px;margin:0 0 24px;text-align:center">
      <p style="color:#d4a017;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 8px">Come Back Offer</p>
      <p style="color:white;font-size:22px;font-weight:700;margin:0 0 8px">First month back &mdash; on us</p>
      <p style="color:#9ca3af;font-size:14px;margin:0 0 20px">Rejoin at $39/month. No commitment. Cancel anytime.</p>
      <a href="${SITE}/subscribe" style="display:inline-block;background:#d4a017;color:#0a1628;font-weight:700;padding:14px 32px;border-radius:50px;text-decoration:none;font-size:15px">Rejoin LegacyShield &rarr;</a>
    </div>

    <p style="color:#374151;font-size:14px;margin:0">Your family&apos;s financial future is worth 15 minutes a week. Whenever you&apos;re ready, we&apos;ll be here.</p>
    <p style="color:#374151;font-size:14px;margin:8px 0 0"><strong>&mdash; Anthony Washington</strong><br><span style="color:#9ca3af;font-size:13px">Founder, LegacyShield &mdash; Built for DC Families</span></p>`;

  return getResend().emails.send({
    from: FROM,
    to: email,
    subject: `${name} &mdash; one last thing from LegacyShield`,
    html: emailWrapper(body),
  });
}

// ─── 13. Payment Failed ───────────────────────────────────────────────────────

export async function sendPaymentFailedEmail({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const body = `
    <h1 style="color:#0a1628;font-size:22px;margin:0 0 8px">Action needed, ${name}</h1>
    <p style="color:#6b7280;font-size:15px;margin:0 0 20px">We weren&apos;t able to process your latest payment. Your membership is temporarily paused.</p>

    <div style="background:#fef2f2;border:1px solid #fca5a5;border-radius:12px;padding:20px;margin:0 0 24px">
      <p style="margin:0;font-size:14px;color:#374151">&#9888;&#65039; <strong>Your access is paused.</strong> Update your payment method to restore full access to your courses and community.</p>
    </div>

    ${ctaButton('Update Payment Method &rarr;', `${SITE}/dashboard/account`)}

    <p style="color:#9ca3af;font-size:13px;margin:0">Need help? Reply to this email and we&apos;ll sort it out together. It happens to everyone.</p>
    <p style="color:#374151;font-size:14px;margin:8px 0 0"><strong>&mdash; Anthony</strong></p>`;

  return getResend().emails.send({
    from: FROM,
    to: email,
    subject: 'Action needed: Update your LegacyShield payment method',
    html: emailWrapper(body),
  });
}
