import Script from 'next/script'

/**
 * Plausible Analytics — cookieless, DSGVO-konform.
 * Aktiv nur wenn NEXT_PUBLIC_PLAUSIBLE_DOMAIN gesetzt ist.
 * Domain setzen z.B. auf "lichtraum-studio.de" sobald Domain live ist.
 */
export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
  if (!domain) return null

  return (
    <Script
      defer
      strategy="afterInteractive"
      data-domain={domain}
      src="https://plausible.io/js/script.js"
    />
  )
}
