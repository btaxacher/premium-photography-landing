/**
 * Blog-Content. TS-strukturiert (kein MDX-Runtime nötig).
 * 4 Starter-Artikel je ~1.500–2.500 Wörter.
 * Jeder Artikel hat Article-JSON-LD-Metadaten für SEO.
 */

export type BlogSection = { h2: string; paragraphs: string[]; list?: string[] }

export type BlogPost = {
  slug: string
  title: string
  description: string
  publishedDate: string // ISO
  readTime: number // Minuten
  author: string
  category: string
  intro: string[]
  sections: BlogSection[]
  closing: string
  keyword: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'was-kostet-hochzeitsfotograf-koeln-2026',
    title: 'Was kostet ein Hochzeitsfotograf in Köln? Preise 2026 im Überblick',
    description: 'Was zahlt man 2026 realistisch für einen Hochzeitsfotografen in Köln? Preisspanne, Paket-Vergleich, versteckte Kosten, Budgetplanung — ehrlich erklärt.',
    publishedDate: '2026-02-10',
    readTime: 9,
    author: 'Lichtraum Studio',
    category: 'Hochzeit',
    keyword: 'Hochzeitsfotograf Köln Preise',
    intro: [
      'Wenn Sie gerade verlobt sind und zum ersten Mal bei „Hochzeitsfotograf Köln" googeln, ist die Irritation vorprogrammiert: 890 € bei dem einen, 4.500 € beim nächsten, und beide versprechen „Premium-Reportage in Editorial-Qualität". Woher kommt diese Spanne — und wie findet man darin die eigene richtige Preiskategorie?',
      'Dieser Artikel ist eine ehrliche Einordnung der Kölner Hochzeitsfotografie-Preise 2026: was Sie für welches Budget bekommen, welche Leistungen Standard sind und welche Aufpreis bedeuten, und welche versteckten Kosten Ihnen beim ersten Angebot nicht auffallen.',
    ],
    sections: [
      { h2: 'Die drei Preis-Segmente in Köln',
        paragraphs: [
          'Der Kölner Markt teilt sich ziemlich sauber in drei Segmente. Das Einsteigersegment (800–1.500 €) wird meist von Teil- oder Zweitberuflern bedient, die am Wochenende fotografieren und ihr Hauptgeld anderswo verdienen. Qualitativ kann das alles zwischen solide und ernüchternd sein — Sie sollten hier besonders gründlich Referenzen prüfen.',
          'Das Mittelsegment (1.500–2.800 €) wird von hauptberuflichen Fotograf:innen mit 3–8 Jahren Erfahrung gehalten. Das ist statistisch das größte Segment und meistens das sinnvollste Preis-Leistungs-Verhältnis. Hier finden Sie Leute, die einen Reportagetag routiniert durchhalten, zwei Kameras dabei haben und professionell retuschieren.',
          'Das Premium-Segment (2.800–5.500 €) besteht aus etablierten Marken mit mehrjähriger Wartezeit, oft mit eigenem Stil-Branding und internationalem Portfolio. Für viele Paare ist das Overkill — für Paare, die auf dieses Portfolio abzielen, ist es sein Geld wert.',
        ],
      },
      { h2: 'Was ein Standard-Paket enthält (und was extra kostet)',
        paragraphs: [
          'Ein seriöses Standard-Paket für einen Ganztag in Köln (ca. 8–10 Stunden Begleitung) kostet 2026 durchschnittlich 1.890 €. Enthalten sind typischerweise: Begleitung vom Getting-Ready bis ca. zum ersten Tanz, zwischen 500 und 800 bearbeitete Fotos, eine passwortgeschützte Online-Galerie und digitale Auslieferung in hoher Auflösung.',
          'Klassische Zusatzkosten sind: Zweitfotograf (+ 350–600 €), Drohnenaufnahmen (+ 200–400 €, nur mit Kenntnis-Nachweis), Fine-Art-Fotobuch (+ 300–700 € je nach Format und Seitenzahl), Fahrtkosten über 50 km (meist 0,50 €/km).',
          'Weniger sichtbare, aber durchaus relevante Punkte: erweiterte Nutzungsrechte für kommerzielle Zwecke (Sie wollen ein Bild in einer Zeitschrift zeigen), After-Wedding-Shooting als separater Termin, Speed-Lieferung (Vorschau binnen 24 h statt 72 h).',
        ],
        list: [
          '500–800 bearbeitete Fotos in hoher Auflösung',
          '8–10 Stunden Begleitung (Getting-Ready bis erster Tanz)',
          'Passwortgeschützte Online-Galerie für Gäste',
          'Backup-Speicher während und nach der Hochzeit',
          'Haftpflicht- und Ausrüstungsversicherung des Fotografen',
          'Anfahrt im Großraum Köln (bis ca. 50 km)',
        ],
      },
      { h2: 'Warum zwei Fotograf:innen oft günstiger sind als man denkt',
        paragraphs: [
          'Ein Zweitfotograf kostet 400–600 € Aufpreis — und wirkt auf den ersten Blick wie unnötiger Luxus. Bei Hochzeiten unter 40 Gästen stimmt das. Ab 60 Gästen wird es interessant, ab 100 Gästen praktisch unverzichtbar.',
          'Der Grund ist banal: Zwei parallele Getting-Readys (Braut bei ihren Eltern, Bräutigam im Hotel) lassen sich von einer Person nicht dokumentieren. Während der Zeremonie fehlen Ihnen Gästereaktionen, wenn nur der Hauptfotograf auf die Ringe fokussiert ist. Bei der Feier fehlen die „Nebenbei"-Momente, wenn einer die Hauptbühne abdeckt.',
          'Rechnen Sie es durch: bei 100 Gästen bedeuten die 500 € für den Zweitfotograf ca. 5 € pro Gast — weniger als die Kosten für einen zusätzlichen Welcome-Drink. Die Bildausbeute verdoppelt sich effektiv.',
        ],
      },
      { h2: 'Der wichtigste versteckte Kostenfaktor: Nutzungsrechte',
        paragraphs: [
          'Deutsche Hochzeitsfotograf-Verträge enthalten fast immer eine Klausel zu Nutzungsrechten — und die werden oft missverstanden. Standard: Sie als Brautpaar bekommen Nutzungsrechte für private Zwecke, inklusive Social Media und Weitergabe an Familie/Freunde.',
          'Was typischerweise nicht enthalten ist: Weitergabe an Presse oder Magazine, Verwendung in kommerziellen Kontexten (Sie arbeiten als Influencer, der Ehering-Hersteller möchte das Bild auf seiner Website). Manche Fotograf:innen verlangen hier empfindlich — bis zu 500 € pro Bild pro Jahr.',
          'Wenn Sie absehen, dass Sie die Bilder breiter nutzen möchten, verhandeln Sie die erweiterten Rechte beim Buchen — nicht danach. Der Zuschlag ist oft gering (ca. 150–300 € einmalig), wenn Sie es vor der Hochzeit ansprechen.',
        ],
      },
      { h2: 'Budget-Orientierung nach Hochzeitsgröße',
        paragraphs: [
          'Als grobe Faustregel: 5–10 % des Hochzeitsbudgets sind für Fotografie realistisch — mit Tendenz nach oben, weil Fotos das einzige sind, was physisch nach der Hochzeit bleibt.',
          'Bei einer Mikro-Hochzeit (bis 25 Gäste) reicht oft ein halber Tag für 1.200–1.500 €. Bei einer Standard-Hochzeit (50–80 Gäste) planen Sie 1.800–2.500 € Gesamtbudget Fotografie ein. Bei 100+ Gästen mit Zweitfotograf, Drohne und Album werden es schnell 3.500–5.000 €.',
          'Wichtig: Nehmen Sie nicht automatisch den günstigsten Anbieter. Die Preisdifferenz zwischen 1.200 € und 1.800 € ist meist die Differenz zwischen „Wochenend-Fotograf" und „Vollzeit-Profi mit Backup-Equipment". Bei einer Hochzeit zählt Letzteres mehr, als man vorher denkt.',
        ],
      },
    ],
    closing: 'Realistisch planen Sie 2026 in Köln zwischen 1.800 € und 2.800 € für eine professionelle Ganztagsreportage ein — mit Tendenz nach oben, wenn Sie Zweitfotograf und Album wollen. Wenn Sie das Budget haben, wählen Sie nicht den günstigsten, sondern den, dessen Portfolio Sie sich in fünf Jahren noch gerne ansehen möchten.',
  },

  {
    slug: 'schoenste-hochzeitslocations-rhein-erft',
    title: 'Die 12 schönsten Hochzeitslocations im Rhein-Erft-Kreis und Umgebung',
    description: 'Von Schloss Augustusburg bis Burg Satzvey — die schönsten Hochzeitslocations im Rhein-Erft-Kreis, bewertet nach Atmosphäre, Kapazität, Preisklasse und Fotogenität.',
    publishedDate: '2026-02-25',
    readTime: 11,
    author: 'Lichtraum Studio',
    category: 'Locations',
    keyword: 'Hochzeitslocations Rhein-Erft',
    intro: [
      'Der Rhein-Erft-Kreis — Brühl, Hürth, Erftstadt, Pulheim, Bergheim, Kerpen, Frechen, Wesseling — ist ein unterschätztes Hochzeits-Revier. Drei UNESCO-nahe Schlösser, zwei barocke Parks, mehrere Mittelalterburgen, gute Infrastruktur und trotzdem Preise deutlich unter Köln.',
      'Als Fotograf:innen fahren wir regelmäßig in jede dieser Locations. Hier eine ehrliche, subjektiv-objektive Liste der 12 Orte, die am häufigsten funktionieren — und für welchen Hochzeitstyp jede gemacht ist.',
    ],
    sections: [
      { h2: '1. Schloss Augustusburg, Brühl — UNESCO-Welterbe',
        paragraphs: [
          'Der Klassiker. Barockes Schloss aus dem 18. Jahrhundert, drei Säle für 40 bis 180 Gäste, weitläufiger englischer Park mit Wasseranlagen, direkte Nachbarschaft zum Schloss Falkenlust. Die Trauung kann im Prunksaal oder im Schlosspark stattfinden.',
          'Für Fotograf:innen: fast jedes Licht funktioniert. Der Park hat ein weites Allee-System mit gefilterten Nachmittagssonnen, die Fassade liefert einen dramatischen Hintergrund, die Treppe eignet sich für Gruppenfotos bis 60 Personen ohne Staffelei.',
          'Preisklasse: gehoben (Miete 3.500–8.000 € je nach Saal und Saison). Beliebt — 18 Monate Vorlauf bei Samstagen in der Hochsaison.',
        ],
      },
      { h2: '2. Schloss Bensberg, Bergisch Gladbach — edler Bergblick',
        paragraphs: [
          'Eines der prestigeträchtigsten Hotels der Region, mit Schlossterrasse und Blick bis nach Köln. Eigene Hochzeitsplaner im Haus, kulinarisch auf Sterne-Niveau. Kapazität bis 200 Gäste.',
          'Für Fotograf:innen: die Terrasse zum Sonnenuntergang ist ein Gruppenfoto-Liebling mit ikonischem Hintergrund. Innenräume haben gutes Tageslicht. Einziges Caveat: die Bodenhöhe der Terrasse wirkt bei Portraitausschnitt manchmal unvorteilhaft — wir empfehlen, Portraits eher im Park oder am Eingang zu machen.',
        ],
      },
      { h2: '3. Schloss Gracht, Erftstadt — barockes Idyll',
        paragraphs: [
          'Wasserschloss aus dem 17. Jahrhundert mit privatem Park, Orangerie, Kapelle. Mittlere Größe (bis 120 Gäste). Preisklasse moderat bis gehoben.',
          'Fotografisch ein Traum: die Wasserspiegelung der Fassade, die Kastanienallee, die Innenhofszene mit steinerner Brücke. Wir fotografieren hier sehr gerne, weil die Dichte an fotogenen Spots pro Quadratmeter extrem hoch ist.',
        ],
      },
      { h2: '4. Burg Satzvey, Mechernich — mittelalterliches Gesamtkunstwerk',
        paragraphs: [
          'Bekannteste Burg der Eifel, knapp außerhalb des Kreises, aber in 25 Min erreichbar. Mittelalterliches Ambiente, Innenhof, Kapelle, großer Turmblick. Events ab 20 Gästen, bis 200 möglich.',
          'Für Stimmung und Romantik unschlagbar. Für moderne Fotografie ist es ein doppeltes Spiel: der Stein-Hintergrund ist dramatisch, aber die Lichtverhältnisse in den Innenräumen erfordern lichtstarke Objektive und oft künstliche Aufheller.',
        ],
      },
      { h2: '5. Abtei Brauweiler, Pulheim — monastische Ruhe',
        paragraphs: [
          'Ehemaliges Benediktinerkloster mit romanischer Kirche, Kreuzgang und weitem Park. Kapazität moderat (bis 80), ruhige Atmosphäre. Ideal für stille, würdevolle Hochzeiten.',
          'Fotografisch liefert der Kreuzgang eine seltene architektonische Qualität — Säulen, Licht-Schatten-Raster, Steinflächen. Im Sommer ist der Innenhof ein natürlicher Studio-Raum mit weichem Nordlicht.',
        ],
      },
      { h2: '6. Paffendorfer Schloss, Bergheim — intime Park-Hochzeit',
        paragraphs: [
          'Kleineres Barockschloss, umgeben von weitläufigem Park. Kapazität bis 60 Gäste, preislich moderat. Trauungen in der Schlosskapelle möglich.',
          'Ein Geheimtipp für Paare, die das Schloss-Feeling ohne den Augustusburg-Trubel wollen. Der Park ist weniger frequentiert, das Licht oft ungestört.',
        ],
      },
      { h2: '7. Villa Flora, Köln-Lindenthal — Jugendstil mit Garten',
        paragraphs: [
          'Jugendstil-Villa mit angeschlossenem Restaurant, Wintergarten und Park. Urban, gut erreichbar, Kapazität bis 120.',
          'Wir mögen die Location für ihre stilistische Vielfalt: der Wintergarten liefert Studiolicht, der Garten Natur, die Villenzimmer Editorial-Settings. Innerhalb von 50 Metern drei verschiedene Bildsprachen.',
        ],
      },
      { h2: '8. Schloss Loersfeld, Kerpen — barockes Kleinod',
        paragraphs: [
          'Kleines, privat geführtes Schloss zwischen Kerpen und Erftstadt. Intimer Rahmen bis 50 Gäste, Park mit Teichen und Alleebäumen. Preisklasse moderat.',
          'Für Mikro-Hochzeiten mit Ambiente fast perfekt. Kein Trubel, keine parallele Hochzeit nebenan.',
        ],
      },
      { h2: '9. Rheinauhafen, Köln — urbane Moderne',
        paragraphs: [
          'Kein klassischer Hochzeits-Ort, aber ein wunderbarer Nebenschauplatz für urbane After-Wedding-Shootings oder für Paare, die in einem modernen Restaurant (Moltkerei, Silencio) feiern. Kranhäuser, Rhein, Industriekulisse.',
          'Fotografisch: Zur goldenen Stunde und in der blauen Stunde spektakulär. Tagsüber manchmal zu sonnig-kontrastreich.',
        ],
      },
      { h2: '10. Herrenhaus Stammen, Eifel — abgeschiedene Eleganz',
        paragraphs: [
          'Gutshof mit Restaurant und Gästehaus, 40 Min südwestlich. Nur Gesamtmiete (exklusiv), kapazitätsstark bis 160 Gäste. Preisklasse gehoben, aber mit eigenem Restaurant weniger Koordinationsaufwand.',
          'Fotografisch ein Traum: große Obstgärten, Natursteinmauern, das anliegende Waldstück bietet zur Dämmerung magische Lichtstimmungen.',
        ],
      },
      { h2: '11. Michaelsberg Siegburg — Kloster mit Weitblick',
        paragraphs: [
          'Ehemaliges Benediktiner-Kloster auf einem 80 m hohen Hügel mit 360°-Aussicht. Trauungen in der Klosterkirche, Empfänge in der Eingangshalle.',
          'Für Paare, die den großen Blick mögen. Logistisch nicht ganz einfach (steil, begrenzte Parkplätze), aber dafür einzigartig in der Bildwirkung.',
        ],
      },
      { h2: '12. Max-Ernst-Museum, Brühl — Kunst als Kulisse',
        paragraphs: [
          'Privat-Anmietung möglich für kleinere Empfänge (bis 80 Gäste). Modernes Museum, surrealistische Kunstsammlung, eigener Außenbereich.',
          'Für Paare mit Affinität zu zeitgenössischer Kunst — die Fotos werden ungewöhnlich und stark.',
        ],
      },
    ],
    closing: 'Alle zwölf Locations haben eines gemeinsam: ihr individueller Charakter prägt die Bildsprache der Hochzeit. Wenn Sie unsicher sind, welche zu Ihnen passt, schreiben Sie uns Ihre Eckdaten (Gästezahl, Jahreszeit, Budget) — wir geben Ihnen eine ehrliche Einschätzung, welche zwei Orte wir uns für Sie tatsächlich anschauen würden.',
  },

  {
    slug: 'bewerbungsfoto-checkliste',
    title: 'Bewerbungsfoto 2026 — die komplette Checkliste (inkl. Branche-Tipps)',
    description: 'Vor dem Fotograftermin: was anziehen, wie schlafen, wie anlächeln, was retuschieren lassen. Die komplette Bewerbungsfoto-Checkliste nach Branche und Position.',
    publishedDate: '2026-03-04',
    readTime: 8,
    author: 'Lichtraum Studio',
    category: 'Bewerbung',
    keyword: 'Bewerbungsfoto Tipps',
    intro: [
      'Ein gutes Bewerbungsfoto hat wenig mit Schönheit zu tun und sehr viel mit Vorbereitung. Zwischen dem Durchschnittsfoto und dem überzeugenden Foto liegen oft zehn vermeidbare Details — von der Cremewahl am Morgen bis zum Hintergrund-Kontrast.',
      'Diese Checkliste ist als Gedächtnisstütze gedacht für den Tag vor und den Tag des Termins. Am Ende dann noch eine Branchen-Matrix: was ein Kanzlei-Foto braucht, was ein Tech-Foto braucht, was ein Pflege-Foto braucht.',
    ],
    sections: [
      { h2: '24 Stunden vor dem Termin',
        paragraphs: [
          'Schlaf. Das klingt banal, ist aber der größte Einzelhebel: Übermüdung zeigt sich in Augenringen, die sich schwer retuschieren lassen, ohne die Glaubwürdigkeit des Gesichts zu verlieren. Sieben bis acht Stunden vor einem Foto-Termin sind Pflicht.',
          'Trinken. Ein Liter Wasser zwischen Abendessen und Schlafengehen verhindert die trockene-Haut-Optik, die morgens so unauffällig scheint und im Porträtlicht so sichtbar wird.',
          'Kein Alkohol. Eine kleine Menge reicht schon, um die Haut stumpfer wirken zu lassen und die Augen leicht rot zu stechen. Wenn möglich, den Abend vor dem Termin ganz aussparen.',
          'Haare schneiden lassen — aber nicht am Termintag. Idealabstand: 3–5 Tage vor dem Fototermin. Frisch geschnittene Haare wirken übertrieben kurz und zeigen Scherenlinien, die beim Fotografieren auffallen.',
        ],
      },
      { h2: 'Der Morgen des Termins',
        paragraphs: [
          'Kaffee ja, aber moderat. Zwei Tassen sind Maximum — mehr führt zu weißen Augenwinkeln und einem leichten Augenzittern, das bei hoher Blende sichtbar wird.',
          'Kein schweres Frühstück. Ein übervoller Magen verändert die Körperhaltung. Eine Scheibe Toast mit Butter und ein Ei reichen.',
          'Hautpflege sparsam. Eine tagesübliche Feuchtigkeitscreme ja, aber keine glänzenden Sonnenschutzprodukte und keine matten Primer, die Hautfarbe leicht verfälschen.',
          'Rasieren/Schminken bis 20 Minuten vor Abfahrt beenden, damit Rötungen abklingen können.',
        ],
      },
      { h2: 'Kleidung nach Branche',
        paragraphs: [
          'Kanzlei, Consulting, Finanzen: klassisch dunkler Anzug (dunkelblau oder anthrazit), weißes Hemd, dezente Krawatte in Uni-Farbe. Kein Glanzanzug, keine Strickkrawatte. Farben müssen Autorität signalisieren.',
          'Medizin, Verwaltung, Versicherung: Hemd oder Blazer in gedeckten Farben (petrol, beige, dunkelgrau). Offen oder geschlossen. Vermeiden: sehr weiß unter weißer Haut, sehr schwarz unter dunkler Haut.',
          'Tech, Start-up, Medien: entspannter. Polo-Shirt, gerne auch Rolli. Farben: gedeckt, aber warm. Vermeiden: Logos, Hoodies, T-Shirts.',
          'Kreativ, Design, Marketing: hier darf Persönlichkeit mit ins Bild. Schalkragen, farbiges Hemd, interessante Textur. Trotzdem: eher ruhige Farbe, kein Muster.',
          'Pflege, Handwerk, Gastronomie: sauberes Hemd oder Polo in gedeckter Farbe, nicht im Arbeitsgewand. Ziel: Kompetenz plus Zugänglichkeit.',
        ],
        list: [
          'Vermeiden: reine Schwarz- oder Weißflächen (schluckt Details)',
          'Vermeiden: kleinteilige Muster (flimmern im Bild)',
          'Vermeiden: glänzende Stoffe (Highlights stören Ausleuchtung)',
          'Bringen Sie mindestens zwei Alternativen mit',
          'Oberteile sind wichtiger als Hosen (Brustbild)',
          'Ohne Schmuck fotografiert sich besser als mit auffälligem',
        ],
      },
      { h2: 'Vor der Kamera — die drei Techniken',
        paragraphs: [
          'Haltung: leicht nach vorne geneigt, statt gerade oder zurückgelehnt. Das öffnet den Hals und verhindert das „Doppelkinn-Phänomen" der Frontalaufnahme.',
          'Kopf leicht schief. Der gerade Kopf wirkt statisch, der leicht geneigte (5–10 Grad) wirkt aufmerksam. Fotograf:in hilft dabei — Sie müssen es nicht von allein treffen.',
          'Lächeln: aktiv, aber sanft. Das „Full-Smile"-Lachfoto wirkt in Bewerbungen fast immer verkrampft. Das Ziel ist ein ruhiges, leicht zugewandtes Gesicht mit minimal angehobenen Mundwinkeln. Tipp, der überraschend gut funktioniert: Denken Sie vor dem Auslöser an etwas Angenehmes (einen Ort, eine Person), ohne es zu erzählen.',
        ],
      },
      { h2: 'Retusche — was ist okay, was ist zu viel',
        paragraphs: [
          'Okay: Unreinheiten entfernen, Augenringe abschwächen, Hintergrund reinigen, Kragen zurechtzupfen, Farbkorrektur, Lichtbalance.',
          'Grauzone: Zähne aufhellen (subtil ja, aggressiv nein), Falten mildern, Haut glätten (natürlich bleiben!).',
          'Nicht okay: Gesichtszüge verändern, Augenfarbe ändern, Körperform retuschieren, Haare „dicker" retuschieren. Fünf Jahre später im Vorstellungsgespräch sitzt nur die echte Person.',
          'Als Faustregel: wenn die Bewerbungsperson auf dem Bild in Nachbarschaft zur echten Person als „zwei Geschwister" erkannt würde — dann ist das Bild gut. Wenn die beiden wie Doppelgänger wirken — dann ist es zu viel Retusche.',
        ],
      },
    ],
    closing: 'Ein Bewerbungsfoto ist kein Kunstportrait — es ist ein Türöffner. Ziel ist nicht, besonders schön auszusehen, sondern genau so auszusehen, wie Sie sind, nur unter guten Lichtbedingungen. Wenn Sie den Fotograf finden, der das versteht, ist die halbe Arbeit getan.',
  },

  {
    slug: 'fotograf-finden-nrw-anleitung',
    title: 'Fotograf:in finden in NRW — Anleitung für Paare, Familien und Selbständige',
    description: 'Wie findet man in NRW den richtigen Fotografen? Plattformen, Bewertungen, Red Flags, Portfolio-Check, Beratungsgespräch — die komplette Anleitung.',
    publishedDate: '2026-03-15',
    readTime: 10,
    author: 'Lichtraum Studio',
    category: 'Ratgeber',
    keyword: 'Fotograf finden NRW',
    intro: [
      'Nordrhein-Westfalen hat laut Handwerkskammer-Statistik rund 4.800 selbständige Fotograf:innen — vom Pass-Fotostudio bis zur renommierten Hochzeits-Boutique. Wer online sucht, steht vor einer Flut von Ergebnissen und oft austauschbaren Portfolios. Wie trifft man eine gute Entscheidung, ohne zehn Beratungsgespräche zu führen?',
      'Diese Anleitung ist der Filter-Prozess, den wir selbst empfehlen würden, wenn uns jemand fragt, wie man bei einem anderen Fotografen vorgeht. Von der Suche über den Portfolio-Check bis zum entscheidenden Beratungsgespräch.',
    ],
    sections: [
      { h2: 'Schritt 1: Die richtigen Suchbegriffe',
        paragraphs: [
          'Zu allgemein ist „Fotograf NRW" — das liefert über 800.000 Ergebnisse und keine Filterung. Zu spezifisch ist „Editorial-Hochzeitsfotograf mit Reportagestil Düsseldorf unter 2.500 €" — hier gibt es kaum natürliche Suchergebnisse.',
          'Der produktive Mittelweg: Genre plus Stadt. „Hochzeitsfotograf Köln", „Familienfotograf Bonn", „Bewerbungsfotograf Düsseldorf". Damit kommen Sie auf ca. 10–30 lokale Profile, die realistisch erreichbar sind.',
          'Ergänzend: Instagram-Suche mit Hashtags („#hochzeitsfotografnrw", „#fotografkoeln"). Instagram zeigt Stil und Frequenz besser als die meisten Websites. Achten Sie auf Regelmäßigkeit der Posts — wer seit vier Monaten nichts mehr postet, ist eventuell im Ausstieg.',
        ],
      },
      { h2: 'Schritt 2: Portfolio-Check — worauf es wirklich ankommt',
        paragraphs: [
          'Qualität, nicht Quantität. Fünf außergewöhnliche Bilder sagen mehr als 200 durchschnittliche. Fotograf:innen, die ihr Portfolio nicht kuratieren, werden es auch bei Ihrer Hochzeit nicht tun.',
          'Konsistenz im Stil. Wenn ein Portfolio zehn sehr unterschiedliche Bildsprachen zeigt (mal dunkel-moody, mal poppig-hell, mal harte Kontraste, mal Pastell), fehlt die ästhetische Handschrift — und Sie wissen nicht, was Sie bekommen.',
          'Echte Menschen, keine Models. Wenn ein Portfolio ausschließlich aus „shootings with models" besteht, haben Sie keine Referenz dafür, wie der Fotograf mit Ihren echten, nicht-posierten Gästen umgeht. Suchen Sie nach Hochzeiten mit normalen Menschen.',
          'Zeige-mir-eine-komplette-Hochzeit-Test. Fragen Sie, ob man eine komplette Hochzeitsgalerie sehen kann — nicht nur die Highlights. Wer nur die Top-20 zeigt, versteckt potenziell die restlichen 480. Ein guter Fotograf zeigt auf Nachfrage gerne eine Vollgalerie, zumindest passwortgeschützt.',
        ],
      },
      { h2: 'Schritt 3: Bewertungen richtig lesen',
        paragraphs: [
          'Google-Rezensionen sind der Standard. Weniger als 4,5 Sterne bei einer soliden Anzahl (50+) ist ein Warnsignal. Aber: sehr viele perfekte 5-Sterne-Rezensionen mit ähnlichem Wortlaut deuten auf geschenkte oder gekaufte Bewertungen hin.',
          'Lesen Sie die negativen Bewertungen — aber besonders die Antworten des Fotografen. Wie jemand mit Kritik umgeht, verrät mehr über die Zusammenarbeit als 10 positive Stimmen. Sachlich-verständnisvolle Antworten: gutes Zeichen. Defensive oder bissige Antworten: schlechtes Zeichen.',
          'Hochzeitsfotografen haben oft auch Bewertungen auf hochzeitsguide.com, mywed.com oder brautfee.de. Diese Plattformen sind spezifischer und oft ehrlicher als allgemeine Google-Bewertungen.',
        ],
      },
      { h2: 'Schritt 4: Red Flags',
        paragraphs: [
          'Kein Preis auf der Website. Manche hochpreisigen Fotografen machen das bewusst — aber bei Einsteigern signalisiert es oft, dass die Preise verhandelbar/unsicher sind. Bitten Sie explizit um eine Preisliste; Weigerung ist ein Warnsignal.',
          'Kein Vertrag. Professionelle Fotografen arbeiten immer mit Vertrag, der Leistung, Ausfallregelung, Copyright und Anzahlung definiert. Ohne Vertrag haben Sie bei Problemen keine Handhabe.',
          'Kein Backup-Versprechen. Fragen Sie direkt: „Was passiert, wenn Sie krank sind?" Ein guter Fotograf hat ein Netzwerk aus Kolleg:innen mit Stil-Nähe, auf die im Notfall zurückgegriffen werden kann.',
          'Nur ein Kamera-Gehäuse. Bei Hochzeiten arbeiten Profis mit zwei oder drei Gehäusen parallel. Wer erzählt, dass er „nur eine Kamera" nutzt, signalisiert entweder Hobby-Niveau oder Fahrlässigkeit — beim Ausfall ohne Backup ist die Hochzeit verloren.',
          'Keine Anzahlung/Kaution. Seriöse Fotografen sichern Termine mit Anzahlungen (20–30 %). Wer ohne Anzahlung bucht, bucht oft gleichzeitig andere — und verschiebt bei besseren Angeboten.',
        ],
      },
      { h2: 'Schritt 5: Das Beratungsgespräch',
        paragraphs: [
          'Vereinbaren Sie ein 30-Minuten-Gespräch (Telefon, Video oder persönlich) mit Ihren 2–3 Favoriten. Vor der Entscheidung ist das der wichtigste Einzelschritt.',
          'Beobachten Sie: zuhören oder reden die Fotograf:innen? Gute Fotograf:innen fragen. Wer von der ersten Minute an über die eigene Arbeit spricht, signalisiert, dass Sie zum Portfolio passen müssen, nicht umgekehrt.',
          'Fragen, die Sie stellen sollten: Wie geht ihr mit Regenwetter um? Wie lange dauert die Lieferung? Was passiert bei Krankheit? Wie viele Hochzeiten pro Wochenende maximal? (Unter 2 pro Wochenende ist ein gutes Signal für Qualität.)',
          'Chemie. Wenn Sie das Gespräch beenden und denken „den/die mag ich" — das ist der wichtigste Faktor. Sie werden diese Person zehn Stunden um sich haben. Technik kann man lernen, Chemie nicht.',
        ],
      },
    ],
    closing: 'Die Suche nach dem richtigen Fotografen in NRW ist weniger eine Frage von Technik und Preis, als eine Frage von Vertrauen und Stil-Übereinstimmung. Nehmen Sie sich die Zeit für zwei oder drei ernsthafte Gespräche. Die 60 Minuten davor sind die bestinvestierten Minuten der gesamten Hochzeitsplanung.',
  },
]
