import type { Metadata } from "next";
import { ExternalLink, Landmark, IndianRupee } from "lucide-react";
import AllIndiaSchemeExplorer from "@/components/AllIndiaSchemeExplorer";
import StateSchemeExplorer from "@/components/StateSchemeExplorer";
import EducationBackdrop from "@/components/EducationBackdrop";
import {
  getCentralSchemes,
  getStateSchemes,
  nationalPortals,
  educationLevelsAllIndia,
} from "@/data/schemes-all-india";
import {
  getStatesUts,
  getStateCount,
  getUtCount,
  getAllStateSchemes,
} from "@/data/state-schemes";

export const metadata: Metadata = {
  title: "Scholarships for All of India",
  description:
    "Browse central and state scholarships for students across India — filter by income, category and education level, with application portals for every state and union territory.",
};

export default function SchemesPage() {
  const central = getCentralSchemes();
  const state = getStateSchemes();
  const levels = educationLevelsAllIndia();
  const allSchemes = [...central, ...state];
  const statesUts = getStatesUts();
  const stateSchemes = getAllStateSchemes();
  const stateCount = getStateCount();
  const utCount = getUtCount();

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
      <header className="relative mb-8 overflow-hidden rounded-2xl border border-gray-200 bg-white px-6 py-8 sm:px-8">
        <EducationBackdrop />
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Scholarships — all of India
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          {central.length} central schemes apply to students in every state and
          union territory, and each of the {stateCount} states and {utCount} UTs
          runs its own set of schemes. Pick your state below to see what&apos;s
          available.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-gray-600">
          <span className="inline-flex items-center gap-1.5 font-medium text-rose-700">
            <Landmark className="h-4 w-4" />
            {central.length} all-India schemes
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium text-primary">
            <IndianRupee className="h-4 w-4" />
            {stateSchemes.length} state &amp; UT schemes across {stateCount}{" "}
            states + {utCount} UTs
          </span>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold tracking-tight text-gray-900">
          Select your state
        </h2>
        <StateSchemeExplorer states={statesUts} />
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-bold tracking-tight text-gray-900">
          National scholarship portals
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nationalPortals.map((portal) => (
            <div
              key={portal.name}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold text-gray-900">{portal.name}</h3>
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
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold tracking-tight text-gray-900">
          All-India schemes
        </h2>
        <AllIndiaSchemeExplorer schemes={allSchemes} educationLevels={levels} />
      </section>
    </div>
  );
}
