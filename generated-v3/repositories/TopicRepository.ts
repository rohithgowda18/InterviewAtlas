// generated-v3/repositories/TopicRepository.ts
import { topics } from "../topics";
import { topicQuestionMap } from "../topicQuestionMap";
import type { Topic } from "../types";

export class TopicRepository {
  /**
   * Fetch all topics registry
   */
  static getAll(): readonly Topic[] {
    return topics;
  }

  /**
   * O(1) find topic object by topic ID
   */
  static getById(id: number): Topic | undefined {
    return topics.find((t) => t.id === id);
  }

  /**
   * O(1) find topic question IDs by topic ID
   */
  static getQuestionIdsByTopicId(topicId: number): readonly number[] {
    return topicQuestionMap[topicId] || [];
  }
}
