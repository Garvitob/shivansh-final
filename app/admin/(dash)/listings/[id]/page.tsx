import Link from "next/link";
import { notFound } from "next/navigation";
import { ListingForm } from "@/components/admin/ListingForm";
import { updateListing } from "@/lib/actions/listings";
import { prisma, safeQuery } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function EditListingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const listing = await safeQuery(() => prisma.listing.findUnique({ where: { id } }), null);
  if (!listing) notFound();

  return (
    <div className="wrap" style={{ maxWidth: 860 }}>
      <p className="eyebrow">Listings</p>
      <h1 className="h2" style={{ marginBottom: 8 }}>
        Edit listing
      </h1>
      <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 28 }}>
        <Link href="/admin" className="link-plain">
          Back to all listings
        </Link>
        {listing.status === "ACTIVE" ? (
          <>
            {"  ·  "}
            <Link href={`/listings/${listing.slug}`} target="_blank" rel="noopener" className="link-plain">
              View on site
            </Link>
          </>
        ) : null}
      </p>
      <ListingForm action={updateListing} listing={listing} submitLabel="Save changes" />
    </div>
  );
}
