import { put } from "@vercel/blob";
import { auth } from "@/auth";

/** Photos are resized in the browser first, so bodies stay small. */
const MAX_BYTES = 4 * 1024 * 1024;
const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "image/avif"]);

function safeName(input: string) {
  const cleaned = input
    .toLowerCase()
    .replace(/[^a-z0-9.\-_]/g, "-")
    .replace(/-+/g, "-")
    .slice(-70);
  return cleaned || "photo.jpg";
}

export async function POST(request: Request): Promise<Response> {
  const session = await auth();
  if (!session?.user) {
    return Response.json({ error: "Not signed in" }, { status: 401 });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return Response.json({ error: "Photo storage is not configured" }, { status: 500 });
  }

  const form = await request.formData().catch(() => null);
  const file = form?.get("file");

  if (!(file instanceof File)) {
    return Response.json({ error: "No file received" }, { status: 400 });
  }
  if (!ALLOWED.has(file.type)) {
    return Response.json({ error: `Unsupported image type: ${file.type}` }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return Response.json({ error: "That image is too large, even after resizing" }, { status: 413 });
  }

  try {
    const blob = await put(`listings/${safeName(file.name)}`, file, {
      access: "public",
      addRandomSuffix: true,
      contentType: file.type,
    });
    return Response.json({ url: blob.url });
  } catch (error) {
    console.error("[blob] upload failed:", error);
    const message = error instanceof Error ? error.message : "Upload failed";

    // Listing photos are shown on a public website, so the Blob store has to be
    // a public one. Say so plainly rather than leaking the SDK wording.
    if (/private access|private store/i.test(message)) {
      return Response.json(
        {
          error:
            "The Vercel Blob store is set to private. Listing photos are shown publicly, so the store needs public access — change it in the Vercel dashboard under Storage, or create a public store and update BLOB_READ_WRITE_TOKEN.",
        },
        { status: 500 }
      );
    }

    return Response.json({ error: message }, { status: 500 });
  }
}
