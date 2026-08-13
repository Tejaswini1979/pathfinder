"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SavedCareer {
  id: string;
  name: string;
  domainTitle: string;
  savedAt: number;
}

interface SavedState {
  careers: Record<string, SavedCareer>;
  toggle: (career: SavedCareer) => void;
  isSaved: (id: string) => boolean;
  remove: (id: string) => void;
  clear: () => void;
  count: number;
}

export const useSavedStore = create<SavedState>()(
  persist(
    (set, get) => ({
      careers: {},
      count: 0,
      toggle: (career) =>
        set((state) => {
          const next = { ...state.careers };
          if (next[career.id]) {
            delete next[career.id];
          } else {
            next[career.id] = career;
          }
          return { careers: next, count: Object.keys(next).length };
        }),
      isSaved: (id) => Boolean(get().careers[id]),
      remove: (id) =>
        set((state) => {
          const next = { ...state.careers };
          delete next[id];
          return { careers: next, count: Object.keys(next).length };
        }),
      clear: () => set({ careers: {}, count: 0 }),
    }),
    { name: "pathfinder-saved" }
  )
);
