import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { TRPCReactProvider } from "@/trpc/client";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

// Font di-vendor lokal (OFL) karena next/font/google gagal fetch dari
// sandbox ini (downloader-nya tidak lewat proxy egress, curl bisa).
const archivo = localFont({
  src: "./fonts/archivo-var.woff2",
  variable: "--font-archivo",
  weight: "500 900",
  display: "swap",
});

const jakarta = localFont({
  src: "./fonts/plus-jakarta-sans-var.woff2",
  variable: "--font-jakarta",
  weight: "400 800",
  display: "swap",
});

const jetbrains = localFont({
  src: "./fonts/jetbrains-mono-var.woff2",
  variable: "--font-jetbrains",
  weight: "400 700",
  display: "swap",
});

const SITE_URL = "https://belajar-cpns-eta.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Belajar CPNS · Materi, Kuis & Tryout SKD TWK/TIU/TKP",
  description:
    "Sistem belajar CPNS: materi SKD TWK/TIU/TKP, kuis per bab, tryout SKD lengkap 110 soal dengan timer, dan checklist administrasi.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Belajar CPNS",
    title: "Belajar CPNS · Materi, Kuis & Tryout SKD TWK/TIU/TKP",
    description:
      "Materi TWK, TIU, dan TKP yang ringkas, kuis per bab, tryout SKD lengkap 110 soal dengan timer, plus checklist administrasi, gratis dan bisa dipakai tanpa login.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Belajar CPNS · Lulus SKD CPNS, mulai dari sini." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Belajar CPNS · Materi, Kuis & Tryout SKD TWK/TIU/TKP",
    description:
      "Materi TWK, TIU, dan TKP yang ringkas, kuis per bab, tryout SKD lengkap 110 soal dengan timer, plus checklist administrasi, gratis dan bisa dipakai tanpa login.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${archivo.variable} ${jakarta.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        <TRPCReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <TooltipProvider>
              <NextSSRPlugin
                routerConfig={extractRouterConfig(ourFileRouter)}
              />
              {children}
              <Toaster />
            </TooltipProvider>
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
