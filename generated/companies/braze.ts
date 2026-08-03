import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "braze",
  name: "Braze",
  description: "Solve curated LeetCode questions asked in Braze interviews.",
  topics: ["Array", "Matrix", "Simulation", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "braze_candy_crush",
      difficulty: "Medium",
      title: "Candy Crush",
      frequency: 100,
      link: "https://leetcode.com/problems/candy-crush",
      topics: ["Array", "Two Pointers", "Matrix", "Simulation"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [

  ],
    sixMonths: [
    {
      id: "braze_candy_crush",
      difficulty: "Medium",
      title: "Candy Crush",
      frequency: 100,
      link: "https://leetcode.com/problems/candy-crush",
      topics: ["Array", "Two Pointers", "Matrix", "Simulation"]
    }
  ],
    moreThanSixMonths: [

  ]
  }
};

export default companyData;
