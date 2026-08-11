import Link from "next/link";
import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { PhotoBand } from "@/components/PhotoBand";
import { SectorWall } from "@/components/SectorWall";
import { FaqBlock } from "@/components/FaqBlock";
import { RelatedLinks } from "@/components/RelatedLinks";
import { EnquirySection } from "@/components/EnquirySection";
import { ListingsStrip } from "@/components/ListingsStrip";
import { SECTORS, SECTOR_ONE_LINERS } from "@/lib/sectors";
import { getActiveListings } from "@/lib/listings";
import { pageMeta } from "@/lib/seo";

export const revalidate = 600;

export const metadata: Metadata = pageMeta({
  title: "Property Dealer on Noida Expressway",
  description:
    "A property dealer working the Noida–Greater Noida Expressway from an office inside Sector 144. Eleven focus sectors, every kind of deal, both sides of the table.",
  path: "/property-dealer-noida-expressway",
});

const FAQS = [
  {
    q: "Which sectors are on the Noida–Greater Noida Expressway?",
    a: "The corridor runs from the Noida end down towards Greater Noida, taking in the Grade-A office belt roughly across sectors 125 to 144, the township belt around 128 to 134, and the newer sectors from 145 out to 151. Our eleven focus sectors all sit on it.",
  },
  {
    q: "What makes a good property dealer on the Noida Expressway?",
    a: "Someone who works the corridor daily rather than covering all of NCR from a distance. Ask where their office is, ask what registered nearby last month, and ask whether they act for buyers as well as sellers. Vague answers to any of those tell you plenty.",
  },
  {
    q: "Where is your office on the Expressway?",
    a: "CM-52, Sector 144, Noida, Uttar Pradesh 201306 — inside Sector 144, physically on this corridor. Call or WhatsApp +91 99115 59688, or walk in. Most of our work still starts with somebody explaining what they need across a desk.",
  },
  {
    q: "Do you handle commercial as well as residential on the Expressway?",
    a: "Both, and on the same corridor. Office floors in 132, 135 and 144, retail and cafe space, PG buildings, and the residential sectors that feed all of it. Working both sides of that market is how we know what terms are actually achievable.",
  },
  {
    q: "Which Expressway sector should I buy in?",
    a: "For rental income, 135 or 143. For land in a premium plotted belt, 105 or 108. For a lower entry price with time to wait, 145 or 151. For low density and space, 130. Tell us the budget and the purpose and we will narrow it.",
  },
];

