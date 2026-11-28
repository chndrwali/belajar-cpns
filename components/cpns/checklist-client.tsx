"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { Check, CheckCircle2, LogIn } from "lucide-react";
import { CHECKLIST_ITEMS } from "@/lib/cpns/checklist";
import { useTRPC } from "@/trpc/client";
import { friendlyProgressError, useDashboardProgress, useInvalidateDashboard } from "@/components/cpns/progress-hooks";

const CATEGORIES = ["Identitas", "Pendidikan", "Foto & Dokumen", "Pernyataan"] as const;

export function ChecklistClient() {
  const { sessionPending, isLoggedIn, dashboard, dashboardLoading, dashboardError } = useDashboardProgress();
  const trpc = useTRPC();
  const invalidateDashboard = useInvalidateDashboard();
  const [done, setDone] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setDone(dashboard?.checklistDone ?? []);
  }, [dashboard]);

  const setMutation = useMutation(
    trpc.progress.setChecklist.mutationOptions({
      onSuccess: () => invalidateDashboard(),
      onError: (err) => {
        setError(friendlyProgressError(err));
      },
    }),
  );

  function toggle(id: string) {
    if (!isLoggedIn) return;
    setError(null);
    const next = done.includes(id) ? done.filter((d) => d !== id) : [...done, id];
    setDone(next);
    setMutation.mutate({ itemId: id, checked: !done.includes(id) });
  }

  const pct = Math.round((done.length / CHECKLIST_ITEMS.length) * 100);
  const complete = done.length === CHECKLIST_ITEMS.length;

  if (sessionPending || (isLoggedIn && dashboardLoading)) {
    return <div className="h-64 animate-pulse rounded-lg border border-ink/10 bg-ink/5" />;
  }

  if (isLoggedIn && dashboardError) {
    return (
      <div className="rounded-md border border-danger/20 bg-danger-soft p-5 text-sm text-danger">
        Checklist gagal dimuat dari database. Coba muat ulang halaman.
      </div>
    );
  }

  return (
    <div>
      {!isLoggedIn ? (
        <div className="mb-6 rounded-md border border-amber-200 bg-amber-50 p-5">
          <p className="font-semibold text-amber-900">Login untuk menyimpan checklistmu</p>
          <p className="mt-1 text-sm leading-relaxed text-amber-800">
            Checklist hanya bisa dicentang kalau kamu login. Progresnya tersimpan di akunmu,
            bukan di perangkat ini, jadi bisa dibuka dari mana pun.
          </p>
          <Link
            href="/login"
            className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white"
          >
            <LogIn className="h-4 w-4" /> Login
          </Link>
        </div>
      ) : null}

      <div className="rounded-lg border border-ink/10 bg-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm text-muted-text">
              {done.length} dari {CHECKLIST_ITEMS.length} dokumen siap
            </p>
            <p className="font-mono mt-1 text-3xl font-bold text-ink">{pct}%</p>
          </div>
          {complete ? (
            <p className="inline-flex items-center gap-2 rounded-full bg-success-soft px-4 py-2 text-sm font-bold text-success">
              <CheckCircle2 className="h-4 w-4" /> Siap daftar di SSCASN
            </p>
          ) : (
            <p className="rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-700">Belum lengkap</p>
          )}
        </div>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-ink/10">
          <div
            className="h-full rounded-full bg-brand transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {error ? (
        <p className="mt-4 rounded-md bg-danger-soft p-3 text-sm font-medium text-danger">{error}</p>
      ) : null}

      {CATEGORIES.map((cat) => (
        <section key={cat} className="mt-8">
          <h2 className="font-display text-lg font-extrabold text-ink">{cat}</h2>
          <div className="mt-3 space-y-3">
            {CHECKLIST_ITEMS.filter((item) => item.category === cat).map((item) => {
              const isDone = done.includes(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => toggle(item.id)}
                  disabled={!isLoggedIn}
                  title={isLoggedIn ? undefined : "Login dulu untuk mencentang checklist"}
                  className={`flex w-full items-start gap-4 rounded-lg border-2 p-5 text-left transition ${
                    isDone
                      ? "border-success bg-success-soft"
                      : "border-ink/10 bg-white hover:border-teal-600"
                  } ${isLoggedIn ? "" : "cursor-not-allowed opacity-60"}`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 ${
                      isDone ? "border-success bg-success text-white" : "border-ink/15 bg-white text-transparent"
                    }`}
                  >
                    <Check className="h-4 w-4" />
                  </span>
                  <span>
                    <span className={`block font-bold ${isDone ? "text-success line-through" : "text-ink"}`}>{item.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-text">{item.detail}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      ))}

      <p className="mt-8 rounded-md bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
        Catatan: syarat final bisa berbeda di tiap instansi. Selalu cek pengumuman resmi instansi
        yang kamu lamar dan portal SSCASN (sscasn.bkn.go.id) sebelum mendaftar.
      </p>
    </div>
  );
}
