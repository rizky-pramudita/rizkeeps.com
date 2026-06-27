# rizkeeps.com

Personal portfolio + freelance site. Fullstack **Next.js (App Router)** with a
Postgres-backed CMS, a password-protected admin, and a contact form that emails you
and logs every inquiry.

## Stack

- **Next.js 13** App Router + TypeScript
- **Tailwind CSS** (+ DaisyUI for the navbar)
- **Postgres** via **Drizzle ORM**
- **Redis** (ioredis) — admin sessions, contact rate limiting, content caching
- **Resend** — contact-form email delivery
- **Vercel Analytics**

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy env and fill it in:
   ```bash
   cp .env.example .env
   ```
   Required: `DB_URL`, `REDIS_URL`, `ADMIN_PASSWORD`. For the contact email to send:
   `RESEND_API_KEY` + `CONTACT_TO_EMAIL`.
3. Create the database schema and seed placeholder content:
   ```bash
   npm run db:generate   # generate SQL migration from lib/db/schema.ts
   npm run db:migrate    # apply it to DB_URL
   npm run db:seed       # default site settings + 3 placeholder projects
   ```
   (`npm run db:push` is a quick alternative to generate+migrate during early dev.)
4. Run it:
   ```bash
   npm run dev
   ```
   Site: http://localhost:3000 · Admin: http://localhost:3000/admin

## Editing content

- **Projects, site settings, inquiries** → the admin at `/admin` (log in with
  `ADMIN_PASSWORD`). Images are pasted Cloudinary URLs (no upload step).
- **Services & pricing, testimonials** → edited in code at
  `content/services.ts` and `content/testimonials.ts`.
- **Brand constants** (name, default SEO, fallback email) → `lib/site-config.ts`.

## Database scripts

| Script | What it does |
|---|---|
| `npm run db:generate` | Generate a migration from the schema |
| `npm run db:migrate` | Apply migrations to `DB_URL` |
| `npm run db:push` | Push schema directly (skip migration files) |
| `npm run db:studio` | Open Drizzle Studio |
| `npm run db:seed` | Seed defaults + placeholder projects |

## Deploy

Deploys to Vercel as a server-rendered app (not a static export — the DB, admin,
and contact API need a server runtime). Set all `.env` values as Vercel project
environment variables, and run the migrations against your production database.
