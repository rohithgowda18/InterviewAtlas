// lib/analyticsEngine.ts
import { Question } from "@/types";

export type PriorityLevel = "HIGH" | "MEDIUM" | "LOW";

export interface CompanyTopicAnalytics {
  topicName: string;
  count: number;
  percentage: number;
  priority: PriorityLevel;
  solvedCount: number;
  progressPercentage: number;
}

export interface CompanyAnalyticsSummary {
  timeframeLabel: string;
  totalQuestions: number;
  topics: CompanyTopicAnalytics[];
  highPriorityTopics: CompanyTopicAnalytics[];
  mediumPriorityTopics: CompanyTopicAnalytics[];
  lowPriorityTopics: CompanyTopicAnalytics[];
  companyReadinessScore: number;
}

/**
 * Computes timeframe-specific topic analytics and readiness score derived dynamically
 * from the questions active in the selected tab/timeframe.
 */
export function computeTimeframeAnalytics(
  questions: readonly Question[],
  solvedQuestionIds: Set<string>,
  timeframeLabel: string = "All"
): CompanyAnalyticsSummary | null {
  if (!questions || questions.length === 0) return null;

  const totalQuestions = questions.length;
  const topicCounts: Map<string, { count: number; solvedCount: number }> = new Map();

  questions.forEach((q) => {
    const isSolved = solvedQuestionIds.has(q.id) || solvedQuestionIds.has(q.title);

    q.topics.forEach((tName) => {
      const existing = topicCounts.get(tName) || { count: 0, solvedCount: 0 };
      topicCounts.set(tName, {
        count: existing.count + 1,
        solvedCount: existing.solvedCount + (isSolved ? 1 : 0),
      });
    });
  });

  const sortedEntries = Array.from(topicCounts.entries()).sort((a, b) => b[1].count - a[1].count);
  const totalTopicsCount = sortedEntries.length;

  if (totalTopicsCount === 0) return null;

  // Classify into HIGH (Top 25%), MEDIUM (Middle 50%), LOW (Bottom 25%)
  const highCutoff = Math.max(1, Math.ceil(totalTopicsCount * 0.25));
  const lowCutoff = Math.max(1, Math.floor(totalTopicsCount * 0.75));

  const allTopicsAnalytics: CompanyTopicAnalytics[] = sortedEntries.map(([topicName, data], index) => {
    let priority: PriorityLevel = "MEDIUM";
    if (index < highCutoff) {
      priority = "HIGH";
    } else if (index >= lowCutoff) {
      priority = "LOW";
    }

    const progressPercentage = data.count > 0 ? Math.round((data.solvedCount / data.count) * 100) : 0;

    return {
      topicName,
      count: data.count,
      percentage: Math.round((data.count / totalQuestions) * 100),
      priority,
      solvedCount: data.solvedCount,
      progressPercentage,
    };
  });

  // Calculate weighted readiness score for this timeframe
  let totalWeight = 0;
  let weightedProgressSum = 0;

  allTopicsAnalytics.forEach((ta) => {
    const weight = ta.priority === "HIGH" ? 3 : ta.priority === "MEDIUM" ? 2 : 1;
    totalWeight += weight;
    weightedProgressSum += ta.progressPercentage * weight;
  });

  const companyReadinessScore = totalWeight > 0 ? Math.round(weightedProgressSum / totalWeight) : 0;

  return {
    timeframeLabel,
    totalQuestions,
    topics: allTopicsAnalytics,
    highPriorityTopics: allTopicsAnalytics.filter((t) => t.priority === "HIGH"),
    mediumPriorityTopics: allTopicsAnalytics.filter((t) => t.priority === "MEDIUM"),
    lowPriorityTopics: allTopicsAnalytics.filter((t) => t.priority === "LOW"),
    companyReadinessScore,
  };
}
