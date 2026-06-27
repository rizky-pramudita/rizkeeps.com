import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Card({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border bg-surface p-6 shadow-card',
        className
      )}
    >
      {children}
    </div>
  )
}

export function CardLink({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group block rounded-2xl border border-border bg-surface p-6 shadow-card transition-all hover:border-yellow/40 hover:shadow-glow',
        className
      )}
    >
      {children}
    </Link>
  )
}
