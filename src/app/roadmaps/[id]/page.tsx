import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Lightbulb, Flag } from "lucide-react";
import { getRoadmaps } from "@/data/roadmaps";
import { getExam } from "@/data/exams";
import EducationBackdrop from "@/components/EducationBackdrop";

export function generateStaticParams() {
  return getRoadmaps().map((r) => ({ id: r.id }));
}

export function generateMetadata({
  params,
}: PageProps<"/roadmaps/[id]">): Promise<Metadata> {
  return params.then(({ id }) => {
    const roadmap = getRoadmaps().find((r) => r.id === id);
    return {
      title: roadmap?.title ?? "Roadmap",
      description: roadmap?.summary,
    };
  });
}

export default async function RoadmapPage({ params }: PageProps<"/roadmaps/[id]">) {
  const { id } = await params;
  const roadmap = getRoadmaps().find((r) => r.id === id);
  if (!roadmap) notFound();

  const exam = getExam(roadmap.examRef);
  const related = getRoadmaps().filter((r) => r.id !== roadmap.id).slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-10 sm:px-6">
      <Link
        href="/roadmaps"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        All roadmaps
      </Link>

      <header className="relative mt-5 overflow-hidden">
        <EducationBackdrop />
        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
          {roadmap.stream} stream
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {roadmap.title}
        </h1>
        <p className="mt-3 max-w-2xl leading-7 text-gray-600">
          {roadmap.summary}
        </p>
      </header>

      {exam && (
        <div className="mt-6 flex flex-wrap items-center gap-3 rounded-xl bg-primary-light p-4">
          <span className="text-sm text-gray-700">
            Key entrance exam:{" "}
            <span className="font-semibold text-gray-900">{exam.name}</span>
          </span>
          <Link
            href={`/exams#${exam.id}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark"
          >
            Exam details
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}

      <ol className="relative mt-10 space-y-0">
        {roadmap.steps.map((step, i) => (
          <li key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
            {i < roadmap.steps.length - 1 && (
              <span className="absolute left-[21px] top-12 h-[calc(100%-2rem)] w-0.5 bg-gray-200" />
            )}
            <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white text-sm font-bold text-primary">
              {i + 1}
            </span>
            <div className="min-w-0 flex-1 pt-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-semibold text-gray-900">{step.title}</h2>
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-medium text-gray-500">
                  {step.duration}
                </span>
              </div>
              <p className="mt-1.5 text-sm leading-6 text-gray-600">
                {step.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {roadmap.tips.length > 0 && (
        <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900">
            <Lightbulb className="h-5 w-5 text-warning" />
            Pro tips
          </h2>
          <ul className="mt-4 space-y-3">
            {roadmap.tips.map((tip) => (
              <li
                key={tip}
                className="flex items-start gap-3 text-sm leading-6 text-gray-700"
              >
                <Flag className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
                {tip}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10 border-t border-gray-200 pt-8">
        <h2 className="text-lg font-bold text-gray-900">Keep exploring</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.id}
              href={`/roadmaps/${r.id}`}
              className="rounded-xl border border-gray-200 bg-white p-4 text-sm font-medium text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-300"
            >
              {r.title}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
