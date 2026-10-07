"use client";

import { useState } from "react";

type Mode = "arch" | "beide" | "ing";

const MODES: { id: Mode; label: string }[] = [
  { id: "arch", label: "Architektur" },
  { id: "beide", label: "Beides" },
  { id: "ing", label: "Ingenieurwesen" },
];

const LEVELS = [
  { top: 7.5, label: "▼ OK Attika" },
  { top: 33, label: "▼ OK FFB 2.OG" },
  { top: 56, label: "▼ OK FFB 1.OG" },
  { top: 78.5, label: "▼ ±0,00 EG" },
];

export default function DisciplineToggle() {
  const [mode, setMode] = useState<Mode>("beide");
  const overlay = mode !== "arch";
  const filter = mode === "arch" ? "none" : mode === "ing" ? "grayscale(1) brightness(0.32)" : "grayscale(0.4) brightness(0.72)";
  const caption = mode === "arch" ? "Ebene A · Rendering" : mode === "ing" ? "Ebene B · Tragwerk" : "Ebene A + B";

  return (
    <div className="flex flex-wrap items-stretch gap-12">
      <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-3">
        <div className="relative aspect-square overflow-hidden border border-night bg-[#0e0f10]">
          <img
            src="/projekte/franzenbrunnen/front.jpg"
            alt="Rendering Am Franzenbrunnen, Saarbrücken"
            className="absolute inset-0 block h-full w-full object-cover transition-[filter] duration-500"
            style={{ filter }}
          />
          {overlay && (
            <div className="absolute inset-0" aria-hidden="true">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" fill="none">
                {[28, 57.5, 87].map((x) => (
                  <line key={x} x1={x} y1="2" x2={x} y2="96" stroke="#8FB0E8" strokeWidth="1" strokeDasharray="6 3 1 3" vectorEffect="non-scaling-stroke" />
                ))}
                <line x1="20" y1="7.5" x2="92" y2="7.5" stroke="#F3F1EC" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                <line x1="20" y1="33" x2="92" y2="33" stroke="#F3F1EC" strokeWidth="1" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
                <line x1="20" y1="56" x2="92" y2="56" stroke="#F3F1EC" strokeWidth="1" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
                <line x1="20" y1="78.5" x2="92" y2="78.5" stroke="#F3F1EC" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                <line x1="28" y1="90" x2="87" y2="90" stroke="#F3F1EC" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                <line x1="27" y1="91.5" x2="29" y2="88.5" stroke="#F3F1EC" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                <line x1="86" y1="91.5" x2="88" y2="88.5" stroke="#F3F1EC" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                {[35, 45, 55, 65, 75].map((x) => (
                  <line key={x} x1={x} y1="1" x2={x} y2="6.5" stroke="#8FB0E8" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                ))}
                <line x1="28" y1="78.5" x2="28" y2="84" stroke="#8FB0E8" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                <line x1="87" y1="78.5" x2="87" y2="84" stroke="#8FB0E8" strokeWidth="3" vectorEffect="non-scaling-stroke" />
              </svg>
              {[
                { x: 28, l: "A" },
                { x: 57.5, l: "B" },
                { x: 87, l: "C" },
              ].map((a) => (
                <span
                  key={a.l}
                  className="absolute top-[1%] grid h-[26px] w-[26px] -translate-x-1/2 place-items-center rounded-full border border-sky bg-ink font-mono text-xs text-sky"
                  style={{ left: `${a.x}%` }}
                >
                  {a.l}
                </span>
              ))}
              {LEVELS.map((lv) => (
                <span
                  key={lv.label}
                  className="absolute left-[1.5%] -translate-y-1/2 bg-ink px-[7px] py-[3px] font-mono text-[11px] text-paper"
                  style={{ top: `${lv.top}%` }}
                >
                  {lv.label}
                </span>
              ))}
              <span className="absolute left-[57.5%] top-[90%] -translate-x-1/2 -translate-y-[120%] bg-ink px-2 py-0.5 font-mono text-xs text-paper">
                7,00
              </span>
              <span className="absolute right-[2%] top-[1.5%] bg-sky px-2 py-[3px] font-mono text-[11px] text-ink">q ↓ Dachlast</span>
              <span className="absolute right-[2%] top-[81%] bg-sky px-2 py-[3px] font-mono text-[11px] text-ink">Lastabtrag → Gründung</span>
            </div>
          )}
        </div>
        <div className="label-sm flex justify-between gap-4 text-[#a9a69f]">
          <span>Projekt Am Franzenbrunnen · Saarbrücken</span>
          <span>{caption}</span>
        </div>
      </div>

      <div className="flex min-w-0 flex-[1_1_380px] flex-col justify-between gap-10">
        <div className="flex flex-col gap-6">
          <div className="label flex items-center gap-3 text-[#a9a69f]">
            <span className="text-sky">A + B</span>
            <span className="h-px w-10 bg-paper" />
            <span>Architektur trifft Ingenieurwesen</span>
          </div>
          <h2 className="display display-75 text-[clamp(36px,4.4vw,58px)] leading-none">
            Ein Gebäude.
            <br />
            <span className="text-sky">Zwei Blickwinkel.</span>
          </h2>
          <p className="text-lg text-stone">
            Der Bauherr sieht die Fassade, das Bauamt die Nachweise. Bei uns entsteht beides am selben Tisch – schalten
            Sie zwischen den Ebenen um.
          </p>
          <div role="group" aria-label="Ansicht wählen" className="flex flex-wrap self-start border border-paper">
            {MODES.map((m) => (
              <button
                key={m.id}
                type="button"
                aria-pressed={mode === m.id}
                onClick={() => setMode(m.id)}
                className={`min-h-11 cursor-pointer px-[18px] py-2.5 font-mono text-xs uppercase tracking-[0.08em] ${
                  mode === m.id ? "bg-paper text-ink" : "bg-transparent text-paper"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className={`flex flex-col gap-1.5 border-t border-night py-5 transition-opacity ${mode === "ing" ? "opacity-35" : ""}`}>
            <span className="label-sm text-sky">A — Architektur · was Sie sehen</span>
            <span>Fassade, Proportion, Material, Licht. Entwurf, Genehmigungsplanung, Bestandsaufnahme und Visualisierung.</span>
          </div>
          <div className={`flex flex-col gap-1.5 border-y border-night py-5 transition-opacity ${mode === "arch" ? "opacity-35" : ""}`}>
            <span className="label-sm text-sky">B — Ingenieurwesen · was dahinter steckt</span>
            <span>Achsen, Geschosshöhen, Lastabtrag. Tragwerksplanung, prüffähige Statik, Flächen- und Kostenermittlung.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
