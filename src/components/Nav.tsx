"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Compass,
  Home,
  Bookmark,
  Sparkles,
  Map,
  Wallet,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { useSavedStore } from "@/lib/saved-store";
import { useMounted } from "@/lib/use-mounted";

const desktopLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/careers", label: "Careers" },
  { href: "/roadmaps", label: "Roadmaps" },
  { href: "/about", label: "About" },
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
  const [open, setOpen] = useState(false);
  const mounted = useMounted();
  const savedCount = useSavedStore((s) => s.count);
  const showSavedBadge = mounted && savedCount > 0;

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-primary to-brand-violet text-white shadow-sm">
              <Compass className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-slate-900">
              Path<span className="text-primary">Finder</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {desktopLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive(pathname, link.href)
                    ? "bg-primary-light text-primary"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 md:flex">
            <Link
              href="/saved"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
              aria-label="Saved careers"
            >
              <Bookmark className="h-5 w-5" />
              {showSavedBadge && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
                  {savedCount}
                </span>
              )}
            </Link>
            <Link
              href="/quiz"
              className="inline-flex h-10 items-center gap-2 rounded-xl bg-linear-to-r from-primary to-brand-violet px-5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-slate-100 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 md:hidden">
            <nav className="flex flex-col gap-1">
              {desktopLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-3.5 py-2.5 text-sm font-medium ${
                    isActive(pathname, link.href)
                      ? "bg-primary-light text-primary"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 flex items-center gap-2.5 border-t border-slate-100 pt-3">
              <Link
                href="/quiz"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-primary to-brand-violet text-sm font-semibold text-white shadow-sm"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/saved"
                onClick={() => setOpen(false)}
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500"
                aria-label="Saved careers"
              >
                <Bookmark className="h-5 w-5" />
                {showSavedBadge && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4.5 min-w-[18px] items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
                    {savedCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </header>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-md items-stretch justify-around">
          {bottomTabs.map((tab) => {
            const Icon = tab.icon;
            const active = isActive(pathname, tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-medium ${
                  active ? "text-primary" : "text-slate-500"
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
