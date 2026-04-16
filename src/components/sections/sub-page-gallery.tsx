import Image from 'next/image'

type GalleryImage = { src: string; alt: string; aspect?: 'portrait' | 'landscape' | 'square' }

type Props = {
  images: GalleryImage[]
  heading?: string
  eyebrow?: string
}

/**
 * Warm-Editorial Gallery Grid für Sub-Pages.
 * Uniform portrait aspect (4:5) — passt zu allen Nano-Banana-Ausgaben und vermeidet Lücken.
 * Server-Component, kein Lightbox.
 */
export function SubPageGallery({ images, heading, eyebrow }: Props) {
  return (
    <section className="bg-bg py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
        {(eyebrow || heading) ? (
          <div className="mb-10 md:mb-14 max-w-[68ch] mx-auto text-center">
            {eyebrow ? <p className="eyebrow eyebrow-gold mb-3">{eyebrow}</p> : null}
            {heading ? (
              <h2
                className="editorial-display text-fg leading-[1.1] tracking-tight"
                style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)', fontWeight: 500 }}
              >
                {heading}
              </h2>
            ) : null}
          </div>
        ) : null}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-sm bg-bg-card shadow-card aspect-[4/5]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
