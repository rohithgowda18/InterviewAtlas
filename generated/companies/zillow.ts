import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "zillow",
  name: "Zillow",
  description: "Solve curated LeetCode questions asked in Zillow interviews.",
  topics: ["Array", "Math", "Matrix"],
  roadmaps: {
    all: [
    {
      id: "zillow_rotate_image",
      difficulty: "Medium",
      title: "Rotate Image",
      frequency: 100,
      link: "https://leetcode.com/problems/rotate-image",
      topics: ["Array", "Math", "Matrix"]
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
      id: "zillow_rotate_image",
      difficulty: "Medium",
      title: "Rotate Image",
      frequency: 100,
      link: "https://leetcode.com/problems/rotate-image",
      topics: ["Array", "Math", "Matrix"]
    }
  ]
  }
};

export default companyData;
