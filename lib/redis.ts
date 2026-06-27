import Redis from 'ioredis'

const url = process.env.REDIS_URL

if (!url) {
  throw new Error('REDIS_URL is not set. Add your Redis connection string to .env')
}

// Reuse the connection across hot-reloads in dev.
const globalForRedis = globalThis as unknown as {
  redisClient?: Redis
}

function createClient() {
  const client = new Redis(url!, {
    maxRetriesPerRequest: 2,
    // Connect on first command, not at import — keeps `next build` from
    // opening a socket while collecting page data.
    lazyConnect: true,
  })
  // Prevent an unhandled 'error' event from crashing the process when Redis
  // is briefly unavailable; callers already fail open / surface errors.
  client.on('error', (err) => {
    console.error('[redis] connection error:', err.message)
  })
  return client
}

export const redis = globalForRedis.redisClient ?? createClient()

if (process.env.NODE_ENV !== 'production') {
  globalForRedis.redisClient = redis
}
