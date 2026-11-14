import type { ChecklistItem } from "./types";

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: "ktp", title: "KTP", detail: "Kartu Tanda Penduduk asli, masih berlaku, dan data sesuai dengan ijazah.", category: "Identitas" },
  { id: "kk", title: "Kartu Keluarga (KK)", detail: "Scan KK terbaru. Pastikan nama dan NIK sesuai dengan KTP.", category: "Identitas" },
  { id: "ijazah", title: "Ijazah", detail: "Ijazah asli sesuai kualifikasi pendidikan formasi yang dilamar.", category: "Pendidikan" },
  { id: "transkrip", title: "Transkrip Nilai", detail: "Transkrip resmi dari perguruan tinggi, lengkap dengan IPK.", category: "Pendidikan" },
  { id: "akreditasi-kampus", title: "Akreditasi Kampus", detail: "Pastikan perguruan tinggi tempatmu lulus terakreditasi BAN-PT — cek statusnya di banpt.or.id dan simpan sertifikat atau tangkapan layarnya.", category: "Pendidikan" },
  { id: "akreditasi-prodi", title: "Akreditasi Prodi", detail: "Pastikan program studimu terakreditasi BAN-PT — beberapa formasi mensyaratkan minimal B. Cek di banpt.or.id dan simpan buktinya.", category: "Pendidikan" },
  { id: "pasfoto", title: "Pas Foto Latar Merah", detail: "Foto terbaru, formal, latar belakang merah, sesuai ketentuan SSCASN.", category: "Foto & Dokumen" },
  { id: "swafoto", title: "Swafoto", detail: "Swafoto (selfie) terbaru dengan memegang KTP, sesuai ketentuan pendaftaran.", category: "Foto & Dokumen" },
  { id: "emeterai", title: "E-Meterai", detail: "Meterai elektronik untuk surat lamaran dan surat pernyataan.", category: "Foto & Dokumen" },
  { id: "surat-lamaran", title: "Surat Lamaran", detail: "Ditujukan ke instansi yang dilamar, sesuai format pengumuman instansi.", category: "Pernyataan" },
  { id: "surat-pernyataan", title: "Surat Pernyataan", detail: "Pernyataan tidak pernah dipidana, tidak pernah diberhentikan tidak hormat, dan bersedia ditempatkan di mana saja.", category: "Pernyataan" },
  { id: "skck", title: "SKCK", detail: "Surat Keterangan Catatan Kepolisian dari Polres/Polsek sebagai bukti tidak pernah dipidana. Bawa KTP, KK, dan pas foto saat mengurus — bisa daftar online lewat layanan SKCK Polri.", category: "Pernyataan" },
];
