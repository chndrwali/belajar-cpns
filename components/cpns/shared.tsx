import Link from "next/link";
import { ArrowRight, Play, Youtube } from "lucide-react";
import type { YoutubeChannel } from "@/lib/cpns/types";

export function SectionHeading({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold tracking-[0.2em] text-orange-600 uppercase">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#131316] sm:text-4xl">{title}</h2>
      {desc ? <p className="mt-3 text-base leading-relaxed text-neutral-500">{desc}</p> : null}
    </div>
  );
}

export function YoutubeCard({ channel, topic }: { channel: YoutubeChannel; topic?: string }) {
  return (
    <a
      href={channel.searchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-4 transition hover:border-red-200 hover:shadow-md"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
        <Youtube className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-1.5 font-semibold text-[#131316]">
          {channel.name}
          <Play className="h-3.5 w-3.5 text-red-600" />
        </span>
        <span className="mt-0.5 block text-sm font-medium text-orange-700">{channel.specialty}</span>
        <span className="mt-1 block text-sm leading-relaxed text-neutral-500">{channel.forWhom}</span>
        {topic ? <span className="mt-1 block text-xs text-neutral-400">Cari: {channel.name} CPNS {topic}</span> : null}
      </span>
    </a>
  );
}

export function GradientButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:opacity-90"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
