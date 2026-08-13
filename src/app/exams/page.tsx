import type { Metadata } from "next";
import { ExternalLink, CalendarDays, FileQuestion, GraduationCap, Lightbulb } from "lucide-react";
import { getExams } from "@/data/exams";
import { getStreamGuides } from "@/data/streams-guide";

export const metadata: Metadata = {
  title: "Entrance Exams",
  description:
    "Every major Indian entrance exam after Class 10 and 12 — JEE, NEET, CUET, CLAT, NDA, NID, NIFT and more, with pattern, frequency and advice.",
};

const streamLinks: Record<string, string[]> = {
  science: ["jee-main", "jee-advanced", "neet-ug", "bitsat", "comdex", "polytechnic", "iti"],
  commerce: ["caf", "cseet", "ipmat"],
  arts: ["clat", "nid-dat", "nift", "ctet"],
  vocational: ["iti", "polytechnic", "nchm-jee"],
};

export default function ExamsPage() {
  const exams = getExams();
  const streams = getStreamGuides();

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Entrance exams, decoded
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          The exams that decide your degree after Class 12 — what they test, how
          often they run, and how to prepare. Jump to your stream:
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {streams.map((s) => (
            <a
              key={s.id}
              href={`/exams#stream-${s.id}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:border-primary hover:text-primary"
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: s.color }}
              />
              {s.name}
            </a>
          ))}
        </div>
      </header>

      <section className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {streams.map((s) => {
          const ids = streamLinks[s.id] ?? [];
          return (
            <div
              key={s.id}
              id={`stream-${s.id}`}
              className="scroll-mt-24 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              style={{ borderTopColor: s.color, borderTopWidth: 3 }}
            >
              <h2 className="font-semibold text-gray-900">{s.name}</h2>
              <ul className="mt-3 space-y-2">
                {ids.map((id) => {
                  const exam = exams.find((e) => e.id === id);
                  if (!exam) return null;
                  return (
                    <li key={id}>
                      <a
                        href={`#${exam.id}`}
                        className="text-sm font-medium text-gray-600 transition-colors hover:text-primary"
                      >
                        {exam.short}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </section>

      <div className="space-y-6">
        {exams.map((exam) => (
          <section
            key={exam.id}
            id={exam.id}
            className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-primary-light px-3 py-1 text-[11px] font-bold text-primary">
                    {exam.stream === "All" ? "All streams" : `${exam.stream} stream`}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-[11px] font-semibold text-gray-600">
                    After {exam.afterClass}
                  </span>
                </div>
                <h2 className="mt-3 text-xl font-bold text-gray-900">
                  {exam.name}
                </h2>
                <p className="mt-0.5 text-sm text-gray-500">Conducted by {exam.body}</p>
              </div>
              {exam.officialSite && (
                <a
                  href={exam.officialSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
                >
                  Official site
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-4">
                <h3 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  <GraduationCap className="h-3.5 w-3.5" />
                  Leads to
                </h3>
                <ul className="mt-2.5 space-y-1.5">
                  {exam.courses.map((c) => (
                    <li key={c} className="text-sm font-medium text-gray-700">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-4">
                <h3 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  <FileQuestion className="h-3.5 w-3.5" />
                  Pattern
                </h3>
                <p className="mt-2.5 text-sm leading-6 text-gray-700">
                  {exam.pattern}
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-4">
                <h3 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  <CalendarDays className="h-3.5 w-3.5" />
                  Frequency
                </h3>
                <p className="mt-2.5 text-sm leading-6 text-gray-700">
                  {exam.frequency}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-primary-light p-4">
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <p className="text-sm leading-6 text-gray-700">{exam.advice}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
