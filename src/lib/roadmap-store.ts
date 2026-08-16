"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type StepStatus = "todo" | "learning" | "done" | "skip";

type StepStatuses = Record<string, StepStatus>;

interface RoadmapProgressState {
  progress: Record<string, StepStatuses>;
  setStatus: (roadmapId: string, stepIndex: number, status: StepStatus) => void;
}

export const useRoadmapProgressStore = create<RoadmapProgressState>()(
  persist(
    (set) => ({
      progress: {},
      setStatus: (roadmapId, stepIndex, status) =>
        set((state) => {
          const roadmap = { ...(state.progress[roadmapId] ?? {}) };
          roadmap[String(stepIndex)] = status;
          return { progress: { ...state.progress, [roadmapId]: roadmap } };
        }),
    }),
    { name: "pathfinder-roadmap-progress" }
  )
);
