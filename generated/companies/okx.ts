import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "okx",
  name: "OKX",
  description: "Solve curated LeetCode questions asked in OKX interviews.",
  topics: ["Array", "Breadth-First Search", "Depth-First Search", "Matrix", "Union-Find"],
  roadmaps: {
    all: [
    {
      id: "okx_number_of_islands",
      difficulty: "Medium",
      title: "Number of Islands",
      frequency: 100,
      link: "https://leetcode.com/problems/number-of-islands",
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
      id: "okx_number_of_islands",
      difficulty: "Medium",
      title: "Number of Islands",
      frequency: 100,
      link: "https://leetcode.com/problems/number-of-islands",
      topics: ["Array", "Depth-First Search", "Breadth-First Search", "Union-Find", "Matrix"]
    }
  ]
  }
};

export default companyData;
