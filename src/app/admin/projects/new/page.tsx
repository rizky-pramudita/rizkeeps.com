import type { Metadata } from 'next'
import { requireAdmin } from '@/lib/auth'
import { AdminShell } from '@/components/admin/admin-shell'
import { ProjectForm } from '@/components/admin/project-form'
import { createProjectAction } from '@/src/app/admin/actions'

export const metadata: Metadata = { title: 'New project', robots: { index: false } }

export default async function NewProject() {
  await requireAdmin()
  return (
    <AdminShell title="New project">
      <ProjectForm action={createProjectAction} />
    </AdminShell>
  )
}
