import { spawn } from "node:child_process";

export const BASE = process.env.QA_BASE_URL || "http://localhost:3000";

async function reachable(url) {
  try {
    const res = await fetch(url, { method: "GET" });
    return res.ok || res.status === 404;
  } catch {
    return false;
  }
}

/**
 * Starts `next start` if nothing is already serving BASE, and returns a stop
 * function. Keeps the QA scripts runnable with a single command.
 */
export async function ensureServer() {
  if (await reachable(BASE)) {
    console.log(`Using the server already running at ${BASE}`);
    return async () => {};
  }

  if (process.env.QA_NO_SPAWN) {
    throw new Error(`Nothing is serving ${BASE}. Start it with: npm run start`);
  }

  console.log("Starting next start …");
  const child = spawn("npm", ["run", "start"], {
    stdio: ["ignore", "pipe", "pipe"],
    shell: true,
    env: { ...process.env, PORT: new URL(BASE).port || "3000" },
  });

  child.stdout.on("data", () => {});
  child.stderr.on("data", (d) => {
    const s = String(d);
    if (s.toLowerCase().includes("error")) process.stderr.write(s);
  });

  const deadline = Date.now() + 90_000;
  while (Date.now() < deadline) {
    if (await reachable(BASE)) {
      console.log(`Server up at ${BASE}\n`);
      return async () => {
        child.kill("SIGTERM");
        // Windows detaches npm from the node child; make sure the port frees up.
        try {
          spawn("taskkill", ["/pid", String(child.pid), "/T", "/F"], { shell: true });
        } catch {}
        await new Promise((r) => setTimeout(r, 800));
      };
    }
    await new Promise((r) => setTimeout(r, 700));
  }

  child.kill("SIGTERM");
  throw new Error("Server did not come up within 90 seconds");
}

/** Every public route, taken from the sitemap so the list cannot drift. */
export async function publicRoutes() {
  const res = await fetch(`${BASE}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
  const xml = await res.text();
  const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1])
    .map((u) => {
      try {
        return new URL(u).pathname || "/";
      } catch {
        return null;
      }
    })
    .filter(Boolean);
  return [...new Set(paths)].sort();
}

/** A short, readable file name for a route. */
export function routeSlug(route) {
  if (route === "/") return "home";
  return route.replace(/^\//, "").replace(/\//g, "__").replace(/[^a-z0-9_.-]/gi, "-");
}
