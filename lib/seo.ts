import type { Metadata } from "next";
import { SITE_URL, BUSINESS } from "@/lib/site";

export const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Shivansh Properties — property dealer in Noida since 2011",
};

type MetaInput = {
  title: string;
  description: string;
  /** Route path beginning with "/". */
  path: string;
  noIndex?: boolean;
};

/** One place that builds title, description, canonical, OpenGraph and Twitter. */
export function pageMeta({ title, description, path, noIndex }: MetaInput): Metadata {
  const canonical = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: BUSINESS.name,
      title,
      description,
      url: canonical,
      locale: "en_IN",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}

export type Crumb = { name: string; href: string };
