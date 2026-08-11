import Link from "next/link";
import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { FaqBlock } from "@/components/FaqBlock";
import { RelatedLinks } from "@/components/RelatedLinks";
import { EnquirySection } from "@/components/EnquirySection";
import { SECTORS, SECTOR_ONE_LINERS } from "@/lib/sectors";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Areas We Serve in Noida & NCR",
  description:
    "All of Noida, with eleven focus sectors on the Expressway, plus Greater Noida, YEIDA and Delhi NCR. Where Shivansh Properties works and how deep the coverage goes.",
  path: "/areas",
});

const WIDER = [
  {
    name: "Noida — every sector",
    body: "Noida is the whole business. The eleven Expressway sectors are where most of our work sits, but we deal across every sector of the city, including the older residential sectors and the industrial belts in Phase 2, around Sectors 80 and 83, and NSEZ.",
  },
  {
    name: "Greater Noida",
    body: "We work Greater Noida alongside Noida, particularly for industrial requirements in the Ecotech sectors and for buyers whose budget goes further there than it does on the Expressway. It is the same drive for us, not a different business.",
  },
  {
    name: "YEIDA",
    body: "The Yamuna Expressway authority area, on the airport side. Land and plot enquiries here are usually about position rather than immediate use, and the honest advice is nearly always about time horizon rather than price.",
  },
  {
    name: "Delhi NCR",
    body: "We take requirements across the wider NCR where they connect to what we do here — a company moving offices, a brand rolling out sites, a client buying in Noida and letting in Delhi. Noida remains where our real depth is, and we will say so.",
  },
];

const FAQS = [
  {
    q: "Do you only work in the eleven focus sectors?",
    a: "No. Those eleven are where our work is deepest, but we deal across every sector of Noida, plus Greater Noida, YEIDA and the wider Delhi NCR. Industrial work in particular takes us well outside the Expressway corridor.",
  },
  {
    q: "Do you cover Greater Noida?",
    a: "Yes, both residential and industrial. The Ecotech sectors carry a lot of the larger industrial requirements, and Greater Noida often makes sense for buyers whose budget does not stretch to the Expressway sectors in Noida itself.",
  },
  {
    q: "Do you work in the YEIDA area near the new airport?",
    a: "Yes, mostly on land and plots. Buying on that side is a long-horizon decision rather than a short one, and we would rather tell you that plainly than sell you a plot that does not suit your timeline.",
  },
  {
    q: "Which area should I buy in?",
    a: "It depends on budget, timeline and what the property is for. Noida's Expressway sectors for rental income and liquidity, Greater Noida for more space per rupee, YEIDA for a long hold. Tell us all three and we will narrow it properly.",
  },
];

export default function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Areas we serve"
        title={
          <>
            All of Noida. <em>Eleven sectors</em> in particular.
          </>
        }
        lede={
          <p>
            Our office is at CM-52 in Sector 144, and eleven sectors along the Noida–Greater Noida
            Expressway are where we work most days. Beyond them we deal across every sector of
            Noida, and into Greater Noida, YEIDA and Delhi NCR.
          </p>
        }
        crumbs={[{ name: "Areas we serve", href: "/areas" }]}
      />

      <section>
        <div className="wrap svc-grid">
          <div className="svc-left">
            <p className="eyebrow">The eleven</p>
            <h2 className="h2">Focus sectors on the Expressway.</h2>
            <p className="sub">
              Each one is a page, because each one is a different market.
            </p>
          </div>
          <div className="svc-rows">
            {SECTORS.map((s) => (
              <Link className="svc-row" key={s.slug} href={`/sectors/${s.slug}`}>
                <h3>
                  Sector {s.num}
                  {s.isHome ? " — home" : ""}
                </h3>
                <p>{SECTOR_ONE_LINERS[s.num]}</p>
                <span className="svc-tag">{s.isHome ? "Our office" : "Focus sector"}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap ed-grid">
          <div className="ed-side">
            <p className="eyebrow">Beyond the eleven</p>
            <h2>Where else we work, and how honestly.</h2>
            <p>
              Plenty of dealers claim the whole of NCR. Here is what our coverage actually looks
              like.
            </p>
          </div>
          <div className="qa-rows">
            {WIDER.map((w) => (
              <div className="qa-row" key={w.name}>
                <h3>{w.name}</h3>
                <p className="qa-answer">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqBlock faqs={FAQS} heading="Coverage questions" />

      <EnquirySection
        sourcePage="/areas"
        heading="Tell us where you are looking."
        blurb="Even if it is outside our focus sectors. We will either handle it properly or tell you straight that someone closer to it would serve you better."
      />

      <RelatedLinks
        links={[
          { href: "/sectors", label: "All eleven focus sectors", note: "The sector wall" },
          {
            href: "/property-dealer-noida-expressway",
            label: "Property dealer on the Noida Expressway",
            note: "The corridor, end to end",
          },
          { href: "/services/industrial-spaces-noida", label: "Industrial spaces", note: "Where we work citywide" },
          { href: "/services", label: "Everything we handle", note: "Nine services" },
          { href: "/contact", label: "Contact us", note: "CM-52, Sector 144" },
        ]}
      />
    </>
  );
}
