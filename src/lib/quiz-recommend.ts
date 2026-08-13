import type { InterestId } from "@/lib/quiz-store";

export interface QuizSubPath {
  id: string;
  name: string;
  streamIds: string[];
  underrated: boolean;
  low_budget: boolean;
  low_percent: boolean;
}

export interface QuizDomain {
  id: string;
  title: string;
  color: string;
  sub_paths: QuizSubPath[];
}

const AFFINITY: Record<string, Record<InterestId, number>> = {
  eng: { analyze: 3, create: 1, help: 1, lead: 1 },
  med: { analyze: 2, create: 0, help: 3, lead: 1 },
  civ: { analyze: 1, create: 0, help: 2, lead: 3 },
  law: { analyze: 2, create: 1, help: 2, lead: 2 },
  edu: { analyze: 1, create: 1, help: 3, lead: 1 },
  lng: { analyze: 2, create: 2, help: 1, lead: 0 },
  trd: { analyze: 1, create: 2, help: 1, lead: 1 },
  hum: { analyze: 2, create: 2, help: 2, lead: 0 },
  des: { analyze: 1, create: 3, help: 1, lead: 1 },
  bwp: { analyze: 0, create: 2, help: 2, lead: 1 },
  bm: { analyze: 2, create: 2, help: 0, lead: 3 },
  def: { analyze: 1, create: 0, help: 2, lead: 3 },
  psy: { analyze: 2, create: 1, help: 3, lead: 0 },
  arc: { analyze: 1, create: 3, help: 1, lead: 1 },
  hos: { analyze: 0, create: 1, help: 2, lead: 2 },
};

const FLAG_MATCH: Record<string, (sp: QuizSubPath) => boolean> = {
  underrated: (sp) => sp.underrated,
  lowBudget: (sp) => sp.low_budget,
  lowPercent: (sp) => sp.low_percent,
};

export interface Recommendation {
  domain: QuizDomain;
  score: number;
  matches: QuizSubPath[];
}

export function getRecommendations(input: {
  stream: string;
  interests: string[];
  flags: string[];
  domains: QuizDomain[];
}): Recommendation[] {
  const { stream, interests, flags, domains } = input;
  const wantFlags = flags.length > 0;

  const scored = domains
    .map((domain) => {
      const matches = domain.sub_paths.filter((sp) =>
        sp.streamIds.includes(stream as never)
      );
      if (matches.length === 0) return null;

      let score = 0;
      for (const interest of interests) {
        score += AFFINITY[domain.id]?.[interest as InterestId] ?? 0;
      }

      let careerMatches = matches;
      if (wantFlags) {
        careerMatches = matches.filter((sp) =>
          flags.every((f) => FLAG_MATCH[f]?.(sp))
        );
        if (careerMatches.length > 0) {
          score += 2 + careerMatches.length;
        } else {
          score -= 2;
        }
      }

      return {
        domain,
        score,
        matches: careerMatches.slice(0, 3),
      };
    })
    .filter((r): r is Recommendation => r !== null)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, 5);
}
