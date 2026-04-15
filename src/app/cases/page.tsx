import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DienstenGrid from "@/components/ui/DienstenGrid";
import { getCases } from "@/lib/content";
import CaseAccordion from "@/components/ui/CaseAccordion";

export const metadata: Metadata = {
  title: "Cases",
  description: "Ontdek onze sterkste referenties: van complexe hoogspanningsinstallaties bij Vandewiele tot grote zonnepanelenprojecten.",
};

const Bliksem = ({ className = "" }: { className?: string }) => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" className={className}>
    <path d="M6 0L0 8H5L4 14L10 6H5L6 0Z" fill="currentColor"/>
  </svg>
);

export default function CasesPage() {
  const cases = getCases();

  return (
    <main>
      {/* ── HEADER + HERO FOTO ── */}
      <section className="px-6">
        <div className="grid md:grid-cols-2 max-w-7xl mx-auto gap-6 md:gap-12 items-center">
          <div>
            <p className="text-xs font-bold text-(--color-gray-text) mb-3 flex items-center gap-1.5">
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
            <Image src={cases[0]?.image ?? "/images/Rectangle 8693.png"} alt="Deforche cases referentie" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* ── CASES ── */}
      {cases.map((c) => (
        <section key={c.slug} className="px-6">
          <div className="grid md:grid-cols-2 max-w-7xl mx-auto gap-6 md:gap-12 items-start">
            <div className="relative h-56 md:h-80">
              <Image src={c.image} alt={c.titel} fill className="object-cover" />
              {c.logo && (
                <div className="absolute top-4 left-4 bg-white px-3 py-2" style={{ borderRadius: "5px" }}>
                  <Image src={c.logo} alt={c.bedrijf} width={100} height={32} className="object-contain" style={{ borderRadius: 0 }} />
                </div>
              )}
            </div>
            <div>
              <div className="mb-3">
                <p className="text-xs font-bold text-(--color-gray-text) flex items-center gap-1.5">
                  <Bliksem className="text-(--color-primary)" /> {c.bedrijf}
                </p>
              </div>
              <h2 className="font-bold text-(--color-dark) leading-snug mb-2">
                {c.titel}
              </h2>
              <CaseAccordion uitdaging={c.uitdaging} oplossing={c.oplossing} />
            </div>
          </div>
        </section>
      ))}

      {/* ── DIENSTEN GRID ── */}
      <section className="bg-white">
        <DienstenGrid />
      </section>
    </main>
  );
}
