import Link from "next/link";
import { prisma, safeQuery } from "@/lib/prisma";
import { setEnquiryStatus } from "@/lib/actions/listings";

export const dynamic = "force-dynamic";

const WHEN = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZone: "Asia/Kolkata",
});

export default async function AdminEnquiriesPage() {
  const enquiries = await safeQuery(
    () => prisma.enquiry.findMany({ orderBy: { createdAt: "desc" }, take: 300 }),
    []
  );

  const fresh = enquiries.filter((e) => e.status === "NEW").length;

  return (
    <div className="wrap">
      <p className="eyebrow">Enquiries</p>
      <h1 className="h2">
        {fresh} new of {enquiries.length}
      </h1>
      <p style={{ color: "var(--muted)", fontSize: 14, margin: "8px 0 30px" }}>
        Newest first. Call them back on the number they left.
      </p>

      {enquiries.length === 0 ? (
        <p className="admin-empty">No enquiries yet.</p>
      ) : (
        <div className="table-scroll">
          <table className="admin-table">
            <thead>
              <tr>
                <th>When</th>
                <th>Who</th>
                <th>Wants</th>
                <th>Where</th>
                <th>Message</th>
                <th>Came from</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((e) => (
                <tr key={e.id}>
                  <td style={{ whiteSpace: "nowrap", color: "var(--muted)", fontSize: 13 }}>
                    {WHEN.format(e.createdAt)}
                  </td>
                  <td style={{ minWidth: 160 }}>
                    <div style={{ fontWeight: 600 }}>{e.name}</div>
                    <a href={`tel:${e.phone}`} style={{ fontSize: 13.5, color: "var(--brass)" }}>
                      {e.phone}
                    </a>
                  </td>
                  <td style={{ whiteSpace: "nowrap" }}>
                    {e.want}
                    {e.propertyType ? (
                      <div style={{ color: "var(--muted)", fontSize: 13 }}>{e.propertyType}</div>
                    ) : null}
                  </td>
                  <td>{e.sectorArea || "—"}</td>
                  <td style={{ minWidth: 220, maxWidth: 340, color: "var(--muted)", fontSize: 13.5 }}>
                    {e.message || "—"}
                  </td>
                  <td style={{ fontSize: 13 }}>
                    <Link href={e.sourcePage} target="_blank" rel="noopener">
                      {e.sourcePage}
                    </Link>
                    {e.listingSlug ? (
                      <div style={{ color: "var(--brass)", fontSize: 12.5, marginTop: 4 }}>
                        listing: {e.listingSlug}
                      </div>
                    ) : null}
                  </td>
                  <td>
                    <span className={e.status === "NEW" ? "tag on" : "tag"}>
                      {e.status === "NEW" ? "New" : e.status === "CONTACTED" ? "Contacted" : "Closed"}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      {e.status !== "CONTACTED" ? (
                        <form action={setEnquiryStatus}>
                          <input type="hidden" name="id" value={e.id} />
                          <input type="hidden" name="status" value="CONTACTED" />
                          <button className="btn-mini" type="submit">
                            Contacted
                          </button>
                        </form>
                      ) : null}
                      {e.status !== "CLOSED" ? (
                        <form action={setEnquiryStatus}>
                          <input type="hidden" name="id" value={e.id} />
                          <input type="hidden" name="status" value="CLOSED" />
                          <button className="btn-mini" type="submit">
                            Close
                          </button>
                        </form>
                      ) : null}
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
