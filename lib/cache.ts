import { redis } from '@/lib/redis'
import { getPublishedProjects, getSiteSettings } from '@/lib/queries'

const TTL_SECONDS = 60

const KEYS = {
  publishedProjects: 'cache:projects:published',
  settings: 'cache:settings',
}

/**
 * Generic read-through cache. On any Redis hiccup we fall back to the
 * live DB query so a cache outage never breaks the public site.
 */
async function cached<T>(key: string, loader: () => Promise<T>): Promise<T> {
  try {
    const hit = await redis.get(key)
    if (hit) return JSON.parse(hit) as T
  } catch {
    // ignore cache read errors, fall through to DB
  }

  const data = await loader()

  try {
    await redis.set(key, JSON.stringify(data), 'EX', TTL_SECONDS)
  } catch {
    // ignore cache write errors
  }
  return data
}

export function getCachedPublishedProjects() {
  return cached(KEYS.publishedProjects, getPublishedProjects)
}

export function getCachedSiteSettings() {
  return cached(KEYS.settings, getSiteSettings)
}

/** Call after admin mutations so the public site reflects changes immediately. */
export async function bustContentCache() {
  try {
    await redis.del(KEYS.publishedProjects, KEYS.settings)
  } catch {
    // ignore
  }
}
