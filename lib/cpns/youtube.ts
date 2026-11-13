import type { YoutubeChannel } from "./types";
import { ytSearch } from "./types";

export const YOUTUBE_CHANNELS: YoutubeChannel[] = [
  {
    name: "Privat Al-Faiz",
    handle: "@PrivatAlFaiz",
    specialty: "TWK, TIU, dan TKP lengkap",
    forWhom: "Pemula — penjelasan tenang, detail, dan runut dari dasar.",
    topics: ["twk", "tiu", "tkp"],
    searchUrl: "https://www.youtube.com/@PrivatAlFaiz",
  },
  {
    name: "Sang Tutor",
    handle: "@sangtutor",
    specialty: "Trik cepat TIU",
    forWhom: "Kamu yang sering kehabisan waktu di soal hitungan.",
    topics: ["tiu"],
    searchUrl: "https://www.youtube.com/@sangtutor",
  },
  {
    name: "Dhedi R. Ghazali",
    handle: "TanyaCPNS",
    specialty: "TWK — sejarah dan UUD 1945",
    forWhom: "Kamu yang menganggap TWK membosankan dan sulit dihafal.",
    topics: ["twk"],
    searchUrl: "https://www.youtube.com/@TanyaCPNS",
  },
  {
    name: "Fandi AP",
    handle: "@bimbelcpns",
    specialty: "TKP — logika di balik jawaban",
    forWhom: "Kamu yang bingung kenapa satu opsi TKP bernilai 5 dan yang lain 1.",
    topics: ["tkp"],
    searchUrl: "https://www.youtube.com/@bimbelcpns",
  },
  {
    name: "Viracun",
    handle: "@VIRACUN",
    specialty: "TIU konsep mendalam",
    forWhom: "Kamu yang mau paham konsep, bukan sekadar hafal trik.",
    topics: ["tiu"],
    searchUrl: "https://www.youtube.com/@VIRACUN",
  },
  {
    name: "Ping Lie",
    handle: "@pinglie",
    specialty: "TKP dan matematika",
    forWhom: "Kamu yang butuh pembahasan soal TIU dengan cara sederhana.",
    topics: ["tiu", "tkp"],
    searchUrl: "https://www.youtube.com/@pinglie",
  },
];

export function channelsForSection(section: string): YoutubeChannel[] {
  return YOUTUBE_CHANNELS.filter((c) => c.topics.includes(section as never));
}

export function channelSearchFor(channel: YoutubeChannel, topic: string): string {
  if (channel.handle) return `https://www.youtube.com/@${channel.handle.replace("@", "")}`;
  return ytSearch(`${channel.name} CPNS ${topic}`);
}
