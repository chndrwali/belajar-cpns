"use client";

import { useEffect, useRef } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useTRPC } from "@/trpc/client";
import { useSession } from "@/lib/auth-client";

/**
 * Hook progres belajar dari database (tRPC).
 * Dipakai semua komponen CPNS — tidak ada lagi localStorage untuk progres.
 */
export function useDashboardProgress() {
  const { data: session, isPending: sessionPending } = useSession();
  const trpc = useTRPC();
  const query = useQuery(
    trpc.progress.getDashboard.queryOptions(undefined, { enabled: !!session?.user }),
  );
  return {
    session,
    sessionPending,
    isLoggedIn: !!session?.user,
    dashboard: query.data,
    dashboardLoading: query.isPending,
    dashboardError: query.isError,
    refetchDashboard: query.refetch,
  };
}

/**
 * Ubah error tRPC jadi pesan yang pantas ditampilkan ke user.
 * Error rate limit (TOO_MANY_REQUESTS) pesannya sudah Bahasa Indonesia
 * dari server — tampilkan apa adanya, jangan diganti pesan generik.
 */
export function friendlyProgressError(err: unknown): string {
  const msg = err instanceof Error ? err.message : "";
  if (msg.includes("Terlalu banyak permintaan")) return msg;
  return "Gagal menyimpan ke database. Coba lagi.";
}

export function useInvalidateDashboard() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  return () =>
    queryClient.invalidateQueries({ queryKey: trpc.progress.getDashboard.queryKey() });
}

/**
 * MIGRASI SATU KALI localStorage -> database.
 *
 * Ini SATU-SATUNYA tempat di repo yang masih menyentuh localStorage, dan
 * hanya untuk membaca 4 key lama ("belajar-cpns:*") saat user login pertama
 * kali setelah progres dipindah ke database. Setelah berhasil diimpor,
 * keempat key langsung DIHAPUS — jadi tidak ada lagi progres yang tersimpan
 * di perangkat. Kalau impor gagal, key dibiarkan supaya bisa dicoba lagi
 * di kunjungan berikutnya.
 */
const LEGACY_KEYS = {
  checklist: "belajar-cpns:checklist",
  quizBest: "belajar-cpns:quiz-best",
  tryoutHistory: "belajar-cpns:tryout-history",
  materialDone: "belajar-cpns:material-done",
} as const;

function readLegacy<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function useLegacyProgressImport() {
  const { data: session } = useSession();
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const attemptedFor = useRef<string | null>(null);

  const importMutation = useMutation(
    trpc.progress.importLegacy.mutationOptions({
      onSuccess: (counts) => {
        const total =
          counts.importedMaterials + counts.importedQuiz + counts.importedTryouts + counts.importedChecklist;
        Object.values(LEGACY_KEYS).forEach((key) => window.localStorage.removeItem(key));
        if (total > 0) {
          toast.success(`Progres lamamu berhasil dipindahkan ke akunmu (${total} item tersimpan di database).`);
          queryClient.invalidateQueries({ queryKey: trpc.progress.getDashboard.queryKey() });
        }
      },
    }),
  );

  useEffect(() => {
    const userId = session?.user?.id;
    if (!userId || attemptedFor.current === userId) return;
    attemptedFor.current = userId;

    const materialsDone = readLegacy<string[]>(LEGACY_KEYS.materialDone, []);
    const quizBest = readLegacy<Record<string, number>>(LEGACY_KEYS.quizBest, {});
    const tryoutHistory = readLegacy<
      Array<{ date: string; twk: number; tiu: number; tkp: number; total: number; passed: boolean; durationSeconds: number }>
    >(LEGACY_KEYS.tryoutHistory, []);
    const checklistDone = readLegacy<string[]>(LEGACY_KEYS.checklist, []);

    const hasAnything =
      materialsDone.length > 0 ||
      Object.keys(quizBest).length > 0 ||
      tryoutHistory.length > 0 ||
      checklistDone.length > 0;
    if (!hasAnything) return;

    importMutation.mutate({ materialsDone, quizBest, tryoutHistory, checklistDone });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.user?.id]);
}
