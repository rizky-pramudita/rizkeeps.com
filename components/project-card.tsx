import Image from 'next/image'
import { CardLink } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Project } from '@/lib/db/schema'

export function ProjectCard({ project }: { project: Project }) {
  const cover = project.images?.[0]
  return (
    <CardLink href={`/work/${project.slug}`} className="flex flex-col">
      {cover ? (
        <div className="mb-5 overflow-hidden rounded-xl border border-border bg-blackbg">
          <Image
            src={cover}
            alt={`${project.name} preview`}
            width={640}
            height={360}
            className="h-44 w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="mb-5 flex h-44 items-center justify-center rounded-xl border border-border bg-blackbg text-4xl font-extrabold text-grey">
          {project.name.charAt(0)}
        </div>
      )}

      <div className="mb-2 flex flex-wrap gap-2">
        {project.tags?.slice(0, 2).map((tag) => (
          <Badge key={tag} variant="pink">
            {tag}
          </Badge>
        ))}
      </div>

      <h3 className="text-lg font-bold text-white group-hover:text-yellow">{project.name}</h3>
      <p className="mt-2 line-clamp-2 text-sm font-light text-greytext">{project.summary}</p>

      {project.metric && (
        <p className="mt-4 text-sm font-bold text-yellow">→ {project.metric}</p>
      )}
    </CardLink>
  )
}
