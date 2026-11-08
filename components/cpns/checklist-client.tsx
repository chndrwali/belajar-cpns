"use client";

import { useEffect, useState } from "react";
import { Check, CheckCircle2 } from "lucide-react";
import { CHECKLIST_ITEMS } from "@/lib/cpns/checklist";
import { LS_KEYS, getChecklistDone, writeJson } from "@/lib/cpns/progress";

const CATEGORIES = ["Identitas", "Pendidikan", "Foto & Dokumen", "Pernyataan"] as const;

export function ChecklistClient() {
  const [done, setDone] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setDone(getChecklistDone());
    setReady(true);
  }, []);

  function toggle(id: string) {
    const next = done.includes(id) ? done.filter((d) => d !== id) : [...done, id];
    setDone(next);
    writeJson(LS_KEYS.checklist, next);
  }

  const pct = Math.round((done.length / CHECKLIST_ITEMS.length) * 100);
  const complete = done.length === CHECKLIST_ITEMS.length;

  if (!ready) return null;

  return (
    <div>
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
                  className={`flex w-full items-start gap-4 rounded-3xl border-2 p-5 text-left transition ${
                    isDone ? "border-emerald-400 bg-emerald-50" : "border-neutral-200 bg-white hover:border-orange-300"
                  }`}
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
