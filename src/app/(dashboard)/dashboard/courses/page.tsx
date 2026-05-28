'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const courses = [
  {
    id: 'life-insurance-101',
    icon: '🛡️',
    title: 'Life Insurance 101',
    totalLessons: 6,
    description: 'Learn the difference between term and whole life, how much coverage you actually need, and how to stop overpaying. No agent. No pressure.',
    topics: ['What is life insurance?', 'Term vs. Whole Life', 'How much coverage do I need?', 'How to compare quotes', 'Common mistakes to avoid', 'When to review your policy'],
    duration: '45 min',
    level: 'Beginner',
    href: '/dashboard/courses/life-insurance-101',
    firstLessonHref: '/dashboard/courses/life-insurance-101/lesson/1',
  },
  {
    id: 'estate-planning-basics',
    icon: '📋',
    title: 'Estate Planning Basics',
    totalLessons: 5,
    description: "Wills, trusts, beneficiaries, power of attorney — explained simply. Protect what you've built so your family keeps it.",
    topics: ['Why you need a will', 'Trusts explained simply', 'Beneficiary designations', 'Power of attorney', 'Where to start today'],
    duration: '40 min',
    level: 'Beginner',
    href: '/dashboard/courses/estate-planning-basics',
    firstLessonHref: '/dashboard/courses/estate-planning-basics/lesson/1',
  },
  {
    id: 'generational-wealth-playbook',
    icon: '💰',
    title: 'Generational Wealth Playbook',
    totalLessons: 7,
    description: 'Real strategies for DC working families to start building wealth that outlasts them. Not Wall Street theory — practical steps you can take this week.',
    topics: ['The wealth gap explained', 'Starting with $0', 'Index funds & retirement accounts', 'Real estate 101', 'Teaching your kids about money', 'Credit and debt strategy', 'Building a family wealth plan'],
    duration: '60 min',
    level: 'Intermediate',
    href: '/dashboard/courses/generational-wealth-playbook',
    firstLessonHref: '/dashboard/courses/generational-wealth-playbook/lesson/1',
  },
  {
    id: 'protecting-your-family',
    icon: '🏠',
    title: 'Protecting Your Family',
    totalLessons: 4,
    description: 'Power of attorney, guardianship, and family protection planning. Make sure your family is covered if something happens to you.',
    topics: ['Healthcare proxy & medical decisions', 'Guardianship for your children', 'Financial power of attorney', 'Your complete family protection plan'],
    duration: '30 min',
    level: 'Beginner',
    href: '/dashboard/courses/protecting-your-family',
    firstLessonHref: '/dashboard/courses/protecting-your-family/lesson/1',
  },
  {
    id: 'banking-credit-foundations',
    icon: '🏦',
    title: 'Banking & Credit Foundations',
    totalLessons: 5,
    description: 'Build your credit score, eliminate predatory debt, and set up a banking foundation that works for your family.',
    topics: ['Understanding your credit score', 'How to dispute errors', 'Debt payoff strategies', 'Choosing the right bank accounts', 'Building your banking foundation'],
    duration: '35 min',
    level: 'Beginner',
    href: '/dashboard/courses/banking-credit-foundations',
    firstLessonHref: '/dashboard/courses/banking-credit-foundations/lesson/1',
  },
  {
    id: 'dc-family-budget-blueprint',
    icon: '📊',
    title: 'DC Family Budget Blueprint',
    totalLessons: 4,
    description: 'A budgeting framework built for DMV Area cost of living — not generic finance advice that ignores where you actually live.',
    topics: ['DC cost of living reality check', 'The 50/30/20 rule adjusted for DC', 'Tools to track spending', 'Your 30-day DC budget action plan'],
    duration: '25 min',
    level: 'Beginner',
    href: '/dashboard/courses/dc-family-budget-blueprint',
    firstLessonHref: '/dashboard/courses/dc-family-budget-blueprint/lesson/1',
  },
];

const levelColor: Record<string, string> = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-yellow-100 text-yellow-700',
  Advanced: 'bg-red-100 text-red-700',
};

interface CompletedLesson {
  courseId: string;
  lessonId: number;
}

export default function CoursesPage() {
  const [completedLessons, setCompletedLessons] = useState<CompletedLesson[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch('/api/progress')
      .then((r) => r.json())
      .then((data) => {
        setCompletedLessons(data.completedLessons ?? []);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  // Get completed count for a specific course
  const getCompletedCount = (courseId: string) =>
    completedLessons.filter((l) => l.courseId === courseId).length;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0a1628] mb-2">Course Library</h1>
        <p className="text-gray-500">Everything your family needs to know about money, protection, and legacy.</p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {courses.map((course, idx) => {
          const completedCount = course.id ? getCompletedCount(course.id) : 0;
          const isStarted = completedCount > 0;
          const isCompleted = course.id !== null && completedCount === course.totalLessons;
          const progressPct = course.id ? Math.round((completedCount / course.totalLessons) * 100) : 0;

          return (
            <div
              key={idx}
              className={`bg-white rounded-2xl border shadow-sm overflow-hidden transition-all flex flex-col ${
                isCompleted
                  ? 'border-green-300 shadow-green-50'
                  : isStarted
                  ? 'border-[#d4a017]/40 hover:border-[#d4a017]/60 hover:shadow-md'
                  : 'border-gray-100 hover:border-[#d4a017]/30 hover:shadow-md'
              }`}
            >
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="text-4xl">{course.icon}</div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ${levelColor[course.level] ?? 'bg-gray-100 text-gray-600'}`}>
                      {course.level}
                    </span>
                    {isCompleted && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-100 text-green-700 flex items-center gap-1">
                        ✅ Completed
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="font-bold text-[#0a1628] text-lg mb-2">{course.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{course.description}</p>

                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <span>🎓 {course.totalLessons} lessons</span>
                  <span>⏱️ {course.duration}</span>
                  {isStarted && !isCompleted && (
                    <span className="text-[#d4a017] font-semibold">{completedCount}/{course.totalLessons} done</span>
                  )}
                </div>

                {/* Progress bar for started courses */}
                {course.id && loaded && isStarted && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-500">
                        {isCompleted ? 'Course complete!' : 'In progress'}
                      </span>
                      <span className="text-xs font-bold text-[#d4a017]">{progressPct}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          isCompleted ? 'bg-green-500' : 'bg-[#d4a017]'
                        }`}
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                  </div>
                )}

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
                {course.href ? (
                  isCompleted ? (
                    <Link
                      href={course.href}
                      className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full text-sm transition-colors text-center"
                    >
                      ✅ Review Course
                    </Link>
                  ) : isStarted ? (
                    <Link
                      href={course.href}
                      className="block w-full bg-[#d4a017] hover:bg-[#b8860b] text-[#0a1628] font-semibold py-3 rounded-full text-sm transition-colors text-center"
                    >
                      Continue Course →
                    </Link>
                  ) : (
                    <Link
                      href={course.href}
                      className="block w-full bg-[#0a1628] hover:bg-[#1a3a5c] text-white font-semibold py-3 rounded-full text-sm transition-colors text-center"
                    >
                      Start Course →
                    </Link>
                  )
                ) : (
                  <button
                    disabled
                    className="w-full bg-gray-100 text-gray-400 font-semibold py-3 rounded-full text-sm cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
