import meta from "@/data/raw/meta.json";
import manifestJson from "@/data/domains/index.json";
import arc from "@/data/domains/arc.json";
import bm from "@/data/domains/bm.json";
import bwp from "@/data/domains/bwp.json";
import civ from "@/data/domains/civ.json";
import def from "@/data/domains/def.json";
import des from "@/data/domains/des.json";
import edu from "@/data/domains/edu.json";
import eng from "@/data/domains/eng.json";
import hos from "@/data/domains/hos.json";
import hum from "@/data/domains/hum.json";
import law from "@/data/domains/law.json";
import lng from "@/data/domains/lng.json";
import med from "@/data/domains/med.json";
import psy from "@/data/domains/psy.json";
import trd from "@/data/domains/trd.json";
import schemesRaw from "@/data/raw/schemes.json";

import type {
  Domain,
  DomainMeta,
  DomainsManifest,
  InterestMeta,
  StreamMeta,
  SubPath,
} from "@/data/types";
import type { Scheme, SchemesDatabase } from "@/data/scheme-types";

const domains: Record<string, Domain> = {
  arc: arc as unknown as Domain,
  bm: bm as unknown as Domain,
  bwp: bwp as unknown as Domain,
  civ: civ as unknown as Domain,
  def: def as unknown as Domain,
  des: des as unknown as Domain,
  edu: edu as unknown as Domain,
  eng: eng as unknown as Domain,
  hos: hos as unknown as Domain,
  hum: hum as unknown as Domain,
  law: law as unknown as Domain,
  lng: lng as unknown as Domain,
  med: med as unknown as Domain,
  psy: psy as unknown as Domain,
  trd: trd as unknown as Domain,
};

const manifest = manifestJson as DomainsManifest;
const schemesDb = schemesRaw as SchemesDatabase;
const streams = meta.streams as StreamMeta[];
const interests = meta.interests as InterestMeta[];

export const domainIds = Object.keys(domains);

export function getDomainMetaList(): DomainMeta[] {
  return manifest.domains;
}

export function getDomain(id: string): Domain | undefined {
  return domains[id];
}

export function getDomainMeta(id: string): DomainMeta | undefined {
  return manifest.domains.find((d) => d.id === id);
}

export function getStreams(): StreamMeta[] {
  return streams;
}

export function getInterests(): InterestMeta[] {
  return interests;
}

export function getAllSubPaths(): SubPath[] {
  return Object.values(domains).flatMap((d) => d.sub_paths);
}

export function getSubPath(id: string): SubPath | undefined {
  for (const domain of Object.values(domains)) {
    const found = domain.sub_paths.find((sp) => sp.id === id);
    if (found) return found;
  }
  return undefined;
}

export function getSubPathsForStream(streamId: string): SubPath[] {
  return getAllSubPaths().filter((sp) => sp.streamIds.includes(streamId as never));
}

export function getDomainsForStream(streamId: string): DomainMeta[] {
  const ids = new Set(
    getAllSubPaths()
      .filter((sp) => sp.streamIds.includes(streamId as never))
      .map((sp) => sp.domainId)
  );
  return manifest.domains.filter((d) => ids.has(d.id));
}

export function getSchemes(): Scheme[] {
  return schemesDb.schemes;
}

export function getScheme(id: string): Scheme | undefined {
  return schemesDb.schemes.find((s) => s.scheme_id === id);
}

export function getSchemesMetadata() {
  return schemesDb.metadata;
}

export function searchSchemes(query: string): Scheme[] {
  const q = query.trim().toLowerCase();
  if (!q) return getSchemes();
  return getSchemes().filter((s) =>
    [s.scheme_name, s.scheme_id, ...(s.alternate_names ?? []), s.notes ?? ""]
      .join(" ")
      .toLowerCase()
      .includes(q)
  );
}

export function getUniqueSchemeEducationLevels(): string[] {
  const set = new Set<string>();
  for (const s of getSchemes()) {
    for (const lvl of s.education_coverage?.education_level ?? []) {
      set.add(lvl);
    }
  }
  return Array.from(set).sort();
}

export function getUniqueSchemeIncomeBands(): string[] {
  const set = new Set<string>();
  for (const s of getSchemes()) {
    const limit = s.eligibility?.economic?.family_income_limit;
    if (limit) set.add(limit);
  }
  return Array.from(set).sort();
}
