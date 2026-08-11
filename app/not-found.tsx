import Link from "next/link";
import type { Metadata } from "next";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { SECTORS } from "@/lib/sectors";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <p className="eyebrow">404</p>
          <h1>
            That page isn&apos;t here. <em>The number still is.</em>
          </h1>
          <div className="lede">
            <p>
              Either the link is wrong or we moved something. Rather than leave you on a dead page,
              here is everything worth going to instead — or just ring us and describe what you were
              looking for.
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
            <Link className="btn-outline" href="/">
              Back to the homepage
            </Link>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap svc-grid">
          <div className="svc-left">
            <p className="eyebrow">Try these</p>
            <h2 className="h2">The main parts of the site.</h2>
          </div>
          <div className="svc-rows">
            <Link className="svc-row" href="/services">
              <h3>Everything we handle</h3>
              <p>Buying, selling, renting, commercial, industrial, PG, cafes and corporate.</p>
              <span className="svc-tag">Services</span>
            </Link>
            <Link className="svc-row" href="/sectors">
              <h3>The eleven focus sectors</h3>
              <p>Every sector we work on the Noida–Greater Noida Expressway, one page each.</p>
              <span className="svc-tag">Sectors</span>
            </Link>
            <Link className="svc-row" href="/property-dealer-noida-expressway">
              <h3>Property dealer on the Noida Expressway</h3>
              <p>The whole corridor and how its four different markets actually work.</p>
              <span className="svc-tag">Corridor</span>
            </Link>
            <Link className="svc-row" href="/listings">
              <h3>Current listings</h3>
              <p>What is on the books today, filtered by sector, type and purpose.</p>
              <span className="svc-tag">Listings</span>
            </Link>
            <Link className="svc-row" href="/guides">
              <h3>Property guides</h3>
              <p>Stamp duty, document checks, circle rates, selling, leasing and renting.</p>
              <span className="svc-tag">Guides</span>
            </Link>
            <Link className="svc-row" href="/contact">
              <h3>Contact us</h3>
              <p>CM-52, Sector 144, Noida. Walk in, or leave your number and we will call.</p>
              <span className="svc-tag">Contact</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="sectors">
        <div className="wrap">
          <p className="eyebrow">Or jump straight to a sector</p>
          <div className="panel-sectors" style={{ marginTop: 22 }}>
            {SECTORS.map((s) => (
              <Link className="chip" key={s.slug} href={`/sectors/${s.slug}`}>
                Sector {s.num}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
