"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Course } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import CourseDetailModal from "@/components/CourseDetailModal";

interface Props {
  courses: Course[];
  streams: string[];
  levels: string[];
}

export default function CourseExplorer({ courses, streams, levels }: Props) {
  const [query, setQuery] = useState("");
  const [stream, setStream] = useState("all");
  const [level, setLevel] = useState("all");
  const [selected, setSelected] = useState<Course | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses.filter((c) => {
      if (stream !== "all" && c.stream !== stream) return false;
      if (level !== "all" && c.level !== level) return false;
      if (q) {
        const haystack = `${c.name} ${c.field} ${c.eligibility} ${c.description} ${c.careerInterest.join(" ")}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [courses, query, stream, level]);

  return (
    <div>
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search courses, fields, interests…"
          className="h-11 w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm text-gray-900 shadow-sm outline-none transition-colors placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {["all", ...streams].map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStream(s)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              stream === s
                ? "bg-primary text-white"
                : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300"
            }`}
          >
            {s === "all" ? "All streams" : s}
          </button>
        ))}
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="ml-auto h-8 rounded-full border border-gray-200 bg-white px-3 text-sm font-medium text-gray-600 outline-none transition-colors hover:border-gray-300 focus:border-primary"
        >
          <option value="all">All levels</option>
          {levels.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        {filtered.length} course{filtered.length === 1 ? "" : "s"}
        {stream !== "all" && ` in ${stream}`}
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onClick={() => setSelected(course)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 rounded-2xl border border-dashed border-gray-300 p-10 text-center text-sm text-gray-500">
          No courses match your filters.
        </div>
      )}

      <CourseDetailModal
        course={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
