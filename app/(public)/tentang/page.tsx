import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang — Belajar CPNS",
  description:
    "Tentang Belajar CPNS: platform belajar SKD CPNS gratis yang dibuat oleh Candra Wali Sanjaya, fullstack web developer dari Bandung.",
};

export default function TentangPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-semibold tracking-[0.2em] text-orange-600 uppercase">Tentang</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-[#131316]">Tentang Belajar CPNS</h1>

      <section className="mt-8 space-y-4 text-base leading-relaxed text-neutral-600">
        <p>
          Belajar CPNS adalah platform belajar mandiri untuk Seleksi Kompetensi Dasar (SKD) CPNS —
          gratis, tanpa iklan, dan bisa dipakai tanpa login. Di dalamnya ada 15 materi ringkas TWK,
          TIU, dan TKP, 150 soal kuis per bab, satu paket tryout SKD lengkap 110 soal dengan timer
          100 menit, serta checklist dokumen administrasi untuk persiapan pendaftaran.
        </p>
        <p>
          Situs ini dibuat oleh{" "}
          <strong className="text-[#131316]">Candra Wali Sanjaya</strong>, fullstack web developer
          dari Bandung, sebagai proyek terbuka untuk membantu para pejuang CPNS 2026 — dan sebagai
          ajakan bagi developer lain untuk ikut berkontribusi. Kode sumbernya publik di GitHub dan
          siapa pun boleh mem-fork, memperbaiki, atau mengirim pull request.
        </p>
      </section>

      <h2 className="mt-10 text-2xl font-bold text-[#131316]">Dari mana materi dan soalnya?</h2>
      <section className="mt-4 space-y-4 text-base leading-relaxed text-neutral-600">
        <p>
          Semua materi dan soal di situs ini ditulis sendiri untuk keperluan latihan. Materi disusun
          dari referensi umum yang terbuka — Pancasila, UUD 1945, dan bahan belajar SKD yang beredar
          luas — lalu diringkas dengan bahasa yang mudah dipahami. Untuk pembahasan lewat video,
          halaman beranda merekomendasikan beberapa channel YouTube CPNS (Privat Al-Faiz, Sang Tutor,
          Viracun, Dhedi R. Ghazali, Fandi AP, dan Ping Lie); video tersebut milik channel
          masing-masing dan bukan bagian dari situs ini.
        </p>
        <p>
          <strong className="text-[#131316]">Penting:</strong> soal-soal di sini adalah soal
          latihan buatan, <strong className="text-[#131316]">bukan soal resmi BKN</strong>. Passing
          grade yang ditampilkan adalah acuan 2024 (TWK 65, TIU 80, TKP 166), bukan pengumuman
          final 2026. Jadwal, formasi, dan syarat resmi selalu mengikuti pengumuman di portal
          SSCASN dan instansi yang kamu lamar.
        </p>
      </section>

      <h2 className="mt-10 text-2xl font-bold text-[#131316]">Hubungi pengelola</h2>
      <section className="mt-4 space-y-4 text-base leading-relaxed text-neutral-600">
        <p>
          Menemukan soal yang keliru, materi yang kurang tepat, atau ingin mengusulkan fitur? Sampaikan
          lewat Issues di repositori GitHub:
        </p>
        <p>
          <a
            href="https://github.com/chndrwali/belajar-cpns"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-orange-600 underline"
          >
            github.com/chndrwali/belajar-cpns
          </a>
        </p>
        <p>
          <Link href="/" className="font-semibold text-orange-600 underline">
            ← Kembali ke beranda
          </Link>
        </p>
      </section>
    </div>
  );
}
