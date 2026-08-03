import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "cohesity",
  name: "Cohesity",
  description: "Solve curated LeetCode questions asked in Cohesity interviews.",
  topics: ["Array", "Binary Search", "Breadth-First Search", "Data Stream", "Depth-First Search", "Design", "Doubly-Linked List", "Hash Table", "Heap (Priority Queue)", "Linked List", "Matrix", "Sorting", "Two Pointers", "Union Find"],
  roadmaps: {
    all: [
    {
      id: "cohesity_lru_cache",
      difficulty: "Medium",
      title: "LRU Cache",
      frequency: 100,
      link: "https://leetcode.com/problems/lru-cache",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    },
    {
      id: "cohesity_path_with_minimum_effort",
      difficulty: "Medium",
      title: "Path With Minimum Effort",
      frequency: 88.3,
      link: "https://leetcode.com/problems/path-with-minimum-effort",
      topics: ["Array", "Binary Search", "Depth-First Search", "Breadth-First Search", "Union Find", "Heap (Priority Queue)", "Matrix"]
    },
    {
      id: "cohesity_find_median_from_data_stream",
      difficulty: "Hard",
      title: "Find Median from Data Stream",
      frequency: 88.3,
      link: "https://leetcode.com/problems/find-median-from-data-stream",
      topics: ["Two Pointers", "Design", "Sorting", "Heap (Priority Queue)", "Data Stream"]
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
      id: "cohesity_lru_cache",
      difficulty: "Medium",
      title: "LRU Cache",
      frequency: 100,
      link: "https://leetcode.com/problems/lru-cache",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    },
    {
      id: "cohesity_path_with_minimum_effort",
      difficulty: "Medium",
      title: "Path With Minimum Effort",
      frequency: 88.6,
      link: "https://leetcode.com/problems/path-with-minimum-effort",
      topics: ["Array", "Binary Search", "Depth-First Search", "Breadth-First Search", "Union Find", "Heap (Priority Queue)", "Matrix"]
    },
    {
      id: "cohesity_find_median_from_data_stream",
      difficulty: "Hard",
      title: "Find Median from Data Stream",
      frequency: 88.6,
      link: "https://leetcode.com/problems/find-median-from-data-stream",
      topics: ["Two Pointers", "Design", "Sorting", "Heap (Priority Queue)", "Data Stream"]
    }
  ]
  }
};

export default companyData;
