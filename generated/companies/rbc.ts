import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "rbc",
  name: "RBC",
  description: "Solve curated LeetCode questions asked in RBC interviews.",
  topics: ["Array", "Dynamic Programming", "Matrix", "Simulation"],
  roadmaps: {
    all: [
    {
      id: "rbc_best_time_to_buy_and_sell_stock",
      difficulty: "Easy",
      title: "Best Time to Buy and Sell Stock",
      frequency: 100,
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock",
      topics: ["Array", "Dynamic Programming"]
    },
    {
      id: "rbc_spiral_matrix",
      difficulty: "Medium",
      title: "Spiral Matrix",
      frequency: 100,
      link: "https://leetcode.com/problems/spiral-matrix",
      topics: ["Array", "Matrix", "Simulation"]
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
      id: "rbc_best_time_to_buy_and_sell_stock",
      difficulty: "Easy",
      title: "Best Time to Buy and Sell Stock",
      frequency: 100,
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock",
      topics: ["Array", "Dynamic Programming"]
    },
    {
      id: "rbc_spiral_matrix",
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
