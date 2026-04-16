import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site-url'
import { tier1Pages, extraNicheCologne } from '@/lib/locations'
import { blogPosts } from '@/content/blog-posts'

type SitemapEntry = MetadataRoute.Sitemap[number]

const STATIC_SLUGS = ['portfolio', 'blog', 'impressum', 'datenschutz'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const homepage: SitemapEntry = {
    url: SITE_URL,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 1,
  }

  const tier1: SitemapEntry[] = [...tier1Pages, ...extraNicheCologne].map((t) => ({
    url: `${SITE_URL}/${t.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const staticPages: SitemapEntry[] = STATIC_SLUGS.map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: slug === 'blog' ? 'weekly' : 'yearly',
    priority: slug === 'portfolio' ? 0.7 : slug === 'blog' ? 0.7 : 0.3,
  }))

  const blog: SitemapEntry[] = blogPosts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.publishedDate),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [homepage, ...tier1, ...staticPages, ...blog]
}
