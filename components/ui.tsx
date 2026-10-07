import Link from "next/link";
import type { ReactNode } from "react";

export function SectionLabel({
  num,
  children,
  light = false,
}: {
  num: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`label flex items-center gap-3 ${light ? "text-white/85" : "text-muted"}`}
    >
      <span className={`font-medium ${light ? "text-sky" : "text-blue"}`}>{num}</span>
      <span className={`h-px w-10 ${light ? "bg-white" : "bg-ink"}`} />
      <span>{children}</span>
    </div>
  );
}

export function PageHero({
  num,
  label,
  title,
  intro,
  children,
}: {
  num: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="bg-raster border-b border-ink">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-7 px-4 pb-14 pt-16 md:px-8 md:pt-[72px]">
        <SectionLabel num={num}>{label}</SectionLabel>
        <h1 className="display text-[clamp(48px,7.4vw,112px)]">
          {title}
          <span className="text-blue">.</span>
        </h1>
        {intro && <p className="max-w-[680px] text-lg text-ink-2">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export function CtaBand({
  title,
  text,
  button = "Projekt anfragen →",
  href = "/kontakt",
}: {
  title: string;
  text?: string;
  button?: string;
  href?: string;
}) {
  return (
    <section className="bg-stone text-ink">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-8 px-4 py-[72px] md:px-8">
        <div className="flex max-w-[680px] flex-col gap-3">
          <h2 className="display display-75 text-[clamp(36px,4.6vw,60px)] leading-[0.95]">{title}</h2>
          {text && <p className="text-lg">{text}</p>}
        </div>
        <Link href={href} className="btn bg-white text-ink hover:text-blue">
          {button}
        </Link>
      </div>
    </section>
  );
}
