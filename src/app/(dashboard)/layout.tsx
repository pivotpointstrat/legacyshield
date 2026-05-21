import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';
import Link from 'next/link';

const navItems = [
  { href: '/dashboard', label: '🏠 Home', exact: true },
  { href: '/dashboard/courses', label: '📚 Courses' },
  { href: '/dashboard/workshops', label: '🤝 Workshops' },
  { href: '/dashboard/account', label: '⚙️ Account' },
];

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/login');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0a1628] min-h-screen flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-[#1a3a5c]">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#d4a017] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-[#0a1628] font-bold">L</span>
            </div>
            <span className="text-white font-bold text-base tracking-tight whitespace-nowrap">LegacyShield Pro</span>
          </Link>
        </div>
        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(item => (
            <Link key={item.href} href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-[#1a3a5c] transition-colors text-sm font-medium">
              {item.label}
            </Link>
          ))}
        </nav>
        {/* User + Logout */}
        <div className="p-4 border-t border-[#1a3a5c]">
          <div className="px-4 py-3 mb-2">
            <p className="text-white text-sm font-medium truncate">{session.user?.name}</p>
            <p className="text-gray-400 text-xs truncate">{session.user?.email}</p>
          </div>
          <Link href="/api/auth/signout"
            className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-red-400 transition-colors text-sm rounded-xl hover:bg-red-900/20">
            🚪 Sign Out
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
