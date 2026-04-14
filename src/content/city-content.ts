/**
 * Phase 7 — Stadt-Vollcontent für alle 12 Städte.
 * Pro Stadt ~800-1.000 Wörter unique lokaler Content.
 * Kein Copy-Paste zwischen Städten.
 */

export type CityFAQ = { q: string; a: string }
export type CitySection = { h2: string; paragraphs: string[] }

export type CityContent = {
  slug: string
  longIntro: string[] // 2-3 Absätze unique Einleitung
  sections: CitySection[] // 2-3 H2-Sections mit lokalem Inhalt
  faqs: CityFAQ[] // 3-5 lokale FAQs
  closing: string
}

export const cityContent: Record<string, CityContent> = {
  frechen: {
    slug: 'frechen',
    longIntro: [
      'Frechen ist keine klassische Fotografie-Stadt — und genau das macht den Reiz aus. Zwischen Kölner Stadtrand und Rhein-Erft-Kreis gelegen, verbindet die Stadt Industriekultur, Braunkohle-Landschaft und gewachsene Altstadtstrukturen. Für Paare, die einen markanten, nicht-klischeehaften Bildhintergrund suchen, ist Frechen oft die bessere Wahl als Köln-Zentrum.',
      'Wir fotografieren in Frechen regelmäßig Familien, Paare und Business-Kunden. Dank der 15 Minuten Anfahrt zum Kölner Stadtrand ist auch eine Kombination aus Frechen-Shooting und Köln-Portraits an einem Tag problemlos machbar — eine Variante, die wir besonders für Verlobungsshootings empfehlen.',
    ],
    sections: [
      { h2: 'Shooting-Locations in Frechen',
        paragraphs: [
          'Der Stadtpark Frechen ist eine der ruhigsten Grünflächen im Erftkreis — alte Bäume, ein kleiner Teich, weite Wiesen. Perfekt für Familien mit Kindern, weil die Wege gut befahrbar und die Umgebung kinderfreundlich ist.',
          'Burg Bachem am Rand der Stadt ist ein Geheimtipp: mittelalterliche Ruine mit freiem Blick ins Vorgebirge. Sehr fotogen bei Gegenlicht am späten Nachmittag.',
          'Die Braunkohletagebau-Aussichtspunkte bei Frechen-Habbelrath liefern einen Kontrapunkt — harter, karger Hintergrund, der für Editorial- und Paar-Shootings eine dramatische Alternative zum klassischen Park-Setting bietet.',
        ],
      },
      { h2: 'Warum Frechen für Business-Fotografie funktioniert',
        paragraphs: [
          'Frechen hat eine lebendige Mittelstand-Szene — Druckereien, Handwerk, Agenturen. Wir fotografieren regelmäßig Team-Portraits und LinkedIn-Bilder vor Ort in Büroräumen der Gewerbegebiete, was für die Firmen-Website oft authentischer wirkt als Kölner Studio-Ware.',
          'Für Teams ab 5 Personen kommen wir mit mobilem Studio nach Frechen (im Paket-Aufschlag enthalten). Einzelportraits direkt am Arbeitsplatz wirken heute in vielen Branchen stärker als klassische neutrale Fotografenstudio-Portraits.',
        ],
      },
    ],
    faqs: [
      { q: 'Wie weit ist Frechen vom Lichtraum-Studio in Euskirchen entfernt?',
        a: 'Ca. 45 km / 40 Minuten Fahrzeit über die A61 und A4. Anfahrt ist im Paketpreis enthalten.' },
      { q: 'Gibt es in Frechen Genehmigungspflicht für Foto-Shootings?',
        a: 'Im Stadtpark und an Burg Bachem nicht. Für kommerzielle Shootings in Innenstadtbereichen kann eine Anmeldung beim Ordnungsamt nötig sein — wir kümmern uns im Zweifelsfall vorab.' },
      { q: 'Kombinieren Sie Frechen mit Köln-Shootings?',
        a: 'Ja, gerne. Frechen-Park morgens, Köln-Rheinauhafen abends — ideal für Verlobungsshootings, bei denen wir unterschiedliche Bildsprachen mischen wollen.' },
      { q: 'Fotografieren Sie auch am Braunkohletagebau?',
        a: 'Ja, an den öffentlich zugänglichen Aussichtspunkten (Habbelrath, Grube Cornelia). Achtung: nur bei sicheren Witterungsverhältnissen, da die Ränder rutschig sein können.' },
    ],
    closing: 'Wenn Sie in Frechen oder im nordwestlichen Rhein-Erft-Kreis einen Fotografen suchen, der auch kurzfristige Termine und ungewöhnliche Locations realisieren kann — schreiben Sie uns. Für Frechen-Shootings ab Studio-Standort Euskirchen ist die Anfahrt für uns Routine.',
  },

  weilerswist: {
    slug: 'weilerswist',
    longIntro: [
      'Weilerswist liegt nur zehn Minuten von unserem Studio entfernt — die Gemeinde zwischen Euskirchen und Köln ist fotografisch ein unterschätztes Terrain. Weite Felder, die Erft, historische Ortsteile und die ikonische Burg Metternich bieten eine Bildsprache, die in der Kölner Fotografie-Blase fast unbekannt ist.',
      'Als lokaler Fotograf für Weilerswist bieten wir etwas, was die meisten Kölner Fotografen nicht können: echte Ortskenntnis. Wir wissen, wo die Erft im Juli am schönsten Licht hat, wann die Metternicher Gartenmauer im Winter ihren besten Hintergrund gibt und welcher Wiesenweg für Pferdeshootings frei ist.',
    ],
    sections: [
      { h2: 'Die drei Herzstücke für Shootings in Weilerswist',
        paragraphs: [
          'Burg Metternich im Ortskern Müggenhausen — eine mittelalterliche Wasserburg mit restaurierten Innenhöfen, Kapelle und altem Torbogen. Wir fotografieren hier regelmäßig Hochzeiten und Verlobungen. Der Burgherr ist kooperativ, für private Shootings braucht es eine kurze schriftliche Anmeldung.',
          'Die Erft-Auen zwischen Weilerswist und Bodenheim bieten auf 3 km weites, ungestörtes Naturshooting-Gelände. Besonders im Frühherbst, wenn das Schilf gelb steht, entstehen hier Bilder, die mit Köln-Parks nichts gemeinsam haben.',
          'Schloss Loersfeld an der Gemeindegrenze zu Kerpen ist klein, privat geführt, und bietet eine stille Park-Kulisse für Mikro-Hochzeiten und Familienshootings.',
        ],
      },
      { h2: 'Familien- und Paarshootings im Weilerswister Umland',
        paragraphs: [
          'Familien, die in Weilerswist oder den Ortsteilen (Metternich, Müggenhausen, Lommersum) wohnen, buchen bei uns meist ein 90-Minuten-Outdoor-Shooting. Der Vorteil: keine Anfahrt für Sie, wir kommen direkt zu einer Wunschlocation oder zu Ihnen nach Hause.',
          'Auch für Paar-Shootings bieten wir rund um Weilerswist etwas Besonderes: das Erft-Niedermoor bei Sonnenuntergang. Nur wenige lokale Fotograf:innen fotografieren dort — die meisten halten sich in Köln oder Bonn auf.',
        ],
      },
    ],
    faqs: [
      { q: 'Ist ein Shooting in Weilerswist günstiger als in Köln?',
        a: 'Der Shooting-Preis bleibt gleich, aber die Anfahrt für uns ist minimal (10 Min Fahrzeit). Das ermöglicht spontane Wetter-Verschiebungen und flexible Termine, die in Köln nicht so einfach wären.' },
      { q: 'Muss man Burg Metternich vorab anmelden?',
        a: 'Ja, für Foto-Shootings mit kommerziellem Charakter oder größerer Gruppe. Für private Portraits reicht meist eine mündliche Absprache vor Ort — wir kümmern uns um die Details.' },
      { q: 'Gibt es Parkmöglichkeiten an den Erft-Auen?',
        a: 'Ja, ein kleiner Parkplatz an der Bundesstraße 56 am Eingang zum Naturschutzgebiet. Von dort 5 Min Fußweg ins Shooting-Gelände.' },
      { q: 'Fotografieren Sie auch im Winter in den Auen?',
        a: 'Sehr gerne. Nebel über der Erft, Raureif auf dem Schilf, weiche graue Wintersonne — die Ergebnisse sind atmosphärisch und unverwechselbar.' },
    ],
    closing: 'Weilerswist ist unser nächstgelegenes Shooting-Terrain — und oft unser liebstes. Wenn Sie lokal wohnen und einen Fotograf für Familie, Paar oder Hochzeit suchen, liegen wir zehn Minuten entfernt. Kurze Anfahrt, viel Zeit für das Shooting selbst.',
  },

  leverkusen: {
    slug: 'leverkusen',
    longIntro: [
      'Leverkusen wird unterschätzt — fotografisch wie atmosphärisch. Die Chemie-Stadt hat mit Schloss Morsbroich eines der schönsten Rokoko-Schlösser Nordrhein-Westfalens, mit dem Neulandpark eine ruhige Rheinuferlandschaft und mit dem Japanischen Garten eine der besten Hochzeits-Locations der Region.',
      'Für Paare aus Leverkusen und dem nördlichen Kölner Umland bieten wir Hochzeits-, Portrait- und Businessfotografie mit einer Bildsprache, die zur Stadt passt: modern, weit, zeitlos. Anfahrt ca. 55 km — 45 Minuten über die A4.',
    ],
    sections: [
      { h2: 'Schloss Morsbroich — Leverkusens Kronjuwel',
        paragraphs: [
          'Das Rokoko-Schloss aus dem 18. Jahrhundert ist heute Museum für zeitgenössische Kunst — und eine unserer Lieblings-Hochzeitskulissen. Der geschwungene Park, die Fassade mit rosa Putz und die Innenräume liefern drei völlig verschiedene Bildsprachen innerhalb von 20 Minuten.',
          'Besonderheit: die Kombination aus historischer Architektur und zeitgenössischer Kunst innerhalb der Museumsräume erlaubt Fotos, die sonst fast nicht möglich sind — Paare vor Modern-Art-Installationen, in barocken Räumen, im Skulpturenpark.',
        ],
      },
      { h2: 'Neulandpark und Japanischer Garten',
        paragraphs: [
          'Der Neulandpark am Rhein wurde ursprünglich als Landesgartenschau angelegt und ist heute eine der größten Parkanlagen der Region. Für Familien und Paare bieten wir hier ein 90-Minuten-Shooting mit drei verschiedenen Kulissen: Weiden, Rheinpromenade, Skulpturenweg.',
          'Der Japanische Garten im Park Carl-Duisberg (ehemals Bayer-Gelände) ist eine kleine Sensation: authentische Pavillons, Brücken, Teich mit Koi-Karpfen, Kirschblüten im April. Für intime Hochzeiten und Verlobungen fast unschlagbar.',
        ],
      },
    ],
    faqs: [
      { q: 'Wann blühen die Kirschblüten im Japanischen Garten?',
        a: 'Mitte April bis Anfang Mai, genaues Datum variiert je nach Wetter. Wir können auf Wunsch eine Shooting-Planung mit Blüh-Monitoring anbieten — wir halten die ersten Wochen April flexibel.' },
      { q: 'Benötigt Schloss Morsbroich eine Genehmigung?',
        a: 'Ja, für Fotografie im Schlosspark und Innenräumen. Eine schriftliche Anmeldung 2 Wochen vorher ist Standard. Wir kümmern uns bei Hochzeits-Buchungen um diese Formalität.' },
      { q: 'Wie ist die Parkplatzsituation in Leverkusen für Shootings?',
        a: 'Schloss Morsbroich hat einen eigenen Besucherparkplatz. Neulandpark hat mehrere Eingänge mit kostenlosen Parkmöglichkeiten. Der Japanische Garten ist kostenlos über das Bayer-Gelände zugänglich.' },
      { q: 'Fotografieren Sie auch in Opladen (Leverkusener Altstadtkern)?',
        a: 'Ja, gerne. Opladens Altstadt hat gute alte Fachwerkfassaden und einen lebendigen Marktplatz, der sich besonders für Paar-Shootings mit urbanem Charakter eignet.' },
    ],
    closing: 'Leverkusen überrascht die meisten Paare — inklusive uns, beim ersten Shooting. Wenn Sie in oder bei Leverkusen fotografieren lassen möchten, schreiben Sie uns. Wir bringen Ortskenntnis mit, die über die üblichen Google-Location-Listen hinausgeht.',
  },

  siegburg: {
    slug: 'siegburg',
    longIntro: [
      'Siegburg liegt zwischen Köln und Bonn am Rand des Bergischen Landes — geprägt vom Michaelsberg, der zwischen Stadt und Sieg 80 Meter steil aufragt. Diese Topographie macht Siegburg fotografisch zu einer der stimmungsvollsten Städte der Region: Weitblick, Kloster, Altstadt, Flussufer, alles innerhalb von 500 Metern.',
      'Wir fotografieren in Siegburg regelmäßig Hochzeiten auf dem Michaelsberg und Familienshootings an der Sieg. Anfahrt vom Studio Euskirchen 60 km / 50 Minuten.',
    ],
    sections: [
      { h2: 'Der Michaelsberg — Siegburgs Leuchtturm',
        paragraphs: [
          'Das ehemalige Benediktinerkloster thront über der Stadt und bietet 360-Grad-Panorama bis nach Köln. Für Hochzeiten ist es eine der spektakulärsten Locations der Region — Zeremonie in der Abteikirche, Gruppenfotos auf der Klosterterrasse, Sonnenuntergang über dem Siebengebirge.',
          'Logistische Hinweise: Die Auffahrt ist steil, die Parkplatzsituation begrenzt. Bei Hochzeits-Planung empfehlen wir, Shuttle-Transfers von der Stadt einzuplanen. Wir kommen im Vorfeld gerne zur Locationbesichtigung.',
        ],
      },
      { h2: 'Siegburger Altstadt und Sieg-Ufer',
        paragraphs: [
          'Die kleine Altstadt um den Markt liefert Fachwerk-Fassaden, Kopfsteinpflaster und drei gute Cafés, die bei Regen als Rückzugsort dienen. Für Paarshootings mit „Altstadt-Feeling" ohne Kölner Fußgänger-Gedränge eine Top-Wahl.',
          'Die Sieg selbst, besonders im Bereich Aggerbrücke, eignet sich für Familien- und Paarshootings zur goldenen Stunde. Im Mai und Juni blühen am Flussufer Akelei und Wiesenklee — ein Naturstudio in sich.',
        ],
      },
    ],
    faqs: [
      { q: 'Ist eine Hochzeit auf dem Michaelsberg logistisch machbar?',
        a: 'Ja, wird regelmäßig gefeiert. Die Abtei selbst bietet Räume für kleinere Empfänge (bis 80 Gäste). Für größere Hochzeiten ist eine Buslösung für Gäste empfehlenswert.' },
      { q: 'Fotografieren Sie auch bei Regen auf dem Michaelsberg?',
        a: 'Ja. Die überdachte Klostereingangshalle und die Innenräume der Abtei liefern auch bei schlechtem Wetter gute Bildqualität. Die Abtei ist darin erfahren, Fotografen bei Regen pragmatisch zu unterstützen.' },
      { q: 'Wie komme ich von Köln nach Siegburg?',
        a: 'S-Bahn S12 oder S19 in ca. 25 Minuten. Auto über die A3 Ausfahrt Siegburg. Parkplätze am Bahnhof und in der Altstadt.' },
      { q: 'Welche Jahreszeit ist für Siegburg fotografisch ideal?',
        a: 'Mai bis Oktober für Outdoor, wegen der Weitblick-Qualität des Michaelsbergs. Dezember bis Februar sehr atmosphärisch, wenn Reifnebel über der Sieg liegt.' },
    ],
    closing: 'Siegburg ist für uns ein Wohlfühl-Terrain. Wenn Sie eine Hochzeit am Michaelsberg planen oder einfach ein Shooting mit Panorama-Qualität möchten, melden Sie sich — wir zeigen Ihnen gerne die Locations bei einer Vorab-Begehung.',
  },

  'bergisch-gladbach': {
    slug: 'bergisch-gladbach',
    longIntro: [
      'Bergisch Gladbach ist eine Stadt der Kontraste: städtisches Zentrum und weitläufige Grünflächen, Schloss Bensberg als Luxusadresse und gleichzeitig das ruhige Strunder-Bach-Tal. Für Fotografie ist die Stadt vielfältiger, als ihr Ruf als „Pendlerstadt" vermuten lässt.',
      'Wir fotografieren in Bergisch Gladbach vor allem Hochzeiten (Schloss Bensberg ist ein Dauerbrenner), Familienshootings in der Altstadt und Business-Portraits vor Ort in Firmen. Anfahrt 65 km / 55 Minuten vom Studio.',
    ],
    sections: [
      { h2: 'Schloss Bensberg — Luxus mit Weitblick',
        paragraphs: [
          'Das 5-Sterne-Hotel auf dem Bergischen Höhenzug bietet eines der spektakulärsten Hochzeits-Panoramen der Region: Blick bis zum Kölner Dom, über die gesamte Kölner Tiefebene bis zum Siebengebirge. Die Terrasse zum Sonnenuntergang ist ein eigenes Highlight.',
          'Innenräume sind kulinarisch und gestalterisch auf Premium-Niveau — Marmortreppe, Kristalllüster, barocke Räume. Wir empfehlen Schloss Bensberg besonders für Hochzeiten mit internationalem Gästekreis oder gehobenem Stil-Anspruch.',
        ],
      },
      { h2: 'Altstadt und Strunderbachtal',
        paragraphs: [
          'Die Altstadt um die Laurentiuskirche hat einen kleinen Marktplatz mit Fachwerkhäusern und Cafés — gut für Paar-Shootings zwischen zwei anderen Terminen eines Hochzeitstages.',
          'Das Strunderbachtal, nördlich der Stadt, ist ein überraschend wildes Tal mit Bachverlauf, Steinbrüchen und Wiesen. Für Familien und Paare mit Naturvorliebe ein Kontrapunkt zum mondänen Schloss Bensberg.',
        ],
      },
    ],
    faqs: [
      { q: 'Wie teuer ist eine Hochzeit auf Schloss Bensberg?',
        a: 'Die Gesamt-Hochzeit liegt meist zwischen 250 und 500 € pro Person (inkl. Räume, Menü, Getränke). Für die Fotografie-Buchung hat das keine Auswirkung — wir fotografieren unabhängig von der Budget-Klasse der Location.' },
      { q: 'Fotografieren Sie auch im Strunderbachtal?',
        a: 'Ja, gerne. Für Familienshootings ist das Tal ideal — ruhig, kindersicher, mit dem Bach als natürliches Spielelement.' },
      { q: 'Gibt es Genehmigungspflicht auf Schloss Bensberg?',
        a: 'Für Hochzeitsgäste ist das kein Problem, wir gelten als Gast. Für externe Editorial-Shootings ohne Event-Buchung muss die Hotelleitung angefragt werden.' },
      { q: 'Wie lange dauert die Anfahrt von Köln nach Bergisch Gladbach?',
        a: '20 Minuten über die A4 und B506. Von Köln-Hauptbahnhof 25 Minuten mit S-Bahn S11.' },
    ],
    closing: 'Bergisch Gladbach ist eine unserer Lieblings-Premium-Locations. Wenn Sie Schloss Bensberg oder eine andere Location in der Stadt buchen möchten — schreiben Sie uns, wir kommen gerne zur Besichtigung vor.',
  },

  erftstadt: {
    slug: 'erftstadt',
    longIntro: [
      'Erftstadt ist im Rhein-Erft-Kreis unser meistgebuchtes Shooting-Terrain nach Euskirchen. Die Stadt kombiniert das barocke Schloss Gracht, den Herrig-Park und zahlreiche Dorfkerne mit erhaltener Fachwerkarchitektur — eine Dichte an fotogenen Orten pro Quadratkilometer, die man selten findet.',
      'Anfahrt vom Studio 30 km / 30 Minuten, oft 25 Minuten mit freier Strecke. Wir fotografieren in Erftstadt regelmäßig Hochzeiten, Portraits und Babybauch-Shootings.',
    ],
    sections: [
      { h2: 'Schloss Gracht — Wasserschloss der Extraklasse',
        paragraphs: [
          'Schloss Gracht ist ein Wasserschloss aus dem 17. Jahrhundert, umgeben von einem privaten Park mit Kastanienallee, Teichen und Steinbrücken. Für Hochzeiten und Editorial-Shootings ist es eines der schönsten Objekte der Region.',
          'Die Innenräume werden für Events vermietet, die Außenanlagen sind teilweise öffentlich. Für professionelle Shootings empfehlen wir eine Absprache mit der Verwaltung (kostenpflichtig, aber moderate Gebühren).',
          'Fotografisch besonders: die Spiegelung der Fassade im Wassergraben zur blauen Stunde — eine Bildqualität, die Sie an wenigen anderen Orten in NRW bekommen.',
        ],
      },
      { h2: 'Herrig-Park und Lommersum',
        paragraphs: [
          'Der Herrig-Park bei Erftstadt-Herrig ist ein unterschätzter Park mit alten Bäumen und einer romantischen Teichanlage. Gut für Familienshootings und Portraits.',
          'Lommersum, der westliche Ortsteil, hat ein nahezu vollständig erhaltenes Dorfensemble aus dem 18. und 19. Jahrhundert. Fachwerk, Dorfkapelle, Streuobstwiesen. Für Paare, die einen „Dorf-Idyll"-Look suchen, oft stimmiger als die typischen Großstadt-Alternativen.',
        ],
      },
    ],
    faqs: [
      { q: 'Kann ich Schloss Gracht als Hochzeitslocation buchen?',
        a: 'Ja, über die Schloss-Verwaltung. Kapazität bis 120 Gäste. Wir arbeiten dort regelmäßig und kennen die Räume. Frühzeitig buchen — 12-18 Monate Vorlauf sind normal.' },
      { q: 'Sind Shootings im Schlosspark kostenpflichtig?',
        a: 'Für private Portraits ja, moderate Gebühr. Für Hochzeitsgäste inklusive. Details klären wir vor dem Shooting direkt mit der Verwaltung.' },
      { q: 'Gibt es in Erftstadt auch Studio-Alternativen?',
        a: 'Vor Ort nicht. Wir nehmen Sie bei Bedarf mit ins Lichtraum-Studio in Euskirchen (20 Min entfernt).' },
      { q: 'Wie ist die Parksituation bei Schloss Gracht?',
        a: 'Ein Besucherparkplatz direkt am Eingang. Für Hochzeitsgesellschaften gibt es eigene Parkregelungen — wird mit der Verwaltung abgestimmt.' },
    ],
    closing: 'Erftstadt zählt zu unseren Favoriten für Hochzeits-Fotografie im Rhein-Erft-Kreis. Wenn Sie Schloss Gracht oder einen Ortsteil wie Lommersum ins Auge gefasst haben — schreiben Sie uns, wir liefern eine ehrliche Einschätzung, was vor Ort funktioniert.',
  },

  bergheim: {
    slug: 'bergheim',
    longIntro: [
      'Bergheim als Kreisstadt des Rhein-Erft-Kreises ist fotografisch weniger bekannt als seine Nachbarstädte — zu Unrecht. Das Paffendorfer Schloss, die historische Aachener Straße und die umliegende Agrarlandschaft bieten eine Bildsprache, die für Paare mit rustikalem oder eher klassischem Geschmack ideal ist.',
      'Anfahrt 40 km / 35 Minuten. Wir fotografieren in Bergheim regelmäßig für Familien aus den Ortsteilen Quadrath, Kenten und Paffendorf.',
    ],
    sections: [
      { h2: 'Paffendorfer Schloss — intime Hochzeitskulisse',
        paragraphs: [
          'Das kleinere Barockschloss am Ortsrand ist eine der stillen, aber stimmungsvollsten Hochzeitslocations im Rhein-Erft-Kreis. Bis 60 Gäste, mit eigener Schlosskapelle und einem charmant verwilderten Park.',
          'Fotografisch perfekt für Paare, die den „Großen Schloss-Auftritt" vermeiden möchten und stattdessen eine intime, fast familiäre Atmosphäre suchen. Der Park hat eine Lichtstimmung, die uns an niederländische Malerei des 17. Jahrhunderts erinnert.',
        ],
      },
      { h2: 'Bergheimer Altstadt und Umland',
        paragraphs: [
          'Die Aachener Straße in der Altstadt hat einige restaurierte Bürgerhäuser und einen kleinen Marktplatz, die für Brautpaare auf dem Weg von der Kirche zum Restaurant als Foto-Zwischenstopp dienen können.',
          'Das Umland zwischen Bergheim und Elsdorf bietet weite Agrarflächen — nicht klassisch schön, aber für Paare mit Affinität zu karger, reduzierter Bildsprache interessant. Gelbe Rapsfelder im Mai, Maisfelder im Oktober.',
        ],
      },
    ],
    faqs: [
      { q: 'Wie bucht man das Paffendorfer Schloss?',
        a: 'Über die Schloss-Verwaltung. Jahresbuchung meist schon im Januar der Hochsaison voll. Für Mikro-Hochzeiten (unter 40 Gäste) sind oft auch Last-Minute-Termine möglich.' },
      { q: 'Gibt es in Bergheim einen Standesamt-Saal für freie Trauungen?',
        a: 'Ja, das Bergheimer Standesamt im Rathaus bietet attraktive Räume. Alternativ gibt es freie Traureden im Schlosspark Paffendorf.' },
      { q: 'Fahren Sie auch nach Quadrath und Ichendorf?',
        a: 'Ja, kostenlose Anfahrt im gesamten Bergheimer Stadtgebiet.' },
      { q: 'Bieten sich die Rapsfelder für Paarshootings an?',
        a: 'Ja, je nach Wetter und Sonnenstand. Wir schauen nach fotogenen Flächen vor dem Shooting, weil Raps schnell wechselt (Blüte dauert 2-3 Wochen im Mai).' },
    ],
    closing: 'Bergheim ist unser Geheimtipp für Paare, die das „Schloss-Hochzeit-Feeling" ohne den Augustusburg-Trubel wollen. Wenn Sie das Paffendorfer Schloss erwägen — wir waren mehrfach dort und geben gerne einen Erfahrungsbericht.',
  },

  bonn: {
    slug: 'bonn',
    longIntro: [
      'Bonn ist mehr als die ehemalige Hauptstadt — fotografisch ist die Stadt einer der reichsten Schauplätze in NRW. Das Rheinufer mit Blick auf das Siebengebirge, das Schloss Poppelsdorf mit seiner Kastanienallee, das Beethoven-Haus und die Kirschblütenallee in der Altstadt — all das innerhalb von 20 Minuten erreichbar.',
      'Bonn ist für uns der zweitwichtigste Markt nach Köln. Anfahrt 45 km / 40 Minuten. Wir fotografieren hier vor allem Hochzeiten am Rhein und Business-Portraits für die internationale Diplomaten- und UN-Klientel.',
    ],
    sections: [
      { h2: 'Kirschblütenallee und Poppelsdorf — saisonale Highlights',
        paragraphs: [
          'Die Kirschblütenallee in der Bonner Altstadt ist ein echtes japanisches Phänomen: im April blühen die Straßen rosa-weiß, und die Stadt füllt sich mit Fotograf:innen aus ganz NRW. Wir empfehlen, 14 Tage vor der Hauptblüte zu buchen und wetterflexibel zu bleiben — die Blüte dauert oft nur 10 Tage.',
          'Schloss Poppelsdorf mit seiner 600 Meter langen Kastanienallee ist ganzjährig fotogen. Im Mai bei Kastanienblüte, im Oktober bei Laubfärbung, im Winter mit geometrischer Baum-Architektur.',
        ],
      },
      { h2: 'Rheinufer und historische Altstadt',
        paragraphs: [
          'Das Bonner Rheinufer zwischen Rheinbrücke und Beethoven-Denkmal ist für Paarshootings eine der stärksten Kulissen der Region. Blick auf das Siebengebirge, Flusssilhouette, historische Dampfer.',
          'Die Altstadt rund um das Beethoven-Haus bietet kleinteilige, atmosphärische Gassen — ideal für intime Portraits und Editorial-Bilder.',
        ],
      },
      { h2: 'Business-Fotografie in Bonn — der internationale Markt',
        paragraphs: [
          'Bonn ist Standort vieler UN-Institutionen, internationaler NGOs und des DHL-Headquarters. Wir fotografieren regelmäßig Corporate-Portraits und Event-Dokumentationen für multikulturelle Teams. Auf Wunsch mit englischer oder französischer Briefing-Sprache.',
        ],
      },
    ],
    faqs: [
      { q: 'Wann blüht die Kirschblütenallee?',
        a: 'Meist zwischen 10. und 25. April. Genauer Termin abhängig von Winterwetter. Wir monitorieren die Blüte in den zwei Wochen vor dem Shooting und halten Paare auf dem Laufenden.' },
      { q: 'Ist eine Genehmigung am Bonner Rheinufer nötig?',
        a: 'Für private Portraits nein. Für kommerzielle Shootings mit Gruppe oder Equipment braucht es eine Genehmigung der Stadt Bonn (einfach, meist 1-Tages-Bearbeitung).' },
      { q: 'Fotografieren Sie auch in Bad Godesberg oder Beuel?',
        a: 'Ja. Bad Godesberg hat mit der Godesburg und dem Rheinuferweg eigene Qualitäten, Beuel bietet die Beueler Werft und kleine Altstadtviertel.' },
      { q: 'Wie komme ich von Köln nach Bonn?',
        a: '20 Minuten mit S-Bahn S19 (direkt) oder ICE. Mit Auto 30 Minuten über die A555. Rheinufer-Shootings eignen sich gut für Köln-Bonn-Kombi-Pakete.' },
      { q: 'Gibt es Parkplätze in der Bonner Altstadt?',
        a: 'Eher begrenzt. Wir empfehlen das Parkhaus Marktplatz oder die Tiefgarage Beethovenhalle. Alternativ mit der Bahn anreisen.' },
    ],
    closing: 'Bonn ist nach Köln unser wichtigster Einsatzort. Für Paare aus Bonn, Beuel oder Bad Godesberg und für Unternehmen mit internationalem Umfeld sind wir mit kurzen Wegen, guter Ortskenntnis und flexiblem Timing eine starke Alternative zu den etablierten Bonn-Fotografen.',
  },

  kerpen: {
    slug: 'kerpen',
    longIntro: [
      'Kerpen zwischen Köln und Düren hat trotz seiner strukturellen Industrie- und Gewerbeprägung einige der unerwartetsten Shooting-Locations der Region: das Schloss Türnich mit seinem romantisch verwilderten Park, das Marienfeld als Festival-Gelände mit Industrie-Atmosphäre und die Erft-Auen zwischen Horrem und Sindorf.',
      'Anfahrt 35 km / 30 Minuten. Wir fotografieren in Kerpen Familien, Paare und gelegentlich Hochzeiten auf Schloss Türnich.',
    ],
    sections: [
      { h2: 'Schloss Türnich — verwunschener Park',
        paragraphs: [
          'Das klassizistische Schloss aus dem 19. Jahrhundert steht in einem 28 Hektar großen Landschaftspark, der teilweise seit Jahrzehnten wild wächst. Für Paare und Familien, die einen „Wildgarten"-Look suchen, ist das eine der besten Kulissen in NRW.',
          'Die Parkverwaltung ist kooperativ, erlaubt professionelle Shootings gegen moderate Gebühr. Das Schloss selbst ist teilweise zu besichtigen — Innenaufnahmen sind auf Absprache möglich.',
        ],
      },
      { h2: 'Marienfeld und die Erft-Auen',
        paragraphs: [
          'Marienfeld, bekannt als Weltjugendtags-Gelände, ist eine weitläufige Fläche zwischen Kerpen und Frechen. Kombinationsfähig mit industrieller Umgebungskulisse. Für editorial-kreative Shootings ein ungewöhnlicher Ort.',
          'Die Erft-Auen zwischen Sindorf und Horrem sind zugänglich über Wanderwege und bieten stille Natur-Settings ohne Publikumsverkehr.',
        ],
      },
    ],
    faqs: [
      { q: 'Kann ich auf Schloss Türnich heiraten?',
        a: 'Ja, die Parkanlage wird für Trauungen vermietet. Das Schloss selbst dient nur als Kulisse — das Brautpaar braucht einen externen Caterer.' },
      { q: 'Gibt es in Kerpen einen Fotostudio-Standort?',
        a: 'Vor Ort nicht von uns. Wir kommen zu Outdoor-Shootings gerne ins Kerpener Umland.' },
      { q: 'Wie ist die Anfahrt zu Schloss Türnich?',
        a: 'Über die A4 Abfahrt Kerpen, dann 5 Minuten durch den Kerpener Wald. Parkplätze direkt am Park.' },
      { q: 'Fotografieren Sie auch in Horrem und Sindorf?',
        a: 'Ja, gerne. Die Erft-Auen und das Umfeld sind für ruhige Naturshootings ideal.' },
    ],
    closing: 'Kerpen ist fotografisch ein Geheimtipp für Paare, die einen „romantisch-verwildert"-Look suchen. Schloss Türnich ist einzigartig im Rhein-Erft-Kreis. Schreiben Sie uns für eine Vorab-Einschätzung Ihres Shootings.',
  },

  huerth: {
    slug: 'huerth',
    longIntro: [
      'Hürth ist durch Medien-Studios und Film-Produktionen bekannt (Phantasialand ist nebenan, WDR-Studios sind hier). Fotografisch ist die Stadt weniger offensichtlich — aber Ville-Park und Knapsack liefern zwei komplett verschiedene Bildsprachen innerhalb von 3 km.',
      'Anfahrt 40 km / 35 Minuten. Wir fotografieren in Hürth gerne Business-Portraits und gelegentlich kreative Paarshootings an der Industriekulisse Knapsack.',
    ],
    sections: [
      { h2: 'Ville-Park — Studio-Park-Balance',
        paragraphs: [
          'Der Ville-Park im Norden von Hürth ist ein weitläufiger Landschaftspark mit Bächen und altem Baumbestand. Ruhiger als die Kölner Parks, fotografisch aber mindestens gleichwertig. Gut für Familien- und Paarshootings.',
        ],
      },
      { h2: 'Knapsack und Hermülheim — Industrie als Kulisse',
        paragraphs: [
          'Die Industrieanlage Knapsack am Südrand der Stadt liefert eine Bildsprache, die in der Familienfotografie selten zu sehen ist: hohe Schornsteine, Leitungsbänder, Beton-Architektur. Für mutige Paare ein dramatischer Hintergrund, für Hochzeiten meist nicht passend.',
          'Hermülheim hat eine kleine Altstadt mit Fachwerkelementen und einem sympathischen Marktplatz — als Kontrapunkt zum industriellen Knapsack interessant.',
        ],
      },
    ],
    faqs: [
      { q: 'Darf ich an der Industrieanlage Knapsack fotografieren?',
        a: 'An öffentlichen Zugängen und vom Rand aus ja. Das Werksgelände selbst ist Sperrgebiet. Wir kennen die zugänglichen Foto-Punkte.' },
      { q: 'Gibt es in Hürth ein Fotostudio?',
        a: 'Von uns nicht, aber einige kleinere Anbieter. Für Business-Shootings kommen wir mit mobilem Studio direkt ins Hürther Büro.' },
      { q: 'Kann ich Ville-Park für Hochzeiten nutzen?',
        a: 'Der Park selbst ist öffentlich und kostenlos, aber ohne Trauungs-Infrastruktur. Für eine komplette Hochzeit empfehlen wir eine andere Kerneinrichtung, den Park als Shooting-Location.' },
      { q: 'Ist Phantasialand-Shooting möglich?',
        a: 'Nein, das Park-Gelände ist Sperrzone für professionelle Shootings.' },
    ],
    closing: 'Hürth ist unser Tipp für Paare, die ein ungewöhnliches Shooting-Szenario mit Industriekulisse wollen — oder für Hürther Firmen, die Corporate-Portraits am eigenen Standort brauchen. Melden Sie sich einfach.',
  },

  bruehl: {
    slug: 'bruehl',
    longIntro: [
      'Brühl ist die Stadt des UNESCO-Welterbes Schloss Augustusburg — und damit fotografisch eine der prestigeträchtigsten Kulissen Deutschlands. Barocke Architektur, englischer Park, Schloss Falkenlust als Jagdschloss-Neben-Location. Für Hochzeiten internationaler Paare eine der Top-3-Adressen der Region.',
      'Anfahrt 30 km / 25 Minuten. Wir fotografieren in Brühl überwiegend Hochzeiten auf Schloss Augustusburg und gelegentlich Paarshootings im Schlosspark.',
    ],
    sections: [
      { h2: 'Schloss Augustusburg — UNESCO-Welterbe',
        paragraphs: [
          'Das barocke Residenzschloss aus dem 18. Jahrhundert gehört zum UNESCO-Welterbe seit 1984. Für Hochzeiten wird das Schloss in begrenztem Umfang vermietet — hauptsächlich für Empfänge in der Orangerie und in einzelnen Sälen.',
          'Fotografisch einzigartig: die geschwungene Balkontreppe, der Schlosshof, der Marmorsaal. Für Brautpaar-Portraits sind besonders die frühen Morgenstunden vor Öffnungszeit magisch — die Sonne steht auf der Schlossfassade, die Besucher sind noch nicht da.',
        ],
      },
      { h2: 'Schlosspark und Schloss Falkenlust',
        paragraphs: [
          'Der englische Landschaftspark mit 300.000 m² ist öffentlich zugänglich und bietet unzählige Fotomotive. Das Jagdschloss Falkenlust, 500 Meter entfernt, ist eine kleinere, intimere Alternative mit eigenem Charme.',
          'Für Paarshootings ohne Hochzeitsbuchung reicht oft ein 90-Minuten-Termin in Park und Falkenlust-Umfeld — Kosten überschaubar, Bildqualität erstklassig.',
        ],
      },
    ],
    faqs: [
      { q: 'Wie teuer ist eine Hochzeit auf Schloss Augustusburg?',
        a: 'Die Saalmiete beginnt bei ca. 3.500 €, mit Premium-Option bis 8.000 €. Dazu Catering, Blumen, Musik — eine Schloss-Augustusburg-Hochzeit landet selten unter 30.000 € Gesamtbudget.' },
      { q: 'Kann man auch ohne Hochzeitsbuchung im Park fotografieren?',
        a: 'Ja, der Park ist öffentlich. Für professionelle Shootings empfehlen wir Wochentage und frühe Stunden, um Besucher-Strom zu umgehen. Keine offizielle Genehmigung nötig für Private-Portraits.' },
      { q: 'Wie sind die Parkplätze in Brühl?',
        a: 'Schloss-Parkplatz direkt am Eingang (kostenpflichtig). In der Innenstadt Parkhaus Belvedere. Bei Hochzeiten organisieren wir oft ein Shuttle für größere Gruppen.' },
      { q: 'Wann sind die besten Foto-Zeiten im Schlosspark?',
        a: 'Frühmorgens (8-10 Uhr) und zur goldenen Stunde (17-19 Uhr im Sommer, 15-17 Uhr im Winter). Die Mittagszeit hat das härteste Licht und die meisten Besucher.' },
    ],
    closing: 'Brühl ist unsere Premium-Location. Wenn Sie Schloss Augustusburg für Ihre Hochzeit oder ein Shooting erwägen — schreiben Sie uns. Wir haben Routine im Umgang mit den Schloss-Auflagen und den besten Bildwinkeln.',
  },

  pulheim: {
    slug: 'pulheim',
    longIntro: [
      'Pulheim nördlich von Köln ist fotografisch ein Insider-Tipp. Die Abtei Brauweiler — ein ehemaliges Benediktinerkloster aus dem 11. Jahrhundert — liefert eine der seltensten Architektur-Kulissen Deutschlands: romanischer Kreuzgang, Klosterhof, Stiftskirche. Daneben die ländlichen Ortsteile Stommeln und Dansweiler mit Fachwerk und Feldlandschaften.',
      'Anfahrt 50 km / 45 Minuten. Wir fotografieren in Pulheim Hochzeiten in der Abtei und gelegentlich Familien-Shootings in den Dorfkernen.',
    ],
    sections: [
      { h2: 'Abtei Brauweiler — monastische Ruhe',
        paragraphs: [
          'Die ehemalige Benediktiner-Abtei aus dem 11. Jahrhundert beherbergt heute das LVR-Kulturzentrum und wird für Hochzeiten und Events vermietet. Fotografisch außergewöhnlich: der romanische Kreuzgang mit Säulen und Licht-Schatten-Raster, der Klosterhof, die Kirche.',
          'Für Paare mit Sinn für Stille und Würde ist Brauweiler eine der schönsten Hochzeits-Kulissen Deutschlands. Nicht jede Hochzeit passt hierher — aber wenn sie passt, sind die Bilder zeitlos.',
        ],
      },
      { h2: 'Stommeln und Dansweiler — dörfliche Bildsprache',
        paragraphs: [
          'Stommeln hat ein erhaltenes Dorfensemble mit Fachwerk und einer bekannten Synagoge. Für Paare mit historisch-stillem Geschmack eine Alternative zu den großen Schlössern.',
          'Dansweiler bietet weite Felder und alte Hofanlagen — für Familien und Paare mit Vorliebe für ländliche Bildsprache.',
        ],
      },
    ],
    faqs: [
      { q: 'Wie bucht man Abtei Brauweiler für eine Hochzeit?',
        a: 'Über das LVR-Kulturzentrum Abtei Brauweiler. Termine oft 12-18 Monate im Voraus ausgebucht. Kapazität bis 80 Gäste, Catering extern organisiert.' },
      { q: 'Ist der Kreuzgang für private Shootings zugänglich?',
        a: 'Zu Besucherzeiten eingeschränkt. Für professionelle Paar-Shootings empfehlen wir Anmeldung zu Nebenzeiten (frühmorgens, spätnachmittags).' },
      { q: 'Sind in den Pulheimer Dörfern Fotogenehmigungen nötig?',
        a: 'Nein, für private Portraits nicht. Wir halten uns an Respekt vor Anwohnern — keine Shootings auf Privatgrundstücken ohne Absprache.' },
      { q: 'Wie weit ist Pulheim vom Kölner Hauptbahnhof?',
        a: 'S-Bahn S6 oder S11 in 20 Minuten. Mit Auto über A1 Ausfahrt Pulheim 25 Minuten.' },
    ],
    closing: 'Pulheim ist fotografisch eine Reise zurück in eine stillere Zeit — besonders die Abtei Brauweiler. Wenn Sie dort heiraten oder einfach einmal dort fotografieren möchten, sind wir ein guter Ansprechpartner — wir haben die Routinen mit der Abtei-Verwaltung längst etabliert.',
  },
}
