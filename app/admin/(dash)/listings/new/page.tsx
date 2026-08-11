import Link from "next/link";
import { ListingForm } from "@/components/admin/ListingForm";
import { createListing } from "@/lib/actions/listings";

export const dynamic = "force-dynamic";

export default function NewListingPage() {
  return (
    <div className="wrap" style={{ maxWidth: 860 }}>
      <p className="eyebrow">Listings</p>
      <h1 className="h2" style={{ marginBottom: 8 }}>
        Add a listing
      </h1>
      <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 28 }}>
        <Link href="/admin" className="link-plain">
          Back to all listings
        </Link>
      </p>
      <ListingForm action={createListing} submitLabel="Publish listing" />
    </div>
  );
}
