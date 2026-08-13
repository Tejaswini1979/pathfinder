export type StreamId = "maths" | "bio" | "commerce" | "arts";
export type InterestId = "analyze" | "create" | "help" | "lead";

export interface StreamMeta {
  id: StreamId;
  title: string;
  sub: string;
}

export interface InterestMeta {
  id: InterestId;
  title: string;
  sub: string;
}

export interface DomainMeta {
  id: string;
  title: string;
  tagline: string;
  color: string;
  subPathCount: number;
  underratedCount: number;
  lowBudgetCount: number;
  lowPercentCount: number;
}

export interface SubPath {
  id: string;
  name: string;
  description: string;
  streams: string[];
  streamIds: StreamId[];
  domainId: string;
  domainTitle: string;
  min_12th_percent: string;
  entry_route: string;
  qualification: string;
  duration: string;
  entrance_exam: string;
  govt_fees: string;
  private_fees: string;
  top_institutions: string[];
  scholarships: string[];
  abroad_pathways: string;
  day_in_life: string;
  growth_path: string;
  underrated: boolean;
  low_budget: boolean;
  low_percent: boolean;
  salary_bands: string;
  confidence: string;
}

export interface Domain extends DomainMeta {
  overview: string;
  key_insights: string[];
  sub_paths: SubPath[];
  confidence_notes: string[];
}

export interface DomainsManifest {
  generatedAt: string;
  domains: DomainMeta[];
}
