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
    return <div className="h-64 animate-pulse rounded-3xl border border-neutral-200 bg-neutral-50" />;
  }

  if (isLoggedIn && dashboardError) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-800">
        Checklist gagal dimuat dari database. Coba muat ulang halaman.
      </div>
    );
  }

  return (
    <div>
      {!isLoggedIn ? (
        <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="font-semibold text-amber-900">Login untuk menyimpan checklistmu</p>
          <p className="mt-1 text-sm leading-relaxed text-amber-800">
            Checklist hanya bisa dicentang kalau kamu login — progresnya tersimpan di akunmu,
            bukan di perangkat ini, jadi bisa dibuka dari mana pun.
          </p>
          <Link
            href="/login"
            className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#131316] px-4 py-2 text-sm font-semibold text-white"
          >
            <LogIn className="h-4 w-4" /> Login
          </Link>
        </div>
      ) : null}

      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm text-neutral-500">
              {done.length} dari {CHECKLIST_ITEMS.length} dokumen siap
            </p>
            <p className="mt-1 text-3xl font-bold text-[#131316]">{pct}%</p>
          </div>
          {complete ? (
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
              <CheckCircle2 className="h-4 w-4" /> Siap daftar di SSCASN
            </p>
          ) : (
            <p className="rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-700">Belum lengkap</p>
          )}
        </div>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-neutral-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-pink-500 transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {error ? (
        <p className="mt-4 rounded-2xl bg-red-50 p-3 text-sm font-medium text-red-700">{error}</p>
      ) : null}

      {CATEGORIES.map((cat) => (
        <section key={cat} className="mt-8">
          <h2 className="text-lg font-bold text-[#131316]">{cat}</h2>
          <div className="mt-3 space-y-3">
            {CHECKLIST_ITEMS.filter((item) => item.category === cat).map((item) => {
              const isDone = done.includes(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => toggle(item.id)}
                  disabled={!isLoggedIn}
                  title={isLoggedIn ? undefined : "Login dulu untuk mencentang checklist"}
                  className={`flex w-full items-start gap-4 rounded-3xl border-2 p-5 text-left transition ${
                    isDone
                      ? "border-emerald-400 bg-emerald-50"
                      : "border-neutral-200 bg-white hover:border-orange-300"
                  } ${isLoggedIn ? "" : "cursor-not-allowed opacity-60"}`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 ${
                      isDone ? "border-emerald-500 bg-emerald-500 text-white" : "border-neutral-300 bg-white text-transparent"
                    }`}
                  >
                    <Check className="h-4 w-4" />
                  </span>
                  <span>
                    <span className={`block font-bold ${isDone ? "text-emerald-900 line-through" : "text-[#131316]"}`}>{item.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-neutral-500">{item.detail}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      ))}

      <p className="mt-8 rounded-2xl bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
        Catatan: syarat final bisa berbeda di tiap instansi — selalu cek pengumuman resmi instansi
        yang kamu lamar dan portal SSCASN (sscasn.bkn.go.id) sebelum mendaftar.
      </p>
    </div>
  );
}
