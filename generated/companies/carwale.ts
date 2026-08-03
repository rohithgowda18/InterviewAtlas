import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "carwale",
  name: "carwale",
  description: "Solve curated LeetCode questions asked in carwale interviews.",
  topics: ["Array", "Dynamic Programming", "Hash Table", "Simulation", "Stack", "String"],
  roadmaps: {
    all: [
    {
      id: "carwale_find_mirror_score_of_a_string",
      difficulty: "Medium",
      title: "Find Mirror Score of a String",
      frequency: 100,
      link: "https://leetcode.com/problems/find-mirror-score-of-a-string",
      topics: ["Hash Table", "String", "Stack", "Simulation"]
    },
    {
      id: "carwale_valid_parentheses",
      difficulty: "Easy",
      title: "Valid Parentheses",
      frequency: 64.9,
      link: "https://leetcode.com/problems/valid-parentheses",
      topics: ["String", "Stack"]
    },
    {
      id: "carwale_best_time_to_buy_and_sell_stock",
      difficulty: "Easy",
      title: "Best Time to Buy and Sell Stock",
      frequency: 64.9,
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock",
      topics: ["Array", "Dynamic Programming"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [

  ],
    sixMonths: [
    {
      id: "carwale_best_time_to_buy_and_sell_stock",
      difficulty: "Easy",
      title: "Best Time to Buy and Sell Stock",
      frequency: 100,
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock",
      topics: ["Array", "Dynamic Programming"]
    }
  ],
    moreThanSixMonths: [
    {
      id: "carwale_find_mirror_score_of_a_string",
      difficulty: "Medium",
      title: "Find Mirror Score of a String",
      frequency: 100,
      link: "https://leetcode.com/problems/find-mirror-score-of-a-string",
      topics: ["Hash Table", "String", "Stack", "Simulation"]
    },
    {
      id: "carwale_valid_parentheses",
      difficulty: "Easy",
      title: "Valid Parentheses",
      frequency: 65.2,
      link: "https://leetcode.com/problems/valid-parentheses",
      topics: ["String", "Stack"]
    }
  ]
  }
};

export default companyData;
