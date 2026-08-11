import Link from "next/link";
import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { EnquirySection } from "@/components/EnquirySection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { GUIDES } from "@/lib/guides";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Noida Property Guides",
  description:
    "Plain answers to the property questions people ask us in Noida — stamp duty, document checks, circle rates, selling, leasing and renting.",
  path: "/guides",
});

export default function GuidesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Plain answers"
        title={
          <>
            Property questions, <em>answered simply</em>.
          </>
        }
        lede={
          <p>
            No jargon and no rates that will be wrong next year. These are the things people ask us
            across the desk, written the way we would explain them. Where a number changes — duty,
            fees, charges — we tell you where to confirm the current one instead of guessing.
          </p>
        }
        crumbs={[{ name: "Guides", href: "/guides" }]}
      />

      <section>
        <div className="wrap">
          <div className="guide-rows">
            {GUIDES.map((g) => (
              <Link className="guide-row" key={g.slug} href={`/guides/${g.slug}`}>
                <span>
                  <h3>{g.rowTitle}</h3>
                  <p>{g.indexBlurb}</p>
                </span>
                <span className="g-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EnquirySection
        sourcePage="/guides"
        eyebrow="Not covered here?"
        heading="Ask us the question directly."
        blurb="If your situation has something unusual about it, a guide will not cover it. Ring us and describe it — we have probably dealt with it before."
      />

      <RelatedLinks
        links={[
          { href: "/services", label: "Everything we handle", note: "Nine services" },
          { href: "/services/buy-property-noida", label: "Buying property in Noida", note: "The buy side" },
          { href: "/services/sell-property-noida", label: "Selling property in Noida", note: "The sell side" },
          { href: "/sectors", label: "All eleven focus sectors", note: "Where we work" },
          { href: "/listings", label: "Current listings", note: "What is live today" },
          { href: "/contact", label: "Contact us", note: "CM-52, Sector 144" },
        ]}
      />
    </>
  );
}
