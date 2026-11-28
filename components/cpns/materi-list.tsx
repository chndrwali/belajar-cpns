"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Clock, LogIn, Search } from "lucide-react";
import { MATERIALS, SECTION_INFO } from "@/lib/cpns/materials";
import { useDashboardProgress } from "@/components/cpns/progress-hooks";
import { ProgressBar } from "@/components/cpns/progress-bar";
import { Reveal, Stagger, StaggerItem } from "@/components/cpns/animate";

const SECTIONS = ["twk", "tiu", "tkp"] as const;
type Filter = "all" | (typeof SECTIONS)[number];

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "Semua" },
  { key: "twk", label: "TWK (8)" },
  { key: "tiu", label: "TIU (3)" },
  { key: "tkp", label: "TKP (6)" },
];

export function MateriList() {
  const { sessionPending, isLoggedIn, dashboard, dashboardLoading } = useDashboardProgress();
  const done = new Set(dashboard?.materialsDone ?? []);
  const total = MATERIALS.length;
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MATERIALS.filter((m) => {
      if (filter !== "all" && m.section !== filter) return false;
      if (!q) return true;
      return m.title.toLowerCase().includes(q) || m.short.toLowerCase().includes(q);
    });
  }, [query, filter]);

  return (
    <>
      <div className="mt-8 rounded-lg border border-ink/10 bg-white p-5 sm:p-6">
        {sessionPending || (isLoggedIn && dashboardLoading) ? (
          <div className="h-[52px] animate-pulse rounded-md bg-ink/5" />
        ) : isLoggedIn ? (
          <ProgressBar
            value={done.size}
            total={total}
            label={`${done.size} dari ${total} materi selesai dibaca`}
          />
        ) : (
          <>
            <ProgressBar value={0} total={total} label={`0 dari ${total} materi selesai dibaca`} />
            <p className="mt-3 text-sm text-muted-text">
              Login untuk menyimpan progresmu. Tanpa login, progres tidak tercatat.{" "}
              <Link href="/login" className="inline-flex items-center gap-1 font-semibold text-teal-700 hover:underline">
                <LogIn className="h-3.5 w-3.5" /> Login
              </Link>
            </p>
          </>
        )}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative sm:w-80">
          <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-muted-text" aria-hidden="true" />
          <label htmlFor="cari-materi" className="sr-only">Cari materi</label>
          <input
            id="cari-materi"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari materi, misal Pancasila"
            className="h-11 w-full rounded-md border border-ink/15 bg-white pr-3 pl-10 text-sm text-ink placeholder:text-muted-text focus-visible:outline-2 focus-visible:outline-teal-700"
          />
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter berdasarkan bagian SKD">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
              className={`rounded-full px-3.5 py-2 text-sm font-semibold transition ${
                filter === f.key
                  ? "bg-brand text-white"
                  : "border border-ink/15 bg-white text-ink hover:border-teal-600"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 rounded-lg border border-ink/10 bg-white p-6 text-center text-sm text-muted-text">
          Tidak ada materi yang cocok dengan “{query}”. Coba kata kunci lain atau ubah filter.
        </p>
      ) : null}

      {SECTIONS.map((section) => {
        const info = SECTION_INFO[section];
        const mats = visible.filter((m) => m.section === section);
        if (mats.length === 0) return null;
        return (
          <section key={section} className="mt-12">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-bold text-white ${info.color}`}>
                  {info.name}
                </span>
                <h2 className="font-display text-xl font-extrabold text-ink">{info.full}</h2>
                <span className="text-sm text-muted-text">{info.minutes} di SKD</span>
              </div>
            </Reveal>
            <Stagger className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {mats.map((m) => {
                const isDone = done.has(m.slug);
                const step = MATERIALS.findIndex((x) => x.slug === m.slug) + 1;
                return (
                  <StaggerItem key={m.slug} className="h-full">
                    <Link
                      href={`/materi/${m.slug}`}
                      className={`group flex h-full flex-col rounded-lg border bg-white p-6 transition hover:shadow-soft ${
                        isDone
                          ? "border-success bg-success-soft/40 hover:border-success"
                          : "border-ink/10 hover:border-teal-600"
                      }`}
                    >
                      <span className="flex items-start justify-between gap-2">
                        <span className="inline-flex items-center gap-2">
                          <span className="font-mono inline-flex h-7 w-7 items-center justify-center rounded-md bg-paper text-xs font-bold text-teal-700">
                            {step}
                          </span>
                          <h3 className="text-lg font-bold text-ink group-hover:text-teal-800">{m.title}</h3>
                        </span>
                        {isDone ? (
                          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-success-soft px-2.5 py-1 text-xs font-bold text-success">
                            <CheckCircle2 className="h-3.5 w-3.5" /> Selesai
                          </span>
                        ) : null}
                      </span>
                      <p className="mt-2 text-sm leading-relaxed text-muted-text">{m.short}</p>
                      <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-muted-text">
                        <Clock className="h-3.5 w-3.5" /> ±{m.estimatedMinutes} menit · 10 soal latihan
                      </p>
                      <p className={`mt-3 inline-flex items-center gap-1 text-sm font-semibold ${isDone ? "text-success" : "text-teal-700"}`}>
                        {isDone ? "Baca lagi" : "Baca materi"}{" "}
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </p>
                    </Link>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </section>
        );
      })}
    </>
  );
}
