import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kebijakan Privasi — Belajar CPNS",
  description:
    "Kebijakan privasi Belajar CPNS: data apa yang dikumpulkan saat daftar dan belajar, bagaimana data disimpan, dan hak pengguna atas datanya.",
};

export default function PrivasiPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-xs font-semibold tracking-[0.2em] text-orange-600 uppercase">Kebijakan Privasi</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-[#131316]">Kebijakan Privasi</h1>
      <p className="mt-3 text-sm text-neutral-400">Terakhir diperbarui: 13 November 2026.</p>

      <section className="mt-8 space-y-4 text-base leading-relaxed text-neutral-600">
        <p>
          Belajar CPNS adalah layanan belajar gratis. Kamu bisa memakai hampir semua fitur — membaca
          materi, mengerjakan kuis, dan mengikuti tryout — tanpa membuat akun. Kebijakan ini menjelaskan
          data apa yang kami kumpulkan ketika kamu memilih untuk membuat akun.
        </p>
      </section>

      <h2 className="mt-10 text-2xl font-bold text-[#131316]">Data yang kami kumpulkan</h2>
      <section className="mt-4 space-y-4 text-base leading-relaxed text-neutral-600">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-[#131316]">Saat mendaftar:</strong> nama, alamat email, dan kata
            sandi. Kata sandi tidak disimpan dalam bentuk yang bisa dibaca — hanya hash-nya, melalui
            layanan autentikasi Better Auth.
          </li>
          <li>
            <strong className="text-[#131316]">Saat belajar dengan akun:</strong> progres belajar —
            materi yang ditandai selesai, skor terbaik kuis, riwayat tryout, dan checklist
            administrasi. Data ini tersimpan di akunmu agar bisa dibuka dari perangkat mana pun.
          </li>
          <li>
            <strong className="text-[#131316]">Tanpa akun:</strong> kami tidak mencatat progresmu.
            Yang kamu kerjakan sebagai tamu hanya tersimpan sementara di perangkatmu selama tryout
            berjalan, lalu terhapus otomatis saat tryout selesai.
          </li>
        </ul>
      </section>

      <h2 className="mt-10 text-2xl font-bold text-[#131316]">Penyimpanan dan keamanan</h2>
      <section className="mt-4 space-y-4 text-base leading-relaxed text-neutral-600">
        <p>
          Data akun disimpan di database Postgres (Neon) dan hanya dipakai untuk menjalankan layanan
          ini. Akses ke data dibatasi oleh autentikasi dan prosedur tRPC yang mengharuskan login.
          Permintaan ke layanan dibatasi (rate limit) untuk mencegah penyalahgunaan seperti
          brute-force login dan spam.
        </p>
        <p>
          Login memakai cookie sesi. Situs ini tidak menampilkan iklan dan tidak memakai pelacak
          pihak ketiga untuk tujuan periklanan.
        </p>
      </section>

      <h2 className="mt-10 text-2xl font-bold text-[#131316]">Berbagi data</h2>
      <section className="mt-4 space-y-4 text-base leading-relaxed text-neutral-600">
        <p>
          Kami <strong className="text-[#131316]">tidak menjual, menyewakan, atau membagikan</strong>{" "}
          data pribadimu ke pihak ketiga untuk keperluan pemasaran. Data hanya dibagikan jika diwajibkan
          oleh hukum yang berlaku.
        </p>
      </section>

      <h2 className="mt-10 text-2xl font-bold text-[#131316]">Hakmu atas datamu</h2>
      <section className="mt-4 space-y-4 text-base leading-relaxed text-neutral-600">
        <p>
          Kamu berhak meminta salinan atau penghapusan data akunmu. Sejujurnya: saat ini belum ada
          tombol hapus akun mandiri di dalam aplikasi. Untuk meminta penghapusan akun dan seluruh
          datanya, buat Issue di repositori GitHub{" "}
          <a
            href="https://github.com/chndrwali/belajar-cpns"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-orange-600 underline"
          >
            chndrwali/belajar-cpns
          </a>{" "}
          dengan subjek &quot;Hapus akun&quot; dan sertakan alamat email akunmu — permintaan akan
          diproses secara manual oleh pengelola.
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
