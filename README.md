# Belajar CPNS

Sistem belajar CPNS: materi SKD TWK/TIU/TKP, kuis per bab, tryout SKD lengkap, dan checklist administrasi. Dibangun dari [Next.js starter kit](https://github.com/chndrwali/nextjs-starter-kit) (Next.js 16 + React 19 + Better Auth + tRPC + Prisma + shadcn/ui + Tailwind v4).

Desain: keseluruhan aplikasi ala **Modulify** (putih bersih, tinta `#131316`, headline besar, aksen gradient hangat oranye–pink), halaman kuis/tryout ala **Dicoding** (header navy `#2D3E50`, kartu soal, opsi A–E, grid nomor soal).

## Fitur

- **Landing/dashboard** `/` — hero, progres belajar (localStorage), 3 kartu SKD, tryout, checklist, referensi YouTube.
- **Materi** `/materi`, `/materi/[slug]` — 15 materi ringkas: TWK (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika, Sejarah, Bahasa Indonesia), TIU (Verbal, Numerik, Figural), TKP (Pelayanan Publik, Jejaring Kerja, Sosial Budaya, Teknologi Informasi, Profesionalisme, Anti-Radikalisme). Tiap materi menampilkan kartu referensi YouTube yang relevan.
- **Referensi YouTube** — 6 channel: Privat Al-Faiz, Sang Tutor, Dhedi R. Ghazali (TanyaCPNS), Fandi AP, Viracun, Ping Lie. Link memakai pencarian YouTube, kecuali `@PrivatAlFaiz` yang terkonfirmasi.
- **Kuis per bab** `/kuis`, `/kuis/[id]` — 10 soal original per bab (total 150), jawaban langsung terlihat benar/salah beserta pembahasan, skor terbaik tersimpan.
- **Tryout SKD** `/tryout` — 110 soal persis format SKD (30 TWK + 35 TIU + 45 TKP), timer 100 menit, auto-submit saat habis, navigasi nomor soal, tandai ragu-ragu, skor per bagian vs passing grade acuan 2024 (TWK 65, TIU 80, TKP 166), pembahasan semua soal, riwayat tersimpan.
- **Checklist administrasi** `/checklist` — 9 dokumen (KTP, KK, ijazah, transkrip, pas foto, swafoto, e-meterai, surat lamaran, surat pernyataan), progres tersimpan di localStorage.

Semua fitur belajar bisa dipakai **tanpa login dan tanpa database**. Soal latihan dibuat sendiri untuk belajar — bukan soal resmi BKN.

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build
```

Catatan: `npm install` menjalankan `prisma generate` (postinstall) yang mengunduh schema-engine Prisma. Jika unduhan gagal karena jaringan, salin binary `schema-engine-*` dari proyek starter kit lain yang memakai Prisma 7.10.1 ke `node_modules/@prisma/engines/`, lalu jalankan `DATABASE_URL="postgresql://user:pass@localhost:5432/db" npx prisma generate`.

## Struktur data soal & materi

Semua konten ada di `lib/cpns/` sebagai TypeScript bertipe:

- `types.ts` — tipe `Material`, `Question`, `ChecklistItem`, passing grade, fungsi skor.
- `materials.ts` — 15 materi.
- `quiz-questions.ts` — 150 soal kuis (10 per materi).
- `tryout-questions.ts` — 110 soal tryout (30 TWK / 35 TIU / 45 TKP).
- `youtube.ts` — 6 channel referensi.
- `checklist.ts` — 9 item checklist.
- `progress.ts` — helper localStorage.

Soal kuis/tryout di-generate dari skrip `/tmp/gen_cpns.py` (bukan bagian repo).
