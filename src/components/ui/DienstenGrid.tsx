import Link from "next/link";
import Image from "next/image";

const Bliksem = () => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" className="inline-block mr-1.5 shrink-0 text-(--color-primary)">
    <path d="M6 0L0 8H5L4 14L10 6H5L6 0Z" fill="currentColor"/>
  </svg>
);

const diensten = [
  {
    titel: "Hardware Engineering en Ontwerp",
    tekst: "Elk project start met hardware engineering. Ons Eplan-tekenbureau zorgt voor het perfecte design.",
    cta: { label: "Meer weten", type: "link" },
  },
  {
    titel: "Bordenbouw en assemblage op maat",
    tekst: "Onze kastenbouw is nog altijd echt eerlijk handenarbeid. Wij maken alles in ons atelier op maat.",
    cta: { label: "Offerte aanvragen", type: "button" },
  },
  {
    titel: "Installatie van hoog- en middenspanning",
    tekst: "Wij installeren hoog- en middenspanning volledig zelf. Onze experts zorgen voor de veilige bouw.",
    cta: { label: "Meer weten", type: "link" },
  },
  {
    titel: "Testing en Indienststelling",
    tekst: "Wij verzorgen zelf de complete testing en veilige opstart. Keuringen besteden we uit aan derden.",
    cta: { label: "Meer weten", type: "link" },
  },
  {
    titel: "Troubleshooting en Onderhoud",
    tekst: "Bij problemen lossen wij dit helemaal zelf op. We garanderen zekerheid via onderhoudscontracten.",
    cta: { label: "Meer weten", type: "link" },
  },
];

export default function DienstenGrid() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[15px]">
        {diensten.map((d) => (
          <div key={d.titel} className="bg-[#f4f4f4] p-6 flex flex-col gap-3 rounded-[10px]">
            <h3 className="font-bold text-(--color-dark) text-sm leading-snug flex items-start">
              <Bliksem />
              {d.titel}
            </h3>
            <p className="text-xs text-(--color-gray-text) leading-relaxed flex-1">{d.tekst}</p>
            {d.cta.type === "button" ? (
              <Link href="/contact" className="inline-flex items-center gap-1.5 bg-(--color-primary) text-(--color-dark) text-xs font-bold px-3 py-2 self-start hover:bg-(--color-primary-hover) transition-colors rounded-[4px]">
                <Bliksem />{d.cta.label}
              </Link>
            ) : (
              <Link href="/diensten" className="text-xs font-semibold text-(--color-dark) hover:text-(--color-primary) transition-colors">
                {d.cta.label}
              </Link>
            )}
          </div>
        ))}
        {/* Gele cel met logo */}
        <div className="bg-(--color-primary) p-6 flex flex-col items-start justify-between gap-4 rounded-[10px]">
          <Image src="/logo.svg" alt="Deforche" width={110} height={36} />
          <Link href="/contact" className="inline-flex items-center gap-1.5 bg-(--color-dark) text-white text-xs font-bold px-3 py-2 hover:opacity-80 transition-opacity rounded-[4px]">
            <svg width="8" height="11" viewBox="0 0 10 14" fill="none"><path d="M6 0L0 8H5L4 14L10 6H5L6 0Z" fill="currentColor"/></svg>
            Offerte aanvragen
          </Link>
        </div>
      </div>
    </div>
  );
}
