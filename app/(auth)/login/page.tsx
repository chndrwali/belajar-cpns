import { AuthForm } from "@/modules/auth/ui/form";

export const metadata = {
  title: "Masuk",
  description: "Masuk ke akun Belajar CPNS untuk melanjutkan progres belajarmu",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return <AuthForm variant="login" />;
}
