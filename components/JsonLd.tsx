import { BUSINESS, PHONES, SITE_URL, AREAS_SERVED, FOCUS_SECTORS } from "@/lib/site";
import type { Crumb } from "@/lib/seo";

type Json = Record<string, unknown>;

function Script({ data, id }: { data: Json; id: string }) {
  return (
    <script
      type="application/ld+json"
      id={id}
      // Structured data is authored here, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS.street,
  addressLocality: BUSINESS.locality,
  addressRegion: BUSINESS.region,
  postalCode: BUSINESS.postalCode,
  addressCountry: BUSINESS.country,
};

/** RealEstateAgent + LocalBusiness, emitted once in the root layout. */
export function BusinessJsonLd() {
  const data: Json = {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "@id": ORG_ID,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    slogan: BUSINESS.tagline,
    description:
      "Family-run property consultancy in Noida since 2011. Buying, selling, renting and leasing of flats, kothis, plots, offices, shops, cafe and restaurant spaces, industrial units and PG buildings.",
    url: SITE_URL,
    telephone: BUSINESS.phoneE164,
    foundingDate: BUSINESS.founded,
    priceRange: "₹₹",
    image: `${SITE_URL}/og.png`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/brand/logo.png`,
    },
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    hasMap: BUSINESS.mapsHref,
    areaServed: [
      ...AREAS_SERVED.map((name) => ({ "@type": "City", name })),
      ...FOCUS_SECTORS.map((n) => ({ "@type": "Place", name: `Sector ${n}, Noida` })),
    ],
    knowsLanguage: ["en", "hi"],
    contactPoint: PHONES.map((phone) => ({
      "@type": "ContactPoint",
      telephone: phone.e164,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    })),
  };
  return <Script id="ld-business" data={data} />;
}

/** WebSite + Organization, homepage only. */
export function HomeJsonLd() {
  const data: Json = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: BUSINESS.name,
        description: "One stop for every property need in Noida.",
        publisher: { "@id": ORG_ID },
        inLanguage: "en-IN",
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org-profile`,
        name: BUSINESS.name,
        url: SITE_URL,
        logo: `${SITE_URL}/brand/logo.png`,
        telephone: BUSINESS.phoneE164,
        address: postalAddress,
        foundingDate: BUSINESS.founded,
        founder: { "@type": "Person", name: `Father of ${BUSINESS.runBy}` },
        employee: { "@type": "Person", name: BUSINESS.runBy },
        slogan: BUSINESS.tagline,
      },
    ],
  };
  return <Script id="ld-home" data={data} />;
}

export function BreadcrumbJsonLd({ crumbs }: { crumbs: Crumb[] }) {
  const data: Json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.href === "/" ? "" : c.href}`,
    })),
  };
  return <Script id="ld-breadcrumbs" data={data} />;
}

export function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  if (!faqs.length) return null;
  const data: Json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <Script id="ld-faq" data={data} />;
}

export function ServiceJsonLd({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  const data: Json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: `${SITE_URL}${path}`,
    provider: { "@id": ORG_ID },
    areaServed: AREAS_SERVED.map((n) => ({ "@type": "City", name: n })),
    audience: { "@type": "Audience", audienceType: "Property buyers, sellers, owners and tenants" },
  };
  return <Script id="ld-service" data={data} />;
}

export function ArticleJsonLd({
  headline,
  description,
  path,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
}) {
  const data: Json = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${path}` },
    author: { "@type": "Organization", name: BUSINESS.name, url: SITE_URL },
    publisher: { "@id": ORG_ID },
    datePublished,
    dateModified,
    inLanguage: "en-IN",
  };
  return <Script id="ld-article" data={data} />;
}

export function RealEstateListingJsonLd({
  name,
  description,
  path,
  sector,
  photos,
  price,
  size,
  datePosted,
}: {
  name: string;
  description: string;
  path: string;
  sector: string;
  photos: string[];
  price?: string | null;
  size?: string | null;
  datePosted: string;
}) {
  const data: Json = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name,
    description,
    url: `${SITE_URL}${path}`,
    datePosted,
    ...(photos.length ? { image: photos } : {}),
    provider: { "@id": ORG_ID },
    about: {
      "@type": "Accommodation",
      name,
      ...(size ? { floorSize: { "@type": "QuantitativeValue", name: size } } : {}),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Noida",
        addressRegion: BUSINESS.region,
        addressCountry: BUSINESS.country,
        streetAddress: sector,
      },
    },
    ...(price ? { offers: { "@type": "Offer", price, priceCurrency: "INR", availability: "https://schema.org/InStock" } } : {}),
  };
  return <Script id="ld-listing" data={data} />;
}
