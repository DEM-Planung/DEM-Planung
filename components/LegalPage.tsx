import type { ReactNode } from "react";
import { SectionLabel } from "./ui";

export type LegalSection = { id: string; title: string; toc: string; body: ReactNode };

export default function LegalPage({ code, title, sections }: { code: string; title: ReactNode; sections: LegalSection[] }) {
  return (
    <>
      <section className="border-b border-ink">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-4 pb-12 pt-16 md:px-8 md:pt-[72px]">
          <SectionLabel num={code}>Rechtliches</SectionLabel>
          <h1 className="display text-[clamp(36px,7vw,104px)] [overflow-wrap:anywhere]">
            {title}
            <span className="text-blue">.</span>
          </h1>
        </div>
      </section>
      <section>
        <div className="mx-auto flex max-w-[1280px] flex-wrap gap-12 px-4 pb-24 pt-14 md:px-8">
          <nav aria-label="Inhalt" className="flex flex-[0_1_240px] flex-col gap-0.5 font-mono text-xs uppercase tracking-[0.06em]">
            {sections.map((s, i) => (
              <a key={s.id} href={`#${s.id}`} className="border-b border-line py-2 no-underline">
                {String(i + 1).padStart(2, "0")} · {s.toc}
              </a>
            ))}
          </nav>
          <div className="flex min-w-0 max-w-[780px] flex-[1_1_560px] flex-col leading-[1.6]">
            {sections.map((s, i) => (
              <article
                key={s.id}
                id={s.id}
                className={`flex scroll-mt-24 flex-col gap-2.5 py-8 [&_a]:underline ${i === 0 ? "pt-0" : "border-t border-ink"}`}
              >
                <h2 className="display display-80 m-0 text-[22px] leading-tight hyphens-auto [overflow-wrap:anywhere] sm:text-[26px]">
                  <span className="text-blue">{String(i + 1).padStart(2, "0")}</span> {s.title}
                </h2>
                {s.body}
              </article>
            ))}
            <p className="mt-2 font-mono text-xs text-muted">Stand: Oktober 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
