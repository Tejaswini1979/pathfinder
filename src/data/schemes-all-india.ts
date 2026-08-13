import { getSchemes } from "@/data/index";
import type { Scheme } from "@/data/scheme-types";

export interface AllIndiaScheme extends Scheme {
  coverage: "CENTRAL" | "STATE";
  appliesTo: string;
}

const centralStateCodes = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Jammu & Kashmir",
  "Puducherry", "Ladakh",
];

export function getCentralSchemes(): AllIndiaScheme[] {
  return getSchemes()
    .filter((s) => s.category === "CENTRAL")
    .map((s) => ({
      ...s,
      coverage: "CENTRAL" as const,
      appliesTo: "All states & UTs of India",
    }));
}

export function getStateSchemes(): AllIndiaScheme[] {
  return getSchemes()
    .filter((s) => s.category === "STATE")
    .map((s) => ({
      ...s,
      coverage: "STATE" as const,
      appliesTo: `Example: ${s.state ?? "state"} (every state has equivalent schemes)`,
    }));
}

export function getAllIndiaSchemes(): AllIndiaScheme[] {
  return [...getCentralSchemes(), ...getStateSchemes()];
}

export function getStateCount(): number {
  return centralStateCodes.length;
}

export interface NationalPortal {
  name: string;
  url: string;
  description: string;
  covers: string;
}

export const nationalPortals: NationalPortal[] = [
  {
    name: "National Scholarship Portal (NSP)",
    url: "https://scholarships.gov.in",
    description: "Single platform for central and state scholarships — apply once, tracked online.",
    covers: "Pre & Post-Matric, Minority, SC/ST/OBC, NMMS, top-class schemes",
  },
  {
    name: "AICTE Scholarships",
    url: "https://www.aicte-india.org",
    description: "Pragati (girls), Saksham (differently-abled), Swarna Jayanti Fellowship.",
    covers: "Technical education (B.Tech, polytechnic, diploma)",
  },
  {
    name: "DST INSPIRE",
    url: "https://online-inspire.gov.in",
    description: "Innovation in Science Pursuit for Inspired Research — merit scholarships for science students.",
    covers: "SHE, internship, fellowship schemes",
  },
  {
    name: "Ministry of Minority Affairs",
    url: "https://www.minorityaffairs.gov.in",
    description: "Pre/Post-Matric scholarships and merit-cum-means for minority communities.",
    covers: "Minority students at every education level",
  },
  {
    name: "State Scholarship Portals",
    url: "https://scholarships.gov.in/state",
    description: "Every state runs its own state scholarship portal under NSP — search your state.",
    covers: "State-specific domicile-based schemes",
  },
];

export function getStatesNeedingDomicile(): string[] {
  return Array.from(
    new Set(
      getStateSchemes()
        .map((s) => s.eligibility?.demographic?.state_requirement ?? "")
        .filter(Boolean)
    )
  );
}

export function educationLevelsAllIndia(): string[] {
  const set = new Set<string>();
  for (const s of getSchemes()) {
    for (const lvl of s.education_coverage?.education_level ?? []) {
      set.add(lvl);
    }
  }
  return Array.from(set).sort();
}
