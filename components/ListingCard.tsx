import Link from "next/link";
import Image from "next/image";
import type { Listing } from "@prisma/client";
import { propertyTypeLabel, purposeLabel } from "@/lib/site";

export function ListingCard({ listing }: { listing: Listing }) {
  const numeral = listing.sector.match(/\d+/)?.[0];

  return (
    <Link className="listing-card" href={`/listings/${listing.slug}`}>
      {listing.photos.length ? (
        <div className="card-photo">
          <Image
            src={listing.photos[0]}
            alt={`${listing.title}, ${listing.sector}, Noida`}
            fill
            sizes="(max-width: 560px) 100vw, (max-width: 960px) 50vw, 33vw"
          />
        </div>
      ) : (
        /* No photo: a quiet typographic card, not an empty box. */
        <div className="card-numeral" aria-hidden="true">
          {numeral ?? listing.sector.slice(0, 3)}
        </div>
      )}
      <div className="card-body">
        <span className="card-meta">
          {propertyTypeLabel(listing.propertyType)} · {purposeLabel(listing.purpose)}
        </span>
        <h3>{listing.title}</h3>
        <p className="card-sub">
          {listing.sector}
          {listing.size ? ` · ${listing.size}` : ""}
        </p>
        {listing.price ? <p className="card-price">{listing.price}</p> : null}
      </div>
    </Link>
  );
}
