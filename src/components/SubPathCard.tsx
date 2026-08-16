import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import type { SubPath } from "@/data/types";
import Flags from "@/components/Flags";

export default function SubPathCard({ career }: { career: SubPath }) {
  return (
    <Link
      href={`/careers/${career.id.toLowerCase()}`}
      className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
    >
      <Flags
        underrated={career.underrated}
        lowBudget={career.low_budget}
        lowPercent={career.low_percent}
      />
      <div className="mt-2.5 flex items-start justify-between gap-3">
        <h3 className="font-semibold leading-snug text-gray-900 group-hover:text-primary">
          {career.name}
        </h3>
        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-gray-300 transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>
      <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-gray-600">
        {career.description}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-t border-gray-100 pt-3 text-xs text-gray-500">
        <span className="font-medium text-gray-900">
          {career.qualification}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {career.duration}
        </span>
        <span>{career.entrance_exam}</span>
      </div>
    </Link>
  );
}
