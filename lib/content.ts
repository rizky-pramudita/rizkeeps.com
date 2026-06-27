import { services, processSteps, type Service } from '@/content/services'
import { testimonials, type Testimonial } from '@/content/testimonials'

export function getServices(): Service[] {
  return services
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getProcessSteps() {
  return processSteps
}

export function getTestimonials(): Testimonial[] {
  return testimonials
}
