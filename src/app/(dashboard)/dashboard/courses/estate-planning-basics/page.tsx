import Link from 'next/link';
import { course } from './data';

export default function EstatePlanningBasicsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/dashboard" className="hover:text-[#d4a017] transition-colors">Dashboard</Link>
        <span>›</span>
        <Link href="/dashboard/courses" className="hover:text-[#d4a017] transition-colors">Courses</Link>
        <span>›</span>
        <span className="text-gray-600">{course.title}</span>
      </nav>

      <div className="mb-10">
        <div className="text-5xl mb-4">{course.icon}</div>
        <h1 className="text-3xl font-bold text-[#0a1628] mb-3">{course.title}</h1>
        <p className="text-gray-500 text-lg leading-relaxed mb-6">{course.description}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
          <span>🎓 {course.totalLessons} lessons</span>
          <span>⏱️ {course.totalDuration}</span>
          <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">{course.level}</span>
        </div>
      </div>

      <div className="bg-[#d4a017]/10 border-l-4 border-[#d4a017] rounded-r-2xl p-5 mb-10">
        <p className="text-[#0a1628] font-semibold text-sm leading-relaxed">
          &ldquo;69.4% of Black homeowners over 50 have no will or trust. This course exists to change that — one family at a time.&rdquo;
        </p>
        <p className="text-gray-500 text-xs mt-2">— Anthony Washington, Founder, LegacyShield Pro</p>
      </div>

      <div className="space-y-3 mb-10">
        {course.lessons.map((lesson, index) => (
          <Link
            key={lesson.id}
            href={`/dashboard/courses/estate-planning-basics/lesson/${lesson.id}`}
            className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-gray-100 hover:border-[#d4a017]/30 hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-[#0a1628] flex items-center justify-center flex-shrink-0 group-hover:bg-[#d4a017] transition-colors">
              <span className="text-white font-bold text-sm">{index + 1}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[#0a1628] group-hover:text-[#d4a017] transition-colors truncate">{lesson.title}</p>
              <p className="text-gray-400 text-xs mt-0.5">⏱️ {lesson.duration} read</p>
            </div>
            <span className="text-gray-300 group-hover:text-[#d4a017] transition-colors text-lg">→</span>
          </Link>
        ))}
      </div>

      <Link
        href="/dashboard/courses/estate-planning-basics/lesson/1"
        className="block w-full bg-[#0a1628] hover:bg-[#1a3a5c] text-white font-bold py-4 rounded-full text-center transition-colors"
      >
        Start Course → Lesson 1
      </Link>
    </div>
  );
}
