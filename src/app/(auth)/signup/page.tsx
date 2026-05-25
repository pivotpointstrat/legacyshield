'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

// Eye icon components
function EyeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.641 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
  );
}

function SignupForm() {
  const searchParams = useSearchParams();
  const plan = (searchParams.get('plan') || 'community') as 'community' | 'legacy_builder';
  const planLabel = plan === 'legacy_builder' ? 'Legacy Builder — $1 First Month' : 'Community — $1 First Month';

  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate passwords match
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match. Please try again.');
      return;
    }

    setLoading(true);
    setStatus('creating');

    try {
      // Step 1: Create account
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, password: form.password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Signup failed');
        setLoading(false);
        setStatus('idle');
        return;
      }

      // Step 2: Auto sign in
      setStatus('signing_in');
      const signInRes = await signIn('credentials', {
        email: form.email,
        password: form.password,
        redirect: false,
      });

      if (!signInRes?.ok) {
        setError('Account created but sign in failed. Please log in.');
        setLoading(false);
        setStatus('idle');
        return;
      }

      // Step 3: Create Stripe checkout session and redirect
      setStatus('redirecting');
      const checkoutRes = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      });
      const checkoutData = await checkoutRes.json();

      if (!checkoutRes.ok || !checkoutData.url) {
        setError(checkoutData.error || 'Failed to start checkout. Please try again.');
        setLoading(false);
        setStatus('idle');
        return;
      }

      window.location.href = checkoutData.url;

    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
      setStatus('idle');
    }
  };

  const statusLabel: Record<string, string> = {
    idle: 'Create Account & Pay $1',
    creating: 'Creating your account...',
    signing_in: 'Signing you in...',
    redirecting: 'Taking you to checkout...',
  };

  return (
    <div className="bg-[#0f2040] border border-[#1a3a5c] rounded-2xl p-8">
      {/* Plan badge */}
      <div className="inline-flex items-center gap-2 bg-[#d4a017]/20 border border-[#d4a017]/30 rounded-full px-4 py-1.5 mb-6">
        <span className="text-[#d4a017] text-xs font-bold">🎯 {planLabel}</span>
      </div>

      <h1 className="text-2xl font-bold text-white mb-2">Create your account</h1>
      <p className="text-gray-400 text-sm mb-8">One step away from protecting your family&apos;s legacy</p>

      {error && (
        <div className="bg-red-900/30 border border-red-500/40 text-red-300 text-sm px-4 py-3 rounded-xl mb-6">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Full name</label>
          <input
            type="text"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
            autoComplete="off"
            className="w-full bg-[#0a1628] border border-[#1a3a5c] text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017]"
            placeholder="Enter Your Full Name"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Email address</label>
          <input
            type="email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
            autoComplete="off"
            className="w-full bg-[#0a1628] border border-[#1a3a5c] text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017]"
            placeholder="you@example.com"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              required
              minLength={6}
              autoComplete="new-password"
              className="w-full bg-[#0a1628] border border-[#1a3a5c] text-white px-4 py-3 pr-11 rounded-xl text-sm focus:outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017]"
              placeholder="Minimum 6 characters"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#d4a017] transition-colors"
              tabIndex={-1}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Confirm password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={form.confirmPassword}
              onChange={e => setForm({ ...form, confirmPassword: e.target.value })}
              required
              minLength={6}
              autoComplete="new-password"
              className={`w-full bg-[#0a1628] border text-white px-4 py-3 pr-11 rounded-xl text-sm focus:outline-none focus:ring-1 transition-colors ${
                form.confirmPassword && form.password !== form.confirmPassword
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : form.confirmPassword && form.password === form.confirmPassword
                  ? 'border-green-500 focus:border-green-500 focus:ring-green-500'
                  : 'border-[#1a3a5c] focus:border-[#d4a017] focus:ring-[#d4a017]'
              }`}
              placeholder="Re-enter your password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#d4a017] transition-colors"
              tabIndex={-1}
            >
              {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
            {/* Match indicator */}
            {form.confirmPassword && (
              <span className={`absolute right-10 top-1/2 -translate-y-1/2 text-xs font-medium ${
                form.password === form.confirmPassword ? 'text-green-400' : 'text-red-400'
              }`}>
                {form.password === form.confirmPassword ? '✓' : '✗'}
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#d4a017] hover:bg-[#b8860b] disabled:opacity-60 text-[#0a1628] font-bold py-3 rounded-full transition-colors text-sm"
        >
          {statusLabel[status]}
        </button>
      </form>

      <p className="text-gray-500 text-xs text-center mt-4">
        $1 today · Then {plan === 'legacy_builder' ? '$99' : '$39'}/month · Cancel anytime
      </p>

      <p className="text-gray-400 text-sm text-center mt-6">
        Already have an account?{' '}
        <Link href="/login" className="text-[#d4a017] hover:text-[#f5c842] font-medium">Sign in</Link>
      </p>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="bg-[#0f2040] border border-[#1a3a5c] rounded-2xl p-8 text-white">Loading...</div>}>
      <SignupForm />
    </Suspense>
  );
}
