import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-[#d4a017] rounded-full flex items-center justify-center">
              <span className="text-[#0a1628] font-bold text-lg">L</span>
            </div>
            <span className="text-white font-bold text-2xl tracking-tight">LegacyShield Pro</span>
          </Link>
          <p className="text-gray-400 text-sm">Protect Your Family. Build Your Legacy.</p>
        </div>
        {children}
      </div>
    </div>
  );
}
