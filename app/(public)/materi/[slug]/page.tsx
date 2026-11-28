import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Lightbulb, Youtube } from "lucide-react";
import { getMaterial, SECTION_INFO } from "@/lib/cpns/materials";
import { getMaterialVideos } from "@/lib/cpns/material-videos";
import { getMaterialReading } from "@/lib/cpns/material-reading";
import { YOUTUBE_CHANNELS } from "@/lib/cpns/youtube";
import { MarkDoneButton } from "@/components/cpns/mark-done-button";
import { MaterialVideo } from "@/components/cpns/material-video";
import { MaterialReadingSection } from "@/components/cpns/material-reading";
import { YoutubeCard } from "@/components/cpns/shared";
import { Reveal } from "@/components/cpns/animate";

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
  const videos = getMaterialVideos(material.slug);
  const reading = getMaterialReading(material.slug);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Link href="/materi" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-text hover:text-ink">
        <ArrowLeft className="h-4 w-4" /> Semua materi
      </Link>
      <Reveal>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className={`rounded-full px-3 py-1 text-sm font-bold text-white ${info.color}`}>{info.name}</span>
          <span className="text-sm text-muted-text">{info.full}</span>
          <span className="inline-flex items-center gap-1 text-sm text-muted-text">
            <Clock className="h-3.5 w-3.5" /> ±{material.estimatedMinutes} menit
          </span>
        </div>
        <h1 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-ink">{material.title}</h1>
        <p className="mt-3 text-lg leading-relaxed text-muted-text">{material.short}</p>
      </Reveal>

      <Reveal delay={0.08}>
        <section className="mt-8 rounded-lg border border-ink/10 bg-white p-6 sm:p-8">
          <h2 className="font-display text-lg font-extrabold text-ink">Poin kunci</h2>
          <ul className="mt-4 space-y-3">
            {material.keyPoints.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-text sm:text-base">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
                {point}
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      {reading ? <MaterialReadingSection reading={reading} /> : null}

      <section className="mt-6 rounded-lg bg-amber-50 p-6 sm:p-8">
        <h2 className="font-display flex items-center gap-2 text-lg font-extrabold text-ink">
          <Lightbulb className="h-5 w-5 text-amber-500" /> Contoh soal
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">{material.example}</p>
        <p className="mt-3 rounded-md bg-white p-4 text-sm leading-relaxed text-muted-text">
          <span className="font-semibold text-ink">Pembahasan: </span>
          {material.exampleAnswer}
        </p>
      </section>

      {videos.map((v) => (
        <MaterialVideo key={v.videoId} video={v} />
      ))}

      <div className="mt-8 flex flex-wrap gap-3">
        <MarkDoneButton slug={material.slug} />
        <Link
          href={`/kuis/${material.slug}`}
          className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-deep"
        >
          Latihan soal bab ini
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <section className="mt-12">
        <h2 className="font-display flex items-center gap-2 text-lg font-extrabold text-ink">
          <Youtube className="h-5 w-5 text-red-600" /> Belajar lewat video · channel yang direkomendasikan
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-text">
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
