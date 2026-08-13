import type { Metadata } from "next";
import { ShieldAlert, ExternalLink, Landmark, IndianRupee } from "lucide-react";
import AllIndiaSchemeExplorer from "@/components/AllIndiaSchemeExplorer";
import {
  getCentralSchemes,
  getStateSchemes,
  nationalPortals,
  getStateCount,
  educationLevelsAllIndia,
} from "@/data/schemes-all-india";

export const metadata: Metadata = {
  title: "Scholarships for All of India",
  description:
    "Browse central and state scholarships for students across India — filter by income, category and education level, with application portals for every state.",
};

export default function SchemesPage() {
  const central = getCentralSchemes();
  const state = getStateSchemes();
  const levels = educationLevelsAllIndia();
  const allSchemes = [...central, ...state];

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Scholarships — all of India
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          {central.length} central schemes apply to students in every state, and
          every state runs its own set of state schemes. We&apos;ve generalized our
          database so you can find yours from anywhere.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-gray-600">
          <span className="inline-flex items-center gap-1.5 font-medium text-emerald-700">
            <Landmark className="h-4 w-4" />
            {central.length} all-India schemes
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium text-primary">
            <IndianRupee className="h-4 w-4" />
            {state.length} state scheme examples ({getStateCount()} states have equivalents)
          </span>
        </div>
      </header>

      <div className="mb-8 flex items-start gap-3 rounded-xl border border-amber-200 bg-warning-light p-4 text-sm leading-6 text-amber-800">
        <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
        <p>
          State schemes are shown from Madhya Pradesh as worked examples — every
          Indian state runs similar pre/post-matric, merit, and need-based
          schemes. Check your own state&apos;s portal via NSP (listed below).
        </p>
      </div>

      <section className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {nationalPortals.map((portal) => (
          <div
            key={portal.name}
            className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <h2 className="font-semibold text-gray-900">{portal.name}</h2>
            <p className="mt-1.5 flex-1 text-sm leading-6 text-gray-600">
              {portal.description}
            </p>
            <p className="mt-2 text-xs font-medium text-gray-400">
              {portal.covers}
            </p>
            <a
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark"
            >
              Open portal
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        ))}
      </section>

      <AllIndiaSchemeExplorer schemes={allSchemes} educationLevels={levels} />
    </div>
  );
}
