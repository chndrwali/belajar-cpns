import Link from "next/link";
import { Timer } from "lucide-react";
import { TRYOUTS } from "@/lib/cpns/tryouts";
import { Reveal, Stagger, StaggerItem } from "@/components/cpns/animate";

export const metadata = { title: "Tryout SKD · Belajar CPNS" };

export default function TryoutSelectPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.2em] text-teal-700 uppercase">Simulasi ujian</p>
        <h1 className="mt-2 text-3xl font-bold text-ink">Pilih Tryout SKD</h1>
        <p className="mt-3 leading-relaxed text-muted-text">
          Dua set soal, format sama persis seperti ujian: 110 soal dalam 100 menit (TWK 30, TIU 35,
          TKP 45). Kerjakan Tryout 1 dulu untuk pemanasan, lalu tantang dirimu dengan Tryout 2 yang
          lebih susah.
        </p>
      </Reveal>
      <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
        {Object.values(TRYOUTS).map((t) => (
          <StaggerItem key={t.id} className="h-full">
            <Link
              href={`/tryout/${t.id}`}
              className="group flex h-full flex-col rounded-lg border border-ink/10 bg-white p-6 transition hover:border-teal-600 hover:shadow-soft"
            >
              <p className="text-xs font-semibold tracking-[0.2em] text-teal-700 uppercase">
                {t.level}
              </p>
              <h2 className="mt-2 text-xl font-bold text-ink group-hover:text-teal-800">
                {t.shortTitle}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-text">{t.subtitle}</p>
              <p className="mt-4 inline-flex items-center gap-2 self-start rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition group-hover:bg-brand-deep">
                <Timer className="h-4 w-4" /> Mulai · 100 Menit
              </p>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
      <p className="mt-6 text-xs text-muted-text">
        Passing grade acuan 2024 (TWK 65, TIU 80, TKP 166), bukan pengumuman final 2026. Soal
        latihan buatan, bukan soal resmi BKN.
      </p>
    </div>
  );
}
