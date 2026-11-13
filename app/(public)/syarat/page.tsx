import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Syarat Layanan — Belajar CPNS",
  description:
    "Syarat layanan Belajar CPNS: layanan belajar gratis, soal latihan bukan soal resmi BKN, dan aturan penggunaan yang wajar.",
};

export default function SyaratPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-semibold tracking-[0.2em] text-orange-600 uppercase">Syarat Layanan</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-[#131316]">Syarat Layanan</h1>
      <p className="mt-3 text-sm text-neutral-400">Terakhir diperbarui: 13 November 2026.</p>

      <h2 className="mt-10 text-2xl font-bold text-[#131316]">Layanan gratis untuk belajar</h2>
      <section className="mt-4 space-y-4 text-base leading-relaxed text-neutral-600">
        <p>
          Belajar CPNS adalah layanan gratis untuk belajar Seleksi Kompetensi Dasar (SKD) CPNS:
          materi TWK, TIU, dan TKP, kuis per bab, tryout, dan checklist administrasi. Tidak ada biaya
          apa pun untuk memakai fitur-fitur ini.
        </p>
      </section>

      <h2 className="mt-10 text-2xl font-bold text-[#131316]">Soal latihan, bukan soal resmi</h2>
      <section className="mt-4 space-y-4 text-base leading-relaxed text-neutral-600">
        <p>
          Semua soal di situs ini adalah soal latihan yang ditulis sendiri dan{" "}
          <strong className="text-[#131316]">bukan soal resmi BKN</strong>. Passing grade yang
          ditampilkan adalah acuan 2024 (TWK 65, TIU 80, TKP 166), bukan pengumuman final 2026.
          Kami <strong className="text-[#131316]">tidak menjamin</strong> kamu akan lulus seleksi
          dengan memakai situs ini. Hasil tryout adalah gambaran latihan, bukan prediksi hasil ujian
          sesungguhnya. Jadwal, formasi, dan syarat resmi mengikuti pengumuman di portal SSCASN
          (sscasn.bkn.go.id) dan instansi yang kamu lamar.
        </p>
      </section>

      <h2 className="mt-10 text-2xl font-bold text-[#131316]">Penggunaan yang wajar</h2>
      <section className="mt-4 space-y-4 text-base leading-relaxed text-neutral-600">
        <p>
          Dengan memakai layanan ini, kamu setuju untuk tidak menyalahgunakannya, antara lain:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Berusaha masuk ke akun orang lain atau membobol sistem (brute force, scraping agresif).</li>
          <li>Mengirim permintaan berulang secara otomatis untuk membebani server (spam).</li>
          <li>Meniru situs ini untuk menipu orang lain atau memungut bayaran atas nama Belajar CPNS.</li>
        </ul>
        <p>
          Untuk menjaga layanan tetap tersedia bagi semua orang, permintaan ke layanan dibatasi
          (rate limit). Akun yang terbukti menyalahgunakan layanan dapat dibatasi atau dihapus.
        </p>
      </section>

      <h2 className="mt-10 text-2xl font-bold text-[#131316]">Konten dan atribusi</h2>
      <section className="mt-4 space-y-4 text-base leading-relaxed text-neutral-600">
        <p>
          Materi dan soal latihan di situs ini boleh dipakai untuk belajar pribadi. Kalau kamu
          mengutip atau memakai ulang sebagian konten untuk publikasi, mohon cantumkan atribusi ke
          repositori{" "}
          <a
            href="https://github.com/chndrwali/belajar-cpns"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-orange-600 underline"
          >
            github.com/chndrwali/belajar-cpns
          </a>
          . Video YouTube yang direkomendasikan adalah milik channel masing-masing dan tunduk pada
          ketentuan channel tersebut. Ebook yang dirujuk lewat Google Drive adalah milik
          penerbit/penulisnya — periksa hak ciptanya sebelum menyebarluaskan.
        </p>
      </section>

      <h2 className="mt-10 text-2xl font-bold text-[#131316]">Perubahan layanan</h2>
      <section className="mt-4 space-y-4 text-base leading-relaxed text-neutral-600">
        <p>
          Layanan ini dikembangkan secara terbuka dan dapat berubah sewaktu-waktu — penambahan materi,
          perbaikan soal, atau perubahan fitur. Syarat layanan ini juga dapat diperbarui; tanggal
          pembaruan terakhir tercantum di atas.
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
