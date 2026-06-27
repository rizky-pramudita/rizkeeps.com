import type { Metadata } from 'next'
import { desc } from 'drizzle-orm'
import { db } from '@/lib/db'
import { contactSubmissions } from '@/lib/db/schema'
import { Badge } from '@/components/ui/badge'
import { requireAdmin } from '@/lib/auth'
import { AdminShell } from '@/components/admin/admin-shell'
import { markSubmissionHandledAction } from '@/src/app/admin/actions'

export const metadata: Metadata = { title: 'Submissions', robots: { index: false } }

export default async function AdminSubmissions() {
  await requireAdmin()
  const rows = await db
    .select()
    .from(contactSubmissions)
    .orderBy(desc(contactSubmissions.createdAt))

  return (
    <AdminShell title="Contact submissions">
      {rows.length === 0 ? (
        <p className="text-greytext">No inquiries yet.</p>
      ) : (
        <div className="grid gap-4">
          {rows.map((r) => (
            <div key={r.id} className="rounded-2xl border border-border bg-surface p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-bold text-white">
                    {r.name}{' '}
                    <a href={`mailto:${r.email}`} className="font-normal text-yellow hover:underline">
                      &lt;{r.email}&gt;
                    </a>
                  </p>
                  <p className="mt-1 text-xs text-grey">
                    {new Date(r.createdAt).toLocaleString()}
                    {r.projectType && ` · ${r.projectType}`}
                    {r.budget && ` · ${r.budget}`}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {r.handled ? <Badge variant="grey">Handled</Badge> : <Badge variant="pink">New</Badge>}
                  <form action={markSubmissionHandledAction}>
                    <input type="hidden" name="id" value={r.id} />
                    <input type="hidden" name="handled" value={(!r.handled).toString()} />
                    <button className="text-sm font-semibold text-greytext hover:text-white">
                      {r.handled ? 'Mark new' : 'Mark handled'}
                    </button>
                  </form>
                </div>
              </div>
              <p className="mt-3 whitespace-pre-wrap text-sm text-greytext">{r.message}</p>
            </div>
          ))}
        </div>
      )}
    </AdminShell>
  )
}
