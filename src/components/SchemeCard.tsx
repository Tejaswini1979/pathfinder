import { ExternalLink, IndianRupee, Users, Calendar } from "lucide-react";
import type { Scheme } from "@/data/scheme-types";

export default function SchemeCard({ scheme }: { scheme: Scheme }) {
  const isState = scheme.category === "STATE";
  const monetary = scheme.benefit_details?.monetary;
  const economic = scheme.eligibility?.economic;
  const timeline = scheme.timeline;

  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
            isState
              ? "bg-primary-light text-primary"
              : "bg-accent-light text-emerald-700"
          }`}
        >
          {isState ? (scheme.state ?? "State") : "All-India"}
        </span>
        <span className="font-mono text-[11px] text-gray-400">
          {scheme.scheme_id}
        </span>
      </div>

      <h3 className="mt-2.5 font-semibold leading-snug text-gray-900">
        {scheme.scheme_name}
      </h3>

      <div className="mt-3 flex-1 space-y-2 text-sm text-gray-600">
        {monetary?.scholarship_amount_description && (
          <p className="flex items-start gap-2">
            <IndianRupee className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>{monetary.scholarship_amount_description}</span>
          </p>
        )}
        {economic?.family_income_limit && (
          <p className="flex items-start gap-2">
            <Users className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
            <span>{economic.family_income_limit}</span>
          </p>
        )}
        {timeline?.application_start && (
          <p className="flex items-start gap-2">
            <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
            <span>
              Opens {timeline.application_start.toLowerCase().replace("tentatively ", "~ ")}
            </span>
          </p>
        )}
      </div>

      {scheme.official_website && (
        <a
          href={scheme.official_website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark"
        >
          Apply on official portal
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  );
}
