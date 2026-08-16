"use client";

import { Bookmark, BookmarkCheck } from "lucide-react";
import { useSavedStore } from "@/lib/saved-store";
import { useMounted } from "@/lib/use-mounted";

interface Props {
  id: string;
  name: string;
  domainTitle: string;
  className?: string;
}

export default function SaveCareerButton({
  id,
  name,
  domainTitle,
  className = "",
}: Props) {
  const mounted = useMounted();
  const saved = useSavedStore((s) => s.isSaved(id));
  const toggle = useSavedStore((s) => s.toggle);
  const isSaved = mounted && saved;

  return (
    <button
      type="button"
      onClick={() => toggle({ id, name, domainTitle, savedAt: Date.now() })}
      aria-label={isSaved ? "Remove from saved" : "Save career"}
      className={`inline-flex h-11 items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-colors ${
        isSaved
          ? "border-primary bg-primary-light text-primary"
          : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
      } ${className}`}
    >
      {isSaved ? (
        <BookmarkCheck className="h-4 w-4" />
      ) : (
        <Bookmark className="h-4 w-4" />
      )}
      {isSaved ? "Saved" : "Save"}
    </button>
  );
}
