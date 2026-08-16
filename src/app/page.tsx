import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  FlaskConical,
  Atom,
  Briefcase,
  Palette,
  Wallet,
  GraduationCap,
  Compass,
  Map,
  BookOpen,
} from "lucide-react";
import Hero from "@/components/Hero";
import DomainCard from "@/components/DomainCard";
import { getDomainMetaList, getAllSubPaths, getSchemes } from "@/data";
import { getStreamGuides } from "@/data/streams-guide";
import { getCourses } from "@/data/courses";
import { getRoadmaps } from "@/data/roadmaps";
import { getAllStateSchemes } from "@/data/state-schemes";

const streamIcons: Record<string, typeof Atom> = {
  science: Atom,
  commerce: Briefcase,
  arts: Palette,
  vocational: FlaskConical,
};

const featureCards = [
  {
    href: "/careers",
    icon: Compass,
    title: "230+ Careers",
    desc: "15 domains, from engineering to hospitality. Most students only ever hear about 5 of them.",
  },
  {
    href: "/courses",
    icon: BookOpen,
    title: "Courses & Diplomas",
    desc: "The full course catalog — undergraduate, diploma, and vocational routes with eligibility.",
  },
  {
    href: "/roadmaps",
    icon: Map,
    title: "Step-by-step roadmaps",
    desc: "From Class 10 to your first job — exactly what to do each year for 10 major careers.",
  },
  {
    href: "/schemes",
    icon: Wallet,
    title: "Scholarships, all India",
    desc: "Central schemes for every state, plus state and UT schemes for all 28 states and 8 UTs.",
  },
];

export default function Home() {
  const domains = getDomainMetaList();
  const careerCount = getAllSubPaths().length;
  const schemeCount = getSchemes().length + getAllStateSchemes().length;
  const courseCount = getCourses().length;
  const roadmapCount = getRoadmaps().length;
  const streams = getStreamGuides();

  return (
    <div className="flex flex-col">
      <Hero
        stats={{ careerCount, courseCount, roadmapCount, schemeCount }}
      />

      <section className="bg-surface-muted">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            The 4 streams after Class 10
          </h2>
          <p className="mt-1.5 text-sm text-gray-600">
            Science, Commerce, Arts or Vocational — each opens a different world
            of careers. Compare before you decide.
          </p>
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {streams.map((stream, i) => {
              const Icon = streamIcons[stream.id] ?? Sparkles;
              return (
                <Link
                  key={stream.id}
                  href={`/streams#${stream.id}`}
                  className="group flex h-full flex-col rounded-squircle border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
                  style={{ borderTopColor: stream.color, borderTopWidth: 3 }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: stream.color }}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-medium text-gray-400">
                      Stream {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-primary">
                    {stream.name}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {stream.tagline}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {stream.futureOptions.slice(0, 4).map((opt) => (
                      <span
                        key={opt}
                        className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-medium text-gray-600"
                      >
                        {opt}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Everything you need to decide
              </h2>
              <p className="mt-1.5 text-sm text-gray-600">
                Not a directory — a complete planning toolkit for Class 10
                students.
              </p>
            </div>
          </div>
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {featureCards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group flex h-full items-start gap-4 rounded-squircle border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {card.desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface-muted">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Explore all domains
              </h2>
              <p className="mt-1.5 text-sm text-gray-600">
                From engineering to hospitality — the careers your counsellor
                never mentioned.
              </p>
            </div>
            <Link
              href="/careers"
              className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark sm:inline-flex"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {domains.map((domain) => (
              <DomainCard key={domain.id} domain={domain} />
            ))}
          </div>
          <div className="mt-6 sm:hidden">
            <Link
              href="/careers"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              View all domains
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-linear-to-br from-primary via-primary to-brand-violet">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
            <GraduationCap className="h-6 w-6" />
          </span>
          <h2 className="max-w-xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {schemeCount} scholarships, one database, all of India
          </h2>
          <p className="max-w-lg text-sm leading-6 text-white/80">
            Central schemes for every state, plus state and UT schemes for all
            28 states and 8 union territories. Filtered by income, category, and
            education level.
          </p>
          <Link
            href="/schemes"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-gray-100"
          >
            Browse scholarships
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
