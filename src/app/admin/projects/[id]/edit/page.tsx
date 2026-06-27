import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { requireAdmin } from '@/lib/auth'
import { getProjectById } from '@/lib/queries'
import { AdminShell } from '@/components/admin/admin-shell'
import { ProjectForm } from '@/components/admin/project-form'
import { updateProjectAction } from '@/src/app/admin/actions'

export const metadata: Metadata = { title: 'Edit project', robots: { index: false } }

export default async function EditProject({ params }: { params: { id: string } }) {
  await requireAdmin()
  const project = await getProjectById(Number(params.id))
  if (!project) notFound()

  return (
    <AdminShell title={`Edit: ${project.name}`}>
      <ProjectForm action={updateProjectAction} project={project} />
    </AdminShell>
  )
}
