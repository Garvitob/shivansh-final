import Link from "next/link";
import type { Listing } from "@prisma/client";
import { ListingCard } from "@/components/ListingCard";

/**
 * Renders nothing at all when there is nothing live — pages must look finished
 * with an empty database.
 */
export function ListingsStrip({
  listings,
  heading,
  moreHref = "/listings",
}: {
  listings: Listing[];
  heading: string;
  moreHref?: string;
}) {
  if (!listings.length) return null;

  return (
    <section style={{ borderTop: "1px solid var(--line)" }}>
      <div className="wrap">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: 20,
            flexWrap: "wrap",
            marginBottom: 34,
          }}
        >
          <div>
            <p className="eyebrow">Live right now</p>
            <h2 className="h2">{heading}</h2>
          </div>
          <Link className="link-plain" href={moreHref}>
            See all listings
          </Link>
        </div>
        <div className="card-grid">
          {listings.map((l) => (
            <ListingCard key={l.id} listing={l} />
          ))}
        </div>
      </div>
    </section>
  );
}
