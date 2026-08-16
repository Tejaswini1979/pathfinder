"use client";

import {
  BookOpen,
  CheckCircle2,
  Clock,
  SkipForward,
} from "lucide-react";
import type { RoadmapStep } from "@/data/roadmaps";
import {
  useRoadmapProgressStore,
  type StepStatus,
} from "@/lib/roadmap-store";

interface Props {
  roadmapId: string;
  steps: RoadmapStep[];
}

const statusStyles: Record<
  StepStatus,
  { node: string; card: string; chip: string; label: string }
> = {
  todo: {
    node: "border-gray-300 bg-white text-gray-500 shadow-sm",
    card: "border-gray-200 bg-white",
    chip: "bg-gray-100 text-gray-500",
    label: "Not started",
  },
  learning: {
    node: "border-brand-blue bg-brand-blue text-white shadow-sm shadow-brand-blue/30",
    card: "border-brand-blue/40 bg-blue-50/60",
    chip: "bg-brand-blue text-white",
    label: "Learning",
  },
  done: {
    node: "border-emerald-500 bg-emerald-500 text-white shadow-sm shadow-emerald-500/30",
    card: "border-emerald-200 bg-emerald-50/40",
    chip: "bg-emerald-500 text-white",
    label: "Done",
  },
  skip: {
    node: "border-amber-400 bg-amber-400 text-white shadow-sm shadow-amber-400/30",
    card: "border-amber-200 bg-amber-50/40 opacity-85",
    chip: "bg-amber-400 text-white",
    label: "Skipped",
  },
};

const actions: {
  status: Exclude<StepStatus, "todo">;
  icon: typeof BookOpen;
  title: string;
  activeClass: string;
}[] = [
  {
    status: "learning",
    icon: BookOpen,
    title: "Mark as learning",
    activeClass: "border-brand-blue bg-brand-blue text-white shadow-sm shadow-brand-blue/30",
  },
  {
    status: "done",
    icon: CheckCircle2,
    title: "Mark as done",
    activeClass: "border-emerald-500 bg-emerald-500 text-white shadow-sm shadow-emerald-500/30",
  },
  {
    status: "skip",
    icon: SkipForward,
    title: "Skip this step",
    activeClass: "border-amber-400 bg-amber-400 text-white shadow-sm shadow-amber-400/30",
  },
];

export default function RoadmapFlow({ roadmapId, steps }: Props) {
  const progress = useRoadmapProgressStore((s) => s.progress);
  const setStatus = useRoadmapProgressStore((s) => s.setStatus);

  const statuses: StepStatus[] = steps.map(
    (_, i) => progress[roadmapId]?.[String(i)] ?? "todo"
  );
  const doneCount = statuses.filter((s) => s === "done").length;
  const pct = Math.round((doneCount / steps.length) * 100);

  return (
    <div className="mt-6">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <div className="flex items-center gap-3 text-[11px] font-medium text-gray-600">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-brand-blue" />
            Learning
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Done
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            Skip
          </span>
        </div>
        <div className="flex min-w-44 flex-1 items-center gap-3 sm:max-w-xs">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-brand-blue"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="shrink-0 text-[11px] font-medium text-gray-500">
            {doneCount} of {steps.length} done
          </span>
        </div>
      </div>

      <ol className="mt-6">
        {steps.map((step, i) => {
          const status = statuses[i];
          const style = statusStyles[status];
          return (
            <li key={`${step.title}-${i}`} className="flex gap-3 sm:gap-4">
              <div className="flex flex-col items-center">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold ${style.node}`}
                >
                  {i + 1}
                </span>
                {i < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="mt-2 w-px flex-1 bg-linear-to-b from-brand-blue/60 to-brand-blue/10"
                  />
                )}
              </div>

              <div
                className={`mb-3 min-w-0 flex-1 rounded-squircle border p-4 shadow-sm sm:p-5 ${style.card}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold leading-snug text-gray-900">
                        {step.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-500">
                        <Clock className="h-3 w-3" />
                        {step.duration}
                      </span>
                      {status !== "todo" && (
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${style.chip}`}
                        >
                          {style.label}
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-sm leading-6 text-gray-600">
                      {step.detail}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-1.5">
                    {actions.map(({ status: s, icon: Icon, title, activeClass }) => {
                      const active = status === s;
                      return (
                        <button
                          key={s}
                          type="button"
                          title={title}
                          aria-label={title}
                          aria-pressed={active}
                          onClick={() => setStatus(roadmapId, i, active ? "todo" : s)}
                          className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                            active
                              ? activeClass
                              : "border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-600"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
