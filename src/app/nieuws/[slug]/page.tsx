import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getNieuws, getNieuwsBySlug } from "@/lib/content";
import { notFound } from "next/navigation";
import NieuwsDetailSidebar from "@/components/ui/NieuwsDetailSidebar";

const Bliksem = ({ className = "" }: { className?: string }) => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" className={className}>
    <path d="M6 0L0 8H5L4 14L10 6H5L6 0Z" fill="currentColor"/>
  </svg>
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getNieuwsBySlug(slug);
  if (!item) return {};
  return {
    title: item.titel,
    description: item.intro ?? undefined,
    openGraph: {
      title: item.titel,
      description: item.intro ?? undefined,
      images: item.image ? [{ url: item.image }] : [],
      type: "article",
    },
  };
}

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
          <NieuwsDetailSidebar
            anchors={item.anchors ?? []}
            sections={item.sections}
          />
        </section>
      )}
    </main>
  );
}
