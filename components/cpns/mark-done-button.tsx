"use client";

import { useEffect, useState } from "react";
import { Check, CheckCircle2 } from "lucide-react";
import { LS_KEYS, getMaterialsDone, writeJson } from "@/lib/cpns/progress";

export function MarkDoneButton({ slug, label }: { slug: string; label?: string }) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    setDone(getMaterialsDone().includes(slug));
  }, [slug]);

  function toggle() {
    const current = getMaterialsDone();
    const next = done ? current.filter((s) => s !== slug) : [...current, slug];
    writeJson(LS_KEYS.materialDone, next);
    setDone(!done);
  }

  return (
    <button
      onClick={toggle}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
        done ? "bg-emerald-600 text-white" : "bg-[#131316] text-white hover:opacity-90"
      }`}
    >
      {done ? <CheckCircle2 className="h-4 w-4" /> : <Check className="h-4 w-4" />}
      {done ? "Sudah dibaca — batalkan" : (label ?? "Tandai sudah dibaca")}
    </button>
  );
}
