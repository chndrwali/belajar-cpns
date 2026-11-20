import type { Question } from "./types";
import { TRYOUT_QUESTIONS } from "./tryout-questions";
import { TRYOUT_QUESTIONS_2 } from "./tryout-questions-2";

export interface TryoutConfig {
  id: "1" | "2";
  /** Judul lengkap di halaman intro tryout. */
  title: string;
  /** Label singkat untuk kartu pilihan. */
  shortTitle: string;
  /** Penjelasan singkat di kartu pilihan dan intro. */
  subtitle: string;
  /** Label level di kartu pilihan. */
  level: string;
  questions: Question[];
  /** Kunci draf localStorage — dipisah per tryout supaya draf Tryout 1
   * tidak tertukar dengan draf Tryout 2. */
  draftKey: string;
}

export const TRYOUTS: Record<"1" | "2", TryoutConfig> = {
  "1": {
    id: "1",
    title: "Tryout SKD 1 — Dasar",
    shortTitle: "Tryout 1",
    subtitle:
      "Soal dasar SKD: TWK 30, TIU 35, TKP 45. Cocok untuk pemanasan dan mengukur kemampuan awalmu.",
    level: "Dasar",
    questions: TRYOUT_QUESTIONS,
    draftKey: "belajar-cpns:tryout-draft-1",
  },
  "2": {
    id: "2",
    title: "Tryout SKD 2 — HOTS",
    shortTitle: "Tryout 2",
    subtitle:
      "Soal HOTS (Higher Order Thinking Skills) dari ebook latihan CPNS: analisis lebih dalam, pengecoh lebih rapat, hitungan multi-langkah. Lebih susah dari Tryout 1.",
    level: "HOTS · Lebih susah",
    questions: TRYOUT_QUESTIONS_2,
    draftKey: "belajar-cpns:tryout-draft-2",
  },
};

export function getTryout(id: string): TryoutConfig | null {
  return id === "1" || id === "2" ? TRYOUTS[id] : null;
}
