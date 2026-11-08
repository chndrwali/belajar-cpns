"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { Check, CheckCircle2, LogIn } from "lucide-react";
import { useTRPC } from "@/trpc/client";
import { friendlyProgressError, useDashboardProgress, useInvalidateDashboard } from "@/components/cpns/progress-hooks";

export function MarkDoneButton({ slug, label }: { slug: string; label?: string }) {
  const { isLoggedIn, dashboard } = useDashboardProgress();
  const trpc = useTRPC();
  const invalidateDashboard = useInvalidateDashboard();
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setDone(dashboard?.materialsDone.includes(slug) ?? false);
  }, [dashboard, slug]);

  const toggleMutation = useMutation(
    trpc.progress.toggleMaterial.mutationOptions({
      onSuccess: () => invalidateDashboard(),
      onError: (err) => {
        setDone((d) => !d);
        setError(friendlyProgressError(err));
      },
    }),
  );

  if (!isLoggedIn) {
    return (
      <Link
        href="/login"
        className="inline-flex items-center gap-2 rounded-full bg-[#131316] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        title="Login dulu supaya progresmu tersimpan di akunmu"
      >
        <LogIn className="h-4 w-4" />
        Login untuk menyimpan progres
      </Link>
    );
  }

  function toggle() {
    setError(null);
    setDone(!done);
    toggleMutation.mutate({ slug, done: !done });
  }

  return (
    <span className="inline-flex flex-col items-start gap-1.5">
      <button
        onClick={toggle}
        disabled={toggleMutation.isPending}
        className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition disabled:opacity-60 ${
          done ? "bg-emerald-600 text-white" : "bg-[#131316] text-white hover:opacity-90"
        }`}
      >
        {done ? <CheckCircle2 className="h-4 w-4" /> : <Check className="h-4 w-4" />}
        {done ? "Sudah dibaca — batalkan" : (label ?? "Tandai sudah dibaca")}
      </button>
      {error ? <span className="text-xs font-medium text-red-600">{error}</span> : null}
    </span>
  );
}
