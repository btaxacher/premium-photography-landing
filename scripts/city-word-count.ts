/**
 * Word-count audit for city-pages (Phase 2).
 */
import { cityPages } from '../src/content/city-pages'
import { nrwHubContent } from '../src/content/nrw-hub-content'

const thresholds: Record<string, number> = {
  'fotograf-bonn': 1000,
  'hochzeitsfotograf-bonn': 1000,
  'hochzeitsfotograf-nrw': 1000,
  'fotograf-leverkusen': 800,
  'fotograf-siegburg': 600,
  'fotograf-bergisch-gladbach': 600,
  'fotograf-erftstadt': 600,
  'fotograf-bergheim': 600,
  'fotograf-kerpen': 600,
  'fotograf-huerth': 600,
  'fotograf-bruehl': 600,
  'fotograf-pulheim': 600,
  'fotograf-weilerswist': 600,
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}

function cityWordCount(slug: string): number {
  if (slug === 'hochzeitsfotograf-nrw') {
    const all: string[] = [
      nrwHubContent.meta.h1,
      nrwHubContent.meta.description,
      ...nrwHubContent.intro,
      ...nrwHubContent.sections.flatMap((s) => [s.h2, ...s.body]),
      ...nrwHubContent.cityCards.flatMap((c) => [c.h3, c.description, ...c.locations]),
      ...nrwHubContent.faqs.flatMap((f) => [f.q, f.a]),
      nrwHubContent.closing,
    ]
    return countWords(all.join(' '))
  }
  const c = cityPages[slug]
  if (!c) return 0
  const all: string[] = [
    c.meta.h1,
    c.meta.description,
    c.meta.eyebrow,
    ...c.intro,
    ...c.sections.flatMap((s) => [s.h2, ...s.body]),
    ...(c.locations ?? []).flatMap((l) => [l.name, l.note]),
    ...(c.pricing ?? []).flatMap((p) => [p.name, p.price, p.note ?? '']),
    ...c.faqs.flatMap((f) => [f.q, f.a]),
    c.closing,
  ]
  return countWords(all.join(' '))
}

const rows = Object.entries(thresholds).map(([slug, threshold]) => {
  const count = cityWordCount(slug)
  return { slug, count, threshold, pass: count >= threshold }
})

const maxSlug = Math.max(...rows.map((r) => r.slug.length))
console.log('\nCITY PAGE WORD-COUNT AUDIT')
console.log('═'.repeat(60))
console.log(`${'slug'.padEnd(maxSlug)}  ${'count'.padStart(6)}  ${'target'.padStart(6)}  status`)
console.log('─'.repeat(60))
for (const r of rows) {
  const status = r.pass ? '✓ PASS' : `✗ FAIL (${r.threshold - r.count})`
  console.log(`${r.slug.padEnd(maxSlug)}  ${String(r.count).padStart(6)}  ${String(r.threshold).padStart(6)}  ${status}`)
}
console.log('═'.repeat(60))
const failed = rows.filter((r) => !r.pass).length
console.log(`${rows.length - failed}/${rows.length} passing; ${failed} failing\n`)
process.exit(failed > 0 ? 1 : 0)
