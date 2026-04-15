import NieuwsGrid, { nieuwsData } from "@/components/ui/NieuwsGrid";

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
            <form className="md:col-span-3 flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-(--color-dark)">Voornaam</label>
                  <input
                    type="text"
                    placeholder="Voornaam"
                    className="border border-(--color-gray-mid) px-4 py-3 text-sm focus:outline-none focus:border-(--color-dark) transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-(--color-dark)">Achternaam</label>
                  <input
                    type="text"
                    placeholder="Achternaam"
                    className="border border-(--color-gray-mid) px-4 py-3 text-sm focus:outline-none focus:border-(--color-dark) transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-(--color-dark)">Email</label>
                  <input
                    type="email"
                    placeholder="email@bedrijf.be"
                    className="border border-(--color-gray-mid) px-4 py-3 text-sm focus:outline-none focus:border-(--color-dark) transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-(--color-dark)">Telefoonnummer</label>
                  <input
                    type="tel"
                    placeholder="+32 ..."
                    className="border border-(--color-gray-mid) px-4 py-3 text-sm focus:outline-none focus:border-(--color-dark) transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-(--color-dark)">Bericht</label>
                <textarea
                  rows={5}
                  placeholder="Hoe kunnen wij u helpen?"
                  className="border border-(--color-gray-mid) px-4 py-3 text-sm focus:outline-none focus:border-(--color-dark) transition-colors resize-none"
                />
              </div>
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-0.5 accent-(--color-primary)" />
                  <span className="text-sm text-(--color-gray-text)">
                    Ik ga akkoord met de verwerking van mijn gegevens conform de privacyverklaring van Deforche Schakeltechniek.
                  </span>
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-(--color-primary) text-(--color-dark) font-bold text-sm px-6 py-3 hover:bg-(--color-primary-hover) transition-colors"
                >
                  <Bliksem />
                  Verstuur bericht
                </button>
              </div>
            </form>

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
          <NieuwsGrid items={nieuwsData.slice(0, 3)} />
        </div>
      </section>
    </main>
  );
}
