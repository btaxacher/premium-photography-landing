/**
 * Prompt bank for Lichtraum Fotostudio — Warm Editorial Light redesign.
 * Each prompt produces a single image via Gemini / Imagen (Nanobanana pipeline).
 *
 * All 21 images share the Kodak Portra 400 palette for visual cohesion across
 * hero, services, gallery, testimonials, studio, journal.
 */

const WARM_PREAMBLE =
  'Photorealistic editorial photography, Kodak Portra 400 color palette, warm creams, soft golds, muted greens, gentle film grain, natural available light, shallow depth of field, shot on Canon R5 with 85mm f/1.4, documentary authenticity (not posed stock photography), hands and faces clearly visible when present. No text, no watermarks, no logos.'

export interface ImageJob {
  readonly key: string
  readonly filename: string // relative to public/images/
  readonly prompt: string
}

export const JOBS: readonly ImageJob[] = [
  // ================================================================
  // HERO — Single 3:4 vertical bride portrait (critical priority)
  // ================================================================
  {
    key: 'hero-bride-golden-hour',
    filename: 'redesign/hero-bride-golden-hour.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 3:4 aspect ratio (1600x2133). A bride in a simple flowing ivory silk dress stands in a golden-hour wheat field in the German Rhineland countryside near Euskirchen. She is looking away from camera, laughing softly, holding a small wildflower bouquet (cream peonies, eucalyptus, wheat stalks). Warm golden backlight, subtle sun flare in top-right corner. Soft bokeh trees in background (blurred, warm tones). No heavy makeup, natural beauty. Documentary feel, not posed.`,
  },

  // ================================================================
  // INTRO GREETING — 1:1 studio detail (no faces — studio is fictitious)
  // ================================================================
  {
    key: 'studio-detail-hands',
    filename: 'redesign/studio-detail-hands.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 aspect ratio (1400x1400). Close-up detail shot: two hands of a wedding photographer holding a vintage Hasselblad medium-format camera, warm natural window light streaming from the left. The hands are weathered and expressive, wearing a simple thin gold ring. Background softly blurred — a warm wood-paneled studio interior with dried pampas grass in a ceramic vase visible out of focus. Intimate, crafted, premium feel. No face visible.`,
  },

  // ================================================================
  // SERVICES — 4 square cards
  // ================================================================
  {
    key: 'service-hochzeit',
    filename: 'redesign/service-hochzeit.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (1200x1200). A bride and groom embracing in late-afternoon warm light, groom leaning his forehead against bride's temple, both with eyes closed. Bride in simple ivory dress, groom in warm-toned beige suit with open collar. Background: soft-blurred garden with warm stone wall. Cinematic documentary style, natural unposed moment.`,
  },
  {
    key: 'service-business',
    filename: 'redesign/service-business.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (1200x1200). Editorial business portrait of a professional woman in her early 30s, wearing a cream-colored blazer over a simple white shirt, looking directly at camera with a warm confident smile. Soft natural light from a large window on the left, creating gentle shadows. Background: muted warm-grey studio wall, slightly out of focus. Premium editorial style, no corporate stock vibes. 85mm f/2.8.`,
  },
  {
    key: 'service-familie',
    filename: 'redesign/service-familie.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (1200x1200). Editorial family photograph — a young family (mother in her 30s, father, and a 3-year-old child) walking hand-in-hand through a sunlit wheat field in the Rhineland. All in warm earth-tone clothing (cream, sand, rust). Child is laughing mid-stride. Golden-hour backlight, soft flare. Candid documentary feel.`,
  },
  {
    key: 'service-babybauch',
    filename: 'redesign/service-babybauch.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (1200x1200). Editorial maternity photograph — a pregnant woman in her third trimester, wearing a flowing cream silk dress, standing sideways against a warm sand-colored studio wall. Her hands rest gently on her belly. Soft diffused window light from above-left. Fine art portrait style, minimal, intimate. Warm creamy tones.`,
  },

  // ================================================================
  // GALLERY — 9 masonry images (cohesive Portra 400 palette)
  // ================================================================
  {
    key: 'gallery-01-kiss',
    filename: 'redesign/gallery-01-kiss.jpg',
    prompt: `${WARM_PREAMBLE} Portrait 4:5 aspect ratio (1600x2000). Wedding couple's first kiss under a warm afternoon sun, golden light flare visible, soft green vineyard background, intimate and candid.`,
  },
  {
    key: 'gallery-02-rings',
    filename: 'redesign/gallery-02-rings.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (1200x1200). Close-up detail of two simple gold wedding rings resting on a folded linen napkin with dried eucalyptus sprig, natural window light, warm tones, shallow focus.`,
  },
  {
    key: 'gallery-03-bride',
    filename: 'redesign/gallery-03-bride.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 3:4 (1200x1600). Bride in profile looking out of a window, sheer linen curtain catching morning light, cream dress, contemplative mood.`,
  },
  {
    key: 'gallery-04-family',
    filename: 'redesign/gallery-04-family.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (1200x1200). Parent lifting toddler mid-air, both laughing, cream and sand-tone clothing, outdoor warm afternoon light, candid.`,
  },
  {
    key: 'gallery-05-couple-field',
    filename: 'redesign/gallery-05-couple-field.jpg',
    prompt: `${WARM_PREAMBLE} Horizontal 3:2 (1800x1200). Engaged couple walking through a wheat field at golden hour, holding hands, back to camera, warm backlight, romantic.`,
  },
  {
    key: 'gallery-06-business',
    filename: 'redesign/gallery-06-business.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (1200x1200). Professional man in cream knit sweater, three-quarter profile, warm studio light, subtle confident expression.`,
  },
  {
    key: 'gallery-07-maternity',
    filename: 'redesign/gallery-07-maternity.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 3:4 (1200x1600). Silhouette of pregnant woman against a sheer curtained window, soft diffused morning light, serene and intimate.`,
  },
  {
    key: 'gallery-08-flowers',
    filename: 'redesign/gallery-08-flowers.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (1200x1200). Top-down shot of a bridal bouquet (cream peonies, eucalyptus, wheat stalks) on a weathered wood table, warm lamp light, editorial.`,
  },
  {
    key: 'gallery-09-firstdance',
    filename: 'redesign/gallery-09-firstdance.jpg',
    prompt: `${WARM_PREAMBLE} Horizontal 3:2 (1800x1200). First dance in a softly lit barn venue, warm bistro lights bokeh in background, couple in an embrace, intimate documentary feel.`,
  },

  // ================================================================
  // AVATARS — 3 Testimonial headshots
  // ================================================================
  {
    key: 'avatar-emilia',
    filename: 'redesign/avatar-emilia.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (400x400). Warm editorial close-up headshot of a woman in her late 20s with brown hair in a loose braid, gentle smile, cream-colored sweater, soft natural window light.`,
  },
  {
    key: 'avatar-sofia',
    filename: 'redesign/avatar-sofia.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (400x400). Warm editorial close-up headshot of a woman in her mid 30s, short dark hair, subtle confident smile, white blouse, soft daylight.`,
  },
  {
    key: 'avatar-marie',
    filename: 'redesign/avatar-marie.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (400x400). Warm editorial close-up headshot of a couple in their early 30s, both smiling softly at camera, warm beige clothing, soft natural light.`,
  },
  {
    key: 'avatar-charlotte',
    filename: 'redesign/avatar-charlotte.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (400x400). Warm editorial close-up headshot of a young engaged couple in their late 20s, woman with long dark hair, man with short brown hair and stubble, foreheads gently touching, both looking slightly off-camera with soft smiles, warm cream and sand tones in their clothing, soft golden-hour light.`,
  },
  {
    key: 'avatar-elena',
    filename: 'redesign/avatar-elena.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (400x400). Warm editorial close-up headshot of a woman in her early 40s, honey-blonde shoulder-length hair, calm confident expression, minimalist cream turtleneck, very soft diffused studio light from the left, shallow depth of field.`,
  },
  {
    key: 'avatar-helena',
    filename: 'redesign/avatar-helena.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (400x400). Warm editorial close-up headshot of a pregnant woman in her early 30s, auburn hair loosely pinned up, natural makeup, gentle introspective smile looking slightly down and to the side, flowing warm-ivory silk dress, soft window light.`,
  },

  // ================================================================
  // JOURNAL — 3 blog cards (16:10)
  // ================================================================
  {
    key: 'blog-01-locations',
    filename: 'redesign/blog-01-locations.jpg',
    prompt: `${WARM_PREAMBLE} 16:10 aspect ratio (1400x875). Beautiful castle wedding venue in the Rhineland, golden-hour exterior with ivy growing on warm stone walls, distant vineyards visible, romantic editorial feel.`,
  },
  {
    key: 'blog-02-outfit',
    filename: 'redesign/blog-02-outfit.jpg',
    prompt: `${WARM_PREAMBLE} 16:10 aspect ratio (1400x875). Minimalist flat-lay on cream linen of a professional outfit: cream blazer folded, simple gold jewelry, leather notebook, fountain pen, small eucalyptus sprig. Natural morning light, editorial.`,
  },
  {
    key: 'blog-03-preparation',
    filename: 'redesign/blog-03-preparation.jpg',
    prompt: `${WARM_PREAMBLE} 16:10 aspect ratio (1400x875). Bride-to-be getting ready, soft morning light through linen curtains, dressing-table detail with perfume bottle and fresh flowers in a ceramic vase, intimate and quiet.`,
  },

  // ================================================================
  // STUDIO — interior 1:1
  // ================================================================
  {
    key: 'studio-interior',
    filename: 'redesign/studio-interior.jpg',
    prompt: `${WARM_PREAMBLE} Square 1:1 (1400x1400). Interior of a warm photography studio in Germany. Natural daylight streaming through a large window on the left. Key elements: a simple wooden chair, a cream linen backdrop, a Hasselblad camera on a wooden stand, dried pampas grass in a tall ceramic vase, warm wood floor, exposed wooden beams on the ceiling. Color palette: creams, warm whites, soft golds, light oak wood. Intimate, crafted, not clinical. No people visible.`,
  },

  // ================================================================
  // JOBS — Bewerbungsfotos-Pool (Köln + Euskirchen)
  // 2 Heroes (3:4) + 9 shared gallery portraits
  // ================================================================
  {
    key: 'jobs-hero-koeln',
    filename: 'jobs/hero-koeln.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 3:4 aspect ratio (1200x1600). Editorial professional headshot of a confident woman in her mid-30s, tailored charcoal blazer over a cream silk blouse, hair pulled back into a low bun, warm subtle smile looking directly at camera, three-quarter framing. Background: softly out-of-focus Köln-style modern office — warm brick wall, large industrial windows to the left with late-afternoon golden light, hint of urban skyline. Sophisticated, upscale business editorial. Not corporate stock.`,
  },
  {
    key: 'jobs-hero-euskirchen',
    filename: 'jobs/hero-euskirchen.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 3:4 aspect ratio (1200x1600). Editorial professional headshot of a friendly, approachable man in his late 20s, warm caramel-toned knit sweater over a pressed white collar shirt (no tie), short neat hair, gentle confident half-smile looking directly at camera, three-quarter crop. Background: warm cream studio backdrop with soft natural daylight from a window on the left, simple wooden shelf just visible out of focus. Small-town German studio feel — crafted, personal, not glossy.`,
  },
  {
    key: 'jobs-portrait-01',
    filename: 'jobs/portrait-01.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 4:5 aspect ratio (1200x1500). Business headshot of a woman in her early 30s wearing a simple cream blazer over a white camisole, shoulder-length brown hair, warm natural smile, shot at eye level against a soft warm-grey studio background. Classic three-point lighting, gentle shadow. Editorial LinkedIn quality.`,
  },
  {
    key: 'jobs-portrait-02',
    filename: 'jobs/portrait-02.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 4:5 aspect ratio (1200x1500). Business headshot of a man in his mid-40s in a deep-navy suit and white shirt with an open collar, short silver-streaked hair, calm confident expression with a subtle closed-lip smile, warm beige studio background. Professional executive portrait, not stuffy.`,
  },
  {
    key: 'jobs-portrait-03',
    filename: 'jobs/portrait-03.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 4:5 aspect ratio (1200x1500). Business headshot of a mixed-race woman in her late 20s, natural afro-textured hair, wearing a soft rust-colored blouse, genuine warm laugh captured mid-motion, eyes bright, environmental background suggesting a warm wooden office space softly blurred. Editorial, very approachable.`,
  },
  {
    key: 'jobs-portrait-04',
    filename: 'jobs/portrait-04.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 4:5 aspect ratio (1200x1500). Business headshot of a man in his early 30s with round tortoise-shell glasses, dark hair, wearing a charcoal knit turtleneck, neutral confident expression, shot slightly from above, warm cream studio background. Creative-industry / tech / consultancy look.`,
  },
  {
    key: 'jobs-portrait-05',
    filename: 'jobs/portrait-05.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 4:5 aspect ratio (1200x1500). Business headshot of a woman in her late 40s, honey-blonde shoulder-length bob, wearing a warm-caramel silk blouse with a simple gold necklace, poised confident smile with laugh lines, sophisticated and experienced, soft champagne studio background.`,
  },
  {
    key: 'jobs-portrait-06',
    filename: 'jobs/portrait-06.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 4:5 aspect ratio (1200x1500). Business headshot of a young Apprenticeship / Ausbildungs-age woman around 21, straight dark hair in a half-up style, simple cream collared shirt, genuine warm smile, approachable and fresh, soft warm-grey backdrop. Entry-level professional feel — perfect for Azubi-Bewerbung.`,
  },
  {
    key: 'jobs-portrait-07',
    filename: 'jobs/portrait-07.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 4:5 aspect ratio (1200x1500). Business headshot of a man around 25, short brown beard trimmed neatly, warm-olive long-sleeve Henley over a white t-shirt collar visible, gentle half-smile, environmental creative-office background softly blurred. Young-professional, craftsperson or startup-founder look.`,
  },
  {
    key: 'jobs-portrait-08',
    filename: 'jobs/portrait-08.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 4:5 aspect ratio (1200x1500). Business headshot of a woman in her late 30s, long dark-brown hair loosely over one shoulder, warm-mustard silk blouse, thoughtful gentle smile while looking slightly off-camera to the left, soft daylight from a window on the left, cream wall behind. Editorial-consulting look, sophisticated.`,
  },
  {
    key: 'jobs-portrait-09',
    filename: 'jobs/portrait-09.jpg',
    prompt: `${WARM_PREAMBLE} Vertical 4:5 aspect ratio (1200x1500). Business headshot of a man in his mid-50s, salt-and-pepper hair, charcoal blazer over light-grey shirt with open collar, reassuring calm expression with deep smile lines, warm beige backdrop. Senior executive / Kanzlei-Partner look, trustworthy.`,
  },
]
