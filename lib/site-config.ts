/**
 * Static brand/site constants. Editable here in code.
 * Marketing copy that you may want to change without redeploying
 * (hero headline, about snippet, contact email, etc.) lives in the
 * DB `siteSettings` row and is managed from /admin.
 */
export const siteConfig = {
  name: 'Rizky Pramudita',
  shortName: 'rizkeeps',
  // Used as metadataBase + in sitemap/robots/OG. Override with NEXT_PUBLIC_SITE_URL in prod.
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://rizkeeps.com',
  title: 'Rizky Pramudita — Fullstack web developer',
  description:
    'I build fast, reliable web apps for startups and businesses — designed, shipped, and maintained end to end.',
  // Fallback contact email if the DB settings row has none yet.
  email: 'rzkprmdt@gmail.com',
  responsePromise: 'I reply within 24 hours.',
} as const
