import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { MATERIALS, SECTION_INFO } from "@/lib/cpns/materials";
import { SectionHeading } from "@/components/cpns/shared";

export const metadata = { title: "Materi SKD — Belajar CPNS" };

const SECTIONS = ["twk", "tiu", "tkp"] as const;

export default function MateriPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <SectionHeading
        eyebrow="Materi SKD"
        title="Pelajari dulu, baru latihan"
        desc="15 materi ringkas yang disusun dari kisi-kisi SKD. Tiap materi ada poin kunci, contoh soal, dan tombol latihan soal bab itu."
      />
      {SECTIONS.map((section) => {
        const info = SECTION_INFO[section];
        const mats = MATERIALS.filter((m) => m.section === section);
        return (
          <section key={section} className="mt-12">
            <div className="flex items-center gap-3">
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-bold text-white ${info.color}`}>
                {info.name}
              </span>
              <h2 className="text-xl font-bold text-[#131316]">{info.full}</h2>
              <span className="text-sm text-neutral-400">{info.minutes} di SKD</span>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {mats.map((m) => (
                <Link
                  key={m.slug}
                  href={`/materi/${m.slug}`}
                  className="group rounded-3xl border border-neutral-200 bg-white p-6 transition hover:border-orange-300 hover:shadow-lg"
                >
                  <h3 className="text-lg font-bold text-[#131316] group-hover:text-orange-700">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">{m.short}</p>
                  <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-neutral-400">
                    <Clock className="h-3.5 w-3.5" /> ±{m.estimatedMinutes} menit · 10 soal latihan
                  </p>
                  <p className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-orange-600">
                    Baca materi <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
