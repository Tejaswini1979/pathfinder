"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { DomainMeta, StreamMeta } from "@/data/types";
import DomainCard from "@/components/DomainCard";

interface Props {
  domains: DomainMeta[];
  streams: StreamMeta[];
  streamMap: Record<string, string[]>;
  initialStream?: string;
}

export default function DomainExplorer({
  domains,
  streams,
  streamMap,
  initialStream,
}: Props) {
  const [query, setQuery] = useState("");
  const [stream, setStream] = useState<string | undefined>(
    initialStream ?? "all"
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return domains.filter((d) => {
      if (stream && stream !== "all" && !streamMap[d.id]?.includes(stream))
        return false;
      if (q) {
        const haystack = `${d.title} ${d.tagline}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [domains, streamMap, stream, query]);

  return (
    <div>
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search domains… e.g. design, medicine"
          className="h-11 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-900 shadow-sm outline-none transition-colors placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setStream("all")}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            stream === "all"
              ? "bg-primary text-white"
              : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300"
          }`}
        >
          All streams
        </button>
        {streams.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setStream(s.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              stream === s.id
                ? "bg-primary text-white"
                : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300"
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-gray-500">
        {filtered.length} domain{filtered.length === 1 ? "" : "s"}
        {stream !== "all" &&
          ` in ${streams.find((s) => s.id === stream)?.title ?? ""}`}
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((domain) => (
          <DomainCard key={domain.id} domain={domain} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 rounded-xl border border-dashed border-gray-300 p-10 text-center text-sm text-gray-500">
          No domains match your search.
        </div>
      )}
    </div>
  );
}
