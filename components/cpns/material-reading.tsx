import { BookOpen } from "lucide-react";
import type { MaterialReading } from "@/lib/cpns/types";

/**
 * Materi bacaan panjang di halaman detail materi — pola yang sama seperti
 * Belajar Islam: tiap bagian punya judul + 2-3 paragraf prosa, ditutup
 * daftar sumber. Ditulis sendiri, bukan salinan ebook.
 */
export function MaterialReadingSection({ reading }: { reading: MaterialReading }) {
  return (
    <section className="mt-6 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
      <h2 className="flex items-center gap-2 text-lg font-bold text-[#131316]">
        <BookOpen className="h-5 w-5 text-orange-500" /> Materi bacaan
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500">
        Baca materi ini dari awal sampai akhir sebelum latihan soal — konsepnya
        dijelaskan dari nol.
      </p>
      {reading.sections.map((section) => (
        <div key={section.heading} className="mt-7">
          <h3 className="text-base font-bold text-[#131316] sm:text-lg">{section.heading}</h3>
          {section.body.map((paragraph, i) => (
            <p key={i} className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>
      ))}
      <div className="mt-8 border-t border-neutral-100 pt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Sumber</p>
        <ul className="mt-2 space-y-1">
          {reading.sources.map((source) => (
            <li key={source} className="text-xs leading-relaxed text-neutral-500">
              • {source}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
