import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Lightbulb, Youtube } from "lucide-react";
import { getMaterial, SECTION_INFO } from "@/lib/cpns/materials";
import { getMaterialVideo } from "@/lib/cpns/material-videos";
import { YOUTUBE_CHANNELS } from "@/lib/cpns/youtube";
import { MarkDoneButton } from "@/components/cpns/mark-done-button";
import { MaterialVideo } from "@/components/cpns/material-video";
import { YoutubeCard } from "@/components/cpns/shared";

function channelsForMaterial(slug: string, section: string) {
  const alFaiz = YOUTUBE_CHANNELS.find((c) => c.name === "Privat Al-Faiz");
  const byName = (name: string) => YOUTUBE_CHANNELS.find((c) => c.name === name);
  const picked = [alFaiz];
  if (section === "twk") picked.push(byName("Dhedi R. Ghazali"));
  if (slug === "tiu-verbal" || slug === "tiu-figural") picked.push(byName("Viracun"));
  if (slug === "tiu-numerik") picked.push(byName("Sang Tutor"), byName("Ping Lie"));
  if (section === "tkp") picked.push(byName("Fandi AP"), byName("Ping Lie"));
  return picked.filter((c): c is NonNullable<typeof c> => Boolean(c));
}

export default async function MateriDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const material = getMaterial(slug);
  if (!material) notFound();
  const info = SECTION_INFO[material.section];
  const channels = channelsForMaterial(material.slug, material.section);
  const video = getMaterialVideo(material.slug);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Link href="/materi" className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-[#131316]">
        <ArrowLeft className="h-4 w-4" /> Semua materi
      </Link>
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className={`rounded-full px-3 py-1 text-sm font-bold text-white ${info.color}`}>{info.name}</span>
        <span className="text-sm text-neutral-500">{info.full}</span>
        <span className="inline-flex items-center gap-1 text-sm text-neutral-400">
          <Clock className="h-3.5 w-3.5" /> ±{material.estimatedMinutes} menit
        </span>
      </div>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#131316]">{material.title}</h1>
      <p className="mt-3 text-lg leading-relaxed text-neutral-500">{material.short}</p>

      <section className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
        <h2 className="text-lg font-bold text-[#131316]">Poin kunci</h2>
        <ul className="mt-4 space-y-3">
          {material.keyPoints.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-orange-500 to-pink-500" />
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6 rounded-3xl bg-amber-50 p-6 sm:p-8">
        <h2 className="flex items-center gap-2 text-lg font-bold text-[#131316]">
          <Lightbulb className="h-5 w-5 text-amber-500" /> Contoh soal
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">{material.example}</p>
        <p className="mt-3 rounded-2xl bg-white p-4 text-sm leading-relaxed text-neutral-600">
          <span className="font-semibold text-[#131316]">Pembahasan: </span>
          {material.exampleAnswer}
        </p>
      </section>

      {video ? <MaterialVideo video={video} /> : null}

      <div className="mt-8 flex flex-wrap gap-3">
        <MarkDoneButton slug={material.slug} />
        <Link
          href={`/kuis/${material.slug}`}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:opacity-90"
        >
          Latihan soal bab ini
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <section className="mt-12">
        <h2 className="flex items-center gap-2 text-lg font-bold text-[#131316]">
          <Youtube className="h-5 w-5 text-red-600" /> Belajar lewat video — channel yang direkomendasikan
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-500">
          Tonton pembahasan {material.title} dari tutor-tutor ini. Klik kartu untuk membuka channel-nya di YouTube.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {channels.map((ch) => (
            <YoutubeCard key={ch.name} channel={ch} topic={material.title} />
          ))}
        </div>
      </section>
    </div>
  );
}
