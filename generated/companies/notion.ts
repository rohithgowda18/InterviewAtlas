import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "notion",
  name: "Notion",
  description: "Solve curated LeetCode questions asked in Notion interviews.",
  topics: ["Array", "Simulation", "String"],
  roadmaps: {
    all: [
    {
      id: "notion_text_justification",
      difficulty: "Hard",
      title: "Text Justification",
      frequency: 100,
      link: "https://leetcode.com/problems/text-justification",
      topics: ["Array", "String", "Simulation"]
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
      id: "notion_text_justification",
      difficulty: "Hard",
      title: "Text Justification",
      frequency: 100,
      link: "https://leetcode.com/problems/text-justification",
      topics: ["Array", "String", "Simulation"]
    }
  ]
  }
};

export default companyData;
