import { Play, Youtube } from "lucide-react";
import type { MaterialVideo } from "@/lib/cpns/material-videos";

/**
 * Embed video pembahasan YouTube di halaman detail materi.
 * Satu iframe 16:9, lazy-load (baru dimuat saat terlihat di layar),
 * memakai domain privacy-enhanced youtube-nocookie.com.
 */
export function MaterialVideo({ video }: { video: MaterialVideo }) {
  const watchUrl = `https://www.youtube.com/watch?v=${video.videoId}`;
  return (
    <section className="mt-6 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
      <h2 className="flex items-center gap-2 text-lg font-bold text-[#131316]">
        <Youtube className="h-5 w-5 text-red-600" /> Video pembahasan
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-neutral-500">
        Tonton pembahasan materi ini langsung di sini — tidak perlu buka YouTube.
      </p>
      <div className="mt-4 overflow-hidden rounded-2xl bg-neutral-950">
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
          title={video.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[#131316]">{video.title}</p>
          <p className="mt-0.5 text-sm text-neutral-500">Channel: {video.channel}</p>
        </div>
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-[#131316] transition hover:bg-neutral-100"
        >
          <Play className="h-4 w-4 text-red-600" /> Tonton di YouTube
        </a>
      </div>
    </section>
  );
}
