import Link from "next/link";
import {
  ArrowRight,
  Atom,
  BookOpen,
  Brain,
  Briefcase,
  Code2,
  Cpu,
  Database,
  FlaskConical,
  GraduationCap,
  Layers,
  Laptop,
  MonitorSmartphone,
  Palette,
  PenTool,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CategoryCard from "@/components/CategoryCard";
import HomeCourseCard from "@/components/HomeCourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import SchemeCard from "@/components/SchemeCard";
import { getAllSubPaths, getSchemes } from "@/data";
import { getAllStateSchemes } from "@/data/state-schemes";
import { getCourses, getCourse, type Course } from "@/data/courses";
import { getRoadmaps } from "@/data/roadmaps";
import { getStreamGuides } from "@/data/streams-guide";

const streamIcons: Record<string, typeof Atom> = {
  science: Atom,
  commerce: Briefcase,
  arts: Palette,
  vocational: FlaskConical,
};

const featuredSchemeNames = [
  "Central Sector Scheme of Scholarship for College and University Students (CSSS)",
  "National Means-cum-Merit Scholarship (NMMS)",
  "INSPIRE Scholarship for Higher Education (SHE)",
];

const whyCards = [
  {
    icon: Layers,
    title: "Interactive Learning",
    description: "Learn through engaging and structured content.",
  },
  {
    icon: GraduationCap,
    title: "Expert Guidance",
    description: "Learn from experienced instructors and practical resources.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    description: "Monitor your learning journey and improve continuously.",
  },
  {
    icon: MonitorSmartphone,
    title: "Learn Anywhere",
    description: "Access your learning experience across devices.",
  },
];

const categories = [
  { icon: Cpu, title: "Technology", href: "/domains/eng" },
  { icon: Database, title: "Data Science", href: "/careers" },
  { icon: Brain, title: "Artificial Intelligence", href: "/careers" },
  { icon: Code2, title: "Web Development", href: "/careers" },
  { icon: ShieldCheck, title: "Cyber Security", href: "/careers" },
  { icon: PenTool, title: "Design", href: "/domains/des" },
];

const popularCourseIds = [
  "btech-cse",
  "btech-ai-ml",
  "bca",
  "mbbs",
  "bba",
  "bcom",
];

const steps = [
  {
    icon: BookOpen,
    title: "Choose a Course",
    description:
      "Browse courses, domains, and careers to find what fits your interests.",
  },
  {
    icon: Laptop,
    title: "Learn & Practice",
    description:
      "Follow step-by-step roadmaps, check exams, and build your skills.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    description:
      "Save what matters and track your journey with learning checkpoints.",
  },
];

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Class 10 · Science",
    quote:
      "The career quiz helped me discover engineering paths I never knew existed. I now have a clear roadmap for my preparation.",
    initials: "AS",
  },
  {
    name: "Diya Patel",
    role: "Class 10 · Commerce",
    quote:
      "I found scholarships and courses that fit my family's budget. The step-by-step guide kept me focused through Class 12.",
    initials: "DP",
  },
  {
    name: "Rohan Verma",
    role: "Class 10 · Arts",
    quote:
      "I discovered design careers far beyond graphic design. The roadmap made everything feel achievable and clear.",
    initials: "RV",
  },
];

export default function Home() {
  const careerCount = getAllSubPaths().length;
  const schemeCount = getSchemes().length + getAllStateSchemes().length;
  const courseCount = getCourses().length;
  const roadmapCount = getRoadmaps().length;

  const streams = getStreamGuides();

  const featuredSchemes = getSchemes()
    .filter((s) => featuredSchemeNames.includes(s.scheme_name))
    .slice(0, 3);

  const popularCourses = popularCourseIds
    .map(getCourse)
    .filter((c): c is Course => Boolean(c));

  const stats = [
    { value: `${careerCount}+`, label: "Careers explored" },
    { value: `${courseCount}+`, label: "Courses & diplomas" },
    { value: `${roadmapCount}+`, label: "Step-by-step roadmaps" },
    { value: `${schemeCount}+`, label: "Scholarships" },
  ];

  return (
    <div className="flex flex-col">
      <Hero stats={{ careerCount, courseCount, roadmapCount, schemeCount }} />

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <div className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                <span className="bg-linear-to-r from-primary to-brand-violet bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </div>
              <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="After Class 10"
            title="The 4 streams after Class 10"
            subtitle="Science, Commerce, Arts or Vocational — each opens a different world of courses and careers. Compare before you decide."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {streams.map((stream, i) => {
              const Icon = streamIcons[stream.id] ?? BookOpen;
              return (
                <Link
                  key={stream.id}
                  href={`/streams#${stream.id}`}
                  className="group flex h-full flex-col rounded-squircle border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderTopColor: stream.color, borderTopWidth: 3 }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                      style={{ backgroundColor: stream.color }}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      Stream {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-slate-900 group-hover:text-primary">
                    {stream.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-500">
                    {stream.tagline}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {stream.futureOptions.slice(0, 4).map((opt) => (
                      <span
                        key={opt}
                        className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600"
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
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Why choose us"
            title="Why choose our platform?"
            subtitle="Everything you need to discover, plan, and prepare for your future — in one place."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group rounded-squircle border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary transition-colors group-hover:bg-linear-to-br group-hover:from-primary group-hover:to-brand-violet group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-500">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Categories"
            title="Explore by category"
            subtitle="Jump straight into the areas you care about and find the right path faster."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <CategoryCard key={cat.title} {...cat} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Courses"
              title="Popular Courses"
              subtitle="Explore popular courses with real eligibility, duration, and entrance exam details."
            />
            <Link
              href="/courses"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              View all courses
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularCourses.map((course) => (
              <HomeCourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Scholarships"
              title="Schemes & Scholarships"
              subtitle="Central and state schemes to fund your education — filtered by income, category, and level."
            />
            <Link
              href="/schemes"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              View all schemes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {featuredSchemes.map((scheme) => (
              <SchemeCard key={scheme.scheme_id} scheme={scheme} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="How it works"
            title="Start learning in three steps"
            center
          />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-brand-violet text-white shadow-md shadow-primary/25">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-5 font-display text-5xl font-bold text-slate-100">
                    0{i + 1}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Testimonials"
            title="What our learners say"
            subtitle="Students across India use PathFinder to discover their path after Class 10."
            center
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
