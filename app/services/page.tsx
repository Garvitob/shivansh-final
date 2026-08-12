import Link from "next/link";
import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { EnquirySection } from "@/components/EnquirySection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SERVICES } from "@/lib/services";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "What We Handle in Noida",
  description:
    "Every kind of property work in Noida under one roof — buying, selling, renting, commercial leasing, industrial, PG buildings and cafes.",
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            If it&apos;s property in Noida, <em>it&apos;s our work</em>.
          </>
        }
        lede={
          <p>
            Nine kinds of work, one office and one team. We do not hand you off to somebody else
            halfway through, and we work both sides of every deal — which is the only way to know
            what a fair number actually looks like.
          </p>
        }
        crumbs={[{ name: "Services", href: "/services" }]}
      />

      <section>
        <div className="wrap svc-grid">
          <div className="svc-left">
            <p className="eyebrow">Everything we do</p>
            <h2 className="h2">One desk, every kind of deal.</h2>
            <p className="sub">
              Residential is the bulk of it. Cafes and restaurants are what we are known for.
            </p>
          </div>
          <div className="svc-rows">
            {SERVICES.map((s) => (
              <Link className="svc-row" key={s.slug} href={`/services/${s.slug}`}>
                <h3>{s.name}</h3>
                <p>{s.indexBlurb}</p>
                <span className="svc-tag">{s.indexTag}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EnquirySection
        sourcePage="/services"
        heading="Not sure which one you need?"
        blurb="Describe it in your own words. We will work out which desk it belongs on and call you back."
      />

      <RelatedLinks
        links={[
          { href: "/sectors", label: "All eleven focus sectors", note: "Where we work" },
          {
            href: "/property-dealer-noida-expressway",
            label: "Property dealer on the Noida Expressway",
            note: "The corridor, end to end",
          },
          { href: "/guides", label: "Property guides", note: "Plain answers to common questions" },
          { href: "/listings", label: "Current listings", note: "What is live today" },
          { href: "/about", label: "About Shivansh Properties", note: "Family run since 2011" },
          { href: "/contact", label: "Contact us", note: "CM-52, Sector 144" },
        ]}
      />
    </>
  );
}
