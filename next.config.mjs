/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'randomuser.me' },
      { protocol: 'https', hostname: 'cdn.cosmos.so' },
    ],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', 'react-icons'],
  },
  async redirects() {
    return [
      // Legacy anchor-URL paths (from Luna-Ferris single-page era, should anyone have bookmarked them)
      { source: '/work', destination: '/portfolio', permanent: true },
      { source: '/services', destination: '/leistungen/portraitfotograf', permanent: true },
      { source: '/contact', destination: '/kontakt', permanent: true },
      { source: '/about', destination: '/ueber-uns', permanent: true },
      // Common keyword typos / alternative slugs
      { source: '/hochzeit-koeln', destination: '/hochzeitsfotograf-koeln', permanent: true },
      { source: '/bewerbungsfoto-koeln', destination: '/bewerbungsfotos-koeln', permanent: true },
      { source: '/fotografin-koeln', destination: '/fotograf-koeln', permanent: true },
      { source: '/fotograf-euskirchen', destination: '/', permanent: true },
      { source: '/fotostudio-euskirchen', destination: '/', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/:path*.(jpg|jpeg|png|webp|avif|svg|gif|woff2)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ]
  },
}

export default nextConfig
