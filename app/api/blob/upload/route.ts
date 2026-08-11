import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { auth } from "@/auth";

/** Photos go straight from the browser to Vercel Blob — this only mints the token. */
export async function POST(request: Request): Promise<Response> {
  const session = await auth();
  if (!session?.user) {
    return Response.json({ error: "Not signed in" }, { status: 401 });
  }

  const body = (await request.json()) as HandleUploadBody;

  try {
    const result = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => ({
        allowedContentTypes: ["image/jpeg", "image/png", "image/webp", "image/avif"],
        addRandomSuffix: true,
        maximumSizeInBytes: 8 * 1024 * 1024,
      }),
      onUploadCompleted: async () => {
        // Nothing to do — the URL is written to the listing when the form saves.
      },
    });
    return Response.json(result);
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Upload failed" },
      { status: 400 }
    );
  }
}
