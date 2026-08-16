import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { DomainMeta } from "@/data/types";

export default function DomainCard({ domain }: { domain: DomainMeta }) {
  return (
    <Link
      href={`/domains/${domain.id}`}
      className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
      style={{ borderTopColor: domain.color, borderTopWidth: 3 }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold leading-snug text-gray-900 group-hover:text-primary">
          {domain.title}
        </h3>
        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-gray-300 transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>
      <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
        {domain.tagline}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-gray-100 pt-3 text-xs text-gray-500">
        <span>
          <span className="font-semibold text-gray-900">
            {domain.subPathCount}
          </span>{" "}
          careers
        </span>
        {domain.underratedCount > 0 && (
          <span>
            <span className="font-semibold text-amber-600">
              {domain.underratedCount}
            </span>{" "}
            gems
          </span>
        )}
        {domain.lowBudgetCount > 0 && (
          <span>
            <span className="font-semibold text-rose-600">
              {domain.lowBudgetCount}
            </span>{" "}
            low-budget
          </span>
        )}
      </div>
    </Link>
  );
}
