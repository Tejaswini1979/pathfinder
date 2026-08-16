import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[28px] bg-linear-to-br from-primary to-brand-violet px-6 py-16 text-center text-white shadow-xl shadow-primary/20 sm:px-12 sm:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <span className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <span className="absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <Sparkles className="absolute right-10 top-10 h-8 w-8 text-white/20" />
          <Sparkles className="absolute bottom-12 left-12 h-6 w-6 text-white/20" />
        </div>

        <div className="relative">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to start learning?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            Build your skills today and take the next step toward your goals.
          </p>
          <Link
            href="/quiz"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-white px-8 text-sm font-semibold text-primary shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
