import Link from "next/link";
import { ArrowRight, Clock, GraduationCap, Layers } from "lucide-react";
import type { Course } from "@/data/courses";

export default function HomeCourseCard({ course }: { course: Course }) {
  return (
    <Link
      href="/courses"
      className="group flex h-full flex-col rounded-squircle border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary">
          <GraduationCap className="h-6 w-6" />
        </span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">
          {course.level}
        </span>
      </div>

      <h3 className="mt-4 font-display text-base font-semibold leading-snug text-slate-900 line-clamp-2">
        {course.name}
      </h3>
      <p className="mt-1.5 text-sm leading-6 text-slate-500 line-clamp-2">
        {course.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-slate-100 pt-4 text-xs text-slate-500">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          {course.duration}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Layers className="h-3.5 w-3.5" />
          {course.stream}
        </span>
      </div>

      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary">
        View Course
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
