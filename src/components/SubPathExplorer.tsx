"use client";

import { useMemo, useState } from "react";
import { Search, Sparkles, IndianRupee, Percent } from "lucide-react";
import type { SubPath } from "@/data/types";
import SubPathCard from "@/components/SubPathCard";

interface Props {
  careers: SubPath[];
}

const filters = [
  { key: "underrated", label: "Underrated gems", icon: Sparkles },
  { key: "lowBudget", label: "Low budget", icon: IndianRupee },
  { key: "lowPercent", label: "Low cutoff", icon: Percent },
] as const;

type FilterKey = (typeof filters)[number]["key"];

export default function SubPathExplorer({ careers }: Props) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Set<FilterKey>>(new Set());

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return careers.filter((c) => {
      if (active.size > 0) {
        if (active.has("underrated") && !c.underrated) return false;
        if (active.has("lowBudget") && !c.low_budget) return false;
        if (active.has("lowPercent") && !c.low_percent) return false;
      }
      if (q) {
        const haystack = `${c.name} ${c.description} ${c.qualification}`
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [careers, query, active]);

  const toggle = (key: FilterKey) => {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <div>
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search careers…"
          className="h-11 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-900 shadow-sm outline-none transition-colors placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {filters.map((f) => {
          const isOn = active.has(f.key);
          const Icon = f.icon;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => toggle(f.key)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                isOn
                  ? "bg-primary text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300"
              }`}
            >
              <Icon className="h-4 w-4" />
              {f.label}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-gray-500">
        {filtered.length} career{filtered.length === 1 ? "" : "s"}
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((career) => (
          <SubPathCard key={career.id} career={career} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 rounded-xl border border-dashed border-gray-300 p-10 text-center text-sm text-gray-500">
          No careers match your filters.
        </div>
      )}
    </div>
  );
}
