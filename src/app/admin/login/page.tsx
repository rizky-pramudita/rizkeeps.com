import type { Metadata } from 'next'
import { Field, Input } from '@/components/ui/field'
import { Button } from '@/components/ui/button'
import { loginAction } from '@/src/app/admin/actions'
import { isAuthenticated } from '@/lib/auth'
import { redirect } from 'next/navigation'

export const metadata: Metadata = { title: 'Admin login', robots: { index: false } }

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string }
}) {
  if (await isAuthenticated()) redirect('/admin')

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-8 shadow-card">
        <h1 className="text-2xl font-extrabold text-white">Admin</h1>
        <p className="mt-1 text-sm text-greytext">Enter your password to manage content.</p>

        <form action={loginAction} className="mt-6 flex flex-col gap-4">
          <Field label="Password" htmlFor="password">
            <Input id="password" name="password" type="password" required autoFocus />
          </Field>

          {searchParams.error && (
            <p className="rounded-lg border border-pink/40 bg-pink/10 px-3 py-2 text-sm text-pink">
              Incorrect password.
            </p>
          )}

          <Button type="submit" className="w-full">
            Log in
          </Button>
        </form>
      </div>
    </div>
  )
}
