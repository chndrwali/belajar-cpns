"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, RotateCcw, X, XCircle } from "lucide-react";
import type { Material, Question } from "@/lib/cpns/types";
import { useTRPC } from "@/trpc/client";
import { friendlyProgressError, useDashboardProgress, useInvalidateDashboard } from "@/components/cpns/progress-hooks";

const LETTERS = ["A", "B", "C", "D", "E"];

export function QuizPlayer({ material, questions }: { material: Material; questions: Question[] }) {
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<Record<number, number>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [finished, setFinished] = useState(false);
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved" | "failed" | "guest">("idle");
  const { isLoggedIn, dashboard } = useDashboardProgress();
  const trpc = useTRPC();
  const invalidateDashboard = useInvalidateDashboard();
  const saveBestMutation = useMutation(
    trpc.progress.saveQuizBest.mutationOptions({
      onSuccess: () => {
        setSaveState("saved");
        invalidateDashboard();
      },
      onError: () => setSaveState("failed"),
    }),
  );

  const q = questions[index];
  const isTkp = q.section === "tkp";
  const picked = chosen[index];
  const isRevealed = revealed[index] ?? false;

  const correctCount = useMemo(
    () =>
      questions.filter((qq, i) => {
        if (chosen[i] === undefined) return false;
        if (qq.section === "tkp") return (qq.points?.[chosen[i]] ?? 0) === 5;
        return chosen[i] === qq.answer;
      }).length,
    [chosen, questions]
  );

  function pick(optionIndex: number) {
    if (isRevealed) return;
    setChosen((c) => ({ ...c, [index]: optionIndex }));
    setRevealed((r) => ({ ...r, [index]: true }));
  }

  function finish() {
    setFinished(true);
    if (!isLoggedIn) {
      setSaveState("guest");
      return;
    }
    // Server menyimpan skor tertinggi (best) — skor lama tidak tertimpa skor baru yang lebih rendah.
    const prev = dashboard?.quizBest[material.slug] ?? 0;
    if (correctCount > prev) {
      setSaveState("saving");
      saveBestMutation.mutate({ slug: material.slug, score: correctCount, total: questions.length });
    } else {
      setSaveState("saved");
    }
  }

  function reset() {
    setChosen({});
    setRevealed({});
    setIndex(0);
    setFinished(false);
  }

  if (finished) {
    const pct = Math.round((correctCount / questions.length) * 100);
    return (
      <div className="mx-auto max-w-2xl px-4 py-10">
        <div className="rounded-3xl border border-neutral-200 bg-white p-8 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
          <h1 className="mt-4 text-2xl font-bold text-[#131316]">Kuis selesai</h1>
          <p className="mt-2 text-neutral-500">
            {material.title} — kamu menjawab benar {correctCount} dari {questions.length} soal ({pct}%).
          </p>
          <p className="mt-2 text-sm text-neutral-500">
            {pct >= 80 ? "Mantap, sudah sangat siap. Lanjut ke bab berikutnya atau coba tryout SKD." : pct >= 60 ? "Lumayan, tapi masih ada yang perlu diulang. Baca lagi materinya lalu coba lagi." : "Belum lolos — baca lagi materinya, tonton video referensinya, lalu ulangi kuis ini."}
          </p>
          {saveState === "guest" ? (
            <p className="mt-4 rounded-2xl bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
              Login untuk menyimpan progresmu — tanpa login, skor kuis ini tidak tercatat.{" "}
              <Link href="/login" className="font-bold underline">
                Login sekarang
              </Link>
            </p>
          ) : saveState === "saving" ? (
            <p className="mt-4 text-sm text-neutral-500">Menyimpan skor terbaikmu ke akunmu…</p>
          ) : saveState === "saved" ? (
            <p className="mt-4 text-sm font-medium text-emerald-700">Skor terbaikmu tersimpan di akunmu.</p>
          ) : saveState === "failed" ? (
            <p className="mt-4 rounded-2xl bg-red-50 p-4 text-sm leading-relaxed text-red-800">
              {friendlyProgressError(saveBestMutation.error)} Skor kuis ini tetap terlihat di atas,
              tapi tidak tercatat — coba ulangi kuis setelah koneksi membaik.
            </p>
          ) : null}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button onClick={reset} className="inline-flex items-center gap-2 rounded-full bg-[#131316] px-5 py-2.5 text-sm font-semibold text-white">
              <RotateCcw className="h-4 w-4" /> Ulangi kuis
            </button>
            <Link href={`/materi/${material.slug}`} className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-[#131316]">
              Baca lagi materi
            </Link>
            <Link href="/kuis" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-[#131316]">
              Semua kuis
            </Link>
          </div>
          <div className="mt-8 text-left">
            <h2 className="font-bold text-[#131316]">Pembahasan semua soal</h2>
            <ol className="mt-3 space-y-3">
              {questions.map((qq, i) => {
                const ok = qq.section === "tkp" ? (qq.points?.[chosen[i] ?? -1] ?? 0) === 5 : chosen[i] === qq.answer;
                return (
                  <li key={qq.id} className="rounded-2xl border border-neutral-200 p-4 text-sm">
                    <p className="font-semibold text-[#131316]">
                      {i + 1}. {qq.question}{" "}
                      <span className={ok ? "text-emerald-600" : "text-red-600"}>{ok ? "(Benar)" : "(Belum tepat)"}</span>
                    </p>
                    <p className="mt-1 text-neutral-500">
                      Jawaban benar: {LETTERS[qq.answer]}. {qq.options[qq.answer]}
                    </p>
                    <p className="mt-1 text-neutral-500">{qq.explanation}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    );
  }

  const answered = Object.keys(chosen).length;
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Dicoding-style header: navy bar + progress */}
      <div className="bg-[#2D3E50] text-white">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-xs font-semibold tracking-wider text-sky-300 uppercase">Kuis · {material.sectionName}</p>
              <h1 className="mt-0.5 text-lg font-bold sm:text-xl">{material.title}</h1>
            </div>
            <p className="text-sm text-neutral-300">
              Soal {index + 1} dari {questions.length} · Dijawab {answered}
            </p>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/20">
            <div className="h-full rounded-full bg-gradient-to-r from-orange-400 to-pink-400 transition-all" style={{ width: `${(answered / questions.length) * 100}%` }} />
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_260px]">
        {/* Question card */}
        <div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-wider text-neutral-400 uppercase">
              Soal {index + 1} · {isTkp ? "Pilih jawaban yang paling tepat (nilai 1–5)" : "Pilih satu jawaban yang benar"}
            </p>
            <p className="mt-3 text-base leading-relaxed font-medium text-[#131316] sm:text-lg">{q.question}</p>
            <div className="mt-6 space-y-3">
              {q.options.map((opt, oi) => {
                const isPicked = picked === oi;
                const isCorrect = oi === q.answer;
                let cls = "border-neutral-200 bg-white hover:border-[#2D3E50]";
                if (isRevealed) {
                  if (isTkp) {
                    const pts = q.points?.[oi] ?? 0;
                    if (isPicked) cls = pts === 5 ? "border-emerald-500 bg-emerald-50" : pts >= 3 ? "border-amber-400 bg-amber-50" : "border-red-400 bg-red-50";
                    else if (pts === 5) cls = "border-emerald-500 bg-emerald-50";
                  } else if (isCorrect) cls = "border-emerald-500 bg-emerald-50";
                  else if (isPicked) cls = "border-red-400 bg-red-50";
                } else if (isPicked) {
                  cls = "border-[#2D3E50] bg-slate-100";
                }
                return (
                  <button
                    key={oi}
                    onClick={() => pick(oi)}
                    className={`flex w-full items-start gap-3 rounded-2xl border-2 p-4 text-left transition ${cls}`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold ${
                        isRevealed && isCorrect
                          ? "border-emerald-500 bg-emerald-500 text-white"
                          : isPicked
                            ? "border-[#2D3E50] bg-[#2D3E50] text-white"
                            : "border-neutral-300 bg-white text-neutral-600"
                      }`}
                    >
                      {isRevealed && isCorrect ? <Check className="h-4 w-4" /> : isRevealed && isPicked ? <X className="h-4 w-4" /> : LETTERS[oi]}
                    </span>
                    <span className="text-sm leading-relaxed text-[#131316] sm:text-base">{opt}</span>
                    {isRevealed && isTkp && q.points ? (
                      <span className="ml-auto shrink-0 rounded-full bg-white px-2 py-0.5 text-xs font-bold text-neutral-600">
                        {q.points[oi]} poin
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>

            {isRevealed ? (
              <div className={`mt-5 rounded-2xl p-4 text-sm leading-relaxed ${isTkp ? (q.points?.[picked ?? -1] ?? 0) === 5 ? "bg-emerald-50 text-emerald-900" : "bg-amber-50 text-amber-900" : picked === q.answer ? "bg-emerald-50 text-emerald-900" : "bg-red-50 text-red-900"}`}>
                <p className="flex items-center gap-1.5 font-bold">
                  {isTkp ? (
                    (q.points?.[picked ?? -1] ?? 0) === 5 ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />
                  ) : picked === q.answer ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <XCircle className="h-4 w-4" />
                  )}
                  {isTkp
                    ? `Jawabanmu bernilai ${q.points?.[picked ?? -1] ?? 0} dari 5 poin.`
                    : picked === q.answer
                      ? "Benar!"
                      : `Belum tepat. Jawaban benar: ${LETTERS[q.answer]}.`}
                </p>
                <p className="mt-1">{q.explanation}</p>
              </div>
            ) : null}

            <div className="mt-6 flex items-center justify-between gap-3">
              <button
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
                disabled={index === 0}
                className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-[#131316] disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" /> Sebelumnya
              </button>
              {index < questions.length - 1 ? (
                <button
                  onClick={() => setIndex((i) => Math.min(questions.length - 1, i + 1))}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#2D3E50] px-5 py-2 text-sm font-semibold text-white"
                >
                  Selanjutnya <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={finish}
                  disabled={answered < questions.length}
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-2 text-sm font-semibold text-white disabled:opacity-40"
                >
                  Selesai & Lihat Skor
                </button>
              )}
            </div>
            {index === questions.length - 1 && answered < questions.length ? (
              <p className="mt-3 text-center text-xs text-neutral-400">Jawab semua {questions.length} soal dulu untuk melihat skor.</p>
            ) : null}
          </div>
        </div>

        {/* Number grid — Dicoding style */}
        <aside className="rounded-3xl border border-neutral-200 bg-white p-5 lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-sm font-bold text-[#131316]">Navigasi Soal</h2>
          <p className="mt-1 text-xs text-neutral-400">Klik nomor untuk pindah soal. Hijau = sudah dijawab.</p>
          <div className="mt-4 grid grid-cols-5 gap-2">
            {questions.map((qq, i) => {
              const answeredQ = chosen[i] !== undefined;
              const active = i === index;
              return (
                <button
                  key={qq.id}
                  onClick={() => setIndex(i)}
                  className={`flex h-10 items-center justify-center rounded-xl text-sm font-bold transition ${
                    active ? "bg-[#2D3E50] text-white" : answeredQ ? "bg-emerald-100 text-emerald-800" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
          <div className="mt-4 flex items-center gap-4 text-xs text-neutral-500">
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-emerald-100" /> Dijawab</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-[#2D3E50]" /> Aktif</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-neutral-100" /> Belum</span>
          </div>
          <Link href="/kuis" className="mt-5 block text-center text-sm font-semibold text-orange-600 hover:underline">
            Kembali ke daftar kuis
          </Link>
        </aside>
      </div>
    </div>
  );
}
