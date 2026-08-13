import type { Metadata } from "next";
import DomainExplorer from "@/components/DomainExplorer";
import { getDomainMetaList, getAllSubPaths, getStreams } from "@/data";
import EducationBackdrop from "@/components/EducationBackdrop";

export const metadata: Metadata = {
  title: "Explore Domains",
  description:
    "Browse all 15 career domains — engineering, medicine, law, design, and more.",
};

export default async function DomainsPage({
  searchParams,
}: PageProps<"/domains">) {
  const params = await searchParams;
  const stream = typeof params.stream === "string" ? params.stream : undefined;

  const domains = getDomainMetaList();
  const streams = getStreams();

  const streamMap: Record<string, string[]> = {};
  for (const sp of getAllSubPaths()) {
    for (const s of sp.streamIds) {
      (streamMap[sp.domainId] ??= []).push(s);
    }
  }
  for (const key of Object.keys(streamMap)) {
    streamMap[key] = Array.from(new Set(streamMap[key]));
  }

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
      <header className="relative mb-8 overflow-hidden">
        <EducationBackdrop />
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Explore all domains
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          Every domain from our database, searchable by stream. Each one holds
          careers most students never hear about.
        </p>
      </header>
      <DomainExplorer
        domains={domains}
        streams={streams}
        streamMap={streamMap}
        initialStream={stream}
      />
    </div>
  );
}
