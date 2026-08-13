import type { Metadata } from "next";
import { Compass, Database, BookOpen, Wallet, Sparkles, ShieldCheck } from "lucide-react";
import {
  getDomainMetaList,
  getAllSubPaths,
  getSchemes,
} from "@/data";
import { getCourses } from "@/data/courses";
import { getRoadmaps } from "@/data/roadmaps";
import { getExams } from "@/data/exams";

export const metadata: Metadata = {
  title: "About",
  description:
    "About PathFinder — the complete career guidance toolkit for Indian students after Class 10.",
};

const pillars = [
  {
    icon: Database,
    title: "Real career data",
    desc: "230+ careers across 15 domains, researched from official sources — not a vague 'scope' article.",
  },
  {
    icon: BookOpen,
    title: "Complete course catalog",
    desc: "Courses, degrees and diplomas with eligibility and entrance exams, so you know every route.",
  },
  {
    icon: Sparkles,
    title: "Entrance exams decoded",
    desc: "JEE to NIFT — pattern, frequency, and honest prep advice for every major exam.",
  },
  {
    icon: Compass,
    title: "Step-by-step roadmaps",
    desc: "Year-by-year paths from Class 10 to your first job for the most-asked careers.",
  },
  {
    icon: Wallet,
    title: "Scholarships for all India",
    desc: "Central schemes for every state plus state scheme examples and the portals that matter.",
  },
  {
    icon: ShieldCheck,
    title: "Checked & current",
    desc: "Data compiled from official government portals and public sources, with sources noted per career.",
  },
];

export default function AboutPage() {
  const careerCount = getAllSubPaths().length;
  const domainCount = getDomainMetaList().length;
  const courseCount = getCourses().length;
  const schemeCount = getSchemes().length;
  const roadmapCount = getRoadmaps().length;
  const examCount = getExams().length;

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
      <header className="mb-10 max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Why PathFinder exists
        </h1>
        <p className="mt-3 text-lg leading-8 text-gray-600">
          Most Class 10 students hear about five careers — doctor, engineer,
          lawyer, CA, teacher. PathFinder opens the other 225. It is a
          decision-making toolkit built around the one choice that shapes
          everything: your stream.
        </p>
      </header>

      <section className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {[
          { value: `${careerCount}+`, label: "Careers" },
          { value: `${domainCount}`, label: "Domains" },
          { value: `${courseCount}`, label: "Courses" },
          { value: `${examCount}`, label: "Exams" },
          { value: `${roadmapCount}`, label: "Roadmaps" },
          { value: `${schemeCount}`, label: "Schemes" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm"
          >
            <div className="text-2xl font-bold text-primary">{stat.value}</div>
            <div className="mt-0.5 text-xs font-medium text-gray-500">
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          What you get here
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 font-semibold text-gray-900">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-gray-600">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-10 rounded-2xl bg-primary p-8 text-center text-white">
        <h2 className="text-2xl font-bold tracking-tight">
          Not sure where to start?
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-white/80">
          The quiz takes 30 seconds and recommends domains based on your stream
          and what you enjoy.
        </p>
        <a
          href="/quiz"
          className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-gray-100"
        >
          <Sparkles className="h-4 w-4" />
          Take the career quiz
        </a>
      </section>
    </div>
  );
}
