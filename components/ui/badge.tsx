import * as React from 'react'
import { cn } from '@/lib/utils'

export function Badge({
  children,
  variant = 'grey',
  className,
}: {
  children: React.ReactNode
  variant?: 'grey' | 'pink' | 'yellow'
  className?: string
}) {
  const variants = {
    grey: 'bg-greycard text-greytext',
    pink: 'bg-pink text-white',
    yellow: 'bg-yellow/15 text-yellow',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
