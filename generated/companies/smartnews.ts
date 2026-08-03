import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "smartnews",
  name: "smartnews",
  description: "Solve curated LeetCode questions asked in smartnews interviews.",
  topics: ["Design", "Doubly-Linked List", "Greedy", "Hash Table", "Linked List", "Sorting", "String"],
  roadmaps: {
    all: [
    {
      id: "smartnews_lru_cache",
      difficulty: "Medium",
      title: "LRU Cache",
      frequency: 100,
      link: "https://leetcode.com/problems/lru-cache",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    },
    {
      id: "smartnews_minimum_deletions_to_make_character_frequencies_unique",
      difficulty: "Medium",
      title: "Minimum Deletions to Make Character Frequencies Unique",
      frequency: 90.2,
      link: "https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique",
      topics: ["Hash Table", "String", "Greedy", "Sorting"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [

  ],
    sixMonths: [

  ],
    moreThanSixMonths: [
    {
      id: "smartnews_lru_cache",
      difficulty: "Medium",
      title: "LRU Cache",
      frequency: 100,
      link: "https://leetcode.com/problems/lru-cache",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    },
    {
      id: "smartnews_minimum_deletions_to_make_character_frequencies_unique",
      difficulty: "Medium",
      title: "Minimum Deletions to Make Character Frequencies Unique",
      frequency: 100,
      link: "https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique",
      topics: ["Hash Table", "String", "Greedy", "Sorting"]
    }
  ]
  }
};

export default companyData;
