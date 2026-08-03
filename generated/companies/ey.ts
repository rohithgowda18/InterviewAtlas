import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "ey",
  name: "EY",
  description: "Solve curated LeetCode questions asked in EY interviews.",
  topics: ["Array", "Hash Table"],
  roadmaps: {
    all: [
    {
      id: "ey_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 100,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
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
      id: "ey_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 100,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
    }
  ]
  }
};

export default companyData;
