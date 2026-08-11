import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { PhotoBand } from "@/components/PhotoBand";
import { FaqBlock } from "@/components/FaqBlock";
import { RelatedLinks } from "@/components/RelatedLinks";
import { EnquirySection } from "@/components/EnquirySection";
import { ListingsStrip } from "@/components/ListingsStrip";
import { COMBOS, getCombo } from "@/lib/combos";
import { getActiveListings } from "@/lib/listings";
import { pageMeta } from "@/lib/seo";

export const revalidate = 600;

/**
 * Only the ten authored combination pages resolve here — anything else calls
 * notFound() below and gets the designed 404. This is done at request time
 * rather than with dynamicParams:false, because that flag stops revalidatePath()
 * from ever rebuilding the route.
 */
export function generateStaticParams() {
  return COMBOS.map((c) => ({ combo: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ combo: string }>;
}): Promise<Metadata> {
  const { combo } = await params;
  const page = getCombo(combo);
  if (!page) return {};
  return pageMeta({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/${page.slug}`,
  });
}

export default async function ComboPage({ params }: { params: Promise<{ combo: string }> }) {
  const { combo } = await params;
  const page = getCombo(combo);
  if (!page) notFound();

  const listings = (
    await getActiveListings({
      propertyType: page.listingType,
      sector: page.sectorNum ? `Sector ${page.sectorNum}` : undefined,
    })
  ).slice(0, 6);

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.h1}
        lede={<p>{page.lede}</p>}
        crumbs={[{ name: page.crumbName, href: `/${page.slug}` }]}
      />

      <PhotoBand
        src={page.image}
        alt={page.imageAlt}
        caption={page.bandCaption}
        credit={page.credit}
      />

      <section>
        <div className="wrap ed-grid">
          <div className="ed-side">
            <p className="eyebrow">The short version</p>
            <h2>{page.sideHeading}</h2>
            <p>{page.sideNote}</p>
          </div>
          <div className="ed-body">
            {page.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="services" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap svc-grid">
          <div className="svc-left">
            <p className="eyebrow">In practice</p>
            <h2 className="h2">{page.rowsHeading}</h2>
          </div>
          <div className="svc-rows">
            {page.rows.map((r) => (
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
            <h2>The questions that come up first</h2>
            <p>Direct answer, then the detail behind it.</p>
          </div>
          <div className="qa-rows">
            {page.qas.map((qa) => (
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

      <ListingsStrip listings={listings} heading={`On the books — ${page.crumbName.toLowerCase()}`} />

      <FaqBlock faqs={page.faqs} />

      <EnquirySection
        sourcePage={`/${page.slug}`}
        defaultSectorArea={page.formSector}
        defaultPropertyType={page.formPropertyType}
        defaultWant={page.formWant}
        heading="Tell us what you need."
        blurb="A couple of lines is enough. We will call you back and tell you what is actually available, including the things that never reach a listing page."
      />

      <RelatedLinks links={page.related} />
    </>
  );
}
