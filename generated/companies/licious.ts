import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "licious",
  name: "Licious",
  description: "Solve curated LeetCode questions asked in Licious interviews.",
  topics: ["Array", "Binary Search", "Dynamic Programming", "Hash Table"],
  roadmaps: {
    all: [
    {
      id: "licious_first_missing_positive",
      difficulty: "Hard",
      title: "First Missing Positive",
      frequency: 100,
      link: "https://leetcode.com/problems/first-missing-positive",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "licious_longest_increasing_subsequence",
      difficulty: "Medium",
      title: "Longest Increasing Subsequence",
      frequency: 100,
      link: "https://leetcode.com/problems/longest-increasing-subsequence",
      topics: ["Array", "Binary Search", "Dynamic Programming"]
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
      id: "licious_first_missing_positive",
      difficulty: "Hard",
      title: "First Missing Positive",
      frequency: 100,
      link: "https://leetcode.com/problems/first-missing-positive",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "licious_longest_increasing_subsequence",
      difficulty: "Medium",
      title: "Longest Increasing Subsequence",
      frequency: 100,
      link: "https://leetcode.com/problems/longest-increasing-subsequence",
      topics: ["Array", "Binary Search", "Dynamic Programming"]
    }
  ]
  }
};

export default companyData;
