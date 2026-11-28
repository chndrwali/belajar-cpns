"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
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
import { TRYOUTS } from "@/lib/cpns/tryouts";
import type { TryoutResult } from "@/lib/cpns/types";
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
  // Riwayat tryout: terbaru dulu (server mengembalikan urutan menaik),
  // dipisah per tryout supaya TO 1 dan TO 2 tidak tercampur.
  const tryoutNewestFirst = dashboard ? [...dashboard.tryoutHistory].reverse() : [];
  const tryoutGroups: Array<{ id: "1" | "2"; title: string; items: TryoutResult[] }> = (
    ["1", "2"] as const
  )
    .map((id) => ({
      id,
      title: TRYOUTS[id].title,
      items: tryoutNewestFirst.filter((a) => a.tryoutId === id),
    }))
    .filter((g) => g.items.length > 0);
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
              : `${dashboard.tryoutHistory.length}x · skor terakhir ${lastTryout?.total ?? 0} (${lastTryout?.passed ? "LOLOS" : "Belum lolos"})`,
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
        className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white shadow-soft transition hover:bg-brand-deep"
      >
        {initials(user.name, user.email)}
        <ChevronDown className="absolute -right-0.5 -bottom-0.5 h-3.5 w-3.5 rounded-full bg-white text-ink ring-1 ring-ink/10" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="menu"
            role="menu"
            initial={{ opacity: 0, scale: 0.97, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -6 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top right" }}
            className="absolute right-0 z-50 mt-2 w-80 max-w-[calc(100vw-2rem)] overflow-hidden rounded-lg border border-ink/10 bg-white shadow-xl sm:w-96"
          >
          <div className="flex items-center gap-3 border-b border-ink/10 px-4 py-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
              {initials(user.name, user.email)}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-bold text-ink">
                {user.name ?? user.email}
              </span>
              {user.name ? (
                <span className="block truncate text-xs text-muted-text">{user.email}</span>
              ) : null}
            </span>
          </div>

          <div className="max-h-[70vh] overflow-y-auto">
            <div className="px-4 pt-3 pb-1">
              <p className="text-xs font-bold tracking-wide text-muted-text uppercase">
                Progres belajarmu
              </p>
              {dashboardLoading ? (
                <p className="mt-2 animate-pulse text-sm text-muted-text">Memuat progres…</p>
              ) : dashboardError || !dashboard ? (
                <p className="mt-2 text-sm text-danger">
                  Progres gagal dimuat. Coba muat ulang halaman.
                </p>
              ) : (
                <ul className="mt-2 divide-y divide-ink/10">
                  {stats.map((s) => (
                    <li key={s.label} className="flex items-start gap-2.5 py-2">
                      <s.icon className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                      <span className="min-w-0 flex-1 text-sm leading-snug text-muted-text">
                        {s.label}
                      </span>
                      <span className="shrink-0 text-sm font-semibold text-ink">
                        {s.value}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-ink/10 px-4 pt-3 pb-1">
              <p className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-muted-text uppercase">
                <History className="h-3.5 w-3.5" /> Riwayat · buat muhasabah
              </p>
              {dashboardLoading ? (
                <p className="mt-2 animate-pulse pb-3 text-sm text-muted-text">Memuat riwayat…</p>
              ) : dashboardError || !dashboard ? (
                <p className="mt-2 pb-3 text-sm text-danger">Riwayat gagal dimuat.</p>
              ) : tryoutNewestFirst.length === 0 && quizHistory.length === 0 ? (
                <p className="mt-2 pb-3 text-sm leading-relaxed text-muted-text">
                  Belum ada riwayat. Coba kuis atau tryout dulu.
                </p>
              ) : (
                <>
                  {tryoutGroups.length > 0 ? (
                    <div className="mt-2">
                      <p className="text-xs font-semibold text-muted-text">
                        Tryout SKD · klik untuk lihat jawaban &amp; pembahasan
                      </p>
                      {tryoutGroups.map((g) => (
                        <div key={g.id} className="mt-2">
                          <p className="text-xs font-bold text-ink">{g.title}</p>
                          <ul className="mt-1 divide-y divide-ink/10">
                            {g.items.map((a) => (
                              <li key={a.id} className="py-2">
                                <Link
                                  href={`/tryout/riwayat/${a.id}`}
                                  onClick={() => setOpen(false)}
                                  className="block rounded-lg transition hover:bg-teal-50"
                                >
                                  <span className="flex items-center justify-between gap-2">
                                    <span className="text-sm font-semibold text-ink">
                                      {formatDate(a.date)} · {a.total} poin
                                    </span>
                                    <span
                                      className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                                        a.passed
                                          ? "bg-success-soft text-success"
                                          : "bg-ink/5 text-muted-text"
                                      }`}
                                    >
                                      {a.passed ? "LOLOS" : "Belum lolos"}
                                    </span>
                                  </span>
                                  <span className="mt-0.5 block text-xs text-muted-text">
                                    TWK {a.twk} · TIU {a.tiu} · TKP {a.tkp}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {quizHistory.length > 0 ? (
                    <div className="mt-2 pb-2">
                      <p className="text-xs font-semibold text-muted-text">
                        Kuis per bab · skor terbaik
                      </p>
                      <ul className="mt-1 divide-y divide-ink/10">
                        {quizHistory.map((q) => (
                          <li key={q.slug} className="flex items-center justify-between gap-2 py-1.5">
                            <Link
                              href={`/kuis/${q.slug}`}
                              onClick={() => setOpen(false)}
                              className="min-w-0 truncate text-sm text-muted-text hover:text-teal-800 hover:underline"
                            >
                              {q.title}
                            </Link>
                            <span className="shrink-0 text-sm font-semibold text-success">
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
            className="flex w-full items-center gap-2 border-t border-ink/10 px-4 py-3 text-sm font-semibold text-danger transition hover:bg-danger-soft"
          >
            <LogOut className="h-4 w-4" /> Keluar
          </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
