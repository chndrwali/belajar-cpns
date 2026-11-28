"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, HelpCircle, Home, ListChecks, Timer } from "lucide-react";

const ITEMS = [
  { href: "/", label: "Beranda", icon: Home },
  { href: "/materi", label: "Materi", icon: BookOpen },
  { href: "/kuis", label: "Kuis", icon: HelpCircle },
  { href: "/tryout", label: "Tryout", icon: Timer },
  { href: "/checklist", label: "Checklist", icon: ListChecks },
];

/**
 * Bottom nav mobile Tangga CPNS — lima tujuan utama, satu ketukan jempol.
 * Disembunyikan di halaman player kuis/tryout supaya tidak menutupi
 * tombol navigasi soal di bawah kartu soal.
 */
export function MobileBottomNav() {
  const pathname = usePathname();
  const isPlayerPage =
    /^\/kuis\/[^/]+$/.test(pathname) || /^\/tryout\/[^/]+$/.test(pathname);
  if (isPlayerPage) return null;

  return (
    <nav
      aria-label="Navigasi bawah"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-5">
        {ITEMS.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-14 flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-semibold ${
                  active ? "text-teal-700" : "text-muted-text"
                }`}
              >
                <item.icon className="h-5 w-5" aria-hidden="true" />
                {item.label}
                <span
                  aria-hidden="true"
                  className={`h-1 w-6 rounded-full ${active ? "bg-teal-700" : "bg-transparent"}`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
