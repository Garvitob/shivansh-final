"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { slugifyListing } from "@/lib/listings";
import { SECTORS } from "@/lib/sectors";
import { COMBOS } from "@/lib/combos";
import { SERVICE_LISTING_FILTER } from "@/lib/services";

export type ListingFormState = { error?: string };

const schema = z.object({
  title: z.string().trim().min(3, "Give the listing a title").max(140),
  sector: z.string().trim().min(1, "Sector is needed").max(80),
  propertyType: z.enum([
    "FLAT",
    "KOTHI",
    "PLOT_LAND",
    "OFFICE",
    "SHOP",
    "CAFE_RESTAURANT",
    "INDUSTRIAL",
    "PG",
    "OTHER",
  ]),
  purpose: z.enum(["SALE", "RENT", "LEASE"]),
  price: z.string().trim().max(60).default(""),
  size: z.string().trim().max(60).default(""),
  description: z.string().trim().min(1, "Write a short description").max(6000),
  status: z.enum(["ACTIVE", "CLOSED"]),
});

async function requireAdmin() {
  const session = await auth();
  if (!session?.user) redirect("/admin/login");
}

/**
 * A listing can surface on its own page, the listings index, its sector page,
 * the matching combination pages, the relevant service pages and the corridor
 * page. Refresh exactly those rather than purging all 56 static pages.
 */
function revalidateForListing(listing: { slug: string; sector: string; propertyType: string }) {
  revalidatePath("/listings");
  revalidatePath(`/listings/${listing.slug}`);
  revalidatePath("/property-dealer-noida-expressway");
  revalidatePath("/sitemap.xml");

  const number = listing.sector.match(/\d+/)?.[0];
  const sector = number ? SECTORS.find((s) => s.num === number) : undefined;
  if (sector) revalidatePath(`/sectors/${sector.slug}`);

  for (const combo of COMBOS) {
    const sectorMatches = combo.sectorNum && combo.sectorNum === number;
    const typeMatches = combo.listingType === listing.propertyType;
    if ((sectorMatches && typeMatches) || (!combo.sectorNum && typeMatches)) {
      revalidatePath(`/${combo.slug}`);
    }
  }

  for (const [slug, filter] of Object.entries(SERVICE_LISTING_FILTER)) {
    if (filter.propertyType === listing.propertyType || filter.purpose) {
      revalidatePath(`/services/${slug}`);
    }
  }
}

async function uniqueSlug(title: string, sector: string, ignoreId?: string) {
  const base = slugifyListing(title, sector);
  let candidate = base;
  let n = 2;
  // Very small table — a simple loop is fine and keeps slugs readable.
  for (;;) {
    const clash = await prisma.listing.findUnique({ where: { slug: candidate } });
    if (!clash || clash.id === ignoreId) return candidate;
    candidate = `${base}-${n++}`;
  }
}

function readPhotos(formData: FormData): string[] {
  return formData
    .getAll("photos")
    .map((v) => String(v).trim())
    .filter((v) => v.startsWith("https://"));
}

export async function createListing(
  _prev: ListingFormState,
  formData: FormData
): Promise<ListingFormState> {
  await requireAdmin();

  const parsed = schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Please check the form." };
  }
  const data = parsed.data;

  let slug: string;
  try {
    slug = await uniqueSlug(data.title, data.sector);
    await prisma.listing.create({
      data: {
        slug,
        title: data.title,
        sector: data.sector,
        propertyType: data.propertyType,
        purpose: data.purpose,
        price: data.price || null,
        size: data.size || null,
        description: data.description,
        photos: readPhotos(formData),
        status: data.status,
      },
    });
  } catch (error) {
    console.error("[listing] create failed:", error);
    return { error: "Could not save the listing. Try again." };
  }

  revalidateForListing({ slug, sector: data.sector, propertyType: data.propertyType });
  redirect("/admin");
}

export async function updateListing(
  _prev: ListingFormState,
  formData: FormData
): Promise<ListingFormState> {
  await requireAdmin();

  const id = String(formData.get("id") ?? "");
  if (!id) return { error: "Missing listing id." };

  const parsed = schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Please check the form." };
  }
  const data = parsed.data;

  let slug: string;
  try {
    slug = await uniqueSlug(data.title, data.sector, id);
    await prisma.listing.update({
      where: { id },
      data: {
        slug,
        title: data.title,
        sector: data.sector,
        propertyType: data.propertyType,
        purpose: data.purpose,
        price: data.price || null,
        size: data.size || null,
        description: data.description,
        photos: readPhotos(formData),
        status: data.status,
      },
    });
  } catch (error) {
    console.error("[listing] update failed:", error);
    return { error: "Could not save the changes. Try again." };
  }

  revalidateForListing({ slug, sector: data.sector, propertyType: data.propertyType });
  redirect("/admin");
}

export async function setListingStatus(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "") === "CLOSED" ? "CLOSED" : "ACTIVE";
  if (!id) return;

  try {
    const listing = await prisma.listing.update({ where: { id }, data: { status } });
    revalidateForListing(listing);
  } catch (error) {
    console.error("[listing] status change failed:", error);
  }
}

export async function setEnquiryStatus(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  const raw = String(formData.get("status") ?? "");
  const status = raw === "CONTACTED" || raw === "CLOSED" ? raw : "NEW";
  if (!id) return;

  try {
    await prisma.enquiry.update({ where: { id }, data: { status } });
    revalidatePath("/admin/enquiries");
  } catch (error) {
    console.error("[enquiry] status change failed:", error);
  }
}
