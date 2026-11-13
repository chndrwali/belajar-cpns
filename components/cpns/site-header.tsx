"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenCheck, GraduationCap, LogIn, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import { signOut, useSession } from "@/lib/auth-client";
import { useLegacyProgressImport } from "@/components/cpns/progress-hooks";

const NAV = [
  { href: "/", label: "Beranda" },
  { href: "/materi", label: "Materi" },
  { href: "/kuis", label: "Kuis" },
  { href: "/tryout", label: "Tryout SKD" },
  { href: "/checklist", label: "Checklist Administrasi" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  // Migrasi satu kali: progres lama dari localStorage dipindah ke database saat login.
  useLegacyProgressImport();

  async function handleSignOut() {
    await signOut();
    window.location.href = "/";
  }
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#131316] text-white">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight text-[#131316]">
            Belajar<span className="text-orange-600">CPNS</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                pathname === item.href
                  ? "bg-[#131316] text-white"
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-[#131316]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {session?.user ? (
            <span className="hidden items-center gap-2 sm:flex">
              <span className="max-w-32 truncate text-sm font-medium text-neutral-600">
                {session.user.name ?? session.user.email}
              </span>
              <button
                onClick={handleSignOut}
                className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 px-3.5 py-2 text-sm font-semibold text-[#131316] transition hover:bg-neutral-100"
              >
                <LogOut className="h-4 w-4" />
                Keluar
              </button>
            </span>
          ) : (
            <Link
              href="/login"
              className="hidden items-center gap-1.5 rounded-full border border-neutral-300 px-3.5 py-2 text-sm font-semibold text-[#131316] transition hover:bg-neutral-100 sm:inline-flex"
            >
              <LogIn className="h-4 w-4" />
              Masuk
            </Link>
          )}
          <Link
            href="/tryout"
            className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 text-sm font-semibold text-white sm:inline-flex"
          >
            <BookOpenCheck className="h-4 w-4" />
            Mulai Tryout
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-neutral-200 bg-white px-4 py-3 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block rounded-xl px-3 py-2.5 text-sm font-medium ${
                pathname === item.href ? "bg-[#131316] text-white" : "text-neutral-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
          {session?.user ? (
            <button
              onClick={handleSignOut}
              className="mt-1 block w-full rounded-xl px-3 py-2.5 text-left text-sm font-medium text-neutral-700"
            >
              Keluar ({session.user.name ?? session.user.email})
            </button>
          ) : (
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-xl px-3 py-2.5 text-sm font-medium text-neutral-700"
            >
              Masuk / Daftar
            </Link>
          )}
        </nav>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-bold text-[#131316]">
              Belajar<span className="text-orange-600">CPNS</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
              Sistem belajar mandiri untuk Seleksi Kompetensi Dasar CPNS: materi TWK, TIU, dan TKP,
              kuis per bab, tryout lengkap, dan checklist administrasi.
            </p>
          </div>
          <div className="text-sm text-neutral-500">
            <p className="font-semibold text-[#131316]">Tentang</p>
            <p className="mt-2">
              <Link href="/tentang" className="hover:text-[#131316] hover:underline">
                Tentang Belajar CPNS
              </Link>
            </p>
            <p className="mt-1">
              <Link href="/privasi" className="hover:text-[#131316] hover:underline">
                Kebijakan Privasi
              </Link>
            </p>
            <p className="mt-1">
              <Link href="/syarat" className="hover:text-[#131316] hover:underline">
                Syarat Layanan
              </Link>
            </p>
            <p className="mt-1">
              <a
                className="text-orange-600 underline"
                href="https://github.com/chndrwali/belajar-cpns"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub — chndrwali/belajar-cpns
              </a>
            </p>
          </div>
          <div className="text-sm text-neutral-500">
            <p className="font-semibold text-[#131316]">Sumber resmi</p>
            <p className="mt-2">
              Portal pendaftaran:{" "}
              <a className="text-orange-600 underline" href="https://sscasn.bkn.go.id" target="_blank" rel="noopener noreferrer">
                sscasn.bkn.go.id
              </a>
            </p>
            <p className="mt-1">
              KemenPANRB:{" "}
              <a className="text-orange-600 underline" href="https://www.menpan.go.id" target="_blank" rel="noopener noreferrer">
                menpan.go.id
              </a>{" "}
              · BKN:{" "}
              <a className="text-orange-600 underline" href="https://www.bkn.go.id" target="_blank" rel="noopener noreferrer">
                bkn.go.id
              </a>
            </p>
          </div>
        </div>
        <p className="mt-8 border-t border-neutral-100 pt-6 text-xs leading-relaxed text-neutral-400">
          Soal latihan di situs ini dibuat sendiri untuk keperluan belajar dan bukan soal resmi BKN.
          Passing grade yang ditampilkan adalah acuan 2024, bukan pengumuman final 2026 — selalu cek
          pengumuman resmi instansi yang kamu lamar.
        </p>
      </div>
    </footer>
  );
}
