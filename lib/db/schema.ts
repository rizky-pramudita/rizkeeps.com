import {
  pgTable,
  serial,
  text,
  boolean,
  integer,
  timestamp,
  jsonb,
} from 'drizzle-orm/pg-core'

/**
 * Case studies / portfolio projects. Managed from /admin.
 * Array-ish fields (stack, images, tags) are stored as jsonb string[].
 */
export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  slug: text('slug').notNull().unique(),
  name: text('name').notNull(),
  client: text('client').default('').notNull(),
  summary: text('summary').default('').notNull(),
  problem: text('problem').default('').notNull(),
  approach: text('approach').default('').notNull(),
  result: text('result').default('').notNull(),
  metric: text('metric').default('').notNull(),
  stack: jsonb('stack').$type<string[]>().default([]).notNull(),
  images: jsonb('images').$type<string[]>().default([]).notNull(),
  tags: jsonb('tags').$type<string[]>().default([]).notNull(),
  liveUrl: text('live_url').default('').notNull(),
  published: boolean('published').default(false).notNull(),
  sortOrder: integer('sort_order').default(0).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
})

/**
 * Single-row table holding editable marketing copy for the home/about pages.
 * Always read/written at id = 1.
 */
export const siteSettings = pgTable('site_settings', {
  id: integer('id').primaryKey().default(1),
  heroHeadline: text('hero_headline').default('').notNull(),
  valueProp: text('value_prop').default('').notNull(),
  aboutSnippet: text('about_snippet').default('').notNull(),
  email: text('email').default('').notNull(),
  responsePromise: text('response_promise').default('').notNull(),
  photoUrl: text('photo_url').default('').notNull(),
  socials: jsonb('socials').$type<{ label: string; url: string }[]>().default([]).notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
})

/** Durable log of every contact-form submission (backup to email). */
export const contactSubmissions = pgTable('contact_submissions', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  projectType: text('project_type').default('').notNull(),
  budget: text('budget').default('').notNull(),
  message: text('message').notNull(),
  handled: boolean('handled').default(false).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

export type Project = typeof projects.$inferSelect
export type NewProject = typeof projects.$inferInsert
export type SiteSettings = typeof siteSettings.$inferSelect
export type ContactSubmission = typeof contactSubmissions.$inferSelect
