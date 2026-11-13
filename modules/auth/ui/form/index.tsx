"use client";

import { useForm } from "react-hook-form";
import {
  LoginFormValues,
  loginSchema,
  RegisterFormValues,
  registerSchema,
} from "@/lib/form-schema";
import { signIn, signUp } from "@/lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PasswordInput } from "@/components/custom/password-input";
import Link from "next/link";
import { Spinner } from "@/components/ui/spinner";
import { appToast } from "@/components/custom/app-toast";
import { zodResolver } from "@hookform/resolvers/zod";

type AuthFormProps = {
  variant: "login" | "register";
};

// ────────────────────────────────────────────
// Config per variant
// ────────────────────────────────────────────
const variantConfig = {
  login: {
    eyebrow: "Selamat datang kembali",
    title: "Masuk ke akunmu",
    description: "Masuk untuk melanjutkan progres belajarmu",
    submitLabel: "Masuk",
    footerText: "Belum punya akun?",
    footerLinkText: "Daftar sekarang",
    footerLinkHref: "/register",
  },
  register: {
    eyebrow: "Gratis, tanpa kartu kredit",
    title: "Buat akun gratis",
    description: "Daftar untuk menyimpan progres belajar, skor kuis, dan riwayat tryout",
    submitLabel: "Daftar",
    footerText: "Sudah punya akun?",
    footerLinkText: "Masuk",
    footerLinkHref: "/login",
  },
} as const;

// ────────────────────────────────────────────
// AuthForm
// ────────────────────────────────────────────
export const AuthForm = ({ variant }: AuthFormProps) => {
  const isLogin = variant === "login";
  const config = variantConfig[variant];

  const router = useRouter();
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const form = useForm<LoginFormValues | RegisterFormValues>({
    resolver: zodResolver(isLogin ? loginSchema : registerSchema),
    defaultValues: {
      email: "",
      password: "",
      ...(isLogin ? {} : { name: "" }),
    },
  });

  const onSubmit = async (values: LoginFormValues | RegisterFormValues) => {
    setError(undefined);

    if (isLogin) {
      const loginValues = values as LoginFormValues;
      await signIn.email(
        {
          email: loginValues.email,
          password: loginValues.password,
          rememberMe: loginValues.remember ?? true,
          callbackURL: "/admin",
        },
        {
          onRequest: () => setLoading(true),
          onSuccess: () => {
            setLoading(false);
            appToast.success("Berhasil masuk!");
            router.push("/admin");
          },
          onError: (ctx) => {
            setLoading(false);
            setError(ctx.error.message);
            appToast.error(`${ctx.error.message}`);
          },
          onSettled: () => setLoading(false),
        },
      );
    } else {
      const registerValues = values as RegisterFormValues;
      await signUp.email(
        {
          email: registerValues.email,
          password: registerValues.password,
          name: registerValues.name,
          callbackURL: "/login",
        },
        {
          onRequest: () => setLoading(true),
          onSuccess: () => {
            setLoading(false);
            appToast.success("Pendaftaran berhasil! Silakan masuk.");
            router.push("/login");
          },
          onError: (ctx) => {
            setLoading(false);
            appToast.error(`${ctx.error.message}`);
            setError(ctx.error.message);
          },
          onSettled: () => setLoading(false),
        },
      );
    }
  };

  return (
    <Card className="w-full rounded-3xl border border-neutral-200 bg-white shadow-sm">
      <CardHeader className="text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-orange-600 uppercase">
          {config.eyebrow}
        </p>
        <CardTitle className="mt-2 text-3xl font-bold tracking-tight text-[#131316]">
          {isLogin ? (
            <>
              Masuk ke{" "}
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-pink-500 bg-clip-text text-transparent">
                akunmu
              </span>
            </>
          ) : (
            <>
              Buat{" "}
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-pink-500 bg-clip-text text-transparent">
                akun gratis
              </span>
            </>
          )}
        </CardTitle>
        <CardDescription className="text-base text-neutral-500">
          {config.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Name field — register only */}
            {!isLogin && (
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-[#131316]">
                      Nama Lengkap
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Masukkan nama lengkapmu"
                        className="h-11 rounded-xl border-neutral-300 focus-visible:ring-orange-500"
                        {...field}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {/* Email field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-[#131316]">
                    Alamat Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Masukkan alamat emailmu"
                      className="h-11 rounded-xl border-neutral-300 focus-visible:ring-orange-500"
                      {...field}
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-[#131316]">
                    Kata Sandi
                  </FormLabel>
                  <FormControl>
                    <PasswordInput
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Masukkan kata sandimu"
                      required
                      disabled={loading}
                      className="h-11 rounded-xl border-neutral-300 focus-visible:ring-orange-500"
                      {...(!isLogin && { showRules: true, showStrength: true })}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Remember me + Forgot password — login only */}
            {isLogin && (
              <div className="flex items-center justify-between">
                <FormField
                  control={form.control}
                  name="remember"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-y-0 space-x-1">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value ?? false}
                          onChange={field.onChange}
                          className="size-4 rounded border-neutral-300 accent-orange-600"
                          disabled={loading}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal cursor-pointer text-neutral-600">
                        Ingat saya
                      </FormLabel>
                    </FormItem>
                  )}
                />

                <Link
                  href="/forgot-password"
                  className="text-sm font-semibold text-orange-600 hover:underline"
                >
                  Lupa kata sandi?
                </Link>
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              className="h-11 w-full rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-pink-500 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:opacity-90"
              disabled={loading}
            >
              {loading ? <Spinner /> : config.submitLabel}
            </Button>

            <p className="text-sm text-center text-neutral-500">
              {config.footerText}{" "}
              <Link
                href={config.footerLinkHref}
                className="font-semibold text-orange-600 cursor-pointer hover:underline"
              >
                {config.footerLinkText}
              </Link>
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
