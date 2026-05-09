"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");

    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 z-[9999] w-full border-t border-slate-200 bg-white px-5 py-5 shadow-2xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <h2 className="mb-1 text-lg font-semibold text-[#061a33]">
            Cookie-Einstellungen
          </h2>

          <p className="text-sm leading-relaxed text-slate-600">
            Wir verwenden notwendige Cookies, um den Betrieb unserer Website
            sicherzustellen. Optionale Cookies für Analyse oder Marketing setzen
            wir nur mit Ihrer Zustimmung ein.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={rejectCookies}
            className="border border-slate-300 px-5 py-3 text-sm font-medium text-[#061a33] transition hover:bg-slate-100"
          >
            Ablehnen
          </button>

          <button
            onClick={acceptCookies}
            className="bg-[#061a33] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#0b2a50]"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}