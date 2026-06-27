import * as React from 'react'
import { cn } from '@/lib/utils'
import { Container } from './container'

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  containerClassName,
  children,
}: {
  id?: string
  eyebrow?: string
  title?: string
  description?: string
  className?: string
  containerClassName?: string
  children?: React.ReactNode
}) {
  return (
    <section id={id} className={cn('py-16 sm:py-24', className)}>
      <Container className={containerClassName}>
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-yellow/80">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
            )}
            {description && (
              <p className="mt-4 text-lg font-light text-greytext">{description}</p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}
