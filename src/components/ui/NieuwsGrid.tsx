import Image from "next/image";
import Link from "next/link";

export type NieuwsItem = {
  slug: string;
  titel: string;
  datum: string;
  image: string;
};

export const nieuwsData: NieuwsItem[] = [
  { slug: "kracht-handenarbeid", titel: "De kracht van handenarbeid in een digitale sector", datum: "Zat 10 feb", image: "/images/Rectangle 8696.png" },
  { slug: "waarom-expertise", titel: "Waarom expertise in de Belgische markt het verschil maakt", datum: "SUN 14 mar", image: "/images/Rectangle 8697.png" },
  { slug: "blik-achter-schermen", titel: "Blik achter de schermen in ons gloednieuw atelier", datum: "MA 6 feb", image: "/images/Rectangle 8687-3.png" },
  { slug: "war-for-talent", titel: "De War for Talent: Waarom wij investeren in de nieuwe generatie", datum: "Wed 15 apr", image: "/images/Rectangle 8698.png" },
  { slug: "alles-onder-een-dak", titel: "Alles onder één dak: Van Eplan-ontwerp tot indienststelling", datum: "Vrij 20 jun", image: "/images/Rectangle 8689.png" },
  { slug: "troubleshooting-kort-aanspreekpunt", titel: "Troubleshooting: Waarom een kort aanspreekpunt cruciaal is bij pannes", datum: "Zat 10 feb", image: "/images/Rectangle 8690.png" },
];

export default function NieuwsGrid({ items = nieuwsData.slice(0, 3) }: { items?: NieuwsItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((n) => (
        <Link key={n.slug} href={`/nieuws/${n.slug}`} className="group">
          <div className="relative h-40 md:h-52 overflow-hidden mb-4">
            <Image
              src={n.image}
              alt={n.titel}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="font-bold text-(--color-dark) text-sm leading-snug mb-2 group-hover:opacity-70 transition-opacity">
            {n.titel}
          </h3>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-(--color-primary) text-(--color-dark) text-xs font-bold px-2 py-0.5">
              <svg width="8" height="11" viewBox="0 0 10 14" fill="none"><path d="M6 0L0 8H5L4 14L10 6H5L6 0Z" fill="currentColor"/></svg>
              Nieuws
            </span>
            <span className="text-xs text-(--color-gray-text)">{n.datum}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
