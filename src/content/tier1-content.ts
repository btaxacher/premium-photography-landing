/**
 * Phase 3 — Tier-1 Landingpage Vollcontent.
 * Schreibstil: literarisch-editorial (passt zu Brand), SEO-Keywords natürlich integriert.
 * Sie-Anrede (formal). Keyword-Dichte ~1,5-2,5%.
 */

export type FAQ = { q: string; a: string }
export type Section = { h2: string; body: string[] }
export type PriceRow = { name: string; price: string; note?: string }

export type Tier1Content = {
  slug: string
  eyebrow: string
  intro: string[] // rendered as opening prose
  sections: Section[]
  locations?: { name: string; note: string }[]
  pricing?: PriceRow[]
  faqs: FAQ[]
  closing: string
}

export const tier1Content: Record<string, Tier1Content> = {
  'hochzeitsfotograf-koeln': {
    slug: 'hochzeitsfotograf-koeln',
    eyebrow: 'Hochzeitsreportage · Köln & NRW',
    intro: [
      'Eine Hochzeit in Köln erzählt sich anders als anderswo. Der Dom als Schatten über dem Rheinufer, das Schiff, das langsam vorbeizieht, während zwei Menschen zum ersten Mal „Mann und Frau" hören — Köln gibt seiner Liebe Kulisse, aber keine Pose.',
      'Als Hochzeitsfotograf für Köln und NRW begleiten wir Paare seit vielen Jahren durch ihren wichtigsten Tag. Ohne Regie, ohne inszenierte Posen, ohne vorgefertigte Shotlisten. Nur mit Auge, Geduld und der Bereitschaft, zehn Stunden lang fast unsichtbar zu sein — damit die Fotos echt bleiben.',
    ],
    sections: [
      { h2: 'Unser Stil — Reportage trifft Editorial',
        body: [
          'Wir fotografieren Hochzeiten im Reportage-Stil: dokumentarisch, zurückhaltend, ohne Eingriff in den natürlichen Ablauf. Wir sagen Ihnen nicht, wie Sie zu stehen haben, wir sagen auch Ihren Gästen nicht, wo sie zu lachen haben. Stattdessen warten wir — bis der Moment von selbst entsteht.',
          'Auf diese Weise entsteht ein zweiter Stil ganz nebenbei: das Editorial-Portrait. Wir nehmen uns 30 bis 60 Minuten zwischen Zeremonie und Feier, suchen ein ruhiges Licht, einen stillen Ort — und fotografieren Sie so, wie eine Zeitschrift ihre Cover fotografiert: großzügig, bewusst, mit Zeit.',
          'Das Ergebnis: eine Bilderserie, die sowohl journalistisch als auch editorial funktioniert. Nichts wirkt gestellt, und trotzdem ist jedes Portrait ein kleines Kunstwerk.',
        ],
      },
      { h2: 'Ablauf einer Hochzeitsreportage',
        body: [
          'Vier Wochen vor der Hochzeit treffen wir uns zu einem ausführlichen Planungsgespräch. Zeitplan, Locations, kritische Momente, Familienwünsche, Gruppenfotos — alles, damit wir am Tag selbst nicht fragen müssen, sondern vorbereitet sind.',
          'Am Hochzeitstag beginnen wir meist mit dem Getting-Ready — dem Moment, in dem das Kleid zum ersten Mal angezogen wird. Von da an begleiten wir Sie bis zum Anschnitt der Torte oder, bei längeren Reportagen, bis zum Eröffnungstanz und den ersten Stunden der Feier.',
          'Zwischen den Programmpunkten fotografieren wir Gäste, Details, stille Zwischentöne. Nach der Hochzeit bekommen Sie binnen 72 Stunden eine kleine Vorschau-Serie. Die vollständige Galerie mit 500–800 bearbeiteten Fotos liefern wir nach vier bis sechs Wochen über ein privates Online-Portal.',
        ],
      },
      { h2: 'Kulissen, die wir kennen',
        body: [
          'Köln hat mehr Hochzeitslocations als jede andere Stadt in NRW. Wir fotografieren regelmäßig am Kölner Dom, am Rheinauhafen, im Stadtgarten, vor der Hohenzollernbrücke — und immer wieder in Schloss Augustusburg in Brühl, eine der schönsten barocken Hochzeitskulissen Deutschlands.',
          'Für Paare, die außerhalb des Zentrums heiraten, kennen wir Schloss Bensberg in Bergisch Gladbach, das Michaelsberg-Kloster in Siegburg, das Herrenhaus Stammen in der Eifel und die Villa Flora in Köln-Lindenthal. Wir beraten Sie gerne, welche Location zu Ihrem Stil passt.',
        ],
      },
      { h2: 'Was Sie bekommen',
        body: [
          'Je nach Paket zwischen 400 und 900 farbkorrigierte, redaktionell bearbeitete Fotos — bereitgestellt in hoher Auflösung zum Druck und in webtauglicher Version zum Teilen. Dazu ein hochwertiger USB-Stick oder ein Fotobuch im Leinen-Einband (optional).',
          'Eine Online-Galerie mit Passwortschutz, die Sie mit Familie und Freunden teilen können — und über die Ihre Gäste Einzelbilder bestellen können, ohne dass Sie als Brautpaar zur Bestellzentrale werden.',
        ],
      },
    ],
    locations: [
      { name: 'Kölner Dom & Rheinufer', note: 'ikonisch, dramatisch — gut zur goldenen Stunde' },
      { name: 'Schloss Augustusburg, Brühl', note: 'UNESCO-Welterbe, barocker Park, 15 Min von Köln' },
      { name: 'Schloss Bensberg, Bergisch Gladbach', note: 'Blick bis nach Köln, edel, für große Hochzeiten' },
      { name: 'Michaelsberg Siegburg', note: 'Berg, Altstadt, Weitblick — 25 Min östlich' },
      { name: 'Rheinauhafen & Kranhäuser', note: 'modern-urban, für Editorial-Paare' },
      { name: 'Villa Flora, Lindenthal', note: 'Jugendstil, Garten, Industriehallen-Flair' },
    ],
    pricing: [
      { name: 'Standesamt (3 h)', price: '890 €', note: 'Ideal für kleine Hochzeiten ohne Feier' },
      { name: 'Halbtag (6 h)', price: '1.490 €' },
      { name: 'Ganztag (10 h)', price: '1.890 €', note: 'Beliebtestes Paket' },
      { name: 'Premium (12 h + After-Wedding-Shoot)', price: '2.790 €' },
      { name: 'Zweitfotograf/in', price: '+ 490 €' },
      { name: 'Leinen-Fotobuch (30×30, 40 S.)', price: '+ 390 €' },
    ],
    faqs: [
      { q: 'Wie viel kostet ein Hochzeitsfotograf in Köln?',
        a: 'Realistisch zwischen 1.500 € und 3.500 € für eine ganztägige Begleitung, je nach Stundenzahl, Zweitfotograf und Album. Wir liegen mit 1.890 € für einen 10-Stunden-Tag im oberen Mittelfeld — inklusive Retusche, Online-Galerie und Hochauflösungsdateien.' },
      { q: 'Wie früh sollte man buchen?',
        a: 'Für Hochzeiten zwischen Mai und September empfehlen wir 9–12 Monate Vorlauf, für Samstags-Hochzeiten in der Hochsaison gerne auch 18 Monate. Kurzfristige Termine in der Nebensaison (November–März) sind oft noch möglich.' },
      { q: 'Fotografieren Sie auch außerhalb von Köln?',
        a: 'Ja. Unser Studio liegt in Euskirchen, wir fotografieren regelmäßig in Köln, Bonn, Düsseldorf, Aachen, im Rhein-Erft-Kreis, in der Eifel und im Bergischen Land. Anfahrten bis 60 km sind im Paketpreis enthalten.' },
      { q: 'Kommen Sie auch zur kirchlichen und zum Standesamt?',
        a: 'Ja, wenn es zeitlich in der Reportage liegt. Bei zwei Zeremonien an verschiedenen Orten empfehlen wir das Ganztagspaket, damit keine Lücken entstehen.' },
      { q: 'Was, wenn es regnet?',
        a: 'Regen ist kein Problem — oft sind die ehrlichsten Portraits bei schlechtem Wetter entstanden. Wir haben immer Schirme dabei und kennen überdachte Backup-Locations in Köln, die nicht nach Plan B aussehen.' },
      { q: 'Arbeiten Sie mit einem Zweitfotografen?',
        a: 'Optional. Bei Hochzeiten ab 80 Gästen oder wenn Braut und Bräutigam getrennt Getting-Ready machen, empfehlen wir es. Zweitfotograf kostet 490 € extra.' },
      { q: 'Wann bekommen wir die Fotos?',
        a: 'Eine Vorschau-Serie mit 20–30 Bildern innerhalb von 72 Stunden. Die vollständige Galerie mit 500–800 Fotos nach vier bis sechs Wochen über ein geschütztes Online-Portal.' },
      { q: 'Dürfen wir die Fotos auf Social Media teilen?',
        a: 'Selbstverständlich. Alle Fotos kommen mit uneingeschränkten Nutzungsrechten für den privaten Gebrauch inkl. Social Media.' },
      { q: 'Was ist mit gedruckten Abzügen und Alben?',
        a: 'Wir bieten auf Wunsch hochwertige Leinen-Fotobücher (30×30, 40 Seiten) ab 390 €, Fine-Art-Abzüge und Wandbilder im Hahnemühle-Druck.' },
      { q: 'Gibt es eine Anzahlung?',
        a: 'Ja, 30 % bei Buchung als Reservierungs-Anzahlung. Der Restbetrag wird eine Woche vor der Hochzeit fällig.' },
    ],
    closing: 'Wir reservieren pro Monat maximal drei Hochzeiten — damit jedes Paar die Aufmerksamkeit bekommt, die es verdient. Schreiben Sie uns, und wir prüfen umgehend, ob Ihr Wunschdatum noch frei ist.',
  },

  'bewerbungsfotos-koeln': {
    slug: 'bewerbungsfotos-koeln',
    eyebrow: 'Bewerbungsfotos · Köln',
    intro: [
      'Ein gutes Bewerbungsfoto entscheidet in Sekunden. Recruiter scrollen am ersten Tag durch dreißig Lebensläufe — und bleiben bei dem hängen, bei dem das Gesicht sie ansieht wie jemand, mit dem man einen Kaffee trinken möchte.',
      'Bei Lichtraum in Köln fotografieren wir Bewerbungsbilder ab 89 € — professionell ausgeleuchtet, retuschiert im Preis enthalten, Express-Termine innerhalb einer Woche möglich. Wir beraten Sie zu Outfit und Ausdruck passend zu Ihrer Branche.',
    ],
    sections: [
      { h2: 'Was ein gutes Bewerbungsfoto ausmacht',
        body: [
          'Licht. Ausdruck. Schnitt. In dieser Reihenfolge. Alles andere — Hintergrund, Pose, Outfit — ordnet sich dem unter. Ein technisch perfektes Foto mit leerem Blick verliert gegen ein einfaches Foto, bei dem jemand präsent ist.',
          'Deshalb arbeiten wir nicht mit Fotoautomaten-Ästhetik. Kein grauer Hintergrund, kein starres „Kopf hoch, nicht lachen". Stattdessen ein zehnminütiges Gespräch, bevor die Kamera überhaupt ausgepackt wird — damit Sie nicht posieren, sondern sich zeigen.',
        ],
      },
      { h2: 'Branchen-Spezifika — warum ein Anwalt anders fotografiert werden sollte als ein Designer',
        body: [
          'Ein Kanzleiportrait braucht Formalität, einen neutral-dunklen Hintergrund, klassische Beleuchtung und Anzug — das Foto soll Vertrauen signalisieren, nicht Persönlichkeit.',
          'Ein Portrait für eine Kreativagentur, ein Tech-Startup oder eine Design-Position darf das Gegenteil sein: wärmer, natürlicher, mit leichtem Lächeln, vor unscharfem Umgebungskontext. Hier signalisiert das Foto Zugänglichkeit.',
          'Wir fragen Sie beim Vorgespräch nach der Branche, der konkreten Stelle und idealerweise der Firmenwebsite — und stimmen Licht, Bildausschnitt und Retusche darauf ab.',
        ],
      },
      { h2: 'Ablauf im Lichtraum-Studio',
        body: [
          'Termine dauern 30 Minuten Standard, 60 Minuten Premium. Sie kommen mit zwei bis drei Outfits (Oberteile reichen, weil wir Brustbild fotografieren). Wir haben Kaffee und einen Spiegel, damit Sie sich in Ruhe vorbereiten können.',
          'Während des Shootings zeigen wir Ihnen zwischendurch Bilder am Bildschirm — damit Sie Ausdruck und Kopfhaltung justieren können, ohne am Ende einen Fehlgriff im Paket zu haben.',
          'Retusche und Auslieferung: innerhalb von 48 Stunden, bei Express-Terminen innerhalb von 24 Stunden. Sie erhalten Ihre Favoriten als hochauflösende JPG-Dateien per E-Mail und über ein geschütztes Download-Portal.',
        ],
      },
      { h2: 'Vor/Nach-Retusche — was enthalten ist',
        body: [
          'Jedes ausgewählte Foto wird farbkorrigiert, hautneutralisiert und dezent retuschiert. Das heißt: Unreinheiten weg, Lichtverhältnisse ausgeglichen, Hemdenkragen zurechtgerückt. Was bleibt: Sie, wiedererkennbar, nur etwas besser ausgeleuchtet.',
          'Wir retuschieren ausdrücklich nicht über das Notwendige hinaus. Kein Bildbearbeitungs-Glanz, keine Hautglättung, die im Videocall dann nicht hält. Ihr Foto soll in fünf Jahren noch wie Sie aussehen.',
        ],
      },
    ],
    pricing: [
      { name: 'Basic (30 Min, 3 retuschierte Fotos)', price: '89 €' },
      { name: 'Standard (45 Min, 5 retuschierte Fotos)', price: '139 €', note: 'Beliebtestes Paket' },
      { name: 'Premium (60 Min, 10 retuschierte Fotos, 2 Outfits)', price: '199 €' },
      { name: 'Team-Paket ab 3 Personen (pro Person)', price: '79 €' },
      { name: 'Express-Aufschlag (Lieferung binnen 24 h)', price: '+ 40 €' },
      { name: 'Foto-Shooting vor Ort in Ihrem Büro (Köln)', price: '+ 150 €' },
    ],
    faqs: [
      { q: 'Wie lange dauert ein Bewerbungsfoto-Termin?',
        a: 'Standard 30–45 Minuten, Premium 60 Minuten. Wir planen absichtlich genug Puffer ein, damit Sie nicht gehetzt sind.' },
      { q: 'Wann bekomme ich meine Fotos?',
        a: 'Innerhalb von 48 Stunden bei Standard-Terminen. Mit Express-Aufschlag innerhalb von 24 Stunden — geeignet für Last-Minute-Bewerbungen.' },
      { q: 'Was ziehe ich an?',
        a: 'Für Kanzlei/Consulting: dunkler Anzug, weißes Hemd, dezente Krawatte. Für Tech/Kreativ: Hemd oder Pullover in gedeckten Farben, gerne auch Casual. Hauptsache: keine Muster, kein Schwarz auf Schwarz. Bringen Sie zwei Outfits mit — wir wählen vor Ort das passende.' },
      { q: 'Ist Retusche im Preis enthalten?',
        a: 'Ja, dezente Retusche ist bei allen Paketen inklusive. Starke Retusche (Zähne, Augen, Haarfarbe) ist nicht unser Stil — wir fotografieren Sie so, wie Sie sind.' },
      { q: 'Kann ich das Shooting in meinem Büro machen?',
        a: 'Ja, in Köln und Umgebung gegen einen Aufschlag von 150 € kommen wir mit mobilem Studio zu Ihnen. Für Teams ab 5 Personen rentiert sich das fast immer.' },
      { q: 'Gibt es einen Rabatt für Teams?',
        a: 'Ja — ab 3 Personen kostet das Bewerbungsfoto nur noch 79 € pro Person. Ideal für Start-ups, Kanzleien oder Agenturen, die einheitliche Bilder für die Website brauchen.' },
      { q: 'Welcher Hintergrund wird verwendet?',
        a: 'Standardmäßig ein warmer, graubrauner Hintergrund — branchenneutral und zeitlos. Auf Wunsch auch Weiß, Schwarz oder ein Environmental-Portrait (unscharfer Umgebungskontext).' },
      { q: 'Wie kommt man zum Studio?',
        a: 'Unser Studio liegt in Euskirchen, 30 Minuten von Köln. Wenn Sie nicht anreisen möchten, buchen Sie bitte das Vor-Ort-Paket (+ 150 €) und wir kommen in Ihr Büro.' },
    ],
    closing: 'Buchen Sie einen Termin — wir melden uns binnen 24 Stunden mit zwei oder drei Zeitvorschlägen. Bei Express-Bedarf rufen Sie uns gerne direkt an.',
  },

  'fotograf-koeln': {
    slug: 'fotograf-koeln',
    eyebrow: 'Premium-Fotografie · Großraum Köln',
    intro: [
      'Als Fotograf für Köln arbeiten wir aus Euskirchen — und das ist kein Mangel, sondern ein Vorteil. Wer jeden Tag durch den Stadtgarten läuft, hat aufgehört, ihn zu sehen. Wir kommen von außen, mit wachem Blick, und fotografieren die Stadt so, wie sie ist, wenn man sie das erste Mal ernst nimmt.',
      'Lichtraum Fotostudio bedient den gesamten Kölner Markt: Hochzeiten, Portraits, Business, Events, Familie. Was uns verbindet, ist kein Genre, sondern ein Stil — ruhig, editorial, ohne Inszenierung.',
    ],
    sections: [
      { h2: 'Was wir fotografieren',
        body: [
          'Hochzeiten in Köln, Bonn und der weiteren Region — als ganztägige Reportage oder in kompakten Standesamt-Formaten. Siehe dazu unsere spezialisierte Seite zum Hochzeitsfotograf Köln.',
          'Portraits: editorial, business, privat. Vom LinkedIn-Bild bis zum Corporate-Portrait-Set für die Website einer Kanzlei oder eines Mittelstandsunternehmens.',
          'Familien- und Kinderfotografie — zu Hause, im Park, am Rhein. Keine Studio-Künstlichkeit, sondern der Versuch, Kinder beim Spielen zu fotografieren, nicht beim Posieren.',
          'Events, Produkte und Marken — auf Anfrage, mit Tagessatz.',
        ],
      },
      { h2: 'Warum Köln von außerhalb besser fotografiert wird',
        body: [
          'Die meisten Kölner Fotografen sind Kölner. Das ist offensichtlich, aber weniger banal, als es klingt. Wer in einer Stadt aufgewachsen ist, fotografiert sie automatisch aus der Perspektive dessen, der nicht mehr staunt.',
          'Wir kommen aus 30 km Entfernung — Euskirchen, zwischen Eifel und Rheinland. Diese Distanz erlaubt uns, Köln immer wieder wie zum ersten Mal zu sehen. Der Dom, der Rheinauhafen, die Kranhäuser, das Belgische Viertel — für uns sind sie keine Kulisse, sondern Orte.',
          'Das zweite Argument ist praktisch: wir sind mobil. Wir arbeiten in Köln genauso wie in Bonn, Düsseldorf, Aachen oder der Eifel — und das ohne die typischen Kölner Studio-Preise, die auf urbanem Gewerbe-Mietniveau basieren.',
        ],
      },
      { h2: 'Unser Stil — in einem Satz',
        body: [
          'Editorial, zurückhaltend, auf Menschen fokussiert. Wir fotografieren kein „gestelltes Schöntun", sondern versuchen, den Moment so zu halten, wie er ist — und ihn nur mit Licht und Kamerawahl etwas zu verdichten.',
          'Konkret heißt das: weiche, natürliche Beleuchtung wo möglich, großzügige Bildausschnitte, wenig Farbe in der Nachbearbeitung, viel Atem in den Bildern. Wer grelle Sättigung und „Insta-Look" sucht, sollte einen anderen Fotografen buchen.',
        ],
      },
      { h2: 'Preise und Pakete im Überblick',
        body: [
          'Hochzeitsfotografie: ab 890 € (Standesamt) bis 2.790 € (Premium-Ganztag). Siehe ausführliche Preistabelle auf der Hochzeits-Seite.',
          'Bewerbungsfotos: ab 89 €. Siehe Bewerbungsfotos-Seite.',
          'Portrait- und Business-Shootings: ab 190 € für 45 Minuten im Studio, ab 390 € für On-Location in Köln.',
          'Familienshootings: ab 290 € für 90 Minuten outdoor im Großraum Köln.',
          'Tagessätze (Event, Corporate, Marketing): ab 1.290 €.',
        ],
      },
    ],
    faqs: [
      { q: 'Woher kommen Sie und wie weit kommen Sie zum Shooting?',
        a: 'Unser Studio ist in Euskirchen. Zu Shootings fahren wir bis 60 km kostenlos — das umfasst den gesamten Großraum Köln, Bonn, Leverkusen, den Rhein-Erft-Kreis und die Eifel. Weiter entfernte Termine (Düsseldorf, Aachen, Ruhrgebiet) sind möglich, mit Fahrtkostenpauschale.' },
      { q: 'Haben Sie ein Studio in Köln?',
        a: 'Nein — unser festes Studio liegt in Euskirchen (30 Min von Köln). Für Köln-Shootings kommen wir in Ihr Büro, an eine Außenlocation oder wir treffen uns in Köln in einem unserer Partner-Studios.' },
      { q: 'Fotografieren Sie auch in anderen NRW-Städten?',
        a: 'Ja: Bonn, Leverkusen, Düsseldorf, Aachen, Düren, Siegburg und das gesamte Bergische Land. Eine Übersicht aller Standort-Seiten finden Sie im Menüpunkt „Standorte".' },
      { q: 'Wer arbeitet bei Lichtraum?',
        a: 'Wir sind ein kleines Team aus zwei bis drei Fotograf:innen, je nach Projekt. Für Hochzeiten und Events kommen wir immer zu zweit, um keinen Moment zu verpassen.' },
      { q: 'Wie schnell antworten Sie auf Anfragen?',
        a: 'Montag–Freitag innerhalb von 24 Stunden, am Wochenende meist am nächsten Werktag. Bei dringenden Anfragen (Express-Bewerbungsfoto, kurzfristige Events) rufen Sie uns gerne direkt an.' },
    ],
    closing: 'Wenn Sie einen Fotografen für Köln suchen, der nicht nach „Köln" aussieht — schreiben Sie uns. Wir besprechen Ihr Projekt, schicken eine Ideenskizze und einen Kostenvoranschlag zurück.',
  },

  'fotoshooting-koeln': {
    slug: 'fotoshooting-koeln',
    eyebrow: 'Fotoshooting · Köln',
    intro: [
      'Ein Fotoshooting in Köln ist mehr als eine Stunde vor der Kamera. Es ist ein Nachmittag, an dem die Stadt Kulisse wird — und Sie in der Hauptrolle. Wir planen gemeinsam die Location, die Zeit, den Stil — und liefern Ihnen 20 bis 60 Bilder, mit denen Sie in fünf Jahren noch etwas anfangen können.',
      'Wir fotografieren Portraits, Paare, Familien, Schwangerschaften, Geschäftsportraits und kreative Personal-Branding-Shoots — im Studio, outdoor in Köln, oder bei Ihnen zu Hause.',
    ],
    sections: [
      { h2: 'Welche Shooting-Arten wir anbieten',
        body: [
          'Portrait-Shooting (45–90 Min): Einzelportraits, klassisch oder editorial, im Studio oder outdoor. Perfekt für Personal Branding, Social Media oder ein besonderes Geschenk.',
          'Paar-Shooting (60–90 Min): für Verlobte, Jahrestage, After-Wedding oder einfach zwei Menschen, die sich selten gemeinsam fotografieren lassen.',
          'Familienshooting (90 Min): draußen in Köln oder bei Ihnen zu Hause. Wir fotografieren keine Kinder beim Stillhalten — wir fotografieren sie, während sie Kind sein dürfen.',
          'Business-/Personal-Branding-Shooting (2–4 h): mehrere Outfits, verschiedene Locations, Lifestyle-Bilder für Website, LinkedIn, Instagram. Für Coaches, Selbständige, Kanzleien, Agenturen.',
          'Schwangerschaftsshooting (60 Min): im Studio mit warmem Licht oder outdoor zur goldenen Stunde. Auf Wunsch mit Partner oder Geschwisterkindern.',
        ],
      },
      { h2: 'Köln als Kulisse — unsere Lieblings-Locations',
        body: [
          'Rheinauhafen und Kranhäuser: urban, modern, mit Rheinblick. Perfekt für Editorial- und Business-Shootings.',
          'Belgisches Viertel: Jugendstilfassaden, Cafés, lebhafte Straßen — ideal für Lifestyle-Portraits mit Großstadt-Atmosphäre.',
          'Stadtgarten und Volksgarten: weitläufig, grün, ruhig — für Familien, Paare, Schwangerschaften.',
          'Hohenzollernbrücke: ikonisch, leicht zu finden, tagsüber gut fotografierbar.',
          'Kölner Dom bei Nacht: nur mit Stativ und etwas Geduld, aber atemberaubend.',
          'Köln-Ehrenfeld: Industrieflair, Street-Art, für editorial-kreative Shoots.',
        ],
      },
      { h2: 'Ablauf — so funktioniert ein Shooting bei uns',
        body: [
          'Erstgespräch: Sie schreiben uns, wir melden uns binnen 24 h mit drei Fragen — Anlass, Ort, gewünschte Stimmung. Auf dieser Basis schlagen wir zwei bis drei Locations und ein Paket vor.',
          'Vorbereitung: zwei Wochen vor dem Termin schicken wir eine kleine Styling-Hilfe (welche Farben wirken gut, was lieber vermeiden), eine Location-Karte mit Meeting-Point und einen Wetter-Backup-Plan.',
          'Am Shooting-Tag: wir treffen uns, machen zehn Minuten Small-Talk, damit Sie nicht angespannt in die Kamera schauen. Danach beginnt das Shooting schrittweise — erst lockere Bewegungs-Bilder, später konzentrierte Portraits.',
          'Nach dem Shooting: Sie bekommen innerhalb von 72 h eine Vorschau-Galerie zur Bildauswahl. Endbearbeitung und Lieferung innerhalb von 10 Werktagen.',
        ],
      },
      { h2: 'Preise und was enthalten ist',
        body: [
          'Portrait-Basic (45 Min, 8 bearbeitete Fotos): 190 €.',
          'Portrait-Premium (90 Min, 20 Fotos, 2 Outfits): 349 €.',
          'Paarshooting (90 Min, 25 Fotos): 390 €.',
          'Familienshooting (90 Min, 30 Fotos): 440 €.',
          'Personal-Branding (3 h, 40+ Fotos, 3 Locations): 890 €.',
          'Alle Pakete inkl. Beratung, Retusche, Online-Galerie und digitaler Auslieferung.',
        ],
      },
    ],
    faqs: [
      { q: 'Wie viele Fotos bekomme ich?',
        a: 'Je nach Paket zwischen 8 und 40 vollständig bearbeiteten Fotos. Wir zeigen Ihnen zusätzlich die unbearbeiteten Favoriten, damit Sie Ihre Auswahl selbst treffen können.' },
      { q: 'Was ist, wenn es regnet?',
        a: 'Wir verschieben kostenlos oder weichen auf Indoor-Locations (Hauptbahnhof, überdachte Passagen) aus. Oft sind die besten Bilder bei grauem Wetter entstanden — der weiche Himmel ist ein natürlicher Diffusor.' },
      { q: 'Muss ich vor dem Shooting etwas vorbereiten?',
        a: 'Nein. Wir schicken Ihnen zwei Wochen vorher eine kleine Styling-Hilfe und einen Treffpunkt. Keine Notizzettel, keine Vorübungen — das sieht man den Bildern sonst an.' },
      { q: 'Darf ich die Fotos auf Social Media teilen?',
        a: 'Ja, alle Bilder kommen mit Nutzungsrechten für den privaten und beruflichen Gebrauch — inkl. LinkedIn, Instagram, Unternehmenswebsite.' },
      { q: 'Kann ich mich bei Outfit-Wahl beraten lassen?',
        a: 'Ja, gerne. Schicken Sie uns ein paar Referenzbilder Ihrer Lieblings-Outfits, wir sagen Ihnen, welche am besten funktionieren.' },
      { q: 'Wo ist der Treffpunkt in Köln?',
        a: 'Je nach Shooting: Rheinauhafen (Parkhaus am Rhein), Stadtgarten (Aachener Weiher), Belgisches Viertel (Brüsseler Platz). Wir schicken Ihnen eine genaue Google-Maps-Koordinate 24 h vorher.' },
    ],
    closing: 'Schreiben Sie uns, wofür das Shooting gedacht ist — wir melden uns binnen 24 h mit einem Vorschlag, der zu Ihrem Anlass passt.',
  },

  'bewerbungsfotos-euskirchen': {
    slug: 'bewerbungsfotos-euskirchen',
    eyebrow: 'Bewerbungsfotos · Euskirchen',
    intro: [
      'Bewerbungsfotos in Euskirchen — ohne Anfahrt nach Köln, ohne Studio-Preise einer Landeshauptstadt, aber mit derselben Qualität, die man dort erwartet. Unser Lichtraum-Studio liegt zentral in Euskirchen, erreichbar aus dem gesamten Kreis, aus Zülpich, Mechernich, Bad Münstereifel und Weilerswist.',
      'Preise ab 89 €, Retusche inklusive, Express-Termine möglich. Ideal für Azubis, Studierende, Wiedereinsteiger und alle, die es schnell und professionell wollen.',
    ],
    sections: [
      { h2: 'Warum in Euskirchen fotografieren lassen',
        body: [
          'Der Aufwand einer Zug-oder-Autofahrt nach Köln — plus Parkplatzsuche, plus ein Termin, der Sie hetzt — ist beim Bewerbungsfoto oft kontraproduktiv. Sie kommen angespannt an, das sieht man den Augen an.',
          'Bei uns in Euskirchen parken Sie direkt vor dem Studio, wir nehmen uns Zeit, der Termin dauert 30–45 Minuten, und Sie fahren entspannt heim. Das Ergebnis sind ehrlichere Bilder — und ein besseres Preis-Leistungs-Verhältnis.',
        ],
      },
      { h2: 'Für welche Branchen wir fotografieren',
        body: [
          'Verwaltung, Bank, Steuerkanzlei: klassische Ausleuchtung, Anzug oder Blazer, neutral-professionell.',
          'Pflege, Handwerk, Industrie: freundliche, nahbare Portraits — keine Verkleidung, aber sauber und gepflegt.',
          'Kreativberufe, Tech, Medien: moderner Stil, warme Farben, wahlweise mit Environmental-Hintergrund.',
          'Auszubildende und Studierende: wir geben auch kurzfristige Beratung zur Outfit-Wahl und helfen Ihnen, das Foto branchenpassend auszuwählen.',
        ],
      },
      { h2: 'Ablauf vor Ort',
        body: [
          'Bringen Sie zwei Outfits mit (nur Oberteile zählen, wir fotografieren Brustbild). Wir sprechen zuerst kurz über die Stelle, auf die Sie sich bewerben, und wählen dann Licht und Hintergrund aus.',
          'Während des Shootings zeigen wir Ihnen zwischendurch Bilder am Bildschirm — damit Sie Ihre Kopfhaltung und Ihren Ausdruck justieren können, bevor die Zeit vorbei ist.',
          'Die Retusche macht der Fotograf selbst, innerhalb von 48 Stunden — kein Outsourcing, keine Wartezeiten.',
        ],
      },
    ],
    pricing: [
      { name: 'Basic (30 Min, 3 retuschierte Fotos)', price: '89 €' },
      { name: 'Standard (45 Min, 5 retuschierte Fotos)', price: '139 €' },
      { name: 'Premium (60 Min, 10 retuschierte Fotos, 2 Outfits)', price: '199 €' },
      { name: 'Express (Lieferung binnen 24 h)', price: '+ 40 €' },
    ],
    faqs: [
      { q: 'Wo genau liegt das Studio in Euskirchen?',
        a: 'Im Zentrum von Euskirchen, fünf Minuten vom Bahnhof entfernt, Parkplätze direkt vor der Tür. Die genaue Adresse schicken wir nach Terminbuchung.' },
      { q: 'Bieten Sie auch Online-Buchung?',
        a: 'Ja — schreiben Sie uns per E-Mail Ihren Wunschtermin, wir schicken binnen 24 h eine Bestätigung oder einen Alternativvorschlag.' },
      { q: 'Ist die Retusche wirklich inklusive?',
        a: 'Ja, dezente Retusche (Haut, Licht, Kontrast) ist bei allen Paketen im Preis enthalten. Starke Retusche machen wir bewusst nicht.' },
      { q: 'Was, wenn ich die Fotos kurzfristig brauche?',
        a: 'Express-Termine innerhalb einer Woche sind fast immer möglich. Aufschlag 40 € für 24-h-Lieferung.' },
      { q: 'Fotografieren Sie auch außerhalb von Euskirchen?',
        a: 'Ja — in Köln (Aufschlag 150 €), in Bonn, in Zülpich oder bei Ihnen im Büro ab 3 Personen.' },
      { q: 'Was ist der Unterschied zum Fotoautomaten?',
        a: 'Wir beraten Sie branchenspezifisch, leuchten professionell aus und retuschieren jedes Bild. Ein Fotoautomat liefert keinen Ausdruck — und Recruiter sehen den Unterschied.' },
    ],
    closing: 'Schreiben Sie uns Ihre Wunschtermine — wir melden uns binnen 24 Stunden mit Vorschlägen.',
  },

  'hochzeitsfotograf-euskirchen': {
    slug: 'hochzeitsfotograf-euskirchen',
    eyebrow: 'Hochzeitsreportage · Euskirchen & Eifel',
    intro: [
      'Eine Hochzeit im Kreis Euskirchen heißt: Burgen statt Event-Hallen, Eifel statt Skyline, Ruhe statt Großstadttrubel. Wir fotografieren Hochzeiten auf Burg Satzvey, Burg Zievel, Schloss Gracht oder einfach im Garten eines Hofguts — immer mit Blick für die leisen Momente, die eine Hochzeit ausmachen.',
      'Hochzeitsfotograf Euskirchen — das heißt für uns: kurze Wege, Ortskenntnis, Reportage-Stil, Preise ab 1.490 € für einen halben Tag.',
    ],
    sections: [
      { h2: 'Hochzeitslocations im Kreis Euskirchen',
        body: [
          'Burg Satzvey ist eine der bekanntesten Hochzeitslocations in der Eifel — mittelalterlich, stimmungsvoll, mit eigenem Kapellenbereich. Wir fotografieren dort regelmäßig und kennen jede Ecke für Trauungen, Gruppenfotos und Portraits.',
          'Burg Zievel bietet eine intimere Kulisse mit historischen Sälen und einem Innenhof, der bei Regen ein natürlicher Schutz wird.',
          'Schloss Gracht in Erftstadt (15 Min nördlich) ist eine barocke Alternative mit weitläufigem Park.',
          'Die Eifel selbst — Wald, Heide, Seen — eignet sich für kleinere Hochzeiten mit Outdoor-Zeremonie, zum Beispiel an der Steinbachtalsperre oder im Nationalpark Eifel.',
        ],
      },
      { h2: 'Unser Vorteil als lokaler Hochzeitsfotograf',
        body: [
          'Wir sind in zehn Minuten bei Ihnen, wenn Sie aus Euskirchen, Weilerswist, Zülpich oder Mechernich heiraten. Das heißt: Vorbesprechungen sind unkompliziert, Location-Scoutings vor der Hochzeit können wir ohne Zusatzkosten machen.',
          'Wir kennen die Standesämter der Region und wissen, wie lang eine Trauung dort üblicherweise dauert, wo der Fotograf stehen darf und welche Lichtbedingungen herrschen.',
          'Für Paare, die zusätzlich in Köln heiraten oder ihre Hochzeit als Reportage bis in die Innenstadt führen möchten, bieten wir nahtlose Begleitung vom Eifel-Schloss bis zum Kölner Restaurant.',
        ],
      },
      { h2: 'Stil — dasselbe wie in Köln, nur näher',
        body: [
          'Unser Hochzeits-Reportage-Stil ist derselbe, den Sie auf unserer Köln-Seite finden: dokumentarisch, zurückhaltend, mit Editorial-Portraits zwischen Zeremonie und Feier.',
          'Der einzige Unterschied: in der Eifel ist das Licht meist anders. Weicher, grüner, langsamer. Wir passen Bildbearbeitung und Farbwahl dezent an — nichts Dramatisches, nur eine etwas andere Tonalität.',
        ],
      },
    ],
    pricing: [
      { name: 'Standesamt (3 h)', price: '890 €' },
      { name: 'Halbtag (6 h)', price: '1.490 €' },
      { name: 'Ganztag (10 h)', price: '1.890 €', note: 'Beliebtestes Paket' },
      { name: 'Premium (12 h + After-Wedding)', price: '2.790 €' },
      { name: 'Zweitfotograf', price: '+ 490 €' },
      { name: 'Leinen-Fotobuch', price: '+ 390 €' },
    ],
    faqs: [
      { q: 'Fotografieren Sie auf Burg Satzvey?',
        a: 'Ja, regelmäßig. Wir kennen die Räumlichkeiten, die besten Spots für Portraits und haben auch bei Regen Backup-Pläne.' },
      { q: 'Wie viel kostet ein Hochzeitsfotograf in Euskirchen?',
        a: 'Zwischen 890 € (Standesamt, 3 h) und 2.790 € (Premium, 12 h mit Zweitfotograf). Damit liegen wir preislich wie in Köln — aber mit kürzeren Wegen und besserer Ortskenntnis für die Eifel-Region.' },
      { q: 'Bieten Sie auch After-Wedding-Shoots in der Eifel?',
        a: 'Sehr gerne. Die Eifel bietet mit Nationalpark, Seen und Burgen ideale Kulissen für After-Wedding-Bilder — oft intimer und ruhiger als am Hochzeitstag selbst.' },
      { q: 'Wie weit im Voraus muss ich buchen?',
        a: 'Für Samstage zwischen Mai und September empfehlen wir 9–12 Monate. Kurzfristige Termine in der Nebensaison sind oft noch möglich.' },
      { q: 'Fotografieren Sie auch bei kleinen Hochzeiten (unter 20 Gästen)?',
        a: 'Ja, sogar sehr gerne. Kleine Hochzeiten erlauben eine intimere Reportage — und oft ehrlichere Bilder.' },
      { q: 'Kommen Sie auch ins Hotel nach Bad Münstereifel oder Nideggen?',
        a: 'Ja. Anfahrten im Kreis Euskirchen und angrenzende Eifel-Gemeinden sind kostenfrei. Bei größerer Distanz berechnen wir eine moderate Fahrtkostenpauschale.' },
    ],
    closing: 'Wenn Sie in Euskirchen oder der Eifel heiraten und einen Fotografen suchen, der die Region kennt — schreiben Sie uns. Wir prüfen die Verfügbarkeit Ihres Datums und schicken umgehend einen Vorschlag.',
  },

  'schwangerschaftsfotos-koeln': {
    slug: 'schwangerschaftsfotos-koeln',
    eyebrow: 'Babybauch & Newborn · Köln',
    intro: [
      'Ein Babybauch-Shooting ist kein Posing-Termin. Es ist ein ruhiger Nachmittag, an dem Sie sich — und das Kind in Ihnen — zum ersten Mal in Ruhe betrachten dürfen. Wir fotografieren Schwangerschaftsfotos in Köln im warm ausgeleuchteten Lichtraum-Studio oder outdoor zur goldenen Stunde.',
      'Ab 290 €, Retusche inklusive, auf Wunsch mit Partner, Geschwisterkindern oder Haustieren.',
    ],
    sections: [
      { h2: 'Wann der beste Zeitpunkt ist',
        body: [
          'Zwischen der 30. und 35. Schwangerschaftswoche. Der Bauch ist rund, aber Sie sind noch beweglich genug, um 60 Minuten entspannt vor der Kamera zu stehen.',
          'Für Newborn-Shootings (separat buchbar) sind die ersten 14 Lebenstage ideal — danach werden Babys aktiver und lassen sich schwerer in die klassischen Schlafpositionen legen.',
        ],
      },
      { h2: 'Studio oder outdoor?',
        body: [
          'Im Studio: warmes Kunstlicht, weiche Tücher, kontrollierte Atmosphäre. Ideal für intimere Portraits, die nicht vom Umfeld abhängen.',
          'Outdoor: Weiher im Stadtgarten, Rheinufer, Villa Flora — zur goldenen Stunde, wenn das Licht weich und warm ist. Nur von Mai bis September empfehlenswert.',
        ],
      },
      { h2: 'Ablauf',
        body: [
          'Vorgespräch per Telefon zum Zeitfenster, Stil und Outfit. Wir haben im Studio drei passende Kleider in verschiedenen Größen, falls Sie nichts Eigenes mitbringen möchten.',
          'Während des Shootings machen wir keine Express-Posen. Wir bitten Sie, zu stehen, zu sitzen, sich zu bewegen — und fotografieren dazwischen. So entstehen natürliche Bilder statt inszenierter Albumcover.',
          'Auslieferung: 20–30 Fotos nach 10 Werktagen, Online-Galerie zum Teilen.',
        ],
      },
    ],
    pricing: [
      { name: 'Babybauch-Studio (60 Min, 15 Fotos)', price: '290 €' },
      { name: 'Babybauch Premium (90 Min, mit Partner, 25 Fotos)', price: '390 €' },
      { name: 'Babybauch + Newborn Kombi', price: '590 €' },
      { name: 'Newborn-Shooting (Hausbesuch)', price: '340 €' },
    ],
    faqs: [
      { q: 'Ab wann sollte man fotografieren lassen?',
        a: 'Ideal ist die 30.–35. Woche. Wenn Sie unsicher sind, rufen Sie uns an — wir beraten.' },
      { q: 'Kann ich mit Partner, Kind oder Hund kommen?',
        a: 'Ja. Beim Paket „Premium" ist eine zweite Person inklusive, weitere Personen zzgl. 50 € pro Person.' },
      { q: 'Muss ich etwas mitbringen?',
        a: 'Nein, aber bringen Sie gerne eigene Outfits oder Erinnerungsstücke mit. Wir haben drei Kleider und ein paar Tücher im Studio zur Auswahl.' },
      { q: 'Findet das Shooting in Köln statt?',
        a: 'Unser Studio liegt in Euskirchen (30 Min von Köln). Für Outdoor-Shootings kommen wir nach Köln, Bonn oder an eine Location Ihrer Wahl.' },
    ],
    closing: 'Schreiben Sie uns Ihren Entbindungstermin, wir schlagen Ihnen den idealen Shooting-Zeitpunkt vor.',
  },

  'businessfotograf-koeln': {
    slug: 'businessfotograf-koeln',
    eyebrow: 'Business, LinkedIn & Personal Branding · Köln',
    intro: [
      'Ein Businessfoto muss nicht seriös aussehen, es muss Sie aussehen. Und das ist schwerer, als es klingt — denn auf Business-Portraits wirken die meisten Menschen wie eine Kopie ihres LinkedIn-Profils, nicht wie sie selbst.',
      'Wir fotografieren Business-Portraits in Köln entweder in Ihrem Büro (für Teams ab 3 Personen lohnt sich das fast immer) oder im Lichtraum-Studio. Einzelportrait, Personal Branding, Team-Serie — in einem Stil, der nicht nach Stock-Foto aussieht.',
    ],
    sections: [
      { h2: 'Was wir anbieten',
        body: [
          'LinkedIn- und Website-Portraits: Einzelbild, klassisch oder environmental, passend zum Corporate Design Ihrer Firma oder zu Ihrem Personal Branding.',
          'Personal-Branding-Shoots (Coach, Berater, Selbständig): 2–4 Stunden, mehrere Outfits und Locations, Lifestyle- und Studio-Bilder als Bundle für Website, Social Media, Ads.',
          'Team- und Firmenbilder: einheitliche Einzelportraits plus Gruppenfoto, on-Location in Ihrem Büro, Kanzlei oder Agentur.',
          'Event- und Messe-Dokumentation: auf Anfrage, mit Tagessatz.',
        ],
      },
      { h2: 'Onsite vs. Studio',
        body: [
          'Onsite (in Ihrem Büro): wir bringen ein mobiles Studio mit, benötigen ca. 3 qm freien Platz und etwa 10 Minuten Setup. Pro Person kalkulieren wir 10 Minuten, inklusive Gespräch und Auswahl.',
          'Im Studio (Euskirchen): für Einzelportraits, Personal Branding und Bewerbungsfotos. 30 Minuten Drive von Köln, Parkplätze direkt vor der Tür.',
        ],
      },
    ],
    pricing: [
      { name: 'LinkedIn-Portrait Einzel (45 Min, 3 Fotos)', price: '190 €' },
      { name: 'Team-Onsite in Köln (ab 3 Personen, pro Person)', price: '79 €' },
      { name: 'Personal Branding (3 h, 40 Fotos, 3 Locations)', price: '890 €' },
      { name: 'Tagessatz Corporate/Event (bis 8 h)', price: '1.290 €' },
    ],
    faqs: [
      { q: 'Kommen Sie in unser Büro in Köln?',
        a: 'Ja. Anfahrt bis 60 km vom Studio (Euskirchen) kostenlos, das umfasst den gesamten Großraum Köln/Bonn. Für Teams ab 3 Personen berechnen wir pauschal 79 € pro Kopf.' },
      { q: 'Wie schnell bekommen wir die Bilder?',
        a: 'Bei Team-Shootings innerhalb von fünf Werktagen. Bei Personal-Branding-Shoots ca. 10 Werktage, da hier mehr Auswahl nötig ist.' },
      { q: 'Können Sie die Bilder im Corporate Design retuschieren?',
        a: 'Ja — gleicher Hintergrund, gleiche Bildkomposition, gleiche Farbwelt. Wichtig für einheitliche Team-Seiten auf Websites.' },
      { q: 'Welche Rechte bekommen wir an den Bildern?',
        a: 'Uneingeschränkte Nutzungsrechte für Website, Social Media, LinkedIn, Printmedien, Pressemitteilungen. Weiterverkauf ausgeschlossen.' },
    ],
    closing: 'Schreiben Sie uns, wen und wofür Sie fotografieren lassen möchten — wir schicken ein passendes Angebot innerhalb von 24 Stunden.',
  },
}
