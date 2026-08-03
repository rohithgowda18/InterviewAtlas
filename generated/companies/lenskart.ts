import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "lenskart",
  name: "Lenskart",
  description: "Solve curated LeetCode questions asked in Lenskart interviews.",
  topics: ["Array", "Greedy", "Matrix", "Simulation", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "lenskart_spiral_matrix",
      difficulty: "Medium",
      title: "Spiral Matrix",
      frequency: 100,
      link: "https://leetcode.com/problems/spiral-matrix",
      topics: ["Array", "Matrix", "Simulation"]
    },
    {
      id: "lenskart_container_with_most_water",
      difficulty: "Medium",
      title: "Container With Most Water",
      frequency: 100,
      link: "https://leetcode.com/problems/container-with-most-water",
      topics: ["Array", "Two Pointers", "Greedy"]
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
      id: "lenskart_container_with_most_water",
      difficulty: "Medium",
      title: "Container With Most Water",
      frequency: 100,
      link: "https://leetcode.com/problems/container-with-most-water",
      topics: ["Array", "Two Pointers", "Greedy"]
    },
    {
      id: "lenskart_spiral_matrix",
      difficulty: "Medium",
      title: "Spiral Matrix",
      frequency: 100,
      link: "https://leetcode.com/problems/spiral-matrix",
      topics: ["Array", "Matrix", "Simulation"]
    }
  ]
  }
};

export default companyData;
