import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { getSiteSettings } from '@/lib/queries'
import { siteConfig } from '@/lib/site-config'

const nav = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default async function Footer() {
  let email: string = siteConfig.email
  let responsePromise: string = siteConfig.responsePromise
  try {
    const settings = await getSiteSettings()
    email = settings.email || email
    responsePromise = settings.responsePromise || responsePromise
  } catch {
    // DB not reachable at render time — fall back to static config.
  }

  return (
    <footer className="border-t border-border bg-blackbg">
      <Container className="py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-extrabold text-white">{siteConfig.name}</p>
            <p className="mt-2 text-sm text-greytext">{siteConfig.description}</p>
            <p className="mt-3 text-sm font-semibold text-yellow">{responsePromise}</p>
          </div>

          <nav className="flex flex-col gap-2" aria-label="Footer">
            {nav.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-greytext hover:text-yellow">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-white">Get in touch</p>
            <a href={`mailto:${email}`} className="text-sm text-greytext hover:text-yellow">
              {email}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-grey">
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js.
        </div>
      </Container>
    </footer>
  )
}
