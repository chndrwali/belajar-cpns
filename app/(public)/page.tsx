import Link from "next/link";
import { ArrowRight, BookOpen, CheckSquare, Clock, ListChecks, Target, Timer } from "lucide-react";
import { MATERIALS, SECTION_INFO } from "@/lib/cpns/materials";
import { EBOOK_REFERENCES } from "@/lib/cpns/ebooks";
import { YOUTUBE_CHANNELS } from "@/lib/cpns/youtube";
import { PASSING_GRADE } from "@/lib/cpns/types";
import { DashboardProgress } from "@/components/cpns/dashboard-progress";
import { GradientButton, SectionHeading, EbookCard, YoutubeCard } from "@/components/cpns/shared";

const SECTION_CARDS = [
  {
    key: "twk",
    desc: "Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika, sejarah, dan bahasa Indonesia.",
    icon: BookOpen,
  },
  {
    key: "tiu",
    desc: "Verbal, numerik, dan figural — logika, hitungan cepat, dan pola gambar.",
    icon: Target,
  },
  {
    key: "tkp",
    desc: "Pelayanan publik, jejaring kerja, sosial budaya, teknologi, dan profesionalisme.",
    icon: CheckSquare,
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero — Modulify style: white, oversized centered headline, warm gradient accent */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-12 text-center sm:px-6 sm:pt-24">
        <p className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
          <Clock className="h-3.5 w-3.5" />
          CPNS 2026 — Pendaftaran direncanakan November 2026
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl text-5xl leading-[1.05] font-bold tracking-tight text-[#131316] sm:text-7xl">
          Lulus SKD CPNS,{" "}
          <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-pink-500 bg-clip-text text-transparent">
            mulai dari sini.
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg">
          Materi TWK, TIU, dan TKP yang ringkas, kuis per bab, tryout SKD lengkap 110 soal dengan
          timer, plus checklist administrasi — semuanya gratis dan bisa dipakai tanpa login.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <GradientButton href="/tryout">Mulai Tryout SKD</GradientButton>
          <Link
            href="/materi"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-[#131316] transition hover:border-[#131316]"
          >
            Pelajari Materi
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 divide-x divide-neutral-200 rounded-2xl border border-neutral-200 bg-white py-4">
          <div>
            <p className="text-2xl font-bold text-[#131316] sm:text-3xl">15</p>
            <p className="mt-1 text-xs text-neutral-500 sm:text-sm">Materi ringkas</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#131316] sm:text-3xl">150</p>
            <p className="mt-1 text-xs text-neutral-500 sm:text-sm">Soal kuis per bab</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#131316] sm:text-3xl">110</p>
            <p className="mt-1 text-xs text-neutral-500 sm:text-sm">Soal tryout SKD</p>
          </div>
        </div>
      </section>

      {/* Progress */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <h2 className="mb-4 text-lg font-bold text-[#131316]">Progres belajarmu</h2>
        <DashboardProgress />
        <p className="mt-3 text-xs text-neutral-400">
          Progresmu tersimpan di akunmu dan bisa dibuka dari perangkat mana pun setelah login.
        </p>
      </section>

      {/* SKD sections */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <SectionHeading
          eyebrow="Seleksi Kompetensi Dasar"
          title="Tiga bagian SKD, satu tempat belajar"
          desc="SKD terdiri dari 110 soal dalam 100 menit. Kenali formatnya, lalu latih tiap bagian sampai melewati passing grade."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {SECTION_CARDS.map((card) => {
            const info = SECTION_INFO[card.key];
            const count = MATERIALS.filter((m) => m.section === card.key).length;
            return (
              <div key={card.key} className="rounded-3xl border border-neutral-200 bg-white p-6 transition hover:shadow-lg">
                <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl text-white ${info.color}`}>
                  <card.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-xl font-bold text-[#131316]">
                  {info.name} <span className="text-sm font-medium text-neutral-400">· {info.minutes}</span>
                </h3>
                <p className="text-sm font-medium text-neutral-500">{info.full}</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{card.desc}</p>
                <p className="mt-3 text-sm">
                  Passing grade acuan 2024:{" "}
                  <span className="font-bold text-[#131316]">
                    {card.key === "twk" ? PASSING_GRADE.twk : card.key === "tiu" ? PASSING_GRADE.tiu : PASSING_GRADE.tkp}
                  </span>
                </p>
                <Link href="/materi" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-600 hover:underline">
                  {count} materi · Pelajari <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tryout + checklist */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl bg-[#131316] p-8 text-white">
            <Timer className="h-8 w-8 text-orange-400" />
            <h3 className="mt-4 text-2xl font-bold">Tryout SKD Lengkap</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-300">
              110 soal persis format SKD — 30 TWK, 35 TIU, 45 TKP — dengan timer 100 menit,
              navigasi nomor soal, tandai ragu-ragu, dan pembahasan per soal setelah selesai.
            </p>
            <Link
              href="/tryout"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#131316] transition hover:bg-neutral-100"
            >
              Mulai Tryout <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-8">
            <ListChecks className="h-8 w-8 text-orange-600" />
            <h3 className="mt-4 text-2xl font-bold text-[#131316]">Checklist Administrasi</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
              KTP, KK, ijazah, transkrip, pas foto, swafoto, e-meterai, surat lamaran, dan surat
              pernyataan — centang satu per satu sampai 100% siap daftar di SSCASN.
            </p>
            <Link
              href="/checklist"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#131316] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Buka Checklist <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* YouTube references — 6 channels */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <SectionHeading
          eyebrow="Belajar lewat video"
          title="Channel YouTube CPNS yang direkomendasikan"
          desc="Tonton pembahasan soal dari tutor yang sudah terbukti membantu banyak pejuang CPNS. Klik kartu untuk membuka channel-nya di YouTube."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {YOUTUBE_CHANNELS.map((ch) => (
            <YoutubeCard key={ch.name} channel={ch} />
          ))}
        </div>
      </section>

      {/* Ebook references — alternatif belajar selain video */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <SectionHeading
          eyebrow="Belajar lewat bacaan"
          title="Kumpulan ebook CPNS"
          desc="Kalau lebih suka baca daripada nonton video, folder Google Drive ini berisi ebook dan latihan soal CPNS yang bisa diunduh dan dipelajari sendiri."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {EBOOK_REFERENCES.map((ebook) => (
            <EbookCard key={ebook.title} ebook={ebook} />
          ))}
        </div>
      </section>
    </div>
  );
}
