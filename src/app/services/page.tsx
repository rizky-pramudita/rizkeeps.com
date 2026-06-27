import type { Metadata } from 'next'
import { Section } from '@/components/ui/section'
import { Card } from '@/components/ui/card'
import { ButtonLink } from '@/components/ui/button'
import { CtaBand } from '@/components/cta-band'
import { getServices, getProcessSteps } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Clear web development offerings with honest USD pricing and timelines.',
}

export default function ServicesPage() {
  const services = getServices()
  const steps = getProcessSteps()

  return (
    <>
      <Section
        eyebrow="Services"
        title="What I build & what it costs"
        description="Named offerings with starting prices, so you can quickly see if we’re a fit."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.slug} className="flex flex-col">
              <h3 className="text-xl font-bold text-white">{s.name}</h3>
              <p className="mt-2 text-sm font-light text-greytext">{s.tagline}</p>

              <ul className="mt-5 flex-1 space-y-2">
                {s.includes.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-greytext">
                    <span className="text-yellow">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-border pt-4">
                <p className="text-xs uppercase tracking-widest text-grey">Timeline</p>
                <p className="text-sm font-semibold text-white">{s.timeline}</p>
                <p className="mt-3 text-2xl font-extrabold text-yellow">
                  from ${s.priceFromUSD.toLocaleString()}
                </p>
                <p className="mt-2 text-xs text-grey">{s.idealFor}</p>
              </div>

              <div className="mt-6">
                <ButtonLink href="/contact" variant="secondary" className="w-full">
                  Enquire
                </ButtonLink>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Process"
        title="How working together goes"
        className="bg-surface/30"
      >
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-border bg-surface p-6">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-yellow font-extrabold text-blackbg">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm font-light text-greytext">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand title="Not sure which fits?" subtitle="Tell me about your project and I’ll point you the right way." />
    </>
  )
}
