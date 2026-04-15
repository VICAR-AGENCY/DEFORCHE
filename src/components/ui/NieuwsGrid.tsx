import Image from "next/image";
import Link from "next/link";

export type NieuwsItem = {
  slug: string;
  titel: string;
  datum: string;
  image: string;
  imageHeight?: number;
};

export default function NieuwsGrid({ items = [] }: { items?: NieuwsItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((n) => (
        <Link key={n.slug} href={`/nieuws/${n.slug}`} className="group">
          <div className="relative overflow-hidden mb-4" style={{height: n.imageHeight ? `${n.imageHeight}px` : "208px"}}>
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
