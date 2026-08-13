"use client";

import Link from "next/link";
import { BookmarkX, ArrowRight } from "lucide-react";
import { useSavedStore } from "@/lib/saved-store";

export default function SavedPage() {
  const careers = useSavedStore((s) => s.careers);
  const remove = useSavedStore((s) => s.remove);
  const clear = useSavedStore((s) => s.clear);

  const list = Object.values(careers).sort((a, b) => b.savedAt - a.savedAt);

  if (list.length === 0) {
    return (
      <div className="mx-auto w-full max-w-2xl flex-1 px-4 py-16 text-center sm:px-6">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400">
          <BookmarkX className="h-7 w-7" />
        </span>
        <h1 className="mt-5 text-2xl font-bold tracking-tight text-gray-900">
          No saved careers yet
        </h1>
        <p className="mt-2 text-gray-600">
          Tap the bookmark on any career page to save it here for later.
        </p>
        <Link
          href="/careers"
          className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
        >
          Browse careers
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Saved careers
          </h1>
          <p className="mt-1.5 text-sm text-gray-600">
            {list.length} career{list.length === 1 ? "" : "s"} saved for later.
          </p>
        </div>
        <button
          type="button"
          onClick={clear}
          className="text-sm font-medium text-gray-500 transition-colors hover:text-red-600"
        >
          Clear all
        </button>
      </header>

      <div className="space-y-3">
        {list.map((career) => (
          <div
            key={career.id}
            className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
          >
            <Link
              href={`/careers/${career.id.toLowerCase()}`}
              className="min-w-0 flex-1"
            >
              <div className="font-semibold text-gray-900 hover:text-primary">
                {career.name}
              </div>
              <div className="mt-0.5 text-sm text-gray-500">
                {career.domainTitle}
              </div>
            </Link>
            <button
              type="button"
              onClick={() => remove(career.id)}
              aria-label={`Remove ${career.name}`}
              className="rounded-full p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600"
            >
              <BookmarkX className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
