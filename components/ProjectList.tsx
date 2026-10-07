"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PROJECTS, type GalleryImage, type Project } from "@/lib/content";

const CATS = ["Alle", "Quartiersentwicklung", "Wohnungsbau", "Bestandssanierung"] as const;

function galleryOf(p: Project): GalleryImage[] {
  return [{ src: p.img, cap: `Abb. 1 · ${p.cap1}`, photo: true }, ...p.gallery];
}

export default function ProjectList() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("Alle");
  const [lb, setLb] = useState<{ num: string; i: number } | null>(null);
  const shown = PROJECTS.filter((p) => cat === "Alle" || p.cat === cat);

  return (
    <>
      <div className="mx-auto max-w-[1280px] px-4 pb-10 md:px-8">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Projekte filtern">
          {CATS.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={cat === c}
              onClick={() => setCat(c)}
              className={`min-h-11 cursor-pointer border border-ink px-[18px] py-2.5 font-mono text-xs uppercase tracking-[0.08em] ${
                cat === c ? "bg-ink text-paper" : "bg-transparent text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {shown.map((p) => (
        <section key={p.num} id={p.slug} className="border-t border-ink">
          <div className="mx-auto flex max-w-[1280px] flex-wrap gap-10 px-4 py-[72px] md:px-8">
            <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-5">
              <span className="font-mono text-[13px] text-blue">{p.num}</span>
              <h2 className="display display-75 text-[clamp(36px,4vw,52px)] leading-[0.95]">{p.name}</h2>
              <p className="text-ink-2">{p.text}</p>
              <dl className="m-0 flex flex-col border-t-2 border-ink">
                {[
                  ["Ort", p.place],
                  ["Projektart", p.type],
                  ["Leistungen", p.lph],
                  ["Gezeigt", p.shown],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[120px_minmax(0,1fr)] gap-3 border-b border-line py-2.5">
                    <dt className="label-sm text-muted">{k}</dt>
                    <dd className={`m-0 ${k === "Gezeigt" ? "font-mono text-[13px]" : ""}`}>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex min-w-0 flex-[2_1_560px] flex-col gap-4">
              <div className="relative aspect-[16/10] overflow-hidden border border-ink bg-card">
                <img src={p.img} alt={`${p.name} – ${p.cap1}`} className="absolute inset-0 block h-full w-full object-cover" />
                <span className="label-sm absolute bottom-0 left-0 bg-ink px-3.5 py-2.5 text-paper">Abb. 1 · {p.cap1}</span>
                <span className="label-sm absolute right-0 top-0 border-b border-l border-ink bg-paper px-3 py-2">
                  ⤢ Galerie · {p.gallery.length + 1} Bilder
                </span>
                <button
                  type="button"
                  aria-label={`Galerie ${p.name} öffnen`}
                  onClick={() => setLb({ num: p.num, i: 0 })}
                  className="absolute inset-0 h-full w-full cursor-zoom-in bg-transparent"
                />
              </div>
              {p.gallery.length > 0 && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {p.gallery.map((g, j) => (
                    <div key={g.src} className={`flex flex-col gap-2 ${g.wide ? "sm:col-span-2 lg:col-span-3" : ""}`}>
                      <div
                        className={`relative border border-ink ${
                          g.wide
                            ? "bg-white p-2.5"
                            : g.photo
                              ? "aspect-[4/3] overflow-hidden bg-card"
                              : "flex aspect-[4/3] items-center justify-center bg-white p-3.5"
                        }`}
                      >
                        <img
                          src={g.src}
                          alt={g.cap}
                          loading="lazy"
                          className={
                            g.wide
                              ? "block h-auto w-full"
                              : g.photo
                                ? "absolute inset-0 block h-full w-full object-cover"
                                : "block h-full w-full object-contain"
                          }
                        />
                        <button
                          type="button"
                          aria-label={`${g.cap} vergrößern`}
                          onClick={() => setLb({ num: p.num, i: j + 1 })}
                          className="absolute inset-0 h-full w-full cursor-zoom-in bg-transparent"
                        />
                      </div>
                      <span className="label-sm text-muted">{g.cap}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {lb && <Lightbox project={PROJECTS.find((p) => p.num === lb.num)!} index={lb.i} onIndex={(i) => setLb({ num: lb.num, i })} onClose={() => setLb(null)} />}
    </>
  );
}

function Lightbox({
  project,
  index,
  onIndex,
  onClose,
}: {
  project: Project;
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
}) {
  const gallery = galleryOf(project);
  const cur = gallery[index];
  const [zoom, setZoom] = useState(1);
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (d: number) => {
      setZoom(1);
      onIndex((index + d + gallery.length) % gallery.length);
    },
    [index, gallery.length, onIndex],
  );

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [go, onClose]);

  const clampZoom = (z: number) => setZoom(Math.min(4, Math.max(1, z)));
  const planBg = cur.photo ? "" : " bg-white p-4";

  return (
    <div role="dialog" aria-modal="true" aria-label={`Bildergalerie ${project.name}`} className="fixed inset-0 z-[200] flex flex-col bg-[#0e0f10] text-paper">
      <div className="label-sm flex flex-wrap items-center justify-between gap-4 border-b border-night px-4 py-3 text-xs md:px-6">
        <span>
          <span className="text-sky">{project.num}</span> · {project.name}
        </span>
        <span className="flex items-center gap-4">
          <span role="group" aria-label="Zoom" className="flex items-center border border-paper">
            <button type="button" aria-label="Verkleinern" onClick={() => clampZoom(zoom - 0.5)} className="h-11 w-11 cursor-pointer border-r border-paper text-lg">−</button>
            <span className="min-w-16 text-center">{Math.round(zoom * 100)} %</span>
            <button type="button" aria-label="Vergrößern" onClick={() => clampZoom(zoom + 0.5)} className="h-11 w-11 cursor-pointer border-l border-paper text-lg">+</button>
          </span>
          <span>
            {index + 1} / {gallery.length}
          </span>
          <button type="button" aria-label="Galerie schließen" onClick={onClose} className="h-11 w-11 cursor-pointer border border-paper text-lg">✕</button>
        </span>
      </div>

      <div
        className="relative flex min-h-0 flex-1 px-4 py-6 md:px-[88px]"
        onTouchStart={(e) => {
          touchX.current = e.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(e) => {
          const start = touchX.current;
          touchX.current = null;
          if (zoom > 1 || start === null) return;
          const dx = (e.changedTouches[0]?.clientX ?? start) - start;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        }}
      >
        <div
          className={`min-h-0 min-w-0 flex-1 ${zoom > 1 ? "overflow-auto text-center" : "flex items-center justify-center overflow-hidden"}`}
        >
          <img
            src={cur.src}
            alt={cur.cap}
            onClick={() => clampZoom(zoom > 1 ? 1 : 2)}
            className={
              zoom > 1
                ? `inline-block h-auto max-w-none cursor-zoom-out${planBg}`
                : `block max-h-full max-w-full cursor-zoom-in object-contain shadow-[0_0_0_1px_#3a3d41]${planBg}`
            }
            style={zoom > 1 ? { width: `${zoom * 100}%` } : undefined}
          />
        </div>
        <button
          type="button"
          aria-label="Vorheriges Bild"
          onClick={() => go(-1)}
          className="absolute left-2 top-1/2 h-[52px] w-[52px] -translate-y-1/2 cursor-pointer border border-paper bg-ink font-mono text-xl md:left-5"
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Nächstes Bild"
          onClick={() => go(1)}
          className="absolute right-2 top-1/2 h-[52px] w-[52px] -translate-y-1/2 cursor-pointer border border-paper bg-ink font-mono text-xl md:right-5"
        >
          →
        </button>
      </div>

      <div className="label-sm px-6 pb-1 pt-3 text-center text-stone">{cur.cap}</div>
      <div className="flex justify-start gap-2 overflow-x-auto px-6 pb-5 pt-3 md:justify-center">
        {gallery.map((g, j) => (
          <button
            key={g.src}
            type="button"
            aria-label={g.cap}
            onClick={() => {
              setZoom(1);
              onIndex(j);
            }}
            className={`h-14 w-[76px] flex-none cursor-pointer overflow-hidden border-2 bg-white ${
              j === index ? "border-sky opacity-100" : "border-night opacity-60"
            }`}
          >
            <img src={g.src} alt="" className="block h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
