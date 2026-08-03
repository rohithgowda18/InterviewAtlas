import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "stackadapt",
  name: "StackAdapt",
  description: "Solve curated LeetCode questions asked in StackAdapt interviews.",
  topics: ["Array", "Binary Search", "Data Stream", "Design", "Doubly-Linked List", "Hash Table", "Heap (Priority Queue)", "Linked List", "Sorting", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "stackadapt_lru_cache",
      difficulty: "Medium",
      title: "LRU Cache",
      frequency: 100,
      link: "https://leetcode.com/problems/lru-cache",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    },
    {
      id: "stackadapt_find_median_from_data_stream",
      difficulty: "Hard",
      title: "Find Median from Data Stream",
      frequency: 92.9,
      link: "https://leetcode.com/problems/find-median-from-data-stream",
      topics: ["Two Pointers", "Design", "Sorting", "Heap (Priority Queue)", "Data Stream"]
    },
    {
      id: "stackadapt_snapshot_array",
      difficulty: "Medium",
      title: "Snapshot Array",
      frequency: 92.9,
      link: "https://leetcode.com/problems/snapshot-array",
      topics: ["Array", "Hash Table", "Binary Search", "Design"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [

  ],
    sixMonths: [
    {
      id: "stackadapt_lru_cache",
      difficulty: "Medium",
      title: "LRU Cache",
      frequency: 100,
      link: "https://leetcode.com/problems/lru-cache",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    }
  ],
    moreThanSixMonths: [
    {
      id: "stackadapt_snapshot_array",
      difficulty: "Medium",
      title: "Snapshot Array",
      frequency: 100,
      link: "https://leetcode.com/problems/snapshot-array",
      topics: ["Array", "Hash Table", "Binary Search", "Design"]
    },
    {
      id: "stackadapt_find_median_from_data_stream",
      difficulty: "Hard",
      title: "Find Median from Data Stream",
      frequency: 100,
      link: "https://leetcode.com/problems/find-median-from-data-stream",
      topics: ["Two Pointers", "Design", "Sorting", "Heap (Priority Queue)", "Data Stream"]
    },
    {
      id: "stackadapt_lru_cache",
      difficulty: "Medium",
      title: "LRU Cache",
      frequency: 89.6,
      link: "https://leetcode.com/problems/lru-cache",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    }
  ]
  }
};

export default companyData;
