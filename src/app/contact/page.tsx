import type { Metadata } from "next";
import NieuwsGrid from "@/components/ui/NieuwsGrid";
import { getNieuws } from "@/lib/content";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met Deforche Schakeltechniek voor een offerte of vrijblijvend advies over uw elektrisch project.",
};

const Bliksem = ({ className = "" }: { className?: string }) => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" className={className}>
    <path d="M6 0L0 8H5L4 14L10 6H5L6 0Z" fill="currentColor"/>
  </svg>
);

export default function ContactPage() {
  return (
    <main>
      {/* ── FORMULIER + KAART ── */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold text-(--color-gray-text) mb-3 flex items-center gap-1.5">
            <Bliksem className="text-(--color-primary)" /> Contact
          </p>
          <h1 className="font-bold text-(--color-dark) mb-10">Contacteer ons</h1>

          <div className="grid md:grid-cols-5 gap-8 md:gap-10">
            {/* Formulier — 60% */}
            <div className="md:col-span-3">
              <ContactForm />
            </div>

            {/* Kaart — 40% */}
            <div className="md:col-span-2 h-64 md:h-auto min-h-64 overflow-hidden">
              <iframe
                title="Deforche locatie"
                src="https://maps.google.com/maps?q=De+Leiteweg+5A,+8020+Ruddervoorde&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "256px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── NIEUWS ── */}
      <section className="bg-(--color-gray-light) px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold text-(--color-gray-text) mb-3 flex items-center gap-1.5">
            <Bliksem className="text-(--color-primary)" /> Nieuws
          </p>
          <h2 className="font-bold text-(--color-dark) mb-8">Ontdek nieuws</h2>
          <NieuwsGrid items={getNieuws().slice(0, 3)} />
        </div>
      </section>
    </main>
  );
}
