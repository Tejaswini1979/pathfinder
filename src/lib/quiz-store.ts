import { create } from "zustand";
import type { QuizValues, QuizStream } from "@/lib/quiz-schema";

export const INTEREST_IDS = ["analyze", "create", "help", "lead"] as const;
export type InterestId = (typeof INTEREST_IDS)[number];
export const FLAG_IDS = ["underrated", "lowBudget", "lowPercent"] as const;
export type FlagId = (typeof FLAG_IDS)[number];

export type QuizStep = "stream" | "interests" | "prefs" | "results";

interface QuizState {
  step: QuizStep;
  stream: QuizStream | null;
  interests: string[];
  flags: FlagId[];
  setStep: (step: QuizStep) => void;
  setStream: (stream: QuizStream) => void;
  toggleInterest: (id: string) => void;
  toggleFlag: (id: FlagId) => void;
  setAnswers: (values: QuizValues) => void;
  reset: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  step: "stream",
  stream: null,
  interests: [],
  flags: [],
  setStep: (step) => set({ step }),
  setStream: (stream) => set({ stream }),
  toggleInterest: (id) =>
    set((state) => ({
      interests: state.interests.includes(id)
        ? state.interests.filter((i) => i !== id)
        : [...state.interests, id],
    })),
  toggleFlag: (id) =>
    set((state) => ({
      flags: state.flags.includes(id)
        ? state.flags.filter((f) => f !== id)
        : [...state.flags, id],
    })),
  setAnswers: ({ stream, interests, flags }) =>
    set({
      stream,
      interests: interests ?? [],
      flags: (flags as FlagId[] | undefined) ?? [],
    }),
  reset: () =>
    set({ step: "stream", stream: null, interests: [], flags: [] }),
}));
