import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Map } from "lucide-react";
import { getRoadmaps } from "@/data/roadmaps";
import { getExam } from "@/data/exams";
import EducationBackdrop from "@/components/EducationBackdrop";

export const metadata: Metadata = {
  title: "Career Roadmaps",
  description:
    "Step-by-step roadmaps from Class 10 to your first job — for software engineering, medicine, CA, civil services, design and more.",
};

export default function RoadmapsPage() {
  const roadmaps = getRoadmaps();

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
      <header className="relative mb-8 overflow-hidden">
        <EducationBackdrop />
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Career roadmaps
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          The exact year-by-year path from Class 10 to your first job — what to
          study, which exam to target, and what happens after.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {roadmaps.map((roadmap) => {
          const exam = getExam(roadmap.examRef);
          return (
            <Link
              key={roadmap.id}
              href={`/roadmaps/${roadmap.id}`}
              className="group flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <Map className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-semibold text-gray-600">
                  {roadmap.stream}
                </span>
              </div>
              <h2 className="mt-4 font-semibold leading-snug text-gray-900 group-hover:text-primary">
                {roadmap.title}
              </h2>
              <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-gray-600">
                {roadmap.summary}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                {exam ? (
                  <span className="text-xs font-medium text-primary">
                    Key exam: {exam.short}
                  </span>
                ) : (
                  <span />
                )}
                <ArrowRight className="h-4 w-4 text-gray-300 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
