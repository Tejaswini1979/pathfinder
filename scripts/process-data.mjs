import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const rawDir = resolve(root, "src/data/raw");
const outDir = resolve(root, "src/data/domains");

const STREAM_IDS = {
  Maths: "maths",
  Bio: "bio",
  Commerce: "commerce",
  Arts: "arts",
};

const ARRAY_FIELDS = new Set([
  "top_institutions",
  "scholarships",
  "eligibility",
  "job_roles",
  "growth_paths",
  "fees",
  "duration",
  "min_cutoff",
]);

function normalizeList(value) {
  if (Array.isArray(value)) return value;
  if (typeof value === "string" && value.trim())
    return value
      .split(/[,;]/)
      .map((s) => s.trim())
      .filter(Boolean);
  return [];
}

function readJson(p) {
  return JSON.parse(readFileSync(p, "utf8"));
}

const meta = readJson(resolve(rawDir, "meta.json"));
const metaDomains = new Map(meta.domains.map((d) => [d.id, d]));

const manifest = {
  generatedAt: new Date().toISOString().slice(0, 10),
  domains: [],
};

mkdirSync(outDir, { recursive: true });

for (const id of metaDomains.keys()) {
  const raw = readJson(resolve(rawDir, `${id}.json`));
  const metaD = metaDomains.get(id);
  const subPaths = (raw.sub_paths || []).map((sp) => {
    const streams = Array.isArray(sp.streams) ? sp.streams : [];
    const normalized = { ...sp };
    for (const field of ARRAY_FIELDS) {
      if (field in normalized) normalized[field] = normalizeList(normalized[field]);
    }
    return {
      ...normalized,
      domainId: id,
      domainTitle: raw.domain,
      streamIds: streams
        .map((s) => STREAM_IDS[s] || s.toLowerCase())
        .filter(Boolean),
    };
  });
  const summary = raw.summary || {};
  const manifestEntry = {
    id,
    title: metaD?.title ?? raw.domain,
    tagline: metaD?.tagline ?? "",
    color: metaD?.color ?? "#3a5a7a",
    subPathCount: subPaths.length,
    underratedCount:
      summary.underrated_count ??
      subPaths.filter((s) => s.underrated).length,
    lowBudgetCount:
      summary.low_budget_count ?? subPaths.filter((s) => s.low_budget).length,
    lowPercentCount:
      summary.low_percent_count ?? subPaths.filter((s) => s.low_percent).length,
  };
  manifest.domains.push(manifestEntry);

  writeFileSync(
    resolve(outDir, `${id}.json`),
    JSON.stringify(
      {
        id,
        title: metaD?.title ?? raw.domain,
        tagline: metaD?.tagline ?? "",
        color: metaD?.color ?? "#3a5a7a",
        overview: raw.overview ?? "",
        key_insights: raw.key_insights ?? [],
        sub_paths: subPaths,
        confidence_notes: raw.data_confidence_notes ?? [],
      },
      null,
      2
    )
  );
}

writeFileSync(resolve(outDir, "index.json"), JSON.stringify(manifest, null, 2));

const total = manifest.domains.reduce((a, d) => a + d.subPathCount, 0);
console.log(
  `Processed ${manifest.domains.length} domains, ${total} sub-paths -> ${outDir}`
);
