import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { ContactForm } from '@/components/contact-form'
import { getSiteSettings } from '@/lib/queries'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Tell me about your project. I reply within 24 hours.',
}

export const dynamic = 'force-dynamic'

export default async function ContactPage() {
  let email: string = siteConfig.email
  let responsePromise: string = siteConfig.responsePromise
  try {
    const settings = await getSiteSettings()
    email = settings.email || email
    responsePromise = settings.responsePromise || responsePromise
  } catch {
    // fall back to static config
  }

  return (
    <Container className="py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-yellow/80">Contact</p>
          <h1 className="text-3xl font-extrabold sm:text-5xl">Let’s build something.</h1>
          <p className="mt-5 text-lg font-light text-greytext">
            Tell me what you’re working on and roughly what you need. The more detail, the
            better I can help.
          </p>
          <p className="mt-6 font-bold text-yellow">{responsePromise}</p>

          <div className="mt-8 border-t border-border pt-6">
            <p className="text-sm font-semibold text-white">Prefer email?</p>
            <a href={`mailto:${email}`} className="text-greytext hover:text-yellow">
              {email}
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6 shadow-card sm:p-8">
          <ContactForm />
        </div>
      </div>
    </Container>
  )
}
