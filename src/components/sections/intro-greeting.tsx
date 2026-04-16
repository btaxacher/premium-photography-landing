'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { introContent } from '@/lib/content'

const editorialEase = [0.22, 1, 0.36, 1] as const

/**
 * IntroGreeting — warme, persönliche Begrüßung.
 * Layout 40/60 (Bild links, Text rechts) auf Desktop, stacked Mobile.
 * Ersetzt die alte Manifest-Section.
 */
export function IntroGreeting() {
  return (
    <section
      id="about"
      className="relative w-full bg-bg py-20 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 lg:gap-20 items-center">
          {/* LEFT — Image (40%) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: editorialEase }}
            className="md:col-span-2 relative"
          >
            <div className="relative w-full aspect-square overflow-hidden rounded-sm">
              <Image
                src={introContent.image.src}
                alt={introContent.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT — Content (60%) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: editorialEase }}
            className="md:col-span-3"
          >
            <p className="script-heading script-tilt-mild text-3xl md:text-4xl lg:text-[3rem]">
              {introContent.script}
            </p>

            <h2
              className="editorial-display text-fg mt-4 md:mt-5 leading-[1.1]"
              style={{ fontSize: 'clamp(1.8rem, 3.6vw, 3rem)', fontWeight: 500 }}
            >
              {introContent.h2}
            </h2>

            <div className="mt-6 md:mt-8 space-y-4 text-fg-muted leading-[1.7] text-base md:text-lg max-w-[620px]">
              {introContent.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <p className="script-heading mt-8 text-2xl md:text-3xl">
              {introContent.signature}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
