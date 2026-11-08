"use client";

import Link from "next/link";
import { CheckCircle2, ClipboardList, LogIn, Target } from "lucide-react";
import { CHECKLIST_ITEMS } from "@/lib/cpns/checklist";
import { MATERIALS } from "@/lib/cpns/materials";
import { QUIZ_QUESTIONS } from "@/lib/cpns/quiz-questions";
import { useDashboardProgress } from "@/components/cpns/progress-hooks";

export function DashboardProgress() {
  const { sessionPending, isLoggedIn, dashboard, dashboardLoading, dashboardError } = useDashboardProgress();

  const quizTotal = new Set(QUIZ_QUESTIONS.map((q) => q.id.slice(0, q.id.lastIndexOf("-q")))).size;

  if (sessionPending || (isLoggedIn && dashboardLoading)) {
    return (
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-[104px] animate-pulse rounded-2xl border border-neutral-200 bg-neutral-50" />
        ))}
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <p className="font-semibold text-amber-900">Progres belajarmu belum tercatat</p>
        <p className="mt-1 text-sm leading-relaxed text-amber-800">
          Kamu tetap bisa belajar, kuis, dan tryout tanpa login — tapi progresmu tidak akan
          tersimpan. Login untuk menyimpan progresmu di akunmu dan membukanya dari perangkat
          mana pun.
        </p>
        <Link
          href="/login"
          className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#131316] px-4 py-2 text-sm font-semibold text-white"
        >
          <LogIn className="h-4 w-4" /> Login untuk menyimpan progres
        </Link>
      </div>
    );
  }

  if (dashboardError || !dashboard) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-800">
        Progres gagal dimuat dari database. Coba muat ulang halaman — kalau masih gagal, cek
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
    { icon: Target, label: "Tryout SKD selesai", value: stats.tryouts === 0 ? "Belum ada" : `${stats.tryouts}x — skor terakhir ${stats.lastTotal}`, href: "/tryout" },
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <Link key={item.label} href={item.href} className="rounded-2xl border border-neutral-200 bg-white p-4 transition hover:border-orange-300 hover:shadow-md">
          <item.icon className="h-5 w-5 text-orange-600" />
          <p className="mt-2 text-sm font-semibold text-[#131316]">{item.label}</p>
          <p className="mt-0.5 text-sm text-neutral-500">{item.value}</p>
        </Link>
      ))}
    </div>
  );
}
