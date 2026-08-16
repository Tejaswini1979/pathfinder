"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import StudentIllustration from "@/components/StudentIllustration";

const contentVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

interface Stats {
  careerCount: number;
  courseCount: number;
  roadmapCount: number;
  schemeCount: number;
}

export default function Hero({ stats }: { stats: Stats }) {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-blue-100/70 via-indigo-50 to-violet-100/70">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.span
          className="absolute -left-24 top-[-10%] h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl"
          animate={{ x: [0, 36, -18, 0], y: [0, -24, 18, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute right-[-12%] top-[18%] h-[28rem] w-[28rem] rounded-full bg-brand-violet/20 blur-3xl"
          animate={{ x: [0, -30, 20, 0], y: [0, 26, -16, 0] }}
          transition={{ duration: 26, delay: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute bottom-[-16%] left-[28%] h-80 w-80 rounded-full bg-sky-300/25 blur-3xl"
          animate={{ x: [0, 24, -22, 0], y: [0, -18, 22, 0] }}
          transition={{ duration: 24, delay: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-12 sm:px-6 sm:pt-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left"
          >
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200/80 bg-white/80 px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5" />
              For Indian students after Class 10
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="mt-5 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl"
            >
              Find your path,
              <br />
              <span className="bg-linear-to-r from-primary via-brand-blue to-brand-violet bg-clip-text text-transparent">
                before Class 10 ends.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600 lg:mx-0"
            >
              Your stream choice decides more than you think. Explore 15 career
              domains and 230+ careers — most students only hear about 5 of
              them — plus courses, exams, roadmaps and scholarships for all of
              India.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <Link
                href="/quiz"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-primary to-primary-dark px-7 text-base font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:from-primary-dark hover:to-primary hover:shadow-md sm:w-auto"
              >
                <Sparkles className="h-5 w-5" />
                Get your career match
              </Link>
              <Link
                href="/streams"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white/80 px-7 text-base font-semibold text-gray-700 transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:bg-white hover:shadow-sm sm:w-auto"
              >
                Compare the streams
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="mx-auto w-full max-w-md lg:max-w-none"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <StudentIllustration />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
          className="mx-auto mt-10 flex max-w-3xl items-center justify-center divide-x divide-indigo-200/80 rounded-2xl border border-indigo-200/80 bg-white/70 py-4 shadow-sm backdrop-blur"
        >
          {[
            { value: `${stats.careerCount}+`, label: "Careers covered" },
            { value: `${stats.courseCount}`, label: "Courses & diplomas" },
            { value: `${stats.roadmapCount}`, label: "Roadmaps" },
            { value: `${stats.schemeCount}`, label: "Scholarships" },
          ].map((stat) => (
            <div key={stat.label} className="flex-1 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="mt-0.5 text-xs font-medium text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
