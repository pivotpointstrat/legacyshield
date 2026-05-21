'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Signup failed'); setLoading(false); return; }
      // Auto sign in
      const signInRes = await signIn('credentials', { email: form.email, password: form.password, redirect: false });
      if (signInRes?.ok) router.push('/dashboard');
      else { setError('Account created but sign in failed. Please log in.'); router.push('/login'); }
    } catch {
      setError('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="bg-[#0f2040] border border-[#1a3a5c] rounded-2xl p-8">
      <h1 className="text-2xl font-bold text-white mb-2">Create your account</h1>
      <p className="text-gray-400 text-sm mb-8">Start protecting your family&apos;s legacy today</p>
      {error && (
        <div className="bg-red-900/30 border border-red-500/40 text-red-300 text-sm px-4 py-3 rounded-xl mb-6">{error}</div>
      )}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Full name</label>
          <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required
            className="w-full bg-[#0a1628] border border-[#1a3a5c] text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017]"
            placeholder="Enter Your Full Name" />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Email address</label>
          <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required
            className="w-full bg-[#0a1628] border border-[#1a3a5c] text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017]"
            placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
          <input type="password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} required minLength={6}
            className="w-full bg-[#0a1628] border border-[#1a3a5c] text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017]"
            placeholder="Minimum 6 characters" />
        </div>
        <button type="submit" disabled={loading}
          className="w-full bg-[#d4a017] hover:bg-[#b8860b] disabled:opacity-60 text-[#0a1628] font-bold py-3 rounded-full transition-colors text-sm">
          {loading ? 'Creating account...' : 'Create Account — Free'}
        </button>
      </form>
      <p className="text-gray-400 text-sm text-center mt-6">
        Already have an account?{' '}
        <Link href="/login" className="text-[#d4a017] hover:text-[#f5c842] font-medium">Sign in</Link>
      </p>
    </div>
  );
}
