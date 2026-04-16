# Phase 2 Plan — Neue Städte + Regional-Hubs

**Spec:** `docs/superpowers/specs/2026-04-16-seo-rescue-design.md`
**Phase:** 2 of 3
**Goal:** 13 neue Top-Level-Slug-Seiten (Tier-2: Bonn, NRW, Leverkusen; Tier-3: 9 Kreis-Städte + Weilerswist) mit unique Content, passend zu Warm-Editorial.

## Scope (13 neue Routes)

Tier-2 (≥ 1000 Wörter, Stand-alone Content):
1. `/fotograf-bonn` (Vol 200)
2. `/hochzeitsfotograf-bonn` (Vol 200)
3. `/hochzeitsfotograf-nrw` (Vol 200, Hub)

Tier-2.5 (≥ 800 Wörter):
4. `/fotograf-leverkusen` (Vol 100)

Tier-3 (≥ 600 Wörter, template-based):
5. `/fotograf-siegburg`
6. `/fotograf-bergisch-gladbach`
7. `/fotograf-erftstadt`
8. `/fotograf-bergheim`
9. `/fotograf-kerpen`
10. `/fotograf-huerth`
11. `/fotograf-bruehl`
12. `/fotograf-pulheim`
13. `/fotograf-weilerswist` (Homebase — Sonder-Copy)

## Architektur

### `src/content/city-pages.ts` (NEW)
Vollcontent pro Top-Level-City-Slug. Kein `/fotograf/[city]` dynamic segment, sondern harte Top-Level-Slugs für besseres Ranking.

### `src/components/pages/city-template.tsx` (NEW)
Orchestriert: Breadcrumbs + Hero + Intro + Sections + Locations + FAQs + InternalLinks + CTA + Schema.
Analog zu tier1-template, aber:
- Stadt-spezifische Service-Schema areaServed
- 3-5 konkrete Locations in LocationsBlock
- Internal Links zu Nachbarn + passendem Tier-1

### `src/components/pages/nrw-hub-template.tsx` (NEW)
Hub für `/hochzeitsfotograf-nrw` — listet Tier-1 Hochzeitsslugs (Köln, Bonn, Euskirchen) als Karten, plus kleine Städte-Blöcke.

### `src/content/city-images.ts` (NEW)
Hero + Gallery pro City-Slug.

### Updates
- `src/app/sitemap.ts` — add city-pages.
- `src/lib/locations.ts` — evtl. `tier2Pages` Array dazu.

## Arbeitseinheiten

### Step 2.1 — `city-pages.ts` + `city-images.ts` skelett + Tier-3 Städte
Content für 9 Tier-3-Städte (je ≥ 600w).
**Commit:** `feat(content): add 9 tier-3 city page content (600+ words each)`

### Step 2.2 — `city-template.tsx` + 9 Tier-3 wrappers
**Commit:** `feat(cities): tier-3 template + 9 page wrappers`
**Verify:** curl each route 200, word-count passes.

### Step 2.3 — Tier-2: Fotograf Bonn, Hochzeitsfotograf Bonn, Fotograf Leverkusen Content
Erweiterte Sections je 1000+ w.
**Commit:** `feat(content): bonn + leverkusen tier-2 city pages (1000+ words)`

### Step 2.4 — NRW-Hub Page
Hub-Template mit Städte-Karten.
**Commit:** `feat(hub): /hochzeitsfotograf-nrw regional hub`

### Step 2.5 — Sitemap-Update
Add city-pages to sitemap.
**Commit:** `feat(seo): sitemap includes 13 new tier-2/3 cities`

### Step 2.6 — Phase 2 Audit
Re-run phase1-audit.ts (renamed phase-audit.ts or phase2-audit.ts) over all routes. Target 0 errors, all 200.

## Exit-Kriterien
- [ ] 13 neue Routes → 200 OK
- [ ] Word-Counts: Bonn/NRW/Leverkusen ≥ 1000; Tier-3 ≥ 600
- [ ] Sitemap ≥ 30 URLs
- [ ] Build clean, 0 TS errors
- [ ] 0 Console-Errors across audit

## Geschätzter Aufwand
4-5 Stunden. Content-schwerer Step.
