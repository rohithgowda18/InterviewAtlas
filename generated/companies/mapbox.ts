import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "mapbox",
  name: "Mapbox",
  description: "Solve curated LeetCode questions asked in Mapbox interviews.",
  topics: ["Array", "Bit Manipulation", "Counting", "Design", "Hash Table", "Sorting", "String", "Trie"],
  roadmaps: {
    all: [
    {
      id: "mapbox_sort_integers_by_the_number_of_1_bits",
      difficulty: "Easy",
      title: "Sort Integers by The Number of 1 Bits",
      frequency: 100,
      link: "https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits",
      topics: ["Array", "Bit Manipulation", "Sorting", "Counting"]
    },
    {
      id: "mapbox_implement_trie_prefix_tree_",
      difficulty: "Medium",
      title: "Implement Trie (Prefix Tree)",
      frequency: 72.2,
      link: "https://leetcode.com/problems/implement-trie-prefix-tree",
      topics: ["Hash Table", "String", "Design", "Trie"]
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
      id: "mapbox_implement_trie_prefix_tree_",
      difficulty: "Medium",
      title: "Implement Trie (Prefix Tree)",
      frequency: 100,
      link: "https://leetcode.com/problems/implement-trie-prefix-tree",
      topics: ["Hash Table", "String", "Design", "Trie"]
    }
  ]
  }
};

export default companyData;
