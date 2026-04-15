import Image from "next/image";
import Link from "next/link";
import { getNieuws, getNieuwsBySlug } from "@/lib/content";
import { notFound } from "next/navigation";

const Bliksem = ({ className = "" }: { className?: string }) => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" className={className}>
    <path d="M6 0L0 8H5L4 14L10 6H5L6 0Z" fill="currentColor"/>
  </svg>
);

export function generateStaticParams() {
  return getNieuws().map((item) => ({ slug: item.slug }));
}

export default async function NieuwsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNieuwsBySlug(slug);
  if (!item) notFound();

  return (
    <main>
      {/* ── HERO: foto links, tekst rechts ── */}
      <section className="px-6">
        <div className="grid md:grid-cols-2 max-w-7xl mx-auto gap-6 md:gap-12 items-center">
          <div className="relative h-56 md:h-80">
            <Image src={item.image} alt={item.titel} fill className="object-cover" priority />
          </div>
          <div>
            <p className="text-xs font-bold text-(--color-gray-text) mb-3 flex items-center gap-1.5">
              <Bliksem className="text-(--color-primary)" /> Nieuws
            </p>
            <h1 className="font-bold text-(--color-dark) leading-snug mb-4">
              {item.titel}
            </h1>
            {item.intro && (
              <p className="text-(--color-gray-text) text-sm leading-relaxed mb-6">
                {item.intro}
              </p>
            )}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-(--color-dark) text-(--color-dark) font-bold text-sm px-5 py-2.5 hover:bg-(--color-gray-light) transition-colors"
            >
              Contacteer ons
            </Link>
          </div>
        </div>
      </section>

      {/* ── SIDEBAR + SECTIES ── */}
      {item.sections && item.sections.length > 0 && (
        <section className="px-6">
          <div className="max-w-7xl mx-auto flex gap-8 md:gap-16 items-start">
            {/* Sticky sidebar */}
            {item.anchors && item.anchors.length > 0 && (
              <aside className="hidden md:flex flex-col w-48 shrink-0 sticky top-[calc(50vh-150px)] self-start">
                {item.anchors.map((anchor) => (
                  <a
                    key={anchor}
                    href={`#anchor-${anchor.toLowerCase().replace(/ /g, "-")}`}
                    className="flex items-start gap-2 py-3 text-sm text-[#C0C0C0] hover:text-(--color-dark) transition-colors"
                  >
                    <Bliksem className="mt-0.5 shrink-0 text-[#C0C0C0]" />
                    {anchor}
                  </a>
                ))}
              </aside>
            )}

            {/* Artikel secties */}
            <div className="flex flex-col flex-1">
              {item.sections.map((s, i) => (
                <div
                  key={i}
                  id={`anchor-${item.anchors?.[i]?.toLowerCase().replace(/ /g, "-") ?? i}`}
                  className="border-t border-[#D0D0D0] py-10"
                >
                  <h2 className="font-bold text-(--color-dark) leading-snug mb-4">{s.titel}</h2>
                  <p className="text-(--color-gray-text) text-sm leading-relaxed">{s.tekst}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
