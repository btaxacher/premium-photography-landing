/**
 * Word-Count Audit für Tier-1-Seiten.
 * Liest tier1Content + allTier1 und vergleicht gegen konfigurierte Thresholds.
 */
import { tier1Content } from '../src/content/tier1-content'

const thresholds: Record<string, number> = {
  'hochzeitsfotograf-koeln': 1200,
  'bewerbungsfotos-koeln': 1200,
  'fotograf-koeln': 1200,
  'fotoshooting-koeln': 1000,
  'hochzeitsfotograf-euskirchen': 1000,
  'bewerbungsfotos-euskirchen': 1000,
  'schwangerschaftsfotos-koeln': 1000,
  'businessfotograf-koeln': 1000,
}

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}

function contentWordCount(slug: string): number {
  const c = tier1Content[slug]
  if (!c) return 0
  const all: string[] = []
  all.push(c.eyebrow)
  all.push(...c.intro)
  for (const s of c.sections) {
    all.push(s.h2)
    all.push(...s.body)
  }
  for (const f of c.faqs) {
    all.push(f.q)
    all.push(f.a)
  }
  if (c.locations) all.push(...c.locations.map((l) => `${l.name} ${l.note}`))
  if (c.pricing) all.push(...c.pricing.map((p) => `${p.name} ${p.price} ${p.note ?? ''}`))
  all.push(c.closing)
  return countWords(all.join(' '))
}

const rows = Object.entries(thresholds).map(([slug, threshold]) => {
  const count = contentWordCount(slug)
  const pass = count >= threshold
  return { slug, count, threshold, pass }
})

const maxSlug = Math.max(...rows.map((r) => r.slug.length))
console.log('')
console.log('TIER-1 WORD-COUNT AUDIT')
console.log('═'.repeat(60))
console.log(
  `${'slug'.padEnd(maxSlug)}  ${'count'.padStart(6)}  ${'target'.padStart(6)}  status`,
)
console.log('─'.repeat(60))
for (const r of rows) {
  const status = r.pass ? '✓ PASS' : `✗ FAIL (missing ${r.threshold - r.count})`
  console.log(
    `${r.slug.padEnd(maxSlug)}  ${String(r.count).padStart(6)}  ${String(r.threshold).padStart(6)}  ${status}`,
  )
}
console.log('═'.repeat(60))
const failed = rows.filter((r) => !r.pass).length
console.log(`${rows.length - failed}/${rows.length} passing; ${failed} failing\n`)
process.exit(failed > 0 ? 1 : 0)
