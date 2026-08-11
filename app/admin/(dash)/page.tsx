import Link from "next/link";
import { prisma, safeQuery } from "@/lib/prisma";
import { setListingStatus } from "@/lib/actions/listings";
import { propertyTypeLabel, purposeLabel } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function AdminListingsPage() {
  const listings = await safeQuery(
    () => prisma.listing.findMany({ orderBy: { createdAt: "desc" } }),
    []
  );

  const active = listings.filter((l) => l.status === "ACTIVE").length;

  return (
    <div className="wrap">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 20,
          flexWrap: "wrap",
          marginBottom: 30,
        }}
      >
        <div>
          <p className="eyebrow">Listings</p>
          <h1 className="h2">
            {listings.length} listing{listings.length === 1 ? "" : "s"}
          </h1>
          <p style={{ color: "var(--muted)", fontSize: 14, marginTop: 8 }}>
            {active} active on the site right now.
          </p>
        </div>
        <Link className="btn-solid" href="/admin/listings/new">
          Add listing
        </Link>
      </div>

      {listings.length === 0 ? (
        <p className="admin-empty">
          Nothing here yet. The public site is built to look complete without listings, so add one
          only when you have something real to show.
        </p>
      ) : (
        <div className="table-scroll">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Sector</th>
                <th>Type</th>
                <th>Purpose</th>
                <th>Price</th>
                <th>Photos</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {listings.map((l) => (
                <tr key={l.id}>
                  <td style={{ minWidth: 220 }}>
                    <Link href={`/admin/listings/${l.id}`} style={{ fontWeight: 600 }}>
                      {l.title}
                    </Link>
                    <div style={{ color: "var(--muted)", fontSize: 12.5, marginTop: 4 }}>
                      /listings/{l.slug}
                    </div>
                  </td>
                  <td>{l.sector}</td>
                  <td>{propertyTypeLabel(l.propertyType)}</td>
                  <td>{purposeLabel(l.purpose)}</td>
                  <td>{l.price || "—"}</td>
                  <td>{l.photos.length || "—"}</td>
                  <td>
                    <span className={l.status === "ACTIVE" ? "tag on" : "tag"}>
                      {l.status === "ACTIVE" ? "Active" : "Closed"}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      <Link className="btn-mini" href={`/admin/listings/${l.id}`}>
                        Edit
                      </Link>
                      <form action={setListingStatus}>
                        <input type="hidden" name="id" value={l.id} />
                        <input
                          type="hidden"
                          name="status"
                          value={l.status === "ACTIVE" ? "CLOSED" : "ACTIVE"}
                        />
                        <button className="btn-mini" type="submit">
                          {l.status === "ACTIVE" ? "Mark closed" : "Reopen"}
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
