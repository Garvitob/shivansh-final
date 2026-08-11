"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { upload } from "@vercel/blob/client";

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

    for (const file of files) {
      try {
        const blob = await upload(file.name, file, {
          access: "public",
          handleUploadUrl: "/api/blob/upload",
        });
        added.push(blob.url);
      } catch (err) {
        setError(err instanceof Error ? err.message : "That photo did not upload.");
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
              <Image src={url} alt="" fill sizes="200px" style={{ objectFit: "cover" }} />
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
      <span className="form-note">
        {busy
          ? "Uploading…"
          : "Leave this empty if you have no photos — the listing still looks fine without them."}
      </span>
      {error ? <span className="form-error">{error}</span> : null}
    </div>
  );
}
