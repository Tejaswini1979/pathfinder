"use client";

import { useMemo, useState } from "react";
import { Minus, Plus, Search } from "lucide-react";
import type { AllIndiaScheme } from "@/data/schemes-all-india";
import SchemeCard from "@/components/SchemeCard";

interface Props {
  schemes: AllIndiaScheme[];
  educationLevels: string[];
}

export default function AllIndiaSchemeExplorer({ schemes, educationLevels }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"ALL" | "CENTRAL" | "STATE">("ALL");
  const [level, setLevel] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return schemes.filter((s) => {
      if (category !== "ALL" && s.coverage !== category) return false;
      if (level !== "all" && !s.education_coverage?.education_level?.includes(level)) {
        return false;
      }
      if (q) {
        const haystack = [
          s.scheme_name,
          s.scheme_id,
          ...(s.alternate_names ?? []),
          s.notes ?? "",
          s.appliesTo,
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [schemes, query, category, level]);

  const categoryPills = [
    { key: "ALL", label: "All schemes" },
    { key: "CENTRAL", label: "All-India" },
    { key: "STATE", label: "State schemes" },
  ] as const;

  const centralCount = schemes.filter((s) => s.coverage === "CENTRAL").length;
  const stateCount = schemes.length - centralCount;

  return (
    <div>
      <p className="text-sm leading-6 text-gray-600">
        {centralCount} central schemes apply in every state and union territory,
        and {stateCount} schemes are specific to individual states and UTs.
        Search below, or expand the filters to browse by category and education
        level.
      </p>

      <div className="relative mt-4">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search scholarships… e.g. NMMS, Post Matric"
          className="h-11 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-900 shadow-sm outline-none transition-colors placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="mt-4">
        <button
          type="button"
          onClick={() => setShowAll((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-primary/50 hover:text-primary"
        >
          {showAll ? (
            <>
              <Minus className="h-4 w-4" />
              Hide schemes
            </>
          ) : (
            <>
              <Plus className="h-4 w-4" />
              Show schemes ({schemes.length})
            </>
          )}
        </button>
      </div>

      {showAll && (
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {categoryPills.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setCategory(c.key)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  category === c.key
                    ? "bg-primary text-white"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                }`}
              >
                {c.label}
              </button>
            ))}
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="h-8 rounded-full border border-gray-200 bg-white px-3 text-sm font-medium text-gray-600 outline-none transition-colors hover:border-gray-300 focus:border-primary"
            >
              <option value="all">All education levels</option>
              {educationLevels.map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl.replace(/_/g, " ").toLowerCase()}
                </option>
              ))}
            </select>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            {filtered.length} scheme{filtered.length === 1 ? "" : "s"}
            {category === "CENTRAL" && " — apply from any state"}
            {category === "STATE" && " — every state and union territory"}
          </p>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((scheme) => (
              <SchemeCard key={scheme.scheme_id} scheme={scheme} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-10 rounded-xl border border-dashed border-gray-300 p-10 text-center text-sm text-gray-500">
              No schemes match your filters.
            </div>
          )}
        </div>
      )}

      {!showAll && query.trim() && (
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            {filtered.length} scheme{filtered.length === 1 ? "" : "s"} found
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((scheme) => (
              <SchemeCard key={scheme.scheme_id} scheme={scheme} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="mt-6 rounded-xl border border-dashed border-gray-300 p-10 text-center text-sm text-gray-500">
              No schemes match your search.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
