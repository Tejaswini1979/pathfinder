import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Lightbulb, AlertTriangle } from "lucide-react";
import { getStreamGuides, streamDecisionTips } from "@/data/streams-guide";
import { getExamsForStream } from "@/data/exams";
import { getCourses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Streams After Class 10",
  description:
    "Compare Science, Commerce, Arts and Vocational streams after Class 10 — subjects, future options, entrance exams and the careers each leads to.",
};

const commonMistakes = [
  "Choosing a stream only because of friends or family pressure",
  "Ignoring personal interests and abilities",
  "Not understanding future career scope before deciding",
  "Selecting difficult subjects without preparation",
  "Believing Science is 'superior' to other streams",
];

const streamToFilter: Record<string, string> = {
  science: "maths",
  commerce: "commerce",
  arts: "arts",
  vocational: "",
};

export default function StreamsPage() {
  const streams = getStreamGuides();

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
      <header className="mb-10 max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          The 4 streams after Class 10
        </h1>
        <p className="mt-3 text-lg leading-8 text-gray-600">
          Choosing your stream is the first big fork in your career path. It
          determines which subjects you study in Classes 11 and 12, which
          entrance exams you can give, and which careers stay open to you. Here
          is everything on the table — before you decide.
        </p>
      </header>

      <div className="space-y-6">
        {streams.map((stream, i) => {
          const exams = getExamsForStream(stream.id);
          const courses = getCourses().filter(
            (c) => c.stream.toLowerCase() === stream.id
          );
          return (
            <section
              key={stream.id}
              id={stream.id}
              className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
              style={{ borderTopColor: stream.color, borderTopWidth: 4 }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold text-white"
                    style={{ backgroundColor: stream.color }}
                  >
                    Stream {i + 1} of 4
                  </span>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900">
                    {stream.name}
                  </h2>
                  <p className="mt-2 max-w-2xl leading-7 text-gray-600">
                    {stream.tagline}
                  </p>
                </div>
                <Link
                  href={`/careers${streamToFilter[stream.id] ? `?stream=${streamToFilter[stream.id]}` : ""}`}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
                >
                  See matching careers
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Subjects you&apos;ll study
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {stream.subjects.map((sub) => (
                      <span
                        key={sub}
                        className="rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-sm font-medium text-gray-700"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Who it suits                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {stream.suitedFor}
                  </p>
                  <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Future options
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {stream.futureOptions.map((opt) => (
                      <span
                        key={opt}
                        className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium text-white"
                        style={{ backgroundColor: stream.color }}
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {opt}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-5">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Entrance exams ahead
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {exams.slice(0, 6).map((exam) => (
                        <li key={exam.id}>
                          <Link
                            href={`/exams#${exam.id}`}
                            className="text-sm font-medium text-gray-700 transition-colors hover:text-primary"
                          >
                            {exam.short}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-5">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Careers this stream feeds
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {stream.careers.slice(0, 6).map((career) => (
                        <li
                          key={career}
                          className="text-sm font-medium text-gray-700"
                        >
                          {career}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 text-xs text-gray-400">
                      {courses.length} courses in our catalog match this stream
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900">
          <Lightbulb className="h-5 w-5 text-warning" />
          How to choose the right stream
        </h2>
        <ol className="mt-5 space-y-3">
          {streamDecisionTips.map((tip, i) => (
            <li key={tip} className="flex items-start gap-3 text-sm leading-6 text-gray-700">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-light text-xs font-bold text-primary">
                {i + 1}
              </span>
              {tip}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8 rounded-2xl border border-amber-200 bg-warning-light p-6 sm:p-8">
        <h2 className="flex items-center gap-2 text-xl font-bold text-amber-800">
          <AlertTriangle className="h-5 w-5" />
          Common mistakes to avoid
        </h2>
        <ul className="mt-4 space-y-2.5">
          {commonMistakes.map((m) => (
            <li key={m} className="flex items-start gap-2.5 text-sm leading-6 text-amber-800">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              {m}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
