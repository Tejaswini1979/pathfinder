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
    rotate: -8,
  },
  {
    Icon: BookOpen,
    x: "9%",
    y: "62%",
    size: 80,
    rotate: 12,
  },
  {
    Icon: Atom,
    x: "88%",
    y: "18%",
    size: 96,
    rotate: 10,
  },
  {
    Icon: FlaskConical,
    x: "84%",
    y: "70%",
    size: 80,
    rotate: -12,
  },
  {
    Icon: Compass,
    x: "22%",
    y: "80%",
    size: 64,
    rotate: 20,
  },
  {
    Icon: Briefcase,
    x: "78%",
    y: "46%",
    size: 64,
    rotate: -6,
  },
  {
    Icon: Palette,
    x: "70%",
    y: "82%",
    size: 56,
    rotate: 14,
  },
  {
    Icon: PenLine,
    x: "30%",
    y: "24%",
    size: 56,
    rotate: -14,
  },
];

const blobs = [
  {
    className: "left-[-6%] top-[-10%] h-72 w-72 rounded-full bg-primary/10 blur-3xl",
  },
  {
    className: "right-[-8%] top-[30%] h-80 w-80 rounded-full bg-accent/10 blur-3xl",
  },
  {
    className: "bottom-[-12%] left-[30%] h-72 w-72 rounded-full bg-info/10 blur-3xl",
  },
];

export default function EducationBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block"
    >
      {blobs.map((b, i) => (
        <div key={i} className={`absolute ${b.className}`} />
      ))}
      {motifs.map(({ Icon, x, y, size, rotate }) => (
        <span
          key={x + y}
          className="absolute text-primary/5"
          style={{ left: x, top: y, width: size, height: size, transform: `rotate(${rotate}deg)` }}
        >
          <Icon className="h-full w-full" strokeWidth={1.25} />
        </span>
      ))}
    </div>
  );
}
