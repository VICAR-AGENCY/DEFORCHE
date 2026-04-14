"use client";

import Image from "next/image";
import Link from "next/link";
import NieuwsGrid, { nieuwsData } from "@/components/ui/NieuwsGrid";
import { useState } from "react";

const Bliksem = ({ className = "" }: { className?: string }) => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" className={className}>
    <path d="M6 0L0 8H5L4 14L10 6H5L6 0Z" fill="currentColor"/>
  </svg>
);

const diensten = [
  {
    id: "hardware-engineering",
    titel: "Hardware Engineering en Ontwerp",
    beschrijving: "Elk project start met hardware engineering. Ons Eplan-tekenbureau zorgt voor het perfecte design van uw elektrische installatie. Wij werken altijd met de meest actuele tools en normen zodat uw project van in de startblokken klopt.",
    image: "/images/Rectangle 8684.png",
  },
  {
    id: "bordenbouw",
    titel: "Bordenbouw en assemblage op maat",
    beschrijving: "Onze kastenbouw is nog altijd echt eerlijk handenarbeid. Wij maken alles in ons atelier op maat — van kleine verdelers tot complexe hoogspanningsborden. Elk bord verlaat ons atelier uitvoerig getest en klaar voor installatie.",
    image: "/images/Rectangle 8688.png",
  },
  {
    id: "installatie",
    titel: "Installatie van hoog- en middenspanning",
    beschrijving: "Wij installeren hoog- en middenspanning volledig zelf. Onze experts zorgen voor de veilige bouw en aansluiting van transformatoren, schakelinstallaties en kabelverbindingen conform de geldende normen.",
    image: "/images/Rectangle 8689.png",
  },
  {
    id: "testing",
    titel: "Testing en Indienststelling",
    beschrijving: "Wij verzorgen zelf de complete testing en veilige opstart van uw installatie. Keuringen besteden we uit aan erkende derden. Zo bent u zeker dat uw installatie niet alleen technisch correct is, maar ook officieel goedgekeurd.",
    image: "/images/Rectangle 8690.png",
  },
  {
    id: "troubleshooting",
    titel: "Troubleshooting en Onderhoud",
    beschrijving: "Bij problemen lossen wij dit helemaal zelf op. We garanderen zekerheid via onderhoudscontracten op maat. Ons team staat klaar voor snelle interventies en preventief onderhoud zodat uw productie niet stilvalt.",
    image: "/images/Rectangle 8691.png",
  },
];

export default function DienstenPage() {
  const [activeId, setActiveId] = useState<string>(diensten[0].id);

  return (
    <main>
      {/* ── HERO ── */}
      <section className="px-6">
        <div className="grid md:grid-cols-2 max-w-7xl mx-auto gap-6 md:gap-12 items-center">
          <div>
            <div className="relative h-56 md:h-80">
              <Image src="/images/Rectangle 8687-1.png" alt="Deforche diensten" fill className="object-cover" priority />
            </div>
            <div className="flex items-center gap-3 mt-4 text-sm text-(--color-gray-text)">
              <span>Vertrouwd door +50 klanten</span>
              <Image src="/images/Frame 1000005822.png" alt="Klant logos" width={60} height={24} className="object-contain" />
            </div>
          </div>
          <div>
            <p className="text-xs font-bold text-(--color-dark) mb-3 flex items-center gap-1.5">
              <Bliksem className="text-(--color-primary)" /> Onze diensten
            </p>
            <h1 className="font-bold text-(--color-dark) leading-snug mb-4">
              Vakmanschap en expertise<br />in huis
            </h1>
            <p className="text-(--color-gray-text) text-sm leading-relaxed mb-6">
              Bij Deforche Schakeltechniek draait alles om pure kennis, sterke connecties en jarenlange ervaring. Wij verzorgen hardware engineering, bordenbouw en de volledige installatie van hoogspanning — allemaal in eigen huis.
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

      {/* ── DIENSTEN met sticky sidebar ── */}
      <section className="bg-(--color-gray-light) px-6">
        <div className="max-w-7xl mx-auto flex gap-8 md:gap-12">
          {/* Sticky sidebar — alleen op md+ */}
          <aside className="hidden md:flex flex-col gap-1 w-56 shrink-0">
            <div className="sticky top-24">
              {diensten.map((d) => (
                <a
                  key={d.id}
                  href={`#${d.id}`}
                  onClick={() => setActiveId(d.id)}
                  className={`flex items-start gap-2 py-3 px-4 text-sm font-semibold transition-colors border-l-2 ${
                    activeId === d.id
                      ? "border-(--color-primary) text-(--color-dark) bg-white"
                      : "border-transparent text-(--color-gray-text) hover:text-(--color-dark)"
                  }`}
                >
                  <Bliksem className={`mt-0.5 shrink-0 ${activeId === d.id ? "text-(--color-primary)" : "text-(--color-gray-text)"}`} />
                  {d.titel}
                </a>
              ))}
            </div>
          </aside>

          {/* Diensten blokken */}
          <div className="flex flex-col gap-12 md:gap-16 flex-1">
            {diensten.map((d) => (
              <div key={d.id} id={d.id}>
                <p className="text-xs font-bold text-(--color-dark) mb-3 flex items-center gap-1.5">
                  <Bliksem className="text-(--color-primary)" /> Diensten
                </p>
                <h2 className="font-bold text-(--color-dark) leading-snug mb-4">{d.titel}</h2>
                <p className="text-(--color-gray-text) text-sm leading-relaxed mb-6">{d.beschrijving}</p>
                <div className="relative h-48 md:h-80 w-full overflow-hidden">
                  <Image src={d.image} alt={d.titel} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NIEUWS ── */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold text-(--color-dark) mb-3 flex items-center gap-1.5">
            <Bliksem className="text-(--color-primary)" /> Nieuws
          </p>
          <h2 className="font-bold text-(--color-dark) mb-8">Ontdek nieuws</h2>
          <NieuwsGrid items={nieuwsData.slice(0, 3)} />
        </div>
      </section>
    </main>
  );
}
