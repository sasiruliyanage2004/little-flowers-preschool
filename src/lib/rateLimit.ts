/**
 * In-memory sliding window rate limiter for edge/serverless endpoints
 * Tracks IP address request frequency to prevent automated spam and DoS
 */

interface RateLimitRecord {
  timestamps: number[];
}

const ipMap = new Map<string, RateLimitRecord>();

// Clean up stale entries every 5 minutes to avoid memory leaks
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    ipMap.forEach((record, ip) => {
      record.timestamps = record.timestamps.filter((ts: number) => now - ts < 60000);
      if (record.timestamps.length === 0) {
        ipMap.delete(ip);
      }
    });
  }, 300000);
}

export function rateLimit(
  ip: string,
  limit: number = 10,
  windowMs: number = 60000
): { success: boolean; remaining: number; reset: number } {
  const now = Date.now();
  const record = ipMap.get(ip) || { timestamps: [] };

  // Remove timestamps outside the sliding window
  record.timestamps = record.timestamps.filter((ts: number) => now - ts < windowMs);

  if (record.timestamps.length >= limit) {
    const oldest = record.timestamps[0];
    const reset = Math.ceil((oldest + windowMs - now) / 1000);
    return {
      success: false,
      remaining: 0,
      reset: Math.max(reset, 1),
    };
  }

  record.timestamps.push(now);
  ipMap.set(ip, record);

  return {
    success: true,
    remaining: limit - record.timestamps.length,
    reset: Math.ceil(windowMs / 1000),
  };
}
