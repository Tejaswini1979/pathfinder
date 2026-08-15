"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Home, Bookmark, Wallet, Sparkles, Map } from "lucide-react";
import { useSavedStore } from "@/lib/saved-store";
import GooeyNav from "@/components/GooeyNav";

const desktopLinks = [
  { href: "/streams", label: "Streams" },
  { href: "/careers", label: "Careers" },
  { href: "/courses", label: "Courses" },
  { href: "/exams", label: "Exams" },
  { href: "/roadmaps", label: "Roadmaps" },
  { href: "/schemes", label: "Schemes" },
];

const bottomTabs = [
  { href: "/", label: "Home", icon: Home },
  { href: "/careers", label: "Careers", icon: Compass },
  { href: "/roadmaps", label: "Roads", icon: Map },
  { href: "/schemes", label: "Funds", icon: Wallet },
  { href: "/quiz", label: "Quiz", icon: Sparkles },
];
function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Nav() {
  const pathname = usePathname();
  const savedCount = useSavedStore((s) => s.count);
  const initialActiveIndex = Math.max(
    0,
    desktopLinks.findIndex((link) => isActive(pathname, link.href))
  );

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-gray-200/70 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
              <Compass className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold tracking-tight text-gray-900">
              Path<span className="text-primary">Finder</span>
            </span>
          </Link>

          <div className="hidden lg:block">
            <GooeyNav
              className="gooey-nav-compact"
              items={desktopLinks}
              particleCount={12}
              particleDistances={[70, 10]}
              particleR={90}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              initialActiveIndex={initialActiveIndex}
            />
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/saved"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
              aria-label="Saved careers"
            >
              <Bookmark className="h-5 w-5" />
              {savedCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
                  {savedCount}
                </span>
              )}
            </Link>
            <Link
              href="/quiz"
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isActive(pathname, "/quiz")
                  ? "bg-primary-light text-primary"
                  : "bg-linear-to-r from-primary to-primary-dark text-white hover:from-primary-dark hover:to-primary"
              }`}
            >
              <Sparkles className="h-4 w-4" />
              Take the quiz
            </Link>
          </div>
        </div>
      </header>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-md items-stretch justify-around">
          {bottomTabs.map((tab) => {
            const Icon = tab.icon;
            const active = isActive(pathname, tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-medium ${
                  active ? "text-primary" : "text-gray-500"
                }`}
              >
                <Icon className="h-5 w-5" />
                {tab.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
