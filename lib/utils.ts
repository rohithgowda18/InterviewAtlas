import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Question } from "@/types";

// Class Name merger utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Progress computation helpers
export function calculateProgressPercentage(solved: number, total: number): number {
  if (total === 0) return 0;
  return (solved / total) * 100;
}

export function calculateRemaining(total: number, solved: number): number {
  return Math.max(0, total - solved);
}

// Bookmarks helpers
export function isQuestionBookmarked(questionId: string, bookmarkedIds: Set<string>): boolean {
  return bookmarkedIds.has(questionId);
}

export function countBookmarkedQuestions(questionIds: string[], bookmarkedIds: Set<string>): number {
  return questionIds.filter((id) => bookmarkedIds.has(id)).length;
}

// Sorting utility
export type SortField = "frequency" | "alphabetical" | "difficulty";
export type SortOrder = "asc" | "desc";

export function sortQuestions(
  questions: readonly Question[],
  sortBy: SortField,
  sortOrder: SortOrder
): readonly Question[] {
  const sorted = [...questions];

  const difficultyPriority = {
    Easy: 1,
    Medium: 2,
    Hard: 3,
  };

  sorted.sort((a, b) => {
    let comparison = 0;

    if (sortBy === "frequency") {
      comparison = a.frequency - b.frequency;
    } else if (sortBy === "alphabetical") {
      comparison = a.title.localeCompare(b.title);
    } else if (sortBy === "difficulty") {
      comparison = difficultyPriority[a.difficulty] - difficultyPriority[b.difficulty];
    }

    return sortOrder === "asc" ? comparison : -comparison;
  });

  return sorted;
}

// Filtering utility
export interface FilterOptions {
  search: string;
  difficulty: string;
  topic: string;
  showSolved: "all" | "solved" | "unsolved";
  showBookmarked: boolean;
}

export function filterQuestions(
  questions: readonly Question[],
  filters: FilterOptions,
  solvedIds: Set<string>,
  bookmarkedIds: Set<string>
): readonly Question[] {
  return questions.filter((q) => {
    if (
      filters.search &&
      !q.title.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }

    if (filters.difficulty && filters.difficulty !== "all") {
      if (q.difficulty.toLowerCase() !== filters.difficulty.toLowerCase()) {
        return false;
      }
    }

    if (filters.topic && filters.topic !== "all") {
      if (!q.topics.some((t) => t.toLowerCase() === filters.topic.toLowerCase())) {
        return false;
      }
    }

    if (filters.showSolved === "solved" && !solvedIds.has(q.id)) {
      return false;
    }
    if (filters.showSolved === "unsolved" && solvedIds.has(q.id)) {
      return false;
    }

    if (filters.showBookmarked && !bookmarkedIds.has(q.id)) {
      return false;
    }

    return true;
  });
}
