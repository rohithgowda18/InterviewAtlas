import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "navan",
  name: "Navan",
  description: "Solve curated LeetCode questions asked in Navan interviews.",
  topics: ["Array", "Breadth-First Search", "Design", "Doubly-Linked List", "Dynamic Programming", "Hash Table", "Linked List", "String"],
  roadmaps: {
    all: [
    {
      id: "navan_word_ladder",
      difficulty: "Hard",
      title: "Word Ladder",
      frequency: 100,
      link: "https://leetcode.com/problems/word-ladder",
      topics: ["Hash Table", "String", "Breadth-First Search"]
    },
    {
      id: "navan_paint_house",
      difficulty: "Medium",
      title: "Paint House",
      frequency: 100,
      link: "https://leetcode.com/problems/paint-house",
      topics: ["Array", "Dynamic Programming"]
    },
    {
      id: "navan_lru_cache",
      difficulty: "Medium",
      title: "LRU Cache",
      frequency: 89.6,
      link: "https://leetcode.com/problems/lru-cache",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
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
      id: "navan_paint_house",
      difficulty: "Medium",
      title: "Paint House",
      frequency: 100,
      link: "https://leetcode.com/problems/paint-house",
      topics: ["Array", "Dynamic Programming"]
    },
    {
      id: "navan_word_ladder",
      difficulty: "Hard",
      title: "Word Ladder",
      frequency: 90.1,
      link: "https://leetcode.com/problems/word-ladder",
      topics: ["Hash Table", "String", "Breadth-First Search"]
    }
  ]
  }
};

export default companyData;
