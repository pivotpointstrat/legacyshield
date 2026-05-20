'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const res = await signIn('credentials', { email, password, redirect: false });
    setLoading(false);
    if (res?.ok) {
      router.push('/dashboard');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="bg-[#0f2040] border border-[#1a3a5c] rounded-2xl p-8">
      <h1 className="text-2xl font-bold text-white mb-2">Welcome back</h1>
      <p className="text-gray-400 text-sm mb-8">Sign in to your LegacyShield account</p>
      {error && (
        <div className="bg-red-900/30 border border-red-500/40 text-red-300 text-sm px-4 py-3 rounded-xl mb-6">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Email address</label>
          <input
            type="email" value={email} onChange={e => setEmail(e.target.value)} required
            className="w-full bg-[#0a1628] border border-[#1a3a5c] text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017]"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
          <input
            type="password" value={password} onChange={e => setPassword(e.target.value)} required
            className="w-full bg-[#0a1628] border border-[#1a3a5c] text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-[#d4a017] focus:ring-1 focus:ring-[#d4a017]"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit" disabled={loading}
          className="w-full bg-[#d4a017] hover:bg-[#b8860b] disabled:opacity-60 text-[#0a1628] font-bold py-3 rounded-full transition-colors text-sm"
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
      <p className="text-gray-400 text-sm text-center mt-6">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="text-[#d4a017] hover:text-[#f5c842] font-medium">Create one free</Link>
      </p>
    </div>
  );
}
