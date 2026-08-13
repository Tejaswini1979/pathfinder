"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

interface Props {
  title: string;
  description?: string;
}

export default function ShareButton({ title, description }: Props) {
  const [copied, setCopied] = useState(false);

  const onShare = async () => {
    const url = window.location.href;
    const data = { title, text: description ? `${title} — ${description}` : title, url };

    try {
      if (navigator.share) {
        await navigator.share(data);
        return;
      }
    } catch {
      // fall through to clipboard
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // no clipboard available
    }
  };

  return (
    <button
      type="button"
      onClick={onShare}
      aria-label="Share this career"
      className={`inline-flex h-11 items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-colors ${
        copied
          ? "border-emerald-300 bg-accent-light text-emerald-700"
          : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
      }`}
    >
      {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
      {copied ? "Link copied" : "Share"}
    </button>
  );
}
