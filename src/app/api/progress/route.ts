import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export const dynamic = 'force-dynamic';



// GET /api/progress?courseId=life-insurance-101
// Returns completed lesson IDs for the current user (optionally filtered by course)
export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();

  const { searchParams } = new URL(req.url);
  const courseId = searchParams.get('courseId');

  const user = await User.findOne({ email: session.user.email }, { completedLessons: 1 }).lean() as { completedLessons?: { courseId: string; lessonId: number; completedAt: Date }[] } | null;

  if (!user) {
    return NextResponse.json({ completedLessons: [] });
  }

  const lessons = user.completedLessons ?? [];
  const filtered = courseId
    ? lessons.filter((l) => l.courseId === courseId)
    : lessons;

  return NextResponse.json({
    completedLessons: filtered.map((l) => ({
      courseId: l.courseId,
      lessonId: l.lessonId,
      completedAt: l.completedAt,
    })),
  });
}

// POST /api/progress
// Body: { courseId: string, lessonId: number }
// Marks a lesson as complete for the current user
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();

  const body = await req.json();
  const { courseId, lessonId } = body;

  if (!courseId || typeof lessonId !== 'number') {
    return NextResponse.json({ error: 'courseId and lessonId are required' }, { status: 400 });
  }

  const user = await User.findOne({ email: session.user.email });
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  // Check if already completed
  const alreadyDone = user.completedLessons?.some(
    (l: { courseId: string; lessonId: number }) => l.courseId === courseId && l.lessonId === lessonId
  );

  if (!alreadyDone) {
    user.completedLessons = user.completedLessons ?? [];
    user.completedLessons.push({ courseId, lessonId, completedAt: new Date() });
    await user.save();
  }

  // Return updated completed lesson IDs for this course
  const courseCompleted = user.completedLessons
    .filter((l: { courseId: string; lessonId: number }) => l.courseId === courseId)
    .map((l: { lessonId: number }) => l.lessonId);

  return NextResponse.json({
    success: true,
    alreadyCompleted: alreadyDone,
    completedLessonsForCourse: courseCompleted,
  });
}
