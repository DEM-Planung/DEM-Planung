import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { CtaBand, PageHero, SectionLabel } from "@/components/ui";
import { LEISTUNGEN, REGIONS, getLeistung } from "@/lib/leistungen";
import { BUSINESS_ID } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return LEISTUNGEN.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const l = getLeistung(slug);
  if (!l) return {};
  return {
    title: { absolute: `${l.metaTitle} | DEM Planung` },
    description: l.metaDescription,
    alternates: { canonical: `/leistungen/${l.slug}` },
    openGraph: {
      title: l.metaTitle,
      description: l.metaDescription,
      url: `/leistungen/${l.slug}`,
      images: [l.img],
      locale: "de_DE",
      type: "website",
    },
  };
}

export default async function LeistungPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = getLeistung(slug);
  if (!l) notFound();

  const others = LEISTUNGEN.filter((o) => o.slug !== l.slug);
  const url = `${SITE.url}/leistungen/${l.slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: l.title,
              description: l.metaDescription,
              url,
              provider: { "@id": BUSINESS_ID },
              areaServed: REGIONS.map((name) => ({ "@type": "City", name })),
            },
            {
              "@type": "FAQPage",
              mainEntity: l.faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Startseite", item: SITE.url },
                { "@type": "ListItem", position: 2, name: "Leistungen", item: `${SITE.url}/leistungen` },
                { "@type": "ListItem", position: 3, name: l.nav, item: url },
              ],
            },
          ],
        }}
      />

      <PageHero num={l.pos} label={`Leistungen · ${l.nav}`} title={l.title} intro={l.intro}>
        <nav aria-label="Brotkrumen" className="font-mono text-xs text-muted">
          <Link href="/" className="no-underline hover:text-blue">Startseite</Link>
          {" / "}
          <Link href="/leistungen" className="no-underline hover:text-blue">Leistungen</Link>
          {" / "}
          <span className="text-ink">{l.nav}</span>
        </nav>
      </PageHero>

      {/* Leistungsumfang */}
      <section className="border-b border-ink">
        <div className="mx-auto flex max-w-[1280px] flex-wrap gap-10 px-4 py-20 md:px-8">
          <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-2.5">
            <h2 className="label-sm border-b-2 border-ink pb-2 text-muted">Leistungsumfang</h2>
            {l.items.map((it) => (
              <span key={it} className="border-b border-line py-2">→ {it}</span>
            ))}
          </div>
          <div className="flex min-w-0 flex-[1_1_240px] flex-col gap-2.5">
            <h2 className="label-sm border-b-2 border-ink pb-2 text-muted">Typische Anlässe</h2>
            {l.cases.map((c) => (
              <span key={c} className="border-b border-line py-2">— {c}</span>
            ))}
          </div>
          <figure className="m-0 flex min-w-0 flex-[1_1_320px] flex-col gap-2">
            {l.plan ? (
              <div className="flex aspect-[4/3] items-center justify-center border border-ink bg-white p-3.5">
                <img src={l.img} alt={l.cap} className="block h-full w-full object-contain" loading="lazy" />
              </div>
            ) : (
              <div className="relative aspect-[4/3] overflow-hidden border border-ink bg-card">
                <img src={l.img} alt={l.cap} className="absolute inset-0 block h-full w-full object-cover" loading="lazy" />
              </div>
            )}
            <figcaption className="label-sm text-muted">{l.cap}</figcaption>
          </figure>
        </div>
      </section>

      {/* Textabschnitte */}
      <section className="border-b border-ink">
        <div className="mx-auto flex max-w-[1280px] flex-col px-4 py-20 md:px-8">
          {l.sections.map((s, i) => (
            <div
              key={s.h}
              className="grid grid-cols-1 gap-4 border-t border-line py-10 first:border-t-2 first:border-ink md:grid-cols-[90px_minmax(0,1fr)_minmax(0,1.6fr)] md:gap-8"
            >
              <span className="font-mono text-[13px] text-blue">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="display-80 text-[28px] leading-[1.1]">{s.h}</h2>
              <div className="flex flex-col gap-4 text-ink-2">
                {s.p.map((p) => (
                  <p key={p.slice(0, 40)} className="m-0">{p}</p>
                ))}
              </div>
            </div>
          ))}
          {l.note && (
            <p className="mt-4 bg-sand p-5 font-mono text-[13px] text-ink-2">↳ {l.note}</p>
          )}
        </div>
      </section>

      {/* Region */}
      <section className="border-b border-ink bg-ink text-paper">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-4 py-16 md:px-8">
          <SectionLabel num="Region" light>Tätigkeitsgebiet</SectionLabel>
          <h2 className="display display-75 text-[clamp(32px,4vw,52px)] leading-[0.95]">
            {l.nav} in der Westpfalz und im Saarland
          </h2>
          <p className="max-w-[760px] text-stone">
            Unser Büro sitzt in Landstuhl. Von hier aus betreuen wir Bauherren unter anderem in{" "}
            {REGIONS.slice(1, -1).join(", ")} und {REGIONS[REGIONS.length - 1]} – und darüber hinaus in ganz
            Rheinland-Pfalz, im Saarland, in Baden-Württemberg und Hessen.
          </p>
          <div className="flex flex-wrap gap-2">
            {REGIONS.map((r) => (
              <span key={r} className="border border-night px-2.5 py-1.5 font-mono text-xs text-stone">{r}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-ink">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 py-20 md:px-8">
          <div className="flex flex-col gap-4">
            <SectionLabel num="FAQ">Häufige Fragen</SectionLabel>
            <h2 className="display display-75 text-[clamp(36px,4.6vw,60px)] leading-[0.95]">Gut zu wissen</h2>
          </div>
          <div className="border-t-2 border-ink">
            {l.faq.map((f) => (
              <details key={f.q} className="group border-b border-line py-5">
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 text-lg font-medium">
                  <h3 className="m-0 text-lg font-medium">{f.q}</h3>
                  <span className="font-mono text-blue group-open:hidden">+</span>
                  <span className="hidden font-mono text-blue group-open:inline">−</span>
                </summary>
                <p className="mb-0 mt-3 max-w-[820px] text-ink-2">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Weitere Leistungen */}
      <section className="border-b border-ink">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-4 py-16 md:px-8">
          <span className="label-sm text-muted">Weitere Leistungen</span>
          <div className="grid grid-cols-1 border-t-2 border-ink sm:grid-cols-2 lg:grid-cols-5">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/leistungen/${o.slug}`}
                className="flex flex-col gap-1.5 border-b border-line py-4 pr-4 text-ink no-underline hover:text-blue"
              >
                <span className="font-mono text-xs text-blue">{o.pos}</span>
                <span className="display-80 text-xl leading-tight">{o.nav} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`${l.nav} anfragen`}
        text="Schicken Sie uns Fotos, Pläne oder eine kurze Beschreibung – Sie erhalten eine erste Einschätzung und ein Angebot."
      />
    </>
  );
}
