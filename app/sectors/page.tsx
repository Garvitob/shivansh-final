import Link from "next/link";
import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectorWall } from "@/components/SectorWall";
import { EnquirySection } from "@/components/EnquirySection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { FaqBlock } from "@/components/FaqBlock";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { SECTORS, SECTOR_ONE_LINERS } from "@/lib/sectors";
import { pageMeta } from "@/lib/seo";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Noida Sectors We Work In",
  description:
    "Eleven focus sectors on the Noida–Greater Noida Expressway — 99, 105, 108, 130, 132, 135, 141, 143, 144, 145 and 151 — plus every other sector of Noida.",
  path: "/sectors",
});

const FAQS = [
  {
    q: "Which sectors of Noida do you work in?",
    a: "All of them. Eleven sectors on the Noida–Greater Noida Expressway are where most of our work sits — 99, 105, 108, 130, 132, 135, 141, 143, 144, 145 and 151 — and we also handle Greater Noida, YEIDA and the wider Delhi NCR.",
  },
  {
    q: "Why do those eleven sectors in particular?",
    a: "Because they sit on one corridor and we work it every day from an office inside Sector 144. Knowing a sector properly means knowing which block is quiet, which society is well run, and what actually closed last month. That takes presence, not a map.",
  },
  {
    q: "Which Noida sector is best to buy in?",
    a: "It depends what for. For rental income, 135 and 143. For land in a premium belt, 105 and 108. For an early entry price, 145 and 151. For a settled family sector, 99. Tell us the budget and the purpose and we will narrow it properly.",
  },
  {
    q: "Do you work outside these sectors?",
    a: "Yes. These eleven are our focus, not our limit. We deal across every sector of Noida, and our industrial work in particular takes us to Phase 2, the Sector 80 and 83 belt, NSEZ and the Ecotech sectors in Greater Noida.",
  },
];

export default function SectorsIndexPage() {
  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <Breadcrumbs crumbs={[{ name: "Sectors", href: "/sectors" }]} />
          <p className="eyebrow" style={{ marginTop: 26 }}>
            Where we work
          </p>
          <h1>
            Noida talks in sector numbers. <em>So do we.</em>
          </h1>
          <div className="lede">
            <p>
              Eleven focus sectors, all of them on the Noida–Greater Noida Expressway, worked from
              an office inside Sector 144. Beyond these we deal across every sector of Noida, and
              into Greater Noida, YEIDA and Delhi NCR.
            </p>
          </div>
          <div className="page-hero-actions">
            <a className="btn-solid" href={BUSINESS.telHref}>
              Call {BUSINESS.phoneShort}
            </a>
            <a className="btn-outline" href={BUSINESS.whatsappHref} target="_blank" rel="noopener">
              <WhatsAppIcon size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <section className="sectors">
        <div className="wrap">
          <SectorWall />
          <div className="sector-foot">
            <span>
              Every number is a page. <b>144</b> is where our office is.
            </span>
            <span>
              Also: <b>Greater Noida</b>, <b>YEIDA</b> and <b>Delhi NCR</b>.
            </span>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap svc-grid">
          <div className="svc-left">
            <p className="eyebrow">Sector by sector</p>
            <h2 className="h2">Each one is a different market.</h2>
            <p className="sub">
              A kothi belt does not behave like a society sector, and neither behaves like an office
              sector. Here is the short version of each.
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

      <FaqBlock faqs={FAQS} heading="Questions about our sectors" />

      <EnquirySection
        sourcePage="/sectors"
        heading="Not sure which sector suits you?"
        blurb="Tell us the budget and what the property is for. Choosing the sector is half the decision and we would rather help you get it right than sell you whatever we happen to have."
      />

      <RelatedLinks
        links={[
          {
            href: "/property-dealer-noida-expressway",
            label: "Property dealer on the Noida Expressway",
            note: "The corridor these eleven sit on",
          },
          { href: "/areas", label: "Areas we serve", note: "Beyond Noida" },
          { href: "/services", label: "Everything we handle", note: "Nine services" },
          { href: "/listings", label: "Current listings", note: "What is live today" },
          { href: "/sectors/sector-144-noida", label: "Sector 144", note: "Our home sector" },
          { href: "/contact", label: "Contact us", note: "CM-52, Sector 144" },
        ]}
      />
    </>
  );
}
