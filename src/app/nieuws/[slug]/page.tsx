import Image from "next/image";
import Link from "next/link";
import { nieuwsData } from "@/components/ui/NieuwsGrid";

const Bliksem = ({ className = "" }: { className?: string }) => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" className={className}>
    <path d="M6 0L0 8H5L4 14L10 6H5L6 0Z" fill="currentColor"/>
  </svg>
);

const artikelContent: Record<
  string,
  {
    intro: string;
    sections: { titel: string; tekst: string }[];
    anchors: string[];
  }
> = {
  "kracht-handenarbeid": {
    intro:
      "In een steeds meer gedigitaliseerde wereld blijft technisch vakmanschap onmisbaar. Deforche legt uit waarom handarbeid en digitale tools elkaar versterken in plaats van te vervangen.",
    anchors: ["Hardware engineering", "Alles in eigen huis", "Persoonlijk contact"],
    sections: [
      {
        titel: "Hardware engineering versus puur vakmanschap",
        tekst:
          "Digitale tools maken het werk efficiënter, maar vervangen nooit het ervaren oog en de vaardige handen van een bekwame technicus. Bij Deforche combineren we Eplan-software met eerlijk handwerk op de werkvloer.",
      },
      {
        titel: "Alles in eigen huis voor maximale kwaliteit",
        tekst:
          "Door engineering, bordenbouw en installatie in eigen huis te houden, garandeert Deforche een perfecte afstemming tussen elk onderdeel van het project. Geen ruis, geen miscommunicatie.",
      },
      {
        titel: "Persoonlijk contact als onderscheidende factor",
        tekst:
          "In een tijdperk van digitalisering blijft persoonlijk contact de sleutel tot een succesvol project. Onze klanten weten wie hen opvolgt en kunnen altijd terecht bij hun vaste contactpersoon.",
      },
    ],
  },
  "waarom-expertise": {
    intro:
      "De Belgische elektrotechnische markt stelt specifieke eisen. Lokale kennis, vertrouwde netwerken en technische diepgang zijn de factoren die het verschil maken.",
    anchors: ["Belgische markt", "Lokale connecties", "Vakmanschap"],
    sections: [
      {
        titel: "Technische diepgang in een versnipperde Belgische markt",
        tekst:
          "De Belgische markt is gefragmenteerd en vraagt om specialisten die de lokale context begrijpen. Deforche is geworteld in deze markt en spreekt de taal van zijn klanten.",
      },
      {
        titel: "Een gevestigde waarde met sterke lokale connecties",
        tekst:
          "Jarenlange aanwezigheid in de regio heeft Deforche een sterk netwerk opgeleverd van klanten, partners en leveranciers die elkaars werking kennen en vertrouwen.",
      },
      {
        titel: "Lokaal vakmanschap als antwoord op de marktvraag",
        tekst:
          "Lokaal vakmanschap gecombineerd met internationale normen — dat is de Deforche-formule die klanten telkens terugbrengt.",
      },
    ],
  },
  "blik-achter-schermen": {
    intro:
      "Deforche Schakeltechniek opende de deuren van zijn gloednieuwe atelier. Een kijkje achter de schermen bij de plek waar ideeën werkelijkheid worden.",
    anchors: ["Nieuw atelier", "Bordenbouw", "Troubleshooting"],
    sections: [
      {
        titel: "Authentiek handwerk binnen een moderne werkomgeving",
        tekst:
          "Het nieuwe atelier combineert de beste van twee werelden: moderne infrastructuur met de ambachtelijke aanpak waarvoor Deforche bekend staat.",
      },
      {
        titel: "Van ontwerp tot assemblage onder één dak",
        tekst:
          "Alle stappen van het productieproces vinden plaats binnen de muren van het atelier — van eerste ontwerp tot getest eindproduct.",
      },
      {
        titel: "Troubleshooting en onderhoud vanuit ons atelier",
        tekst:
          "Vanuit het nieuwe atelier coördineert Deforche ook alle onderhouds- en interventie-opdrachten bij klanten in de regio en daarbuiten.",
      },
    ],
  },
  "war-for-talent": {
    intro:
      "De elektrotechnische sector staat voor een groot uitdaging: het aantrekken en behouden van jong talent. Hoe pakt Deforche dit aan?",
    anchors: ["Talent", "Opleiding", "Toekomst"],
    sections: [
      {
        titel: "De war for talent in de technische sector",
        tekst:
          "De vraag naar technisch geschoolde arbeidskrachten overtreft het aanbod. Bedrijven die nu niet investeren in de volgende generatie, zullen morgen problemen krijgen.",
      },
      {
        titel: "Investeren in opleiding en begeleiding",
        tekst:
          "Deforche werkt samen met technische scholen en biedt stagiairs een echte werkomgeving. Zo groeien ze op in onze cultuur van kwaliteit en vakmanschap.",
      },
      {
        titel: "Een werkgever die toekomst biedt",
        tekst:
          "Naast een competitief loon biedt Deforche groeitrajecten, variatie in projecten en een familiaal werkklimaat. Want tevreden medewerkers leveren het beste werk.",
      },
    ],
  },
  "alles-onder-een-dak": {
    intro:
      "Van Eplan-ontwerp tot indienststelling — bij Deforche Schakeltechniek is alles in eigen huis. Wat zijn de voordelen voor uw project?",
    anchors: ["Hardware engineering", "Alles in eigen huis", "Persoonlijk contact"],
    sections: [
      {
        titel: "Hardware Engineering als fundament",
        tekst:
          "Elk project start met hardware engineering. Ons Eplan-tekenbureau zorgt voor het perfecte design, zodat de rest van het project vlot en foutloos verloopt.",
      },
      {
        titel: "Bordenbouw en installatie in eigen regie",
        tekst:
          "Doordat bordenbouw en installatie bij ons in huis zijn, elimineren we de schakels die communicatiefouten veroorzaken. Uw bord wordt gebouwd door dezelfde mensen die het daarna installeren.",
      },
      {
        titel: "Testing en indienststelling zonder verrassingen",
        tekst:
          "Wij verzorgen zelf de volledige testing en veilige opstart. Keuringen besteden we uit aan erkende derden, zodat elke stap objectief gevalideerd is.",
      },
    ],
  },
  "troubleshooting-kort-aanspreekpunt": {
    intro:
      "Wanneer een installatie uitvalt, telt elke minuut. Waarom een kort aanspreekpunt zo cruciaal is bij troubleshooting en hoe Deforche dit aanpakt.",
    anchors: ["Hardware engineering", "Alles in eigen huis", "Persoonlijk contact"],
    sections: [
      {
        titel: "Snel diagnose dankzij diepgaande kennis",
        tekst:
          "Omdat wij de installaties zelf ontwerpen en bouwen, kennen we elk detail. Bij een storing kunnen onze technici razendsnel de oorzaak identificeren zonder urenlang zoeken.",
      },
      {
        titel: "Eén aanspreekpunt voor alles",
        tekst:
          "Geen doorverwijzing naar externe dienstverleners. Onze klanten bellen één nummer en krijgen direct iemand aan de lijn die hun installatie kent en weet wat er moet gebeuren.",
      },
      {
        titel: "Preventief onderhoud voor continuïteit",
        tekst:
          "Via onderhoudscontracten op maat zorgen we dat problemen voorkomen worden. Regelmatige inspecties en proactieve vervanging van slijtageonderdelen houden uw productie draaiende.",
      },
    ],
  },
};

