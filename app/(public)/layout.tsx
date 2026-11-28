import { SiteFooter, SiteHeader } from "@/components/cpns/site-header";
import { MobileBottomNav } from "@/components/cpns/mobile-bottom-nav";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-paper pb-14 text-ink md:pb-0">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <MobileBottomNav />
    </div>
  );
}
