# Deployment & Domain-Anbindung

Dieses Dokument beschreibt, wie die Live-Domain (z.B. `lichtraum-studio.de`) an das Vercel-Projekt `lichtraum-studio` angeschlossen wird, sobald sie registriert ist.

## Aktueller Stand

- **Vercel-Projekt**: `lichtraum-studio` (Team `bastiantaxacher-4868s-projects`)
- **Aktuelle URL**: https://lichtraum-studio.vercel.app
- **GitHub**: https://github.com/btaxacher/lichtraum-studio (main branch → Auto-Deploy)

## Domain anschließen — Schritt für Schritt

### 1. Domain in Vercel Dashboard hinzufügen

1. Vercel Dashboard → Projekt `lichtraum-studio` → Settings → Domains
2. Root-Domain eintragen: `lichtraum-studio.de` (oder gewählte Alternative)
3. `www.lichtraum-studio.de` ebenfalls anlegen und als Redirect auf Root setzen

### 2. DNS beim Registrar setzen

Vercel gibt nach dem Hinzufügen die exakten Records aus. Typisch:

| Typ | Name | Wert |
|-----|------|------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

SSL-Zertifikat wird automatisch via Let's Encrypt ausgestellt (5–30 Min nach DNS-Propagation).

### 3. Environment Variable setzen

Im Vercel-Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL = https://lichtraum-studio.de
```

Für alle drei Environments (Production, Preview, Development). Danach einen neuen Deploy auslösen (Redeploy).

Damit werden automatisch angepasst:
- `metadataBase` in `layout.tsx`
- Alle JSON-LD-Blöcke (LocalBusiness, Service, FAQPage, BreadcrumbList, BlogPosting)
- `sitemap.xml` URLs
- `robots.txt` Sitemap-Referenz

### 4. Analytics aktivieren (optional)

Plausible Analytics (DSGVO-konform, cookieless) kann über eine Env-Variable aktiviert werden:

```
NEXT_PUBLIC_PLAUSIBLE_DOMAIN = lichtraum-studio.de
```

Vorher bei plausible.io die Domain hinzufügen. Alternativ kann GA4 als Script in `src/components/providers/analytics.tsx` ersetzt werden.

### 5. Google Search Console anmelden

1. search.google.com/search-console → Property hinzufügen (Domain-Property, nicht URL-Präfix)
2. DNS-Verifikation via TXT-Record
3. Sitemap einreichen: `https://lichtraum-studio.de/sitemap.xml`
4. URL-Inspektion auf Homepage laufen lassen → „Indexierung beantragen"

### 6. Alter Vercel-Alias `lichtraum-studio.vercel.app`

Muss **nicht** entfernt werden — Vercel leitet standardmäßig die `.vercel.app` Subdomain weiter, sobald eine Custom-Domain als Production eingetragen ist. Alle Crawl-Signale landen automatisch auf der neuen Domain.

## Lokale Entwicklung

```bash
cd main-landing-page
npm install
npm run dev  # http://localhost:3000
```

Environment-Variablen in `.env.local`:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# NEXT_PUBLIC_PLAUSIBLE_DOMAIN=lichtraum-studio.de  # nur wenn Live-Tracking gewünscht
```

## Build & Deploy

Automatisch bei Push auf `main` via GitHub→Vercel-Integration.

Manuell:

```bash
vercel --yes --prod --scope bastiantaxacher-4868s-projects
```

## Checkliste Pre-Go-Live

- [ ] Domain registriert und DNS auf Vercel zeigend
- [ ] SSL-Zertifikat issued (grünes Schloss im Browser)
- [ ] `NEXT_PUBLIC_SITE_URL` in Vercel Env gesetzt
- [ ] Redeploy angestoßen nach Env-Änderung
- [ ] Impressum mit ladungsfähiger Adresse ergänzt (`/impressum`)
- [ ] Datenschutzerklärung ergänzt (`/datenschutz`)
- [ ] `/og.jpg` (1200×630, neutrales Brand-Motiv) in `public/` hinterlegt
- [ ] Google Search Console verifiziert, Sitemap eingereicht
- [ ] Plausible Domain angelegt und Env-Variable gesetzt (optional)
- [ ] Rich-Results-Test für Home, Hochzeit-Köln, Stadt-Seite, Blog-Post grün
- [ ] Lighthouse Performance ≥ 90 auf Mobile

## Rich-Results-Test

Nach Live-Schaltung prüfen:

- https://search.google.com/test/rich-results
- URL einzeln testen (Home, Hochzeit Köln, Blog-Post, Stadt-Seite Bonn)
- Erwartet: LocalBusiness, Service, FAQPage, BreadcrumbList, BlogPosting jeweils ohne Fehler

## Rollback

Letzte fünf Deployments bleiben als „Previous Production" in Vercel erhalten. Bei Problemen über Dashboard → Deployments → Promote to Production auf vorherigen Stand zurückwechseln.
