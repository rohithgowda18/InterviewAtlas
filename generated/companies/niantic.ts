import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "niantic",
  name: "Niantic",
  description: "Solve curated LeetCode questions asked in Niantic interviews.",
  topics: ["Array", "Backtracking", "Binary Search", "Bit Manipulation", "Breadth-First Search", "Sorting", "Stack", "String", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "niantic_string_to_integer_atoi_",
      difficulty: "Medium",
      title: "String to Integer (atoi)",
      frequency: 100,
      link: "https://leetcode.com/problems/string-to-integer-atoi",
      topics: ["String"]
    },
    {
      id: "niantic_brace_expansion",
      difficulty: "Medium",
      title: "Brace Expansion",
      frequency: 89.4,
      link: "https://leetcode.com/problems/brace-expansion",
      topics: ["String", "Backtracking", "Stack", "Breadth-First Search", "Sorting"]
    },
    {
      id: "niantic_find_the_duplicate_number",
      difficulty: "Medium",
      title: "Find the Duplicate Number",
      frequency: 89.4,
      link: "https://leetcode.com/problems/find-the-duplicate-number",
      topics: ["Array", "Two Pointers", "Binary Search", "Bit Manipulation"]
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
      id: "niantic_string_to_integer_atoi_",
      difficulty: "Medium",
      title: "String to Integer (atoi)",
      frequency: 100,
      link: "https://leetcode.com/problems/string-to-integer-atoi",
      topics: ["String"]
    },
    {
      id: "niantic_find_the_duplicate_number",
      difficulty: "Medium",
      title: "Find the Duplicate Number",
      frequency: 89.4,
      link: "https://leetcode.com/problems/find-the-duplicate-number",
      topics: ["Array", "Two Pointers", "Binary Search", "Bit Manipulation"]
    },
    {
      id: "niantic_brace_expansion",
      difficulty: "Medium",
      title: "Brace Expansion",
      frequency: 89.4,
      link: "https://leetcode.com/problems/brace-expansion",
      topics: ["String", "Backtracking", "Stack", "Breadth-First Search", "Sorting"]
    }
  ]
  }
};

export default companyData;
