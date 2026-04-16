import { JsonLd } from './JsonLd'

type Faq = { q: string; a: string }

export function FaqPageSchema({ faqs }: { faqs: Faq[] }) {
  if (!faqs?.length) return null
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }}
    />
  )
}
