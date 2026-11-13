import Link from "next/link";
import { ArrowLeft, GraduationCap } from "lucide-react";

type AuthLayoutProps = {
  children: React.ReactNode;
};

/**
 * Shell halaman auth — selaras dengan halaman publik (gaya Modulify):
 * latar putih, tinta #131316, aksen gradient hangat oranye→amber→pink
 * hanya untuk penekanan, kartu ber-border. Tanpa animasi/efek gelap
 * bawaan starter kit.
 */
export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-white px-4 py-10 sm:py-16">
      {/* Brand — sama seperti header situs */}
      <Link href="/" className="flex items-center gap-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#131316] text-white">
          <GraduationCap className="h-5 w-5" />
        </span>
        <span className="text-xl font-bold tracking-tight text-[#131316]">
          Belajar<span className="text-orange-600">CPNS</span>
        </span>
      </Link>

      {/* Form */}
      <div className="mt-10 w-full max-w-md sm:mt-12">{children}</div>

      {/* Kembali ke beranda */}
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition hover:text-[#131316]"
      >
        <ArrowLeft className="h-4 w-4" />
        Kembali ke beranda
      </Link>

      <p className="mt-6 text-center text-xs text-neutral-400">
        Progres belajarmu tersimpan di akunmu dan bisa dibuka dari perangkat
        mana pun setelah login.
      </p>
    </div>
  );
};
