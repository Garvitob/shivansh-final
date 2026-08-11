import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

/**
 * The site is designed to render completely with no listings at all, so a
 * database that is unreachable (a fresh clone, a build without DATABASE_URL,
 * a cold Neon branch) must never break a page. Every read goes through here.
 */
export async function safeQuery<T>(run: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await run();
  } catch (error) {
    console.error("[db] read failed, falling back:", error instanceof Error ? error.message : error);
    return fallback;
  }
}
