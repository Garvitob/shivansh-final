import Link from "next/link";
import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { FaqBlock } from "@/components/FaqBlock";
import { RelatedLinks } from "@/components/RelatedLinks";
import { EnquirySection } from "@/components/EnquirySection";
import { pageMeta } from "@/lib/seo";
import { BUSINESS, FOCUS_SECTORS } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "About Shivansh Properties, Noida",
  description:
    "Shivansh Properties is a family-run property consultancy in Noida, started in 2011 and run today by Mukul Kaushik, from an office at CM-52, Sector 144.",
  path: "/about",
});

const FACTS = [
  { k: "Business", v: "Shivansh Properties" },
  { k: "Type", v: "Property consultancy and brokerage" },
  { k: "Started", v: "2011" },
  { k: "Founded by", v: "The father of Mukul Kaushik" },
  { k: "Run today by", v: "Mukul Kaushik" },
  { k: "Office", v: "CM-52, Sector 144, Noida, Uttar Pradesh 201306, India" },
  { k: "Phone & WhatsApp", v: "+91 99115 59688" },
  { k: "Main area", v: "Noida — all sectors" },
  { k: "Focus sectors", v: `${FOCUS_SECTORS.join(", ")} — all on the Noida–Greater Noida Expressway` },
  { k: "Also serves", v: "Greater Noida, YEIDA and Delhi NCR" },
  { k: "Tagline", v: "Building Trust. Creating Futures." },
];

const FAQS = [
  {
    q: "Who owns Shivansh Properties?",
    a: "It is a family business. It was started in 2011 by the father of Mukul Kaushik, and Mukul runs it today from the office at CM-52, Sector 144, Noida. The same family has been dealing property on this corridor throughout.",
  },
  {
    q: "How long has Shivansh Properties been in Noida?",
    a: "Since 2011. The business has been based in Noida from the start and works from an office inside Sector 144, on the Noida–Greater Noida Expressway corridor where most of its work sits.",
  },
  {
    q: "What kind of property work does Shivansh Properties do?",
    a: "Buying and selling of flats, kothis and plots; residential renting; commercial buying, selling and leasing; industrial lease and sale; PG buildings; cafe and restaurant spaces end to end; and site finding for corporates and brands entering Noida.",
  },
  {
    q: "Where is the Shivansh Properties office?",
    a: "CM-52, Sector 144, Noida, Uttar Pradesh 201306, India. The office is inside Sector 144 itself rather than on the edge of it, and you are welcome to walk in. Call or WhatsApp +91 99115 59688 first if you want a particular time.",
  },
  {
    q: "Does Shivansh Properties work with buyers as well as sellers?",
    a: "Both sides of every deal — buyers and sellers, owners and tenants, landlords and companies. Working both sides is how the business knows what a fair number actually looks like rather than what one party would like to believe.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            A family business, <em>on one corridor</em>, since 2011.
          </>
        }
        lede={
          <p>
            Shivansh Properties was started in 2011 by the father of Mukul Kaushik, who runs it
            today. The office is at CM-52 inside Sector 144, Noida — the sector we grew up working
            in and still work from.
          </p>
        }
        crumbs={[{ name: "About", href: "/about" }]}
      />

      <section>
        <div className="wrap ed-grid">
          <div className="ed-side">
            <p className="eyebrow">The business</p>
            <h2>{BUSINESS.tagline}</h2>
            <p>Two generations, one office, one number.</p>
            <dl className="facts-table" style={{ marginTop: 30 }}>
              {FACTS.map((f) => (
                <div key={f.k}>
                  <dt>{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="ed-body">
            <p>
              The business started in 2011, run by Mukul Kaushik&apos;s father. Mukul runs it now.
              In the years between, Sector 144 went from a sector people drove past to one they
              drive to — the business parks arrived, the metro arrived, and a lane of cafes turned
              into somewhere people from across Noida come in the evening.
            </p>
            <p>
              We were here for all of it. That is the whole basis of what we offer. We are not a
              network with a branch in Noida; we are a Noida business with an office inside Sector
              144, working one corridor properly rather than the whole of NCR badly.
            </p>
            <p>
              The way we work is deliberately old-fashioned in one respect: <strong>we take both
              sides</strong>. Buyers and sellers. Owners and tenants. Landlords and the companies
              leasing from them. Some brokers pick a side and stay there. We think you only learn
              what a fair number is by arguing against it from both directions, week after week.
            </p>
            <p>
              The other thing we do not do is hand you off. If you come to us about a flat and then
              need a shop for your business, that is the same desk and the same number. Residential
              buying and selling is the bulk of our work — flats, kothis and plots. Around it sits
              renting, commercial leasing and sale, industrial, PG buildings, and site finding for
              brands opening in Noida.
            </p>
            <p>
              The work we are best known for is cafes and restaurants. Most of the cafes on{" "}
              <Link href="/cafe-restaurant-space-sector-144-noida" className="link-plain">
                Roastery Street
              </Link>
              , the cafe lane in our own sector, found their space through us, and we handle those
              projects from the first viewing through to opening day.
            </p>
            <p>
              Most of our work still comes from people who were sent by someone we dealt with
              before. That is a slow way to build a business and it makes you careful, because the
              cost of a bad deal is not one client, it is everyone they would have told.
            </p>
            <p>
              If you want to talk to us, the office is at CM-52, Sector 144. Ring{" "}
              <a href={BUSINESS.telHref} className="link-plain">
                {BUSINESS.phoneDisplay}
              </a>{" "}
              or walk in.
            </p>
          </div>
        </div>
      </section>

      <FaqBlock faqs={FAQS} heading="About the business" eyebrow="Straight answers" />

      <EnquirySection
        sourcePage="/about"
        heading="Come and sit across the desk."
        blurb="Or just tell us here what you need. Either works — we will call you back on the number you leave."
      />

      <RelatedLinks
        links={[
          { href: "/contact", label: "Contact and office details", note: "CM-52, Sector 144" },
          { href: "/services", label: "Everything we handle", note: "Nine kinds of work" },
          { href: "/sectors", label: "All eleven focus sectors", note: "Where we work" },
          {
            href: "/property-dealer-noida-expressway",
            label: "Property dealer on the Noida Expressway",
            note: "The corridor we work",
          },
          { href: "/sectors/sector-144-noida", label: "Sector 144", note: "Our home sector" },
          { href: "/guides", label: "Property guides", note: "How we explain things" },
        ]}
      />
    </>
  );
}
