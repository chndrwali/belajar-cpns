import { TryoutReview } from "@/components/cpns/tryout-review";

export const metadata = { title: "Review Tryout — Belajar CPNS" };

export default async function TryoutReviewPage({
  params,
}: {
  params: Promise<{ attemptId: string }>;
}) {
  const { attemptId } = await params;
  return <TryoutReview attemptId={attemptId} />;
}
