/**
 * Service offerings. Edit here in code (not managed from /admin).
 * Prices are USD "from" signals to filter tire-kickers — adjust to your real rates.
 */
export type Service = {
  slug: string
  name: string
  tagline: string
  includes: string[]
  timeline: string
  priceFromUSD: number
  idealFor: string
}

export const services: Service[] = [
  {
    slug: 'landing-cms',
    name: 'Landing Page + CMS',
    tagline: 'A fast, credible web presence you can update yourself.',
    includes: [
      'Mobile-first responsive design',
      'Up to 5 sections / pages',
      'Lightweight CMS for self-editing',
      'SEO + social preview setup',
      'Deploy to your domain',
    ],
    timeline: '1–2 weeks',
    priceFromUSD: 600,
    idealFor: 'Solo founders & small businesses needing to look legit online.',
  },
  {
    slug: 'fullstack-app',
    name: 'Fullstack Web App',
    tagline: 'From idea to a production-ready product, built end to end.',
    includes: [
      'Product & UX scoping',
      'Frontend + backend + database',
      'Auth, dashboards, integrations',
      'Deployment & monitoring',
      'Handover docs',
    ],
    timeline: '3–6 weeks',
    priceFromUSD: 2500,
    idealFor: 'Startups & teams that need a real feature or MVP shipped fast.',
  },
  {
    slug: 'maintenance',
    name: 'Maintenance & Iteration Retainer',
    tagline: 'A reliable dev on call to keep things shipping.',
    includes: [
      'Monthly block of dev hours',
      'Bug fixes & small features',
      'Performance & security upkeep',
      'Priority response',
    ],
    timeline: 'Monthly',
    priceFromUSD: 400,
    idealFor: 'Existing sites/apps that need ongoing care without a full-time hire.',
  },
]

export const processSteps = [
  { title: 'Brief', description: 'We talk through your goal, scope, and budget — no jargon.' },
  { title: 'Build', description: 'I design and develop in short, visible increments.' },
  { title: 'Review', description: 'You see progress early and steer before launch.' },
  { title: 'Launch', description: 'I ship it to your domain and make sure it works.' },
]
