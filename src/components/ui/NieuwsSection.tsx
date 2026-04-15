import NieuwsGrid from "@/components/ui/NieuwsGrid";
import { getNieuws } from "@/lib/content";

const Bliksem = ({ className = "" }: { className?: string }) => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" className={className}>
    <path d="M6 0L0 8H5L4 14L10 6H5L6 0Z" fill="currentColor"/>
  </svg>
);

export default function NieuwsSection() {
  const nieuws = getNieuws().slice(0, 3);
  return (
    <section className="px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold text-(--color-gray-text) mb-3 flex items-center gap-1.5">
          <Bliksem className="text-(--color-primary)" /> Nieuws
        </p>
        <h2 className="font-bold text-(--color-dark) mb-8">Ontdek nieuws</h2>
        <NieuwsGrid items={nieuws} />
      </div>
    </section>
  );
}
