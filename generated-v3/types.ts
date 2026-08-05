// generated-v3/types.ts
/**
 * Data Architecture Type Definitions
 * Purpose: Central interface contract for V3 entities and repositories.
 */

export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Question {
  id: number;
  title: string;
  difficulty: Difficulty;
  topicIds: number[];
  link: string;
}

export interface Topic {
  id: number;
  name: string;
  questionCount: number;
}

export interface CompanyFile {
  id: number;
  slug: string;
  name: string;
  totalQuestions: number;
  easy: number;
  medium: number;
  hard: number;
  questionIds: number[];
  frequencyMap: {
    [questionId: number]: {
      frequency: number;
      timeframe: 0 | 1 | 2 | 3 | 4;
    };
  };
}

export interface CompanyStat {
  id: number;
  totalQuestions: number;
  easy: number;
  medium: number;
  hard: number;
  topTopics: {
    topicId: number;
    count: number;
  }[];
}
