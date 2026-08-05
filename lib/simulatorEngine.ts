// lib/simulatorEngine.ts
import { Question, Difficulty } from "@/types";

export type InterviewMode = "quick" | "standard" | "full";
export type TargetRole = "SDE-1" | "SDE-2";

export interface InterviewConfig {
  mode: InterviewMode;
  targetRole: TargetRole;
  durationMinutes: number;
  questionCount: number;
}

export interface InterviewSession {
  id: string;
  companySlug: string;
  companyName: string;
  config: InterviewConfig;
  startTime: number;
  questions: {
    question: Question;
    expectedTimeMinutes: number;
    solved: boolean;
    solvedAt?: number;
  }[];
  currentQuestionIndex: number;
  completed: boolean;
  completedAt?: number;
}

export const MODE_CONFIGS: Record<InterviewMode, InterviewConfig> = {
  quick: {
    mode: "quick",
    targetRole: "SDE-1",
    durationMinutes: 15,
    questionCount: 3,
  },
  standard: {
    mode: "standard",
    targetRole: "SDE-1",
    durationMinutes: 45,
    questionCount: 5,
  },
  full: {
    mode: "full",
    targetRole: "SDE-2",
    durationMinutes: 90,
    questionCount: 8,
  },
};

/**
 * Generate a realistic, non-repeating topic interview for a company using V1 questions.
 */
export function generateInterviewSessionFromV1(
  companySlug: string,
  companyName: string,
  allCompanyQuestions: readonly Question[],
  mode: InterviewMode = "standard",
  targetRole: TargetRole = "SDE-1"
): InterviewSession | null {
  if (!allCompanyQuestions || allCompanyQuestions.length === 0) {
    return null;
  }

  const baseConfig = MODE_CONFIGS[mode];
  const config: InterviewConfig = { ...baseConfig, targetRole };
  const targetCount = config.questionCount;

  // 1. Determine target difficulty progression sequence
  const targetDifficulties: Difficulty[] = getDifficultyProgression(targetRole, targetCount);

  // 2. Rank topics by frequency in company questions
  const topicCounts: Map<string, number> = new Map();
  allCompanyQuestions.forEach((q) => {
    q.topics.forEach((t) => {
      topicCounts.set(t, (topicCounts.get(t) || 0) + 1);
    });
  });

  const rankedTopics = Array.from(topicCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([tName]) => tName);

  // 3. Select questions with unique topics according to difficulty progression
  const selectedQuestions: Question[] = [];
  const usedTopics = new Set<string>();
  const usedQuestionIds = new Set<string>();

  for (let i = 0; i < targetCount; i++) {
    const targetDiff = targetDifficulties[i];
    let chosen: Question | null = null;

    // Try finding unused topic first
    for (const tName of rankedTopics) {
      if (usedTopics.has(tName)) continue;

      const candidates = allCompanyQuestions.filter(
        (q) =>
          !usedQuestionIds.has(q.id) &&
          q.topics.includes(tName) &&
          q.difficulty === targetDiff
      );

      if (candidates.length > 0) {
        // Prefer higher frequency question
        candidates.sort((a, b) => b.frequency - a.frequency);
        chosen = candidates[0];
        usedTopics.add(tName);
        break;
      }
    }

    // Fallback 1: Match target difficulty even if topic repeats
    if (!chosen) {
      const candidates = allCompanyQuestions.filter(
        (q) => !usedQuestionIds.has(q.id) && q.difficulty === targetDiff
      );
      if (candidates.length > 0) {
        candidates.sort((a, b) => b.frequency - a.frequency);
        chosen = candidates[0];
      }
    }

    // Fallback 2: Any available question for company
    if (!chosen) {
      const candidates = allCompanyQuestions.filter((q) => !usedQuestionIds.has(q.id));
      if (candidates.length > 0) {
        chosen = candidates[0];
      }
    }

    if (chosen) {
      selectedQuestions.push(chosen);
      usedQuestionIds.add(chosen.id);
      chosen.topics.forEach((tName) => usedTopics.add(tName));
    }
  }

  const expectedTimePerQuestion = Math.round(config.durationMinutes / (selectedQuestions.length || 1));

  return {
    id: `sim_${companySlug}_${Date.now()}`,
    companySlug,
    companyName,
    config,
    startTime: Date.now(),
    questions: selectedQuestions.map((q) => ({
      question: q,
      expectedTimeMinutes: expectedTimePerQuestion,
      solved: false,
    })),
    currentQuestionIndex: 0,
    completed: false,
  };
}

function getDifficultyProgression(role: TargetRole, count: number): Difficulty[] {
  if (role === "SDE-1") {
    if (count === 3) return ["Easy", "Medium", "Medium"];
    if (count === 5) return ["Easy", "Medium", "Medium", "Medium", "Hard"];
    return ["Easy", "Easy", "Medium", "Medium", "Medium", "Hard", "Hard", "Hard"];
  } else {
    // SDE-2
    if (count === 3) return ["Medium", "Medium", "Hard"];
    if (count === 5) return ["Medium", "Medium", "Hard", "Hard", "Hard"];
    return ["Medium", "Medium", "Medium", "Hard", "Hard", "Hard", "Hard", "Hard"];
  }
}

/**
 * Storage helpers for local session persistence
 */
const SIMULATOR_STORAGE_KEY = "ia_simulator_session_v1";

export function saveSimulatorSession(session: InterviewSession): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(SIMULATOR_STORAGE_KEY, JSON.stringify(session));
}

export function loadSimulatorSession(companySlug?: string): InterviewSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(SIMULATOR_STORAGE_KEY);
    if (!raw) return null;
    const session: InterviewSession = JSON.parse(raw);
    if (companySlug && session.companySlug !== companySlug) return null;
    return session;
  } catch {
    return null;
  }
}

export function clearSimulatorSession(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SIMULATOR_STORAGE_KEY);
}
