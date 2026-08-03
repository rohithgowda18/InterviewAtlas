import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "gsa-capital",
  name: "GSA Capital",
  description: "Solve curated LeetCode questions asked in GSA Capital interviews.",
  topics: ["Array", "Dynamic Programming", "Heap (Priority Queue)", "Matrix", "Simulation", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "gsa-capital_maximal_square",
      difficulty: "Medium",
      title: "Maximal Square",
      frequency: 100,
      link: "https://leetcode.com/problems/maximal-square",
      topics: ["Array", "Dynamic Programming", "Matrix"]
    },
    {
      id: "gsa-capital_total_cost_to_hire_k_workers",
      difficulty: "Medium",
      title: "Total Cost to Hire K Workers",
      frequency: 90.6,
      link: "https://leetcode.com/problems/total-cost-to-hire-k-workers",
      topics: ["Array", "Two Pointers", "Heap (Priority Queue)", "Simulation"]
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
      id: "gsa-capital_maximal_square",
      difficulty: "Medium",
      title: "Maximal Square",
      frequency: 100,
      link: "https://leetcode.com/problems/maximal-square",
      topics: ["Array", "Dynamic Programming", "Matrix"]
    },
    {
      id: "gsa-capital_total_cost_to_hire_k_workers",
      difficulty: "Medium",
      title: "Total Cost to Hire K Workers",
      frequency: 90.6,
      link: "https://leetcode.com/problems/total-cost-to-hire-k-workers",
      topics: ["Array", "Two Pointers", "Heap (Priority Queue)", "Simulation"]
    }
  ]
  }
};

export default companyData;
