import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "hpe",
  name: "HPE",
  description: "Solve curated LeetCode questions asked in HPE interviews.",
  topics: ["Array", "Backtracking", "Dynamic Programming", "Linked List", "Math", "Memoization", "Recursion", "String", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "hpe_merge_two_sorted_lists",
      difficulty: "Easy",
      title: "Merge Two Sorted Lists",
      frequency: 100,
      link: "https://leetcode.com/problems/merge-two-sorted-lists",
      topics: ["Linked List", "Recursion"]
    },
    {
      id: "hpe_combination_sum",
      difficulty: "Medium",
      title: "Combination Sum",
      frequency: 100,
      link: "https://leetcode.com/problems/combination-sum",
      topics: ["Array", "Backtracking"]
    },
    {
      id: "hpe_climbing_stairs",
      difficulty: "Easy",
      title: "Climbing Stairs",
      frequency: 100,
      link: "https://leetcode.com/problems/climbing-stairs",
      topics: ["Math", "Dynamic Programming", "Memoization"]
    },
    {
      id: "hpe_longest_palindromic_substring",
      difficulty: "Medium",
      title: "Longest Palindromic Substring",
      frequency: 100,
      link: "https://leetcode.com/problems/longest-palindromic-substring",
      topics: ["Two Pointers", "String", "Dynamic Programming"]
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
      id: "hpe_merge_two_sorted_lists",
      difficulty: "Easy",
      title: "Merge Two Sorted Lists",
      frequency: 100,
      link: "https://leetcode.com/problems/merge-two-sorted-lists",
      topics: ["Linked List", "Recursion"]
    },
    {
      id: "hpe_climbing_stairs",
      difficulty: "Easy",
      title: "Climbing Stairs",
      frequency: 100,
      link: "https://leetcode.com/problems/climbing-stairs",
      topics: ["Math", "Dynamic Programming", "Memoization"]
    },
    {
      id: "hpe_combination_sum",
      difficulty: "Medium",
      title: "Combination Sum",
      frequency: 100,
      link: "https://leetcode.com/problems/combination-sum",
      topics: ["Array", "Backtracking"]
    },
    {
      id: "hpe_longest_palindromic_substring",
      difficulty: "Medium",
      title: "Longest Palindromic Substring",
      frequency: 100,
      link: "https://leetcode.com/problems/longest-palindromic-substring",
      topics: ["Two Pointers", "String", "Dynamic Programming"]
    }
  ]
  }
};

export default companyData;
