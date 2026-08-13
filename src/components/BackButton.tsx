"use client";

import { usePathname, useRouter } from "next/navigation";
import { Undo2 } from "lucide-react";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <button
      type="button"
      onClick={() => router.back()}
      aria-label="Go back to the previous page"
      title="Go back to the previous page"
      className="fixed bottom-24 left-4 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-lg ring-1 ring-black/5 transition-colors hover:bg-primary-dark md:bottom-6"
    >
      <Undo2 className="h-5 w-5" />
    </button>
  );
}
