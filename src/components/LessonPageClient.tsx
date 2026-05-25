'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

interface Lesson {
  id: number;
  title: string;
  duration: string;
  videoId?: string | null;
  content: string[];
  keyTakeaways: string[];
  actionStep: string;
}

interface LessonPageClientProps {
  courseId: string;
  courseName: string;
  courseHref: string;
  lesson: Lesson;
  lessonIndex: number;
  totalLessons: number;
  allLessons: { id: number; title: string }[];
  prevLesson: { id: number; title: string } | null;
  nextLesson: { id: number; title: string } | null;
  lessonHrefPrefix: string; // e.g. /dashboard/courses/life-insurance-101/lesson
}

export default function LessonPageClient({
  courseId,
  courseName,
  courseHref,
  lesson,
  lessonIndex,
  totalLessons,
  allLessons,
  prevLesson,
  nextLesson,
  lessonHrefPrefix,
}: LessonPageClientProps) {
  const [completedIds, setCompletedIds] = useState<number[]>([]);
  const [marking, setMarking] = useState(false);
  const [justCompleted, setJustCompleted] = useState(false);

  const isCompleted = completedIds.includes(lesson.id);

  // Fetch completed lessons for this course
  const fetchProgress = useCallback(async () => {
    try {
      const res = await fetch(`/api/progress?courseId=${courseId}`);
      if (res.ok) {
        const data = await res.json();
        setCompletedIds(data.completedLessons.map((l: { lessonId: number }) => l.lessonId));
      }
    } catch {
      // Silent fail — progress is non-critical
    }
  }, [courseId]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  // Mark lesson as complete
  const markComplete = async () => {
    if (isCompleted || marking) return;
    setMarking(true);
    try {
      const res = await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId, lessonId: lesson.id }),
      });
      if (res.ok) {
        const data = await res.json();
        setCompletedIds(data.completedLessonsForCourse);
        setJustCompleted(true);
      }
    } catch {
      // Silent fail
    } finally {
      setMarking(false);
    }
  };

  const completedCount = completedIds.length;
  const progressPct = Math.round((completedCount / totalLessons) * 100);
  const isCourseComplete = completedCount === totalLessons;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
        <Link href="/dashboard" className="hover:text-[#d4a017] transition-colors">Dashboard</Link>
        <span>›</span>
        <Link href="/dashboard/courses" className="hover:text-[#d4a017] transition-colors">Courses</Link>
        <span>›</span>
        <Link href={courseHref} className="hover:text-[#d4a017] transition-colors">{courseName}</Link>
        <span>›</span>
        <span className="text-gray-600 truncate">{lesson.title}</span>
      </nav>

      {/* Progress Bar */}
      {completedCount > 0 && (
        <div className="mb-6 bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold text-[#0a1628]">
                {isCourseComplete ? '🏆 Course Complete!' : `${completedCount} of ${totalLessons} lessons complete`}
              </span>
              <span className="text-xs font-bold text-[#d4a017]">{progressPct}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#d4a017] rounded-full transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-[#0a1628] text-white text-xs font-bold px-3 py-1 rounded-full">
            Lesson {lessonIndex + 1} of {totalLessons}
          </span>
          <span className="text-gray-400 text-sm">⏱️ {lesson.duration} read</span>
          {isCompleted && (
            <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              ✅ Completed
            </span>
          )}
        </div>
        <h1 className="text-3xl font-bold text-[#0a1628] leading-tight">{lesson.title}</h1>
      </div>

      {/* Video Player */}
      <div className="mb-10">
        {lesson.videoId ? (
          <div className="aspect-video rounded-2xl overflow-hidden bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${lesson.videoId}`}
              title={lesson.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        ) : (
          <div className="aspect-video rounded-2xl bg-[#0a1628] flex flex-col items-center justify-center text-center p-8">
            <div className="text-5xl mb-4">🎥</div>
            <p className="text-white font-semibold text-lg mb-2">Video Coming Soon</p>
            <p className="text-gray-400 text-sm max-w-sm">The written lesson below covers everything you need to know. Video lessons are being recorded and will be uploaded shortly.</p>
          </div>
        )}
      </div>

      {/* Lesson Content */}
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

      {/* Key Takeaways */}
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

      {/* Action Step */}
      <div className="bg-[#d4a017]/10 border-l-4 border-[#d4a017] rounded-r-2xl p-6 mb-8">
        <h2 className="text-base font-bold text-[#0a1628] mb-3 flex items-center gap-2">
          <span>⚡</span> Your Action Step
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed">{lesson.actionStep}</p>
      </div>

      {/* Mark Complete Button */}
      <div className="mb-10">
        {isCompleted ? (
          <div className="flex items-center justify-center gap-3 bg-green-50 border border-green-200 rounded-2xl py-4 px-6">
            <span className="text-2xl">✅</span>
            <span className="font-semibold text-green-700">Lesson Complete!</span>
            {justCompleted && <span className="text-green-600 text-sm">Great work — keep going!</span>}
          </div>
        ) : (
          <button
            onClick={markComplete}
            disabled={marking}
            className="w-full bg-[#d4a017] hover:bg-[#b8860b] disabled:opacity-60 text-[#0a1628] font-bold py-4 rounded-2xl text-base transition-colors flex items-center justify-center gap-2"
          >
            {marking ? (
              <><span className="animate-spin">⏳</span> Saving...</>
            ) : (
              <><span>✅</span> Mark Lesson as Complete</>
            )}
          </button>
        )}
      </div>

      {/* Lesson Navigation */}
      <div className="flex items-center justify-between gap-4 pt-6 border-t border-gray-100">
        {/* Previous */}
        <div className="flex-1">
          {prevLesson ? (
            <Link href={`${lessonHrefPrefix}/${prevLesson.id}`} className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-full border-2 border-gray-200 group-hover:border-[#d4a017] flex items-center justify-center transition-colors">
                <span className="text-gray-400 group-hover:text-[#d4a017] transition-colors text-sm">←</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-xs text-gray-400 mb-0.5">Previous</p>
                <p className="text-sm font-semibold text-[#0a1628] group-hover:text-[#d4a017] transition-colors line-clamp-1">{prevLesson.title}</p>
              </div>
            </Link>
          ) : (
            <Link href={courseHref} className="flex items-center gap-3 group">
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

        {/* Progress Dots */}
        <div className="flex gap-1.5">
          {allLessons.map((l) => (
            <Link
              key={l.id}
              href={`${lessonHrefPrefix}/${l.id}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                completedIds.includes(l.id)
                  ? 'bg-green-500'
                  : l.id === lesson.id
                  ? 'bg-[#d4a017]'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              title={l.title}
            />
          ))}
        </div>

        {/* Next */}
        <div className="flex-1 flex justify-end">
          {nextLesson ? (
            <Link href={`${lessonHrefPrefix}/${nextLesson.id}`} className="flex items-center gap-3 group">
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
