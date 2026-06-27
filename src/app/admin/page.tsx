import type { Metadata } from 'next'
import Link from 'next/link'
import { sql, eq } from 'drizzle-orm'
import { db } from '@/lib/db'
import { projects, contactSubmissions } from '@/lib/db/schema'
import { requireAdmin } from '@/lib/auth'
import { AdminShell } from '@/components/admin/admin-shell'

export const metadata: Metadata = { title: 'Admin', robots: { index: false } }

async function count(table: typeof projects | typeof contactSubmissions, where?: any) {
  const q = db.select({ c: sql<number>`count(*)` }).from(table as any)
  const rows = where ? await q.where(where) : await q
  return Number(rows[0]?.c ?? 0)
}

export default async function AdminDashboard() {
  await requireAdmin()

  const [projectCount, publishedCount, submissionCount, newSubmissions] = await Promise.all([
    count(projects),
    count(projects, eq(projects.published, true)),
    count(contactSubmissions),
    count(contactSubmissions, eq(contactSubmissions.handled, false)),
  ])

  const cards = [
    { label: 'Projects', value: projectCount, href: '/admin/projects', hint: `${publishedCount} published` },
    { label: 'New inquiries', value: newSubmissions, href: '/admin/submissions', hint: `${submissionCount} total` },
  ]

  return (
    <AdminShell title="Dashboard">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-yellow/40"
          >
            <p className="text-sm text-greytext">{c.label}</p>
            <p className="mt-2 text-4xl font-extrabold text-white">{c.value}</p>
            <p className="mt-1 text-xs text-grey">{c.hint}</p>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/admin/projects/new" className="rounded-lg bg-yellow px-4 py-2 font-bold text-blackbg">
          + New project
        </Link>
        <Link href="/admin/settings" className="rounded-lg bg-greycard px-4 py-2 font-semibold text-white">
          Edit site settings
        </Link>
      </div>
    </AdminShell>
  )
}
