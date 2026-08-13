"use client";

import { motion } from "framer-motion";
import {
  Atom,
  BookOpen,
  Briefcase,
  Compass,
  FlaskConical,
  GraduationCap,
  Palette,
  PenLine,
} from "lucide-react";

const motifs = [
  {
    Icon: GraduationCap,
    x: "4%",
    y: "16%",
    size: 96,
    duration: 13,
    delay: 0,
    rotate: -8,
  },
  {
    Icon: BookOpen,
    x: "9%",
    y: "62%",
    size: 80,
    duration: 17,
    delay: 2,
    rotate: 12,
  },
  {
    Icon: Atom,
    x: "88%",
    y: "18%",
    size: 96,
    duration: 15,
    delay: 1,
    rotate: 10,
  },
  {
    Icon: FlaskConical,
    x: "84%",
    y: "70%",
    size: 80,
    duration: 19,
    delay: 3,
    rotate: -12,
  },
  {
    Icon: Compass,
    x: "22%",
    y: "80%",
    size: 64,
    duration: 14,
    delay: 0.5,
    rotate: 20,
  },
  {
    Icon: Briefcase,
    x: "78%",
    y: "46%",
    size: 64,
    duration: 16,
    delay: 1.5,
    rotate: -6,
  },
  {
    Icon: Palette,
    x: "70%",
    y: "82%",
    size: 56,
    duration: 18,
    delay: 2.5,
    rotate: 14,
  },
  {
    Icon: PenLine,
    x: "30%",
    y: "24%",
    size: 56,
    duration: 12,
    delay: 0.8,
    rotate: -14,
  },
];

const blobs = [
  {
    className: "left-[-6%] top-[-10%] h-72 w-72 rounded-full bg-primary/10 blur-3xl",
    duration: 22,
    delay: 0,
  },
  {
    className: "right-[-8%] top-[30%] h-80 w-80 rounded-full bg-accent/10 blur-3xl",
    duration: 26,
    delay: 4,
  },
  {
    className: "bottom-[-12%] left-[30%] h-72 w-72 rounded-full bg-info/10 blur-3xl",
    duration: 24,
    delay: 8,
  },
];

export default function EducationBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block"
    >
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute ${b.className}`}
          animate={{ x: [0, 30, -20, 0], y: [0, -24, 16, 0] }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {motifs.map(({ Icon, x, y, size, duration, delay, rotate }) => (
        <motion.span
          key={x + y}
          className="absolute text-primary/5"
          style={{ left: x, top: y, width: size, height: size }}
          animate={{ y: [0, -14, 0], rotate: [rotate, rotate + 8, rotate] }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon className="h-full w-full" strokeWidth={1.25} />
        </motion.span>
      ))}
    </div>
  );
}
