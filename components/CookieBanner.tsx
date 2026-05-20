"use client";

import { useEffect, useState } from "react";

type CookieSettings = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const openSettings = () => {
      setShowBanner(true);
      setShowSettings(true);
    };

    window.addEventListener("open-cookie-settings", openSettings);

    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      window.setTimeout(() => {
        setShowBanner(true);
      }, 0);
    }

    return () => {
      window.removeEventListener("open-cookie-settings", openSettings);
    };
  }, []);

  const saveConsent = (newSettings: CookieSettings) => {
    localStorage.setItem("cookie-consent", JSON.stringify(newSettings));
    setSettings(newSettings);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectAll = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const saveSelected = () => {
    saveConsent(settings);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end bg-black/40 px-4 py-4 md:items-center md:justify-center">
      <div className="w-full max-w-3xl rounded-2xl bg-white p-6 shadow-2xl">
        {!showSettings ? (
          <>
            <h2 className="mb-3 text-xl font-semibold text-[#061a33]">
              Cookie-Einstellungen
            </h2>

            <p className="mb-5 text-sm leading-relaxed text-slate-600">
              Wir verwenden Cookies, um unsere Website technisch bereitzustellen
              und optional zu verbessern. Notwendige Cookies sind für den Betrieb
              der Website erforderlich.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                onClick={() => setShowSettings(true)}
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium text-[#061a33] transition hover:bg-slate-100"
              >
                Einstellungen
              </button>

              <button
                onClick={rejectAll}
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium text-[#061a33] transition hover:bg-slate-100"
              >
                Alle ablehnen
              </button>

              <button
                onClick={acceptAll}
                className="rounded-lg bg-[#061a33] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#0b2a50]"
              >
                Alle akzeptieren
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="mb-3 text-xl font-semibold text-[#061a33]">
              Individuelle Cookie-Auswahl
            </h2>

            <div className="space-y-4">
              <label className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
                <span>Analyse-Cookies</span>
                <input
                  type="checkbox"
                  checked={settings.analytics}
                  onChange={(e) =>
                    setSettings({ ...settings, analytics: e.target.checked })
                  }
                />
              </label>

              <label className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
                <span>Marketing-Cookies</span>
                <input
                  type="checkbox"
                  checked={settings.marketing}
                  onChange={(e) =>
                    setSettings({ ...settings, marketing: e.target.checked })
                  }
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button onClick={rejectAll} className="rounded-lg border px-5 py-3">
                Alle ablehnen
              </button>

              <button
                onClick={saveSelected}
                className="rounded-lg border px-5 py-3"
              >
                Auswahl speichern
              </button>

              <button
                onClick={acceptAll}
                className="rounded-lg bg-[#061a33] px-5 py-3 text-white"
              >
                Alle akzeptieren
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}