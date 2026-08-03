import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "devrev",
  name: "DevRev",
  description: "Solve curated LeetCode questions asked in DevRev interviews.",
  topics: ["Array", "Counting", "Design", "Doubly-Linked List", "Hash Table", "Linked List"],
  roadmaps: {
    all: [
    {
      id: "devrev_check_if_array_pairs_are_divisible_by_k",
      difficulty: "Medium",
      title: "Check If Array Pairs Are Divisible by k",
      frequency: 100,
      link: "https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k",
      topics: ["Array", "Hash Table", "Counting"]
    },
    {
      id: "devrev_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 100,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "devrev_lfu_cache",
      difficulty: "Hard",
      title: "LFU Cache",
      frequency: 100,
      link: "https://leetcode.com/problems/lfu-cache",
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
      id: "devrev_check_if_array_pairs_are_divisible_by_k",
      difficulty: "Medium",
      title: "Check If Array Pairs Are Divisible by k",
      frequency: 100,
      link: "https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k",
      topics: ["Array", "Hash Table", "Counting"]
    },
    {
      id: "devrev_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 100,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "devrev_lfu_cache",
      difficulty: "Hard",
      title: "LFU Cache",
      frequency: 100,
      link: "https://leetcode.com/problems/lfu-cache",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    }
  ]
  }
};

export default companyData;
