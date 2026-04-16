import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cityPages } from '@/content/city-pages'
import { cityPageImages } from '@/content/city-page-images'
import { tier1Content } from '@/content/tier1-content'
import { allTier1 } from '@/lib/locations'
import { SubPageHero } from '@/components/sections/sub-page-hero'
import { ProseSection } from '@/components/sections/prose-section'
import { SubPageGallery } from '@/components/sections/sub-page-gallery'
import { SubPagePricing } from '@/components/sections/sub-page-pricing'
import { SubPageFAQ } from '@/components/sections/sub-page-faq'
import { SubPageCta } from '@/components/sections/sub-page-cta'
import { InternalLinks } from '@/components/sections/internal-links'
import { Breadcrumbs } from '@/components/sections/breadcrumbs'
import { ServiceSchema } from '@/components/seo/ServiceSchema'
import { FaqPageSchema } from '@/components/seo/FaqPageSchema'
import { buildMetadata } from '@/lib/metadata'

export function cityPageMetadata(slug: string): Metadata {
  const page = cityPages[slug]
  if (!page) return {}
  return buildMetadata({
    title: page.meta.title,
    description: page.meta.description,
    path: `/${slug}`,
    image: cityPageImages[slug]?.hero.src,
  })
}

function resolveLink(slug: string): { title: string; description: string; href: string } | null {
  const tier1 = allTier1.find((t) => t.slug === slug)
  if (tier1) {
    const content = tier1Content[slug]
    const introFirst = content?.intro?.[0]?.split('.')?.[0]
    return {
      title: tier1.h1.split('—')[0].trim(),
      description: introFirst ? introFirst.slice(0, 130) + '.' : tier1.description.split('.')[0] + '.',
      href: `/${slug}`,
    }
  }
  const city = cityPages[slug]
  if (city) {
    return {
      title: city.meta.h1.split('—')[0].trim(),
      description: city.intro[0].split('.')[0] + '.',
      href: `/${slug}`,
    }
  }
  return null
}

export function CityPage({ slug }: { slug: string }) {
  const page = cityPages[slug]
  const imgSet = cityPageImages[slug]
  if (!page || !imgSet) notFound()

  const relatedLinks = page.relatedSlugs
    .map((s) => resolveLink(s))
    .filter((l): l is NonNullable<typeof l> => l !== null)

  return (
    <main className="relative min-h-screen">
      <Breadcrumbs items={[{ name: page.meta.h1.split('—')[0].trim(), path: `/${slug}` }]} />

      <SubPageHero
        eyebrow={page.meta.eyebrow}
        h1={page.meta.h1}
        subtitle={page.meta.description}
        image={imgSet.hero}
        secondaryCta={{ label: 'Locations ansehen', href: '#locations' }}
      />

      <ProseSection body={page.intro} />

      {page.sections.map((s, i) => (
        <ProseSection
          key={i}
          h2={s.h2}
          body={s.body}
          variant={i % 2 === 0 ? 'sand' : 'default'}
        />
      ))}

      {page.locations?.length ? (
        <section id="locations" className="bg-bg-secondary py-14 md:py-20">
          <div className="mx-auto w-full max-w-[1100px] px-5 md:px-8 lg:px-12">
            <div className="mb-10 md:mb-14 max-w-[68ch]">
              <p className="eyebrow eyebrow-gold mb-3">Locations vor Ort</p>
              <h2
                className="editorial-display text-fg leading-[1.1] tracking-tight"
                style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)', fontWeight: 500 }}
              >
                Wo wir in {page.meta.city} fotografieren
              </h2>
            </div>
            <ul className="grid gap-4 md:grid-cols-2">
              {page.locations.map((l) => (
                <li
                  key={l.name}
                  className="bg-bg-surface border border-border rounded-sm px-5 py-4 shadow-card"
                >
                  <div className="text-fg font-medium">{l.name}</div>
                  <div className="text-sm text-fg-muted mt-1 leading-[1.6]">{l.note}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <SubPageGallery
        heading={`Bildwelten aus ${page.meta.city}`}
        eyebrow="Galerie"
        images={imgSet.gallery}
      />

      {page.pricing?.length ? (
        <SubPagePricing items={page.pricing} />
      ) : null}

      <SubPageFAQ faqs={page.faqs} />

      <ProseSection
        eyebrow="Nächster Schritt"
        body={[page.closing]}
        variant="sand"
      />

      {relatedLinks.length ? <InternalLinks links={relatedLinks} /> : null}

      <SubPageCta
        heading={`${page.meta.city} fotografisch begleiten.`}
        body="Schreiben Sie uns Anlass und Wunschort. Rückmeldung binnen 24 Stunden."
      />

      <ServiceSchema
        name={page.meta.h1.split('—')[0].trim()}
        description={page.meta.description}
        areaServed={[page.meta.city, 'NRW', 'Rheinland']}
        startingPrice={page.pricing?.[0]?.price.match(/(\d+)/)?.[1]}
        path={`/${slug}`}
      />
      <FaqPageSchema faqs={page.faqs} />
    </main>
  )
}
