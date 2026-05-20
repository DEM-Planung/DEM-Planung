"use client";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new Event("open-cookie-settings"))
      }
      className="transition hover:text-white"
    >
      Cookie-Einstellungen
    </button>
  );
}