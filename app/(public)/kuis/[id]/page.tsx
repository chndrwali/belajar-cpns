import { notFound } from "next/navigation";
import { getMaterial } from "@/lib/cpns/materials";
import { QUIZ_QUESTIONS } from "@/lib/cpns/quiz-questions";
import { QuizPlayer } from "@/components/cpns/quiz-player";

export default async function KuisDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const material = getMaterial(id);
  if (!material) notFound();
  const questions = QUIZ_QUESTIONS.filter((q) => q.id.startsWith(`${id}-q`));
  if (questions.length === 0) notFound();
  return <QuizPlayer material={material} questions={questions} />;
}
