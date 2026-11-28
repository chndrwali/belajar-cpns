import Link from "next/link";
import { ArrowRight, BookOpen, Play, Youtube } from "lucide-react";
import type { EbookReference, YoutubeChannel } from "@/lib/cpns/types";

export function SectionHeading({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="font-display text-xs font-bold tracking-[0.2em] text-teal-700 uppercase">{eyebrow}</p>
      <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {desc ? <p className="mt-3 text-base leading-relaxed text-muted-text">{desc}</p> : null}
    </div>
  );
}

export function YoutubeCard({ channel, topic }: { channel: YoutubeChannel; topic?: string }) {
  return (
    <a
      href={channel.searchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full items-start gap-3 rounded-lg border border-ink/10 bg-white p-4 transition hover:border-red-300 hover:shadow-soft"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
        <Youtube className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-1.5 font-semibold text-ink">
          {channel.name}
          <Play className="h-3.5 w-3.5 text-red-600" />
        </span>
        <span className="mt-0.5 block text-sm font-medium text-teal-800">{channel.specialty}</span>
        <span className="mt-1 block text-sm leading-relaxed text-muted-text">{channel.forWhom}</span>
        {topic ? <span className="mt-1 block text-xs text-muted-text">Cari: {channel.name} CPNS {topic}</span> : null}
      </span>
    </a>
  );
}

export function EbookCard({ ebook }: { ebook: EbookReference }) {
  return (
    <a
      href={ebook.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full items-start gap-3 rounded-lg border border-ink/10 bg-white p-4 transition hover:border-teal-600 hover:shadow-soft"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-700 text-white">
        <BookOpen className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-1.5 font-semibold text-ink">
          {ebook.title}
          <ArrowRight className="h-3.5 w-3.5 text-teal-700 transition group-hover:translate-x-0.5" />
        </span>
        <span className="mt-1 block text-sm leading-relaxed text-muted-text">{ebook.desc}</span>
        <span className="mt-2 block text-xs leading-relaxed text-muted-text">
          Isi: {ebook.items.join(" · ")}
        </span>
      </span>
    </a>
  );
}

export function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
