import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "tiger-analytics",
  name: "Tiger Analytics",
  description: "Solve curated LeetCode questions asked in Tiger Analytics interviews.",
  topics: ["Array", "Dynamic Programming", "Hash Table"],
  roadmaps: {
    all: [
    {
      id: "tiger-analytics_find_closest_number_to_zero",
      difficulty: "Easy",
      title: "Find Closest Number to Zero",
      frequency: 100,
      link: "https://leetcode.com/problems/find-closest-number-to-zero",
      topics: ["Array"]
    },
    {
      id: "tiger-analytics_best_time_to_buy_and_sell_stock",
      difficulty: "Easy",
      title: "Best Time to Buy and Sell Stock",
      frequency: 85.3,
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock",
      topics: ["Array", "Dynamic Programming"]
    },
    {
      id: "tiger-analytics_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 74.6,
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
      id: "tiger-analytics_best_time_to_buy_and_sell_stock",
      difficulty: "Easy",
      title: "Best Time to Buy and Sell Stock",
      frequency: 100,
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock",
      topics: ["Array", "Dynamic Programming"]
    },
    {
      id: "tiger-analytics_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 92.9,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "tiger-analytics_find_closest_number_to_zero",
      difficulty: "Easy",
      title: "Find Closest Number to Zero",
      frequency: 83,
      link: "https://leetcode.com/problems/find-closest-number-to-zero",
      topics: ["Array"]
    }
  ]
  }
};

export default companyData;
