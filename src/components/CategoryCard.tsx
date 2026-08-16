import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  href: string;
}

export default function CategoryCard({ icon: Icon, title, href }: Props) {
  return (
    <Link
      href={href}
      className="group flex h-full items-center gap-4 rounded-squircle border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon className="h-6 w-6" />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <span className="mt-0.5 inline-flex items-center gap-1 text-xs font-medium text-primary">
          Explore
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
