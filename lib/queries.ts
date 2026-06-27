import { eq, desc, asc } from 'drizzle-orm'
import { db } from '@/lib/db'
import { projects, siteSettings, type SiteSettings } from '@/lib/db/schema'
import { siteConfig } from '@/lib/site-config'

export async function getPublishedProjects() {
  return db
    .select()
    .from(projects)
    .where(eq(projects.published, true))
    .orderBy(asc(projects.sortOrder), desc(projects.createdAt))
}

export async function getAllProjects() {
  return db
    .select()
    .from(projects)
    .orderBy(asc(projects.sortOrder), desc(projects.createdAt))
}

export async function getProjectBySlug(slug: string) {
  const rows = await db.select().from(projects).where(eq(projects.slug, slug)).limit(1)
  return rows[0] ?? null
}

export async function getProjectById(id: number) {
  const rows = await db.select().from(projects).where(eq(projects.id, id)).limit(1)
  return rows[0] ?? null
}

const DEFAULT_SETTINGS: Omit<SiteSettings, 'id' | 'updatedAt'> = {
  heroHeadline: 'I build fast, reliable web apps — designed and shipped end to end.',
  valueProp:
    'Fullstack web developer helping startups and businesses turn ideas into polished, production-ready products.',
  aboutSnippet:
    'I’m Rizky, a fullstack engineer and product designer. I handle the whole build — from UX to backend to launch — so you get one accountable partner, not a handoff chain.',
  email: siteConfig.email,
  responsePromise: siteConfig.responsePromise,
  photoUrl:
    'https://res.cloudinary.com/dg4b8sell/image/upload/v1679290175/rizkeeps.com/DSCF5352-removebg-preview_v5qpub.png',
  socials: [],
}

/** Returns the settings row, falling back to sensible defaults if not seeded yet. */
export async function getSiteSettings(): Promise<SiteSettings> {
  const rows = await db.select().from(siteSettings).where(eq(siteSettings.id, 1)).limit(1)
  if (rows[0]) return rows[0]
  return { id: 1, updatedAt: new Date(), ...DEFAULT_SETTINGS }
}

export { DEFAULT_SETTINGS }
