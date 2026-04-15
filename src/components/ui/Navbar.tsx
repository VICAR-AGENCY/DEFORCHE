"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50" style={{borderBottom: "0.5px solid #D0D0D0"}}>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-[30px]">
        <Link href="/" className="flex-shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/logo.svg"
            alt="Deforche Schakeltechniek"
            width={120}
            height={39}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-[20px] text-(--color-dark)">
          <Link href="/diensten" className="hover:opacity-70 transition-opacity">diensten</Link>
          <Link href="/over-ons" className="hover:opacity-70 transition-opacity">over ons</Link>
          <Link href="/cases" className="hover:opacity-70 transition-opacity">cases</Link>
          <Link href="/nieuws" className="hover:opacity-70 transition-opacity">nieuws</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="flex items-center gap-1.5 bg-(--color-primary) text-(--color-dark) text-sm font-semibold px-4 py-2 hover:bg-(--color-primary-hover) transition-colors"
          >
            <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
              <path d="M6 0L0 8H5L4 14L10 6H5L6 0Z" fill="currentColor" />
            </svg>
            Contact
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Menu openen"
          >
            <span className={`block w-6 h-0.5 bg-(--color-dark) transition-transform duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-(--color-dark) transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-(--color-dark) transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-(--color-dark)">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm font-semibold text-(--color-dark)">
            <Link href="/diensten" onClick={() => setOpen(false)} className="py-2 border-b border-(--color-gray-light)">diensten</Link>
            <Link href="/over-ons" onClick={() => setOpen(false)} className="py-2 border-b border-(--color-gray-light)">over ons</Link>
            <Link href="/cases" onClick={() => setOpen(false)} className="py-2 border-b border-(--color-gray-light)">cases</Link>
            <Link href="/nieuws" onClick={() => setOpen(false)} className="py-2 border-b border-(--color-gray-light)">nieuws</Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 bg-(--color-primary) text-(--color-dark) font-bold text-sm px-5 py-2.5 self-start mt-2"
            >
              <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
                <path d="M6 0L0 8H5L4 14L10 6H5L6 0Z" fill="currentColor" />
              </svg>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
