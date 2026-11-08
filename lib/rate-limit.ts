/**
 * Rate limit sliding-window in-memory.
 *
 * Dipakai dua lapis:
 *  - proxy.ts — pembatas kasar per IP untuk /api/trpc/*
 *  - trpc/init.ts — pembatas per user (login) / per IP (tamu) untuk tiap
 *    procedure progress (lihat RATE_LIMITS di bawah).
 *
 * CATATAN PENTING: limit ini in-memory, artinya PER INSTANCE server.
 * Di Vercel serverless, tiap instance (region / cold start) punya
 * hitungannya sendiri — jadi ini perlindungan praktis terhadap
 * brute-force & spam, BUKAN pembatas distribusi yang sempurna.
 * Kalau nanti butuh yang ketat lintas instance, jalurnya Upstash Redis
 * (opsional — belum dipasang, tidak butuh env baru saat ini).
 * Semua angka batas hidup di satu tempat: RATE_LIMITS.
 */

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  /** Milidetik sampai window berikutnya (0 kalau masih boleh). */
  resetAfterMs: number;
}

interface Entry {
  timestamps: number[];
}

const store = new Map<string, Entry>();
let lastCleanup = 0;
const CLEANUP_INTERVAL_MS = 60_000;

function cleanup(now: number, windowMs: number) {
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;
  for (const [key, entry] of store) {
    entry.timestamps = entry.timestamps.filter((t) => now - t < windowMs);
    if (entry.timestamps.length === 0) store.delete(key);
  }
}

export function checkRateLimit(opts: {
  key: string;
  limit: number;
  windowMs: number;
}): RateLimitResult {
  const now = Date.now();
  cleanup(now, opts.windowMs);
  const entry = store.get(opts.key) ?? { timestamps: [] };
  entry.timestamps = entry.timestamps.filter((t) => now - t < opts.windowMs);

  if (entry.timestamps.length >= opts.limit) {
    const oldest = entry.timestamps[0];
    return {
      allowed: false,
      remaining: 0,
      resetAfterMs: Math.max(0, oldest + opts.windowMs - now),
    };
  }

  entry.timestamps.push(now);
  store.set(opts.key, entry);
  return {
    allowed: true,
    remaining: opts.limit - entry.timestamps.length,
    resetAfterMs: 0,
  };
}

/** Semua angka batas rate limit — ubah di sini untuk melonggarkan/mengetatkan. */
export const RATE_LIMITS = {
  /** Pembatas kasar per IP untuk semua /api/trpc/* (di proxy). */
  trpcGeneral: { limit: 100, windowMs: 60_000 },
  /** Lihat progres dashboard (dipanggil tiap buka halaman). */
  progressGetDashboard: { limit: 60, windowMs: 60_000 },
  /** Tandai materi / centang checklist. */
  progressToggle: { limit: 30, windowMs: 60_000 },
  /** Simpan skor terbaik kuis. */
  progressSaveQuiz: { limit: 20, windowMs: 60_000 },
  /** Simpan hasil tryout (110 soal tidak mungkin disubmit berkali-kali dalam semenit). */
  progressSaveTryout: { limit: 5, windowMs: 60_000 },
  /** Migrasi progres lama dari localStorage (sekali per login). */
  progressImportLegacy: { limit: 3, windowMs: 60_000 },
} as const;

/** Pesan 429 yang ramah, Bahasa Indonesia. */
export const RATE_LIMIT_MESSAGE =
  "Terlalu banyak permintaan. Tunggu sebentar, lalu coba lagi.";
