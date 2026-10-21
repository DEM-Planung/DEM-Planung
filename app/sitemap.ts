import type { MetadataRoute } from "next";
import { LEISTUNGEN } from "@/lib/leistungen";

const BASE = "https://www.dem-planung.de";

const PAGES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/leistungen", priority: 0.9 },
  ...LEISTUNGEN.map((l) => ({ path: `/leistungen/${l.slug}`, priority: 0.9 })),
  { path: "/projekte", priority: 0.7 },
  { path: "/ablauf", priority: 0.6 },
  { path: "/ueber-uns", priority: 0.6 },
  { path: "/kontakt", priority: 0.8 },
  { path: "/impressum", priority: 0.2 },
  { path: "/datenschutz", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({ url: `${BASE}${p.path}`, lastModified: new Date(), priority: p.priority }));
}
