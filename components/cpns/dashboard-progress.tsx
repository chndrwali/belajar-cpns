"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardList, LogIn, Target } from "lucide-react";
import { CHECKLIST_ITEMS } from "@/lib/cpns/checklist";
import { MATERIALS, SECTION_INFO } from "@/lib/cpns/materials";
import { QUIZ_QUESTIONS } from "@/lib/cpns/quiz-questions";
import { useDashboardProgress } from "@/components/cpns/progress-hooks";
import { Stagger, StaggerItem } from "@/components/cpns/animate";

/**
 * Tangga progres: 17 anak tangga (satu per materi), terisi dari kiri.
 * Motif identitas design system Tangga CPNS — progres dibaca sebagai
 * anak tangga yang sudah dinaiki, bukan sekadar angka persen.
 */
function TanggaSteps({ doneCount, total }: { doneCount: number; total: number }) {
  return (
    <div
      className="flex items-end gap-1"
      role="img"
      aria-label={`${doneCount} dari ${total} materi selesai dibaca`}
    >
      {MATERIALS.map((m, i) => {
        const filled = i < doneCount;
        const height = 8 + Math.round((i / Math.max(1, total - 1)) * 24);
        return (
          <span
            key={m.slug}
            title={m.title}
            className={`w-full rounded-sm ${filled ? "bg-brand" : "bg-ink/10"}`}
            style={{ height }}
          />
        );
      })}
    </div>
  );
}

export function DashboardProgress() {
  const { sessionPending, isLoggedIn, dashboard, dashboardLoading, dashboardError } = useDashboardProgress();

  const quizTotal = new Set(QUIZ_QUESTIONS.map((q) => q.id.slice(0, q.id.lastIndexOf("-q")))).size;

  if (sessionPending || (isLoggedIn && dashboardLoading)) {
    return (
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-[104px] animate-pulse rounded-lg border border-ink/10 bg-ink/5" />
        ))}
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="font-semibold text-amber-900">Progres belajarmu belum tercatat</p>
        <p className="mt-1 text-sm leading-relaxed text-amber-800">
          Kamu tetap bisa belajar, kuis, dan tryout tanpa login, tapi progresmu tidak akan
          tersimpan. Login untuk menyimpan progresmu di akunmu dan membukanya dari perangkat
          mana pun.
        </p>
        <Link
          href="/login"
          className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-deep"
        >
          <LogIn className="h-4 w-4" /> Login untuk menyimpan progres
        </Link>
      </div>
    );
  }

  if (dashboardError || !dashboard) {
    return (
      <div className="rounded-lg border border-danger/20 bg-danger-soft p-5 text-sm text-danger">
        Progres gagal dimuat dari database. Coba muat ulang halaman. Kalau masih gagal, cek
        koneksi database di SETUP.md.
      </div>
    );
  }

  const stats = {
    checklist: dashboard.checklistDone.length,
    materials: dashboard.materialsDone.length,
    quizBest: Object.keys(dashboard.quizBest).length,
    tryouts: dashboard.tryoutHistory.length,
    lastTotal:
      dashboard.tryoutHistory.length > 0
        ? dashboard.tryoutHistory[dashboard.tryoutHistory.length - 1].total
        : null,
  };
  const items = [
    { icon: ClipboardList, label: "Checklist administrasi", value: `${stats.checklist}/${CHECKLIST_ITEMS.length} selesai`, href: "/checklist" },
    { icon: CheckCircle2, label: "Materi selesai dibaca", value: `${stats.materials}/${MATERIALS.length} materi`, href: "/materi" },
    { icon: Target, label: "Kuis per bab dimainkan", value: `${stats.quizBest}/${quizTotal} bab`, href: "/kuis" },
    { icon: Target, label: "Tryout SKD selesai", value: stats.tryouts === 0 ? "Belum ada" : `${stats.tryouts}x · skor terakhir ${stats.lastTotal}`, href: "/tryout" },
  ];
  const doneSet = new Set(dashboard.materialsDone);
  const nextMaterial = MATERIALS.find((m) => !doneSet.has(m.slug));
  return (
    <div>
      <div className="grid gap-3 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-lg border border-ink/10 bg-white p-5">
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-sm font-semibold text-ink">Tangga belajarmu</p>
            <p className="font-mono text-sm font-bold text-teal-700">
              {stats.materials}/{MATERIALS.length} materi
            </p>
          </div>
          <div className="mt-4">
            <TanggaSteps doneCount={stats.materials} total={MATERIALS.length} />
          </div>
          <p className="mt-3 text-xs text-muted-text">
            Tiap anak tangga satu materi. Selesaikan semuanya sebelum naik ke tryout.
          </p>
        </div>
        {nextMaterial ? (
          <Link
            href={`/materi/${nextMaterial.slug}`}
            className="group flex flex-col justify-between rounded-lg bg-ink p-5 text-white transition hover:opacity-95"
          >
            <span>
              <span className="text-xs font-bold tracking-[0.2em] text-amber-accent uppercase">
                Lanjut belajar
              </span>
              <span className="font-display mt-2 block text-xl font-extrabold">{nextMaterial.title}</span>
              <span className="mt-1 block text-sm text-white/70">
                {SECTION_INFO[nextMaterial.section].full} · ±{nextMaterial.estimatedMinutes} menit · 10 soal latihan
              </span>
            </span>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white">
              Baca materi <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </span>
          </Link>
        ) : (
          <Link
            href="/tryout"
            className="group flex flex-col justify-between rounded-lg bg-ink p-5 text-white transition hover:opacity-95"
          >
            <span>
              <span className="text-xs font-bold tracking-[0.2em] text-amber-accent uppercase">
                Tangga selesai
              </span>
              <span className="font-display mt-2 block text-xl font-extrabold">Semua materi sudah dibaca</span>
              <span className="mt-1 block text-sm text-white/70">
                Sekarang uji semuanya dalam kondisi ujian sebenarnya.
              </span>
            </span>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white">
              Ikut Tryout SKD <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </span>
          </Link>
        )}
      </div>
      <Stagger className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <StaggerItem key={item.label} className="h-full">
            <Link href={item.href} className="flex h-full flex-col rounded-lg border border-ink/10 bg-white p-4 transition hover:border-teal-600 hover:shadow-soft">
              <item.icon className="h-5 w-5 text-teal-700" />
              <p className="mt-2 text-sm font-semibold text-ink">{item.label}</p>
              <p className="mt-0.5 text-sm text-muted-text">{item.value}</p>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
