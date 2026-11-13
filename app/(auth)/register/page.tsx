import { AuthForm } from "@/modules/auth/ui/form";

export const metadata = {
  title: "Daftar",
  description: "Buat akun Belajar CPNS gratis untuk menyimpan progres belajar, skor kuis, dan riwayat tryout",
  robots: { index: false, follow: false },
};

export default function RegisterPage() {
  return <AuthForm variant="register" />;
}
