"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, SHEETS } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="border-b border-line font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
        <div className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-x-6 gap-y-2 px-4 py-2 md:px-8">
          <span>Büro Landstuhl · 49,41° N · 7,57° E</span>
          <span>{SHEETS[pathname] ?? "DEM PLANUNG"}</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-ink bg-paper">
        <nav
          aria-label="Hauptnavigation"
          className="mx-auto flex max-w-[1280px] items-center justify-between gap-8 px-4 py-4 md:px-8"
        >
          <Link href="/" className="flex items-center" aria-label="DEM PLANUNG – Startseite">
            <img src="/logo.png" alt="DEM PLANUNG – Design · Engineering · Management" className="block h-10 w-auto md:h-11" />
          </Link>

          <div className="hidden items-center gap-7 text-[15px] font-medium lg:flex">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`py-2.5 no-underline ${active ? "border-b-2 border-blue text-blue" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/kontakt"
              className="bg-ink px-5 py-3 font-mono text-[13px] uppercase tracking-[0.06em] text-paper hover:text-sky"
            >
              Projekt anfragen →
            </Link>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center border border-ink lg:hidden"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="font-mono text-lg">{menuOpen ? "✕" : "≡"}</span>
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-ink bg-paper lg:hidden">
            <div className="mx-auto flex max-w-[1280px] flex-col px-4 py-2">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`display-80 border-b border-line py-4 text-2xl uppercase ${pathname === item.href ? "text-blue" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/kontakt" onClick={closeMenu} className="btn my-4 bg-ink text-paper">
                Projekt anfragen →
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
