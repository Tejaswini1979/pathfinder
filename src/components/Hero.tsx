import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  GraduationCap,
  Map,
  TrendingUp,
  CheckCircle2,
  Wallet,
} from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

interface Stats {
  careerCount: number;
  courseCount: number;
  roadmapCount: number;
  schemeCount: number;
}

const features = [
  {
    icon: BookOpen,
    title: "Courses",
    description: "Learn from structured courses",
  },
  {
    icon: GraduationCap,
    title: "Practice",
    description: "Improve your skills through practice",
  },
  {
    icon: TrendingUp,
    title: "Progress",
    description: "Track your learning journey",
  },
];

export default function Hero({ stats }: { stats: Stats }) {
  const chips = [
    { icon: BookOpen, value: `${stats.careerCount}+`, label: "Careers explored" },
    { icon: GraduationCap, value: `${stats.courseCount}`, label: "Courses" },
    { icon: Map, value: `${stats.roadmapCount}`, label: "Roadmaps" },
    { icon: Wallet, value: `${stats.schemeCount}+`, label: "Scholarships" },
  ];

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute -top-32 right-[8%] h-96 w-96 rounded-full bg-brand-blue/15 blur-3xl" />
        <span className="absolute -left-32 top-1/4 h-[26rem] w-[26rem] rounded-full bg-brand-violet/15 blur-3xl" />
        <span className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 sm:pt-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-fade-up text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-primary shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Courses After Class 10
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
              Choose the right course{" "}
              <span className="bg-linear-to-r from-primary to-brand-violet bg-clip-text text-transparent">
                after Class 10.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-500 lg:mx-0">
              Explore {stats.courseCount} courses, 4 streams, and{" "}
              {stats.careerCount} careers after Class 10 — then back your choice
              with scholarships, step-by-step roadmaps, and exam guidance.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/courses"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-primary to-brand-violet px-7 text-base font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
              >
                Explore Courses
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/schemes"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 text-base font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:w-auto"
              >
                Browse Schemes
              </Link>
            </div>

            <Link
              href="/quiz"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              Not sure where to start? Take the quiz
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500 lg:justify-start">
              {chips.map((chip) => (
                <span key={chip.label} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  {chip.value} {chip.label}
                </span>
              ))}
            </div>
          </div>

          <div
            className="relative mx-auto hidden h-[460px] w-full max-w-md lg:block"
            aria-hidden="true"
          >
            <span className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-primary/10 to-brand-violet/10" />

            <div className="absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 rounded-[24px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <TrendingUp className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  Your progress
                </span>
              </div>
              <div className="mt-5">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-3xl font-bold text-slate-900">
                    94%
                  </span>
                  <span className="text-xs font-medium text-emerald-600">
                    +12% this week
                  </span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[94%] rounded-full bg-linear-to-r from-primary to-brand-violet" />
                </div>
              </div>
              <div className="mt-4 border-t border-slate-100 pt-4 text-xs text-slate-500">
                Career match · Based on your interests
              </div>
            </div>

            <div className="absolute left-0 top-4 animate-float rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-900/5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-light text-primary">
                <BookOpen className="h-4.5 w-4.5" />
              </span>
              <div className="mt-2 font-display text-lg font-bold text-slate-900">
                {stats.careerCount}+
              </div>
              <div className="text-[11px] font-medium text-slate-500">
                Careers explored
              </div>
            </div>

            <div className="absolute right-0 top-20 animate-float-delayed rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-900/5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary-light text-secondary">
                <GraduationCap className="h-4.5 w-4.5" />
              </span>
              <div className="mt-2 font-display text-lg font-bold text-slate-900">
                {stats.courseCount}
              </div>
              <div className="text-[11px] font-medium text-slate-500">
                Courses & diplomas
              </div>
            </div>

            <div className="absolute bottom-10 left-6 animate-float rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-900/5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Map className="h-4.5 w-4.5" />
              </span>
              <div className="mt-2 font-display text-lg font-bold text-slate-900">
                {stats.roadmapCount}
              </div>
              <div className="text-[11px] font-medium text-slate-500">
                Step-by-step roadmaps
              </div>
            </div>

            <div className="absolute bottom-4 right-4 animate-float-delayed rounded-2xl border border-slate-200 bg-white p-4 shadow-lg shadow-slate-900/5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                <Wallet className="h-4.5 w-4.5" />
              </span>
              <div className="mt-2 font-display text-lg font-bold text-slate-900">
                {stats.schemeCount}+
              </div>
              <div className="text-[11px] font-medium text-slate-500">
                Scholarships
              </div>
            </div>

            <span className="absolute left-1/2 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-violet/30" />
            <Sparkles className="absolute bottom-0 right-0 h-7 w-7 text-primary/25" />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
