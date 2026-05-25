import { notFound } from 'next/navigation';
import { course } from '../../data';
import LessonPageClient from '@/components/LessonPageClient';

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
    <LessonPageClient
      courseId="generational-wealth-playbook"
      courseName={course.title}
      courseHref="/dashboard/courses/generational-wealth-playbook"
      lesson={lesson}
      lessonIndex={lessonIndex}
      totalLessons={course.totalLessons}
      allLessons={course.lessons.map((l) => ({ id: l.id, title: l.title }))}
      prevLesson={prevLesson ? { id: prevLesson.id, title: prevLesson.title } : null}
      nextLesson={nextLesson ? { id: nextLesson.id, title: nextLesson.title } : null}
      lessonHrefPrefix="/dashboard/courses/generational-wealth-playbook/lesson"
    />
  );
}
