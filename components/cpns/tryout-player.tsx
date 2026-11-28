"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Flag, RotateCcw, Timer } from "lucide-react";
import { PASSING_GRADE, TRYOUT_MINUTES, scoreKnowledge, scoreTkp } from "@/lib/cpns/types";
import type { Question, TryoutResult } from "@/lib/cpns/types";
import type { TryoutConfig } from "@/lib/cpns/tryouts";
import { useTRPC } from "@/trpc/client";
import { friendlyProgressError, useDashboardProgress, useInvalidateDashboard } from "@/components/cpns/progress-hooks";

const LETTERS = ["A", "B", "C", "D", "E"];
const TOTAL_SECONDS = TRYOUT_MINUTES * 60;

// ---------------------------------------------------------------------------
// DRAF TRYOUT (localStorage, sementara, hanya di perangkat ini)
// ---------------------------------------------------------------------------
// BEDAKAN dengan aturan lama "jangan simpan progres di localStorage": aturan
// itu soal REKAMAN PROGRES (materi selesai, skor terbaik, riwayat tryout) —
// dan itu sudah pindah ke database via tRPC dan TETAP begitu: hasil akhir
// tryout tetap disimpan lewat `saveTryoutAttempt`, tidak berubah sedikit pun.
// Yang disimpan di sini HANYALAH draf tryout yang sedang berjalan (jawaban,
// soal yang ditandai ragu, posisi soal, dan tenggat waktu), supaya tryout
// 100 menit tidak hilang kalau tab tertutup atau halaman di-refresh. Draf ini
// otomatis TERHAPUS saat tryout disubmit atau waktunya habis, dan tidak pernah
// dibaca sebagai progres. Draf jalan untuk tamu tanpa login sekalipun.
// ---------------------------------------------------------------------------
type TryoutDraft = {
  answers: Record<number, number>;
  flagged: Record<number, boolean>;
  index: number;
  endsAt: number; // epoch ms — sumber kebenaran sisa waktu
  savedAt: number;
};

