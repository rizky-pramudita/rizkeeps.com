import * as React from 'react'
import { cn } from '@/lib/utils'

const fieldBase =
  'w-full rounded-lg border border-border bg-blackbg px-4 py-2.5 text-white placeholder:text-grey focus:border-yellow focus:outline-none transition-colors'

export function Label({
  htmlFor,
  children,
  className,
}: {
  htmlFor?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <label htmlFor={htmlFor} className={cn('mb-1.5 block text-sm font-semibold text-white', className)}>
      {children}
    </label>
  )
}

export function Field({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string
  htmlFor?: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {hint && <p className="mt-1 text-xs text-grey">{hint}</p>}
    </div>
  )
}

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...props }, ref) {
    return <input ref={ref} className={cn(fieldBase, className)} {...props} />
  }
)

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  function Textarea({ className, ...props }, ref) {
    return <textarea ref={ref} className={cn(fieldBase, 'min-h-[120px] resize-y', className)} {...props} />
  }
)

export const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  function Select({ className, children, ...props }, ref) {
    return (
      <select ref={ref} className={cn(fieldBase, 'appearance-none', className)} {...props}>
        {children}
      </select>
    )
  }
)
