/**
 * Video YouTube per materi — DUA video per materi:
 * - kind "materi": mengajarkan konsep dari nol (tonton dulu).
 * - kind "pembahasan": pembahasan soal (tonton setelah paham konsep).
 *
 * Kurasi 13 Nov 2026: 15 video pembahasan, tiap video dicari lewat YouTube
 * dan diverifikasi lewat oEmbed (HTTP 200 + judul + nama channel cocok
 * dengan topik materi). 15 Nov 2026: ditambah 14 video materi (TIU Verbal
 * belum ada — tidak ada video konsep analogi dari channel yang diizinkan).
 * Jangan tambah videoId tanpa verifikasi oEmbed dulu — videoId yang tidak
 * terverifikasi tidak boleh dipakai (iframe akan menampilkan error YouTube).
 *
 * Prioritas channel: 6 channel yang direkomendasikan di app ini
 * (Privat Al-Faiz, Sang Tutor, Viracun, Dhedi R. Ghazali, Fandi AP,
 * Ping Lie). Channel lain dipakai hanya kalau keenam channel tidak punya
 * video yang cocok untuk topik itu — sejauh ini: BetaNers (sosial budaya)
 * dan CERIA BIMBEL ASN (Bhinneka, TIK, profesionalisme).
 */
export type MaterialVideoKind = "materi" | "pembahasan";

