// generated-v3/repositories/QuestionRepository.ts
import { questionMap } from "../questionMap";
import { questions } from "../questions";
import { difficultyMap } from "../difficultyMap";
import { searchIndex } from "../searchIndex";
import type { Question, Difficulty } from "../types";

export class QuestionRepository {
  /**
   * O(1) direct lookup of question by ID
   */
  static getById(id: number): Question | undefined {
    return questionMap[id];
  }

  /**
   * Batch O(1) lookup of multiple question IDs
   */
  static getByIds(ids: number[]): Question[] {
    const result: Question[] = [];
    for (let i = 0; i < ids.length; i++) {
      const q = questionMap[ids[i]];
      if (q) result.push(q);
    }
    return result;
  }

  /**
   * Fetch all questions array
   */
  static getAll(): readonly Question[] {
    return questions;
  }

  /**
   * Fetch questions by difficulty
   */
  static getByDifficulty(difficulty: Difficulty): readonly number[] {
    return difficultyMap[difficulty] || [];
  }
}
