import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "cme-group",
  name: "CME Group",
  description: "Solve curated LeetCode questions asked in CME Group interviews.",
  topics: ["Array", "Divide and Conquer", "Greedy", "Heap (Priority Queue)", "Linked List", "Merge Sort", "String", "Trie"],
  roadmaps: {
    all: [
    {
      id: "cme-group_gas_station",
      difficulty: "Medium",
      title: "Gas Station",
      frequency: 100,
      link: "https://leetcode.com/problems/gas-station",
      topics: ["Array", "Greedy"]
    },
    {
      id: "cme-group_longest_common_prefix",
      difficulty: "Easy",
      title: "Longest Common Prefix",
      frequency: 96.6,
      link: "https://leetcode.com/problems/longest-common-prefix",
      topics: ["Array", "String", "Trie"]
    },
    {
      id: "cme-group_merge_k_sorted_lists",
      difficulty: "Hard",
      title: "Merge k Sorted Lists",
      frequency: 72.7,
      link: "https://leetcode.com/problems/merge-k-sorted-lists",
      topics: ["Linked List", "Divide and Conquer", "Heap (Priority Queue)", "Merge Sort"]
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
      id: "cme-group_longest_common_prefix",
      difficulty: "Easy",
      title: "Longest Common Prefix",
      frequency: 100,
      link: "https://leetcode.com/problems/longest-common-prefix",
      topics: ["Array", "String", "Trie"]
    },
    {
      id: "cme-group_gas_station",
      difficulty: "Medium",
      title: "Gas Station",
      frequency: 100,
      link: "https://leetcode.com/problems/gas-station",
      topics: ["Array", "Greedy"]
    },
    {
      id: "cme-group_merge_k_sorted_lists",
      difficulty: "Hard",
      title: "Merge k Sorted Lists",
      frequency: 75.5,
      link: "https://leetcode.com/problems/merge-k-sorted-lists",
      topics: ["Linked List", "Divide and Conquer", "Heap (Priority Queue)", "Merge Sort"]
    }
  ]
  }
};

export default companyData;