export default async function ExpresswayPage() {
  const listings = (await getActiveListings()).slice(0, 6);

  return (
    <>
      <PageHero
        eyebrow="The corridor"
        title={
          <>
            Property dealer on the <em>Noida Expressway</em>
          </>
        }
        lede={
          <p>
            The Noida–Greater Noida Expressway is one road with a dozen different markets hanging
            off it. We work eleven sectors along it, from an office at CM-52 inside Sector 144 —
            which is on the corridor, not near it.
          </p>
        }
        crumbs={[
          {
            name: "Property dealer on the Noida Expressway",
            href: "/property-dealer-noida-expressway",
          },
        ]}
      />

      <PhotoBand
        src="/images/band-noida-highway-night.jpg"
        alt="Night traffic on the expressway through Noida with residential blocks behind"
        caption="The Noida–Greater Noida Expressway — the corridor we work every day."
        credit="Shantanu Goyal"
      />

      <section>
        <div className="wrap ed-grid">
          <div className="ed-side">
            <p className="eyebrow">What the corridor is</p>
            <h2>One road, four different property markets.</h2>
            <p>Treat it as a single place and you will price everything wrong.</p>
          </div>
          <div className="ed-body">
            <p>
              People talk about &ldquo;the Expressway&rdquo; as though it were one market. It is
              not. Along its length sit four quite different property markets, and the mistake we
              see most often is a buyer applying the logic of one to another.
            </p>
            <p>
              The first is the <strong>Grade-A office belt</strong>, running roughly from sector 125
              through to 144. This is where NCR&apos;s corporate and IT space is concentrated on
              this side of the river — Candor TechSpace in 135, the corporate towers in 132, the
              Embassy business parks in 144. It sets the rhythm for everything else, because the
              people who work here have to live somewhere.
            </p>
            <p>
              The second is the <strong>township belt</strong> around sectors 128 to 134, the Jaypee
              Wish Town stretch. Low density, planned, green, and priced accordingly. Sector 130
              belongs to this world.
            </p>
            <p>
              The third is the <strong>kothi belt</strong> feeding into the corridor — 105 and 108
              especially, with 99 sitting behind them as the more affordable settled option. Here
              you are buying land rather than built area, and the arithmetic is completely
              different from a society flat.
            </p>
            <p>
              The fourth is the <strong>new frontier</strong>, 145 through 151. Abadi plots, farm
              plots, ultra-luxury launches, a Microsoft parcel in 145, and the Noida International
              Airport sitting on that side of the map. Cheaper ground, longer wait.
            </p>
            <p>
              Between these four there are also the quieter sectors that most lists skip — 141
              being the clearest example, sitting next to commercial 142 with far fewer buyers
              competing for it.
            </p>
            <p>
              We work all of them, both sides, residential and commercial. That breadth is the
              point: a corridor specialist who only handles flats cannot tell you whether the office
              park two sectors down is about to change your rental market.
            </p>
          </div>
        </div>
      </section>

      <section className="sectors">
        <div className="wrap">
          <p className="eyebrow">Eleven focus sectors</p>
          <h2 className="h2" style={{ marginBottom: 44, maxWidth: "22ch" }}>
            Every number here is a page.
          </h2>
          <SectorWall />
          <div className="sector-foot">
            <span>
              All eleven sit on this corridor. <b>144</b> is where our office is.
            </span>
            <span>
              <Link href="/sectors" className="link-plain">
                The sectors index
              </Link>
            </span>
          </div>
        </div>
      </section>

      <section className="services" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap svc-grid">
          <div className="svc-left">
            <p className="eyebrow">The corridor, sector by sector</p>
            <h2 className="h2">What each one is actually like.</h2>
            <p className="sub">The short version. Each links through to the full picture.</p>
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

      <section>
        <div className="wrap ed-grid">
          <div className="ed-side">
            <p className="eyebrow">Asked and answered</p>
            <h2>Choosing someone to work with on this corridor</h2>
            <p>Three questions worth asking anyone, including us.</p>
          </div>
          <div className="qa-rows">
            <div className="qa-row">
              <h2>How do you find a good property dealer near the Noida Expressway?</h2>
              <p className="qa-answer">
                Ask three things: where their office actually is, what has registered recently in
                the sector you care about, and whether they act for buyers as well as sellers. A
                dealer who works one corridor daily will answer all three immediately. One covering
                all of NCR from a distance will not.
              </p>
              <div className="ed-body">
                <p>
                  The registered-price question is the sharpest of the three. Asking prices are
                  public and easy to repeat; closing prices take presence in the market. If someone
                  cannot tell you what comparable properties actually sold for, they are guessing
                  alongside you.
                </p>
                <p>
                  Our own answer to the first question is CM-52, Sector 144 — inside the sector, on
                  this corridor, since the business started in 2011.
                </p>
              </div>
            </div>

            <div className="qa-row">
              <h2>Is the Noida Expressway a good place to buy property?</h2>
              <p className="qa-answer">
                It is the strongest corridor in Noida for both rental demand and long-term
                infrastructure, because the office belt, the metro line and the airport side all sit
                along it. The catch is that &ldquo;the Expressway&rdquo; spans very different
                markets, so the sector you pick matters more than the corridor does.
              </p>
              <div className="ed-body">
                <p>
                  A flat in 143 next to a metro station and a farm plot in 151 are both
                  &ldquo;on the Expressway&rdquo; and they are completely different investments with
                  different horizons and different risks.
                </p>
              </div>
            </div>

            <div className="qa-row">
              <h2>What kinds of property do you deal in along the corridor?</h2>
              <p className="qa-answer">
                All of them. Flats, kothis and plots on the residential side; office floors, shops
                and IT park space on the commercial side; plus cafe and restaurant units, PG
                buildings and corporate site requirements. Industrial work takes us off this
                corridor to Noida&apos;s industrial belts.
              </p>
              <div className="ed-body">
                <p>
                  Working across all of it is not a boast, it is how the corridor has to be read.
                  What happens in the office sectors decides what rents in the residential ones.
                </p>
                <p>
                  <Link href="/services" className="link-plain">
                    Everything we handle
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ListingsStrip listings={listings} heading="Live on the corridor right now" />

      <FaqBlock faqs={FAQS} heading="Expressway questions" />

      <EnquirySection
        sourcePage="/property-dealer-noida-expressway"
        heading="Working the corridor since 2011."
        blurb="Buying, selling, renting or leasing anywhere along the Expressway — tell us what you need and we will call you back."
      />

      <RelatedLinks
        links={[
          { href: "/sectors", label: "All eleven focus sectors", note: "Sector by sector" },
          { href: "/services", label: "Everything we handle", note: "Nine kinds of work" },
          { href: "/sectors/sector-144-noida", label: "Sector 144", note: "Our home sector" },
          { href: "/sectors/sector-135-noida", label: "Sector 135", note: "The IT-park belt" },
          { href: "/areas", label: "Areas we serve", note: "Beyond Noida" },
          { href: "/about", label: "About Shivansh Properties", note: "Family run since 2011" },
        ]}
      />
    </>
  );
}
