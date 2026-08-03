import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "slice",
  name: "Slice",
  description: "Solve curated LeetCode questions asked in Slice interviews.",
  topics: ["Array", "Sorting", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "slice_sort_colors",
      difficulty: "Medium",
      title: "Sort Colors",
      frequency: 100,
      link: "https://leetcode.com/problems/sort-colors",
      topics: ["Array", "Two Pointers", "Sorting"]
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
      id: "slice_sort_colors",
      difficulty: "Medium",
      title: "Sort Colors",
      frequency: 100,
      link: "https://leetcode.com/problems/sort-colors",
      topics: ["Array", "Two Pointers", "Sorting"]
    }
  ]
  }
};

export default companyData;
