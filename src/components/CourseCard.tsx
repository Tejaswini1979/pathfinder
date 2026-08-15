import Link from "next/link";
import { ChevronRight, Clock, GraduationCap } from "lucide-react";
import type { Course } from "@/data/courses";

interface Props {
  course: Course;
  onClick?: () => void;
}

export default function CourseCard({ course, onClick }: Props) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick();
        }
      }}
      className={`flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all ${
        onClick
          ? "cursor-pointer hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
          : ""
      }`}
    >
      <div className="flex flex-wrap gap-1.5">
        <span className="rounded-full bg-primary-light px-2.5 py-0.5 text-[11px] font-semibold text-primary">
          {course.stream}
        </span>
        <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-semibold text-gray-600">
          {course.field}
        </span>
        <span className="rounded-full bg-accent-light px-2.5 py-0.5 text-[11px] font-semibold text-rose-700">
          {course.level}
        </span>
      </div>

      <h3 className="mt-3 font-semibold leading-snug text-gray-900">
        {course.name}
      </h3>
      <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-gray-600">
        {course.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-gray-100 pt-3 text-xs text-gray-500">
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {course.duration}
        </span>
        <span className="inline-flex items-center gap-1">
          <GraduationCap className="h-3.5 w-3.5" />
          {course.eligibility}
        </span>
        {course.entranceExam !== "None" && course.entranceExam && (
          <Link
            href={`/exams`}
            onClick={(e) => e.stopPropagation()}
            className="font-medium text-primary hover:text-primary-dark"
          >
            {course.entranceExam}
          </Link>
        )}
      </div>

      {course.careerInterest.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {course.careerInterest.map((ci) => (
            <span
              key={ci}
              className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-[11px] text-gray-500"
            >
              {ci}
            </span>
          ))}
        </div>
      )}

      {onClick && (
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
          View eligibility & subjects
          <ChevronRight className="h-4 w-4" />
        </span>
      )}
    </div>
  );
}
