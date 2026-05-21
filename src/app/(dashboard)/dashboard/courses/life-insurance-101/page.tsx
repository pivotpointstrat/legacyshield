import Link from 'next/link';
import { course } from './data';

export default function LifeInsurance101Page() {
  return (
    <div>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/dashboard" className="hover:text-[#d4a017] transition-colors">Dashboard</Link>
        <span>›</span>
        <Link href="/dashboard/courses" className="hover:text-[#d4a017] transition-colors">Courses</Link>
        <span>›</span>
        <span className="text-gray-600">{course.title}</span>
      </nav>

      {/* Course Header */}
      <div className="bg-[#0a1628] rounded-2xl p-8 mb-8">
        <div className="flex items-start gap-6">
          <div className="text-5xl flex-shrink-0">{course.icon}</div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">{course.level}</span>
              <span className="text-gray-400 text-sm">⏱️ {course.totalDuration}</span>
              <span className="text-gray-400 text-sm">🎓 {course.totalLessons} lessons</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">{course.title}</h1>
            <p className="text-gray-300 text-base leading-relaxed max-w-2xl">{course.description}</p>
          </div>
        </div>
      </div>

      {/* Lessons List */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-[#0a1628] mb-5">Course Lessons</h2>
        <div className="space-y-3">
          {course.lessons.map((lesson, index) => (
            <Link
              key={lesson.id}
              href={`/dashboard/courses/life-insurance-101/lesson/${lesson.id}`}
              className="flex items-center gap-5 bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#d4a017]/40 hover:shadow-md transition-all group"
            >
              {/* Lesson Number */}
              <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[#d4a017]/10 flex items-center justify-center flex-shrink-0 transition-colors">
                <span className="text-sm font-bold text-gray-500 group-hover:text-[#d4a017]">{index + 1}</span>
              </div>

              {/* Lesson Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-[#0a1628] group-hover:text-[#d4a017] transition-colors mb-1">{lesson.title}</h3>
                <p className="text-gray-400 text-sm">{lesson.duration} read</p>
              </div>

              {/* Arrow */}
              <div className="text-gray-300 group-hover:text-[#d4a017] group-hover:translate-x-1 transition-all flex-shrink-0">
                →
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Start CTA */}
      <div className="bg-[#d4a017]/10 border border-[#d4a017]/20 rounded-2xl p-6 flex items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-[#0a1628] mb-1">Ready to start?</h3>
          <p className="text-gray-500 text-sm">Begin with Lesson 1 — it takes less than 10 minutes.</p>
        </div>
        <Link
          href="/dashboard/courses/life-insurance-101/lesson/1"
          className="bg-[#0a1628] hover:bg-[#1a3a5c] text-white font-bold px-8 py-3 rounded-full text-sm transition-colors whitespace-nowrap flex-shrink-0"
        >
          Start Lesson 1 →
        </Link>
      </div>
    </div>
  );
}
