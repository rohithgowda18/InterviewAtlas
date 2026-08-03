export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Question {
  readonly id: string;
  readonly difficulty: Difficulty;
  readonly title: string;
  readonly frequency: number;
  readonly link: string;
  readonly topics: readonly string[];
}

export interface Metadata {
  readonly totalCompanies: number;
  readonly totalQuestions: number;
  readonly topics: number;
}
