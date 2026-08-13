import Link from "next/link";
import { Compass } from "lucide-react";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Streams After 10th", href: "/streams" },
      { label: "All Careers", href: "/careers" },
      { label: "Courses & Diplomas", href: "/courses" },
      { label: "Career Quiz", href: "/quiz" },
    ],
  },
  {
    title: "Plan Your Path",
    links: [
      { label: "Entrance Exams", href: "/exams" },
      { label: "Roadmaps", href: "/roadmaps" },
      { label: "Scholarships", href: "/schemes" },
      { label: "About", href: "/about" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50 pb-20 md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
              <Compass className="h-4 w-4" />
            </span>
            <span className="font-bold text-gray-900">
              Path<span className="text-primary">Finder</span>
            </span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-gray-600">
            Career guidance for Indian students after Class 10 — 15 domains,
            230+ careers, courses, entrance exams, roadmaps, and scholarships
            for all of India.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold text-gray-900">{col.title}</h3>
            <ul className="mt-3 space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-400">
        Data compiled from official government portals and public sources. Verify
        all details before applying.
      </div>
    </footer>
  );
}
