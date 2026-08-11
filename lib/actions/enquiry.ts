"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { BUSINESS } from "@/lib/site";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const WANTS = ["BUY", "SELL", "RENT", "LEASE", "OTHER"] as const;

/**
 * Indian mobile numbers, written the many ways people actually type them:
 * 9911559688, 099115 59688, +91 99115-59688.
 */
const phoneSchema = z
  .string()
  .trim()
  .min(1, "Phone number is needed")
  .transform((v) => v.replace(/[\s\-().]/g, ""))
  .refine((v) => /^(\+?91|0)?[6-9]\d{9}$/.test(v), "That phone number does not look right");

const schema = z.object({
  name: z.string().trim().min(2, "Name is needed").max(80),
  phone: phoneSchema,
  want: z.enum(WANTS).catch("OTHER"),
  propertyType: z.string().trim().max(60).default(""),
  sectorArea: z.string().trim().max(120).default(""),
  message: z.string().trim().max(2000).default(""),
  sourcePage: z.string().trim().max(300).default("/"),
  listingSlug: z.string().trim().max(120).optional(),
});

async function notifyByEmail(data: {
  name: string;
  phone: string;
  want: string;
  propertyType: string;
  sectorArea: string;
  message: string;
  sourcePage: string;
  listingSlug?: string;
}) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL;
  if (!key || !to) return; // not configured — skip silently

  const lines = [
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Wants to: ${data.want}`,
    data.propertyType ? `Property type: ${data.propertyType}` : null,
    data.sectorArea ? `Sector or area: ${data.sectorArea}` : null,
    data.message ? `Message: ${data.message}` : null,
    `Came from: ${data.sourcePage}`,
    data.listingSlug ? `Listing: ${data.listingSlug}` : null,
  ].filter(Boolean);

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "Shivansh Properties <onboarding@resend.dev>",
        to: [to],
        subject: `New enquiry — ${data.name} (${data.phone})`,
        text: lines.join("\n"),
      }),
    });
  } catch (error) {
    console.error("[enquiry] email notification failed:", error);
  }
}

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData
): Promise<EnquiryState> {
  // Honeypot — real people never fill this in.
  if (String(formData.get("company") || "").trim() !== "") {
    return { status: "success" };
  }

  const parsed = schema.safeParse({
    name: formData.get("name") ?? "",
    phone: formData.get("phone") ?? "",
    want: formData.get("want") ?? "OTHER",
    propertyType: formData.get("propertyType") ?? "",
    sectorArea: formData.get("sectorArea") ?? "",
    message: formData.get("message") ?? "",
    sourcePage: formData.get("sourcePage") ?? "/",
    listingSlug: formData.get("listingSlug") ?? undefined,
  });

  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return { status: "error", message: first?.message ?? "Please check the form and try again." };
  }

  const data = parsed.data;

  try {
    await prisma.enquiry.create({
      data: {
        name: data.name,
        phone: data.phone,
        want: data.want,
        propertyType: data.propertyType,
        sectorArea: data.sectorArea,
        message: data.message || null,
        sourcePage: data.sourcePage,
        listingSlug: data.listingSlug || null,
      },
    });
  } catch (error) {
    console.error("[enquiry] could not be saved:", error);
    if (!process.env.DATABASE_URL) {
      console.error(
        "[enquiry] DATABASE_URL is not set on this deployment — no enquiry can be stored."
      );
    }
    return {
      status: "error",
      message: `Something went wrong at our end. Please call ${BUSINESS.phoneShort} — we'll pick up.`,
    };
  }

  await notifyByEmail({
    name: data.name,
    phone: data.phone,
    want: data.want,
    propertyType: data.propertyType,
    sectorArea: data.sectorArea,
    message: data.message,
    sourcePage: data.sourcePage,
    listingSlug: data.listingSlug,
  });

  return { status: "success" };
}
