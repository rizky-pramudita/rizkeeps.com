import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed'

const variants: Record<Variant, string> = {
  primary: 'bg-yellow text-blackbg hover:opacity-90 hover:shadow-glow',
  secondary: 'bg-greycard text-white hover:bg-grey',
  ghost: 'text-white hover:text-yellow',
}

const sizes: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm sm:text-base',
  lg: 'px-6 py-3 text-base sm:text-lg',
}

type CommonProps = {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}

export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: CommonProps & { href: string } & Omit<React.ComponentProps<typeof Link>, 'href' | 'className'>) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Link>
  )
}
