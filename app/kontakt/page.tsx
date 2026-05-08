import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-white text-[#061a33]">
    
      <section className="mx-auto max-w-7xl px-6 py-12 grid lg:grid-cols-[0.7fr_1.5fr] gap-14">
        <div>
          <Link href="/" className="hover:text-[#061a33] transition">
  Startseite
</Link>

<span className="mx-2">›</span>

<span>Kontakt</span>

          <p className="mt-12 text-slate-500 font-medium">
            Wir sind für Sie da
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight">
            Kontaktieren
            <br />
            Sie uns
          </h1>

          <div className="mt-8 h-px w- bg-[#061a33]" />

          <p className="mt-8 text-lg leading-8 text-slate-700">
            Sie haben Fragen zu unseren Leistungen oder möchten ein Projekt mit
            uns besprechen? Wir freuen uns auf Ihre Nachricht oder Ihren Anruf.
          </p>

          <div className="mt-12 space-y-8">
            <div className="flex gap-5">
              <MapPin className="w-8 h-8" />
              <div>
                <p className="font-black">Adresse</p>
                <p className="text-slate-600">
                  Kanalstraße 2a
                  <br />
                  66849 Landstuhl
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <Phone className="w-8 h-8" />
              <div>
                <p className="font-black">Telefon</p>
                <p className="text-slate-600">+49 176 724 611 07</p>
                <p className="text-slate-600">+49 176 637 814 72</p>
              </div>
            </div>

            <div className="flex gap-5">
              <Mail className="w-8 h-8" />
              <div>
                <p className="font-black">E-Mail</p>
                <p className="text-slate-600">info@dem-planung.de</p>
              </div>
            </div>

            <div className="flex gap-5">
              <Clock className="w-8 h-8" />
              <div>
                <p className="font-black">Öffnungszeiten</p>
                <p className="text-slate-600">
                  Montag – Freitag: 8:00 – 17:00 Uhr
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-slate-50 p-8 border border-slate-100">
            
          </div>
        </div>

        <div>
          
<div className="mb-10">
  <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-3">
    Kontakt
  </p>

  <h2 className="text-4xl font-black text-[#061a33] leading-tight">
    Ihr Projekt beginnt mit einem Gespräch.
  </h2>

  <p className="mt-5 text-lg leading-8 text-slate-600">
    Wir freuen uns darauf,
    <br />
    Ihr Bauvorhaben kennenzulernen.
  </p>
</div>
          <form className="mt-8 rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                placeholder="Ihr Name"
                className="w-full border border-slate-200 rounded-md px-5 py-4 outline-none focus:border-[#061a33]"
              />

              <input
                placeholder="Ihre E-Mail"
                className="w-full border border-slate-200 rounded-md px-5 py-4 outline-none focus:border-[#061a33]"
              />
            </div>

            <input
              placeholder="Betreff"
              className="mt-5 w-full border border-slate-200 rounded-md px-5 py-4 outline-none focus:border-[#061a33]"
            />

            <textarea
              placeholder="Ihre Nachricht"
              rows={8}
              className="mt-5 w-full border border-slate-200 rounded-md px-5 py-4 outline-none focus:border-[#061a33]"
            />

            <label className="mt-5 flex items-center gap-3 text-sm text-slate-600">
              <input type="checkbox" className="w-5 h-5" />
              Ich stimme der Verarbeitung meiner Daten gemäß der
              Datenschutzerklärung zu.
            </label>

            <button
              type="button"
              className="mt-7 ml-auto flex items-center gap-4 bg-[#061a33] text-white px-8 py-4 rounded-md"
            >
              Nachricht senden <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}