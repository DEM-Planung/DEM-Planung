"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        className="flex h-11 w-11 items-center justify-center border border-slate-300 bg-white text-[#061a33]"
        aria-label="Menü öffnen"
      >
        <Menu size={24} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/70">
          <div className="absolute right-0 top-0 h-full w-[82%] bg-white px-8 py-8 shadow-xl">
            <div className="mb-10 flex items-center justify-between">
              <img src="/logo.png" alt="DEM Planung" className="h-24 w-auto" />

              <button
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center border border-slate-300 text-[#061a33]"
                aria-label="Menü schließen"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-lg tracking-[0.12em] text-[#061a33]">
              <Link onClick={() => setOpen(false)} href="/">
                Home
              </Link>

              <Link onClick={() => setOpen(false)} href="/leistungen">
                Leistungen
              </Link>

              <div className="ml-4 flex flex-col gap-3 text-sm tracking-[0.08em] text-slate-500">
                <Link onClick={() => setOpen(false)} href="/leistungen?tab=planung">
                  Bauantrag & Planung
                </Link>

                <Link onClick={() => setOpen(false)} href="/leistungen?tab=statik">
                  Statik
                </Link>

                <Link onClick={() => setOpen(false)} href="/leistungen?tab=bestand">
                  Bestandsaufnahme
                </Link>

                <Link onClick={() => setOpen(false)} href="/leistungen?tab=flaechen">
                  Flächen & Kosten
                </Link>

                <Link onClick={() => setOpen(false)} href="/leistungen?tab=renderings">
                  Renderings
                </Link>
              </div>

              <Link onClick={() => setOpen(false)} href="/projekte">
                Projekte
              </Link>

              <Link onClick={() => setOpen(false)} href="/ueber-uns">
                Über uns
              </Link>

              <Link onClick={() => setOpen(false)} href="/kontakt">
                Kontakt
              </Link>

              <Link
                onClick={() => setOpen(false)}
                href="/kontakt"
                className="mt-4 rounded-xl bg-[#061a33] px-6 py-4 text-center text-base text-white"
              >
                Projekt anfragen
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}