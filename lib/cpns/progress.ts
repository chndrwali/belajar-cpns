// localStorage helpers — all CPNS progress is stored client-side, no login/DB needed.
export const LS_KEYS = {
  checklist: "belajar-cpns:checklist",
  quizBest: "belajar-cpns:quiz-best",
  tryoutHistory: "belajar-cpns:tryout-history",
  materialDone: "belajar-cpns:material-done",
} as const;

export interface TryoutResult {
  date: string;
  twk: number;
  tiu: number;
  tkp: number;
  total: number;
  passed: boolean;
  durationSeconds: number;
}

export function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function writeJson(key: string, value: unknown): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage full / unavailable — progress just won't persist
  }
}

export function getChecklistDone(): string[] {
  return readJson<string[]>(LS_KEYS.checklist, []);
}

export function getQuizBest(): Record<string, number> {
  return readJson<Record<string, number>>(LS_KEYS.quizBest, {});
}

export function getTryoutHistory(): TryoutResult[] {
  return readJson<TryoutResult[]>(LS_KEYS.tryoutHistory, []);
}

export function getMaterialsDone(): string[] {
  return readJson<string[]>(LS_KEYS.materialDone, []);
}
