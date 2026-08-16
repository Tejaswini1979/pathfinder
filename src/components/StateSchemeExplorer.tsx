"use client";

import { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Landmark,
  MapPin,
  Minus,
  Plus,
  Search,
} from "lucide-react";
import type {
  StateUt,
  StateRegion,
  StateSchemeCategory,
} from "@/data/state-schemes";
import {
  regionLabels,
  stateCategoryLabels,
} from "@/data/state-schemes";
import StateSchemeCard from "@/components/StateSchemeCard";

interface Props {
  states: StateUt[];
}

type RegionFilter = StateRegion | "ALL";

const regionKeys: RegionFilter[] = [
  "ALL",
  "NORTH",
  "SOUTH",
  "EAST",
  "WEST",
  "CENTRAL",
  "NORTH_EAST",
  "UT",
];

export default function StateSchemeExplorer({ states }: Props) {
  const [region, setRegion] = useState<RegionFilter>("ALL");
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [category, setCategory] = useState<StateSchemeCategory | "ALL">("ALL");
  const [query, setQuery] = useState("");
  const [stateQuery, setStateQuery] = useState("");
  const [showStates, setShowStates] = useState(false);

  const filteredStates = useMemo(() => {
    const list =
      region === "ALL" ? states : states.filter((s) => s.region === region);
    return [...list].sort((a, b) => a.name.localeCompare(b.name));
  }, [states, region]);

  const q = stateQuery.trim().toLowerCase();

  const visibleStates = useMemo(() => {
    if (!q) return filteredStates;
    return filteredStates.filter((s) => s.name.toLowerCase().includes(q));
  }, [filteredStates, q]);

  const active =
    visibleStates.find((s) => s.name === selectedName) ?? visibleStates[0];
  const activeIndex = active ? visibleStates.indexOf(active) : -1;

  const goTo = (index: number) => {
    const target = visibleStates[index];
    if (target) setSelectedName(target.name);
  };

  const categoryKeys = useMemo(() => {
    const all = stateCategoryLabels as Record<StateSchemeCategory, string>;
    return Object.keys(all) as StateSchemeCategory[];
  }, []);

  const activeSchemes = useMemo(() => {
    if (!active) return [];
    const q = query.trim().toLowerCase();
    return active.schemes.filter((s) => {
      if (category !== "ALL" && s.category !== category) return false;
      if (q) {
        const haystack = [s.name, s.benefit, s.eligibility, s.educationLevel]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [active, category, query]);

  return (
    <div>
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="search"
          value={stateQuery}
          onChange={(e) => {
            setStateQuery(e.target.value);
            setShowStates(true);
          }}
          placeholder="Search your state… e.g. Karnataka, Tamil Nadu"
          className="h-11 w-full rounded-squircle border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-900 shadow-sm outline-none transition-colors placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {regionKeys.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => {
              setRegion(r);
              setSelectedName(null);
            }}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              region === r
                ? "bg-primary text-white"
                : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300"
            }`}
          >
            {regionLabels[r]}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {q ? (
          <p className="text-sm text-gray-500">
            {visibleStates.length} state
            {visibleStates.length === 1 ? "" : "s"} matching &quot;
            {stateQuery.trim()}&quot;
          </p>
        ) : (
          <button
            type="button"
            onClick={() => setShowStates((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-primary/50 hover:text-primary"
          >
            {showStates ? (
              <>
                <Minus className="h-4 w-4" />
                Hide states
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" />
                Show states ({filteredStates.length})
              </>
            )}
          </button>
        )}
      </div>

      {(showStates || q) && (
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {visibleStates.map((s) => (
            <button
              key={s.name}
              type="button"
              onClick={() => setSelectedName(s.name)}
              className={`flex items-center gap-2 rounded-squircle border px-3 py-2 text-left text-sm font-medium transition-colors ${
                active?.name === s.name
                  ? "border-primary bg-primary text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-primary/50 hover:bg-primary-light/50"
              }`}
            >
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{s.name}</span>
            </button>
          ))}
        </div>
      )}

      {q && visibleStates.length === 0 && (
        <div className="mt-6 rounded-squircle border border-dashed border-gray-300 p-8 text-center text-sm text-gray-500">
          No state matches &quot;{stateQuery.trim()}&quot;. Try a different name.
        </div>
      )}

      {active && (
        <>
          <div className="mt-6 flex flex-col gap-4 rounded-squircle border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
              <Landmark className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-gray-900">{active.portalName}</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                {active.portalNote}
              </p>
              {active.directoryCount && (
                <p className="mt-1 text-xs font-medium text-gray-400">
                  ~{active.directoryCount} scheme groups listed on the directory
                </p>
              )}
              <a
                href={active.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark"
              >
                Open {active.type === "UT" ? "UT" : "state"} portal
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="flex shrink-0 items-center gap-2 sm:flex-col sm:items-end">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => goTo(activeIndex - 1)}
                  disabled={activeIndex <= 0}
                  aria-label="Previous state alphabetically"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-colors hover:border-primary/50 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-gray-600"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(activeIndex + 1)}
                  disabled={activeIndex < 0 || activeIndex >= visibleStates.length - 1}
                  aria-label="Next state alphabetically"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-colors hover:border-primary/50 hover:text-primary disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-gray-200 disabled:hover:text-gray-600"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs font-medium text-gray-400">
                A–Z · {activeIndex + 1} of {visibleStates.length}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search schemes in ${active.name}…`}
                className="h-11 w-full rounded-squircle border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-900 shadow-sm outline-none transition-colors placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setCategory("ALL")}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  category === "ALL"
                    ? "bg-primary text-white"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                }`}
              >
                All
              </button>
              {categoryKeys.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    category === c
                      ? "bg-primary text-white"
                      : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {stateCategoryLabels[c]}
                </button>
              ))}
            </div>

            <p className="mt-4 text-sm text-gray-500">
              {activeSchemes.length} scheme{activeSchemes.length === 1 ? "" : "s"} in{" "}
              {active.name}
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {activeSchemes.map((scheme) => (
                <StateSchemeCard key={scheme.id} scheme={scheme} />
              ))}
            </div>

            {activeSchemes.length === 0 && (
              <div className="mt-10 rounded-squircle border border-dashed border-gray-300 p-10 text-center text-sm text-gray-500">
                No schemes match your filters in {active.name}.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
