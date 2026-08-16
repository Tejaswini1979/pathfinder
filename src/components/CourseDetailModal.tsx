"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Clock,
  GraduationCap,
  Info,
  X,
} from "lucide-react";
import type { Course } from "@/data/courses";

interface Props {
  course: Course | null;
  onClose: () => void;
}

export default function CourseDetailModal({ course, onClose }: Props) {
  useEffect(() => {
    if (!course) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [course, onClose]);

  return (
    <AnimatePresence>
      {course && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={course.name}
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-squircle bg-white p-6 shadow-xl sm:p-8"
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-gray-300 hover:text-gray-900"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-wrap gap-1.5">
              <span className="rounded-full bg-primary-light px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                {course.stream}
              </span>
              <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-semibold text-gray-600">
                {course.field}
              </span>
              <span className="rounded-full bg-accent-light px-2.5 py-0.5 text-[11px] font-semibold text-rose-700">
                {course.level}
              </span>
            </div>

            <h2 className="mt-3 pr-8 text-2xl font-bold tracking-tight text-gray-900">
              {course.name}
            </h2>
            <p className="mt-2 leading-7 text-gray-600">{course.description}</p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-squircle border border-gray-200 bg-gray-50 p-4">
                <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-gray-400">
                  <Clock className="h-3.5 w-3.5" />
                  Duration
                </span>
                <p className="mt-1.5 font-semibold text-gray-900">
                  {course.duration}
                </p>
              </div>
              <div className="rounded-squircle border border-gray-200 bg-gray-50 p-4">
                <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-gray-400">
                  <GraduationCap className="h-3.5 w-3.5" />
                  Entrance exam
                </span>
                <p className="mt-1.5 font-semibold text-gray-900">
                  {course.entranceExam === "None" ? "No entrance exam" : course.entranceExam}
                </p>
              </div>
              <div className="rounded-squircle border border-gray-200 bg-gray-50 p-4">
                <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-gray-400">
                  <Briefcase className="h-3.5 w-3.5" />
                  Careers
                </span>
                <p className="mt-1.5 font-semibold text-gray-900">
                  {course.careerInterest.slice(0, 2).join(", ")}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-squircle border border-amber-200 bg-warning-light p-4">
              <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-amber-600">
                <Info className="h-3.5 w-3.5" />
                Eligibility
              </span>
              <p className="mt-1.5 font-medium text-gray-900">{course.eligibility}</p>
            </div>

            <div className="mt-6">
              <span className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
                <BookOpen className="h-4 w-4 text-primary" />
                Subjects you&apos;ll learn
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {course.subjects.map((subject) => (
                  <span
                    key={subject}
                    className="rounded-full border border-primary/30 bg-primary-light px-3 py-1 text-sm font-medium text-primary"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            {course.careerInterest.length > 0 && (
              <div className="mt-6">
                <span className="flex items-center gap-1.5 text-sm font-semibold text-gray-900">
                  <Briefcase className="h-4 w-4 text-accent" />
                  Career interests
                </span>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {course.careerInterest.map((ci) => (
                    <span
                      key={ci}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-600"
                    >
                      {ci}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
