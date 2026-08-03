import { Question } from "./question";

export interface Roadmap {
  readonly all: readonly Question[];
  readonly thirtyDays: readonly Question[];
  readonly threeMonths: readonly Question[];
  readonly sixMonths: readonly Question[];
  readonly moreThanSixMonths: readonly Question[];
}

export interface Company {
  readonly name: string;
  readonly slug: string;
  readonly totalQuestions: number;
  readonly difficultyCounts: {
    readonly Easy: number;
    readonly Medium: number;
    readonly Hard: number;
  };
  readonly description?: string;
}

export interface CompanyData {
  readonly slug: string;
  readonly name: string;
  readonly description: string;
  readonly topics: readonly string[];
  readonly roadmaps: Roadmap;
}
