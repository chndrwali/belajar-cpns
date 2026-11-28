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
  if (index < 30) return { label: "TWK", color: "bg-teal-700" };
  if (index < 65) return { label: "TIU", color: "bg-amber-800" };
  return { label: "TKP", color: "bg-blue-700" };
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
        <p className="animate-pulse text-sm text-muted-text">Memuat jawaban tryoutmu…</p>
      </div>
    );
  }

  if (attemptQuery.isError || !attempt) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div className="rounded-lg border border-ink/10 bg-white p-8 text-center">
          <h1 className="text-xl font-bold text-ink">Riwayat tryout tidak ditemukan</h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-text">
            Mungkin kamu belum login dengan akun yang mengerjakan tryout ini, atau riwayatnya sudah
            tidak ada.
          </p>
          <Link
            href="/tryout"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-semibold text-white"
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
        <p className="text-sm text-danger">Soal untuk tryout ini tidak ditemukan.</p>
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
      <Link href="/tryout" className="text-sm font-semibold text-teal-700 hover:underline">
        ← Daftar tryout
      </Link>
      <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-teal-700 uppercase">
        Review jawaban · read-only
      </p>
      <h1 className="mt-2 text-3xl font-bold text-ink">{config.title}</h1>
      <p className="mt-2 text-sm text-muted-text">
        Dikerjakan {new Date(attempt.date).toLocaleString("id-ID")} · Waktu yang dipakai{" "}
        {formatDuration(attempt.durationSeconds)} · Halaman ini hanya untuk evaluasi: jawaban tidak
        bisa diubah.
      </p>

      <div
        className={`mt-6 rounded-lg p-8 text-center text-white ${
          attempt.passed ? "bg-success" : "bg-ink"
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
          Passing grade acuan 2024 · TWK {PASSING_GRADE.twk}, TIU {PASSING_GRADE.tiu}, TKP{" "}
          {PASSING_GRADE.tkp}.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Benar penuh", value: full, color: "text-success" },
          { label: "Sebagian (TKP)", value: partial, color: "text-amber-600" },
          { label: "Salah / 0 poin", value: zero, color: "text-danger" },
          { label: "Tidak dijawab", value: unanswered, color: "text-muted-text" },
        ].map((s) => (
          <div key={s.label} className="rounded-lg border border-ink/10 bg-white p-4 text-center">
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            <p className="mt-0.5 text-xs text-muted-text">{s.label}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-xl font-bold text-ink">Pembahasan semua soal</h2>
      <p className="mt-1 text-sm text-muted-text">
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
            <li key={q.id} className="rounded-md border border-ink/10 bg-white p-5 text-sm">
              <p className="font-semibold text-ink">
                {i + 1}. [{sec.label}] {q.question}{" "}
                <span className={ok ? "text-success" : "text-danger"}>
                  {chosen === undefined
                    ? "(Tidak dijawab)"
                    : ok
                      ? `(Benar, ${pts} poin)`
                      : `(Jawabanmu ${LETTERS[chosen]} · ${pts} poin)`}
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
                          ? "border-success bg-success-soft"
                          : isChosen
                            ? "border-danger bg-danger-soft"
                            : isBest
                              ? "border-success bg-success-soft/50"
                              : "border-ink/10 bg-white"
                      }`}
                    >
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${
                          isChosen && isBest
                            ? "border-success bg-success text-white"
                            : isChosen
                              ? "border-danger bg-danger text-white"
                              : isBest
                                ? "border-success bg-white text-success"
                                : "border-ink/15 bg-white text-muted-text"
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
                      <span className="flex-1 leading-relaxed text-ink">{opt}</span>
                      {q.section === "tkp" && q.points ? (
                        <span className="shrink-0 text-xs font-semibold text-muted-text">
                          {q.points[oi]} poin
                        </span>
                      ) : null}
                      {isChosen ? (
                        <span className="shrink-0 text-xs font-bold text-muted-text">Pilihanmu</span>
                      ) : isBest ? (
                        <span className="shrink-0 text-xs font-bold text-success">
                          Jawaban terbaik
                        </span>
                      ) : null}
                    </div>
                  );
                })}
              </div>
              <p className="mt-3 text-muted-text">
                Jawaban terbaik: {LETTERS[q.answer]}. {q.options[q.answer]}
              </p>
              <p className="mt-1 text-muted-text">{q.explanation}</p>
            </li>
          );
        })}
      </ol>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href={`/tryout/${config.id}`}
          className="inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-semibold text-white"
        >
          Ulangi {config.shortTitle}
        </Link>
        <Link
          href="/materi"
          className="inline-flex items-center gap-2 rounded-md border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink"
        >
          Pelajari materi yang lemah
        </Link>
      </div>
    </div>
  );
}
