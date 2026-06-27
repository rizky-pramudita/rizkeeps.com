import type { Metadata } from 'next'
import { Section } from '@/components/ui/section'
import { ProjectCard } from '@/components/project-card'
import { CtaBand } from '@/components/cta-band'
import { getCachedPublishedProjects } from '@/lib/cache'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected case studies — real problems turned into shipped, working products.',
}

export const dynamic = 'force-dynamic'

export default async function WorkPage() {
  const projects = await getCachedPublishedProjects()

  return (
    <>
      <Section
        eyebrow="Work"
        title="Case studies"
        description="Each project below follows the same shape: the problem, what I built, and the result."
      >
        {projects.length === 0 ? (
          <p className="text-greytext">No case studies published yet — check back soon.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </Section>
      <CtaBand />
    </>
  )
}
