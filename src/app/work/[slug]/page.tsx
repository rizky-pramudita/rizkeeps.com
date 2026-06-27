import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/container'
import { Badge } from '@/components/ui/badge'
import { CtaBand } from '@/components/cta-band'
import { getProjectBySlug } from '@/lib/queries'

export const dynamic = 'force-dynamic'

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)
  if (!project) return { title: 'Case study not found' }
  return {
    title: project.name,
    description: project.summary,
    openGraph: {
      title: project.name,
      description: project.summary,
      images: project.images?.[0] ? [project.images[0]] : undefined,
    },
  }
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-3 text-sm font-bold uppercase tracking-widest text-yellow/80">{label}</h2>
      <p className="text-lg font-light leading-relaxed text-greytext">{children}</p>
    </div>
  )
}

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug)
  if (!project || !project.published) notFound()

  return (
    <>
      <Container className="py-16">
        <Link href="/work" className="text-sm text-greytext hover:text-yellow">
          ← Back to work
        </Link>

        <div className="mt-6 max-w-3xl">
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <Badge key={tag} variant="pink">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-3xl font-extrabold sm:text-5xl">{project.name}</h1>
          {project.client && <p className="mt-3 text-greytext">{project.client}</p>}
          <p className="mt-5 text-xl font-light text-greytext">{project.summary}</p>
        </div>

        {/* Metric highlight */}
        {project.metric && (
          <div className="mt-10 inline-flex rounded-2xl border border-yellow/30 bg-yellow/10 px-6 py-4">
            <p className="text-lg font-extrabold text-yellow">{project.metric}</p>
          </div>
        )}

        {/* Screenshots */}
        {project.images?.length > 0 && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {project.images.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-border bg-surface">
                <Image
                  src={src}
                  alt={`${project.name} screenshot ${i + 1}`}
                  width={800}
                  height={500}
                  className="h-auto w-full object-contain p-4"
                />
              </div>
            ))}
          </div>
        )}

        {/* Problem / Approach / Result */}
        <div className="mt-14 grid max-w-3xl gap-10">
          {project.problem && <Block label="The problem">{project.problem}</Block>}
          {project.approach && <Block label="My approach">{project.approach}</Block>}
          {project.result && <Block label="The result">{project.result}</Block>}
        </div>

        {/* Stack + live link */}
        <div className="mt-12 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          {project.stack?.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-grey">Built with:</span>
              {project.stack.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-yellow hover:underline"
            >
              Visit live site →
            </a>
          )}
        </div>
      </Container>

      <CtaBand title="Want a result like this?" />
    </>
  )
}
