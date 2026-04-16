import { JsonLd } from './JsonLd'
import { SITE_URL } from '@/lib/site-url'
import { brand } from '@/lib/content'

type Props = {
  name: string
  description: string
  areaServed?: string[]
  startingPrice?: string // e.g. "890"
  path: string
}

export function ServiceSchema({ name, description, areaServed, startingPrice, path }: Props) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        provider: { '@id': `${SITE_URL}/#business` },
        serviceType: name,
        areaServed: areaServed ?? ['Köln', 'Bonn', 'Euskirchen', 'NRW'],
        url: `${SITE_URL}${path}`,
        ...(startingPrice
          ? {
              offers: {
                '@type': 'Offer',
                price: startingPrice,
                priceCurrency: 'EUR',
                availability: 'https://schema.org/InStock',
                url: `${SITE_URL}${path}`,
                seller: { '@type': 'Organization', name: brand.studio },
              },
            }
          : {}),
      }}
    />
  )
}
