import type { Metadata } from "next";
import SubPathExplorer from "@/components/SubPathExplorer";
import { getAllSubPaths, getStreams } from "@/data";

export const metadata: Metadata = {
  title: "All Careers",
  description:
    "Browse all 230+ careers across 15 domains — engineering, medicine, law, design, and more. Filter by underrated, low-budget, or low-cutoff.",
};

export default async function CareersPage({
  searchParams,
}: PageProps<"/careers">) {
  const params = await searchParams;
  const stream = typeof params.stream === "string" ? params.stream : undefined;

  let careers = getAllSubPaths();
  if (stream) {
    const valid = getStreams().some((s) => s.id === stream);
    if (valid) {
      careers = careers.filter((c) => c.streamIds.includes(stream as never));
    }
  }

  const streamTitle = getStreams().find((s) => s.id === stream)?.title;

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          All {careers.length}+ careers
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          {streamTitle
            ? `Careers open to the ${streamTitle} stream, across all 15 domains.`
            : "Every career in our database across 15 domains. Search by name, or filter for underrated gems, low-budget options, and low-cutoff entries."}
        </p>
      </header>
      <SubPathExplorer careers={careers} />
    </div>
  );
}
