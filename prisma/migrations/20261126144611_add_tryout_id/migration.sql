-- Tambah kolom tryoutId ke tryout_attempt supaya riwayat bisa dibedakan
-- Tryout 1 (Dasar) dan Tryout 2 (HOTS). Default "1" untuk riwayat lama
-- dari era sebelum Tryout 2 ada.
ALTER TABLE "tryout_attempt" ADD COLUMN "tryoutId" TEXT NOT NULL DEFAULT '1';
