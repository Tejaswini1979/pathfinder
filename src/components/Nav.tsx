"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bookmark, Compass, Sparkles } from "lucide-react";
import { useSavedStore } from "@/lib/saved-store";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Nav() {
  const pathname = usePathname();
  const savedCount = useSavedStore((s) => s.count);

  return (
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

        <div className="flex items-center gap-2">
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
  );
}
