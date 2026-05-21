import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import Link from 'next/link';
import UpgradeButton from '@/components/UpgradeButton';

const courses = [
  { id: 1, title: 'Life Insurance 101', icon: '🛡️', lessons: 6, completed: 0, description: 'Learn what you need, what to avoid, and how to stop overpaying.' },
  { id: 2, title: 'Estate Planning Basics', icon: '📋', lessons: 5, completed: 0, description: 'Wills, trusts, beneficiaries — explained simply.' },
  { id: 3, title: 'Generational Wealth Playbook', icon: '💰', lessons: 7, completed: 0, description: 'Real strategies for DC working families.' },
  { id: 4, title: 'Protecting Your Family', icon: '🏠', lessons: 4, completed: 0, description: 'Power of attorney, guardianship, and family protection planning.' },
];

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const firstName = session?.user?.name?.split(' ')[0] ?? 'Member';
  const subscriptionStatus = (session?.user as any)?.subscriptionStatus;
  const plan = (session?.user as any)?.plan;
  const isActive = subscriptionStatus === 'active';

  return (
    <div>
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0a1628] mb-2">Welcome back, {firstName} 👋</h1>
        <p className="text-gray-500">Your family&apos;s financial future starts here. Keep building.</p>
      </div>

      {/* Upgrade Banner — show if not subscribed */}
      {!isActive && (
        <div className="bg-gradient-to-r from-[#0a1628] to-[#1a3a5c] rounded-2xl p-8 mb-8 border border-[#d4a017]/20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-[#d4a017] text-xs font-bold uppercase tracking-widest mb-2">🔓 Unlock Full Access</div>
              <h2 className="text-2xl font-bold text-white mb-2">Start Your Membership</h2>
              <p className="text-gray-300 text-sm max-w-lg">
                Get full access to all 6 courses, monthly workshops, attorney Q&A, and everything your family needs to build lasting wealth.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <UpgradeButton
                plan="community"
                label="Community — $39/mo"
                className="bg-white text-[#0a1628] font-bold px-6 py-3 rounded-full text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
              />
              <UpgradeButton
                plan="legacy_builder"
                label="Legacy Builder — $99/mo"
                className="bg-[#d4a017] hover:bg-[#b8860b] text-[#0a1628] font-bold px-6 py-3 rounded-full text-sm transition-colors whitespace-nowrap"
              />
            </div>
          </div>
        </div>
      )}

      {/* Active subscription banner */}
      {isActive && (
        <div className="bg-green-50 border border-green-200 rounded-2xl px-6 py-4 mb-8 flex items-center gap-3">
          <span className="text-green-500 text-xl">✅</span>
          <div>
            <p className="text-green-800 font-semibold text-sm">Active Member — {plan === 'legacy_builder' ? 'Legacy Builder' : 'Community'} Plan</p>
            <p className="text-green-600 text-xs">You have full access to all courses and resources.</p>
          </div>
        </div>
      )}

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Courses Available', value: '6', icon: '📚' },
          { label: 'Lessons Completed', value: '0', icon: '✅' },
          { label: 'Next Workshop', value: 'Jun 7', icon: '🤝' },
          { label: 'Your Plan', value: isActive ? (plan === 'legacy_builder' ? 'Legacy Builder' : 'Community') : 'Free', icon: '🌟' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-[#0a1628] mb-1">{stat.value}</div>
            <div className="text-gray-500 text-xs font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Start Here Banner */}
      <div className="bg-[#0a1628] rounded-2xl p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-[#d4a017] text-xs font-bold uppercase tracking-widest mb-2">Recommended First Step</div>
          <h2 className="text-2xl font-bold text-white mb-2">Start with Life Insurance 101</h2>
          <p className="text-gray-300 text-sm max-w-lg">56% of DC families are underinsured. This course teaches you exactly how much coverage you need — in under 45 minutes.</p>
        </div>
        <Link href="/dashboard/courses"
          className="bg-[#d4a017] hover:bg-[#b8860b] text-[#0a1628] font-bold px-8 py-4 rounded-full text-sm transition-colors whitespace-nowrap flex-shrink-0">
          Start Learning →
        </Link>
      </div>

      {/* Course Grid */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-[#0a1628]">Your Courses</h2>
          <Link href="/dashboard/courses" className="text-[#d4a017] hover:text-[#b8860b] text-sm font-medium">View all →</Link>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {courses.map(course => (
            <Link key={course.id} href="/dashboard/courses"
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#d4a017]/30 hover:shadow-md transition-all group">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{course.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#0a1628] mb-1 group-hover:text-[#d4a017] transition-colors">{course.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{course.lessons} lessons</span>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-24 bg-gray-100 rounded-full">
                        <div className="h-1.5 bg-[#d4a017] rounded-full" style={{ width: `${(course.completed / course.lessons) * 100}%` }} />
                      </div>
                      <span className="text-xs text-gray-400">{course.completed}/{course.lessons}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
