import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";
import { checkRateLimit, RATE_LIMITS, RATE_LIMIT_MESSAGE } from "@/lib/rate-limit";

function clientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp;
  return "127.0.0.1";
}

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // --- Lapisan 2: rate limit kasar per IP untuk /api/trpc/* ---
  // Halaman GET publik (/, /materi, /kuis, /tryout, /checklist) TIDAK
  // di-rate-limit — link yang dibagikan di sosmed harus tetap bisa dibuka.
  // /api/auth/* juga TIDAK dibatasi di sini — Better Auth sudah punya
  // rate limit sendiri (login 5/menit, register 3/menit); membatasi dua
  // kali bisa memblokir login normal.
  if (pathname.startsWith("/api/trpc")) {
    const result = checkRateLimit({
      key: `proxy-trpc:${clientIp(request)}`,
      limit: RATE_LIMITS.trpcGeneral.limit,
      windowMs: RATE_LIMITS.trpcGeneral.windowMs,
    });
    if (!result.allowed) {
      return new Response(
        JSON.stringify({ error: RATE_LIMIT_MESSAGE }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": String(Math.max(1, Math.ceil(result.resetAfterMs / 1000))),
            "X-RateLimit-Remaining": "0",
          },
        },
      );
    }
    return NextResponse.next();
  }

  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const sessionCookie = getSessionCookie(request);

  // Optimistic redirect
  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/:path*"],
};
