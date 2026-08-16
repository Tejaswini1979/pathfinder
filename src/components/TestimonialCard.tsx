import { Star } from "lucide-react";

interface Props {
  name: string;
  role: string;
  quote: string;
  initials: string;
}

export default function TestimonialCard({
  name,
  role,
  quote,
  initials,
}: Props) {
  return (
    <figure className="flex h-full flex-col rounded-squircle border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-1 text-amber-400" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-7 text-slate-600">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-light text-sm font-bold text-primary">
          {initials}
        </span>
        <div>
          <div className="text-sm font-semibold text-slate-900">{name}</div>
          <div className="text-xs text-slate-500">{role}</div>
        </div>
      </figcaption>
    </figure>
  );
}
