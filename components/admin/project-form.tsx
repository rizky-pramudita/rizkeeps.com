import { Field, Input, Textarea } from '@/components/ui/field'
import { Button } from '@/components/ui/button'
import type { Project } from '@/lib/db/schema'

export function ProjectForm({
  action,
  project,
}: {
  action: (formData: FormData) => void
  project?: Project
}) {
  const arr = (v?: string[]) => (v ?? []).join('\n')

  return (
    <form action={action} className="grid max-w-3xl gap-5">
      {project && <input type="hidden" name="id" defaultValue={project.id} />}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <Input id="name" name="name" required defaultValue={project?.name} />
        </Field>
        <Field label="Slug" htmlFor="slug" hint="URL path. Leave blank to auto-generate from name.">
          <Input id="slug" name="slug" defaultValue={project?.slug} placeholder="my-project" />
        </Field>
      </div>

      <Field label="Client" htmlFor="client" hint="Anonymize if needed, e.g. 'An Indonesian logistics SME'.">
        <Input id="client" name="client" defaultValue={project?.client} />
      </Field>

      <Field label="Summary" htmlFor="summary" hint="One or two sentences shown on cards.">
        <Textarea id="summary" name="summary" defaultValue={project?.summary} />
      </Field>

      <Field label="Problem" htmlFor="problem">
        <Textarea id="problem" name="problem" defaultValue={project?.problem} />
      </Field>
      <Field label="Approach" htmlFor="approach">
        <Textarea id="approach" name="approach" defaultValue={project?.approach} />
      </Field>
      <Field label="Result" htmlFor="result">
        <Textarea id="result" name="result" defaultValue={project?.result} />
      </Field>
      <Field label="Metric" htmlFor="metric" hint="Headline outcome, e.g. '40% faster load'.">
        <Input id="metric" name="metric" defaultValue={project?.metric} />
      </Field>

      <Field label="Tech stack" htmlFor="stack" hint="One per line, or comma-separated.">
        <Textarea id="stack" name="stack" defaultValue={arr(project?.stack)} placeholder={'Next.js\nPostgreSQL'} />
      </Field>
      <Field label="Tags" htmlFor="tags" hint="One per line, or comma-separated.">
        <Textarea id="tags" name="tags" defaultValue={arr(project?.tags)} placeholder={'Fullstack\nWeb'} />
      </Field>
      <Field
        label="Image URLs"
        htmlFor="images"
        hint="Paste Cloudinary URLs, one per line. First image is the card cover."
      >
        <Textarea id="images" name="images" defaultValue={arr(project?.images)} placeholder="https://res.cloudinary.com/..." />
      </Field>

      <Field label="Live URL" htmlFor="liveUrl">
        <Input id="liveUrl" name="liveUrl" type="url" defaultValue={project?.liveUrl} placeholder="https://..." />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Sort order" htmlFor="sortOrder" hint="Lower numbers show first.">
          <Input id="sortOrder" name="sortOrder" type="number" defaultValue={project?.sortOrder ?? 0} />
        </Field>
        <label className="flex items-center gap-3 self-end pb-2">
          <input
            type="checkbox"
            name="published"
            value="true"
            defaultChecked={project?.published ?? false}
            className="h-5 w-5 accent-yellow"
          />
          <span className="text-sm font-semibold text-white">Published (visible on the site)</span>
        </label>
      </div>

      <div className="flex gap-3">
        <Button type="submit">{project ? 'Save changes' : 'Create project'}</Button>
      </div>
    </form>
  )
}
