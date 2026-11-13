"use client";

/**
 * Bar progres gaya Modulify: track netral, isi emerald (warna yang sama
 * dengan penanda "selesai" di kartu materi/kuis).
 */
export function ProgressBar({
  value,
  total,
  label,
}: {
  value: number;
  total: number;
  label: string;
}) {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-sm font-semibold text-[#131316]">{label}</p>
        <p className="text-sm font-medium text-neutral-500">
          {value}/{total} · {pct}%
        </p>
      </div>
      <div
        className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-neutral-200"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={label}
      >
        <div
          className="h-full rounded-full bg-emerald-500 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
