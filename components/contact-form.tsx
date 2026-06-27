'use client'
import { useState } from 'react'
import { Field, Input, Textarea, Select } from '@/components/ui/field'
import { Button } from '@/components/ui/button'

const projectTypes = [
  'Landing page + CMS',
  'Fullstack web app',
  'Maintenance / retainer',
  'Something else',
]

const budgets = [
  'Under $1,000',
  '$1,000 – $3,000',
  '$3,000 – $7,000',
  '$7,000+',
  'Not sure yet',
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string>('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setError('')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json().catch(() => ({}))

      if (!res.ok || !json.ok) {
        throw new Error(json.error || 'Something went wrong. Please email me directly.')
      }
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-yellow/30 bg-yellow/10 p-8 text-center">
        <p className="text-2xl font-extrabold text-white">Thanks — message received. ✅</p>
        <p className="mt-3 text-greytext">
          I’ll get back to you within 24 hours. If it’s urgent, email me directly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Honeypot — hidden from humans, bots fill it */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <Input id="name" name="name" required placeholder="Your name" maxLength={120} />
        </Field>
        <Field label="Email" htmlFor="email">
          <Input id="email" name="email" type="email" required placeholder="you@email.com" maxLength={200} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Project type" htmlFor="projectType">
          <Select id="projectType" name="projectType" defaultValue="">
            <option value="" disabled>Select one…</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </Select>
        </Field>
        <Field label="Budget" htmlFor="budget">
          <Select id="budget" name="budget" defaultValue="">
            <option value="" disabled>Select a range…</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Message" htmlFor="message">
        <Textarea
          id="message"
          name="message"
          required
          placeholder="What are you building? What problem are you trying to solve?"
          maxLength={4000}
        />
      </Field>

      {status === 'error' && (
        <p className="rounded-lg border border-pink/40 bg-pink/10 px-4 py-3 text-sm text-pink">
          {error}
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send message →'}
      </Button>
    </form>
  )
}
