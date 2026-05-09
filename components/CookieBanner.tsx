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
    const consent = localStorage.getItem("cookie-consent");

    if (!consent) {
      setShowBanner(true);
    }
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
              der Website erforderlich. Analyse- und Marketing-Cookies setzen wir
              nur mit Ihrer Zustimmung ein.
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

            <p className="mb-5 text-sm leading-relaxed text-slate-600">
              Hier können Sie festlegen, welche Cookies Sie zulassen möchten.
              Notwendige Cookies sind immer aktiv, da sie für den Betrieb der
              Website erforderlich sind.
            </p>

            <div className="space-y-4">
              <div className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-[#061a33]">
                      Notwendige Cookies
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Diese Cookies sind erforderlich, damit die Website korrekt
                      funktioniert.
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="mt-1 h-5 w-5"
                  />
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-[#061a33]">
                      Analyse-Cookies
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Helfen uns zu verstehen, wie Besucher unsere Website
                      nutzen, damit wir sie verbessern können.
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    checked={settings.analytics}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        analytics: e.target.checked,
                      })
                    }
                    className="mt-1 h-5 w-5"
                  />
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-[#061a33]">
                      Marketing-Cookies
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Können verwendet werden, um Inhalte oder Anzeigen
                      relevanter zu gestalten.
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    checked={settings.marketing}
                    onChange={(e) =>
                      setSettings({
                        ...settings,
                        marketing: e.target.checked,
                      })
                    }
                    className="mt-1 h-5 w-5"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                onClick={rejectAll}
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium text-[#061a33] transition hover:bg-slate-100"
              >
                Alle ablehnen
              </button>

              <button
                onClick={saveSelected}
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium text-[#061a33] transition hover:bg-slate-100"
              >
                Auswahl speichern
              </button>

              <button
                onClick={acceptAll}
                className="rounded-lg bg-[#061a33] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#0b2a50]"
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