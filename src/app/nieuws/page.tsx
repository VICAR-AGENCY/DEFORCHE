import NieuwsGrid from "@/components/ui/NieuwsGrid";
import { getNieuws } from "@/lib/content";

const Bliksem = ({ className = "" }: { className?: string }) => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" className={className}>
    <path d="M6 0L0 8H5L4 14L10 6H5L6 0Z" fill="currentColor"/>
  </svg>
);

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
          <h1 className="text-2xl md:text-4xl font-bold text-(--color-dark)">Ontdek nieuws</h1>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <NieuwsGrid items={nieuws} />
        </div>
      </section>
    </main>
  );
}
