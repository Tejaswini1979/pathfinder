import Link from "next/link";
import { Compass } from "lucide-react";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Courses", href: "/courses" },
      { label: "Careers", href: "/careers" },
      { label: "Roadmaps", href: "/roadmaps" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Plan Your Path",
    links: [
      { label: "Streams After 10th", href: "/streams" },
      { label: "Entrance Exams", href: "/exams" },
      { label: "Scholarships", href: "/schemes" },
      { label: "Career Quiz", href: "/quiz" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white pb-20 md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-primary to-brand-violet text-white shadow-sm">
              <Compass className="h-4.5 w-4.5" />
            </span>
            <span className="font-display text-lg font-bold text-slate-900">
              Path<span className="text-primary">Finder</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
            A modern learning platform that helps Indian students after Class 10
            discover careers, courses, entrance exams, roadmaps, and
            scholarships across India.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold text-slate-900">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} PathFinder · Data compiled from official
        government portals and public sources. Verify all details before
        applying.
      </div>
    </footer>
  );
}
