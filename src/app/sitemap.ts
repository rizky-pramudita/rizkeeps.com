import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'
import { getPublishedProjects } from '@/lib/queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url

  const staticRoutes = ['', '/work', '/services', '/about', '/contact'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }))

  let projectRoutes: MetadataRoute.Sitemap = []
  try {
    const projects = await getPublishedProjects()
    projectRoutes = projects.map((p) => ({
      url: `${base}/work/${p.slug}`,
      lastModified: p.updatedAt ?? new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch {
    // DB unavailable at build/request time — return static routes only.
  }

  return [...staticRoutes, ...projectRoutes]
}
