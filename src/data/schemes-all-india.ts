import { getSchemes } from "@/data/index";
import type { Scheme } from "@/data/scheme-types";
import { stateUtDirectory } from "@/data/state-schemes";

export interface AllIndiaScheme extends Scheme {
  coverage: "CENTRAL" | "STATE";
  appliesTo: string;
}

const centralStateCodes = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
  "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi",
  "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
];

function inferEducationLevels(text: string): string[] {
  const t = text.toLowerCase();
  const levels: string[] = [];
  if (
    t.includes("primary") ||
    t.includes("class 5-8") ||
    t.includes("class 5–8") ||
    t.includes("class 6 to ug") ||
    t.includes("class 8 to ug") ||
    t.includes("class 1 to 12") ||
    t.includes("class 1 to pg")
  ) {
    levels.push("PRIMARY", "UPPER_PRIMARY");
  }
  if (
    t.includes("secondary") ||
    t.includes("sslc") ||
    t.includes("hssc") ||
    t.includes("class 9-10") ||
    t.includes("class 9–10") ||
    t.includes("class 10 & 12") ||
    t.includes("class 10, 12")
  ) {
    levels.push("SECONDARY");
  }
  if (
    t.includes("higher secondary") ||
    t.includes("hs") ||
    t.includes("class 11") ||
    t.includes("class 12")
  ) {
    levels.push("HIGHER_SECONDARY");
  }
  if (t.includes("ug") || t.includes("undergraduate") || t.includes("graduation")) {
    levels.push("UNDERGRADUATE");
  }
  if (t.includes("pg") || t.includes("postgraduate") || t.includes("post graduate")) {
    levels.push("POSTGRADUATE");
  }
  if (t.includes("professional") || t.includes("technical")) {
    levels.push("PROFESSIONAL");
  }
  if (t.includes("diploma") || t.includes("certificate") || t.includes("iti")) {
    levels.push("DIPLOMA", "ITI");
  }
  return levels;
}

function stateSchemeToAllIndia(): AllIndiaScheme[] {
  return stateUtDirectory.flatMap((state) =>
    state.schemes.map((s) => ({
      scheme_id: s.id,
      scheme_name: s.name,
      category: "STATE" as const,
      state: state.name,
      coverage: "STATE" as const,
      appliesTo: `State/UT: ${state.name}`,
      official_website: s.url ?? state.portalUrl,
      scheme_status: "ACTIVE" as const,
      education_coverage: {
        education_level: inferEducationLevels(s.educationLevel),
      },
      benefit_details: {
        monetary: { scholarship_amount_description: s.benefit },
      },
      eligibility: {
        demographic: { state_requirement: state.name },
        economic: { family_income_limit: s.eligibility },
      },
    }))
  );
}

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
  return stateSchemeToAllIndia();
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
