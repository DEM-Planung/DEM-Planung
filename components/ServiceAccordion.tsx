"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/content";

export default function ServiceAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="border-t-2 border-ink">
      <div className="label-sm hidden grid-cols-[90px_minmax(0,1.2fr)_minmax(0,2fr)_150px_44px] gap-4 border-b border-ink py-2.5 text-muted md:grid">
        <span>Pos.</span>
        <span>Leistung</span>
        <span>Beschreibung</span>
        <span>Disziplin</span>
        <span />
      </div>
      {SERVICES.map((s, i) => {
        const isOpen = open === i;
        return (
          <div key={s.pos} className="border-b border-line">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`leistung-${i}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="grid w-full cursor-pointer grid-cols-[1fr_44px] items-baseline gap-x-4 gap-y-2 bg-transparent py-6 text-left text-ink md:grid-cols-[90px_minmax(0,1.2fr)_minmax(0,2fr)_150px_44px]"
            >
              <span className="font-mono text-[13px] text-blue">{s.pos}</span>
              <span
                className={`row-start-1 col-start-2 grid h-9 w-9 place-items-center justify-self-end border border-ink font-mono text-lg md:col-start-5 ${
                  isOpen ? "bg-ink text-paper" : ""
                }`}
                aria-hidden="true"
              >
                {isOpen ? "−" : "+"}
              </span>
              <span className="display-80 col-span-2 text-[28px] leading-[1.1] md:col-span-1 md:col-start-2 md:row-start-1">{s.title}</span>
              <span className="col-span-2 text-ink-2 md:col-span-1 md:col-start-3 md:row-start-1">{s.text}</span>
              <span className="label-sm col-span-2 justify-self-start border border-ink px-2.5 py-1 md:col-span-1 md:col-start-4 md:row-start-1">
                {s.tag}
              </span>
            </button>
            {isOpen && (
              <div id={`leistung-${i}`} className="flex flex-wrap gap-8 pb-10 md:pl-[106px]">
                <div className="flex min-w-0 flex-[1_1_300px] flex-col gap-2.5">
                  <span className="label-sm border-b-2 border-ink pb-2 text-muted">Leistungsumfang</span>
                  {s.items.map((it) => (
                    <span key={it} className="border-b border-line py-1.5">→ {it}</span>
                  ))}
                </div>
                <div className="flex min-w-0 flex-[1_1_220px] flex-col gap-2.5">
                  <span className="label-sm border-b-2 border-ink pb-2 text-muted">Typische Anlässe</span>
                  {s.cases.map((c) => (
                    <span key={c} className="border-b border-line py-1.5">— {c}</span>
                  ))}
                </div>
                <figure className="m-0 flex min-w-0 flex-[1_1_300px] flex-col gap-2">
                  {s.plan ? (
                    <div className="flex aspect-[4/3] items-center justify-center border border-ink bg-white p-3.5">
                      <img src={s.img} alt={s.cap} className="block h-full w-full object-contain" loading="lazy" />
                    </div>
                  ) : (
                    <div className="relative aspect-[4/3] overflow-hidden border border-ink bg-card">
                      <img src={s.img} alt={s.cap} className="absolute inset-0 block h-full w-full object-cover" loading="lazy" />
                    </div>
                  )}
                  <figcaption className="label-sm text-muted">{s.cap}</figcaption>
                </figure>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
