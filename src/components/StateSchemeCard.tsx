import { ExternalLink, IndianRupee, Users } from "lucide-react";
import type { StateScheme } from "@/data/state-schemes";
import { stateCategoryLabels } from "@/data/state-schemes";

export default function StateSchemeCard({ scheme }: { scheme: StateScheme }) {
  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <span className="inline-flex w-fit items-center rounded-full bg-primary-light px-2.5 py-0.5 text-[11px] font-semibold text-primary">
        {stateCategoryLabels[scheme.category]}
      </span>

      <h3 className="mt-2.5 font-semibold leading-snug text-gray-900">
        {scheme.name}
      </h3>

      <div className="mt-3 flex-1 space-y-2 text-sm text-gray-600">
        <p className="flex items-start gap-2">
          <IndianRupee className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          <span>{scheme.benefit}</span>
        </p>
        <p className="flex items-start gap-2">
          <Users className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
          <span>{scheme.eligibility}</span>
        </p>
      </div>

      <p className="mt-3 text-xs font-medium uppercase tracking-wide text-gray-400">
        {scheme.educationLevel}
      </p>

      {scheme.url && (
        <a
          href={scheme.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark"
        >
          More details
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  );
}
