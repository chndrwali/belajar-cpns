# Belajar CPNS

Sistem belajar mandiri untuk Seleksi Kompetensi Dasar (SKD) CPNS: materi TWK/TIU/TKP, kuis per bab, tryout SKD lengkap, dan checklist administrasi. Gratis, open source, dan bisa dipakai tanpa login.

🌐 **Live:** https://belajar-cpns-eta.vercel.app
💻 **Repo:** https://github.com/chndrwali/belajar-cpns

Dibangun dari [Next.js starter kit](https://github.com/chndrwali/nextjs-starter-kit) (Next.js 16 + React 19 + Better Auth + tRPC v11 + Prisma 7 + shadcn/ui + Tailwind v4).

Desain: keseluruhan aplikasi ala **Modulify** (putih bersih, tinta `#131316`, headline besar, aksen gradient hangat oranye–pink), halaman kuis/tryout ala **Dicoding** (header navy `#2D3E50`, kartu soal, opsi A–E, grid nomor soal).

## Fitur

- **Landing/dashboard** `/` — hero, progres belajar, 3 kartu SKD, contoh hasil tryout, checklist, referensi YouTube, FAQ, dan kumpulan ebook CPNS (tautan Google Drive).
- **Materi** `/materi`, `/materi/[slug]` — 15 materi ringkas: TWK (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika, Sejarah, Bahasa Indonesia), TIU (Verbal, Numerik, Figural), TKP (Pelayanan Publik, Jejaring Kerja, Sosial Budaya, Teknologi Informasi, Profesionalisme, Anti-Radikalisme). Tiap materi menampilkan **video pembahasan YouTube yang bisa diputar langsung di halaman** (embed, lazy-load) dan kartu referensi channel.
- **Referensi YouTube** — 6 channel dengan link langsung: Privat Al-Faiz (`@PrivatAlFaiz`), Sang Tutor (`@sangtutor`), Dhedi R. Ghazali (`@TanyaCPNS`), Fandi AP (`@bimbelcpns`), Viracun (`@VIRACUN`), Ping Lie (`@pinglie`).
- **Kuis per bab** `/kuis`, `/kuis/[id]` — 10 soal original per bab (total 150), jawaban langsung terlihat benar/salah beserta pembahasan, skor terbaik tersimpan, progress bar per halaman.
- **Tryout SKD** `/tryout` — 110 soal persis format SKD (30 TWK + 35 TIU + 45 TKP), timer 100 menit, auto-submit saat habis, navigasi nomor soal, tandai ragu-ragu, skor per bagian vs passing grade acuan 2024 (TWK 65, TIU 80, TKP 166), pembahasan semua soal, riwayat tersimpan. **Draf tryout tahan refresh**: jawaban dan sisa waktu tersimpan sementara di perangkat, bisa dilanjutkan kalau tab tertutup.
- **Checklist administrasi** `/checklist` — 9 dokumen (KTP, KK, ijazah, transkrip, pas foto, swafoto, e-meterai, surat lamaran, surat pernyataan).
- **Progres tersimpan di database** — setelah login, progres materi, skor kuis, riwayat tryout, dan checklist tersimpan di akun dan bisa dibuka dari perangkat mana pun. Tamu tetap bisa belajar tanpa login, tapi progresnya tidak tercatat.
- **Profil** — avatar (inisial) di header membuka dropdown berisi progres belajar, riwayat kuis dan tryout, dan tombol keluar. Materi/bab yang sudah selesai tampil hijau dengan badge "Selesai".
- **Halaman legal & SEO** — `/tentang`, `/privasi`, `/syarat` (tautan di footer), FAQ dengan JSON-LD `FAQPage`, Open Graph/Twitter card, sitemap, dan robots.

Soal latihan dibuat sendiri untuk belajar — **bukan soal resmi BKN**. Passing grade yang dipakai adalah acuan 2024, bukan pengumuman final 2026.

## Akun & keamanan

- Login/register lewat Better Auth (email + kata sandi). Rate limit aktif: login 5x/menit, register 3x/menit, API tRPC 100 req/menit per IP, simpan tryout 5x/menit. Halaman publik tidak dibatasi.
- Kartu kredensial demo dari starter kit sudah dihapus. Akun admin dibuat manual via SQL, lihat `SETUP.md`.

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build
```

### Environment

Salin `.env.example` menjadi `.env.local` dan isi (lihat `SETUP.md` untuk langkah lengkap):

```bash
NEXT_PUBLIC_URL=http://localhost:3000
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=   # baru, min 32 karakter acak (openssl rand -base64 32)
DATABASE_URL=         # connection string Postgres dari Neon, project/database BARU khusus belajar-cpns
```

Jangan pakai database proyek lain — tabel `user`/`account`/`session` akan tercampur. Jangan kirim connection string lewat chat.

Catatan: `npm install` menjalankan `prisma generate` (postinstall) yang mengunduh schema-engine Prisma. Jika unduhan gagal karena jaringan, salin binary `schema-engine-*` dari proyek starter kit lain yang memakai Prisma 7 ke `node_modules/@prisma/engines/`, lalu jalankan `DATABASE_URL="postgresql://user:pass@localhost:5432/db" npx prisma generate`. Untuk build di Vercel, set `NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1` jika build gagal mengambil Google Fonts.

Setelah `.env.local` terisi:

```bash
npx prisma migrate deploy   # menerapkan migrasi auth + progres belajar
npm run dev
```

## Struktur

Konten belajar ada di `lib/cpns/` sebagai TypeScript bertipe:

- `types.ts` — tipe `Material`, `Question`, `ChecklistItem`, passing grade, fungsi skor.
- `materials.ts` — 15 materi.
- `quiz-questions.ts` — 150 soal kuis (10 per materi).
- `tryout-questions.ts` — 110 soal tryout (30 TWK / 35 TIU / 45 TKP).
- `material-videos.ts` — 1 video pembahasan YouTube terverifikasi per materi.
- `youtube.ts` — 6 channel referensi (link langsung).
- `checklist.ts` — 9 item checklist.
- `faq.ts` — 7 pertanyaan FAQ (dipakai tampilan + JSON-LD).
- `ebooks.ts` — referensi kumpulan ebook CPNS (tautan Google Drive, bukan file di repo).

Progres belajar (database):

- `prisma/schema.prisma` — model `MaterialProgress`, `QuizBest`, `TryoutAttempt`, `ChecklistProgress` (relasi ke `User`, `onDelete: Cascade`).
- `trpc/routers/progress.ts` — router `progress` (wajib login): `getDashboard`, `getChecklist`, `toggleMaterial`, `saveQuizBest`, `saveTryoutAttempt`, `setChecklist`, `importLegacy` (migrasi satu kali dari localStorage lama).
- `lib/rate-limit.ts` — sliding-window rate limit in-memory (per instance server; untuk pembatas distribusi yang ketat, jalurnya Upstash Redis — belum dipasang).

Soal kuis/tryout di-generate dari skrip `/tmp/gen_cpns.py` (bukan bagian repo).

## Kontribusi

Repo ini terbuka untuk fork dan pull request. Yang paling dibutuhkan: tambah soal latihan, review materi, dan fitur baru. Baca `SETUP.md` untuk panduan database dan deploy.
