/**
 * Video pembahasan YouTube per materi — SATU video per materi.
 *
 * Kurasi 13 Nov 2026: tiap video dicari lewat YouTube dan diverifikasi
 * lewat oEmbed (HTTP 200 + judul + nama channel cocok dengan topik materi).
 * Jangan tambah videoId tanpa verifikasi oEmbed dulu — videoId yang tidak
 * terverifikasi tidak boleh dipakai (iframe akan menampilkan error YouTube).
 *
 * Prioritas channel: 6 channel yang direkomendasikan di app ini
 * (Privat Al-Faiz, Sang Tutor, Viracun, Dhedi R. Ghazali, Fandi AP,
 * Ping Lie). Channel lain dipakai hanya kalau keenam channel tidak punya
 * video yang cocok untuk topik itu — sejauh ini: BetaNers (sosial budaya)
 * dan CERIA BIMBEL ASN (Bhinneka, TIK, profesionalisme).
 */
export interface MaterialVideo {
  /** Slug materi, sama dengan `Material.slug` di materials.ts. */
  slug: string;
  /** ID video YouTube (11 karakter, tanpa URL). */
  videoId: string;
  /** Judul video persis seperti di YouTube (dicek via oEmbed). */
  title: string;
  /** Nama channel persis seperti di YouTube (dicek via oEmbed). */
  channel: string;
  /** Handle channel bila diketahui dan terverifikasi (tanpa @). */
  channelHandle?: string;
}

export const MATERIAL_VIDEOS: MaterialVideo[] = [
  {
    slug: "twk-pancasila",
    videoId: "Bs9d-46urGQ",
    title: "FOKUS TWK #20 - CARA MUDAH MENJAWAB IMPLEMENTASI PANCASILA",
    channel: "Dhedi R Ghazali",
    channelHandle: "TanyaCPNS",
  },
  {
    slug: "twk-uud-1945",
    videoId: "ndXthYWMcd0",
    title: "FOKUS TWK #7 - TWK IMPLEMENTASI UUD 1945 FULL PEMBAHASAN MODEL TERBARU",
    channel: "Dhedi R Ghazali",
    channelHandle: "TanyaCPNS",
  },
  {
    slug: "twk-nkri",
    videoId: "1MqHM7YcjJE",
    title: "TWK CPNS DAN KEDINASAN 2026 PILAR NKRI",
    channel: "Privat Al Faiz",
    channelHandle: "PrivatAlFaiz",
  },
  {
    slug: "twk-bhinneka",
    videoId: "Vi0PRmd23FY",
    title:
      "TWK MASTERCLASS #7 | Bhinneka Tunggal Ika Wajib Kuasai! Soal HOTS CPNS 2026 & Sekolah Kedinasan",
    channel: "CERIA BIMBEL ASN",
  },
  {
    slug: "twk-sejarah",
    videoId: "hiC9cLxevTg",
    title: "FOKUS TWK #23 - MATERI + SOAL TWK NASIONALISME",
    channel: "Dhedi R Ghazali",
    channelHandle: "TanyaCPNS",
  },
  {
    slug: "twk-bahasa-indonesia",
    videoId: "2OjBaSTF4X0",
    title: "FOKUS TWK #24 - MATERI + SOAL TWK KALIMAT EFEKTIF",
    channel: "Dhedi R Ghazali",
    channelHandle: "TanyaCPNS",
  },
  {
    slug: "tiu-verbal",
    videoId: "EDW951L6YmY",
    title:
      "BAHAS TUNTAS ANALOGI (HUBUNGAN KATA) | KEMAMPUAN VERBAL | TIU CPNS 2021 | TPDA PLTI",
    channel: "Sang Tutor",
    channelHandle: "sangtutor",
  },
  {
    slug: "tiu-numerik",
    videoId: "AAWBTaIKJCY",
    title: "[PART 8] WAJIB TAHU POLA DERET ANGKA !! TIU CPNS & KEDINASAN 2024",
    channel: "Sang Tutor",
    channelHandle: "sangtutor",
  },
  {
    slug: "tiu-figural",
    videoId: "NowDnswfRvk",
    title: "SOAL TIU CPNS 2024 FIGURAL",
    channel: "Privat Al Faiz",
    channelHandle: "PrivatAlFaiz",
  },
  {
    slug: "tkp-pelayanan-publik",
    videoId: "-bsj_uJBNgU",
    title: "Serial TKP CPNS - Pelayanan Publik",
    channel: "Fandi AP",
    channelHandle: "bimbelcpns",
  },
  {
    slug: "tkp-jejaring-kerja",
    videoId: "CQUbIQ3Z5Lo",
    title: "Serial TKP CPNS - Jejaring Kerja",
    channel: "Fandi AP",
    channelHandle: "bimbelcpns",
  },
  {
    slug: "tkp-sosial-budaya",
    videoId: "OXcT0P1fAdU",
    title:
      "TES KARAKTERISTIK PRIBADI‼️ - 🚨 Sosial Budaya 🚨  - BetaNers - CPNS/PPPK2021 - TKP Part 3",
    channel: "Betaners",
  },
  {
    slug: "tkp-teknologi-informasi",
    videoId: "l8b3goJRPbI",
    title:
      "6 SOAL TKP TIK 2026 FULL PENALARAN! AI, Hoaks, Phishing & Keamanan Data | CPNS & Kedinasan",
    channel: "CERIA BIMBEL ASN",
  },
  {
    slug: "tkp-profesionalisme",
    videoId: "-tDSnr9wb6k",
    title:
      "PART 6. TKP PROFESIONALISME SKD CPNS 2026 | Materi Wajib, Rumus Skor 5, dan Jebakan Jawaban!",
    channel: "CERIA BIMBEL ASN",
  },
  {
    slug: "tkp-anti-radikalisme",
    videoId: "KB5C68qLDSw",
    title: "TKP CPNS ANTI RADIKALISME SESUAI KISI-KISI RESMI 2021",
    channel: "Fandi AP",
    channelHandle: "bimbelcpns",
  },
];

export function getMaterialVideo(slug: string): MaterialVideo | undefined {
  return MATERIAL_VIDEOS.find((v) => v.slug === slug);
}
