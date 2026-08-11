import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { FaqBlock } from "@/components/FaqBlock";
import { RelatedLinks } from "@/components/RelatedLinks";
import { EnquirySection } from "@/components/EnquirySection";
import { ListingsStrip } from "@/components/ListingsStrip";
import { ServiceJsonLd } from "@/components/JsonLd";
import { SERVICES, getService } from "@/lib/services";
import { getActiveListings } from "@/lib/listings";
import { pageMeta } from "@/lib/seo";

export const revalidate = 3600;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

/** Which live listings, if any, belong on a given service page. */
const LISTING_FILTER: Record<string, { propertyType?: string; purpose?: string }> = {
  "buy-property-noida": { purpose: "SALE" },
  "residential-renting-noida": { purpose: "RENT" },
  "cafe-restaurant-spaces-noida": { propertyType: "CAFE_RESTAURANT" },
  "industrial-spaces-noida": { propertyType: "INDUSTRIAL" },
  "pg-spaces-noida": { propertyType: "PG" },
  "commercial-leasing-noida": { purpose: "LEASE" },
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const filter = LISTING_FILTER[service.slug];
  const listings = filter ? (await getActiveListings(filter)).slice(0, 6) : [];

  return (
    <>
      <ServiceJsonLd
        name={service.h1}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        serviceType={service.serviceType}
      />

      <PageHero
        eyebrow={service.eyebrow}
        title={service.h1}
        lede={<p>{service.lede}</p>}
        crumbs={[
          { name: "Services", href: "/services" },
          { name: service.name, href: `/services/${service.slug}` },
        ]}
      />

      <section>
        <div className="wrap ed-grid">
          <div className="ed-side">
            <p className="eyebrow">The short version</p>
            <h2>{service.sideHeading}</h2>
            <p>{service.sideNote}</p>
          </div>
          <div className="ed-body">
            {service.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="services" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap svc-grid">
          <div className="svc-left">
            <p className="eyebrow">In practice</p>
            <h2 className="h2">{service.rowsHeading}</h2>
          </div>
          <div className="svc-rows">
            {service.rows.map((r) => (
              <div className="svc-row" key={r.h}>
                <h3>{r.h}</h3>
                <p>{r.p}</p>
                <span className="svc-tag">{r.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap ed-grid">
          <div className="ed-side">
            <p className="eyebrow">Asked and answered</p>
            <h2>The two things people ring us about</h2>
            <p>Direct answers first. Detail underneath, if you want it.</p>
          </div>
          <div className="qa-rows">
            {service.qas.map((qa) => (
              <div className="qa-row" key={qa.q}>
                <h2>{qa.q}</h2>
                <p className="qa-answer">{qa.answer}</p>
                {qa.detail?.length ? (
                  <div className="ed-body">
                    {qa.detail.map((d, i) => (
                      <p key={i}>{d}</p>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ListingsStrip listings={listings} heading={`On the books — ${service.name.toLowerCase()}`} />

      <FaqBlock faqs={service.faqs} />

      <EnquirySection
        sourcePage={`/services/${service.slug}`}
        heading="Tell us what you need."
        blurb="Two lines is enough to start. Give us the sector, the budget and what it is for, and we will call you back."
      />

      <RelatedLinks links={service.related} />
    </>
  );
}
