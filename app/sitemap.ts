import type { MetadataRoute } from "next";

const PAGES = ["", "/leistungen", "/projekte", "/ablauf", "/ueber-uns", "/kontakt", "/impressum", "/datenschutz"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({ url: `https://www.dem-planung.de${p}`, lastModified: new Date() }));
}
