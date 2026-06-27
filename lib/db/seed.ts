import 'dotenv/config'
import { db } from './index'
import { projects, siteSettings } from './schema'
import { DEFAULT_SETTINGS } from '../queries'

/**
 * Seeds default site settings + placeholder case studies.
 * Idempotent-ish: clears projects then re-inserts. Safe to re-run while
 * you still have only placeholder content. Run: `npm run db:seed`.
 */
const placeholderProjects = [
  {
    slug: 'ml-monolithic-backend',
    name: 'Multiple Machine-Learning Backend Service',
    client: 'A consumer mobile app (anonymized)',
    summary:
      'Consolidated several ML inference services into one well-structured monolithic backend.',
    problem:
      'The team ran multiple ML models across separate services, which was costly to operate and slow to ship changes to. Latency and infra overhead were hurting the product.',
    approach:
      'Designed a single, modular monolithic backend that hosts the models behind a clean internal API, with shared infra, queuing, and observability. Prioritized maintainability over premature microservices.',
    result:
      'Cut infrastructure overhead and simplified deploys — new model updates ship in a fraction of the time, with lower running cost.',
    metric: '~40% lower infra overhead',
    stack: ['Python', 'Flask', 'PostgreSQL', 'Docker', 'GCP'],
    images: [
      'https://res.cloudinary.com/dg4b8sell/image/upload/v1692367277/rizkeeps.com/icons/illustration__cloud_server_servers__voqjtj.svg',
    ],
    tags: ['Backend', 'Machine Learning'],
    liveUrl: '',
    published: true,
    sortOrder: 0,
  },
  {
    slug: 'sme-marketing-site',
    name: 'Marketing Site + CMS for an SME',
    client: 'An Indonesian services business (placeholder — replace me)',
    summary:
      'A fast marketing site with a lightweight CMS so the client can update content themselves.',
    problem:
      'The business relied on social media only and had no credible web presence, losing leads who searched for them online.',
    approach:
      'Built a mobile-first Next.js site with a simple admin so non-technical staff can edit pages, plus SEO and a contact funnel.',
    result:
      'Launched a professional site the client updates on their own, capturing inbound leads that previously went nowhere.',
    metric: 'New inbound lead channel',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    images: [],
    tags: ['Fullstack', 'Web'],
    liveUrl: '',
    published: true,
    sortOrder: 1,
  },
  {
    slug: 'internal-dashboard',
    name: 'Internal Operations Dashboard',
    client: 'A startup operations team (placeholder — replace me)',
    summary:
      'A custom dashboard replacing a tangle of spreadsheets for day-to-day operations.',
    problem:
      'Ops ran on fragile shared spreadsheets — error-prone, no access control, and impossible to trust at scale.',
    approach:
      'Built a role-based fullstack dashboard with a clean data model, auth, and audit-friendly workflows tailored to how the team actually works.',
    result:
      'Replaced the spreadsheet sprawl with a reliable single source of truth, saving the team hours every week.',
    metric: 'Hours saved weekly',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    images: [],
    tags: ['Fullstack', 'Internal Tools'],
    liveUrl: '',
    published: true,
    sortOrder: 2,
  },
]

async function main() {
  console.log('Seeding site settings…')
  await db
    .insert(siteSettings)
    .values({ id: 1, ...DEFAULT_SETTINGS })
    .onConflictDoUpdate({
      target: siteSettings.id,
      set: { ...DEFAULT_SETTINGS, updatedAt: new Date() },
    })

  console.log('Seeding placeholder projects…')
  await db.delete(projects)
  await db.insert(projects).values(placeholderProjects)

  console.log('Done. Edit content from /admin.')
  process.exit(0)
}

main().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
