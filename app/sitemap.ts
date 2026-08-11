import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { SECTORS } from "@/lib/sectors";
import { SERVICES } from "@/lib/services";
import { COMBOS } from "@/lib/combos";
import { GUIDES } from "@/lib/guides";
import { getAllActiveListingSlugs } from "@/lib/listings";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const url = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

  const core: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: url("/property-dealer-noida-expressway"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    { url: url("/sectors"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: url("/services"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: url("/listings"), lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: url("/areas"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/guides"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const sectors: MetadataRoute.Sitemap = SECTORS.map((s) => ({
    url: url(`/sectors/${s.slug}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const services: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: url(`/services/${s.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const combos: MetadataRoute.Sitemap = COMBOS.map((c) => ({
    url: url(`/${c.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const guides: MetadataRoute.Sitemap = GUIDES.map((g) => ({
    url: url(`/guides/${g.slug}`),
    lastModified: new Date(g.updated),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const listingRows = await getAllActiveListingSlugs();
  const listings: MetadataRoute.Sitemap = listingRows.map((l) => ({
    url: url(`/listings/${l.slug}`),
    lastModified: l.updatedAt,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...core, ...sectors, ...services, ...combos, ...guides, ...listings];
}
