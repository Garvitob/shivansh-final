import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { PhotoBand } from "@/components/PhotoBand";
import { FaqBlock } from "@/components/FaqBlock";
import { RelatedLinks } from "@/components/RelatedLinks";
import { EnquirySection } from "@/components/EnquirySection";
import { ListingsStrip } from "@/components/ListingsStrip";
import { SECTORS, getSector } from "@/lib/sectors";
import { getListingsForSector } from "@/lib/listings";
import { pageMeta } from "@/lib/seo";

export const revalidate = 600;
export const dynamicParams = false;

export function generateStaticParams() {
  return SECTORS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) return {};
  return pageMeta({
    title: sector.metaTitle,
    description: sector.metaDescription,
    path: `/sectors/${sector.slug}`,
  });
}

export default async function SectorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) notFound();

  // Listings are stored against "Sector 144" style strings.
  const listings = await getListingsForSector(sector.name);

  return (
    <>
      <PageHero
        eyebrow={sector.eyebrow}
        title={sector.h1}
        lede={<p>{sector.lede}</p>}
        crumbs={[
          { name: "Sectors", href: "/sectors" },
          { name: sector.name, href: `/sectors/${sector.slug}` },
        ]}
      />

      <PhotoBand
        src={sector.image}
        alt={sector.imageAlt}
        caption={sector.bandCaption}
        credit={sector.credit}
      />

      <section>
        <div className="wrap ed-grid">
          <div className="ed-side">
            <p className="eyebrow">{sector.name}</p>
            <h2>{sector.sideHeading}</h2>
            <p>{sector.sideNote}</p>
            <dl className="facts-table" style={{ marginTop: 30 }}>
              {sector.quickFacts.map((f) => (
                <div key={f.k}>
                  <dt>{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="ed-body">
            {sector.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="services" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap svc-grid">
          <div className="svc-left">
            <p className="eyebrow">In this sector</p>
            <h2 className="h2">What we handle in {sector.name}</h2>
            <p className="sub">Both sides of every one of these — we are not only working for sellers.</p>
          </div>
          <div className="svc-rows">
            {sector.rows.map((r) => (
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
            <h2>What people want to know about {sector.name}</h2>
            <p>The direct answer first, then the detail behind it.</p>
          </div>
          <div className="qa-rows">
            {sector.qas.map((qa) => (
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

      <ListingsStrip listings={listings} heading={`Available now in ${sector.name}`} />

      <FaqBlock faqs={sector.faqs} heading={`${sector.name} — common questions`} />

      <EnquirySection
        sourcePage={`/sectors/${sector.slug}`}
        defaultSectorArea={sector.name}
        heading={`Looking in ${sector.name}?`}
        blurb="Tell us what you need and what you can spend. We will tell you what is genuinely available, including the things that never make it onto a listing page."
      />

      <RelatedLinks links={sector.related} />
    </>
  );
}
