import { JsonLd } from './JsonLd'
import { SITE_URL } from '@/lib/site-url'
import { brand } from '@/lib/content'

type Props = {
  headline: string
  description: string
  slug: string
  image?: string
  datePublished: string
  dateModified?: string
  wordCount?: number
  keywords?: string[]
}

export function BlogPostingSchema({
  headline,
  description,
  slug,
  image,
  datePublished,
  dateModified,
  wordCount,
  keywords,
}: Props) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline,
        description,
        url: `${SITE_URL}/blog/${slug}`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${slug}` },
        author: { '@type': 'Organization', name: brand.studio, url: SITE_URL },
        publisher: {
          '@type': 'Organization',
          name: brand.studio,
          url: SITE_URL,
          logo: { '@type': 'ImageObject', url: `${SITE_URL}/og.jpg` },
        },
        datePublished,
        dateModified: dateModified ?? datePublished,
        ...(image ? { image } : {}),
        ...(wordCount ? { wordCount } : {}),
        ...(keywords?.length ? { keywords: keywords.join(', ') } : {}),
        inLanguage: 'de-DE',
      }}
    />
  )
}
