"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, LogIn } from "lucide-react";
import { MATERIALS, SECTION_INFO } from "@/lib/cpns/materials";
import { useDashboardProgress } from "@/components/cpns/progress-hooks";
import { ProgressBar } from "@/components/cpns/progress-bar";

const SECTIONS = ["twk", "tiu", "tkp"] as const;

export function MateriList() {
  const { sessionPending, isLoggedIn, dashboard, dashboardLoading } = useDashboardProgress();
  const done = new Set(dashboard?.materialsDone ?? []);
  const total = MATERIALS.length;

  return (
    <>
      <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6">
        {sessionPending || (isLoggedIn && dashboardLoading) ? (
          <div className="h-[52px] animate-pulse rounded-xl bg-neutral-100" />
        ) : isLoggedIn ? (
          <ProgressBar
            value={done.size}
            total={total}
            label={`${done.size} dari ${total} materi selesai dibaca`}
          />
        ) : (
          <>
            <ProgressBar value={0} total={total} label={`0 dari ${total} materi selesai dibaca`} />
            <p className="mt-3 text-sm text-neutral-500">
              Login untuk menyimpan progresmu — tanpa login, progres tidak tercatat.{" "}
              <Link href="/login" className="inline-flex items-center gap-1 font-semibold text-orange-600 hover:underline">
                <LogIn className="h-3.5 w-3.5" /> Login
              </Link>
            </p>
          </>
        )}
      </div>

      {SECTIONS.map((section) => {
        const info = SECTION_INFO[section];
        const mats = MATERIALS.filter((m) => m.section === section);
        return (
          <section key={section} className="mt-12">
            <div className="flex items-center gap-3">
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-bold text-white ${info.color}`}>
                {info.name}
              </span>
              <h2 className="text-xl font-bold text-[#131316]">{info.full}</h2>
              <span className="text-sm text-neutral-400">{info.minutes} di SKD</span>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {mats.map((m) => {
                const isDone = done.has(m.slug);
                return (
                  <Link
                    key={m.slug}
                    href={`/materi/${m.slug}`}
                    className={`group rounded-3xl border bg-white p-6 transition hover:shadow-lg ${
                      isDone
                        ? "border-emerald-300 bg-emerald-50/40 hover:border-emerald-400"
                        : "border-neutral-200 hover:border-orange-300"
                    }`}
                  >
                    <span className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-[#131316] group-hover:text-orange-700">{m.title}</h3>
                      {isDone ? (
                        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">
                          <CheckCircle2 className="h-3.5 w-3.5" /> Selesai
                        </span>
                      ) : null}
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500">{m.short}</p>
                    <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-neutral-400">
                      <Clock className="h-3.5 w-3.5" /> ±{m.estimatedMinutes} menit · 10 soal latihan
                    </p>
                    <p className={`mt-3 inline-flex items-center gap-1 text-sm font-semibold ${isDone ? "text-emerald-700" : "text-orange-600"}`}>
                      {isDone ? "Baca lagi" : "Baca materi"}{" "}
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
