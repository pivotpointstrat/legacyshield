import Link from 'next/link';
import { notFound } from 'next/navigation';
import { course } from '../../data';

interface Props {
  params: { id: string };
}

export default function LessonPage({ params }: Props) {
  const lessonId = parseInt(params.id);
  const lesson = course.lessons.find((l) => l.id === lessonId);
  if (!lesson) return notFound();
  const lessonIndex = course.lessons.findIndex((l) => l.id === lessonId);
  const prevLesson = lessonIndex > 0 ? course.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < course.lessons.length - 1 ? course.lessons[lessonIndex + 1] : null;

  return (
    <div className="max-w-3xl mx-auto">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
        <Link href="/dashboard" className="hover:text-[#d4a017] transition-colors">Dashboard</Link>
        <span>›</span>
        <Link href="/dashboard/courses" className="hover:text-[#d4a017] transition-colors">Courses</Link>
        <span>›</span>
        <Link href="/dashboard/courses/estate-planning-basics" className="hover:text-[#d4a017] transition-colors">Estate Planning Basics</Link>
        <span>›</span>
        <span className="text-gray-600 truncate">{lesson.title}</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-[#0a1628] text-white text-xs font-bold px-3 py-1 rounded-full">
            Lesson {lessonId} of {course.totalLessons}
          </span>
          <span className="text-gray-400 text-sm">⏱️ {lesson.duration} read</span>
        </div>
        <h1 className="text-3xl font-bold text-[#0a1628] leading-tight">{lesson.title}</h1>
      </div>

      <div className="aspect-video rounded-2xl bg-[#0a1628] flex flex-col items-center justify-center text-center p-8 mb-10">
        <div className="text-5xl mb-4">🎥</div>
        <p className="text-white font-semibold text-lg mb-2">Video Coming Soon</p>
        <p className="text-gray-400 text-sm max-w-sm">The written lesson below covers everything you need to know. Video lessons are being recorded and will be uploaded shortly.</p>
      </div>

      <div className="prose prose-lg max-w-none mb-10">
        {lesson.content.map((paragraph, i) => (
          <p
            key={i}
            className="text-gray-700 leading-relaxed mb-5 text-base"
            dangerouslySetInnerHTML={{
              __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#0a1628] font-semibold">$1</strong>')
            }}
          />
        ))}
      </div>

      <div className="bg-[#0a1628] rounded-2xl p-7 mb-8">
        <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
          <span>✅</span> Key Takeaways
        </h2>
        <ul className="space-y-3">
          {lesson.keyTakeaways.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-[#d4a017] font-bold mt-0.5 flex-shrink-0">→</span>
              <span className="text-gray-200 text-sm leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#d4a017]/10 border-l-4 border-[#d4a017] rounded-r-2xl p-6 mb-10">
        <h2 className="text-base font-bold text-[#0a1628] mb-3 flex items-center gap-2">
          <span>⚡</span> Your Action Step
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed">{lesson.actionStep}</p>
      </div>

      <div className="flex items-center justify-between gap-4 pt-6 border-t border-gray-100">
        <div className="flex-1">
          {prevLesson ? (
            <Link href={`/dashboard/courses/estate-planning-basics/lesson/${prevLesson.id}`} className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full border-2 border-gray-200 group-hover:border-[#d4a017] flex items-center justify-center transition-colors">
                <span className="text-gray-400 group-hover:text-[#d4a017] transition-colors text-sm">←</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-xs text-gray-400 mb-0.5">Previous</p>
                <p className="text-sm font-semibold text-[#0a1628] group-hover:text-[#d4a017] transition-colors line-clamp-1">{prevLesson.title}</p>
              </div>
            </Link>
          ) : (
            <Link href="/dashboard/courses/estate-planning-basics" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full border-2 border-gray-200 group-hover:border-[#d4a017] flex items-center justify-center transition-colors">
                <span className="text-gray-400 group-hover:text-[#d4a017] transition-colors text-sm">←</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-xs text-gray-400 mb-0.5">Back to</p>
                <p className="text-sm font-semibold text-[#0a1628] group-hover:text-[#d4a017] transition-colors">Course Overview</p>
              </div>
            </Link>
          )}
        </div>

        <div className="flex gap-1.5">
          {course.lessons.map((l) => (
            <Link
              key={l.id}
              href={`/dashboard/courses/estate-planning-basics/lesson/${l.id}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                l.id === lessonId ? 'bg-[#d4a017]' : l.id < lessonId ? 'bg-[#0a1628]' : 'bg-gray-200 hover:bg-gray-300'
              }`}
              title={l.title}
            />
          ))}
        </div>

        <div className="flex-1 flex justify-end">
          {nextLesson ? (
            <Link href={`/dashboard/courses/estate-planning-basics/lesson/${nextLesson.id}`} className="flex items-center gap-3 group">
              <div className="hidden sm:block text-right">
                <p className="text-xs text-gray-400 mb-0.5">Next</p>
                <p className="text-sm font-semibold text-[#0a1628] group-hover:text-[#d4a017] transition-colors line-clamp-1">{nextLesson.title}</p>
              </div>
              <div className="w-9 h-9 rounded-full border-2 border-gray-200 group-hover:border-[#d4a017] flex items-center justify-center transition-colors">
                <span className="text-gray-400 group-hover:text-[#d4a017] transition-colors text-sm">→</span>
              </div>
            </Link>
          ) : (
            <Link href="/dashboard/courses" className="flex items-center gap-3 group">
              <div className="hidden sm:block text-right">
                <p className="text-xs text-gray-400 mb-0.5">Course Complete!</p>
                <p className="text-sm font-semibold text-[#0a1628] group-hover:text-[#d4a017] transition-colors">Back to Library</p>
              </div>
              <div className="w-9 h-9 rounded-full border-2 border-[#d4a017] bg-[#d4a017]/10 flex items-center justify-center">
                <span className="text-[#d4a017] text-sm">🏆</span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
