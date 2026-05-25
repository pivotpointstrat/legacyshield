import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import FacebookPostLog from '@/models/FacebookPost';
import { publishFacebookPost } from '@/lib/facebook';
import { JUNE_2026_POSTS } from '@/data/facebook-posts';

// POST /api/facebook-scheduler
// Called daily by Railway cron at 7:00 AM ET (11:00 UTC)
// Authorization: Bearer <SCHEDULER_SECRET>
export async function POST(req: NextRequest) {
  // --- Auth check ---
  const auth = req.headers.get('authorization') ?? '';
  const secret = process.env.SCHEDULER_SECRET ?? '';
  if (!secret || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await connectDB();

  // --- Get today's date in ET (UTC-4 in summer / UTC-5 in winter) ---
  const nowUtc = new Date();
  // Simple ET offset: EDT = UTC-4
  const etOffset = -4 * 60;
  const etNow = new Date(nowUtc.getTime() + etOffset * 60 * 1000);
  const today = etNow.toISOString().slice(0, 10); // YYYY-MM-DD

  // --- Get already-published post IDs from MongoDB ---
  const publishedLogs = await FacebookPostLog.find({}, { postId: 1 }).lean();
  const publishedIds = new Set(publishedLogs.map((l: { postId: number }) => l.postId));

  // --- Find today's post(s) that haven't been published ---
  const duePosts = JUNE_2026_POSTS.filter(
    (post) => post.date === today && !publishedIds.has(post.id)
  );

  if (duePosts.length === 0) {
    return NextResponse.json({
      status: 'no_posts_due',
      date: today,
      message: 'No posts scheduled for today or all already published.',
      publishedThisRun: 0,
    });
  }

  const results = [];

  for (const post of duePosts) {
    const fbResult = await publishFacebookPost(post.message);

    if (fbResult.success && fbResult.postId) {
      // Save to MongoDB so we don't re-publish on restart
      await FacebookPostLog.create({
        postId: post.id,
        date: post.date,
        topic: post.topic,
        type: post.type,
        facebookPostId: fbResult.postId,
        publishedAt: new Date(),
        messagePreview: post.message.slice(0, 100),
      });

      results.push({
        postId: post.id,
        date: post.date,
        topic: post.topic,
        type: post.type,
        facebookPostId: fbResult.postId,
        status: 'published',
      });

      console.log(`[FB Scheduler] ✅ Published post ${post.id}: "${post.topic}" — FB ID: ${fbResult.postId}`);
    } else {
      results.push({
        postId: post.id,
        date: post.date,
        topic: post.topic,
        status: 'failed',
        error: fbResult.error,
      });

      console.error(`[FB Scheduler] ❌ Failed post ${post.id}: "${post.topic}" — ${fbResult.error}`);
    }
  }

  const published = results.filter((r) => r.status === 'published').length;
  const failed = results.filter((r) => r.status === 'failed').length;

  return NextResponse.json({
    status: 'complete',
    date: today,
    publishedThisRun: published,
    failedThisRun: failed,
    results,
  });
}

// GET /api/facebook-scheduler — Status endpoint (no auth required for quick check)
export async function GET() {
  await connectDB();

  const publishedLogs = await FacebookPostLog.find()
    .sort({ publishedAt: -1 })
    .lean();

  const totalPosts = JUNE_2026_POSTS.length;
  const publishedCount = publishedLogs.length;
  const remaining = totalPosts - publishedCount;

  // Next scheduled post
  const publishedIds = new Set(publishedLogs.map((l: { postId: number }) => l.postId));
  const nextPost = JUNE_2026_POSTS.find((p) => !publishedIds.has(p.id));

  return NextResponse.json({
    totalPosts,
    published: publishedCount,
    remaining,
    nextPost: nextPost
      ? { id: nextPost.id, date: nextPost.date, topic: nextPost.topic }
      : null,
    recentlyPublished: publishedLogs.slice(0, 5).map((l: {
      postId: number;
      date: string;
      topic: string;
      facebookPostId: string;
      publishedAt: Date;
    }) => ({
      postId: l.postId,
      date: l.date,
      topic: l.topic,
      facebookPostId: l.facebookPostId,
      publishedAt: l.publishedAt,
    })),
  });
}
