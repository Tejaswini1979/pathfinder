import type { Metadata } from "next";
import Quiz from "@/components/Quiz";
import {
  getDomainMetaList,
  getStreams,
  getInterests,
  getDomain,
} from "@/data";
import type { QuizDomain } from "@/lib/quiz-recommend";

export const metadata: Metadata = {
  title: "Career Quiz",
  description:
    "Answer a few questions and get career domains recommended for your stream, interests, and budget.",
};

export default function QuizPage() {
  const domains: QuizDomain[] = getDomainMetaList()
    .map((meta) => getDomain(meta.id))
    .filter((d): d is NonNullable<typeof d> => Boolean(d))
    .map((d) => ({
      id: d.id,
      title: d.title,
      color: d.color,
      sub_paths: d.sub_paths.map((sp) => ({
        id: sp.id,
        name: sp.name,
        streamIds: sp.streamIds,
        underrated: sp.underrated,
        low_budget: sp.low_budget,
        low_percent: sp.low_percent,
      })),
    }));

  return (
    <div className="bg-surface-muted flex-1">
      <Quiz domains={domains} streams={getStreams()} interests={getInterests()} />
    </div>
  );
}
