import "server-only";

/**
 * A missing DATABASE_URL used to look identical to "no listings yet": every read
 * goes through safeQuery, so the site rendered perfectly while the enquiry form
 * failed and the admin could not sign in. This says so, loudly, once per boot.
 */
type Requirement = {
  name: string;
  required: boolean;
  breaks: string;
};

const REQUIREMENTS: Requirement[] = [
  {
    name: "DATABASE_URL",
    required: true,
    breaks: "enquiry form, listings and the whole admin",
  },
  {
    name: "AUTH_SECRET",
    required: true,
    breaks: "admin sign in — every /api/auth route returns a configuration error",
  },
  {
    name: "NEXT_PUBLIC_SITE_URL",
    required: true,
    breaks: "canonical URLs, the sitemap and OpenGraph tags point at the wrong origin",
  },
  {
    name: "BLOB_READ_WRITE_TOKEN",
    required: false,
    breaks: "listing photo uploads",
  },
];

let reported = false;

export function reportEnvironment(): void {
  if (reported) return;
  reported = true;

  const missing = REQUIREMENTS.filter((r) => !process.env[r.name]);
  if (!missing.length) return;

  const lines = missing.map((r) => `  ${r.required ? "MISSING" : "not set"}  ${r.name} — ${r.breaks}`);

  console.error(
    [
      "",
      "──────────────────────────────────────────────────────────────",
      " Shivansh Properties — environment is incomplete",
      "──────────────────────────────────────────────────────────────",
      ...lines,
      "",
      " On Vercel these go in Project → Settings → Environment Variables.",
      " Do not copy NEXTAUTH_URL across; Vercel provides its own host.",
      "──────────────────────────────────────────────────────────────",
      "",
    ].join("\n")
  );
}

/** True when the database is configured at all — used to explain failures. */
export const hasDatabase = Boolean(process.env.DATABASE_URL);
