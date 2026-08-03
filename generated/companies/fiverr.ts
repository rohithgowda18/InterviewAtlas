import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "fiverr",
  name: "Fiverr",
  description: "Solve curated LeetCode questions asked in Fiverr interviews.",
  topics: ["Array", "Backtracking", "Bit Manipulation", "Math", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "fiverr_rotate_array",
      difficulty: "Medium",
      title: "Rotate Array",
      frequency: 100,
      link: "https://leetcode.com/problems/rotate-array",
      topics: ["Array", "Math", "Two Pointers"]
    },
    {
      id: "fiverr_subsets",
      difficulty: "Medium",
      title: "Subsets",
      frequency: 90.5,
      link: "https://leetcode.com/problems/subsets",
      topics: ["Array", "Backtracking", "Bit Manipulation"]
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
      id: "fiverr_rotate_array",
      difficulty: "Medium",
      title: "Rotate Array",
      frequency: 100,
      link: "https://leetcode.com/problems/rotate-array",
      topics: ["Array", "Math", "Two Pointers"]
    },
    {
      id: "fiverr_subsets",
      difficulty: "Medium",
      title: "Subsets",
      frequency: 90.5,
      link: "https://leetcode.com/problems/subsets",
      topics: ["Array", "Backtracking", "Bit Manipulation"]
    }
  ]
  }
};

export default companyData;
