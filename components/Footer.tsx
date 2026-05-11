"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm text-white/80">
      <Link href="/kontakt" className="transition hover:text-white">
        Kontakt
      </Link>

      <span>|</span>

      <Link
        href="/datenschutz"
        className="transition hover:text-white"
      >
        Datenschutz
      </Link>

      <span>|</span>

      <Link href="/impressum" className="transition hover:text-white">
        Impressum
      </Link>

      <span>|</span>

      <button
        type="button"
        onClick={() =>
          window.dispatchEvent(new Event("open-cookie-settings"))
        }
        className="transition hover:text-white"
      >
        Cookie-Einstellungen
      </button>
    </div>
  );
}
