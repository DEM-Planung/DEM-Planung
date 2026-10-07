"use client";

import Link from "next/link";
import { createContext, useCallback, useContext, useState, useSyncExternalStore } from "react";
import type { ReactNode } from "react";

const STORAGE_KEY = "dem-cookie-consent";

type CookieCtx = { openSettings: () => void };
const Ctx = createContext<CookieCtx>({ openSettings: () => {} });

export function useCookieSettings() {
  return useContext(Ctx);
}

const noopSubscribe = () => () => {};

function readSeen() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) !== null;
  } catch {
    return false;
  }
}

export function CookieProvider({ children }: { children: ReactNode }) {
  // Auf dem Server gilt der Hinweis als „gesehen“, im Browser wird der lokale Speicher gelesen.
  const seen = useSyncExternalStore(noopSubscribe, readSeen, () => true);
  const [manualOpen, setManualOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const open = manualOpen || (!seen && !dismissed);

  const close = useCallback(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ notwendig: true, datum: new Date().toISOString() }),
      );
    } catch {
      /* Speicher nicht verfügbar – Dialog trotzdem schließen */
    }
    setDismissed(true);
    setManualOpen(false);
  }, []);

  const openSettings = useCallback(() => setManualOpen(true), []);

  return (
    <Ctx.Provider value={{ openSettings }}>
      {children}
      {open && <CookieDialog onClose={close} />}
    </Ctx.Provider>
  );
}

function CookieDialog({ onClose }: { onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(14,15,16,0.62)] p-4"
    >
      <div className="max-h-full w-full max-w-[860px] overflow-y-auto border-2 border-ink bg-paper text-ink">
        <div className="label-sm flex justify-between gap-4 bg-ink px-6 py-3 text-paper">
          <span>Blatt C · Cookie-Einstellungen</span>
          <span>DEM PLANUNG</span>
        </div>
        <div className="flex flex-col gap-3 px-6 pb-2 pt-8 md:px-8">
          <h2 id="cookie-title" className="display display-75 text-[clamp(30px,4vw,44px)] leading-none">
            Cookie-Einstellungen<span className="text-blue">.</span>
          </h2>
          <p className="max-w-[640px] text-ink-2">
            Hier sehen Sie, welche Cookies wir verwenden. Ihre Einstellungen können Sie jederzeit
            über „Cookie-Einstellungen“ im Footer ändern. Mehr dazu in unserer{" "}
            <Link href="/datenschutz" onClick={onClose} className="underline">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
        <div className="px-6 py-4 md:px-8">
          <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3 border-t border-ink py-5">
            <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-1.5">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-blue">C–01</span>
                <span className="display-80 text-xl">Notwendige Cookies</span>
              </div>
              <span className="text-[15px] text-ink-2">
                Für den Betrieb der Website technisch erforderlich, z. B. um Ihre Cookie-Auswahl zu
                speichern. Können nicht deaktiviert werden.
              </span>
            </div>
            <span
              role="switch"
              aria-checked="true"
              aria-disabled="true"
              aria-label="Notwendige Cookies (immer aktiv)"
              className="relative mt-1 h-[30px] w-14 flex-none cursor-not-allowed rounded-full border border-ink bg-muted"
            >
              <span className="absolute left-[29px] top-[3px] h-[22px] w-[22px] rounded-full border border-ink bg-white" />
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t-2 border-ink px-6 pb-7 pt-5 md:px-8">
          <span className="flex-[1_1_360px] text-sm text-ink-2">
            Wir verwenden keine Analyse-, Marketing- oder Tracking-Cookies.
          </span>
          <button type="button" onClick={onClose} className="btn border border-ink bg-ink text-paper">
            Verstanden
          </button>
        </div>
        <div className="flex gap-4 px-6 pb-5 font-mono text-xs md:px-8">
          <Link href="/impressum" onClick={onClose}>Impressum</Link>
          <Link href="/datenschutz" onClick={onClose}>Datenschutz</Link>
        </div>
      </div>
    </div>
  );
}

export function OpenCookieSettingsButton() {
  const { openSettings } = useCookieSettings();
  return (
    <button type="button" onClick={openSettings} className="btn self-start bg-ink text-[13px] text-paper">
      Cookie-Einstellungen öffnen
    </button>
  );
}

export function CookieSettingsLink({ className = "" }: { className?: string }) {
  const { openSettings } = useCookieSettings();
  return (
    <button type="button" onClick={openSettings} className={`cursor-pointer underline ${className}`}>
      Cookie-Einstellungen
    </button>
  );
}
