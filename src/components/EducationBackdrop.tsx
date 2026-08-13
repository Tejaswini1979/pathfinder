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
  { Icon: GraduationCap, className: "left-[4%] top-[14%] h-24 w-24 rotate-[-8deg]" },
  { Icon: BookOpen, className: "left-[10%] top-[58%] h-20 w-20 rotate-[12deg]" },
  { Icon: Atom, className: "right-[5%] top-[16%] h-24 w-24 rotate-[10deg]" },
  { Icon: FlaskConical, className: "right-[12%] bottom-[14%] h-20 w-20 rotate-[-12deg]" },
  { Icon: Compass, className: "left-[22%] bottom-[10%] h-16 w-16 rotate-[20deg]" },
  { Icon: Briefcase, className: "right-[22%] top-[42%] h-16 w-16 rotate-[-6deg]" },
  { Icon: Palette, className: "right-[30%] bottom-[30%] h-14 w-14 rotate-[14deg]" },
  { Icon: PenLine, className: "left-[30%] top-[26%] h-14 w-14 rotate-[-14deg]" },
];

export default function EducationBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block"
    >
      {motifs.map(({ Icon, className }) => (
        <Icon key={className} className={`absolute text-primary/5 ${className}`} strokeWidth={1.5} />
      ))}
    </div>
  );
}
