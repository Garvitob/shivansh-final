# Shivansh Properties

Production website for Shivansh Properties — a family-run property consultancy in Noida,
working out of CM-52, Sector 144, since 2011.

**Building Trust. Creating Futures.**

## Stack

- Next.js 15 (App Router, TypeScript, server-rendered)
- Tailwind CSS v4 with a hand-written token system (light default, manual dark toggle)
- Neon Postgres + Prisma
- Auth.js (NextAuth v5) credentials — single admin
- Vercel Blob for listing photos
- Deploys to Vercel

## Local setup

```bash
npm install
npm run fetch:images     # downloads the 13 Noida photographs into /public/images
npm run db:push          # pushes the Prisma schema to Neon
npm run db:seed          # creates the admin user from ADMIN_EMAIL / ADMIN_PASSWORD
npm run dev
```

### Environment

| Variable | Required | Notes |
| --- | --- | --- |
| `DATABASE_URL` | yes | Neon Postgres connection string |
| `AUTH_SECRET` | yes | `openssl rand -base64 32` |
| `NEXTAUTH_URL` | local only | `http://localhost:3000` |
| `ADMIN_EMAIL` / `ADMIN_PASSWORD` | yes | used by the seed script only |
| `BLOB_READ_WRITE_TOKEN` | yes | Vercel Blob, for listing photo uploads. **The store must be a public one** — listing photos are shown on a public website. A private store returns "Cannot use public access on a private store" and the admin surfaces that message. |
| `NEXT_PUBLIC_SITE_URL` | yes | canonical origin, no trailing slash |
| `NEXT_PUBLIC_GA_ID` | no | GA4 loads only when set |
| `RESEND_API_KEY` + `NOTIFY_EMAIL` | no | enquiry email notifications, skipped silently when absent |

## Admin

`/admin/login` — one account, no signup. Listings and enquiries live at `/admin`.

## Content notes

Every page renders complete with an empty database. Listing strips appear only when
there are active listings for that sector. Nothing on the site states a fact about the
business that isn't true.

## QA

```bash
npm run build
npm run qa:links         # crawls every internal link, reports 404s and console errors
npm run qa:screens       # full-page screenshots, 375/768/1440, light + dark, into /qa-screens
```
