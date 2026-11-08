import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { MATERIALS, SECTION_INFO } from "@/lib/cpns/materials";
import { SectionHeading } from "@/components/cpns/shared";

export const metadata = { title: "Kuis per Bab — Belajar CPNS" };

export default function KuisPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <SectionHeading
        eyebrow="Latihan soal"
        title="Kuis per bab — 10 soal tiap materi"
        desc="Jawab satu soal, langsung lihat benar atau salah beserta pembahasannya. Skor terbaikmu tersimpan di perangkat ini."
      />
      {(["twk", "tiu", "tkp"] as const).map((section) => {
        const info = SECTION_INFO[section];
        const mats = MATERIALS.filter((m) => m.section === section);
        return (
          <section key={section} className="mt-12">
            <div className="flex items-center gap-3">
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-bold text-white ${info.color}`}>{info.name}</span>
              <h2 className="text-xl font-bold text-[#131316]">{info.full}</h2>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {mats.map((m) => (
                <Link
                  key={m.slug}
                  href={`/kuis/${m.slug}`}
                  className="group rounded-3xl border border-neutral-200 bg-white p-6 transition hover:border-orange-300 hover:shadow-lg"
                >
                  <HelpCircle className="h-6 w-6 text-orange-600" />
                  <h3 className="mt-3 text-lg font-bold text-[#131316] group-hover:text-orange-700">{m.title}</h3>
                  <p className="mt-1 text-sm text-neutral-500">10 soal · pembahasan langsung · ±{m.estimatedMinutes} menit</p>
                  <p className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-orange-600">
                    Mulai kuis <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
      <div className="mt-12 rounded-3xl bg-[#131316] p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Sudah pede dengan semua bab?</h2>
        <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-neutral-300">
          Uji kemampuanmu dalam kondisi ujian sebenarnya: tryout SKD lengkap 110 soal dengan timer 100 menit.
        </p>
        <Link href="/tryout" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#131316]">
          Ikut Tryout SKD <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
