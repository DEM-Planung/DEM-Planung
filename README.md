# DEM PLANUNG – Website

Website von DEM PLANUNG (www.dem-planung.de), gebaut mit Next.js und Tailwind CSS, gehostet auf Vercel.

## Entwicklung

```bash
npm install
npm run dev
```

Danach http://localhost:3000 öffnen.

## Kontaktformular

Das Formular unter `/kontakt` sendet über `app/api/kontakt/route.ts` eine E-Mail per Microsoft 365 (SMTP).
Damit der Versand funktioniert, müssen in Vercel unter **Project → Settings → Environment Variables** gesetzt sein:

| Variable     | Wert                                                        |
| ------------ | ----------------------------------------------------------- |
| `SMTP_USER`  | Postfach, über das gesendet wird, z. B. `info@dem-planung.de` |
| `SMTP_PASS`  | Passwort bzw. App-Kennwort dieses Postfachs                  |
| `CONTACT_TO` | optional – Empfänger, Standard ist `SMTP_USER`              |

Im Microsoft-365-Admin-Center muss für das Postfach „Authentifiziertes SMTP“ aktiviert sein.
Ohne diese Variablen zeigt das Formular einen Hinweis mit E-Mail-Adresse und Telefonnummer.

## Inhalte

- Projekte, Leistungen, Ablauf und FAQ: `lib/content.ts`
- Kontaktdaten: `lib/site.ts`
- Bilder: `public/projekte/…` und `public/team/…`
