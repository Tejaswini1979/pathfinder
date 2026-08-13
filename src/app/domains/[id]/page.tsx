import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Lightbulb } from "lucide-react";
import SubPathExplorer from "@/components/SubPathExplorer";
import { getDomain, getDomainMetaList } from "@/data";

export function generateStaticParams() {
  return getDomainMetaList().map((d) => ({ id: d.id }));
}

export function generateMetadata({
  params,
}: PageProps<"/domains/[id]">): Promise<Metadata> {
  return params.then(({ id }) => {
    const domain = getDomain(id);
    return {
      title: domain?.title ?? "Domain",
      description: domain?.tagline,
    };
  });
}

export default async function DomainPage({ params }: PageProps<"/domains/[id]">) {
  const { id } = await params;
  const domain = getDomain(id);
  if (!domain) notFound();

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
      <Link
        href="/domains"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />
        All domains
      </Link>

      <header className="mt-5">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {domain.title}
        </h1>
        <p className="mt-3 max-w-3xl text-gray-600">{domain.tagline}</p>
      </header>

      <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="leading-7 text-gray-700">{domain.overview}</p>
      </section>

      <section className="mt-8">
        <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900">
          <Lightbulb className="h-5 w-5 text-warning" />
          Key insights
        </h2>
        <ul className="mt-4 space-y-3">
          {domain.key_insights.map((insight) => (
            <li
              key={insight}
              className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4 text-sm leading-6 text-gray-700 shadow-sm"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />
              {insight}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-lg font-bold text-gray-900">
          {domain.sub_paths.length} careers in this domain
        </h2>
        <div className="mt-4">
          <SubPathExplorer careers={domain.sub_paths} />
        </div>
      </section>
    </div>
  );
}
