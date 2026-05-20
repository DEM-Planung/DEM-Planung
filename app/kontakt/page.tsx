import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

export default function KontaktPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#061a33]">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-10 md:px-6 md:py-12 lg:grid-cols-[0.7fr_1.5fr] lg:gap-14">
        <div>
          <div className="text-xs text-slate-500 md:text-sm">
            <Link href="/" className="transition hover:text-[#061a33]">
              Startseite
            </Link>

            <span className="mx-2">›</span>
            <span>Kontakt</span>
          </div>

          <p className="mt-8 text-sm font-medium text-slate-500 md:mt-12 md:text-base">
            Wir sind für Sie da
          </p>

          <h1 className="mt-4 text-3xl font-black leading-tight md:mt-5 md:text-5xl">
            Kontaktieren
            <br />
            Sie uns
          </h1>

          <div className="mt-6 h-px w-14 bg-[#061a33] md:mt-8 md:w-16" />

          <p className="mt-6 text-sm leading-7 text-slate-700 md:mt-8 md:text-lg md:leading-8">
            Sie haben Fragen zu unseren Leistungen oder möchten ein Projekt mit
            uns besprechen? Wir freuen uns auf Ihre Nachricht oder Ihren Anruf.
          </p>

          <div className="mt-9 space-y-6 md:mt-12 md:space-y-8">
            <div className="flex gap-4 md:gap-5">
              <MapPin className="h-6 w-6 shrink-0 md:h-8 md:w-8" />
              <div>
                <p className="text-sm font-black md:text-base">Adresse</p>
                <p className="text-sm text-slate-600 md:text-base">
                  Kolpingstraße 27
                  <br />
                  66849 Landstuhl
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-5">
              <Phone className="h-6 w-6 shrink-0 md:h-8 md:w-8" />
              <div>
                <p className="text-sm font-black md:text-base">Telefon</p>
                <p className="text-sm text-slate-600 md:text-base">
                  +49 176 724 611 07
                </p>
                <p className="text-sm text-slate-600 md:text-base">
                  +49 176 637 814 72
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-5">
              <Mail className="h-6 w-6 shrink-0 md:h-8 md:w-8" />
              <div>
                <p className="text-sm font-black md:text-base">E-Mail</p>
                <p className="break-all text-sm text-slate-600 md:text-base">
                  info@dem-planung.de
                </p>
              </div>
            </div>

            <div className="flex gap-4 md:gap-5">
              <Clock className="h-6 w-6 shrink-0 md:h-8 md:w-8" />
              <div>
                <p className="text-sm font-black md:text-base">
                  Öffnungszeiten
                </p>
                <p className="text-sm text-slate-600 md:text-base">
                  Montag – Freitag: 8:00 – 17:00 Uhr
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-8 md:mb-10">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-500 md:text-sm">
              Kontakt
            </p>

            <h2 className="text-2xl font-black leading-tight text-[#061a33] md:text-4xl">
              Ihr Projekt beginnt mit einem Gespräch.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 md:mt-5 md:text-lg md:leading-8">
              Wir freuen uns darauf,
              <br />
              Ihr Bauvorhaben kennenzulernen.
            </p>
          </div>

          <form
            action="https://formsubmit.co/info@dem-planung.de"
            method="POST"
            className="mt-6 rounded-2xl border border-slate-200 p-5 shadow-sm md:mt-8 md:p-8"
          >
            <input
              type="hidden"
              name="_subject"
              value="Neue Projektanfrage über die Website"
            />

            <input type="hidden" name="_captcha" value="false" />

            <input type="hidden" name="_template" value="table" />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
              <input
                name="name"
                placeholder="Ihr Name"
                className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#061a33] md:px-5 md:py-4 md:text-base"
              />

              <input
                name="email"
                placeholder="Ihre E-Mail"
                className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#061a33] md:px-5 md:py-4 md:text-base"
              />
            </div>

            <input
              name="betreff"
              placeholder="Betreff"
              className="mt-4 w-full rounded-md border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#061a33] md:mt-5 md:px-5 md:py-4 md:text-base"
            />

            <textarea
              name="nachricht"
              placeholder="Ihre Nachricht"
              rows={6}
              className="mt-4 w-full rounded-md border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#061a33] md:mt-5 md:px-5 md:py-4 md:text-base"
            />

            <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-slate-600 md:text-sm">
              <input type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 md:h-5 md:w-5" />
              <span>
                Ich stimme der Verarbeitung meiner Daten gemäß der
                Datenschutzerklärung zu.
              </span>
            </label>

            <button
              type="submit"
              className="mt-7 flex w-full items-center justify-center gap-3 rounded-md bg-[#061a33] px-6 py-4 text-sm text-white transition hover:bg-[#0b2a52] md:ml-auto md:w-auto md:gap-4 md:px-8 md:text-base"
            >
              Nachricht senden <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}