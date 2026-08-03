import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "grubhub",
  name: "Grubhub",
  description: "Solve curated LeetCode questions asked in Grubhub interviews.",
  topics: ["Array", "Breadth-First Search", "Depth-First Search", "Matrix", "Sorting", "Union-Find"],
  roadmaps: {
    all: [
    {
      id: "grubhub_merge_intervals",
      difficulty: "Medium",
      title: "Merge Intervals",
      frequency: 100,
      link: "https://leetcode.com/problems/merge-intervals",
      topics: ["Array", "Sorting"]
    },
    {
      id: "grubhub_max_area_of_island",
      difficulty: "Medium",
      title: "Max Area of Island",
      frequency: 90.3,
      link: "https://leetcode.com/problems/max-area-of-island",
      topics: ["Array", "Depth-First Search", "Breadth-First Search", "Union-Find", "Matrix"]
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
      id: "grubhub_merge_intervals",
      difficulty: "Medium",
      title: "Merge Intervals",
      frequency: 100,
      link: "https://leetcode.com/problems/merge-intervals",
      topics: ["Array", "Sorting"]
    },
    {
      id: "grubhub_max_area_of_island",
      difficulty: "Medium",
      title: "Max Area of Island",
      frequency: 90.3,
      link: "https://leetcode.com/problems/max-area-of-island",
      topics: ["Array", "Depth-First Search", "Breadth-First Search", "Union-Find", "Matrix"]
    }
  ]
  }
};

export default companyData;
