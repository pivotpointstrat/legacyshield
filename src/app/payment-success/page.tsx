'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { trackSubscriptionActivated } from '@/lib/analytics';

function PaymentSuccessContent() {
  const { update, data: session } = useSession();
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get('session_id');
  const [status, setStatus] = useState<'activating' | 'done' | 'error'>('activating');
  const [message, setMessage] = useState('Confirming your payment...');

  useEffect(() => {
    if (!sessionId) {
      router.replace('/subscribe');
      return;
    }

    const activate = async () => {
      try {
        setMessage('Activating your membership...');

        // Step 1: Activate subscription in MongoDB
        const res = await fetch('/api/stripe/activate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId }),
        });

        if (!res.ok) {
          const data = await res.json();
          console.error('[payment-success] activate failed:', data.error);
          // Still proceed — webhook may have already activated
        }

        // Step 2: Force NextAuth session refresh
        setMessage('Setting up your dashboard...');
        await update();

        // Step 3: Fire GA4 purchase event
        const plan = (session?.user as { plan?: string })?.plan ?? 'community';
        const value = plan === 'legacy_builder' ? 1 : 1; // $1 first month
        trackSubscriptionActivated(plan, value);

        // Step 4: Redirect to dashboard
        setStatus('done');
        setMessage('Welcome to LegacyShield! Redirecting to your dashboard...');

        setTimeout(() => {
          router.replace('/dashboard');
        }, 1500);

      } catch (err) {
        console.error('[payment-success] error:', err);
        setStatus('done');
        router.replace('/dashboard');
      }
    };

    activate();
  }, [sessionId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        {/* Animated icon */}
        <div className="mb-8">
          {status === 'activating' ? (
            <div className="w-20 h-20 mx-auto rounded-full border-4 border-[#d4a017]/30 border-t-[#d4a017] animate-spin" />
          ) : (
            <div className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
              <span className="text-4xl">✅</span>
            </div>
          )}
        </div>

        {/* LegacyShield logo */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-8 bg-[#d4a017] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-[#0a1628] font-bold text-sm">L</span>
          </div>
          <span className="text-white font-bold text-lg">LegacyShield Pro</span>
        </div>

        <h1 className="text-2xl font-bold text-white mb-3">
          {status === 'done' ? 'Payment Successful! 🎉' : 'Processing Payment...'}
        </h1>
        <p className="text-gray-400 text-sm">{message}</p>

        {status === 'done' && (
          <div className="mt-8 bg-[#d4a017]/10 border border-[#d4a017]/20 rounded-2xl p-5">
            <p className="text-[#d4a017] text-sm font-semibold mb-1">Your first month: $1 ✓</p>
            <p className="text-gray-400 text-xs">Full access to all courses, workshops, and resources.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0a1628] flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-[#d4a017]/30 border-t-[#d4a017] animate-spin" />
      </div>
    }>
      <PaymentSuccessContent />
    </Suspense>
  );
}
