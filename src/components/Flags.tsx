import type { SubPath } from "@/data/types";

const styles = {
  underrated: {
    label: "Underrated gem",
    className: "bg-warning-light text-amber-700",
  },
  lowBudget: {
    label: "Low budget",
    className: "bg-accent-light text-rose-700",
  },
  lowPercent: {
    label: "Low cutoff",
    className: "bg-primary-light text-primary",
  },
} as const;

interface FlagsProps {
  underrated: SubPath["underrated"];
  lowBudget: SubPath["low_budget"];
  lowPercent: SubPath["low_percent"];
}

export default function Flags({
  underrated,
  lowBudget,
  lowPercent,
}: FlagsProps) {
  const flags = [
    underrated && styles.underrated,
    lowBudget && styles.lowBudget,
    lowPercent && styles.lowPercent,
  ].filter(Boolean) as (typeof styles)[keyof typeof styles][];

  if (flags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5">
      {flags.map((flag) => (
        <span
          key={flag.label}
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${flag.className}`}
        >
          {flag.label}
        </span>
      ))}
    </div>
  );
}
