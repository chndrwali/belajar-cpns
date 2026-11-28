import Link from "next/link";
import { ArrowLeft, GraduationCap } from "lucide-react";

type AuthLayoutProps = {
  children: React.ReactNode;
};

/**
 * Shell halaman auth — design system Tangga CPNS: latar kertas,
 * tinta #16212B, aksen teal #0F766E, kartu ber-border. Tanpa animasi/
 * efek gelap bawaan starter kit.
 */
export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-paper px-4 py-10 sm:py-16">
      {/* Brand — sama seperti header situs */}
      <Link href="/" className="flex items-center gap-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand text-white">
          <GraduationCap className="h-5 w-5" />
        </span>
        <span className="font-display text-xl font-extrabold tracking-tight text-ink">
          Belajar<span className="text-teal-700">CPNS</span>
        </span>
      </Link>

      {/* Form */}
      <div className="mt-10 w-full max-w-md sm:mt-12">{children}</div>

      {/* Kembali ke beranda */}
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-text transition hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" />
        Kembali ke beranda
      </Link>

      <p className="mt-6 text-center text-xs text-muted-text">
        Progres belajarmu tersimpan di akunmu dan bisa dibuka dari perangkat
        mana pun setelah login.
      </p>
    </div>
  );
};
