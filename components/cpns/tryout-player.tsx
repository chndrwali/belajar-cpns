"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Flag, RotateCcw, Timer } from "lucide-react";
import { PASSING_GRADE, TRYOUT_MINUTES, scoreKnowledge, scoreTkp } from "@/lib/cpns/types";
import type { Question } from "@/lib/cpns/types";
import { TRYOUT_QUESTIONS } from "@/lib/cpns/tryout-questions";
import { LS_KEYS, getTryoutHistory, writeJson, type TryoutResult } from "@/lib/cpns/progress";

const LETTERS = ["A", "B", "C", "D", "E"];
const TOTAL_SECONDS = TRYOUT_MINUTES * 60;

function formatTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function sectionOf(index: number): { key: string; label: string; color: string } {
  if (index < 30) return { key: "twk", label: "TWK", color: "bg-red-600" };
  if (index < 65) return { key: "tiu", label: "TIU", color: "bg-blue-600" };
  return { key: "tkp", label: "TKP", color: "bg-emerald-600" };
}

export function TryoutPlayer() {
  const [phase, setPhase] = useState<"intro" | "running" | "result">("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [history, setHistory] = useState<TryoutResult[]>([]);
  const [lastResult, setLastResult] = useState<TryoutResult | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const submittedRef = useRef(false);
  const answersRef = useRef<Record<number, number>>({});
  const secondsLeftRef = useRef(TOTAL_SECONDS);
  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);
  useEffect(() => {
    secondsLeftRef.current = secondsLeft;
  }, [secondsLeft]);

  useEffect(() => {
    setHistory(getTryoutHistory());
  }, []);

  function submit() {
    if (submittedRef.current) return;
    submittedRef.current = true;
    if (timerRef.current) clearInterval(timerRef.current);
    let twk = 0, tiu = 0, tkp = 0;
    TRYOUT_QUESTIONS.forEach((q, i) => {
      const a = answersRef.current[i];
      if (a === undefined) return;
      if (q.section === "twk") twk += scoreKnowledge(q, a);
      else if (q.section === "tiu") tiu += scoreKnowledge(q, a);
      else tkp += scoreTkp(q, a);
    });
    const total = twk + tiu + tkp;
    const result: TryoutResult = {
      date: new Date().toISOString(),
      twk,
      tiu,
      tkp,
      total,
      passed: twk >= PASSING_GRADE.twk && tiu >= PASSING_GRADE.tiu && tkp >= PASSING_GRADE.tkp,
      durationSeconds: TOTAL_SECONDS - secondsLeftRef.current,
    };
    const next = [...getTryoutHistory(), result];
    writeJson(LS_KEYS.tryoutHistory, next);
    setHistory(next);
    setLastResult(result);
    setPhase("result");
  }

  useEffect(() => {
    if (phase !== "running") return;
    timerRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          setTimeout(() => submit(), 0);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  function start() {
    submittedRef.current = false;
    setAnswers({});
    setFlagged({});
    setIndex(0);
    setSecondsLeft(TOTAL_SECONDS);
    setPhase("running");
  }

  const answeredCount = Object.keys(answers).length;
  const flaggedCount = Object.values(flagged).filter(Boolean).length;

  if (phase === "intro") {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div className="rounded-3xl border border-neutral-200 bg-white p-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-orange-600 uppercase">Simulasi ujian</p>
          <h1 className="mt-2 text-3xl font-bold text-[#131316]">Tryout SKD Lengkap</h1>
          <p className="mt-3 leading-relaxed text-neutral-500">
            Simulasi Seleksi Kompetensi Dasar persis format ujian: 110 soal dalam 100 menit.
            TWK 30 soal, TIU 35 soal, TKP 45 soal. TWK dan TIU: benar 5 poin, salah 0. TKP: tiap
            jawaban bernilai 1–5 poin.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-red-50 p-4">
              <p className="font-bold text-red-700">TWK · 30 soal</p>
              <p className="mt-1 text-sm text-red-900/70">Passing grade acuan 2024: {PASSING_GRADE.twk}</p>
            </div>
            <div className="rounded-2xl bg-blue-50 p-4">
              <p className="font-bold text-blue-700">TIU · 35 soal</p>
              <p className="mt-1 text-sm text-blue-900/70">Passing grade acuan 2024: {PASSING_GRADE.tiu}</p>
            </div>
            <div className="rounded-2xl bg-emerald-50 p-4">
              <p className="font-bold text-emerald-700">TKP · 45 soal</p>
              <p className="mt-1 text-sm text-emerald-900/70">Passing grade acuan 2024: {PASSING_GRADE.tkp}</p>
            </div>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-neutral-600">
            <li>· Timer 100 menit berjalan mundur dan tryout otomatis terkumpul saat waktu habis.</li>
            <li>· Kamu bisa lompat ke soal mana pun lewat grid nomor soal dan menandai soal yang ragu-ragu.</li>
            <li>· Setelah selesai, kamu melihat skor TWK, TIU, dan TKP terpisah, status lolos/tidak, dan pembahasan semua soal.</li>
            <li>· Riwayat tryout tersimpan di perangkat ini.</li>
          </ul>
          <button
            onClick={start}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-pink-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:opacity-90"
          >
            <Timer className="h-4 w-4" /> Mulai Tryout — 100 Menit
          </button>
          <p className="mt-3 text-xs text-neutral-400">
            Passing grade di atas adalah acuan 2024, bukan pengumuman final 2026. Soal latihan buatan, bukan soal resmi BKN.
          </p>
        </div>

        {history.length > 0 ? (
          <div className="mt-6 rounded-3xl border border-neutral-200 bg-white p-6">
            <h2 className="font-bold text-[#131316]">Riwayat tryoutmu</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {[...history].reverse().map((h, i) => (
                <li key={`${h.date}-${i}`} className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-neutral-50 px-4 py-3">
                  <span className="text-neutral-600">
                    {new Date(h.date).toLocaleString("id-ID")} — TWK {h.twk} · TIU {h.tiu} · TKP {h.tkp}
                  </span>
                  <span className={`font-bold ${h.passed ? "text-emerald-600" : "text-red-600"}`}>
                    Total {h.total} · {h.passed ? "LOLOS" : "BELUM LOLOS"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }

  if (phase === "result" && lastResult) {
    const r = lastResult;
    return (
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <div className={`rounded-3xl p-8 text-center text-white ${r.passed ? "bg-emerald-600" : "bg-[#131316]"}`}>
          <CheckCircle2 className="mx-auto h-12 w-12" />
          <h1 className="mt-3 text-3xl font-bold">{r.passed ? "LOLOS Passing Grade" : "Belum Lolos"}</h1>
          <p className="mt-2 text-white/80">
            Total skor {r.total} · Waktu yang dipakai {Math.floor(r.durationSeconds / 60)} menit {r.durationSeconds % 60} detik
          </p>
          <p className="mt-1 text-sm text-white/60">Passing grade acuan 2024 — TWK {PASSING_GRADE.twk}, TIU {PASSING_GRADE.tiu}, TKP {PASSING_GRADE.tkp}.</p>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {([
            { label: "TWK", score: r.twk, max: 150, pg: PASSING_GRADE.twk, color: "text-red-600" },
            { label: "TIU", score: r.tiu, max: 175, pg: PASSING_GRADE.tiu, color: "text-blue-600" },
            { label: "TKP", score: r.tkp, max: 225, pg: PASSING_GRADE.tkp, color: "text-emerald-600" },
          ] as const).map((s) => (
            <div key={s.label} className="rounded-3xl border border-neutral-200 bg-white p-5 text-center">
              <p className={`text-sm font-bold ${s.color}`}>{s.label}</p>
              <p className="mt-1 text-3xl font-bold text-[#131316]">{s.score}</p>
              <p className="text-xs text-neutral-400">dari {s.max} · PG {s.pg}</p>
              <p className={`mt-2 text-sm font-semibold ${s.score >= s.pg ? "text-emerald-600" : "text-red-600"}`}>
                {s.score >= s.pg ? "Lolos" : `Kurang ${s.pg - s.score} poin`}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button onClick={start} className="inline-flex items-center gap-2 rounded-full bg-[#131316] px-6 py-3 text-sm font-semibold text-white">
            <RotateCcw className="h-4 w-4" /> Ulangi Tryout
          </button>
          <Link href="/materi" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-[#131316]">
            Pelajari materi yang lemah
          </Link>
        </div>
        <h2 className="mt-10 text-xl font-bold text-[#131316]">Pembahasan semua soal</h2>
        <ol className="mt-4 space-y-3">
          {TRYOUT_QUESTIONS.map((q: Question, i: number) => {
            const chosen = answers[i];
            const pts = q.section === "tkp" ? scoreTkp(q, chosen ?? -1) : scoreKnowledge(q, chosen ?? -1);
            const max = q.section === "tkp" ? 5 : 5;
            const ok = pts === max;
            return (
              <li key={q.id} className="rounded-2xl border border-neutral-200 bg-white p-5 text-sm">
                <p className="font-semibold text-[#131316]">
                  {i + 1}. [{sectionOf(i).label}] {q.question}{" "}
                  <span className={ok ? "text-emerald-600" : "text-red-600"}>
                    {chosen === undefined ? "(Tidak dijawab)" : ok ? `(Benar, ${pts} poin)` : `(Jawabanmu ${LETTERS[chosen]} — ${pts} poin)`}
                  </span>
                </p>
                <p className="mt-1 text-neutral-500">
                  Jawaban terbaik: {LETTERS[q.answer]}. {q.options[q.answer]}
                </p>
                <p className="mt-1 text-neutral-500">{q.explanation}</p>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }

  // running
  const q = TRYOUT_QUESTIONS[index];
  const sec = sectionOf(index);
  const picked = answers[index];
  const isFlagged = flagged[index] ?? false;
  const lowTime = secondsLeft <= 300;

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="sticky top-16 z-30 bg-[#2D3E50] text-white shadow">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <span className={`rounded-full px-2.5 py-1 text-xs font-bold text-white ${sec.color}`}>{sec.label}</span>
            <span className="text-sm font-semibold">Soal {index + 1} dari 110</span>
            <span className="hidden text-sm text-neutral-300 sm:inline">· Dijawab {answeredCount} · Ragu-ragu {flaggedCount}</span>
          </div>
          <div className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold ${lowTime ? "animate-pulse bg-red-600" : "bg-white/15"}`}>
            <Timer className="h-4 w-4" /> {formatTime(secondsLeft)}
          </div>
        </div>
        <div className="h-1.5 bg-white/10">
          <div className="h-full bg-gradient-to-r from-orange-400 to-pink-400 transition-all" style={{ width: `${(answeredCount / 110) * 100}%` }} />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_280px]">
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-wider text-neutral-400 uppercase">
            {sec.label} · {q.section === "tkp" ? "Pilih jawaban yang paling tepat (nilai 1–5)" : "Pilih satu jawaban yang benar"}
          </p>
          <p className="mt-3 text-base leading-relaxed font-medium text-[#131316] sm:text-lg">{q.question}</p>
          <div className="mt-6 space-y-3">
            {q.options.map((opt, oi) => {
              const isPicked = picked === oi;
              return (
                <button
                  key={oi}
                  onClick={() => setAnswers((a) => ({ ...a, [index]: oi }))}
                  className={`flex w-full items-start gap-3 rounded-2xl border-2 p-4 text-left transition ${
                    isPicked ? "border-[#2D3E50] bg-slate-100" : "border-neutral-200 bg-white hover:border-[#2D3E50]"
                  }`}
                >
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold ${isPicked ? "border-[#2D3E50] bg-[#2D3E50] text-white" : "border-neutral-300 bg-white text-neutral-600"}`}>
                    {isPicked ? <Check className="h-4 w-4" /> : LETTERS[oi]}
                  </span>
                  <span className="text-sm leading-relaxed text-[#131316] sm:text-base">{opt}</span>
                </button>
              );
            })}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-2">
              <button
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
                disabled={index === 0}
                className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-[#131316] disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" /> Sebelumnya
              </button>
              <button
                onClick={() => setFlagged((f) => ({ ...f, [index]: !isFlagged }))}
                className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold ${isFlagged ? "border-amber-400 bg-amber-50 text-amber-700" : "border-neutral-300 text-[#131316]"}`}
              >
                <Flag className="h-4 w-4" /> {isFlagged ? "Ragu-ragu" : "Tandai ragu"}
              </button>
            </div>
            {index < 109 ? (
              <button
                onClick={() => setIndex((i) => Math.min(109, i + 1))}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#2D3E50] px-5 py-2 text-sm font-semibold text-white"
              >
                Selanjutnya <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={() => {
                  if (answeredCount < 110) {
                    const firstUnanswered = TRYOUT_QUESTIONS.findIndex((_, i) => answers[i] === undefined);
                    if (firstUnanswered >= 0) setIndex(firstUnanswered);
                    return;
                  }
                  submit();
                }}
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-2 text-sm font-semibold text-white"
              >
                {answeredCount < 110 ? `Selesai — masih ${110 - answeredCount} belum dijawab` : "Selesai & Lihat Hasil"}
              </button>
            )}
          </div>
        </div>

        <aside className="rounded-3xl border border-neutral-200 bg-white p-5 lg:sticky lg:top-32 lg:self-start">
          <h2 className="text-sm font-bold text-[#131316]">Navigasi Soal</h2>
          <div className="mt-3 space-y-3">
            {([
              { label: "TWK", range: [0, 30], color: "bg-red-600" },
              { label: "TIU", range: [30, 65], color: "bg-blue-600" },
              { label: "TKP", range: [65, 110], color: "bg-emerald-600" },
            ] as const).map((g) => (
              <div key={g.label}>
                <p className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-neutral-500">
                  <span className={`h-2.5 w-2.5 rounded-full ${g.color}`} /> {g.label} · Soal {g.range[0] + 1}–{g.range[1]}
                </p>
                <div className="grid grid-cols-5 gap-1.5">
                  {Array.from({ length: g.range[1] - g.range[0] }, (_, k) => {
                    const i = g.range[0] + k;
                    const answeredQ = answers[i] !== undefined;
                    const active = i === index;
                    const fl = flagged[i];
                    return (
                      <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`flex h-8 items-center justify-center rounded-lg text-xs font-bold transition ${
                          active ? "bg-[#2D3E50] text-white" : fl ? "bg-amber-100 text-amber-800" : answeredQ ? "bg-emerald-100 text-emerald-800" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                        }`}
                      >
                        {i + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-neutral-500">
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-emerald-100" /> Dijawab</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-amber-100" /> Ragu-ragu</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-[#2D3E50]" /> Aktif</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
