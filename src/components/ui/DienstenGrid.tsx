import Link from "next/link";
import Image from "next/image";

const diensten = [
  { titel: <>Hardware Engineering<br />en Ontwerp</>, tekst: "Elk project start met hardware engineering. Ons Eplan-tekenbureau zorgt voor het perfecte design." },
  { titel: <>Bordenbouw en<br />assemblage op maat</>, tekst: "Onze kastenbouw is nog altijd echt eerlijk handenarbeid. Wij maken alles in ons atelier op maat." },
  { titel: <>Installatie van hoog- en<br />middenspanning</>, tekst: "Wij installeren hoog- en middenspanning volledig zelf. Onze experts zorgen voor de veilige bouw." },
  { titel: <>Testing en<br />Indienststelling</>, tekst: "Wij verzorgen zelf de complete testing en veilige opstart. Keuringen besteden we uit aan derden." },
  { titel: <>Troubleshooting en<br />Onderhoud</>, tekst: "Bij problemen lossen wij dit helemaal zelf op. We garanderen zekerheid via onderhoudscontracten." },
];

export default function DienstenGrid() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[15px]">
        {diensten.map((d, i) => (
          <div key={i} className="bg-[#f4f4f4] p-6 flex flex-col gap-3 rounded-[10px] h-[260px]">
            <h3 className="font-bold text-(--color-dark) text-[24px] leading-snug">{d.titel}</h3>
            <p className="text-xs text-(--color-gray-text) leading-relaxed flex-1">{d.tekst}</p>
            <Link href="/diensten" className="text-xs font-semibold text-(--color-dark) hover:text-(--color-primary) transition-colors">
              Meer weten
            </Link>
          </div>
        ))}

        {/* Gele cel */}
        <div className="relative p-6 flex flex-col items-center justify-center gap-4 rounded-[10px] h-[260px] overflow-hidden" style={{backgroundColor: "#F3EA0F"}}>
          {/* Grote bliksem overlay */}
          <svg
            viewBox="0 0 10 14"
            fill="none"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-auto"
            style={{color: "#FAF235"}}
          >
            <path d="M6 0L0 8H5L4 14L10 6H5L6 0Z" fill="currentColor"/>
          </svg>
          <Image src="/logo.svg" alt="Deforche" width={250} height={82} className="relative z-10 brightness-0" />
        </div>
      </div>
    </div>
  );
}
