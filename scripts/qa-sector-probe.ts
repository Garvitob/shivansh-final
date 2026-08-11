/** Is it the query or the cache? Inserts a listing, asks both. */
import { PrismaClient } from "@prisma/client";
import { getListingsForSector } from "../lib/listings";

process.loadEnvFile(".env");

const prisma = new PrismaClient();
const BASE = process.env.QA_BASE_URL || "http://localhost:3000";
const slug = `probe-sector-${Date.now()}`;

async function fetchPage() {
  const res = await fetch(`${BASE}/sectors/sector-144-noida`, { cache: "no-store" });
  const html = await res.text();
  return {
    status: res.status,
    cache: res.headers.get("x-nextjs-cache") ?? "(no header)",
    age: res.headers.get("age") ?? "-",
    hasListing: html.includes(slug),
    hasStrip: html.includes("Available now in Sector 144"),
  };
}

async function main() {
  await prisma.listing.create({
    data: {
      slug,
      title: "Sector strip probe",
      sector: "Sector 144",
      propertyType: "FLAT",
      purpose: "SALE",
      description: "Probe listing.",
      photos: [],
      status: "ACTIVE",
    },
  });
  console.log(`inserted ${slug}`);

  const viaQuery = await getListingsForSector("Sector 144");
  console.log(
    `getListingsForSector("Sector 144") -> ${viaQuery.length} row(s): ${viaQuery
      .map((l) => l.slug)
      .join(", ")}`
  );

  console.log("page before revalidation:", await fetchPage());

  const res = await fetch(`${BASE}/api/qa/revalidate?path=/sectors/sector-144-noida`, {
    method: "POST",
  }).catch(() => null);
  console.log("revalidate endpoint:", res ? res.status : "not available");

  await new Promise((r) => setTimeout(r, 1200));
  console.log("page after revalidation:", await fetchPage());

  await prisma.listing.delete({ where: { slug } });
  console.log("cleaned up");
  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error(e);
  await prisma.listing.deleteMany({ where: { slug } });
  await prisma.$disconnect();
  process.exitCode = 1;
});
