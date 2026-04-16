/**
 * Server-rendered JSON-LD script tag with safe serialization.
 * Escapes `</script>` to prevent XSS if any user-provided data ever leaks in.
 */
type Props = { data: Record<string, unknown> | Array<Record<string, unknown>> }

export function JsonLd({ data }: Props) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c')
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