export interface MaterialVideo {
  /** Slug materi, sama dengan `Material.slug` di materials.ts. */
  slug: string;
  /** "materi" = mengajarkan konsep dari nol; "pembahasan" = pembahasan soal. */
  kind: MaterialVideoKind;
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
    kind: "materi",
    videoId: "n4WhZnP4mWA",
    title: "TWK MASTERCLASS #4 | PANCASILA. Wajib Kuasai untuk Lolos CPNS & Kedinasan",
    channel: "CERIA BIMBEL ASN",
    channelHandle: "CERIABIMBELASN",
  },
  {
    slug: "twk-pancasila",
    kind: "pembahasan",
    videoId: "Bs9d-46urGQ",
    title: "FOKUS TWK #20 - CARA MUDAH MENJAWAB IMPLEMENTASI PANCASILA",
    channel: "Dhedi R Ghazali",
    channelHandle: "TanyaCPNS",
  },
  {
    slug: "twk-uud-1945",
    kind: "materi",
    videoId: "nVJ2FHBLRIk",
    title: "Hari ke 2 & 3 SKD - Mudah Hafal UUD 1945 🚨 Dari Pengalaman Admin test CPNS 2019/2020",
    channel: "Betaners",
    channelHandle: "betaners",
  },
  {
    slug: "twk-uud-1945",
    kind: "pembahasan",
    videoId: "ndXthYWMcd0",
    title: "FOKUS TWK #7 - TWK IMPLEMENTASI UUD 1945 FULL PEMBAHASAN MODEL TERBARU",
    channel: "Dhedi R Ghazali",
    channelHandle: "TanyaCPNS",
  },
  {
    slug: "twk-nkri",
    kind: "materi",
    videoId: "G-WOdqb5OXM",
    title: "Pilar-Pilar Negara: Materi Wajib TWK CPNS 2026.",
    channel: "CERIA BIMBEL ASN",
    channelHandle: "CERIABIMBELASN",
  },
  {
    slug: "twk-nkri",
    kind: "pembahasan",
    videoId: "1MqHM7YcjJE",
    title: "TWK CPNS DAN KEDINASAN 2026 PILAR NKRI",
    channel: "Privat Al Faiz",
    channelHandle: "PrivatAlFaiz",
  },
  {
    slug: "twk-bhinneka",
    kind: "materi",
    videoId: "3nzJ3JOEMmk",
    title: "Hari ke 6 SKD - TWK : Bhinneka Tunggal Ika 🚨 catatan Admin BETANERS - Pengalaman test CPNS 2019/2020",
    channel: "Betaners",
    channelHandle: "betaners",
  },
  {
    slug: "twk-bhinneka",
    kind: "pembahasan",
    videoId: "Vi0PRmd23FY",
    title:
      "TWK MASTERCLASS #7 | Bhinneka Tunggal Ika Wajib Kuasai! Soal HOTS CPNS 2026 & Sekolah Kedinasan",
    channel: "CERIA BIMBEL ASN",
  },
  {
    slug: "twk-sejarah",
    kind: "materi",
    videoId: "ETxfQgSIAOE",
    title: "Mengenal Nasionalisme, Patriotisme, Cinta Tanah Air dan Bela Negara",
    channel: "Fandi AP",
    channelHandle: "bimbelcpns",
  },
  {
    slug: "twk-sejarah",
    kind: "pembahasan",
    videoId: "hiC9cLxevTg",
    title: "FOKUS TWK #23 - MATERI + SOAL TWK NASIONALISME",
    channel: "Dhedi R Ghazali",
    channelHandle: "TanyaCPNS",
  },
  {
    slug: "twk-bahasa-indonesia",
    kind: "materi",
    videoId: "mrtMR0bXcg8",
    title: "FR TWK 11 September 2021 | BAHASA INDONESIA | Konsep Kalimat Efektif & Tidak Efektif | SKD CPNS 2021",
    channel: "Sang Tutor",
    channelHandle: "sangtutor",
  },
  {
    slug: "twk-bahasa-indonesia",
    kind: "pembahasan",
    videoId: "2OjBaSTF4X0",
    title: "FOKUS TWK #24 - MATERI + SOAL TWK KALIMAT EFEKTIF",
    channel: "Dhedi R Ghazali",
    channelHandle: "TanyaCPNS",
  },
  {
    slug: "tiu-verbal",
    kind: "pembahasan",
    videoId: "EDW951L6YmY",
    title:
      "BAHAS TUNTAS ANALOGI (HUBUNGAN KATA) | KEMAMPUAN VERBAL | TIU CPNS 2021 | TPDA PLTI",
    channel: "Sang Tutor",
    channelHandle: "sangtutor",
  },
  {
    slug: "tiu-numerik",
    kind: "materi",
    videoId: "hxi69v9xASk",
    title: "[LANGSUNG BISA] BARISAN dan DERET ANGKA Berbagai Bentuk - Tes TIU - Tes CPNS",
    channel: "PING LIE",
    channelHandle: "pinglie",
  },
  {
    slug: "tiu-numerik",
    kind: "pembahasan",
    videoId: "AAWBTaIKJCY",
    title: "[PART 8] WAJIB TAHU POLA DERET ANGKA !! TIU CPNS & KEDINASAN 2024",
    channel: "Sang Tutor",
    channelHandle: "sangtutor",
  },
  {
    slug: "tiu-figural",
    kind: "materi",
    videoId: "-ZhBP-r9daA",
    title: "30 Menit Mahir Tes Penalaran Gambar, Tes CPNS 2019 Bagian Pertama",
    channel: "PING LIE",
    channelHandle: "pinglie",
  },
  {
    slug: "tiu-figural",
    kind: "pembahasan",
    videoId: "NowDnswfRvk",
    title: "SOAL TIU CPNS 2024 FIGURAL",
    channel: "Privat Al Faiz",
    channelHandle: "PrivatAlFaiz",
  },
  {
    slug: "tkp-pelayanan-publik",
    kind: "materi",
    videoId: "VLF6SupSxqs",
    title: "TES KARAKTERISTIK PRIBADI‼️ - 🚨 PELAYANAN PUBLIK 🚨 - BetaNers - CPNS/PPPK2021 - TKP Part 1",
    channel: "Betaners",
    channelHandle: "betaners",
  },
  {
    slug: "tkp-pelayanan-publik",
    kind: "pembahasan",
    videoId: "-bsj_uJBNgU",
    title: "Serial TKP CPNS - Pelayanan Publik",
    channel: "Fandi AP",
    channelHandle: "bimbelcpns",
  },
  {
    slug: "tkp-jejaring-kerja",
    kind: "materi",
    videoId: "Yysttu0Uiqg",
    title: "TES KARAKTERISTIK PRIBADI‼️ - 🚨 JEJARING KERJA 🚨 - BetaNers - CPNS/PPPK2021 - TKP Part 2",
    channel: "Betaners",
    channelHandle: "betaners",
  },
  {
    slug: "tkp-jejaring-kerja",
    kind: "pembahasan",
    videoId: "CQUbIQ3Z5Lo",
    title: "Serial TKP CPNS - Jejaring Kerja",
    channel: "Fandi AP",
    channelHandle: "bimbelcpns",
  },
  {
    slug: "tkp-sosial-budaya",
    kind: "materi",
    videoId: "9LA7OvlmIVk",
    title: "PART 4. TKP Sosial Budaya SKD CPNS 2026: Cara Berpikir ASN dalam Mengelola Keberagaman.",
    channel: "CERIA BIMBEL ASN",
    channelHandle: "CERIABIMBELASN",
  },
  {
    slug: "tkp-sosial-budaya",
    kind: "pembahasan",
    videoId: "OXcT0P1fAdU",
    title:
      "TES KARAKTERISTIK PRIBADI‼️ - 🚨 Sosial Budaya 🚨  - BetaNers - CPNS/PPPK2021 - TKP Part 3",
    channel: "Betaners",
  },
  {
    slug: "tkp-teknologi-informasi",
    kind: "materi",
    videoId: "3nsuiNroPH4",
    title: "TES KARAKTERISTIK PRIBADI ‼️- 🚨 Teknologi Informasi & Komunikasi 🚨 - CPNS/PPPK2021 - TKP Part 4",
    channel: "Betaners",
    channelHandle: "betaners",
  },
  {
    slug: "tkp-teknologi-informasi",
    kind: "pembahasan",
    videoId: "l8b3goJRPbI",
    title:
      "6 SOAL TKP TIK 2026 FULL PENALARAN! AI, Hoaks, Phishing & Keamanan Data | CPNS & Kedinasan",
    channel: "CERIA BIMBEL ASN",
  },
  {
    slug: "tkp-profesionalisme",
    kind: "materi",
    videoId: "ndG330w4rrM",
    title: "TES KARAKTERISTIK PRIBADI ‼️- 🚨 Profesinalisme 🚨 - CPNS/PPPK2021 - TKP Part 5",
    channel: "Betaners",
    channelHandle: "betaners",
  },
  {
    slug: "tkp-profesionalisme",
    kind: "pembahasan",
    videoId: "-tDSnr9wb6k",
    title:
      "PART 6. TKP PROFESIONALISME SKD CPNS 2026 | Materi Wajib, Rumus Skor 5, dan Jebakan Jawaban!",
    channel: "CERIA BIMBEL ASN",
  },
  {
    slug: "tkp-anti-radikalisme",
    kind: "materi",
    videoId: "bdoO84v-MxI",
    title: "PART 7. TKP Anti Radikalisme CPNS 2026 | Materi Wajib, Latihan Soal & Pembahasan Lengkap.",
    channel: "CERIA BIMBEL ASN",
    channelHandle: "CERIABIMBELASN",
  },
  {
    slug: "tkp-anti-radikalisme",
    kind: "pembahasan",
    videoId: "KB5C68qLDSw",
    title: "TKP CPNS ANTI RADIKALISME SESUAI KISI-KISI RESMI 2021",
    channel: "Fandi AP",
    channelHandle: "bimbelcpns",
  },
];

/** Semua video untuk satu materi, urut materi dulu baru pembahasan. */
export function getMaterialVideos(slug: string): MaterialVideo[] {
  return MATERIAL_VIDEOS.filter((v) => v.slug === slug);
}
