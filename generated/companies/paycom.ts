import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "paycom",
  name: "Paycom",
  description: "Solve curated LeetCode questions asked in Paycom interviews.",
  topics: ["Array", "Hash Table", "Sorting"],
  roadmaps: {
    all: [
    {
      id: "paycom_minimum_absolute_difference",
      difficulty: "Easy",
      title: "Minimum Absolute Difference",
      frequency: 100,
      link: "https://leetcode.com/problems/minimum-absolute-difference",
      topics: ["Array", "Sorting"]
    },
    {
      id: "paycom_contains_duplicate",
      difficulty: "Easy",
      title: "Contains Duplicate",
      frequency: 84.6,
      link: "https://leetcode.com/problems/contains-duplicate",
      topics: ["Array", "Hash Table", "Sorting"]
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
      id: "paycom_minimum_absolute_difference",
      difficulty: "Easy",
      title: "Minimum Absolute Difference",
      frequency: 100,
      link: "https://leetcode.com/problems/minimum-absolute-difference",
      topics: ["Array", "Sorting"]
    },
    {
      id: "paycom_contains_duplicate",
      difficulty: "Easy",
      title: "Contains Duplicate",
      frequency: 90.5,
      link: "https://leetcode.com/problems/contains-duplicate",
      topics: ["Array", "Hash Table", "Sorting"]
    }
  ]
  }
};

export default companyData;
