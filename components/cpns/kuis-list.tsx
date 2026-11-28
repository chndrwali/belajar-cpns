"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, HelpCircle, LogIn } from "lucide-react";
import { MATERIALS, SECTION_INFO } from "@/lib/cpns/materials";
import { QUIZ_QUESTIONS } from "@/lib/cpns/quiz-questions";
import { useDashboardProgress } from "@/components/cpns/progress-hooks";
import { ProgressBar } from "@/components/cpns/progress-bar";

export function KuisList() {
  const { sessionPending, isLoggedIn, dashboard, dashboardLoading } = useDashboardProgress();
  const quizBest = dashboard?.quizBest ?? {};
  const played = Object.keys(quizBest).length;
  const quizTotal = new Set(QUIZ_QUESTIONS.map((q) => q.id.slice(0, q.id.lastIndexOf("-q")))).size;

  return (
    <>
      <div className="mt-8 rounded-lg border border-ink/10 bg-white p-5 sm:p-6">
        {sessionPending || (isLoggedIn && dashboardLoading) ? (
          <div className="h-[52px] animate-pulse rounded-md bg-ink/5" />
        ) : isLoggedIn ? (
          <ProgressBar
            value={played}
            total={quizTotal}
            label={`${played} dari ${quizTotal} bab sudah dimainkan`}
          />
        ) : (
          <>
            <ProgressBar value={0} total={quizTotal} label={`0 dari ${quizTotal} bab sudah dimainkan`} />
            <p className="mt-3 text-sm text-muted-text">
              Login untuk menyimpan progresmu. Tanpa login, skor terbaikmu tidak tercatat.{" "}
              <Link href="/login" className="inline-flex items-center gap-1 font-semibold text-teal-700 hover:underline">
                <LogIn className="h-3.5 w-3.5" /> Login
              </Link>
            </p>
          </>
        )}
      </div>

      {(["twk", "tiu", "tkp"] as const).map((section) => {
        const info = SECTION_INFO[section];
        const mats = MATERIALS.filter((m) => m.section === section);
        return (
          <section key={section} className="mt-12">
            <div className="flex items-center gap-3">
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-bold text-white ${info.color}`}>{info.name}</span>
              <h2 className="font-display text-xl font-extrabold text-ink">{info.full}</h2>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {mats.map((m) => {
                const best = quizBest[m.slug];
                const playedThis = best !== undefined;
                return (
                  <Link
                    key={m.slug}
                    href={`/kuis/${m.slug}`}
                    className={`group rounded-lg border bg-white p-6 transition hover:shadow-soft ${
                      playedThis
                        ? "border-success bg-success-soft/40 hover:border-success"
                        : "border-ink/10 hover:border-teal-600"
                    }`}
                  >
                    <span className="flex items-start justify-between gap-2">
                      <HelpCircle className={`h-6 w-6 ${playedThis ? "text-success" : "text-teal-700"}`} />
                      {playedThis ? (
                        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-success-soft px-2.5 py-1 text-xs font-bold text-success">
                          <CheckCircle2 className="h-3.5 w-3.5" /> Skor terbaik {best}/10
                        </span>
                      ) : null}
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-ink group-hover:text-teal-800">{m.title}</h3>
                    <p className="mt-1 text-sm text-muted-text">10 soal · pembahasan langsung · ±{m.estimatedMinutes} menit</p>
                    <p className={`mt-3 inline-flex items-center gap-1 text-sm font-semibold ${playedThis ? "text-success" : "text-teal-700"}`}>
                      {playedThis ? "Main lagi" : "Mulai kuis"}{" "}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </>
  );
}
