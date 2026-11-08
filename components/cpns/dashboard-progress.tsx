"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, ClipboardList, Target } from "lucide-react";
import { CHECKLIST_ITEMS } from "@/lib/cpns/checklist";
import { MATERIALS } from "@/lib/cpns/materials";
import { QUIZ_QUESTIONS } from "@/lib/cpns/quiz-questions";
import { getChecklistDone, getMaterialsDone, getQuizBest, getTryoutHistory } from "@/lib/cpns/progress";

export function DashboardProgress() {
  const [ready, setReady] = useState(false);
  const [stats, setStats] = useState({ checklist: 0, materials: 0, quizBest: 0, tryouts: 0, lastTotal: null as number | null });

  useEffect(() => {
    const done = getChecklistDone();
    const mats = getMaterialsDone();
    const best = getQuizBest();
    const history = getTryoutHistory();
    setStats({
      checklist: done.length,
      materials: mats.length,
      quizBest: Object.keys(best).length,
      tryouts: history.length,
      lastTotal: history.length > 0 ? history[history.length - 1].total : null,
    });
    setReady(true);
  }, []);

  if (!ready) return null;

  const quizTotal = new Set(QUIZ_QUESTIONS.map((q) => q.id.slice(0, q.id.lastIndexOf("-q")))).size;
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
