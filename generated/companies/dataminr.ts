import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "dataminr",
  name: "Dataminr",
  description: "Solve curated LeetCode questions asked in Dataminr interviews.",
  topics: ["Array", "Math", "Matrix", "Simulation", "Sorting"],
  roadmaps: {
    all: [
    {
      id: "dataminr_spiral_matrix_iii",
      difficulty: "Medium",
      title: "Spiral Matrix III",
      frequency: 100,
      link: "https://leetcode.com/problems/spiral-matrix-iii",
      topics: ["Array", "Matrix", "Simulation"]
    },
    {
      id: "dataminr_maximum_building_height",
      difficulty: "Hard",
      title: "Maximum Building Height",
      frequency: 100,
      link: "https://leetcode.com/problems/maximum-building-height",
      topics: ["Array", "Math", "Sorting"]
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
      id: "dataminr_maximum_building_height",
      difficulty: "Hard",
      title: "Maximum Building Height",
      frequency: 100,
      link: "https://leetcode.com/problems/maximum-building-height",
      topics: ["Array", "Math", "Sorting"]
    },
    {
      id: "dataminr_spiral_matrix_iii",
      difficulty: "Medium",
      title: "Spiral Matrix III",
      frequency: 100,
      link: "https://leetcode.com/problems/spiral-matrix-iii",
      topics: ["Array", "Matrix", "Simulation"]
    }
  ]
  }
};

export default companyData;
