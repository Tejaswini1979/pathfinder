import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  GraduationCap,
  Clock,
  BadgeIndianRupee,
  Banknote,
  Percent,
  Landmark,
  School,
  Sparkles,
  Wallet,
  Building2,
  TrendingUp,
  Plane,
  ShieldCheck,
} from "lucide-react";
import Flags from "@/components/Flags";
import SaveCareerButton from "@/components/SaveCareerButton";
import ShareButton from "@/components/ShareButton";
import { getAllSubPaths, getSubPath, getDomainMeta } from "@/data";

export function generateStaticParams() {
  return getAllSubPaths().map((sp) => ({ id: sp.id.toLowerCase() }));
}

export function generateMetadata({
  params,
}: PageProps<"/careers/[id]">): Promise<Metadata> {
  return params.then(({ id }) => {
    const career = getSubPath(id.toUpperCase());
    return {
      title: career?.name ?? "Career",
      description: career?.description,
    };
  });
}

const snapshotItems = [
  { key: "qualification", label: "Qualification", icon: GraduationCap },
  { key: "duration", label: "Duration", icon: Clock },
  { key: "entry_route", label: "Entry route", icon: Sparkles },
  { key: "entrance_exam", label: "Entrance exam", icon: Landmark },
  { key: "min_12th_percent", label: "Eligibility cutoff", icon: Percent },
  { key: "govt_fees", label: "Government fees", icon: Building2 },
  { key: "private_fees", label: "Private fees", icon: Banknote },
] as const;

export default async function CareerPage({ params }: PageProps<"/careers/[id]">) {
  const { id } = await params;
  const career = getSubPath(id.toUpperCase());
  if (!career) notFound();

  const domainMeta = getDomainMeta(career.domainId);

  return (
    <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-10 sm:px-6">
      <Link
        href={`/domains/${career.domainId}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        {career.domainTitle}
      </Link>

      <header className="mt-5">
        <Flags
          underrated={career.underrated}
          lowBudget={career.low_budget}
          lowPercent={career.low_percent}
        />
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {career.name}
          </h1>
          <SaveCareerButton
            id={career.id}
            name={career.name}
            domainTitle={career.domainTitle}
          />
          <ShareButton title={career.name} description={career.description} />
        </div>
        {domainMeta && (
          <span
            className="mt-3 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white"
            style={{ backgroundColor: domainMeta.color }}
          >
            {domainMeta.title}
          </span>
        )}
        <p className="mt-4 max-w-3xl leading-7 text-gray-600">
          {career.description}
        </p>
      </header>

      <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {snapshotItems.map((item) => {
          const value = career[item.key];
          if (!value) return null;
          const Icon = item.icon;
          return (
            <div
              key={item.key}
              className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-500">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  {item.label}
                </div>
                <div className="mt-0.5 text-sm font-medium leading-6 text-gray-900">
                  {value}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {career.salary_bands && (
        <section className="mt-6 rounded-2xl bg-primary-light p-6">
          <div className="flex items-center gap-2 text-primary">
            <Wallet className="h-5 w-5" />
            <h2 className="font-bold">Salary bands</h2>
          </div>
          <p className="mt-2 text-sm leading-6 text-gray-700">
            {career.salary_bands}
          </p>
        </section>
      )}

      {career.top_institutions.length > 0 && (
        <section className="mt-8">
          <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900">
            <School className="h-5 w-5 text-primary" />
            Top institutions
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {career.top_institutions.map((inst) => (
              <li
                key={inst}
                className="flex items-center gap-2.5 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {inst}
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {career.day_in_life && (
          <section>
            <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900">
              <TrendingUp className="h-5 w-5 text-primary" />
              A day in the life
            </h2>
            <p className="mt-3 rounded-xl border border-gray-200 bg-white p-4 text-sm leading-6 text-gray-700 shadow-sm">
              {career.day_in_life}
            </p>
          </section>
        )}
        {career.growth_path && (
          <section>
            <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900">
              <TrendingUp className="h-5 w-5 text-accent" />
              Growth path
            </h2>
            <p className="mt-3 rounded-xl border border-gray-200 bg-white p-4 text-sm leading-6 text-gray-700 shadow-sm">
              {career.growth_path}
            </p>
          </section>
        )}
      </div>

      {career.abroad_pathways && (
        <section className="mt-8">
          <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900">
            <Plane className="h-5 w-5 text-primary" />
            Studying / working abroad
          </h2>
          <p className="mt-3 rounded-xl border border-gray-200 bg-white p-4 text-sm leading-6 text-gray-700 shadow-sm">
            {career.abroad_pathways}
          </p>
        </section>
      )}

      {career.scholarships.length > 0 && (
        <section className="mt-8">
          <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900">
            <BadgeIndianRupee className="h-5 w-5 text-emerald-600" />
            Scholarships available
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {career.scholarships.map((s) => (
              <Link
                key={s}
                href="/scholarships"
                className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-700 shadow-sm transition-colors hover:border-emerald-300 hover:bg-accent-light"
              >
                {s}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-10 flex items-center gap-2 border-t border-gray-200 pt-6 text-xs text-gray-400">
        <ShieldCheck className="h-4 w-4" />
        Data confidence: {career.confidence}. Sources are listed per career in
        the database.
      </section>
    </div>
  );
}
