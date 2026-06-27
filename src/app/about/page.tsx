import type { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { CtaBand } from '@/components/cta-band'
import { TechStrip } from '@/components/tech-strip'
import { getCachedSiteSettings } from '@/lib/cache'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Rizky Pramudita — a fullstack engineer and product designer who builds and ships web products end to end.',
}

export const dynamic = 'force-dynamic'

export default async function AboutPage() {
  const settings = await getCachedSiteSettings()

  return (
    <>
      <Container className="py-16 sm:py-24">
        <div className="grid items-start gap-12 md:grid-cols-[240px_1fr]">
          {settings.photoUrl && (
            <div className="mx-auto overflow-hidden rounded-2xl border border-border bg-surface">
              <Image
                src={settings.photoUrl}
                alt="Portrait of Rizky Pramudita"
                width={240}
                height={300}
                className="h-[300px] w-[240px] object-cover"
                priority
              />
            </div>
          )}

          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-yellow/80">About</p>
            <h1 className="text-3xl font-extrabold sm:text-5xl">{siteConfig.name}</h1>
            <p className="mt-2 text-xl font-semibold text-white">
              Software Engineering &amp; Product Design
            </p>

            <div className="mt-6 space-y-5 text-lg font-light leading-relaxed text-greytext">
              <p>{settings.aboutSnippet}</p>
              <p>
                I work across the whole stack — frontend, backend, and cloud — and I care about
                the product, not just the code. That means I can take a rough idea, shape it into
                something usable, and ship it without needing a big team around me.
              </p>
              <p>
                I’m a multiple-hat engineer by choice: comfortable owning UX decisions, building
                the API, and getting it live. For clients, that’s one accountable person instead
                of a handoff chain.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Section eyebrow="Toolbox" title="What I work with" className="bg-surface/30">
        <TechStrip />
      </Section>

      <CtaBand />
    </>
  )
}
