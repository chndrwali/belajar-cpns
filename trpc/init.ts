import { getSession } from "@/hooks/get-session";
import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { cache } from "react";
import { checkRateLimit, RATE_LIMIT_MESSAGE } from "@/lib/rate-limit";

export const createTRPCContext = cache(async (opts?: { req: Request }) => {
  /**
   * @see: https://trpc.io/docs/server/context
   */
  const ip = opts?.req.headers.get("x-forwarded-for") ?? "127.0.0.1";
  return { userId: "user_123", ip };
});
// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC
  .context<Awaited<ReturnType<typeof createTRPCContext>>>()
  .create({
    /**
     * @see https://trpc.io/docs/server/data-transformers
     */
    transformer: superjson,
  });
// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
export const protectedProcedure = baseProcedure.use(async ({ ctx, next }) => {
  const session = await getSession();

  if (!session) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Belum login" });
  }

  // ctx is already typed to include ip
  const ctxWithIp = ctx;

  return next({ ctx: { ...ctxWithIp, auth: session, ip: ctxWithIp.ip } });
});
export const adminProcedure = protectedProcedure.use(async ({ ctx, next }) => {
  if (ctx.auth.user?.role !== "admin") {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "Anda tidak memiliki akses admin",
    });
  }
  return next();
});

/**
 * Procedure login + rate limit (sliding-window in-memory, lihat lib/rate-limit.ts).
 * Kunci: userId kalau login, IP kalau tamu. Dijalankan SETELAH cek login
 * (dirangkai di atas protectedProcedure), jadi progres selalu terikat akun.
 * Kena limit -> error TOO_MANY_REQUESTS dengan pesan Bahasa Indonesia.
 */
export const rateLimitedProcedure = (limit: number, windowMs = 60_000) =>
  protectedProcedure.use(async ({ ctx, next }) => {
    const key = ctx.auth.user?.id ? `user:${ctx.auth.user.id}` : `ip:${ctx.ip}`;
    const result = checkRateLimit({ key, limit, windowMs });
    if (!result.allowed) {
      throw new TRPCError({ code: "TOO_MANY_REQUESTS", message: RATE_LIMIT_MESSAGE });
    }
    return next();
  });
