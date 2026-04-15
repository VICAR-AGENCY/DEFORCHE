import Image from "next/image";
import Link from "next/link";
import NieuwsGrid, { nieuwsData } from "@/components/ui/NieuwsGrid";

const Bliksem = ({ className = "" }: { className?: string }) => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" className={className}>
    <path d="M6 0L0 8H5L4 14L10 6H5L6 0Z" fill="currentColor"/>
  </svg>
);

export default function OverOnsPage() {
  return (
    <main>
      {/* ── HERO FOTO ── */}
      <section className="bg-white px-6">
        <div className="max-w-7xl mx-auto">
        <div className="relative h-56 md:h-[420px] overflow-hidden">
          <Image
            src="/images/Rectangle 8687-3.png"
            alt="Deforche Schakeltechniek gebouw"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex items-center justify-center gap-3 pt-4 text-sm text-(--color-gray-text)">
          <span>Vertrouwd door +50 klanten</span>
          <Image src="/images/Frame 1000005822.png" alt="Klant logos" width={60} height={24} className="object-contain" />
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
            <p className="text-(--color-gray-text) text-sm leading-relaxed">
              Bij Deforche Schakeltechniek draait alles om pure kennis, sterke connecties en jarenlange ervaring in onze sector. Wij verzorgen hardware engineering, bordenbouw en de volledige installatie van hoogspanning. Met onze zaakvoerder als kort aanspreekpunt houden we de lijnen altijd direct. Kastenbouw is bij ons nog echt handenarbeid. We hebben werkelijk alles in huis.
            </p>
          </div>
          <div className="relative h-56 md:h-[500px]">
            <Image src="/images/Rectangle 8687.png" alt="Team Deforche" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ── VCA ── */}
      <section className="px-6">
        <div className="grid md:grid-cols-2 max-w-7xl mx-auto gap-6 md:gap-12 items-center">
          <div className="bg-(--color-gray-light) flex items-center justify-center h-56 md:h-[500px]">
            <Image
              src="/images/image 935.png"
              alt="VCA certificaat"
              width={200}
              height={120}
              className="object-contain"
            />
          </div>
          <div>
            <p className="text-xs font-bold text-(--color-gray-text) mb-3 flex items-center gap-1.5">
              <Bliksem className="text-(--color-primary)" /> Certificaties
            </p>
            <h2 className="font-bold text-(--color-dark) leading-snug mb-4">
              Onze Erkenningen<br />en Normen
            </h2>
            <p className="text-(--color-gray-text) text-sm leading-relaxed mb-6">
              Deforche Schakeltechniek is VCA gecertificeerd en werkt conform de geldende normen en veiligheidsvoorschriften. Kwaliteit en veiligheid zijn geen bijzaak — ze zitten in ons DNA. Alle keuringen besteden wij uit aan erkende derden voor maximale objectiviteit.
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

      {/* ── NIEUWS ── */}
      <section className="bg-(--color-gray-light) px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold text-(--color-gray-text) mb-3 flex items-center gap-1.5">
            <Bliksem className="text-(--color-primary)" /> Nieuws
          </p>
          <h2 className="font-bold text-(--color-dark) mb-2">Ontdek nieuws</h2>
          <p className="text-(--color-gray-text) text-sm mb-8">
            Blijf op de hoogte van onze nieuwste projecten, innovaties en de strafste cases uit ons atelier.
          </p>
          <NieuwsGrid items={nieuwsData.slice(0, 3)} />
        </div>
      </section>
    </main>
  );
}
