import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "nykaa",
  name: "Nykaa",
  description: "Solve curated LeetCode questions asked in Nykaa interviews.",
  topics: ["Array", "Dynamic Programming", "Greedy", "Hash Table", "Matrix", "Sorting", "Stack", "String", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "nykaa_largest_number",
      difficulty: "Medium",
      title: "Largest Number",
      frequency: 100,
      link: "https://leetcode.com/problems/largest-number",
      topics: ["Array", "String", "Greedy", "Sorting"]
    },
    {
      id: "nykaa_longest_valid_parentheses",
      difficulty: "Hard",
      title: "Longest Valid Parentheses",
      frequency: 92.6,
      link: "https://leetcode.com/problems/longest-valid-parentheses",
      topics: ["String", "Dynamic Programming", "Stack"]
    },
    {
      id: "nykaa_set_matrix_zeroes",
      difficulty: "Medium",
      title: "Set Matrix Zeroes",
      frequency: 82.1,
      link: "https://leetcode.com/problems/set-matrix-zeroes",
      topics: ["Array", "Hash Table", "Matrix"]
    },
    {
      id: "nykaa_reverse_words_in_a_string",
      difficulty: "Medium",
      title: "Reverse Words in a String",
      frequency: 82.1,
      link: "https://leetcode.com/problems/reverse-words-in-a-string",
      topics: ["Two Pointers", "String"]
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
      id: "nykaa_largest_number",
      difficulty: "Medium",
      title: "Largest Number",
      frequency: 100,
      link: "https://leetcode.com/problems/largest-number",
      topics: ["Array", "String", "Greedy", "Sorting"]
    },
    {
      id: "nykaa_reverse_words_in_a_string",
      difficulty: "Medium",
      title: "Reverse Words in a String",
      frequency: 82.3,
      link: "https://leetcode.com/problems/reverse-words-in-a-string",
      topics: ["Two Pointers", "String"]
    },
    {
      id: "nykaa_longest_valid_parentheses",
      difficulty: "Hard",
      title: "Longest Valid Parentheses",
      frequency: 82.3,
      link: "https://leetcode.com/problems/longest-valid-parentheses",
      topics: ["String", "Dynamic Programming", "Stack"]
    }
  ]
  }
};

export default companyData;
