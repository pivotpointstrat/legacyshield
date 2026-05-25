// Facebook Graph API helper for LegacyShield Pro
// Page: LegacyShield Pro (ID: 1183520111502748)

const FB_API_VERSION = 'v19.0';
const FB_API_BASE = `https://graph.facebook.com/${FB_API_VERSION}`;

export interface FacebookPost {
  message: string;
  published?: boolean;
  scheduled_publish_time?: number; // Unix timestamp for scheduled posts
}

export interface FacebookPostResult {
  success: boolean;
  postId?: string;
  error?: string;
}

export interface FacebookPageInfo {
  id: string;
  name: string;
  fan_count: number;
  followers_count: number;
}

/**
 * Publish a post to the LegacyShield Pro Facebook page immediately
 */
export async function publishFacebookPost(message: string): Promise<FacebookPostResult> {
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const pageToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

  if (!pageId || !pageToken) {
    return { success: false, error: 'Facebook credentials not configured' };
  }

  try {
    const response = await fetch(`${FB_API_BASE}/${pageId}/feed`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        access_token: pageToken,
      }),
    });

    const data = await response.json();

    if (data.id) {
      return { success: true, postId: data.id };
    } else {
      return { success: false, error: data.error?.message || 'Unknown error' };
    }
  } catch (error) {
    return { success: false, error: String(error) };
  }
}

/**
 * Get basic page info and metrics
 */
export async function getPageInfo(): Promise<FacebookPageInfo | null> {
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const pageToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

  if (!pageId || !pageToken) return null;

  try {
    const response = await fetch(
      `${FB_API_BASE}/${pageId}?fields=id,name,fan_count,followers_count&access_token=${pageToken}`
    );
    const data = await response.json();
    return data.error ? null : data;
  } catch {
    return null;
  }
}

/**
 * Verify the page access token is still valid
 */
export async function verifyPageToken(): Promise<boolean> {
  const pageToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
  const appId = process.env.FACEBOOK_APP_ID;
  const appSecret = process.env.FACEBOOK_APP_SECRET;

  if (!pageToken || !appId || !appSecret) return false;

  try {
    const response = await fetch(
      `${FB_API_BASE}/debug_token?input_token=${pageToken}&access_token=${appId}|${appSecret}`
    );
    const data = await response.json();
    return data.data?.is_valid === true;
  } catch {
    return false;
  }
}
