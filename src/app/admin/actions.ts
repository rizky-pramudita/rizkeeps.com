'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { eq } from 'drizzle-orm'
import { db } from '@/lib/db'
import { projects, siteSettings, contactSubmissions } from '@/lib/db/schema'
import { verifyPassword, createSession, destroySession, requireAdmin } from '@/lib/auth'
import { bustContentCache } from '@/lib/cache'

// ---- helpers ----------------------------------------------------------------

function str(form: FormData, key: string): string {
  return (form.get(key) ?? '').toString().trim()
}

function bool(form: FormData, key: string): boolean {
  return form.get(key) != null
}

function int(form: FormData, key: string, fallback = 0): number {
  const n = parseInt(str(form, key), 10)
  return Number.isFinite(n) ? n : fallback
}

/** Split a textarea of comma- or newline-separated values into a clean array. */
function list(form: FormData, key: string): string[] {
  return str(form, key)
    .split(/[\n,]/)
    .map((s) => s.trim())
    .filter(Boolean)
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

async function afterContentChange() {
  await bustContentCache()
  revalidatePath('/')
  revalidatePath('/work')
  revalidatePath('/admin/projects')
}

// ---- auth -------------------------------------------------------------------

export async function loginAction(formData: FormData) {
  const password = str(formData, 'password')
  if (!password || !verifyPassword(password)) {
    redirect('/admin/login?error=1')
  }
  await createSession()
  redirect('/admin')
}

export async function logoutAction() {
  await destroySession()
  redirect('/admin/login')
}

// ---- projects ---------------------------------------------------------------

function projectValuesFromForm(formData: FormData) {
  const name = str(formData, 'name')
  const slug = str(formData, 'slug') || slugify(name)
  return {
    slug,
    name,
    client: str(formData, 'client'),
    summary: str(formData, 'summary'),
    problem: str(formData, 'problem'),
    approach: str(formData, 'approach'),
    result: str(formData, 'result'),
    metric: str(formData, 'metric'),
    stack: list(formData, 'stack'),
    images: list(formData, 'images'),
    tags: list(formData, 'tags'),
    liveUrl: str(formData, 'liveUrl'),
    published: bool(formData, 'published'),
    sortOrder: int(formData, 'sortOrder'),
  }
}

export async function createProjectAction(formData: FormData) {
  await requireAdmin()
  const values = projectValuesFromForm(formData)
  if (!values.name || !values.slug) {
    redirect('/admin/projects/new?error=name')
  }
  await db.insert(projects).values(values)
  await afterContentChange()
  redirect('/admin/projects')
}

export async function updateProjectAction(formData: FormData) {
  await requireAdmin()
  const id = int(formData, 'id')
  const values = projectValuesFromForm(formData)
  await db
    .update(projects)
    .set({ ...values, updatedAt: new Date() })
    .where(eq(projects.id, id))
  await afterContentChange()
  revalidatePath(`/work/${values.slug}`)
  redirect('/admin/projects')
}

export async function deleteProjectAction(formData: FormData) {
  await requireAdmin()
  const id = int(formData, 'id')
  await db.delete(projects).where(eq(projects.id, id))
  await afterContentChange()
  redirect('/admin/projects')
}

// ---- site settings ----------------------------------------------------------

export async function updateSettingsAction(formData: FormData) {
  await requireAdmin()
  const values = {
    id: 1,
    heroHeadline: str(formData, 'heroHeadline'),
    valueProp: str(formData, 'valueProp'),
    aboutSnippet: str(formData, 'aboutSnippet'),
    email: str(formData, 'email'),
    responsePromise: str(formData, 'responsePromise'),
    photoUrl: str(formData, 'photoUrl'),
    updatedAt: new Date(),
  }
  await db
    .insert(siteSettings)
    .values(values)
    .onConflictDoUpdate({ target: siteSettings.id, set: values })
  await bustContentCache()
  revalidatePath('/')
  revalidatePath('/about')
  redirect('/admin/settings?saved=1')
}

// ---- submissions ------------------------------------------------------------

export async function markSubmissionHandledAction(formData: FormData) {
  await requireAdmin()
  const id = int(formData, 'id')
  const handled = str(formData, 'handled') === 'true'
  await db.update(contactSubmissions).set({ handled }).where(eq(contactSubmissions.id, id))
  revalidatePath('/admin/submissions')
}
