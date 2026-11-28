"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenCheck, GraduationCap, LogIn, Menu, X } from "lucide-react";
import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import { useLegacyProgressImport } from "@/components/cpns/progress-hooks";
import { ProfileDropdown } from "@/components/cpns/profile-dropdown";

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

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand text-white">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-ink">
            Belajar<span className="text-teal-700">CPNS</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigasi utama">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`rounded-md px-3.5 py-2 text-sm font-medium transition ${
                pathname === item.href
                  ? "bg-brand text-white"
                  : "text-muted-text hover:bg-paper hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {session?.user ? (
            <ProfileDropdown />
          ) : (
            <Link
              href="/login"
              className="hidden items-center gap-1.5 rounded-md border border-ink/15 px-3.5 py-2 text-sm font-semibold text-ink transition hover:bg-paper sm:inline-flex"
            >
              <LogIn className="h-4 w-4" />
              Masuk
            </Link>
          )}
          <Link
            href="/tryout"
            className="hidden items-center gap-1.5 rounded-md bg-amber-accent px-4 py-2 text-sm font-bold text-ink transition hover:bg-amber-500 sm:inline-flex"
          >
            <BookOpenCheck className="h-4 w-4" />
            Mulai Tryout
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-ink/15 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-ink/10 bg-white px-4 py-3 md:hidden" aria-label="Navigasi mobile">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`block rounded-md px-3 py-2.5 text-sm font-medium ${
                pathname === item.href ? "bg-brand text-white" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          {session?.user ? (
            <p className="mt-1 rounded-md px-3 py-2.5 text-sm text-muted-text">
              Keluar lewat menu profil (avatar di atas).
            </p>
          ) : (
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-md px-3 py-2.5 text-sm font-medium text-ink"
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
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-lg font-extrabold text-ink">
              Belajar<span className="text-teal-700">CPNS</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-text">
              Sistem belajar mandiri untuk Seleksi Kompetensi Dasar CPNS: materi TWK, TIU, dan TKP,
              kuis per bab, tryout lengkap, dan checklist administrasi.
            </p>
          </div>
          <div className="text-sm text-muted-text">
            <p className="font-semibold text-ink">Tentang</p>
            <p className="mt-2">
              <Link href="/tentang" className="hover:text-ink hover:underline">
                Tentang Belajar CPNS
              </Link>
            </p>
            <p className="mt-1">
              <Link href="/privasi" className="hover:text-ink hover:underline">
                Kebijakan Privasi
              </Link>
            </p>
            <p className="mt-1">
              <Link href="/syarat" className="hover:text-ink hover:underline">
                Syarat Layanan
              </Link>
            </p>
            <p className="mt-1">
              <a
                className="font-semibold text-teal-700 underline"
                href="https://github.com/chndrwali/belajar-cpns"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub · chndrwali/belajar-cpns
              </a>
            </p>
          </div>
          <div className="text-sm text-muted-text">
            <p className="font-semibold text-ink">Sumber resmi</p>
            <p className="mt-2">
              Portal pendaftaran:{" "}
              <a className="font-semibold text-teal-700 underline" href="https://sscasn.bkn.go.id" target="_blank" rel="noopener noreferrer">
                sscasn.bkn.go.id
              </a>
            </p>
            <p className="mt-1">
              KemenPANRB:{" "}
              <a className="font-semibold text-teal-700 underline" href="https://www.menpan.go.id" target="_blank" rel="noopener noreferrer">
                menpan.go.id
              </a>{" "}
              · BKN:{" "}
              <a className="font-semibold text-teal-700 underline" href="https://www.bkn.go.id" target="_blank" rel="noopener noreferrer">
                bkn.go.id
              </a>
            </p>
          </div>
        </div>
        <p className="mt-8 border-t border-ink/10 pt-6 text-xs leading-relaxed text-muted-text">
          Soal latihan di situs ini dibuat sendiri untuk keperluan belajar dan bukan soal resmi BKN.
          Passing grade yang ditampilkan adalah acuan 2024, bukan pengumuman final 2026. Selalu cek
          pengumuman resmi instansi yang kamu lamar.
        </p>
      </div>
    </footer>
  );
}
