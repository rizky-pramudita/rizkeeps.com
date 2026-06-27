import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SESSION_COOKIE = 'rk_session'

/**
 * Cheap edge gate: blocks /admin/* without a session cookie and bounces
 * to the login page. The authoritative Redis check happens server-side
 * in requireAdmin() on each admin page/action.
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const hasCookie = req.cookies.has(SESSION_COOKIE)
    if (!hasCookie) {
      const url = req.nextUrl.clone()
      url.pathname = '/admin/login'
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
