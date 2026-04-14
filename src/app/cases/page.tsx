"use client";

import Image from "next/image";
import Link from "next/link";
import DienstenGrid from "@/components/ui/DienstenGrid";
import { useState } from "react";

const Bliksem = ({ className = "" }: { className?: string }) => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" className={className}>
    <path d="M6 0L0 8H5L4 14L10 6H5L6 0Z" fill="currentColor"/>
  </svg>
);

const cases = [
  {
    id: "vandewiele",
    bedrijf: "Vandewiele",
    titel: "Complexe hoogspanning voor Vandewiele",
    uitdaging: "Vandewiele vroeg om een volledige hoogspanningsinstallatie voor hun uitgebreide productiesite. De complexiteit lag in de strikte veiligheidseisen en de minimale stilstandstijd die gevraagd werd.",
    oplossing: "Deforche realiseerde de volledige studie, bordenbouw en installatie in eigen huis. Dankzij onze ervaring met gelijkaardige projecten kon de opstart binnen het geplande tijdsbestek worden afgerond.",
    image: "/images/Rectangle 8693.png",
  },
  {
    id: "poppies",
    bedrijf: "Poppies",
    titel: "Poppies: Productie op volle toeren",
    uitdaging: "Poppies, één van de grootste aardappelverwerkende bedrijven in Europa, had nood aan een robuuste en schaalbare elektrische infrastructuur voor hun uitbreidende productielijn.",
    oplossing: "Wij verzorgden de hardware engineering, bordenbouw én installatie van de volledige elektrische installatie. Productie liep door tijdens de werkzaamheden dankzij zorgvuldige planning.",
    image: "/images/Rectangle 8700.png",
  },
  {
    id: "zonnepanelen",
    bedrijf: "Industrieel project",
    titel: "Grootschalige zonnepaneleninstallatie",
    uitdaging: "Een grote industriële klant wou zijn energieverbruik drastisch reduceren via een grootschalige PV-installatie gekoppeld aan het bestaande middenspanningsnet.",
    oplossing: "Deforche nam de volledige engineering en installatie op zich, inclusief de aansluiting op het distributienet en alle vereiste keuringen via erkende instanties.",
    image: "/images/Rectangle 8696.png",
  },
];

function CaseAccordion({ uitdaging, oplossing }: { uitdaging: string; oplossing: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col mt-4">
      {[
        { label: "De uitdaging", tekst: uitdaging },
        { label: "Onze oplossing", tekst: oplossing },
      ].map((item, i) => (
        <div key={item.label} className="border-t border-(--color-gray-mid)">
          <button
            className="w-full flex items-center justify-between py-4 text-left text-sm font-bold text-(--color-dark) hover:text-(--color-primary) transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {item.label}
            <span className="text-lg leading-none">{openIndex === i ? "−" : "+"}</span>
          </button>
          {openIndex === i && (
            <p className="pb-4 text-sm text-(--color-gray-text) leading-relaxed">
              {item.tekst}
            </p>
          )}
        </div>
      ))}
      <div className="border-t border-(--color-gray-mid)" />
    </div>
  );
}

export default function CasesPage() {
  return (
    <main>
      {/* ── HEADER + HERO FOTO ── */}
      <section className="px-6">
        <div className="grid md:grid-cols-2 max-w-7xl mx-auto gap-6 md:gap-12 items-center">
          <div>
            <p className="text-xs font-bold text-(--color-dark) mb-3 flex items-center gap-1.5">
              <Bliksem className="text-(--color-primary)" /> Cases
            </p>
            <h1 className="font-bold text-(--color-dark) leading-snug mb-4">
              Onze pareltjes en<br />sterke referenties
            </h1>
            <p className="text-(--color-gray-text) text-sm leading-relaxed mb-6">
              We zijn trots op onze technische pareltjes en grote cases. Laat ons werk voor zich spreken — van complexe hoogspanningsinstallaties tot grootschalige productiesites.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-(--color-primary) text-(--color-dark) font-bold text-sm px-5 py-2.5 hover:bg-(--color-primary-hover) transition-colors"
            >
              <Bliksem />
              Offerte aanvragen
            </Link>
          </div>
          <div className="relative h-56 md:h-80">
            <Image src="/images/Rectangle 8693.png" alt="Deforche cases referentie" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* ── CASES ── */}
      {cases.map((c) => (
        <section key={c.id} className="px-6">
          <div className="grid md:grid-cols-2 max-w-7xl mx-auto gap-6 md:gap-12 items-start">
            <div className="relative h-56 md:h-80">
              <Image src={c.image} alt={c.titel} fill className="object-cover" />
            </div>
            <div>
              <p className="text-xs font-bold text-(--color-dark) mb-3 flex items-center gap-1.5">
                <Bliksem className="text-(--color-primary)" /> {c.bedrijf}
              </p>
              <h2 className="font-bold text-(--color-dark) leading-snug mb-2">
                {c.titel}
              </h2>
              <CaseAccordion uitdaging={c.uitdaging} oplossing={c.oplossing} />
            </div>
          </div>
        </section>
      ))}

      {/* ── DIENSTEN GRID ── */}
      <section className="bg-(--color-gray-light) !py-0">
        <DienstenGrid />
      </section>
    </main>
  );
}
