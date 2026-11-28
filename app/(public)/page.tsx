import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, CheckSquare, Clock, ExternalLink, ListChecks, Target, Timer } from "lucide-react";
import { MATERIALS, SECTION_INFO } from "@/lib/cpns/materials";
import { EBOOK_REFERENCES } from "@/lib/cpns/ebooks";
import { YOUTUBE_CHANNELS } from "@/lib/cpns/youtube";
import { PASSING_GRADE } from "@/lib/cpns/types";
import { DashboardProgress } from "@/components/cpns/dashboard-progress";
import { FaqAccordion } from "@/components/cpns/faq";
import { FAQ_ITEMS } from "@/lib/cpns/faq";
import { PrimaryButton, SectionHeading, EbookCard, YoutubeCard } from "@/components/cpns/shared";
import { CountUp, GsapHero, Reveal, Stagger, StaggerItem } from "@/components/cpns/animate";

const SECTION_CARDS = [
  {
    key: "twk",
    desc: "Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika, sejarah, dan bahasa Indonesia.",
    icon: BookOpen,
  },
  {
    key: "tiu",
    desc: "Verbal, numerik, dan figural, logika, hitungan cepat, dan pola gambar.",
    icon: Target,
  },
  {
    key: "tkp",
    desc: "Pelayanan publik, jejaring kerja, sosial budaya, teknologi, dan profesionalisme.",
    icon: CheckSquare,
  },
];

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-10 text-center sm:px-6 sm:pt-20">
        <GsapHero>
          <a
            href="https://sscasn.bkn.go.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-teal-700/20 bg-brand-soft px-3 py-1 text-xs font-semibold text-teal-800 transition hover:bg-teal-700/10"
          >
            <Clock className="h-3.5 w-3.5" />
            CPNS 2026 · Pendaftaran direncanakan November 2026
            <span className="inline-flex items-center gap-1 text-teal-700">
              Info resmi <ExternalLink className="h-3 w-3" />
            </span>
          </a>
          <h1 className="font-display mx-auto mt-6 max-w-3xl text-5xl leading-[1.05] font-extrabold tracking-tight text-ink sm:text-7xl">
            Lulus SKD CPNS,{" "}
            <span className="text-teal-700">mulai dari sini.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-text sm:text-lg">
            Materi TWK, TIU, dan TKP yang ringkas, kuis per bab, 2 tryout SKD lengkap 110 soal dengan
            timer, plus checklist administrasi. Semuanya gratis dan bisa dipakai tanpa login.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton href="/tryout">Mulai Tryout SKD</PrimaryButton>
            <Link
              href="/materi"
              className="inline-flex items-center gap-2 rounded-md border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink"
            >
              Pelajari Materi
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 divide-x divide-ink/10 rounded-lg border border-ink/10 bg-white py-4">
            <div>
              <p className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                <CountUp to={17} />
              </p>
              <p className="mt-1 text-xs text-muted-text sm:text-sm">Materi ringkas</p>
            </div>
            <div>
              <p className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                <CountUp to={170} />
              </p>
              <p className="mt-1 text-xs text-muted-text sm:text-sm">Soal kuis per bab</p>
            </div>
            <div>
              <p className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                <CountUp to={220} />
              </p>
              <p className="mt-1 text-xs text-muted-text sm:text-sm">Soal tryout SKD (2 set)</p>
            </div>
          </div>
        </GsapHero>
      </section>

      {/* Progress */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <Reveal>
          <h2 className="font-display mb-4 text-lg font-extrabold text-ink">Progres belajarmu</h2>
          <DashboardProgress />
          <p className="mt-3 text-xs text-muted-text">
            Progresmu tersimpan di akunmu dan bisa dibuka dari perangkat mana pun setelah login.
          </p>
        </Reveal>
      </section>

      {/* SKD sections */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Seleksi Kompetensi Dasar"
            title="Tiga bagian SKD, satu tempat belajar"
            desc="SKD terdiri dari 110 soal dalam 100 menit. Kenali formatnya, lalu latih tiap bagian sampai melewati passing grade."
          />
        </Reveal>
        <Stagger className="mt-10 grid gap-4 md:grid-cols-3">
          {SECTION_CARDS.map((card) => {
            const info = SECTION_INFO[card.key];
            const count = MATERIALS.filter((m) => m.section === card.key).length;
            return (
              <StaggerItem key={card.key} className="h-full">
                <div className="h-full rounded-lg border border-ink/10 bg-white p-6 transition hover:shadow-soft">
                  <span className={`inline-flex h-11 w-11 items-center justify-center rounded-md text-white ${info.color}`}>
                    <card.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display mt-4 text-xl font-extrabold text-ink">
                    {info.name} <span className="font-sans text-sm font-medium text-muted-text">· {info.minutes}</span>
                  </h3>
                  <p className="text-sm font-medium text-muted-text">{info.full}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-text">{card.desc}</p>
                  <p className="mt-3 text-sm">
                    Passing grade acuan 2024:{" "}
                    <span className="font-mono font-bold text-ink">
                      {card.key === "twk" ? PASSING_GRADE.twk : card.key === "tiu" ? PASSING_GRADE.tiu : PASSING_GRADE.tkp}
                    </span>
                  </p>
                  <Link href="/materi" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 hover:underline">
                    {count} materi · Pelajari <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* Tryout + checklist */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-ink p-8 text-white">
              <Timer className="h-8 w-8 text-amber-accent" />
              <h3 className="font-display mt-4 text-2xl font-extrabold">Tryout SKD Lengkap</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Dua set soal persis format SKD (30 TWK, 35 TIU, 45 TKP) dengan timer 100 menit,
                navigasi nomor soal, tandai ragu-ragu, dan pembahasan per soal setelah selesai.
                Tryout 2 (HOTS) lebih susah dari Tryout 1.
              </p>
              <Link
                href="/tryout"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-paper"
              >
                Mulai Tryout <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-lg border border-ink/10 bg-white p-8">
              <ListChecks className="h-8 w-8 text-teal-700" />
              <h3 className="font-display mt-4 text-2xl font-extrabold text-ink">Checklist Administrasi</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-text">
                KTP, KK, ijazah, transkrip, pas foto, swafoto, e-meterai, surat lamaran, dan surat
                pernyataan. Centang satu per satu sampai 100% siap daftar di SSCASN.
              </p>
              <Link
                href="/checklist"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Buka Checklist <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Contoh hasil tryout — tampilan ulang layar hasil (data contoh, statis) */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Hasil tryout"
            title="Contoh hasil tryout"
            desc="Begini tampilan hasil yang kamu dapat setelah menyelesaikan tryout: status lolos atau belum, skor tiap bagian melawan passing grade, dan pembahasan semua soal."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="rounded-lg bg-success p-8 text-center text-white">
              <CheckCircle2 className="mx-auto h-12 w-12" />
              <h3 className="font-display mt-3 text-3xl font-extrabold">LOLOS Passing Grade</h3>
              <p className="mt-2 text-white/80">
                Total skor <span className="font-mono font-bold">410</span> · Waktu yang dipakai 82 menit 14 detik
              </p>
              <p className="mt-1 text-sm text-white/60">
                Passing grade acuan 2024 · TWK {PASSING_GRADE.twk}, TIU {PASSING_GRADE.tiu}, TKP{" "}
                {PASSING_GRADE.tkp}.
              </p>
              <p className="mx-auto mt-4 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
                Contoh hasil · bukan skor pengguna sungguhan
              </p>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {(
                [
                  { label: "TWK", score: 95, max: 150, pg: PASSING_GRADE.twk, color: "text-teal-700" },
                  { label: "TIU", score: 125, max: 175, pg: PASSING_GRADE.tiu, color: "text-amber-800" },
                  { label: "TKP", score: 190, max: 225, pg: PASSING_GRADE.tkp, color: "text-blue-700" },
                ] as const
              ).map((s) => (
                <div key={s.label} className="rounded-lg border border-ink/10 bg-white p-5 text-center">
                  <p className={`text-sm font-bold ${s.color}`}>{s.label}</p>
                  <p className="font-mono mt-1 text-3xl font-bold text-ink">{s.score}</p>
                  <p className="text-xs text-muted-text">
                    dari {s.max} · PG {s.pg}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-success">Lolos</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-muted-text">
              Angka di atas hanya contoh tampilan. Skor aslimu dihitung dari jawabanmu sendiri setelah
              tryout selesai.
            </p>
            <div className="mt-6 flex justify-center">
              <PrimaryButton href="/tryout">Coba tryout sekarang</PrimaryButton>
            </div>
          </div>
        </Reveal>
      </section>

      {/* YouTube references — 6 channels */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Belajar lewat video"
            title="Channel YouTube CPNS yang direkomendasikan"
            desc="Tonton pembahasan soal dari tutor yang sudah terbukti membantu banyak pejuang CPNS. Klik kartu untuk membuka channel-nya di YouTube."
          />
        </Reveal>
        <Stagger className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {YOUTUBE_CHANNELS.map((ch) => (
            <StaggerItem key={ch.name} className="h-full">
              <YoutubeCard channel={ch} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Pertanyaan umum"
            title="Yang sering ditanyakan"
            desc="Jawaban singkat seputar pendaftaran, format SKD, cara hitung skor, dan cara pakai situs ini."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <FaqAccordion />
        </Reveal>
      </section>

      {/* Ebook references — alternatif belajar selain video */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Belajar lewat bacaan"
            title="Kumpulan ebook CPNS"
            desc="Kalau lebih suka baca daripada nonton video, folder Google Drive ini berisi ebook dan latihan soal CPNS yang bisa diunduh dan dipelajari sendiri."
          />
        </Reveal>
        <Stagger className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {EBOOK_REFERENCES.map((ebook) => (
            <StaggerItem key={ebook.title} className="h-full">
              <EbookCard ebook={ebook} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  );
}
