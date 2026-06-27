import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { db } from '@/lib/db'
import { contactSubmissions } from '@/lib/db/schema'
import { redis } from '@/lib/redis'

export const runtime = 'nodejs'

const RATE_LIMIT = 5 // submissions
const RATE_WINDOW = 60 * 60 // per hour, per IP

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

function getIp(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for')
  if (fwd) return fwd.split(',')[0].trim()
  return req.headers.get('x-real-ip') ?? 'unknown'
}

/** Returns true if the request is within the rate limit. Fails open on Redis errors. */
async function withinRateLimit(ip: string): Promise<boolean> {
  const key = `ratelimit:contact:${ip}`
  try {
    const count = await redis.incr(key)
    if (count === 1) await redis.expire(key, RATE_WINDOW)
    return count <= RATE_LIMIT
  } catch {
    return true
  }
}

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot — bots fill the hidden "company" field.
  if (typeof body.company === 'string' && body.company.trim() !== '') {
    return NextResponse.json({ ok: true }) // silently accept, drop
  }

  const name = String(body.name ?? '').trim()
  const email = String(body.email ?? '').trim()
  const message = String(body.message ?? '').trim()
  const projectType = String(body.projectType ?? '').trim()
  const budget = String(body.budget ?? '').trim()

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: 'Please fill in name, email, and message.' }, { status: 400 })
  }
  if (!isEmail(email) || name.length > 120 || email.length > 200 || message.length > 4000) {
    return NextResponse.json({ ok: false, error: 'Please check your details and try again.' }, { status: 400 })
  }

  const ip = getIp(req)
  if (!(await withinRateLimit(ip))) {
    return NextResponse.json(
      { ok: false, error: 'Too many messages. Please try again later or email me directly.' },
      { status: 429 }
    )
  }

  // 1) Persist first so an inquiry is never lost, even if email fails.
  try {
    await db.insert(contactSubmissions).values({ name, email, message, projectType, budget })
  } catch (err) {
    console.error('[contact] DB insert failed:', err)
    return NextResponse.json(
      { ok: false, error: 'Something went wrong saving your message. Please email me directly.' },
      { status: 500 }
    )
  }

  // 2) Send the notification email. Surface failures loudly (PRD §8).
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  if (!apiKey || !to) {
    console.error('[contact] Missing RESEND_API_KEY or CONTACT_TO_EMAIL. Inquiry was logged to DB.')
    return NextResponse.json(
      { ok: false, error: 'Message saved, but email delivery is not configured yet. Please email me directly.' },
      { status: 502 }
    )
  }

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM || 'rizkeeps <onboarding@resend.dev>',
      to,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${projectType || '—'}`,
        `Budget: ${budget || '—'}`,
        '',
        message,
      ].join('\n'),
    })
    if (error) throw error
  } catch (err) {
    console.error('[contact] Email send failed:', err)
    return NextResponse.json(
      { ok: false, error: 'Message saved, but the email failed to send. Please email me directly.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
