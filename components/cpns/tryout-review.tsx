"use client";

import Link from "next/link";
import { Check, CheckCircle2, X } from "lucide-react";
import { PASSING_GRADE, scoreKnowledge, scoreTkp } from "@/lib/cpns/types";
import type { Question } from "@/lib/cpns/types";
import { getTryout } from "@/lib/cpns/tryouts";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

const LETTERS = ["A", "B", "C", "D", "E"];

function sectionOf(index: number): { label: string; color: string } {
  if (index < 30) return { label: "TWK", color: "bg-red-600" };
  if (index < 65) return { label: "TIU", color: "bg-blue-600" };
  return { label: "TKP", color: "bg-emerald-600" };
}

function formatDuration(s: number): string {
  return `${Math.floor(s / 60)} menit ${s % 60} detik`;
}

/**
 * Review read-only satu percobaan tryout — untuk evaluasi.
 * Menampilkan semua soal beserta jawaban user, kunci, dan pembahasan.
 * TIDAK ada tombol untuk menjawab atau mengubah apa pun: opsi hanya
 * ditampilkan statis, dan halaman ini tidak pernah menulis ke database.
 */
export function TryoutReview({ attemptId }: { attemptId: string }) {
  const trpc = useTRPC();
  const attemptQuery = useQuery(trpc.progress.getTryoutAttempt.queryOptions({ id: attemptId }));
  const attempt = attemptQuery.data;

  if (attemptQuery.isPending) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <p className="animate-pulse text-sm text-neutral-400">Memuat jawaban tryoutmu…</p>
      </div>
    );
  }

  if (attemptQuery.isError || !attempt) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 text-center">
          <h1 className="text-xl font-bold text-[#131316]">Riwayat tryout tidak ditemukan</h1>
          <p className="mt-2 text-sm leading-relaxed text-neutral-500">
            Mungkin kamu belum login dengan akun yang mengerjakan tryout ini, atau riwayatnya sudah
            tidak ada.
          </p>
          <Link
            href="/tryout"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#131316] px-6 py-3 text-sm font-semibold text-white"
          >
            ← Kembali ke daftar tryout
          </Link>
        </div>
      </div>
    );
  }

  const config = getTryout(attempt.tryoutId);
  if (!config) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <p className="text-sm text-red-600">Soal untuk tryout ini tidak ditemukan.</p>
      </div>
    );
  }

  const QUESTIONS = config.questions;
  const answersByIndex = new Map(attempt.answers.map((a) => [a.index, a.chosen]));

  let full = 0;
  let partial = 0;
  let zero = 0;
  let unanswered = 0;
  QUESTIONS.forEach((q, i) => {
    const chosen = answersByIndex.get(i);
    if (chosen === undefined) {
      unanswered += 1;
      return;
    }
    const pts = q.section === "tkp" ? scoreTkp(q, chosen) : scoreKnowledge(q, chosen);
    if (pts === 5) full += 1;
    else if (pts > 0) partial += 1;
    else zero += 1;
  });

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Link href="/tryout" className="text-sm font-semibold text-orange-600 hover:underline">
        ← Daftar tryout
      </Link>
      <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-orange-600 uppercase">
        Review jawaban — read-only
      </p>
      <h1 className="mt-2 text-3xl font-bold text-[#131316]">{config.title}</h1>
      <p className="mt-2 text-sm text-neutral-500">
        Dikerjakan {new Date(attempt.date).toLocaleString("id-ID")} · Waktu yang dipakai{" "}
        {formatDuration(attempt.durationSeconds)} · Halaman ini hanya untuk evaluasi: jawaban tidak
        bisa diubah.
      </p>

      <div
        className={`mt-6 rounded-3xl p-8 text-center text-white ${
          attempt.passed ? "bg-emerald-600" : "bg-[#131316]"
        }`}
      >
        <CheckCircle2 className="mx-auto h-12 w-12" />
        <h2 className="mt-3 text-3xl font-bold">
          {attempt.passed ? "LOLOS Passing Grade" : "Belum Lolos"}
        </h2>
        <p className="mt-2 text-white/80">
          Total skor {attempt.total} · TWK {attempt.twk} · TIU {attempt.tiu} · TKP {attempt.tkp}
        </p>
        <p className="mt-1 text-sm text-white/60">
          Passing grade acuan 2024 — TWK {PASSING_GRADE.twk}, TIU {PASSING_GRADE.tiu}, TKP{" "}
          {PASSING_GRADE.tkp}.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Benar penuh", value: full, color: "text-emerald-600" },
          { label: "Sebagian (TKP)", value: partial, color: "text-amber-600" },
          { label: "Salah / 0 poin", value: zero, color: "text-red-600" },
          { label: "Tidak dijawab", value: unanswered, color: "text-neutral-500" },
        ].map((s) => (
          <div key={s.label} className="rounded-3xl border border-neutral-200 bg-white p-4 text-center">
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="mt-0.5 text-xs text-neutral-400">{s.label}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-xl font-bold text-[#131316]">Pembahasan semua soal</h2>
      <p className="mt-1 text-sm text-neutral-500">
        Opsi yang kamu pilih ditandai; jawaban terbaik ditandai hijau. Baca pembahasan tiap soal
        yang salah untuk evaluasi.
      </p>
      <ol className="mt-4 space-y-3">
        {QUESTIONS.map((q: Question, i: number) => {
          const chosen = answersByIndex.get(i);
          const pts =
            chosen === undefined
              ? 0
              : q.section === "tkp"
                ? scoreTkp(q, chosen)
                : scoreKnowledge(q, chosen);
          const ok = pts === 5;
          const sec = sectionOf(i);
          return (
            <li key={q.id} className="rounded-2xl border border-neutral-200 bg-white p-5 text-sm">
              <p className="font-semibold text-[#131316]">
                {i + 1}. [{sec.label}] {q.question}{" "}
                <span className={ok ? "text-emerald-600" : "text-red-600"}>
                  {chosen === undefined
                    ? "(Tidak dijawab)"
                    : ok
                      ? `(Benar, ${pts} poin)`
                      : `(Jawabanmu ${LETTERS[chosen]} — ${pts} poin)`}
                </span>
              </p>
              <div className="mt-3 space-y-2">
                {q.options.map((opt, oi) => {
                  const isChosen = chosen === oi;
                  const isBest = oi === q.answer;
                  return (
                    <div
                      key={oi}
                      className={`flex items-start gap-3 rounded-xl border-2 p-3 ${
                        isChosen && isBest
                          ? "border-emerald-500 bg-emerald-50"
                          : isChosen
                            ? "border-red-400 bg-red-50"
                            : isBest
                              ? "border-emerald-300 bg-emerald-50/50"
                              : "border-neutral-200 bg-white"
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${
                          isChosen && isBest
                            ? "border-emerald-600 bg-emerald-600 text-white"
                            : isChosen
                              ? "border-red-500 bg-red-500 text-white"
                              : isBest
                                ? "border-emerald-600 bg-white text-emerald-700"
                                : "border-neutral-300 bg-white text-neutral-600"
                        }`}
                      >
                        {isChosen && isBest ? (
                          <Check className="h-4 w-4" />
                        ) : isChosen ? (
                          <X className="h-4 w-4" />
                        ) : (
                          LETTERS[oi]
                        )}
                      </span>
                      <span className="flex-1 leading-relaxed text-[#131316]">{opt}</span>
                      {q.section === "tkp" && q.points ? (
                        <span className="shrink-0 text-xs font-semibold text-neutral-400">
                          {q.points[oi]} poin
                        </span>
                      ) : null}
                      {isChosen ? (
                        <span className="shrink-0 text-xs font-bold text-neutral-500">Pilihanmu</span>
                      ) : isBest ? (
                        <span className="shrink-0 text-xs font-bold text-emerald-700">
                          Jawaban terbaik
                        </span>
                      ) : null}
                    </div>
                  );
                })}
              </div>
              <p className="mt-3 text-neutral-500">
                Jawaban terbaik: {LETTERS[q.answer]}. {q.options[q.answer]}
              </p>
              <p className="mt-1 text-neutral-500">{q.explanation}</p>
            </li>
          );
        })}
      </ol>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href={`/tryout/${config.id}`}
          className="inline-flex items-center gap-2 rounded-full bg-[#131316] px-6 py-3 text-sm font-semibold text-white"
        >
          Ulangi {config.shortTitle}
        </Link>
        <Link
          href="/materi"
          className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-[#131316]"
        >
          Pelajari materi yang lemah
        </Link>
      </div>
    </div>
  );
}
