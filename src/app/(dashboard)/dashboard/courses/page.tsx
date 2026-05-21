import Link from 'next/link';

const courses = [
  {
    id: 1, icon: '🛡️', title: 'Life Insurance 101', lessons: 6,
    description: 'Learn the difference between term and whole life, how much coverage you actually need, and how to stop overpaying. No agent. No pressure.',
    topics: ['What is life insurance?', 'Term vs. Whole Life', 'How much coverage do I need?', 'How to compare quotes', 'Common mistakes to avoid', 'When to review your policy'],
    duration: '45 min', level: 'Beginner',
  },
  {
    id: 2, icon: '📋', title: 'Estate Planning Basics', lessons: 5,
    description: 'Wills, trusts, beneficiaries, power of attorney — explained simply. Protect what you\'ve built so your family keeps it.',
    topics: ['Why you need a will', 'Trusts explained simply', 'Beneficiary designations', 'Power of attorney', 'Where to start today'],
    duration: '40 min', level: 'Beginner',
  },
  {
    id: 3, icon: '💰', title: 'Generational Wealth Playbook', lessons: 7,
    description: 'Real strategies for DC working families to start building wealth that outlasts them. Not Wall Street theory — practical steps you can take this week.',
    topics: ['The wealth gap explained', 'Starting with $0', 'Index funds & retirement accounts', 'Real estate 101', 'Teaching your kids about money', 'Credit and debt strategy', 'Building a family wealth plan'],
    duration: '60 min', level: 'Intermediate',
  },
  {
    id: 4, icon: '🏠', title: 'Protecting Your Family', lessons: 4,
    description: 'Power of attorney, guardianship, and family protection planning. Make sure your family is covered if something happens to you.',
    topics: ['Healthcare proxy & medical decisions', 'Guardianship for your children', 'Financial power of attorney', 'Emergency family planning checklist'],
    duration: '30 min', level: 'Beginner',
  },
  {
    id: 5, icon: '🏦', title: 'Banking & Credit Foundations', lessons: 5,
    description: 'Build your credit score, eliminate predatory debt, and set up a banking foundation that works for your family.',
    topics: ['Understanding your credit score', 'How to dispute errors', 'Debt payoff strategies', 'Choosing the right bank accounts', 'Emergency fund basics'],
    duration: '35 min', level: 'Beginner',
  },
  {
    id: 6, icon: '📊', title: 'DC Family Budget Blueprint', lessons: 4,
    description: 'A budgeting framework built for DMV Area cost of living — not generic finance advice that ignores where you actually live.',
    topics: ['DC cost of living reality check', 'The 50/30/20 rule adjusted for DC', 'Tools to track spending', 'Monthly family budget template'],
    duration: '25 min', level: 'Beginner',
  },
];

const levelColor: Record<string, string> = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-yellow-100 text-yellow-700',
  Advanced: 'bg-red-100 text-red-700',
};

export default function CoursesPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0a1628] mb-2">Course Library</h1>
        <p className="text-gray-500">Everything your family needs to know about money, protection, and legacy.</p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {courses.map(course => (
          <div key={course.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:border-[#d4a017]/30 hover:shadow-md transition-all flex flex-col">
            <div className="p-6 flex-1">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="text-4xl">{course.icon}</div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ${levelColor[course.level] ?? 'bg-gray-100 text-gray-600'}`}>
                  {course.level}
                </span>
              </div>
              <h3 className="font-bold text-[#0a1628] text-lg mb-2">{course.title}</h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">{course.description}</p>
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-5">
                <span>🎓 {course.lessons} lessons</span>
                <span>⏱️ {course.duration}</span>
              </div>
              <ul className="space-y-1.5">
                {course.topics.slice(0, 3).map((topic, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-[#d4a017] font-bold text-xs">▸</span> {topic}
                  </li>
                ))}
                {course.topics.length > 3 && (
                  <li className="text-xs text-gray-400 pl-4">+ {course.topics.length - 3} more topics</li>
                )}
              </ul>
            </div>
            <div className="px-6 pb-6">
              <button className="w-full bg-[#0a1628] hover:bg-[#1a3a5c] text-white font-semibold py-3 rounded-full text-sm transition-colors">
                Start Course →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
