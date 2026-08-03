import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "bank-of-america",
  name: "Bank of America",
  description: "Solve curated LeetCode questions asked in Bank of America interviews.",
  topics: ["Array", "Dynamic Programming", "Stack", "String"],
  roadmaps: {
    all: [
    {
      id: "bank-of-america_valid_parentheses",
      difficulty: "Easy",
      title: "Valid Parentheses",
      frequency: 100,
      link: "https://leetcode.com/problems/valid-parentheses",
      topics: ["String", "Stack"]
    },
    {
      id: "bank-of-america_best_time_to_buy_and_sell_stock",
      difficulty: "Easy",
      title: "Best Time to Buy and Sell Stock",
      frequency: 92.6,
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock",
      topics: ["Array", "Dynamic Programming"]
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
      id: "bank-of-america_valid_parentheses",
      difficulty: "Easy",
      title: "Valid Parentheses",
      frequency: 100,
      link: "https://leetcode.com/problems/valid-parentheses",
      topics: ["String", "Stack"]
    },
    {
      id: "bank-of-america_best_time_to_buy_and_sell_stock",
      difficulty: "Easy",
      title: "Best Time to Buy and Sell Stock",
      frequency: 92.9,
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock",
      topics: ["Array", "Dynamic Programming"]
    }
  ]
  }
};

export default companyData;
