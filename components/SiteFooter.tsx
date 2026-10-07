import Link from "next/link";
import { CookieSettingsLink } from "./CookieConsent";
import { SITE } from "@/lib/site";

function Cell({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col gap-1.5 border-b border-ink px-5 py-4 ${className}`}>
      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">{label}</span>
      {children}
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto max-w-[1280px] px-4 pb-10 pt-14 md:px-8">
        <div className="grid grid-cols-1 border-2 border-ink sm:grid-cols-2 lg:grid-cols-4 [&>*]:sm:border-r [&>*]:sm:border-ink">
          <Cell label="Planverfasser">
            <span className="display display-75 text-[22px] leading-tight">DEM PLANUNG</span>
            <span className="text-[13px] text-ink-2">Design · Engineering · Management</span>
          </Cell>
          <Cell label="Anschrift">
            <span className="text-[15px]">
              {SITE.street}
              <br />
              {SITE.city}
            </span>
          </Cell>
          <Cell label="Telefon">
            <a href={SITE.phoneFurkan.href} className="text-[15px] no-underline">{SITE.phoneFurkan.label}</a>
            <a href={SITE.phoneMehmet.href} className="text-[15px] no-underline">{SITE.phoneMehmet.label}</a>
          </Cell>
          <Cell label="E-Mail">
            <a href={`mailto:${SITE.email}`} className="text-[15px] no-underline">{SITE.email}</a>
          </Cell>
          <div className="flex items-baseline gap-2.5 border-b border-ink px-5 py-3 font-mono text-xs lg:border-b-0">
            <span className="text-[10px] uppercase tracking-[0.12em] text-muted">Blatt</span>
            <span>Website</span>
          </div>
          <div className="flex items-baseline gap-2.5 border-b border-ink px-5 py-3 font-mono text-xs lg:border-b-0">
            <span className="text-[10px] uppercase tracking-[0.12em] text-muted">Maßstab</span>
            <span>1 : 1</span>
          </div>
          <div className="flex items-baseline gap-2.5 border-b border-ink px-5 py-3 font-mono text-xs sm:border-b-0">
            <span className="text-[10px] uppercase tracking-[0.12em] text-muted">Index</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 px-5 py-3 font-mono text-xs">
            <Link href="/impressum" className="underline">Impressum</Link>
            <Link href="/datenschutz" className="underline">Datenschutz</Link>
            <CookieSettingsLink />
          </div>
        </div>
      </div>
    </footer>
  );
}
