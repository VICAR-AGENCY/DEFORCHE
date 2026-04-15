import Link from "next/link";
import Image from "next/image";

const Bliksem = () => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-1 text-(--color-primary)">
    <path d="M6 0L0 8H5L4 14L10 6H5L6 0Z" fill="currentColor"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="text-white relative overflow-hidden" style={{background: "linear-gradient(to bottom, #ffffff, #373737)"}}>
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 pt-[200px]">
        <div
          className="relative p-10 flex items-center justify-center rounded-[10px] overflow-hidden min-h-[200px]"
          style={{backgroundColor: "#F3EA0F"}}
        >
          {/* Large lightning overlay */}
          <svg
            viewBox="0 0 10 14"
            fill="none"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-auto"
            style={{color: "#FAF235"}}
          >
            <path d="M6 0L0 8H5L4 14L10 6H5L6 0Z" fill="currentColor"/>
          </svg>
          <h2 className="relative z-10 font-bold text-(--color-dark) leading-snug text-center w-full">
            Precision in every connection,<br />
            because every detail matters
          </h2>
        </div>
      </div>

      {/* Footer body */}
      <div className="max-w-7xl mx-auto px-6 pt-[200px] pb-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {/* Logo + socials */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
          <Image src="/logo.svg" alt="Deforche" width={110} height={36} className="brightness-0 invert" />
          <p className="text-sm text-white mt-2">Volg ons</p>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="text-white hover:opacity-70 transition-opacity">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white hover:opacity-70 transition-opacity">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" aria-label="Facebook" className="text-white hover:opacity-70 transition-opacity">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        {/* Bedrijf */}
        <div>
          <h4 className="text-sm font-bold mb-4 text-white"><Bliksem />Bedrijf</h4>
          <ul className="flex flex-col gap-2 text-sm text-white">
            <li><Link href="/over-ons" className="hover:opacity-70 transition-opacity">Over ons</Link></li>
            <li><Link href="/cases" className="hover:opacity-70 transition-opacity">Cases</Link></li>
            <li><Link href="/nieuws" className="hover:opacity-70 transition-opacity">Nieuws</Link></li>
            <li><Link href="/contact" className="hover:opacity-70 transition-opacity">Contact</Link></li>
          </ul>
        </div>

        {/* Diensten */}
        <div>
          <h4 className="text-sm font-bold mb-4 text-white"><Bliksem />Diensten</h4>
          <ul className="flex flex-col gap-2 text-sm text-white">
            <li><Link href="/diensten" className="hover:opacity-70 transition-opacity">Hardware Engineering</Link></li>
            <li><Link href="/diensten" className="hover:opacity-70 transition-opacity">Bordenbouw / Assemblage</Link></li>
            <li><Link href="/diensten" className="hover:opacity-70 transition-opacity">Hoog- en Middenspanning</Link></li>
            <li><Link href="/diensten" className="hover:opacity-70 transition-opacity">Testing & Indienststelling</Link></li>
            <li><Link href="/diensten" className="hover:opacity-70 transition-opacity">Troubleshooting en Onderhoud</Link></li>
          </ul>
        </div>

        {/* Contactgegevens */}
        <div>
          <h4 className="text-sm font-bold mb-4 text-white"><Bliksem />Contactgegevens</h4>
          <ul className="flex flex-col gap-2 text-sm text-white">
            <li>De Leiteweg 5A,<br />8020 Ruddervoorde</li>
            <li><a href="mailto:renaat@schakeltechniek.be" className="hover:opacity-70 transition-opacity">renaat@schakeltechniek.be</a></li>
            <li><a href="tel:+3249628641" className="hover:opacity-70 transition-opacity">+32 496 28 64 15</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 max-w-7xl mx-auto px-6 py-[200px] flex flex-wrap gap-4 items-center justify-between text-xs text-white">
        <div className="flex gap-4">
          <Link href="#" className="hover:opacity-70 transition-opacity">Privacy policy</Link>
          <Link href="#" className="hover:opacity-70 transition-opacity">Cookie policy</Link>
        </div>
        <p>© 2026 Deforche Schakeltechniek | All rights reserved</p>
        <p>Made by VICAR Agency</p>
      </div>
    </footer>
  );
}
