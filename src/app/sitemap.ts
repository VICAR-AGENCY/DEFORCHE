import type { MetadataRoute } from "next";
import { getNieuws } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://deforche.be";
  const staticRoutes = ["/", "/diensten", "/over-ons", "/cases", "/nieuws", "/contact"];
  const nieuws = getNieuws().map((item) => ({
    url: `${base}/nieuws/${item.slug}`,
    lastModified: new Date(),
  }));
  return [
    ...staticRoutes.map((r) => ({ url: `${base}${r}`, lastModified: new Date() })),
    ...nieuws,
  ];
}
