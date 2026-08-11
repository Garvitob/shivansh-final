import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { FaqBlock } from "@/components/FaqBlock";
import { RelatedLinks } from "@/components/RelatedLinks";
import { EnquirySection } from "@/components/EnquirySection";
import { ArticleJsonLd } from "@/components/JsonLd";
import { GUIDES, getGuide } from "@/lib/guides";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageMeta({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/guides/${guide.slug}`,
  });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <>
      <ArticleJsonLd
        headline={guide.h1}
        description={guide.metaDescription}
        path={`/guides/${guide.slug}`}
        datePublished={guide.published}
        dateModified={guide.updated}
      />

      <PageHero
        eyebrow={guide.eyebrow}
        title={guide.h1}
        lede={<p>{guide.lede}</p>}
        crumbs={[
          { name: "Guides", href: "/guides" },
          { name: guide.rowTitle, href: `/guides/${guide.slug}` },
        ]}
      />

      <section>
        <div className="wrap ed-grid">
          <div className="ed-side">
            <p className="eyebrow">Why this matters</p>
            <h2>{guide.sideHeading}</h2>
            <p>{guide.sideNote}</p>
            <p style={{ marginTop: 24, fontSize: 13 }}>
              Written by Shivansh Properties, Noida.
              <br />
              Last checked{" "}
              <time dateTime={guide.updated}>
                {new Date(guide.updated).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  timeZone: "UTC",
                })}
              </time>
              .
            </p>
          </div>
          <div className="ed-body">
            {guide.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap ed-grid">
          <div className="ed-side">
            <p className="eyebrow">Step by step</p>
            <h2>{guide.stepsHeading}</h2>
            <p>In the order we work through it with clients.</p>
          </div>
          <div className="qa-rows">
            {guide.steps.map((step, i) => (
              <div className="qa-row" key={step.h}>
                <h3>
                  <span style={{ color: "var(--brass)", marginRight: 12 }}>{i + 1}</span>
                  {step.h}
                </h3>
                <div className="ed-body" style={{ marginTop: 12 }}>
                  {step.p.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap ed-grid">
          <div className="ed-side">
            <p className="eyebrow">Asked and answered</p>
            <h2>The two questions behind most calls</h2>
            <p>Direct answer, then the detail.</p>
          </div>
          <div className="qa-rows">
            {guide.qas.map((qa) => (
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

      <FaqBlock faqs={guide.faqs} />

      <EnquirySection
        sourcePage={`/guides/${guide.slug}`}
        eyebrow="Still stuck?"
        heading="Ask us instead."
        blurb="Guides only go so far. If your situation has something odd about it, ring us and describe it — we have probably seen it before."
      />

      <RelatedLinks links={guide.related} />
    </>
  );
}
