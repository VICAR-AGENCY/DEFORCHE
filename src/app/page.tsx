import Image from "next/image";
import Link from "next/link";
import NieuwsGrid from "@/components/ui/NieuwsGrid";
import { getNieuws } from "@/lib/content";
import DienstenGrid from "@/components/ui/DienstenGrid";

const Bliksem = ({ className = "" }: { className?: string }) => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" className={className}>
    <path d="M6 0L0 8H5L4 14L10 6H5L6 0Z" fill="currentColor"/>
  </svg>
);

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="bg-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-bold text-(--color-dark) leading-tight max-w-2xl mx-auto">
            Precision in<br />every connection
          </h1>
          <p className="mt-4 text-(--color-gray-text) leading-relaxed max-w-xl mx-auto">
            Van industriële elektriciteit tot hoogspanning en automatisatie wij ontwerpen, bouwen en installeren betrouwbare systemen voor kritische omgevingen.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-(--color-primary) text-(--color-dark) font-bold text-sm px-5 py-2.5 hover:bg-(--color-primary-hover) transition-colors"
            >
              <Bliksem />
              Offerte aanvragen
            </Link>
            <Link
              href="/over-ons"
              className="inline-flex items-center gap-2 border border-(--color-dark) text-(--color-dark) font-bold text-sm px-5 py-2.5 hover:bg-(--color-gray-light) transition-colors"
            >
              Over ons
            </Link>
          </div>
          <div className="relative mt-10 h-48 md:h-72 lg:h-[420px] overflow-hidden">
            <Image
              src="/images/Rectangle 8684.png"
              alt="Deforche elektrische installatie"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex items-center justify-center gap-[15px] py-4 text-sm text-(--color-gray-text)">
            <span>Vertrouwd door +50 klanten</span>
            <div className="flex items-center">
              <div className="relative w-[30px] h-[30px] z-30">
                <Image src="/images/Group 1000004366.png" alt="Klant logo 1" fill className="object-contain" />
              </div>
              <div className="relative w-[30px] h-[30px] -ml-2 z-20">
                <Image src="/images/Group 1000004367.png" alt="Klant logo 2" fill className="object-contain" />
              </div>
              <div className="relative w-[30px] h-[30px] -ml-2 z-10">
                <Image src="/images/Group 1000004368.png" alt="Klant logo 3" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VAKMANSCHAP ── */}
      <section className="px-6">
        <div className="grid md:grid-cols-2 max-w-7xl mx-auto gap-6 md:gap-12 items-center">
          <div>
            <p className="text-xs font-bold text-(--color-gray-text) mb-3 flex items-center gap-1.5">
              <Bliksem className="text-(--color-primary)" /> Over ons
            </p>
            <h2 className="font-bold text-(--color-dark) leading-snug mb-4">
              Vakmanschap en diepgaande<br />expertise in huis
            </h2>
            <p className="text-(--color-gray-text) text-sm leading-relaxed mb-6">
              Bij Deforche Schakeltechniek draait alles om pure kennis, sterke connecties en jarenlange ervaring in onze sector. Wij verzorgen hardware engineering, bordenbouw en de volledige installatie van hoogspanning. Met onze zaakvoerder als kort aanspreekpunt houden we de lijnen altijd direct. Kastenbouw is bij ons nog echt handenarbeid. We hebben werkelijk alles in huis.
            </p>
            <Link href="/over-ons" className="text-sm font-bold text-(--color-dark) hover:text-(--color-primary) transition-colors">
              Leer ons kennen
            </Link>
          </div>
          <div className="relative h-56 md:h-[550px]">
            <Image src="/images/Rectangle 8687.png" alt="Team Deforche" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ── DIENSTEN GRID ── */}
      <section className="bg-white !py-[50px]">
        <DienstenGrid />
      </section>

      {/* ── CASES ── */}
      <section className="px-6">
        <div className="grid md:grid-cols-2 max-w-7xl mx-auto gap-6 md:gap-12 items-center">
          <div className="relative h-56 md:h-[500px]">
            <Image src="/images/Rectangle 8700.png" alt="Deforche case referentie" fill className="object-cover" />
            <div className="absolute bottom-4 left-4 flex gap-2">
              <button className="w-8 h-8 bg-white/80 flex items-center justify-center text-sm font-bold hover:bg-white transition-colors">←</button>
              <button className="w-8 h-8 bg-white/80 flex items-center justify-center text-sm font-bold hover:bg-white transition-colors">→</button>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold text-(--color-gray-text) mb-3 flex items-center gap-1.5">
              <Bliksem className="text-(--color-primary)" /> Cases
            </p>
            <h2 className="font-bold text-(--color-dark) leading-snug mb-4">
              Onze pareltjes en<br />sterke referenties
            </h2>
            <p className="text-(--color-gray-text) text-sm leading-relaxed mb-6">
              Om te tonen wie we echt zijn en wat we kunnen, laten we graag onze projecten voor zich spreken. We zijn trots op onze technische pareltjes en grote cases, zoals de complexe realisaties bij Vandewiele, Poppies en grote installaties met zonnepanelen.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-(--color-primary) text-(--color-dark) font-bold text-sm px-5 py-2.5 hover:bg-(--color-primary-hover) transition-colors"
            >
              Contacteer ons
            </Link>
          </div>
        </div>
      </section>

      {/* ── NIEUWS ── */}
      <section className="bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold text-(--color-gray-text) mb-3 flex items-center justify-center gap-1.5">
            <Bliksem className="text-(--color-primary)" /> Nieuws
          </p>
          <h2 className="font-bold text-(--color-dark) text-center mb-2">
            Ontdek het laatste nieuws
          </h2>
          <p className="text-(--color-gray-text) text-sm text-center mb-3">
            Blijf op de hoogte van onze nieuwste projecten, innovaties en de strafste cases uit ons atelier.
          </p>
          <p className="text-center mb-8">
            <Link href="/nieuws" className="text-sm font-bold text-(--color-dark) hover:text-(--color-primary) transition-colors">
              Meer nieuws
            </Link>
          </p>
          <NieuwsGrid items={getNieuws().slice(0, 3).map((item, i: number) => ({
            ...item,
            imageHeight: [480, 380, 580][i],
          }))} />
        </div>
      </section>
    </main>
  );
}
