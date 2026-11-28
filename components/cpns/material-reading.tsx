import { BookOpen } from "lucide-react";
import type { MaterialReading } from "@/lib/cpns/types";

/**
 * Materi bacaan panjang di halaman detail materi — pola yang sama seperti
 * Belajar Islam: tiap bagian punya judul + 2-3 paragraf prosa, ditutup
 * daftar sumber. Ditulis sendiri, bukan salinan ebook.
 */
export function MaterialReadingSection({ reading }: { reading: MaterialReading }) {
  return (
    <section className="mt-6 rounded-lg border border-ink/10 bg-white p-6 sm:p-8">
      <h2 className="font-display flex items-center gap-2 text-lg font-extrabold text-ink">
        <BookOpen className="h-5 w-5 text-teal-700" /> Materi bacaan
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-text">
        Baca materi ini dari awal sampai akhir sebelum latihan soal. Konsepnya
        dijelaskan dari nol.
      </p>
      <ol className="mt-4 space-y-1 border-y border-ink/10 py-4">
        {reading.sections.map((section, i) => (
          <li key={section.heading}>
            <a
              href={`#seksi-${i + 1}`}
              className="flex items-baseline gap-2 rounded-md px-2 py-1.5 text-sm text-muted-text transition hover:bg-paper hover:text-teal-800"
            >
              <span className="font-mono shrink-0 text-xs font-bold text-teal-700">{i + 1}.</span>
              {section.heading}
            </a>
          </li>
        ))}
      </ol>
      {reading.sections.map((section, i) => (
        <div key={section.heading} id={`seksi-${i + 1}`} className="mt-7 scroll-mt-24">
          <h3 className="text-base font-bold text-ink sm:text-lg">{section.heading}</h3>
          {section.body.map((paragraph, j) => (
            <p key={j} className="mt-3 text-sm leading-relaxed text-muted-text sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
      <div className="mt-8 border-t border-ink/10 pt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-text">Sumber</p>
        <ul className="mt-2 space-y-1">
          {reading.sources.map((source) => (
            <li key={source} className="text-xs leading-relaxed text-muted-text">
              • {source}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
