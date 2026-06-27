import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { ButtonLink } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ProjectCard } from '@/components/project-card'
import { TechStrip } from '@/components/tech-strip'
import { CtaBand } from '@/components/cta-band'
import { getCachedPublishedProjects, getCachedSiteSettings } from '@/lib/cache'
import { getServices, getTestimonials } from '@/lib/content'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const [settings, projects] = await Promise.all([
    getCachedSiteSettings(),
    getCachedPublishedProjects(),
  ])
  const services = getServices()
  const testimonials = getTestimonials()
  const featured = projects.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <Container className="pt-16 pb-10 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="yellow" className="mb-6">
            Available for freelance projects
          </Badge>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl">
            {settings.heroHeadline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-greytext sm:text-xl">
            {settings.valueProp}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact" size="lg">
              Start a project →
            </ButtonLink>
            <ButtonLink href="/work" variant="secondary" size="lg">
              See my work
            </ButtonLink>
          </div>
        </div>

        {/* Proof strip */}
        <div className="mt-16 border-t border-border pt-10">
          <p className="mb-6 text-center text-sm font-bold uppercase tracking-widest text-grey">
            Tools &amp; frameworks I build with
          </p>
          <TechStrip />
        </div>
      </Container>

      {/* Selected work */}
      {featured.length > 0 && (
        <Section
          eyebrow="Selected work"
          title="Problems solved, results shipped"
          description="A few projects where I turned a real problem into a working product."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/work" variant="ghost">
              View all work →
            </ButtonLink>
          </div>
        </Section>
      )}

      {/* Services summary */}
      <Section
        eyebrow="Services"
        title="How I can help"
        description="Clear offerings with honest pricing — so you know what you’re getting."
        className="bg-surface/30"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Card key={s.slug} className="flex flex-col">
              <h3 className="text-lg font-bold text-white">{s.name}</h3>
              <p className="mt-2 flex-1 text-sm font-light text-greytext">{s.tagline}</p>
              <p className="mt-4 text-sm font-bold text-yellow">
                from ${s.priceFromUSD.toLocaleString()}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/services" variant="ghost">
            See services &amp; pricing →
          </ButtonLink>
        </div>
      </Section>

      {/* About snippet */}
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-[200px_1fr]">
          {settings.photoUrl && (
            <div className="mx-auto overflow-hidden rounded-2xl border border-border bg-surface">
              <Image
                src={settings.photoUrl}
                alt="Portrait of Rizky"
                width={200}
                height={240}
                className="h-60 w-[200px] object-cover"
              />
            </div>
          )}
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-yellow/80">About</p>
            <p className="text-xl font-light leading-relaxed text-greytext">{settings.aboutSnippet}</p>
            <div className="mt-6">
              <Link href="/about" className="font-bold text-yellow hover:underline">
                More about me →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      {testimonials.length > 0 && (
        <Section className="py-10">
          <figure className="mx-auto max-w-2xl text-center">
            <blockquote className="text-2xl font-light italic text-white">
              “{testimonials[0].quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm text-greytext">
              — {testimonials[0].author}, {testimonials[0].role}
            </figcaption>
          </figure>
        </Section>
      )}

      <CtaBand />
    </>
  )
}
