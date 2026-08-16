"use client";

import { Fragment } from "react";
import {
  ArrowRight,
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
  { card: string; badge: string; segment: string; label: string }
> = {
  todo: {
    card: "border-gray-200 bg-white",
    badge: "bg-gray-100 text-gray-500",
    segment: "bg-gray-200",
    label: "Not started",
  },
  learning: {
    card: "border-indigo-300 bg-indigo-50/60",
    badge: "bg-indigo-100 text-indigo-700",
    segment: "bg-primary",
    label: "Learning",
  },
  done: {
    card: "border-emerald-300 bg-emerald-50/60",
    badge: "bg-emerald-100 text-emerald-700",
    segment: "bg-emerald-500",
    label: "Done",
  },
  skip: {
    card: "border-amber-300 bg-amber-50/60 opacity-80",
    badge: "bg-amber-100 text-amber-700",
    segment: "bg-amber-400",
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
    activeClass: "border-indigo-500 bg-indigo-500 text-white",
  },
  {
    status: "done",
    icon: CheckCircle2,
    title: "Mark as done",
    activeClass: "border-emerald-500 bg-emerald-500 text-white",
  },
  {
    status: "skip",
    icon: SkipForward,
    title: "Skip this step",
    activeClass: "border-amber-500 bg-amber-500 text-white",
  },
];

const legend = [
  { icon: BookOpen, label: "Learning", dot: "bg-indigo-500" },
  { icon: CheckCircle2, label: "Done", dot: "bg-emerald-500" },
  { icon: SkipForward, label: "Skip", dot: "bg-amber-500" },
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
    <div className="mt-8">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {legend.map(({ icon: Icon, label, dot }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600"
            >
              <span className={`h-2 w-2 rounded-full ${dot}`} />
              <Icon className="h-3.5 w-3.5" />
              {label}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="h-2 w-28 overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full rounded-full bg-emerald-500 transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-xs font-medium text-gray-500">
            {doneCount} of {steps.length} done
          </span>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-stretch">
        {steps.map((step, i) => {
          const status = statuses[i];
          const style = statusStyles[status];
          return (
            <Fragment key={`${step.title}-${i}`}>
              <div className={`flex flex-1 rounded-2xl border p-4 shadow-sm transition-colors ${style.card}`}>
                <div className="flex h-full w-full flex-col text-center">
                  <span className={`mx-auto rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${style.badge}`}>
                    Step {i + 1}
                  </span>
                  <h3 className="mt-2.5 font-semibold leading-snug text-gray-900">
                    {step.title}
                  </h3>
                  <span className="mx-auto mt-2 inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-medium text-gray-600 shadow-sm">
                    <Clock className="h-3 w-3" />
                    {step.duration}
                  </span>
                  <p className="mt-2.5 text-xs leading-5 text-gray-600">
                    {step.detail}
                  </p>

                  <div className="mt-auto flex items-center justify-center gap-2 pt-4">
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
                          className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
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

              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 rotate-90 items-center justify-center self-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-sm lg:rotate-0"
                >
                  <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
