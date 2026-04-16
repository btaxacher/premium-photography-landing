import { notFound } from 'next/navigation'
import { BlogPostPage } from '@/components/pages/blog-post-template'
import { blogPosts } from '@/content/blog-posts'
import { buildMetadata } from '@/lib/metadata'

type Params = { slug: string }

export async function generateStaticParams(): Promise<Params[]> {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return buildMetadata({
    title: `${post.title} | Lichtraum Journal`,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keyword ? [post.keyword] : undefined,
  })
}

export default async function BlogPostRoute({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()
  return <BlogPostPage post={post} />
}
