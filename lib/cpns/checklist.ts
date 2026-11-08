import type { ChecklistItem } from "./types";

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: "ktp", title: "KTP", detail: "Kartu Tanda Penduduk asli, masih berlaku, dan data sesuai dengan ijazah.", category: "Identitas" },
  { id: "kk", title: "Kartu Keluarga (KK)", detail: "Scan KK terbaru. Pastikan nama dan NIK sesuai dengan KTP.", category: "Identitas" },
  { id: "ijazah", title: "Ijazah", detail: "Ijazah asli sesuai kualifikasi pendidikan formasi yang dilamar.", category: "Pendidikan" },
  { id: "transkrip", title: "Transkrip Nilai", detail: "Transkrip resmi dari perguruan tinggi, lengkap dengan IPK.", category: "Pendidikan" },
  { id: "pasfoto", title: "Pas Foto Latar Merah", detail: "Foto terbaru, formal, latar belakang merah, sesuai ketentuan SSCASN.", category: "Foto & Dokumen" },
  { id: "swafoto", title: "Swafoto", detail: "Swafoto (selfie) terbaru dengan memegang KTP, sesuai ketentuan pendaftaran.", category: "Foto & Dokumen" },
  { id: "emeterai", title: "E-Meterai", detail: "Meterai elektronik untuk surat lamaran dan surat pernyataan.", category: "Foto & Dokumen" },
  { id: "surat-lamaran", title: "Surat Lamaran", detail: "Ditujukan ke instansi yang dilamar, sesuai format pengumuman instansi.", category: "Pernyataan" },
  { id: "surat-pernyataan", title: "Surat Pernyataan", detail: "Pernyataan tidak pernah dipidana, tidak pernah diberhentikan tidak hormat, dan bersedia ditempatkan di mana saja.", category: "Pernyataan" },
];
