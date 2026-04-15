"use client";

import { useState } from "react";

export default function CaseAccordion({ uitdaging, oplossing }: { uitdaging: string; oplossing: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col mt-4 gap-2">
      {[
        { label: "De uitdaging", tekst: uitdaging },
        { label: "Onze oplossing", tekst: oplossing },
      ].map((item, i) => (
        <div key={item.label} style={{ backgroundColor: "#F4F4F4", borderRadius: "5px" }}>
          <button
            className="w-full flex items-center justify-between px-4 py-3 text-left text-(--color-dark) hover:text-(--color-primary) transition-colors"
            style={{ fontFamily: "var(--font-heading)", fontSize: "16px" }}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {item.label}
            <span className="text-lg leading-none font-sans">{openIndex === i ? "−" : "+"}</span>
          </button>
          {openIndex === i && (
            <p className="px-4 pb-4 text-sm text-(--color-gray-text) leading-relaxed">
              {item.tekst}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
