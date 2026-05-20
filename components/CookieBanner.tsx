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
      window.removeEventListener(
        "open-cookie-settings",
        openSettings
      );
    };
  }, []);

  const saveConsent = (newSettings: CookieSettings) => {
    localStorage.setItem(
      "cookie-consent",
      JSON.stringify(newSettings)
    );

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
    <div className="fixed inset-0 z-[9999] flex items-end bg-black/50 px-4 py-4 md:items-center md:justify-center">
      <div className="w-full max-w-4xl rounded-3xl bg-white p-7 shadow-2xl">
        {!showSettings ? (
          <>
            <h2 className="mb-4 text-2xl font-semibold text-[#061a33]">
              Cookie-Einstellungen
            </h2>

            <p className="mb-6 text-sm leading-relaxed text-slate-600">
              Wir verwenden Cookies, um unsere Website technisch
              bereitzustellen, Inhalte zu optimieren und die Nutzung
              unserer Website anonym auszuwerten.
            </p>

            <p className="mb-8 text-sm leading-relaxed text-slate-500">
              Notwendige Cookies sind für den Betrieb der Website
              erforderlich. Analyse- und Marketing-Cookies helfen uns
              dabei, unsere Inhalte und Dienstleistungen kontinuierlich
              zu verbessern.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                onClick={() => setShowSettings(true)}
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-[#061a33] transition hover:bg-slate-100"
              >
                Einstellungen
              </button>

              <button
                onClick={rejectAll}
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-[#061a33] transition hover:bg-slate-100"
              >
                Alle ablehnen
              </button>

              <button
                onClick={acceptAll}
                className="rounded-xl bg-[#061a33] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#0b2a50]"
              >
                Alle akzeptieren
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="mb-4 text-2xl font-semibold text-[#061a33]">
              Individuelle Cookie-Auswahl
            </h2>

            <p className="mb-8 text-sm leading-relaxed text-slate-600">
              Hier können Sie individuell festlegen, welche Cookies
              verwendet werden dürfen.
            </p>

            <div className="space-y-5">
              {/* Analyse */}
              <label className="flex items-start justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="max-w-[85%]">
                  <p className="text-base font-semibold text-[#061a33]">
                    Analyse-Cookies
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Analyse-Cookies helfen uns dabei zu verstehen,
                    wie Besucher unsere Website nutzen. Dadurch
                    können wir Inhalte, Benutzerfreundlichkeit und
                    Performance kontinuierlich verbessern.
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    Die Daten werden anonym verarbeitet und
                    ausschließlich zur statistischen Auswertung
                    verwendet.
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
                  className="mt-1 h-5 w-5 accent-[#061a33]"
                />
              </label>

              {/* Marketing */}
              <label className="flex items-start justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="max-w-[85%]">
                  <p className="text-base font-semibold text-[#061a33]">
                    Marketing-Cookies
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Marketing-Cookies ermöglichen personalisierte
                    Inhalte und helfen uns dabei, unsere
                    Dienstleistungen zielgerichtet darzustellen.
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    Diese Cookies können verwendet werden, um
                    relevante Inhalte und Angebote auf unserer
                    Website oder externen Plattformen anzuzeigen.
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
                  className="mt-1 h-5 w-5 accent-[#061a33]"
                />
              </label>

              {/* Notwendig */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-base font-semibold text-[#061a33]">
                  Notwendige Cookies
                </p>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Diese Cookies sind für den Betrieb der Website
                  technisch notwendig und können nicht deaktiviert
                  werden.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                onClick={rejectAll}
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-[#061a33]"
              >
                Alle ablehnen
              </button>

              <button
                onClick={saveSelected}
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-[#061a33]"
              >
                Auswahl speichern
              </button>

              <button
                onClick={acceptAll}
                className="rounded-xl bg-[#061a33] px-5 py-3 text-sm font-medium text-white"
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