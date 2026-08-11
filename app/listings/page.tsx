import Link from "next/link";
import type { Metadata } from "next";

import { PageHero } from "@/components/PageHero";
import { ListingCard } from "@/components/ListingCard";
import { EnquirySection } from "@/components/EnquirySection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { getActiveListings } from "@/lib/listings";
import { pageMeta } from "@/lib/seo";
import { PROPERTY_TYPE_OPTIONS, PURPOSE_OPTIONS, FOCUS_SECTORS } from "@/lib/site";
import { SECTORS } from "@/lib/sectors";

export const metadata: Metadata = pageMeta({
  title: "Property Listings in Noida",
  description:
    "What we have live in Noida right now — flats, kothis, plots, offices, shops and cafe spaces to buy, rent or lease. Filter by sector, type and purpose.",
  path: "/listings",
});

type SearchParams = Promise<{ type?: string; sector?: string; purpose?: string }>;

export default async function ListingsPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const listings = await getActiveListings({
    propertyType: params.type,
    sector: params.sector,
    purpose: params.purpose,
  });

  const filtered = Boolean(params.type || params.sector || params.purpose);

  return (
    <>
      <PageHero
        eyebrow="Listings"
        title={
          <>
            What we have <em>live</em> right now
          </>
        }
        lede={
          <p>
            This is only what is on the books today. A lot of what we sell and let never gets
            listed anywhere — it moves between people who already know each other. If you do not
            see it here, tell us what you need and we will go and find it.
          </p>
        }
        crumbs={[{ name: "Listings", href: "/listings" }]}
      />

      <section>
        <div className="wrap">
          <form className="filter-bar" method="get" action="/listings">
            <div className="f-field">
              <label htmlFor="type">Property type</label>
              <select id="type" name="type" defaultValue={params.type ?? ""}>
                <option value="">Any type</option>
                {PROPERTY_TYPE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="f-field">
              <label htmlFor="sector">Sector</label>
              <select id="sector" name="sector" defaultValue={params.sector ?? ""}>
                <option value="">Any sector</option>
                {FOCUS_SECTORS.map((n) => (
                  <option key={n} value={`Sector ${n}`}>
                    Sector {n}
                  </option>
                ))}
              </select>
            </div>

            <div className="f-field">
              <label htmlFor="purpose">Purpose</label>
              <select id="purpose" name="purpose" defaultValue={params.purpose ?? ""}>
                <option value="">Buy, rent or lease</option>
                {PURPOSE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            <button className="filter-btn" type="submit">
              Filter
            </button>
            {filtered ? (
              <Link className="filter-clear" href="/listings">
                Clear
              </Link>
            ) : null}
          </form>

          {listings.length ? (
            <>
              <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 22 }}>
                {listings.length} {listings.length === 1 ? "property" : "properties"}
                {filtered ? " matching what you picked" : " on the books"}.
              </p>
              <div className="card-grid">
                {listings.map((l) => (
                  <ListingCard key={l.id} listing={l} />
                ))}
              </div>
            </>
          ) : (
            <div className="panel">
              <p className="eyebrow">{filtered ? "Nothing matching that" : "Nothing listed today"}</p>
              <h2>
                {filtered
                  ? "Nothing on the books matches that combination."
                  : "Browse by sector, or tell us what you need."}
              </h2>
              <p>
                Most of our work never reaches a listing page. Owners call us, we call the right
                buyer, and it is done. So the fastest route is still the oldest one — tell us what
                you are after and we will go and look for it.
              </p>
              <div className="panel-sectors">
                {SECTORS.map((s) => (
                  <Link className="chip" key={s.slug} href={`/sectors/${s.slug}`}>
                    Sector {s.num}
                  </Link>
                ))}
              </div>
              <p style={{ marginTop: 28 }}>
                <Link className="link-plain" href="#enquiry">
                  Tell us what you are looking for
                </Link>
              </p>
            </div>
          )}
        </div>
      </section>

      <EnquirySection
        sourcePage="/listings"
        eyebrow="Cannot see it here?"
        heading="Tell us what you are looking for."
        blurb="Give us the sector, the size and the budget. If it exists in Noida, we will find it or tell you honestly that it does not."
      />

      <RelatedLinks
        links={[
          { href: "/sectors", label: "All eleven focus sectors", note: "Sector by sector" },
          {
            href: "/property-dealer-noida-expressway",
            label: "Property dealer on the Noida Expressway",
            note: "The corridor we work",
          },
          { href: "/services", label: "Everything we handle", note: "Nine services" },
          { href: "/services/buy-property-noida", label: "Buying property in Noida", note: "How the buy side works" },
          { href: "/services/residential-renting-noida", label: "Renting in Noida", note: "Owners and tenants" },
          { href: "/contact", label: "Contact us", note: "CM-52, Sector 144" },
        ]}
      />
    </>
  );
}
