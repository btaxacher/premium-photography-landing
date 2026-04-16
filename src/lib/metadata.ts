import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/site-url'
import { brand } from '@/lib/content'

type BuildMetadataOptions = {
  title: string
  description: string
  path: string // '/hochzeitsfotograf-koeln' (with leading slash, no trailing)
  image?: string // absolute or path starting with /
  keywords?: readonly string[]
  noindex?: boolean
}

/**
 * Centralized Metadata builder for sub-pages.
 * All canonical, openGraph, twitter fields use SITE_URL so a domain switch
 * (setting NEXT_PUBLIC_SITE_URL) flips every link automatically.
 */
export function buildMetadata(opts: BuildMetadataOptions): Metadata {
  const url = `${SITE_URL}${opts.path}`
  const imageUrl = opts.image
    ? opts.image.startsWith('http')
      ? opts.image
      : `${SITE_URL}${opts.image}`
    : `${SITE_URL}/og.jpg`

  return {
    title: opts.title,
    description: opts.description,
    ...(opts.keywords?.length ? { keywords: [...opts.keywords] } : {}),
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      type: 'website',
      locale: 'de_DE',
      siteName: brand.studio,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: opts.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
      images: [imageUrl],
    },
    robots: opts.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}
