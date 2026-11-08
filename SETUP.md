# Setup Database & Login — Belajar CPNS

Login di app ini pakai Better Auth + Prisma + Postgres (Neon).
Fitur belajar (materi, kuis, tryout, checklist) tetap jalan tanpa login,
tapi **register/login dan `/admin` butuh database**.

PENTING: Neon dipakai MURNI sebagai Postgres. Toggle **Neon Auth JANGAN
diaktifkan** — itu layanan auth managed Neon yang bikin skema sendiri dan
bakal bentrok dengan Better Auth.

## Langkah manual Candra (satu per satu)

### 1. Buat database Neon BARU
- Buka https://console.neon.tech → New Project.
- Nama project: `belajar-cpns` (database default `neondb` boleh dipakai, atau buat database `belajar-cpns`).
- Region: pilih yang paling dekat (mis. Singapore / ap-southeast-1).
- **Jangan pakai database TemuUndang atau portfolio-v3** — tabel `user` /
  `account` / `session` sama namanya, user kedua app bakal kecampur.

### 2. Salin DATABASE_URL
- Di dashboard Neon project baru → Connection Details → salin connection string.
- Formatnya: `postgresql://user:password@ep-xxx.ap-southeast-1.aws.neon.tech/neondb?sslmode=require`
- Simpan di `.env.local` (lokal) dan nanti di Vercel → Settings → Environment Variables.

### 3. Isi .env.local
Salin `.env.example` jadi `.env.local`, lalu isi:
```bash
NEXT_PUBLIC_URL=http://localhost:3000
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=<acak baru, minimal 32 karakter — buat dengan: openssl rand -base64 32>
DATABASE_URL=<connection string Neon dari langkah 2>
```
`BETTER_AUTH_SECRET` harus baru — jangan pakai ulang dari TemuUndang,
habit-tracking, atau portfolio-v3.

### 4. Jalankan migrasi (membuat tabel)
```bash
npx prisma migrate deploy
```
Ini membuat tabel `user`, `account`, `credential`, `session`, `verification`
di database Neon baru. Kalau gagal karena `DATABASE_URL` kosong, cek lagi
langkah 2–3.

## Progres belajar tersimpan di database

Semua progres belajar — bukan lagi localStorage — tersimpan di database
per akun, lewat tRPC `progress` (semua endpoint wajib login):

| Tabel | Isi |
|---|---|
| `material_progress` | Materi yang ditandai sudah dibaca (satu baris per user + materi) |
| `quiz_best` | Skor terbaik kuis per bab (satu baris per user + materi) |
| `tryout_attempt` | Riwayat tryout SKD lengkap: skor TWK/TIU/TKP, total, lolos/tidak, durasi, dan jawaban per soal (JSONB) |
| `checklist_progress` | Centangan checklist administrasi (satu baris per user + item) |

Migrasi tabel-tabel ini ikut dalam perintah yang sama (`npx prisma migrate deploy`,
migrasi `add_learning_progress`). Tamu (belum login) tetap bisa belajar, kuis,
dan tryout — tapi hasilnya tidak tercatat; saat selesai mereka diminta login.

**Progres lama di localStorage:** kalau sebelumnya sudah belajar sebelum
perubahan ini, progres lama (key `belajar-cpns:*`) dipindahkan otomatis saat
login pertama — endpoint `progress.importLegacy` melakukan upsert (tryout
tidak diduplikat, dicocokkan tanggal + skor), lalu keempat key localStorage
dihapus. Tidak perlu tindakan manual.

## Rate limit (web publik, anti brute-force & spam)

Situs ini dibagikan di sosmed, jadi ada 3 lapis perlindungan — tanpa
service eksternal baru dan tanpa env wajib baru:

| Lapisan | Aturan | Tujuan |
|---|---|---|
| **1. Better Auth** (sudah ada di `lib/auth.ts`) | Global 100/menit; `/login/*` 5/menit; `/register/*` 3/menit; `/forgot-password` & `/reset-password` 3/menit | Anti brute-force login & spam akun |
| **2. Proxy** (`proxy.ts`, `/api/trpc/*` saja) | 100 req/menit per IP → 429 + header `Retry-After` | Pembatas kasar per IP. Halaman GET publik (`/`, `/materi`, `/kuis`, `/tryout`, `/checklist`) TIDAK dibatasi; `/api/auth/*` juga tidak dobel-dibatasi di sini |
| **3. tRPC progress** (`trpc/init.ts` → router `progress`) | `getDashboard`/`getChecklist` 60/menit; `toggleMaterial`/`setChecklist` 30/menit; `saveQuizBest` 20/menit; `saveTryoutAttempt` 5/menit; `importLegacy` 3/menit (per user yang login) → error `TOO_MANY_REQUESTS`, pesan Bahasa Indonesia | Mencegah spam simpan progres; UI menampilkan pesan 429 dengan baik, bukan crash |

Semua angka hidup di **satu tempat**: `RATE_LIMITS` di `lib/rate-limit.ts` —
ubah angkanya di sana untuk melonggarkan/mengetatkan, tidak perlu ubah
tiap endpoint. Semua limit di atas longgar untuk pemakaian wajar (satu
orang mengerjakan tryout, centang checklist, simpan skor).

**Catatan in-memory vs Upstash:** limit ini in-memory per instance server
— di Vercel serverless tiap instance punya hitungannya sendiri, jadi ini
perlindungan praktis, bukan pembatas distribusi yang sempurna. Kalau nanti
mau yang ketat lintas instance, jalurnya Upstash Redis (opsional, belum
dipasang).

### 5. Daftar & login
```bash
npm run dev   # http://localhost:3000
```
- Buka `/register` → daftar akun pertama (password minimal 8 karakter).
- Buka `/login` → masuk. Setelah login, fitur belajar tetap terbuka untuk
  semua orang; login hanya jadi syarat masuk `/admin`.

### 6. Jadikan akun pertama admin (wajib untuk /admin)
Register TIDAK otomatis jadi admin — `role` awalnya kosong dan
`/admin` hanya boleh dibuka kalau `role = 'admin'`. Jalankan di
**Neon → SQL Editor** (project belajar-cpns):
```sql
UPDATE "user" SET role = 'admin' WHERE email = 'email-kamu@contoh.com';
```
Ganti emailnya dengan email akun yang tadi didaftarkan. Setelah itu
logout → login lagi → buka `/admin`.

## Deploy Vercel (nanti, langkah manual Candra)
- Import repo `chndrwali/belajar-cpns` ke Vercel.
- Isi env yang sama di Vercel, tapi `NEXT_PUBLIC_URL` dan
  `BETTER_AUTH_URL` diganti URL Vercel (mis. `https://belajar-cpns.vercel.app`).
- Kalau build Vercel gagal di font, set `NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1`.
