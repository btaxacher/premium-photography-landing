import { BlogIndexPage } from '@/components/pages/blog-index-template'
import { buildMetadata } from '@/lib/metadata'

export const generateMetadata = () =>
  buildMetadata({
    title: 'Journal | Lichtraum Fotostudio — Fotografie, Hochzeit, Bewerbung',
    description:
      'Fotografie-Journal: Guides, Location-Tipps, Preis-Einordnungen und Erfahrungen aus Hochzeitsreportagen und Business-Shoots im Rheinland.',
    path: '/blog',
  })

export default function BlogRoute() {
  return <BlogIndexPage />
}
