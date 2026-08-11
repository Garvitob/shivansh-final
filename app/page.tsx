import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import { SectorWall } from "@/components/SectorWall";
import { PhotoBand } from "@/components/PhotoBand";
import { EnquirySection } from "@/components/EnquirySection";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { HomeJsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/seo";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Property Dealer in Noida — Shivansh Properties",
  description:
    "One stop for every property need in Noida since 2011. Buying, selling, renting and leasing — flats, kothis, plots, offices, shops and cafe spaces.",
  path: "/",
});

const SERVICES = [
  {
    href: "/services/buy-property-noida",
    h: "Buy & sell residential",
    p: "Flats, kothis and plots — our main work. We know what things actually sell for.",
    tag: "Buyers · Sellers",
  },
  {
    href: "/services/residential-renting-noida",
    h: "Residential renting",
    p: "Finding tenants for owners. Finding homes for tenants. Paperwork done properly.",
    tag: "Owners · Tenants",
  },
  {
    href: "/services/commercial-leasing-noida",
    h: "Commercial — lease & sale",
    p: "Office floors, shops, corporate and IT park space along the Expressway.",
    tag: "Both sides",
  },
  {
    href: "/services/cafe-restaurant-spaces-noida",
    h: "Cafes & restaurants",
    p: "From finding the space to opening day. Our strongest work — ask about Roastery Street.",
    tag: "End to end",
  },
  {
    href: "/services/pg-spaces-noida",
    h: "PG buildings",
    p: "Owners with large spaces on one side, PG operators on the other. We sit in the middle.",
    tag: "Owners · Operators",
  },
  {
    href: "/services/industrial-spaces-noida",
    h: "Industrial spaces",
    p: "Lease and sale of industrial units across Noida's industrial belts.",
    tag: "Lease · Sale",
  },
  {
    href: "/services/corporate-brand-requirements-noida",
    h: "Corporate & brand requirements",
    p: "Banks opening branches, quick-commerce hubs, chains entering Noida — we find the site.",
    tag: "Brands",
  },
];

const HOME_GUIDES = [
  {
    href: "/guides/stamp-duty-registration-noida",
    h: "Stamp duty and registration in Noida — how it works",
  },
  {
    href: "/guides/verify-property-documents-up",
    h: "How to verify property documents in UP before buying",
  },
  {
    href: "/guides/selling-property-noida-process",
    h: "Selling your property in Noida — the full process",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />

      {/* ---------------------------------------------------------- hero */}
      <div className="hero">
        <Image
          src="/images/hero-noida-expressway.jpg"
          alt="The Noida–Greater Noida Expressway running past high-rise towers in Noida"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="hero-photo"
        />
        <div className="wrap hero-inner">
          <p className="eyebrow rise">Noida · Since 2011</p>
          <h1 className="rise d1">
            One stop for <em>every property need</em> in Noida.
          </h1>
          <p className="hero-sub rise d2">
            Buying, selling, renting, leasing — flats, kothis, plots, offices, shops, cafes.
            Shivansh Properties works both sides of every deal, across all of Noida, from our office
            in Sector 144.
          </p>
          <div className="hero-actions rise d3">
            <a className="btn-primary" href={BUSINESS.telHref}>
              Call {BUSINESS.phoneShort}
            </a>
            <a
              className="btn-ghost-hero"
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon size={17} />
              WhatsApp us
            </a>
            <a className="link-hero" href="#enquiry">
              Tell us what you need →
            </a>
          </div>
        </div>
        <p className="hero-credit">Photo: Bilal Ahmad, Noida / Unsplash</p>
      </div>

      {/* --------------------------------------------------------- facts */}
      <div className="facts">
        <div className="wrap facts-inner">
          <span>
            <b>Since 2011</b> in Noida
          </span>
          <span className="dot">●</span>
          <span>
            Office <b>inside Sector 144</b>
          </span>
          <span className="dot">●</span>
          <span>
            All of Noida, <b>11 focus sectors</b>
          </span>
          <span className="dot">●</span>
          <span>
            Buyer side <b>and</b> seller side
          </span>
        </div>
      </div>

      {/* ------------------------------------------------------ services */}
      <section className="services" id="services">
        <div className="wrap svc-grid">
          <div className="svc-left">
            <p className="eyebrow">What we handle</p>
            <h2 className="h2">If it&apos;s property in Noida, it&apos;s our work.</h2>
            <p className="sub">No handing you off. One office, one number, every kind of deal.</p>
          </div>
          <div className="svc-rows">
            {SERVICES.map((s) => (
              <Link className="svc-row" key={s.href} href={s.href}>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
                <span className="svc-tag">{s.tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- mid band */}
      <PhotoBand
        src="/images/band-noida-highway-night.jpg"
        alt="Night traffic on the expressway through Noida with residential blocks behind"
        caption="The Noida–Greater Noida Expressway — the corridor we work every day."
        credit="Shantanu Goyal"
      />

      {/* ----------------------------------------------------- sector wall */}
      <section className="sectors" id="sectors">
        <div className="wrap">
          <p className="eyebrow">Where we work</p>
          <h2 className="h2" style={{ marginBottom: 44, maxWidth: "22ch" }}>
            Noida talks in sector numbers. So do we.
          </h2>
          <SectorWall />
          <div className="sector-foot">
            <span>
              Eleven focus sectors on the{" "}
              <Link href="/property-dealer-noida-expressway" className="link-plain">
                Noida Expressway
              </Link>{" "}
              — and we work across <b>every sector of Noida</b>.
            </span>
            <span>
              Also: <b>Greater Noida</b>, <b>YEIDA</b> and <b>Delhi NCR</b>.
            </span>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- roastery */}
      <section className="roastery">
        <div className="wrap roast-grid">
          <p className="roast-quote">
            Most of the cafes on Roastery Street found their space through us.
          </p>
          <div className="roast-copy">
            <p className="eyebrow" style={{ marginBottom: 16 }}>
              The cafe lane, Sector 144
            </p>
            <p>
              Sector 144&apos;s cafe lane didn&apos;t fill up by accident. For years, cafe and
              restaurant owners have come to us to find the right shop, settle the lease, and get
              the doors open.
            </p>
            <p>
              If you&apos;re planning a cafe or restaurant anywhere in Noida, we handle it{" "}
              <b>end to end</b> — space, terms, and everything between you and opening day.
            </p>
            <Link className="link-plain" href="/services/cafe-restaurant-spaces-noida">
              Planning a cafe? Here&apos;s how we work
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- enquiry */}
      <EnquirySection sourcePage="/" />

      {/* --------------------------------------------------------- guides */}
      <section className="guides" id="guides">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Plain answers</p>
            <h2>Property questions, answered simply.</h2>
            <p>
              No jargon. The things people actually ask us, written the way we&apos;d explain them
              across the desk.
            </p>
          </div>
          <div className="guide-rows">
            {HOME_GUIDES.map((g) => (
              <Link className="guide-row" key={g.href} href={g.href}>
                <h3>{g.h}</h3>
                <span className="g-arrow">→</span>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 28 }}>
            <Link className="link-plain" href="/guides">
              All eight guides
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
