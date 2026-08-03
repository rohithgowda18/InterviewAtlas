import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "thousandeyes",
  name: "ThousandEyes",
  description: "Solve curated LeetCode questions asked in ThousandEyes interviews.",
  topics: ["Array", "Design", "Doubly-Linked List", "Dynamic Programming", "Hash Table", "Linked List", "Monotonic Stack", "Prefix Sum", "Stack", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "thousandeyes_lru_cache",
      difficulty: "Medium",
      title: "LRU Cache",
      frequency: 100,
      link: "https://leetcode.com/problems/lru-cache",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    },
    {
      id: "thousandeyes_trapping_rain_water",
      difficulty: "Hard",
      title: "Trapping Rain Water",
      frequency: 100,
      link: "https://leetcode.com/problems/trapping-rain-water",
      topics: ["Array", "Two Pointers", "Dynamic Programming", "Stack", "Monotonic Stack"]
    },
    {
      id: "thousandeyes_product_of_array_except_self",
      difficulty: "Medium",
      title: "Product of Array Except Self",
      frequency: 100,
      link: "https://leetcode.com/problems/product-of-array-except-self",
      topics: ["Array", "Prefix Sum"]
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
      id: "thousandeyes_lru_cache",
      difficulty: "Medium",
      title: "LRU Cache",
      frequency: 100,
      link: "https://leetcode.com/problems/lru-cache",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    },
    {
      id: "thousandeyes_trapping_rain_water",
      difficulty: "Hard",
      title: "Trapping Rain Water",
      frequency: 100,
      link: "https://leetcode.com/problems/trapping-rain-water",
      topics: ["Array", "Two Pointers", "Dynamic Programming", "Stack", "Monotonic Stack"]
    },
    {
      id: "thousandeyes_product_of_array_except_self",
      difficulty: "Medium",
      title: "Product of Array Except Self",
      frequency: 100,
      link: "https://leetcode.com/problems/product-of-array-except-self",
      topics: ["Array", "Prefix Sum"]
    }
  ]
  }
};

export default companyData;
