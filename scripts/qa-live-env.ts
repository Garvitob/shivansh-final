/**
 * Works out which environment variables the deployment is actually missing,
 * by probing the live site rather than guessing.
 *
 *   npx tsx scripts/qa-live-env.ts https://your-site.vercel.app
 */
import { PrismaClient } from "@prisma/client";

process.loadEnvFile(".env");

const BASE = (process.argv[2] || process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");
if (!BASE) throw new Error("Pass the deployed URL as the first argument.");

const prisma = new PrismaClient();
const slug = `env-probe-${Date.now()}`;

async function main() {
  const report: string[] = [];

  /* ---------------------------------------------------------------- AUTH_SECRET */
  const csrf = await fetch(`${BASE}/api/auth/csrf`).then((r) => r.text());
  if (csrf.includes("problem with the server configuration")) {
    report.push("AUTH_SECRET   MISSING — every /api/auth/* route returns a configuration error");
  } else if (csrf.includes("csrfToken")) {
    report.push("AUTH_SECRET   ok");
  } else {
    report.push(`AUTH_SECRET   unclear — csrf returned: ${csrf.slice(0, 80)}`);
  }

  /* --------------------------------------------------------------- DATABASE_URL */
  await prisma.listing.create({
    data: {
      slug,
      title: "Environment probe",
      sector: "Sector 144",
      propertyType: "FLAT",
      purpose: "SALE",
      description: "Temporary row used to check the deployment can read the database.",
      photos: [],
      status: "ACTIVE",
    },
  });

  const html = await fetch(`${BASE}/listings`, { cache: "no-store" }).then((r) => r.text());
  if (html.includes(slug)) {
    report.push("DATABASE_URL  ok — the deployment reads the same Neon database");
  } else if (html.includes("Nothing listed today")) {
    report.push(
      "DATABASE_URL  MISSING or wrong — a row exists in Neon but the deployment shows none"
    );
  } else {
    report.push("DATABASE_URL  unclear — /listings rendered but without the probe row");
  }

  /* ------------------------------------------------------- NEXT_PUBLIC_SITE_URL */
  const home = await fetch(`${BASE}/`).then((r) => r.text());
  const canonical = home.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? "(none)";
  report.push(
    canonical.startsWith(BASE) || canonical.includes("shivanshproperties")
      ? `NEXT_PUBLIC_SITE_URL  canonical is ${canonical}`
      : `NEXT_PUBLIC_SITE_URL  canonical is ${canonical}`
  );

  console.log(`\nDeployment: ${BASE}\n`);
  for (const line of report) console.log(`  ${line}`);
  console.log();
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.listing.deleteMany({ where: { slug } });
    await prisma.$disconnect();
  });
