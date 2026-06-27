import type { Metadata } from 'next'
import { Field, Input, Textarea } from '@/components/ui/field'
import { Button } from '@/components/ui/button'
import { requireAdmin } from '@/lib/auth'
import { getSiteSettings } from '@/lib/queries'
import { AdminShell } from '@/components/admin/admin-shell'
import { updateSettingsAction } from '@/src/app/admin/actions'

export const metadata: Metadata = { title: 'Site settings', robots: { index: false } }

export default async function AdminSettings({
  searchParams,
}: {
  searchParams: { saved?: string }
}) {
  await requireAdmin()
  const s = await getSiteSettings()

  return (
    <AdminShell title="Site settings">
      {searchParams.saved && (
        <p className="mb-6 rounded-lg border border-yellow/40 bg-yellow/10 px-4 py-2 text-sm text-yellow">
          Saved. Changes are live on the site.
        </p>
      )}

      <form action={updateSettingsAction} className="grid max-w-3xl gap-5">
        <Field label="Hero headline" htmlFor="heroHeadline" hint="The big one-sentence value prop on the home page.">
          <Textarea id="heroHeadline" name="heroHeadline" defaultValue={s.heroHeadline} />
        </Field>
        <Field label="Value proposition" htmlFor="valueProp" hint="Supporting line under the hero.">
          <Textarea id="valueProp" name="valueProp" defaultValue={s.valueProp} />
        </Field>
        <Field label="About snippet" htmlFor="aboutSnippet" hint="2–3 sentences shown on home + about.">
          <Textarea id="aboutSnippet" name="aboutSnippet" defaultValue={s.aboutSnippet} />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Contact email" htmlFor="email">
            <Input id="email" name="email" type="email" defaultValue={s.email} />
          </Field>
          <Field label="Response promise" htmlFor="responsePromise">
            <Input id="responsePromise" name="responsePromise" defaultValue={s.responsePromise} />
          </Field>
        </div>

        <Field label="Photo URL" htmlFor="photoUrl" hint="Paste a Cloudinary URL for your portrait.">
          <Input id="photoUrl" name="photoUrl" type="url" defaultValue={s.photoUrl} />
        </Field>

        <div>
          <Button type="submit">Save settings</Button>
        </div>
      </form>
    </AdminShell>
  )
}
