export type SkdSection = "twk" | "tiu" | "tkp";

export interface Material {
  slug: string;
  section: SkdSection;
  sectionName: string;
  title: string;
  short: string;
  estimatedMinutes: number;
  keyPoints: string[];
  example: string;
  exampleAnswer: string;
}

export interface YoutubeChannel {
  name: string;
  handle?: string;
  specialty: string;
  forWhom: string;
  topics: SkdSection[];
  searchUrl: string;
}

export interface Question {
  id: string;
  section: SkdSection;
  question: string;
  options: string[];
  answer: number; // index of correct option (0-4); for TKP this is the 5-point option
  explanation: string;
  /** TKP only: points per option, index 0..4. If absent, correct option = 5 pts, others 0. */
  points?: number[];
}

export interface ChecklistItem {
  id: string;
  title: string;
  detail: string;
  category: "Identitas" | "Pendidikan" | "Foto & Dokumen" | "Pernyataan";
}

export const PASSING_GRADE = { twk: 65, tiu: 80, tkp: 166 } as const;
export const TRYOUT_TOTAL = 110;
export const TRYOUT_MINUTES = 100;

/** Score a TWK/TIU question: 5 if correct, else 0. */
export function scoreKnowledge(q: Question, chosen: number): number {
  return chosen === q.answer ? 5 : 0;
}

/** Score a TKP question: points[chosen] (1-5). */
export function scoreTkp(q: Question, chosen: number): number {
  if (q.points) return q.points[chosen] ?? 0;
  return chosen === q.answer ? 5 : 0;
}

export function ytSearch(query: string): string {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
}
