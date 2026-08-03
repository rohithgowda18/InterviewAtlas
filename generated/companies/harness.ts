import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "harness",
  name: "Harness",
  description: "Solve curated LeetCode questions asked in Harness interviews.",
  topics: ["Stack", "String"],
  roadmaps: {
    all: [
    {
      id: "harness_simplify_path",
      difficulty: "Medium",
      title: "Simplify Path",
      frequency: 100,
      link: "https://leetcode.com/problems/simplify-path",
      topics: ["String", "Stack"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [

  ],
    sixMonths: [
    {
      id: "harness_count_good_subarrays",
      difficulty: "Hard",
      title: "Count Good Subarrays",
      frequency: 100,
      link: "https://leetcode.com/problems/count-good-subarrays",
      topics: ["Array", "Stack", "Bit Manipulation", "Monotonic Stack"]
    }
  ],
    moreThanSixMonths: [
    {
      id: "harness_minimum_window_substring",
      difficulty: "Hard",
      title: "Minimum Window Substring",
      frequency: 100,
      link: "https://leetcode.com/problems/minimum-window-substring",
      topics: ["Hash Table", "String", "Sliding Window"]
    },
    {
      id: "harness_first_missing_positive",
      difficulty: "Hard",
      title: "First Missing Positive",
      frequency: 100,
      link: "https://leetcode.com/problems/first-missing-positive",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "harness_3sum_closest",
      difficulty: "Medium",
      title: "3Sum Closest",
      frequency: 100,
      link: "https://leetcode.com/problems/3sum-closest",
      topics: ["Array", "Two Pointers", "Sorting"]
    }
  ]
  }
};

export default companyData;
