import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "zynga",
  name: "Zynga",
  description: "Solve curated LeetCode questions asked in Zynga interviews.",
  topics: ["Array", "Bucket Sort", "Counting", "Hash Table", "Heap (Priority Queue)", "Linked List", "Recursion", "Sorting", "String", "Trie"],
  roadmaps: {
    all: [
    {
      id: "zynga_reverse_linked_list",
      difficulty: "Easy",
      title: "Reverse Linked List",
      frequency: 100,
      link: "https://leetcode.com/problems/reverse-linked-list",
      topics: ["Linked List", "Recursion"]
    },
    {
      id: "zynga_top_k_frequent_words",
      difficulty: "Medium",
      title: "Top K Frequent Words",
      frequency: 100,
      link: "https://leetcode.com/problems/top-k-frequent-words",
      topics: ["Array", "Hash Table", "String", "Trie", "Sorting", "Heap (Priority Queue)", "Bucket Sort", "Counting"]
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
      id: "zynga_reverse_linked_list",
      difficulty: "Easy",
      title: "Reverse Linked List",
      frequency: 100,
      link: "https://leetcode.com/problems/reverse-linked-list",
      topics: ["Linked List", "Recursion"]
    },
    {
      id: "zynga_top_k_frequent_words",
      difficulty: "Medium",
      title: "Top K Frequent Words",
      frequency: 100,
      link: "https://leetcode.com/problems/top-k-frequent-words",
      topics: ["Array", "Hash Table", "String", "Trie", "Sorting", "Heap (Priority Queue)", "Bucket Sort", "Counting"]
    }
  ]
  }
};

export default companyData;
