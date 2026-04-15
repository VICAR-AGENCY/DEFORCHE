"use client";

import { useState, useEffect, useRef } from "react";
import type { NieuwsSection } from "@/lib/content";

const Bliksem = ({ className = "" }: { className?: string }) => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" className={className}>
    <path d="M6 0L0 8H5L4 14L10 6H5L6 0Z" fill="currentColor"/>
  </svg>
);

type Props = {
  anchors: string[];
  sections: NieuwsSection[];
};

function anchorId(anchor: string, i: number) {
  return `anchor-${anchor?.toLowerCase().replace(/ /g, "-") ?? i}`;
}

export default function NieuwsDetailSidebar({ anchors, sections }: Props) {
  const [activeId, setActiveId] = useState<string>(anchorId(anchors[0], 0));
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    anchors.forEach((anchor, i) => {
      const el = document.getElementById(anchorId(anchor, i));
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, [anchors]);

  return (
    <div className="max-w-7xl mx-auto flex gap-8 md:gap-16 items-start">
      {/* Sticky sidebar */}
      <aside className="hidden md:flex flex-col w-48 shrink-0 sticky top-[110px] self-start">
        {anchors.map((anchor, i) => (
          <a
            key={anchor}
            href={`#${anchorId(anchor, i)}`}
            className={`flex items-start gap-2 py-3 text-sm transition-colors ${
              activeId === anchorId(anchor, i)
                ? "text-(--color-dark)"
                : "text-[#C0C0C0] hover:text-(--color-dark)"
            }`}
          >
            <Bliksem
              className={`mt-0.5 shrink-0 ${
                activeId === anchorId(anchor, i) ? "text-(--color-primary)" : "text-[#C0C0C0]"
              }`}
            />
            {anchor}
          </a>
        ))}
      </aside>

      {/* Artikel secties */}
      <div className="flex flex-col flex-1">
        {sections.map((s, i) => (
          <div
            key={i}
            id={anchorId(anchors[i], i)}
            style={{ scrollMarginTop: "110px" }}
            className="border-t border-[#D0D0D0] py-10"
          >
            <h2 className="font-bold text-(--color-dark) leading-snug mb-4">{s.titel}</h2>
            <p className="text-(--color-gray-text) text-sm leading-relaxed">{s.tekst}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
