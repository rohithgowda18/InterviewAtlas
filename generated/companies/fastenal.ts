import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "fastenal",
  name: "Fastenal",
  description: "Solve curated LeetCode questions asked in Fastenal interviews.",
  topics: ["Hash Table", "Sorting", "Stack", "String"],
  roadmaps: {
    all: [
    {
      id: "fastenal_number_of_atoms",
      difficulty: "Hard",
      title: "Number of Atoms",
      frequency: 100,
      link: "https://leetcode.com/problems/number-of-atoms",
      topics: ["Hash Table", "String", "Stack", "Sorting"]
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
      id: "fastenal_number_of_atoms",
      difficulty: "Hard",
      title: "Number of Atoms",
      frequency: 100,
      link: "https://leetcode.com/problems/number-of-atoms",
      topics: ["Hash Table", "String", "Stack", "Sorting"]
    }
  ]
  }
};

export default companyData;
