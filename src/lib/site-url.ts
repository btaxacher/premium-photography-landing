/**
 * Single source of truth for the site URL used in JSON-LD, sitemap, robots, OG tags.
 * Set NEXT_PUBLIC_SITE_URL in Vercel env once the real domain is connected.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lichtraum-studio.vercel.app'
