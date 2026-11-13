"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  History,
  LogOut,
  Target,
} from "lucide-react";
import { signOut, useSession } from "@/lib/auth-client";
import { CHECKLIST_ITEMS } from "@/lib/cpns/checklist";
import { MATERIALS } from "@/lib/cpns/materials";
import { QUIZ_QUESTIONS } from "@/lib/cpns/quiz-questions";
import { useDashboardProgress } from "@/components/cpns/progress-hooks";

/** Inisial untuk avatar: huruf pertama nama, fallback huruf pertama email. */
function initials(name?: string | null, email?: string | null): string {
  const source = (name ?? "").trim() || (email ?? "").trim();
  if (!source) return "?";
  const parts = source.split(/\s+/);
  if (parts.length > 1 && parts[1]) return (parts[0][0] + parts[1][0]).toUpperCase();
  return source[0].toUpperCase();
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function ProfileDropdown() {
  const { data: session } = useSession();
  const { dashboard, dashboardLoading, dashboardError } = useDashboardProgress();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Tutup saat klik di luar dropdown, tekan Escape, atau pindah halaman.
  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open ]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  async function handleSignOut() {
    await signOut();
    window.location.href = "/";
  }

  const user = session?.user;
  if (!user) return null;

  const quizTotal = new Set(QUIZ_QUESTIONS.map((q) => q.id.slice(0, q.id.lastIndexOf("-q")))).size;
  const lastTryout =
    dashboard && dashboard.tryoutHistory.length > 0
      ? dashboard.tryoutHistory[dashboard.tryoutHistory.length - 1]
      : null;
  // Riwayat tryout: terbaru dulu (server mengembalikan urutan menaik).
  const tryoutNewestFirst = dashboard ? [...dashboard.tryoutHistory].reverse() : [];
  // Riwayat kuis: hanya skor TERBAIK per bab yang tersimpan di database —
  // tidak ada riwayat tiap percobaan, jadi tampilkan apa adanya.
  const quizHistory = dashboard
    ? MATERIALS.filter((m) => dashboard.quizBest[m.slug] !== undefined).map((m) => ({
        slug: m.slug,
        title: m.title,
        best: dashboard.quizBest[m.slug],
      }))
    : [];

  const stats = dashboard
    ? [
        {
          icon: ClipboardList,
          label: "Checklist administrasi",
          value: `${dashboard.checklistDone.length}/${CHECKLIST_ITEMS.length} selesai`,
        },
        {
          icon: CheckCircle2,
          label: "Materi selesai dibaca",
          value: `${dashboard.materialsDone.length}/${MATERIALS.length} materi`,
        },
        {
          icon: Target,
          label: "Kuis per bab dimainkan",
          value: `${Object.keys(dashboard.quizBest).length}/${quizTotal} bab`,
        },
        {
          icon: Target,
          label: "Tryout SKD selesai",
          value:
            dashboard.tryoutHistory.length === 0
              ? "Belum ada"
              : `${dashboard.tryoutHistory.length}x — skor terakhir ${lastTryout?.total ?? 0} (${lastTryout?.passed ? "LOLOS" : "Belum lolos"})`,
        },
      ]
    : [];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Menu profil"
        title={user.name ?? user.email ?? "Profil"}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 via-amber-500 to-pink-500 text-sm font-bold text-white shadow-md shadow-orange-500/25 transition hover:opacity-90"
      >
        {initials(user.name, user.email)}
        <ChevronDown className="absolute -right-0.5 -bottom-0.5 h-3.5 w-3.5 rounded-full bg-white text-[#131316] ring-1 ring-neutral-200" />
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute right-0 z-50 mt-2 w-80 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl sm:w-96"
        >
          <div className="flex items-center gap-3 border-b border-neutral-100 px-4 py-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 via-amber-500 to-pink-500 text-sm font-bold text-white">
              {initials(user.name, user.email)}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-bold text-[#131316]">
                {user.name ?? user.email}
              </span>
              {user.name ? (
                <span className="block truncate text-xs text-neutral-500">{user.email}</span>
              ) : null}
            </span>
          </div>

          <div className="max-h-[70vh] overflow-y-auto">
            <div className="px-4 pt-3 pb-1">
              <p className="text-xs font-bold tracking-wide text-neutral-400 uppercase">
                Progres belajarmu
              </p>
              {dashboardLoading ? (
                <p className="mt-2 animate-pulse text-sm text-neutral-400">Memuat progres…</p>
              ) : dashboardError || !dashboard ? (
                <p className="mt-2 text-sm text-red-600">
                  Progres gagal dimuat. Coba muat ulang halaman.
                </p>
              ) : (
                <ul className="mt-2 divide-y divide-neutral-100">
                  {stats.map((s) => (
                    <li key={s.label} className="flex items-start gap-2.5 py-2">
                      <s.icon className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                      <span className="min-w-0 flex-1 text-sm leading-snug text-neutral-600">
                        {s.label}
                      </span>
                      <span className="shrink-0 text-sm font-semibold text-[#131316]">
                        {s.value}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-neutral-100 px-4 pt-3 pb-1">
              <p className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-neutral-400 uppercase">
                <History className="h-3.5 w-3.5" /> Riwayat — buat muhasabah
              </p>
              {dashboardLoading ? (
                <p className="mt-2 animate-pulse pb-3 text-sm text-neutral-400">Memuat riwayat…</p>
              ) : dashboardError || !dashboard ? (
                <p className="mt-2 pb-3 text-sm text-red-600">Riwayat gagal dimuat.</p>
              ) : tryoutNewestFirst.length === 0 && quizHistory.length === 0 ? (
                <p className="mt-2 pb-3 text-sm leading-relaxed text-neutral-500">
                  Belum ada riwayat — coba kuis atau tryout dulu.
                </p>
              ) : (
                <>
                  {tryoutNewestFirst.length > 0 ? (
                    <div className="mt-2">
                      <p className="text-xs font-semibold text-neutral-500">Tryout SKD</p>
                      <ul className="mt-1 divide-y divide-neutral-100">
                        {tryoutNewestFirst.map((a) => (
                          <li key={a.date + a.total} className="py-2">
                            <span className="flex items-center justify-between gap-2">
                              <span className="text-sm font-semibold text-[#131316]">
                                {formatDate(a.date)} · {a.total} poin
                              </span>
                              <span
                                className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                                  a.passed
                                    ? "bg-emerald-100 text-emerald-700"
                                    : "bg-neutral-100 text-neutral-600"
                                }`}
                              >
                                {a.passed ? "LOLOS" : "Belum lolos"}
                              </span>
                            </span>
                            <span className="mt-0.5 block text-xs text-neutral-500">
                              TWK {a.twk} · TIU {a.tiu} · TKP {a.tkp}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {quizHistory.length > 0 ? (
                    <div className="mt-2 pb-2">
                      <p className="text-xs font-semibold text-neutral-500">
                        Kuis per bab — skor terbaik
                      </p>
                      <ul className="mt-1 divide-y divide-neutral-100">
                        {quizHistory.map((q) => (
                          <li key={q.slug} className="flex items-center justify-between gap-2 py-1.5">
                            <Link
                              href={`/kuis/${q.slug}`}
                              onClick={() => setOpen(false)}
                              className="min-w-0 truncate text-sm text-neutral-600 hover:text-orange-700 hover:underline"
                            >
                              {q.title}
                            </Link>
                            <span className="shrink-0 text-sm font-semibold text-emerald-700">
                              {q.best}/10
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={handleSignOut}
            className="flex w-full items-center gap-2 border-t border-neutral-100 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
          >
            <LogOut className="h-4 w-4" /> Keluar
          </button>
        </div>
      ) : null}
    </div>
  );
}
