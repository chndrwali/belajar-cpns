import { notFound } from "next/navigation";
import { TryoutPlayer } from "@/components/cpns/tryout-player";
import { getTryout } from "@/lib/cpns/tryouts";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = getTryout(id);
  return { title: t ? `${t.title} — Belajar CPNS` : "Tryout SKD — Belajar CPNS" };
}

export default async function TryoutDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = getTryout(id);
  if (!t) notFound();
  return <TryoutPlayer config={t} />;
}
