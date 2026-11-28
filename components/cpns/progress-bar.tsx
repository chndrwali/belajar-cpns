"use client";

/**
 * Bar progres Tangga CPNS: track netral, isi teal. Satu warna progres
 * di seluruh situs, sama seperti anak tangga yang terisi di beranda.
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
        <p className="text-sm font-semibold text-ink">{label}</p>
        <p className="text-sm font-medium text-muted-text">
          {value}/{total} · {pct}%
        </p>
      </div>
      <div
        className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-ink/10"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={label}
      >
        <div
          className="h-full rounded-full bg-brand transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
