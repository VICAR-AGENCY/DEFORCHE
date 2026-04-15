import Link from "next/link";
import Image from "next/image";
import { getNieuws } from "@/lib/content";

const Bliksem = ({ className = "" }: { className?: string }) => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" className={className}>
    <path d="M6 0L0 8H5L4 14L10 6H5L6 0Z" fill="currentColor"/>
  </svg>
);

const heights = [400, 300, 500, 350, 280, 450];

export default function NieuwsPage() {
  const nieuws = getNieuws();

  return (
    <main>
      {/* ── HEADER ── */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold text-(--color-gray-text) mb-3 flex items-center gap-1.5">
            <Bliksem className="text-(--color-primary)" /> Nieuws
          </p>
          <h1 className="font-bold text-(--color-dark)">Ontdek nieuws</h1>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {nieuws.map((n, i) => (
            <Link key={n.slug} href={`/nieuws/${n.slug}`} className="group">
              <div
                className="relative overflow-hidden mb-4"
                style={{ height: `${heights[i % heights.length]}px` }}
              >
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
      </section>
    </main>
  );
}
