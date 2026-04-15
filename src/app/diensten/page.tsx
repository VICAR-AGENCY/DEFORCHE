import Image from "next/image";
import Link from "next/link";
import NieuwsSection from "@/components/ui/NieuwsSection";
import DienstenSidebar from "@/components/ui/DienstenSidebar";

const Bliksem = ({ className = "" }: { className?: string }) => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" className={className}>
    <path d="M6 0L0 8H5L4 14L10 6H5L6 0Z" fill="currentColor"/>
  </svg>
);

export default function DienstenPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="px-6">
        <div className="grid md:grid-cols-2 max-w-7xl mx-auto gap-6 md:gap-12 items-center">
          <div>
            <div className="relative h-56 md:h-80">
              <Image src="/images/Rectangle 8687-1.png" alt="Deforche diensten" fill className="object-cover" priority />
            </div>
            <div className="flex items-center gap-[15px] mt-4 text-sm text-(--color-gray-text)">
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
          <div>
            <p className="text-xs font-bold text-(--color-gray-text) mb-3 flex items-center gap-1.5">
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
      <DienstenSidebar />

      {/* ── NIEUWS ── */}
      <NieuwsSection />
    </main>
  );
}
