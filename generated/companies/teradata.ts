import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "teradata",
  name: "Teradata",
  description: "Solve curated LeetCode questions asked in Teradata interviews.",
  topics: ["Array", "Binary Search", "Bit Manipulation", "Dynamic Programming", "Memoization", "Sorting", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "teradata_remove_boxes",
      difficulty: "Hard",
      title: "Remove Boxes",
      frequency: 100,
      link: "https://leetcode.com/problems/remove-boxes",
      topics: ["Array", "Dynamic Programming", "Memoization"]
    },
    {
      id: "teradata_minimum_operations_to_make_binary_palindrome",
      difficulty: "Medium",
      title: "Minimum Operations to Make Binary Palindrome",
      frequency: 95.3,
      link: "https://leetcode.com/problems/minimum-operations-to-make-binary-palindrome",
      topics: ["Array", "Two Pointers", "Binary Search", "Bit Manipulation"]
    },
    {
      id: "teradata_count_pairs_in_two_arrays",
      difficulty: "Medium",
      title: "Count Pairs in Two Arrays",
      frequency: 66,
      link: "https://leetcode.com/problems/count-pairs-in-two-arrays",
      topics: ["Array", "Two Pointers", "Binary Search", "Sorting"]
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
      id: "teradata_remove_boxes",
      difficulty: "Hard",
      title: "Remove Boxes",
      frequency: 100,
      link: "https://leetcode.com/problems/remove-boxes",
      topics: ["Array", "Dynamic Programming", "Memoization"]
    },
    {
      id: "teradata_count_pairs_in_two_arrays",
      difficulty: "Medium",
      title: "Count Pairs in Two Arrays",
      frequency: 67.9,
      link: "https://leetcode.com/problems/count-pairs-in-two-arrays",
      topics: ["Array", "Two Pointers", "Binary Search", "Sorting"]
    }
  ]
  }
};

export default companyData;