export function generateStaticParams() {
  return nieuwsData.map((item) => ({ slug: item.slug }));
}

export default function NieuwsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const nieuwsItem = nieuwsData.find((n) => n.slug === params.slug);
  const content = artikelContent[params.slug];

  if (!nieuwsItem || !content) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-2xl font-bold text-(--color-dark)">Artikel niet gevonden</h1>
        <Link href="/nieuws" className="mt-4 inline-block text-(--color-primary) font-semibold">
          ← Terug naar nieuws
        </Link>
      </main>
    );
  }

  return (
    <main>
      {/* ── HERO ── foto links, tekst rechts */}
      <section className="px-6">
      <div className="grid md:grid-cols-2 max-w-7xl mx-auto gap-6 md:gap-12 items-center">
        <div className="relative h-56 md:h-80">
          <Image src={nieuwsItem.image} alt={nieuwsItem.titel} fill className="object-cover" priority />
        </div>
        <div>
          <p className="text-xs font-bold text-(--color-gray-text) mb-3 flex items-center gap-1.5">
            <Bliksem className="text-(--color-primary)" /> Nieuws
          </p>
          <h1 className="font-bold text-(--color-dark) leading-snug mb-4">
            {nieuwsItem.titel}
          </h1>
          <p className="text-(--color-gray-text) text-sm leading-relaxed mb-6">
            {content.intro}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-(--color-dark) text-(--color-dark) font-bold text-sm px-5 py-2.5 hover:bg-(--color-gray-light) transition-colors"
          >
            Contacteer ons
          </Link>
        </div>
      </div>
      </section>

      {/* ── SIDEBAR + CONTENT ── */}
      <section className="px-6">
      <div className="max-w-7xl mx-auto flex gap-8 md:gap-12">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col gap-1 w-64 shrink-0">
          <div className="sticky top-24">
            {content.anchors.map((anchor) => (
              <a
                key={anchor}
                href={`#${anchor.toLowerCase().replace(/ /g, "-")}`}
                className="flex items-start gap-2 py-3 px-4 text-sm text-(--color-gray-text) hover:text-(--color-dark) transition-colors border-l-2 border-transparent hover:border-(--color-primary)"
              >
                <Bliksem className="mt-0.5 shrink-0 text-(--color-gray-text)" />
                {anchor}
              </a>
            ))}
          </div>
        </aside>

        {/* Artikel content */}
        <div className="flex flex-col gap-10 flex-1 max-w-2xl">
          {content.sections.map((s, i) => (
            <div key={s.titel} id={content.anchors[i]?.toLowerCase().replace(/ /g, "-")}>
              <h2 className="text-xl md:text-2xl font-bold text-(--color-dark) mb-3">{s.titel}</h2>
              <p className="text-(--color-gray-text) text-sm leading-relaxed">{s.tekst}</p>
            </div>
          ))}
        </div>
      </div>
      </section>
    </main>
  );
}
