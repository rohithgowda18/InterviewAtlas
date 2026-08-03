import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "highspot",
  name: "Highspot",
  description: "Solve curated LeetCode questions asked in Highspot interviews.",
  topics: ["Design", "Doubly-Linked List", "Hash Table", "Linked List", "Math", "Stack", "String"],
  roadmaps: {
    all: [
    {
      id: "highspot_lru_cache",
      difficulty: "Medium",
      title: "LRU Cache",
      frequency: 100,
      link: "https://leetcode.com/problems/lru-cache",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    },
    {
      id: "highspot_basic_calculator_ii",
      difficulty: "Medium",
      title: "Basic Calculator II",
      frequency: 100,
      link: "https://leetcode.com/problems/basic-calculator-ii",
      topics: ["Math", "String", "Stack"]
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
      id: "highspot_lru_cache",
      difficulty: "Medium",
      title: "LRU Cache",
      frequency: 100,
      link: "https://leetcode.com/problems/lru-cache",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    },
    {
      id: "highspot_basic_calculator_ii",
      difficulty: "Medium",
      title: "Basic Calculator II",
      frequency: 100,
      link: "https://leetcode.com/problems/basic-calculator-ii",
      topics: ["Math", "String", "Stack"]
    }
  ]
  }
};

export default companyData;
