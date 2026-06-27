import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { requireAdmin } from '@/lib/auth'
import { getAllProjects } from '@/lib/queries'
import { AdminShell } from '@/components/admin/admin-shell'
import { deleteProjectAction } from '@/src/app/admin/actions'

export const metadata: Metadata = { title: 'Projects', robots: { index: false } }

export default async function AdminProjects() {
  await requireAdmin()
  const projects = await getAllProjects()

  return (
    <AdminShell
      title="Projects"
      action={
        <Link href="/admin/projects/new" className="rounded-lg bg-yellow px-4 py-2 font-bold text-blackbg">
          + New project
        </Link>
      }
    >
      {projects.length === 0 ? (
        <p className="text-greytext">No projects yet. Create your first case study.</p>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface text-grey">
              <tr>
                <th className="px-4 py-3 font-semibold">Name</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Order</th>
                <th className="px-4 py-3 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {projects.map((p) => (
                <tr key={p.id} className="bg-blackbg">
                  <td className="px-4 py-3">
                    <p className="font-semibold text-white">{p.name}</p>
                    <p className="text-xs text-grey">/{p.slug}</p>
                  </td>
                  <td className="px-4 py-3">
                    {p.published ? <Badge variant="yellow">Published</Badge> : <Badge>Draft</Badge>}
                  </td>
                  <td className="px-4 py-3 text-greytext">{p.sortOrder}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-3">
                      <Link href={`/admin/projects/${p.id}/edit`} className="font-semibold text-yellow hover:underline">
                        Edit
                      </Link>
                      <form action={deleteProjectAction}>
                        <input type="hidden" name="id" value={p.id} />
                        <button className="font-semibold text-pink hover:underline">Delete</button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminShell>
  )
}
