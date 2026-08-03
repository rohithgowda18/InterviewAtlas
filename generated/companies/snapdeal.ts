import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "snapdeal",
  name: "Snapdeal",
  description: "Solve curated LeetCode questions asked in Snapdeal interviews.",
  topics: ["Array", "Binary Search", "Binary Tree", "Depth-First Search", "Dynamic Programming", "Hash Table", "Tree"],
  roadmaps: {
    all: [
    {
      id: "snapdeal_longest_arithmetic_subsequence",
      difficulty: "Medium",
      title: "Longest Arithmetic Subsequence",
      frequency: 100,
      link: "https://leetcode.com/problems/longest-arithmetic-subsequence",
      topics: ["Array", "Hash Table", "Binary Search", "Dynamic Programming"]
    },
    {
      id: "snapdeal_diameter_of_binary_tree",
      difficulty: "Easy",
      title: "Diameter of Binary Tree",
      frequency: 67.8,
      link: "https://leetcode.com/problems/diameter-of-binary-tree",
      topics: ["Tree", "Depth-First Search", "Binary Tree"]
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
      id: "snapdeal_longest_arithmetic_subsequence",
      difficulty: "Medium",
      title: "Longest Arithmetic Subsequence",
      frequency: 100,
      link: "https://leetcode.com/problems/longest-arithmetic-subsequence",
      topics: ["Array", "Hash Table", "Binary Search", "Dynamic Programming"]
    },
    {
      id: "snapdeal_diameter_of_binary_tree",
      difficulty: "Easy",
      title: "Diameter of Binary Tree",
      frequency: 100,
      link: "https://leetcode.com/problems/diameter-of-binary-tree",
      topics: ["Tree", "Depth-First Search", "Binary Tree"]
    }
  ]
  }
};

export default companyData;
