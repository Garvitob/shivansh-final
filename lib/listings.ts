import type { Listing, PropertyType, Purpose } from "@prisma/client";
import { prisma, safeQuery } from "@/lib/prisma";

export type { Listing };

export type ListingFilters = {
  propertyType?: string;
  sector?: string;
  purpose?: string;
};

const PROPERTY_TYPES = [
  "FLAT",
  "KOTHI",
  "PLOT_LAND",
  "OFFICE",
  "SHOP",
  "CAFE_RESTAURANT",
  "INDUSTRIAL",
  "PG",
  "OTHER",
] as const;

const PURPOSES = ["SALE", "RENT", "LEASE"] as const;

function asPropertyType(value?: string): PropertyType | undefined {
  return PROPERTY_TYPES.includes(value as PropertyType) ? (value as PropertyType) : undefined;
}

function asPurpose(value?: string): Purpose | undefined {
  return PURPOSES.includes(value as Purpose) ? (value as Purpose) : undefined;
}

export async function getActiveListings(filters: ListingFilters = {}): Promise<Listing[]> {
  const propertyType = asPropertyType(filters.propertyType);
  const purpose = asPurpose(filters.purpose);
  const sector = filters.sector?.trim() || undefined;

  return safeQuery(
    () =>
      prisma.listing.findMany({
        where: {
          status: "ACTIVE",
          ...(propertyType ? { propertyType } : {}),
          ...(purpose ? { purpose } : {}),
          ...(sector ? { sector: { equals: sector, mode: "insensitive" } } : {}),
        },
        orderBy: { createdAt: "desc" },
      }),
    []
  );
}

/** Used by the conditional "Available now in Sector X" strips. */
export async function getListingsForSector(sector: string, take = 6): Promise<Listing[]> {
  return safeQuery(
    () =>
      prisma.listing.findMany({
        where: { status: "ACTIVE", sector: { equals: sector, mode: "insensitive" } },
        orderBy: { createdAt: "desc" },
        take,
      }),
    []
  );
}

export async function getListingBySlug(slug: string): Promise<Listing | null> {
  return safeQuery(() => prisma.listing.findUnique({ where: { slug } }), null);
}

export async function getAllActiveListingSlugs(): Promise<{ slug: string; updatedAt: Date }[]> {
  return safeQuery(
    () =>
      prisma.listing.findMany({
        where: { status: "ACTIVE" },
        select: { slug: true, updatedAt: true },
      }),
    []
  );
}

/** Distinct sectors that currently have something live — powers the filter bar. */
export async function getSectorsWithListings(): Promise<string[]> {
  const rows = await safeQuery(
    () =>
      prisma.listing.findMany({
        where: { status: "ACTIVE" },
        select: { sector: true },
        distinct: ["sector"],
        orderBy: { sector: "asc" },
      }),
    [] as { sector: string }[]
  );
  return rows.map((r) => r.sector);
}

export function slugifyListing(title: string, sector: string): string {
  const base = `${title} ${sector}`
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 70)
    .replace(/^-|-$/g, "");
  return base || "listing";
}
