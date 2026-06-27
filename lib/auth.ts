import 'server-only'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { randomBytes, timingSafeEqual } from 'crypto'
import { redis } from '@/lib/redis'

export const SESSION_COOKIE = 'rk_session'
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7 // 7 days
const sessionKey = (id: string) => `session:${id}`

/** Timing-safe comparison of the submitted password against ADMIN_PASSWORD. */
export function verifyPassword(input: string): boolean {
  const expected = process.env.ADMIN_PASSWORD
  if (!expected) {
    throw new Error('ADMIN_PASSWORD is not set. Add it to .env to enable admin login.')
  }
  const a = Buffer.from(input)
  const b = Buffer.from(expected)
  if (a.length !== b.length) return false
  return timingSafeEqual(a, b)
}

/** Mint a session in Redis and set the cookie. Call from a server action / route. */
export async function createSession(): Promise<void> {
  const id = randomBytes(32).toString('hex')
  await redis.set(sessionKey(id), '1', 'EX', SESSION_TTL_SECONDS)
  cookies().set(SESSION_COOKIE, id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_TTL_SECONDS,
  })
}

export async function destroySession(): Promise<void> {
  const id = cookies().get(SESSION_COOKIE)?.value
  if (id) {
    try {
      await redis.del(sessionKey(id))
    } catch {
      // ignore
    }
  }
  cookies().delete(SESSION_COOKIE)
}

/** Authoritative check: validates the cookie against Redis. */
export async function isAuthenticated(): Promise<boolean> {
  const id = cookies().get(SESSION_COOKIE)?.value
  if (!id) return false
  try {
    const exists = await redis.exists(sessionKey(id))
    return exists === 1
  } catch {
    return false
  }
}

/** Use at the top of every admin page/action. Redirects to login if not authed. */
export async function requireAdmin(): Promise<void> {
  if (!(await isAuthenticated())) {
    redirect('/admin/login')
  }
}
