import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "reddit",
  name: "Reddit",
  description: "Solve curated LeetCode questions asked in Reddit interviews.",
  topics: ["Array", "Binary Search", "Breadth-First Search", "Data Stream", "Design", "Doubly-Linked List", "Enumeration", "Hash Table", "Linked List", "Math", "Queue", "String"],
  roadmaps: {
    all: [
    {
      id: "reddit_word_ladder",
      difficulty: "Hard",
      title: "Word Ladder",
      frequency: 100,
      link: "https://leetcode.com/problems/word-ladder",
      topics: ["Hash Table", "String", "Breadth-First Search"]
    },
    {
      id: "reddit_number_of_ways_to_buy_pens_and_pencils",
      difficulty: "Medium",
      title: "Number of Ways to Buy Pens and Pencils",
      frequency: 96.2,
      link: "https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils",
      topics: ["Math", "Enumeration"]
    },
    {
      id: "reddit_lru_cache",
      difficulty: "Medium",
      title: "LRU Cache",
      frequency: 77.2,
      link: "https://leetcode.com/problems/lru-cache",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    },
    {
      id: "reddit_design_hit_counter",
      difficulty: "Medium",
      title: "Design Hit Counter",
      frequency: 71.2,
      link: "https://leetcode.com/problems/design-hit-counter",
      topics: ["Array", "Binary Search", "Design", "Queue", "Data Stream"]
    },
    {
      id: "reddit_logger_rate_limiter",
      difficulty: "Easy",
      title: "Logger Rate Limiter",
      frequency: 71.2,
      link: "https://leetcode.com/problems/logger-rate-limiter",
      topics: ["Hash Table", "Design", "Data Stream"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [

  ],
    sixMonths: [
    {
      id: "reddit_word_ladder",
      difficulty: "Hard",
      title: "Word Ladder",
      frequency: 100,
      link: "https://leetcode.com/problems/word-ladder",
      topics: ["Hash Table", "String", "Breadth-First Search"]
    }
  ],
    moreThanSixMonths: [
    {
      id: "reddit_word_ladder",
      difficulty: "Hard",
      title: "Word Ladder",
      frequency: 100,
      link: "https://leetcode.com/problems/word-ladder",
      topics: ["Hash Table", "String", "Breadth-First Search"]
    },
    {
      id: "reddit_lru_cache",
      difficulty: "Medium",
      title: "LRU Cache",
      frequency: 80.8,
      link: "https://leetcode.com/problems/lru-cache",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    },
    {
      id: "reddit_design_hit_counter",
      difficulty: "Medium",
      title: "Design Hit Counter",
      frequency: 74.8,
      link: "https://leetcode.com/problems/design-hit-counter",
      topics: ["Array", "Binary Search", "Design", "Queue", "Data Stream"]
    },
    {
      id: "reddit_logger_rate_limiter",
      difficulty: "Easy",
      title: "Logger Rate Limiter",
      frequency: 74.8,
      link: "https://leetcode.com/problems/logger-rate-limiter",
      topics: ["Hash Table", "Design", "Data Stream"]
    },
    {
      id: "reddit_number_of_ways_to_buy_pens_and_pencils",
      difficulty: "Medium",
      title: "Number of Ways to Buy Pens and Pencils",
      frequency: 66.3,
      link: "https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils",
      topics: ["Math", "Enumeration"]
    }
  ]
  }
};

export default companyData;
