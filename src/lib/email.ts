import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = 'LegacyShield <hello@legacyshieldpro.com>';
const SITE = 'https://legacyshieldpro.com';

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

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%">

        <!-- Header -->
        <tr><td style="background:#0a1628;padding:32px 40px;border-radius:16px 16px 0 0;text-align:center">
          <div style="display:inline-flex;align-items:center;gap:12px">
            <div style="width:40px;height:40px;background:#d4a017;border-radius:50%;display:inline-flex;align-items:center;justify-content:center">
              <span style="color:#0a1628;font-weight:bold;font-size:18px">L</span>
            </div>
            <span style="color:white;font-size:22px;font-weight:700">§§secret(§§secret(MONGODB+SRV://MINT72SEYLA:ANDBUX9HKQRO5K90@LEGACYSHIELD.MHL1TQV.MONGODB.NET/?APPNAME)</span>
          </div>
        </td></tr>

        <!-- Body -->
        <tr><td style="background:white;padding:40px;border-radius:0 0 16px 16px">
          <h1 style="color:#0a1628;font-size:24px;margin:0 0 8px">Welcome to the family, ${name}! 🎉</h1>
          <p style="color:#6b7280;font-size:15px;margin:0 0 24px">You&apos;re now a <strong style="color:#d4a017">${planLabel}</strong> member at <strong>${planPrice}</strong>. Your family&apos;s legacy starts here.</p>

          <!-- Plan badge -->
          <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:20px;margin:0 0 28px">
            <p style="margin:0 0 4px;font-size:12px;font-weight:700;color:#d4a017;text-transform:uppercase;letter-spacing:0.05em">Your Plan</p>
            <p style="margin:0;font-size:18px;font-weight:700;color:#0a1628">${planLabel} — ${planPrice}</p>
          </div>

          <p style="color:#374151;font-size:15px;margin:0 0 8px"><strong>What&apos;s waiting for you:</strong></p>
          <ul style="color:#6b7280;font-size:14px;padding-left:20px;margin:0 0 28px">
            <li style="margin-bottom:6px">📚 Full access to all 6 financial literacy courses</li>
            <li style="margin-bottom:6px">🛡️ Life Insurance 101 — start here first</li>
            <li style="margin-bottom:6px">📋 Estate Planning Basics — protect what you&apos;ve built</li>
            <li style="margin-bottom:6px">💰 Generational Wealth Playbook — real strategies for DC families</li>
            <li style="margin-bottom:6px">🤝 Monthly community workshops</li>
            ${plan === 'legacy_builder' ? '<li style="margin-bottom:6px">⚖️ Attorney Q&amp;A sessions (Legacy Builder exclusive)</li>' : ''}
          </ul>

          <a href="${SITE}/dashboard" style="display:block;background:#d4a017;color:#0a1628;font-weight:700;text-align:center;padding:16px;border-radius:50px;text-decoration:none;font-size:15px;margin:0 0 28px">Go to Your Dashboard →</a>

          <hr style="border:none;border-top:1px solid #e5e7eb;margin:0 0 24px">
          <p style="color:#9ca3af;font-size:13px;margin:0">Questions? Reply to this email — we&apos;re here to help. Built for DC families, by someone who lives and breathes this community.</p>
          <p style="color:#9ca3af;font-size:13px;margin:8px 0 0">— The §§secret(§§secret(MONGODB+SRV://MINT72SEYLA:ANDBUX9HKQRO5K90@LEGACYSHIELD.MHL1TQV.MONGODB.NET/?APPNAME) Team</p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:20px;text-align:center">
          <p style="color:#9ca3af;font-size:12px;margin:0">§§secret(§§secret(MONGODB+SRV://MINT72SEYLA:ANDBUX9HKQRO5K90@LEGACYSHIELD.MHL1TQV.MONGODB.NET/?APPNAME) · Washington DC Metro Area</p>
          <p style="color:#9ca3af;font-size:12px;margin:4px 0 0"><a href="${SITE}" style="color:#d4a017;text-decoration:none">legacyshieldpro.com</a></p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  return resend.emails.send({
    from: FROM,
    to: email,
    subject: `Welcome to LegacyShield, ${name}! Your ${planLabel} membership is active 🎉`,
    html,
  });
}

export async function sendPaymentFailedEmail({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:white;border-radius:16px;overflow:hidden">
        <tr><td style="background:#0a1628;padding:28px 40px;text-align:center">
          <span style="color:white;font-size:20px;font-weight:700">§§secret(§§secret(MONGODB+SRV://MINT72SEYLA:ANDBUX9HKQRO5K90@LEGACYSHIELD.MHL1TQV.MONGODB.NET/?APPNAME)</span>
        </td></tr>
        <tr><td style="padding:40px">
          <h1 style="color:#0a1628;font-size:22px;margin:0 0 12px">Action needed, ${name}</h1>
          <p style="color:#6b7280;font-size:15px;margin:0 0 24px">We weren&apos;t able to process your latest payment. Your membership is temporarily paused.</p>
          <a href="${SITE}/dashboard/account" style="display:block;background:#d4a017;color:#0a1628;font-weight:700;text-align:center;padding:16px;border-radius:50px;text-decoration:none;font-size:15px;margin:0 0 24px">Update Payment Method →</a>
          <p style="color:#9ca3af;font-size:13px;margin:0">Need help? Reply to this email and we&apos;ll sort it out together.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  return resend.emails.send({
    from: FROM,
    to: email,
    subject: 'Action needed: Update your LegacyShield payment method',
    html,
  });
}
