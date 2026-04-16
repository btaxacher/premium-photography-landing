import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { SubPageCta } from '@/components/sections/sub-page-cta'
import { BlogPostingSchema } from '@/components/seo/BlogPostingSchema'
import { blogPosts, type BlogPost } from '@/content/blog-posts'
import { SITE_URL } from '@/lib/site-url'

const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`

const CATEGORY_HERO: Record<string, string> = {
  Hochzeit: 'photo-1606216794074-735e91aa2c92',
  Locations: 'photo-1464207687429-7505649dae38',
  Bewerbung: 'photo-1573496359142-b8d87734a5a2',
  Guide: 'photo-1606800052052-a08af7148866',
}

function countWords(post: BlogPost): number {
  const all = [
    post.title,
    post.description,
    ...post.intro,
    ...post.sections.flatMap((s) => [s.h2, ...s.paragraphs, ...(s.list ?? [])]),
    post.closing,
  ]
  return all.join(' ').trim().split(/\s+/).filter(Boolean).length
}

export function BlogPostPage({ post }: { post: BlogPost }) {
  const hero = CATEGORY_HERO[post.category] ?? 'photo-1606216794074-735e91aa2c92'
  const heroUrl = U(hero, 1800)

  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2)

  return (
    <main className="relative min-h-screen bg-bg">
      <Breadcrumbs items={[
        { name: 'Journal', path: '/blog' },
        { name: post.title, path: `/blog/${post.slug}` },
      ]} />

      <article>
        <header className="bg-bg pt-14 md:pt-20 pb-10 md:pb-14">
          <div className="mx-auto w-full max-w-[900px] px-5 md:px-8 lg:px-12">
            <div className="flex items-center gap-3 text-xs text-fg-subtle mb-5 uppercase tracking-[0.2em]">
              <span>{post.category}</span>
              <span className="text-fg-subtle/50">·</span>
              <span>{post.readTime} Min Lesezeit</span>
              <span className="text-fg-subtle/50">·</span>
              <time dateTime={post.publishedDate}>
                {new Date(post.publishedDate).toLocaleDateString('de-DE', {
                  day: 'numeric', month: 'long', year: 'numeric',
                })}
              </time>
            </div>
            <h1
              className="editorial-display text-fg leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(2rem, 4.4vw, 3.6rem)', fontWeight: 500 }}
            >
              {post.title}
            </h1>
            <p className="mt-6 md:mt-8 text-lg md:text-xl text-fg-muted leading-[1.6]">
              {post.description}
            </p>
          </div>
        </header>

        <div className="mx-auto w-full max-w-[1100px] px-5 md:px-8 lg:px-12">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-bg-card shadow-editorial">
            <Image
              src={heroUrl}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1100px) 100vw, 1100px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="bg-bg py-14 md:py-20">
          <div className="mx-auto w-full max-w-[720px] px-5 md:px-8 lg:px-12">
            <div className="prose-warm space-y-5 text-fg-muted text-base md:text-lg leading-[1.8]">
              {post.intro.map((p, i) => (
                <p key={i} className={i === 0 ? 'first-letter:font-display first-letter:text-5xl first-letter:mr-2 first-letter:float-left first-letter:leading-[1]' : ''}>
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-12 space-y-12">
              {post.sections.map((section, i) => (
                <section key={i}>
                  <h2
                    className="editorial-display text-fg mb-5 leading-[1.15] tracking-tight"
                    style={{ fontSize: 'clamp(1.4rem, 2.6vw, 1.9rem)', fontWeight: 500 }}
                  >
                    {section.h2}
                  </h2>
                  <div className="prose-warm space-y-4 text-fg-muted text-base md:text-lg leading-[1.75]">
                    {section.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                    {section.list?.length ? (
                      <ul className="list-disc pl-6 space-y-2 text-fg-muted">
                        {section.list.map((li, k) => (
                          <li key={k}>{li}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-14 pt-10 border-t border-border">
              <p className="text-base md:text-lg text-fg leading-[1.7]">
                {post.closing}
              </p>
            </div>
          </div>
        </div>

        {related.length ? (
          <section className="bg-bg-secondary py-14 md:py-20">
            <div className="mx-auto w-full max-w-[1100px] px-5 md:px-8 lg:px-12">
              <div className="mb-10 max-w-[68ch]">
                <p className="eyebrow eyebrow-gold mb-3">Weiterlesen</p>
                <h2
                  className="editorial-display text-fg leading-[1.1] tracking-tight"
                  style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 500 }}
                >
                  Weitere Artikel aus dem Journal
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group block bg-bg-surface border border-border rounded-sm p-7 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 ease-editorial"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="editorial-display text-fg text-lg md:text-xl font-medium leading-[1.25]">
                        {p.title}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-accent-gold group-hover:text-accent-terra transition-colors" />
                    </div>
                    <p className="text-sm text-fg-muted leading-[1.6]">{p.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <SubPageCta
          heading="Selbst fotografieren lassen?"
          body="Wenn Sie diesen Artikel gelesen haben und Ihren eigenen Termin buchen möchten — schreiben Sie uns."
        />
      </article>

      <BlogPostingSchema
        headline={post.title}
        description={post.description}
        slug={post.slug}
        image={heroUrl}
        datePublished={post.publishedDate}
        wordCount={countWords(post)}
        keywords={post.keyword ? [post.keyword] : undefined}
      />
    </main>
  )
}
