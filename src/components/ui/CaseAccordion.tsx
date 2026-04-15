"use client";

import { useState } from "react";

export default function CaseAccordion({ uitdaging, oplossing }: { uitdaging: string; oplossing: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col mt-4">
      {[
        { label: "De uitdaging", tekst: uitdaging },
        { label: "Onze oplossing", tekst: oplossing },
      ].map((item, i) => (
        <div key={item.label} className="border-t border-(--color-gray-mid)">
          <button
            className="w-full flex items-center justify-between py-4 text-left text-sm font-bold text-(--color-dark) hover:text-(--color-primary) transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {item.label}
            <span className="text-lg leading-none">{openIndex === i ? "−" : "+"}</span>
          </button>
          {openIndex === i && (
            <p className="pb-4 text-sm text-(--color-gray-text) leading-relaxed">
              {item.tekst}
            </p>
          )}
        </div>
      ))}
      <div className="border-t border-(--color-gray-mid)" />
    </div>
  );
}
