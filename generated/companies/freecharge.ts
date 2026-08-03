import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "freecharge",
  name: "Freecharge",
  description: "Solve curated LeetCode questions asked in Freecharge interviews.",
  topics: ["Array", "Design", "Doubly-Linked List", "Dynamic Programming", "Hash Table", "Linked List", "Sliding Window", "String"],
  roadmaps: {
    all: [
    {
      id: "freecharge_lru_cache",
      difficulty: "Medium",
      title: "LRU Cache",
      frequency: 100,
      link: "https://leetcode.com/problems/lru-cache",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    },
    {
      id: "freecharge_longest_substring_without_repeating_characters",
      difficulty: "Medium",
      title: "Longest Substring Without Repeating Characters",
      frequency: 89.1,
      link: "https://leetcode.com/problems/longest-substring-without-repeating-characters",
      topics: ["Hash Table", "String", "Sliding Window"]
    },
    {
      id: "freecharge_house_robber",
      difficulty: "Medium",
      title: "House Robber",
      frequency: 89.1,
      link: "https://leetcode.com/problems/house-robber",
      topics: ["Array", "Dynamic Programming"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [

  ],
    sixMonths: [
    {
      id: "freecharge_house_robber",
      difficulty: "Medium",
      title: "House Robber",
      frequency: 100,
      link: "https://leetcode.com/problems/house-robber",
      topics: ["Array", "Dynamic Programming"]
    }
  ],
    moreThanSixMonths: [
    {
      id: "freecharge_lru_cache",
      difficulty: "Medium",
      title: "LRU Cache",
      frequency: 100,
      link: "https://leetcode.com/problems/lru-cache",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    },
    {
      id: "freecharge_longest_substring_without_repeating_characters",
      difficulty: "Medium",
      title: "Longest Substring Without Repeating Characters",
      frequency: 89.4,
      link: "https://leetcode.com/problems/longest-substring-without-repeating-characters",
      topics: ["Hash Table", "String", "Sliding Window"]
    }
  ]
  }
};

export default companyData;
