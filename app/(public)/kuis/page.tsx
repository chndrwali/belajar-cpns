import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/cpns/shared";
import { KuisList } from "@/components/cpns/kuis-list";

export const metadata = { title: "Kuis per Bab — Belajar CPNS" };

export default function KuisPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <SectionHeading
        eyebrow="Latihan soal"
        title="Kuis per bab — 10 soal tiap materi"
        desc="Jawab satu soal, langsung lihat benar atau salah beserta pembahasannya. Skor terbaikmu tersimpan di akunmu."
      />
      <KuisList />
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
