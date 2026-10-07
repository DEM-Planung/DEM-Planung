# DEM PLANUNG – Website

Website von DEM PLANUNG (www.dem-planung.de), gebaut mit Next.js und Tailwind CSS, gehostet auf Vercel.

## Entwicklung

```bash
npm install
npm run dev
```

Danach http://localhost:3000 öffnen.

## Kontaktformular

Das Formular unter `/kontakt` sendet über `app/api/kontakt/route.ts` eine E-Mail aus dem Microsoft-365-Postfach.

**Empfohlen: Microsoft Graph (ohne Passwort, funktioniert mit MFA).** In Entra ID eine App-Registrierung anlegen,
API-Berechtigung *Microsoft Graph → Anwendungsberechtigungen → Mail.Send* hinzufügen, Administratorzustimmung erteilen
und einen geheimen Clientschlüssel erstellen. Dann in Vercel (Project → Settings → Environment Variables) setzen:

| Variable           | Wert                                                    |
| ------------------ | ------------------------------------------------------- |
| `MS_TENANT_ID`     | Verzeichnis-ID (Mandant) der App-Registrierung          |
| `MS_CLIENT_ID`     | Anwendungs-ID (Client) der App-Registrierung            |
| `MS_CLIENT_SECRET` | Wert des geheimen Clientschlüssels                      |
| `MAIL_FROM`        | Absender-Postfach, z. B. `info@dem-planung.de`          |
| `CONTACT_TO`       | optional – Empfänger, Standard ist `MAIL_FROM`          |

**Fallback: SMTP** mit `SMTP_USER` / `SMTP_PASS` (nur ohne MFA, „Authentifiziertes SMTP“ muss aktiv sein).
Sind die Graph-Variablen gesetzt, wird Graph verwendet. Ohne Konfiguration zeigt das Formular E-Mail und Telefon.

## Inhalte

- Projekte, Leistungen, Ablauf und FAQ: `lib/content.ts`
- Kontaktdaten: `lib/site.ts`
- Bilder: `public/projekte/…` und `public/team/…`