function readDraft(draftKey: string): TryoutDraft | null {
  try {
    const raw = window.localStorage.getItem(draftKey);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as TryoutDraft;
    if (!parsed || typeof parsed.endsAt !== "number" || parsed.endsAt <= Date.now()) {
      window.localStorage.removeItem(draftKey);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function clearDraft(draftKey: string) {
  try {
    window.localStorage.removeItem(draftKey);
  } catch {
    // Abaikan — draf hanya kenyamanan, bukan bagian penting.
  }
}

function formatTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function sectionOf(index: number): { key: string; label: string; color: string } {
  if (index < 30) return { key: "twk", label: "TWK", color: "bg-teal-700" };
  if (index < 65) return { key: "tiu", label: "TIU", color: "bg-amber-800" };
  return { key: "tkp", label: "TKP", color: "bg-blue-700" };
}

export function TryoutPlayer({ config }: { config: TryoutConfig }) {
  const QUESTIONS = config.questions;
  const DRAFT_KEY = config.draftKey;
  const [phase, setPhase] = useState<"intro" | "running" | "result">("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [flagged, setFlagged] = useState<Record<number, boolean>>({});
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [history, setHistory] = useState<TryoutResult[]>([]);
  const [lastResult, setLastResult] = useState<TryoutResult | null>(null);
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved" | "failed" | "guest">("idle");
  const [draft, setDraft] = useState<TryoutDraft | null>(null);
  const endsAtRef = useRef(0);
  const { isLoggedIn, dashboard } = useDashboardProgress();
  const trpc = useTRPC();
  const invalidateDashboard = useInvalidateDashboard();
  const saveAttemptMutation = useMutation(
    trpc.progress.saveTryoutAttempt.mutationOptions({
      onSuccess: (saved) => {
        setSaveState("saved");
        setLastResult(saved);
        invalidateDashboard();
      },
      onError: () => setSaveState("failed"),
    }),
  );
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
    if (dashboard) setHistory(dashboard.tryoutHistory);
  }, [dashboard]);

  // Baca draf sekali saat komponen mount (hanya di client).
  useEffect(() => {
    setDraft(readDraft(DRAFT_KEY));
  }, []);

  // Simpan draf selama tryout berjalan (jawaban + ragu + posisi + tenggat).
  useEffect(() => {
    if (phase !== "running" || !endsAtRef.current) return;
    try {
      const d: TryoutDraft = {
        answers,
        flagged,
        index,
        endsAt: endsAtRef.current,
        savedAt: Date.now(),
      };
      window.localStorage.setItem(DRAFT_KEY, JSON.stringify(d));
    } catch {
      // Abaikan — draf hanya kenyamanan, tryout tetap jalan tanpa draf.
    }
  }, [phase, answers, flagged, index]);

  function submit() {
    if (submittedRef.current) return;
    submittedRef.current = true;
    if (timerRef.current) clearInterval(timerRef.current);
    // Tryout selesai — draf sementara dihapus, hasil akhir tetap ke database.
    clearDraft(DRAFT_KEY);
    setDraft(null);
    let twk = 0, tiu = 0, tkp = 0;
    QUESTIONS.forEach((q, i) => {
      const a = answersRef.current[i];
      if (a === undefined) return;
      if (q.section === "twk") twk += scoreKnowledge(q, a);
      else if (q.section === "tiu") tiu += scoreKnowledge(q, a);
      else tkp += scoreTkp(q, a);
    });
    const total = twk + tiu + tkp;
    const result: TryoutResult = {
      // id diisi server saat attempt tersimpan (onSuccess mengganti
      // lastResult dengan hasil yang sudah punya id asli).
      id: "",
      tryoutId: config.id,
      date: new Date().toISOString(),
      twk,
      tiu,
      tkp,
      total,
      passed: twk >= PASSING_GRADE.twk && tiu >= PASSING_GRADE.tiu && tkp >= PASSING_GRADE.tkp,
      durationSeconds: TOTAL_SECONDS - secondsLeftRef.current,
    };
    setLastResult(result);
    setPhase("result");
    if (!isLoggedIn) {
      // Tamu boleh melihat hasil, tapi hasil tidak tercatat di mana pun.
      setSaveState("guest");
      return;
    }
    setSaveState("saving");
    saveAttemptMutation.mutate({
      tryoutId: config.id,
      twk,
      tiu,
      tkp,
      total,
      durationSeconds: result.durationSeconds,
      answers: Object.entries(answersRef.current).map(([index, chosen]) => ({
        index: Number(index),
        chosen,
      })),
    });
  }

  function retrySave() {
    if (!lastResult) return;
    setSaveState("saving");
    saveAttemptMutation.mutate({
      tryoutId: lastResult.tryoutId,
      twk: lastResult.twk,
      tiu: lastResult.tiu,
      tkp: lastResult.tkp,
      total: lastResult.total,
      durationSeconds: lastResult.durationSeconds,
      answers: Object.entries(answersRef.current).map(([index, chosen]) => ({
        index: Number(index),
        chosen,
      })),
    });
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
    setSaveState("idle");
    clearDraft(DRAFT_KEY);
    setDraft(null);
    endsAtRef.current = Date.now() + TOTAL_SECONDS * 1000;
    setPhase("running");
  }

  function resumeDraft(d: TryoutDraft) {
    submittedRef.current = false;
    setAnswers(d.answers ?? {});
    setFlagged(d.flagged ?? {});
    setIndex(Math.min(Math.max(0, d.index ?? 0), 109));
    setSecondsLeft(Math.max(1, Math.ceil((d.endsAt - Date.now()) / 1000)));
    setSaveState("idle");
    endsAtRef.current = d.endsAt;
    setPhase("running");
  }

  function discardDraft() {
    clearDraft(DRAFT_KEY);
    setDraft(null);
  }

  const answeredCount = Object.keys(answers).length;
  const flaggedCount = Object.values(flagged).filter(Boolean).length;

  if (phase === "intro") {
    const draftAnswered = draft ? Object.keys(draft.answers ?? {}).length : 0;
    const draftSecondsLeft = draft ? Math.max(0, Math.ceil((draft.endsAt - Date.now()) / 1000)) : 0;
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Link href="/tryout" className="text-sm font-semibold text-teal-700 hover:underline">
          ← Pilih tryout lain
        </Link>
        {draft ? (
          <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 p-6">
            <p className="font-bold text-ink">Kamu punya tryout yang belum selesai</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-text">
              Terakhir disimpan {new Date(draft.savedAt).toLocaleString("id-ID")} · sudah dijawab{" "}
              {draftAnswered} dari 110 soal, sisa waktu {formatTime(draftSecondsLeft)}. Lanjutkan
              dari posisi terakhir, atau mulai dari awal.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                onClick={() => resumeDraft(draft)}
                className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-deep"
              >
                <Timer className="h-4 w-4" /> Lanjutkan tryout · {formatTime(draftSecondsLeft)}
              </button>
              <button
                onClick={discardDraft}
                className="inline-flex items-center gap-2 rounded-md border border-ink/15 bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-paper"
              >
                Hapus draf
              </button>
            </div>
          </div>
        ) : null}
        <div className="rounded-lg border border-ink/10 bg-white p-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-teal-700 uppercase">Simulasi ujian</p>
          <h1 className="font-display mt-2 text-3xl font-extrabold text-ink">{config.title}</h1>
          <p className="mt-3 leading-relaxed text-muted-text">
            {config.subtitle} Simulasi Seleksi Kompetensi Dasar persis format ujian: 110 soal
            dalam 100 menit. TWK 30 soal, TIU 35 soal, TKP 45 soal. TWK dan TIU: benar 5 poin,
            salah 0. TKP: tiap jawaban bernilai 1–5 poin.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-md bg-teal-50 p-4">
              <p className="font-bold text-teal-800">TWK · 30 soal</p>
              <p className="mt-1 text-sm text-teal-900/70">Passing grade acuan 2024: {PASSING_GRADE.twk}</p>
            </div>
            <div className="rounded-md bg-amber-50 p-4">
              <p className="font-bold text-amber-800">TIU · 35 soal</p>
              <p className="mt-1 text-sm text-amber-900/70">Passing grade acuan 2024: {PASSING_GRADE.tiu}</p>
            </div>
            <div className="rounded-md bg-blue-50 p-4">
              <p className="font-bold text-blue-800">TKP · 45 soal</p>
              <p className="mt-1 text-sm text-blue-900/70">Passing grade acuan 2024: {PASSING_GRADE.tkp}</p>
            </div>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-muted-text">
            <li>· Timer 100 menit berjalan mundur dan tryout otomatis terkumpul saat waktu habis.</li>
            <li>· Kamu bisa lompat ke soal mana pun lewat grid nomor soal dan menandai soal yang ragu-ragu.</li>
            <li>· Setelah selesai, kamu melihat skor TWK, TIU, dan TKP terpisah, status lolos/tidak, dan pembahasan semua soal.</li>
            <li>· Jawaban dan sisa waktumu tersimpan otomatis di perangkat ini, kalau tab tertutup atau halaman di-refresh, kamu bisa melanjutkan tryout dari posisi terakhir.</li>
            <li>· Riwayat tryout tersimpan di akunmu. Login dulu supaya tidak hilang.</li>
          </ul>
          <button
            onClick={start}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-deep"
          >
            <Timer className="h-4 w-4" /> Mulai Tryout · 100 Menit
          </button>
          <p className="mt-3 text-xs text-muted-text">
            Passing grade di atas adalah acuan 2024, bukan pengumuman final 2026. Soal latihan buatan, bukan soal resmi BKN.
          </p>
        </div>

        {history.length > 0 ? (
          <div className="mt-6 rounded-lg border border-ink/10 bg-white p-6">
            <h2 className="font-bold text-ink">Riwayat {config.shortTitle}mu</h2>
            <p className="mt-1 text-sm text-muted-text">
              Klik salah satu untuk melihat lagi jawabanmu, kunci, dan pembahasan tiap soal, tanpa
              bisa mengubah jawaban.
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {[...history]
                .filter((h) => h.tryoutId === config.id)
                .reverse()
                .map((h, i) => (
                  <li key={h.id || `${h.date}-${i}`}>
                    <Link
                      href={`/tryout/riwayat/${h.id}`}
                      className="flex flex-wrap items-center justify-between gap-2 rounded-md bg-paper px-4 py-3 transition hover:bg-brand-soft hover:ring-1 hover:ring-teal-600/30"
                    >
                      <span className="text-muted-text">
                        {new Date(h.date).toLocaleString("id-ID")} · TWK {h.twk} · TIU {h.tiu} · TKP {h.tkp}
                      </span>
                      <span className={`font-bold ${h.passed ? "text-success" : "text-danger"}`}>
                        Total {h.total} · {h.passed ? "LOLOS" : "BELUM LOLOS"}
                      </span>
                    </Link>
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
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-4xl px-4 py-10 sm:px-6"
      >
        <div className={`rounded-lg p-8 text-center text-white ${r.passed ? "bg-success" : "bg-ink"}`}>
          <CheckCircle2 className="mx-auto h-12 w-12" />
          <h1 className="font-display mt-3 text-3xl font-extrabold">{r.passed ? "LOLOS Passing Grade" : "Belum Lolos"}</h1>
          <p className="mt-2 text-white/80">
            Total skor {r.total} · Waktu yang dipakai {Math.floor(r.durationSeconds / 60)} menit {r.durationSeconds % 60} detik
          </p>
          <p className="mt-1 text-sm text-white/60">Passing grade acuan 2024 · TWK {PASSING_GRADE.twk}, TIU {PASSING_GRADE.tiu}, TKP {PASSING_GRADE.tkp}.</p>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {([
            { label: "TWK", score: r.twk, max: 150, pg: PASSING_GRADE.twk, color: "text-teal-700" },
            { label: "TIU", score: r.tiu, max: 175, pg: PASSING_GRADE.tiu, color: "text-amber-800" },
            { label: "TKP", score: r.tkp, max: 225, pg: PASSING_GRADE.tkp, color: "text-blue-700" },
          ] as const).map((s) => (
            <div key={s.label} className="rounded-lg border border-ink/10 bg-white p-5 text-center">
              <p className={`text-sm font-bold ${s.color}`}>{s.label}</p>
              <p className="font-mono mt-1 text-3xl font-bold text-ink">{s.score}</p>
              <p className="text-xs text-muted-text">dari {s.max} · PG {s.pg}</p>
              <p className={`mt-2 text-sm font-semibold ${s.score >= s.pg ? "text-success" : "text-danger"}`}>
                {s.score >= s.pg ? "Lolos" : `Kurang ${s.pg - s.score} poin`}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button onClick={start} className="inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3 text-sm font-semibold text-white">
            <RotateCcw className="h-4 w-4" /> Ulangi Tryout
          </button>
          <Link href="/materi" className="inline-flex items-center gap-2 rounded-md border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink">
            Pelajari materi yang lemah
          </Link>
        </div>
        {saveState === "guest" ? (
          <p className="mt-6 rounded-md bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
            Login untuk menyimpan progresmu. Tanpa login, hasil tryout ini tidak tercatat di
            akunmu.{" "}
            <Link href="/login" className="font-bold underline">
              Login sekarang
            </Link>
          </p>
        ) : saveState === "saving" ? (
          <p className="mt-6 text-center text-sm text-muted-text">Menyimpan hasil tryout ke akunmu…</p>
        ) : saveState === "saved" ? (
          <p className="mt-6 text-center text-sm font-medium text-success">
            Hasil tryout tersimpan di akunmu.
          </p>
        ) : saveState === "failed" ? (
          <p className="mt-6 rounded-md bg-danger-soft p-4 text-sm leading-relaxed text-danger">
            {friendlyProgressError(saveAttemptMutation.error)} Hasilmu tetap terlihat di halaman
            ini, tapi tidak tercatat.{" "}
            <button onClick={retrySave} className="font-bold underline">
              Coba simpan lagi
            </button>
          </p>
        ) : null}
        <h2 className="mt-10 text-xl font-bold text-ink">Pembahasan semua soal</h2>
        <ol className="mt-4 space-y-3">
          {QUESTIONS.map((q: Question, i: number) => {
            const chosen = answers[i];
            const pts = q.section === "tkp" ? scoreTkp(q, chosen ?? -1) : scoreKnowledge(q, chosen ?? -1);
            const max = q.section === "tkp" ? 5 : 5;
            const ok = pts === max;
            return (
              <li key={q.id} className="rounded-md border border-ink/10 bg-white p-5 text-sm">
                <p className="font-semibold text-ink">
                  {i + 1}. [{sectionOf(i).label}] {q.question}{" "}
                  <span className={ok ? "text-success" : "text-danger"}>
                    {chosen === undefined ? "(Tidak dijawab)" : ok ? `(Benar, ${pts} poin)` : `(Jawabanmu ${LETTERS[chosen]} · ${pts} poin)`}
                  </span>
                </p>
                <p className="mt-1 text-muted-text">
                  Jawaban terbaik: {LETTERS[q.answer]}. {q.options[q.answer]}
                </p>
                <p className="mt-1 text-muted-text">{q.explanation}</p>
              </li>
            );
          })}
        </ol>
      </motion.div>
    );
  }

  // running
  const q = QUESTIONS[index];
  const sec = sectionOf(index);
  const picked = answers[index];
  const isFlagged = flagged[index] ?? false;
  const lowTime = secondsLeft <= 300;

  return (
    <div className="min-h-screen bg-paper">
      <div className="sticky top-16 z-30 bg-ink text-white shadow">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <span className={`rounded-full px-2.5 py-1 text-xs font-bold text-white ${sec.color}`}>{sec.label}</span>
            <span className="font-mono text-sm font-semibold">Soal {index + 1} dari 110</span>
            <span className="hidden text-sm text-white/70 sm:inline">· Dijawab {answeredCount} · Ragu-ragu {flaggedCount}</span>
          </div>
          <div className={`flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-sm font-bold ${lowTime ? "animate-pulse bg-danger" : "bg-white/15"}`}>
            <Timer className="h-4 w-4" /> {formatTime(secondsLeft)}
          </div>
        </div>
        <div className="h-1.5 bg-white/10">
          <div className="h-full bg-brand transition-all" style={{ width: `${(answeredCount / 110) * 100}%` }} />
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_280px]">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-lg border border-ink/10 bg-white p-6 sm:p-8"
        >
          <p className="text-xs font-semibold tracking-wider text-muted-text uppercase">
            {sec.label} · {q.section === "tkp" ? "Pilih jawaban yang paling tepat (nilai 1–5)" : "Pilih satu jawaban yang benar"}
          </p>
          <p className="mt-3 text-base leading-relaxed font-medium text-ink sm:text-lg">{q.question}</p>
          <div className="mt-6 space-y-3">
            {q.options.map((opt, oi) => {
              const isPicked = picked === oi;
              return (
                <button
                  key={oi}
                  onClick={() => setAnswers((a) => ({ ...a, [index]: oi }))}
                  className={`flex w-full items-start gap-3 rounded-md border-2 p-4 text-left transition ${
                    isPicked ? "border-brand bg-brand-soft" : "border-ink/10 bg-white hover:border-brand"
                  }`}
                >
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold ${isPicked ? "border-brand bg-brand text-white" : "border-ink/15 bg-white text-muted-text"}`}>
                    {isPicked ? <Check className="h-4 w-4" /> : LETTERS[oi]}
                  </span>
                  <span className="text-sm leading-relaxed text-ink sm:text-base">{opt}</span>
                </button>
              );
            })}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-2">
              <button
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
                disabled={index === 0}
                className="inline-flex items-center gap-1.5 rounded-md border border-ink/15 px-4 py-2 text-sm font-semibold text-ink disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" /> Sebelumnya
              </button>
              <button
                onClick={() => setFlagged((f) => ({ ...f, [index]: !isFlagged }))}
                className={`inline-flex items-center gap-1.5 rounded-md border px-4 py-2 text-sm font-semibold ${isFlagged ? "border-amber-400 bg-amber-50 text-amber-700" : "border-ink/15 text-ink"}`}
              >
                <Flag className="h-4 w-4" /> {isFlagged ? "Ragu-ragu" : "Tandai ragu"}
              </button>
            </div>
            {index < 109 ? (
              <button
                onClick={() => setIndex((i) => Math.min(109, i + 1))}
                className="inline-flex items-center gap-1.5 rounded-md bg-brand px-5 py-2 text-sm font-semibold text-white"
              >
                Selanjutnya <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={() => {
                  if (answeredCount < 110) {
                    const firstUnanswered = QUESTIONS.findIndex((_, i) => answers[i] === undefined);
                    if (firstUnanswered >= 0) setIndex(firstUnanswered);
                    return;
                  }
                  submit();
                }}
                className="inline-flex items-center gap-1.5 rounded-md bg-brand px-5 py-2 text-sm font-semibold text-white"
              >
                {answeredCount < 110 ? `Selesai · masih ${110 - answeredCount} belum dijawab` : "Selesai & Lihat Hasil"}
              </button>
            )}
          </div>
        </motion.div>

        <aside className="rounded-lg border border-ink/10 bg-white p-5 lg:sticky lg:top-32 lg:self-start">
          <h2 className="text-sm font-bold text-ink">Navigasi Soal</h2>
          <div className="mt-3 space-y-3">
            {([
              { label: "TWK", range: [0, 30], color: "bg-teal-700" },
              { label: "TIU", range: [30, 65], color: "bg-amber-800" },
              { label: "TKP", range: [65, 110], color: "bg-blue-700" },
            ] as const).map((g) => (
              <div key={g.label}>
                <p className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-muted-text">
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
                        className={`flex h-8 items-center justify-center rounded-lg font-mono text-xs font-bold transition ${
                          active ? "bg-brand text-white" : fl ? "bg-amber-100 text-amber-800" : answeredQ ? "bg-success-soft text-success" : "bg-ink/5 text-muted-text hover:bg-ink/10"
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
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-text">
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-success-soft" /> Dijawab</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-amber-100" /> Ragu-ragu</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-brand" /> Aktif</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
