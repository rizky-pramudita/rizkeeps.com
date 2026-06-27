import { Container } from '@/components/ui/container'
import { ButtonLink } from '@/components/ui/button'

export function CtaBand({
  title = 'Have a project in mind?',
  subtitle = 'Tell me what you’re building. I reply within 24 hours.',
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="rounded-2xl border border-yellow/20 bg-gradient-to-br from-surface to-blackbg p-8 text-center shadow-card sm:p-14">
          <h2 className="text-2xl font-extrabold sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg font-light text-greytext">{subtitle}</p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/contact" size="lg">
              Start a conversation →
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
