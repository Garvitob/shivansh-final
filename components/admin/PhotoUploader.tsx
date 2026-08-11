"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const MAX_EDGE = 2000;
const JPEG_QUALITY = 0.82;

/**
 * Phone photos run to several megabytes each, which is slow to upload and slow
 * to serve. Resize and re-encode in the browser before anything leaves the
 * device — a listing photo never needs to be bigger than this.
 */
async function shrink(file: File): Promise<File> {
  if (typeof createImageBitmap !== "function") return file;

  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MAX_EDGE / Math.max(bitmap.width, bitmap.height));
    const width = Math.round(bitmap.width * scale);
    const height = Math.round(bitmap.height * scale);

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return file;
    ctx.drawImage(bitmap, 0, 0, width, height);
    bitmap.close?.();

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/jpeg", JPEG_QUALITY)
    );
    if (!blob) return file;

    const name = file.name.replace(/\.[^.]+$/, "") || "photo";
    return new File([blob], `${name}.jpg`, { type: "image/jpeg" });
  } catch {
    return file;
  }
}

export function PhotoUploader({ initial = [] }: { initial?: string[] }) {
  const [urls, setUrls] = useState<string[]>(initial);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function onPick(event: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    if (!files.length) return;

    setBusy(true);
    setError(null);
    const added: string[] = [];

    for (const original of files) {
      try {
        const file = await shrink(original);
        const body = new FormData();
        body.append("file", file);

        const res = await fetch("/api/blob/upload", { method: "POST", body });
        const data = (await res.json()) as { url?: string; error?: string };

        if (!res.ok || !data.url) throw new Error(data.error || `Upload failed (${res.status})`);
        added.push(data.url);
      } catch (err) {
        setError(
          `${original.name}: ${err instanceof Error ? err.message : "could not be uploaded"}`
        );
      }
    }

    setUrls((prev) => [...prev, ...added]);
    setBusy(false);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div className="f-field full">
      <label htmlFor="photo-input">Photos (optional)</label>

      {urls.map((url) => (
        <input key={url} type="hidden" name="photos" value={url} />
      ))}

      {urls.length ? (
        <div className="gallery" style={{ marginBottom: 12 }}>
          {urls.map((url) => (
            <figure key={url}>
              <Image src={url} alt="" fill sizes="220px" style={{ objectFit: "cover" }} />
              <button
                type="button"
                className="btn-mini"
                style={{ position: "absolute", right: 8, top: 8, background: "var(--bg)" }}
                onClick={() => setUrls((prev) => prev.filter((u) => u !== url))}
              >
                Remove
              </button>
            </figure>
          ))}
        </div>
      ) : null}

      <input
        id="photo-input"
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/avif"
        multiple
        onChange={onPick}
        disabled={busy}
      />
      <span className="form-note" data-uploading={busy ? "yes" : "no"}>
        {busy
          ? "Uploading…"
          : "Photos are resized before upload. Leave this empty if you have none — the listing still looks fine without them."}
      </span>
      {error ? <span className="form-error">{error}</span> : null}
    </div>
  );
}
