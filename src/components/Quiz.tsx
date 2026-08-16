"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { useForm, useWatch } from "react-hook-form";
import { ArrowLeft, ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import { quizSchema, type QuizValues } from "@/lib/quiz-schema";
import { useQuizStore, FLAG_IDS, type FlagId } from "@/lib/quiz-store";
import { getRecommendations, type QuizDomain } from "@/lib/quiz-recommend";
import type { InterestMeta, StreamMeta } from "@/data/types";

interface Props {
  domains: QuizDomain[];
  streams: StreamMeta[];
  interests: InterestMeta[];
}

const STEP_ORDER = ["stream", "interests", "prefs", "results"] as const;

const FLAG_LABELS: Record<FlagId, { label: string; hint: string }> = {
  underrated: { label: "Underrated gems", hint: "High potential, low competition" },
  lowBudget: { label: "Low budget", hint: "Affordable colleges / courses" },
  lowPercent: { label: "Low cutoff", hint: "Lower Class 12 cutoff needed" },
};

export default function Quiz({ domains, streams, interests }: Props) {
  const step = useQuizStore((s) => s.step);
  const setStep = useQuizStore((s) => s.setStep);
  const reset = useQuizStore((s) => s.reset);

  const { control, setValue, getValues, setError, clearErrors, formState } =
    useForm<QuizValues>({
      defaultValues: { stream: undefined, interests: [], flags: [] },
    });

  const [submitted, setSubmitted] = useState<QuizValues | null>(null);

  const watchedStream = useWatch({ control, name: "stream" });
  const watchedInterests = useWatch({ control, name: "interests" });
  const watchedFlags = useWatch({ control, name: "flags" });

  const stepIndex = STEP_ORDER.indexOf(step);

  const recommendations = useMemo(() => {
    if (!submitted) return [];
    return getRecommendations({
      stream: submitted.stream as string,
      interests: submitted.interests,
      flags: submitted.flags as string[],
      domains,
    });
  }, [submitted, domains]);

  const validateAndNext = () => {
    const values = getValues();
    clearErrors();

    if (step === "stream") {
      const result = quizSchema.pick({ stream: true }).safeParse(values);
      if (!result.success) {
        setError("root", { type: "manual", message: result.error.issues[0]?.message });
        return;
      }
    }
    if (step === "interests") {
      const result = quizSchema.pick({ stream: true, interests: true }).safeParse(values);
      if (!result.success) {
        setError("root", { type: "manual", message: result.error.issues[0]?.message });
        return;
      }
    }
    if (step === "prefs") {
      const result = quizSchema.safeParse(values);
      if (!result.success) {
        setError("root", { type: "manual", message: result.error.issues[0]?.message });
        return;
      }
      useQuizStore.getState().setAnswers(values);
      setSubmitted(values);
    }

    setStep(STEP_ORDER[stepIndex + 1]);
  };

  const goBack = () => {
    if (stepIndex > 0) setStep(STEP_ORDER[stepIndex - 1]);
  };

  const onRestart = () => {
    reset();
    setSubmitted(null);
  };

  const rootError = formState.errors.root?.message;

  return (
    <div className="mx-auto w-full max-w-2xl flex-1 px-4 py-10 sm:px-6">
      {step !== "results" && (
        <div className="mb-8 flex items-center justify-between">
          <div className="flex gap-1.5">
            {STEP_ORDER.slice(0, 3).map((s, i) => (
              <span
                key={s}
                className={`h-1.5 w-8 rounded-full transition-colors ${
                  i <= stepIndex ? "bg-primary" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-medium text-gray-400">
            Step {stepIndex + 1} of 3
          </span>
        </div>
      )}

      {step === "stream" && (
        <StepShell
          title="Which stream are you choosing after Class 10?"
          subtitle="This is the first fork in your career path."
        >
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {streams.map((stream) => {
              const active = watchedStream === stream.id;
              return (
                <button
                  key={stream.id}
                  type="button"
                  onClick={() => {
                    setValue("stream", stream.id as QuizValues["stream"]);
                    clearErrors();
                  }}
                  className={`rounded-squircle border p-5 text-left transition-all ${
                    active
                      ? "border-primary bg-primary-light ring-2 ring-primary/20"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="font-semibold text-gray-900">
                    {stream.title}
                  </div>
                  <div className="mt-1 text-sm text-gray-600">{stream.sub}</div>
                </button>
              );
            })}
          </div>
        </StepShell>
      )}

      {step === "interests" && (
        <StepShell
          title="What do you enjoy doing?"
          subtitle="Pick one or more. This tunes your recommendations."
        >
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {interests.map((interest) => {
              const active = watchedInterests.includes(interest.id);
              return (
                <button
                  key={interest.id}
                  type="button"
                  onClick={() => {
                    const next = active
                      ? watchedInterests.filter((i) => i !== interest.id)
                      : [...watchedInterests, interest.id];
                    setValue("interests", next);
                    clearErrors();
                  }}
                  className={`rounded-squircle border p-5 text-left transition-all ${
                    active
                      ? "border-primary bg-primary-light ring-2 ring-primary/20"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="font-semibold text-gray-900">
                    {interest.title}
                  </div>
                  <div className="mt-1 text-sm text-gray-600">
                    {interest.sub}
                  </div>
                </button>
              );
            })}
          </div>
        </StepShell>
      )}

      {step === "prefs" && (
        <StepShell
          title="Any preferences?"
          subtitle="Optional — helps surface hidden gems that fit your situation."
        >
          <div className="mt-6 grid grid-cols-1 gap-3">
            {FLAG_IDS.map((id) => {
              const meta = FLAG_LABELS[id];
              const active = watchedFlags.includes(id);
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    const next = active
                      ? watchedFlags.filter((f) => f !== id)
                      : [...watchedFlags, id];
                    setValue("flags", next);
                    clearErrors();
                  }}
                  className={`flex items-center justify-between rounded-squircle border p-5 text-left transition-all ${
                    active
                      ? "border-primary bg-primary-light ring-2 ring-primary/20"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div>
                    <div className="font-semibold text-gray-900">
                      {meta.label}
                    </div>
                    <div className="mt-0.5 text-sm text-gray-600">
                      {meta.hint}
                    </div>
                  </div>
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border-2 text-white transition-colors ${
                      active ? "border-primary bg-primary" : "border-gray-300"
                    }`}
                  >
                    {active && "✓"}
                  </span>
                </button>
              );
            })}
          </div>
        </StepShell>
      )}

      {step === "results" && (
        <ResultsView
          recommendations={recommendations}
          onRestart={onRestart}
        />
      )}

      {step !== "results" && (
        <div className="mt-8 flex items-center gap-3">
          {stepIndex > 0 && (
            <button
              type="button"
              onClick={goBack}
              className="inline-flex h-11 items-center gap-1.5 rounded-full border border-gray-200 px-5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
          )}
          <button
            type="button"
            onClick={validateAndNext}
            className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark sm:flex-none"
          >
            {step === "prefs" ? "Show my results" : "Continue"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}

      {rootError && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600">
          {rootError}
        </p>
      )}
    </div>
  );
}

function StepShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        {title}
      </h1>
      <p className="mt-2 text-gray-600">{subtitle}</p>
      {children}
    </div>
  );
}

function ResultsView({
  recommendations,
  onRestart,
}: {
  recommendations: ReturnType<typeof getRecommendations>;
  onRestart: () => void;
}) {
  if (recommendations.length === 0) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
          No matches found
        </h1>
        <p className="mt-2 text-gray-600">
          Try loosening your preferences and retake the quiz.
        </p>
        <button
          type="button"
          onClick={onRestart}
          className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white"
        >
          <RotateCcw className="h-4 w-4" />
          Restart quiz
        </button>
      </div>
    );
  }

  return (
    <div>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
        <Sparkles className="h-3.5 w-3.5" />
        Your results
      </span>
      <h1 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        Top domains for you
      </h1>
      <p className="mt-2 text-gray-600">
        Ranked by your stream, interests, and preferences.
      </p>

      <div className="mt-8 space-y-5">
        {recommendations.map((rec, rank) => (
          <div
            key={rec.domain.id}
            className="rounded-squircle border border-gray-200 bg-white p-6 shadow-sm"
            style={{ borderTopColor: rec.domain.color, borderTopWidth: 3 }}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: rec.domain.color }}
                >
                  {rank + 1}
                </span>
                <h2 className="text-lg font-bold text-gray-900">
                  {rec.domain.title}
                </h2>
              </div>
              <Link
                href={`/domains/${rec.domain.id}`}
                className="text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Explore
              </Link>
            </div>

            {rec.matches.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {rec.matches.map((career) => (
                  <li key={career.id}>
                    <Link
                      href={`/careers/${career.id.toLowerCase()}`}
                      className="group flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50/50 px-4 py-2.5 transition-colors hover:border-gray-200 hover:bg-white"
                    >
                      <span className="text-sm font-medium text-gray-800 group-hover:text-primary">
                        {career.name}
                      </span>
                      <ArrowRight className="h-4 w-4 text-gray-300 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-gray-500">
                Browse the domain to see its careers.
              </p>
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onRestart}
        className="mt-8 inline-flex h-11 items-center gap-2 rounded-full border border-gray-200 px-6 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
      >
        <RotateCcw className="h-4 w-4" />
        Retake the quiz
      </button>
    </div>
  );
}
