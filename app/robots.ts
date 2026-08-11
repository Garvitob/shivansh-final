import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** AI crawlers are explicitly welcome — the content is written to be quoted. */
const AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/", "/api/"],
      },
      ...AI_AGENTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/admin", "/admin/", "/api/"],
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
