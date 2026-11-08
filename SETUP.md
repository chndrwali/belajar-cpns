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
