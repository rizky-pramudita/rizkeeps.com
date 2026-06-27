import * as React from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { logoutAction } from '@/src/app/admin/actions'

const navLinks = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/projects', label: 'Projects' },
  { href: '/admin/settings', label: 'Site settings' },
  { href: '/admin/submissions', label: 'Submissions' },
]

export function AdminShell({
  title,
  action,
  children,
}: {
  title: string
  action?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <div className="border-b border-border bg-surface">
        <Container className="flex flex-wrap items-center justify-between gap-4 py-4">
          <nav className="flex flex-wrap items-center gap-1">
            <span className="mr-3 font-extrabold text-yellow">admin</span>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-1.5 text-sm text-greytext hover:bg-greycard hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-sm text-greytext hover:text-yellow">
              View site ↗
            </Link>
            <form action={logoutAction}>
              <button className="rounded-lg bg-greycard px-3 py-1.5 text-sm font-semibold text-white hover:bg-grey">
                Log out
              </button>
            </form>
          </div>
        </Container>
      </div>

      <Container className="py-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-extrabold text-white">{title}</h1>
          {action}
        </div>
        {children}
      </Container>
    </div>
  )
}
