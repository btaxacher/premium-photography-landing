const U = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`

type ImageSet = {
  hero: { src: string; alt: string }
  gallery: { src: string; alt: string; aspect?: 'portrait' | 'landscape' | 'square' }[]
}

const pickGallery = (
  ids: string[],
  altTemplate: (i: number) => string,
  genericAlt = 'Warm-editorial Portrait im Rheinland',
): ImageSet['gallery'] =>
  ids.slice(0, 6).map((id, i) => ({
    src: U(id, 1200),
    alt: altTemplate(i) || genericAlt,
    aspect: i % 3 === 0 ? 'portrait' : i % 3 === 1 ? 'landscape' : 'square',
  }))

const WEDDING = [
  'photo-1606216794074-735e91aa2c92',
  'photo-1522673607200-164d1b6ce486',
  'photo-1519741497674-611481863552',
  'photo-1464207687429-7505649dae38',
  'photo-1525258946800-98cfd641d0de',
  'photo-1529634597503-139d3726fed5',
]

const PORTRAIT = [
  'photo-1524504388940-b1c1722653e1',
  'photo-1531746020798-e6953c6e8e04',
  'photo-1487412720507-e7ab37603c6f',
  'photo-1515886657613-9f3515b0c78f',
  'photo-1580489944761-15a19d654956',
  'photo-1438761681033-6461ffad8d80',
]

const MIXED = [
  'photo-1606216794074-735e91aa2c92',
  'photo-1573496359142-b8d87734a5a2',
  'photo-1511895426328-dc8714191300',
  'photo-1542810634-71277d95dcbb',
  'photo-1519741497674-611481863552',
  'photo-1555252333-9f8e92e65df9',
]

export const cityPageImages: Record<string, ImageSet> = {
  'fotograf-bonn': {
    hero: { src: U('photo-1522673607200-164d1b6ce486', 1400), alt: 'Paarshooting an der Bonner Rheinaue zur Golden Hour' },
    gallery: pickGallery(MIXED, (i) => [
      'Brautpaar am Bonner Rheinufer',
      'Business-Portrait im Bonner Regierungsviertel',
      'Familien-Shoot in der Rheinaue',
      'Paar in der Kirschblütenallee im April',
      'Detail-Aufnahme eines Hochzeitsstraußes',
      'Babybauch-Portrait am Rhein',
    ][i]),
  },

  'hochzeitsfotograf-bonn': {
    hero: { src: U('photo-1525258946800-98cfd641d0de', 1400), alt: 'Braut auf der Petersberg-Terrasse mit Rheinblick' },
    gallery: pickGallery(WEDDING, (i) => [
      'Hochzeit im Petersberg Hotel Königswinter',
      'Brautpaar in der Redoute Bad Godesberg',
      'Detailaufnahme Eheringe vor Rheinbogen',
      'Erster Tanz auf Schloss Drachenburg',
      'Paar in der Bonner Kirschblütenallee',
      'Kirchliche Trauung im Kurfürstlichen Schloss',
    ][i]),
  },

  'fotograf-leverkusen': {
    hero: { src: U('photo-1515886657613-9f3515b0c78f', 1400), alt: 'Portrait im Japanischen Garten Leverkusen' },
    gallery: pickGallery(PORTRAIT, (i) => [
      'Portrait im Neulandpark Leverkusen',
      'Paar im Japanischen Garten zur Kirschblüte',
      'Business-Shooting am Schloss Morsbroich',
      'Familienfoto in der Schlebuscher Altstadt',
      'Editorial-Portrait an der Manforter Weide',
      'LinkedIn-Portrait Bayer-Mitarbeiter',
    ][i]),
  },

  'fotograf-siegburg': {
    hero: { src: U('photo-1519741497674-611481863552', 1400), alt: 'Hochzeits-Portrait auf dem Michaelsberg Siegburg' },
    gallery: pickGallery(WEDDING, (i) => [
      'Hochzeits-Terrasse am Michaelsberg-Kloster',
      'Paar-Portrait in der Siegburger Altstadt',
      'Trauung in der Klosterkirche',
      'Familien-Shoot am Sieg-Ufer',
      'Brautpaar im Mischwald des Michaelsbergpfads',
      'Ring-Detail vor Klosterfassade',
    ][i]),
  },

  'fotograf-bergisch-gladbach': {
    hero: { src: U('photo-1525258946800-98cfd641d0de', 1400), alt: 'Hochzeit auf der Schloss Bensberg Terrasse' },
    gallery: pickGallery(WEDDING, (i) => [
      'Gala-Hochzeit auf Schloss Bensberg',
      'Fachwerk-Paar-Portrait in der Altstadt',
      'Familienshooting am Strunder Bach',
      'Brautpaar mit Rheinblick vom Schlosspark',
      'Business-Portrait vor moderner Kulisse',
      'Detailaufnahme Brautstrauß',
    ][i]),
  },

  'fotograf-erftstadt': {
    hero: { src: U('photo-1522673607200-164d1b6ce486', 1400), alt: 'Hochzeit vor Schloss Gracht in Erftstadt' },
    gallery: pickGallery(MIXED, (i) => [
      'Hochzeits-Portrait in der Kastanienallee Gracht',
      'Paar an der Erft-Aue zur Golden Hour',
      'Familienshooting im Herrig-Park',
      'Trauung vor dem Wasserschloss Gracht',
      'Fachwerk-Kulisse in Lechenich',
      'Golden Hour am Gracht-Schlossgraben',
    ][i]),
  },

  'fotograf-bergheim': {
    hero: { src: U('photo-1529634597503-139d3726fed5', 1400), alt: 'Hochzeit vor Paffendorfer Schloss in Bergheim' },
    gallery: pickGallery(MIXED, (i) => [
      'Brautpaar im Paffendorfer Schlosspark',
      'Familien-Shoot in der Aachener Altstadt',
      'Portrait vor moderner Rhein-Erft-Architektur',
      'Detailaufnahme Eheringe auf Parkstein',
      'Gruppenbild vor Paffendorfer Schlossfassade',
      'Golden Hour in Bergheim',
    ][i]),
  },

  'fotograf-kerpen': {
    hero: { src: U('photo-1464207687429-7505649dae38', 1400), alt: 'Hochzeits-Portrait auf Schloss Türnich' },
    gallery: pickGallery(WEDDING, (i) => [
      'Brautpaar auf Schloss Türnich',
      'Editorial-Shoot auf dem Marienfeld',
      'Familien-Shoot im Türnicher Demeter-Park',
      'Paar-Portrait in Sindorf',
      'Ring-Detail auf Schloss-Terrasse',
      'Golden-Hour-Portrait in Kerpen',
    ][i]),
  },

  'fotograf-huerth': {
    hero: { src: U('photo-1573496359142-b8d87734a5a2', 1400), alt: 'Portrait im Ville-Park Hürth' },
    gallery: pickGallery(PORTRAIT, (i) => [
      'Portrait im Ville-Park',
      'Editorial-Shot vor Knapsack-Industriekulisse',
      'Business-Portrait in Hermülheim',
      'Paar-Portrait am Ville-See',
      'Team-Shooting im Bavaria Studio',
      'LinkedIn-Headshot Medien-Branche Hürth',
    ][i]),
  },

  'fotograf-bruehl': {
    hero: { src: U('photo-1525258946800-98cfd641d0de', 1400), alt: 'Hochzeit in Schloss Augustusburg Brühl (UNESCO)' },
    gallery: pickGallery(WEDDING, (i) => [
      'Brautpaar auf der Schloss Augustusburg Treppe',
      'Gruppenfoto vor Schloss Falkenlust',
      'Portrait im englischen Schlosspark',
      'Detail im Schloss-Saal Musikzimmer',
      'Editorial-Shoot am Max-Ernst-Museum',
      'Golden Hour im Schlosspark Brühl',
    ][i]),
  },

  'fotograf-pulheim': {
    hero: { src: U('photo-1519741497674-611481863552', 1400), alt: 'Hochzeits-Portrait im Kreuzgang der Abtei Brauweiler' },
    gallery: pickGallery(MIXED, (i) => [
      'Brautpaar im Kreuzgang Brauweiler',
      'Trauung in der Klosterbasilika',
      'Familien-Shoot in Stommeln',
      'Portrait vor romanischen Säulen',
      'Paar in der Dansweiler Feldlandschaft',
      'Ring-Detail auf Steinboden Brauweiler',
    ][i]),
  },

  'fotograf-weilerswist': {
    hero: { src: U('photo-1529634597503-139d3726fed5', 1400), alt: 'Familien-Shoot in der Weilerswister Erft-Aue' },
    gallery: pickGallery(MIXED, (i) => [
      'Hochzeitsportrait vor Burg Metternich',
      'Familie in der Erft-Aue zur Golden Hour',
      'Paar-Shooting im Weilerswister Feldweg',
      'Stille Portraits im Ortskern St. Kunibert',
      'Brautpaar auf Schloss Loersfeld',
      'Babybauch-Shoot am Erft-Radweg',
    ][i]),
  },
}
