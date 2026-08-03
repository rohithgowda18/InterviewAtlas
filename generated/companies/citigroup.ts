import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "citigroup",
  name: "Citigroup",
  description: "Solve curated LeetCode questions asked in Citigroup interviews.",
  topics: ["Array", "Dynamic Programming", "Monotonic Stack", "Prefix Sum", "Stack"],
  roadmaps: {
    all: [
    {
      id: "citigroup_find_pivot_index",
      difficulty: "Easy",
      title: "Find Pivot Index",
      frequency: 100,
      link: "https://leetcode.com/problems/find-pivot-index",
      topics: ["Array", "Prefix Sum"]
    },
    {
      id: "citigroup_number_of_visible_people_in_a_queue",
      difficulty: "Hard",
      title: "Number of Visible People in a Queue",
      frequency: 100,
      link: "https://leetcode.com/problems/number-of-visible-people-in-a-queue",
      topics: ["Array", "Stack", "Monotonic Stack"]
    },
    {
      id: "citigroup_best_time_to_buy_and_sell_stock",
      difficulty: "Easy",
      title: "Best Time to Buy and Sell Stock",
      frequency: 100,
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
      id: "citigroup_find_pivot_index",
      difficulty: "Easy",
      title: "Find Pivot Index",
      frequency: 100,
      link: "https://leetcode.com/problems/find-pivot-index",
      topics: ["Array", "Prefix Sum"]
    },
    {
      id: "citigroup_best_time_to_buy_and_sell_stock",
      difficulty: "Easy",
      title: "Best Time to Buy and Sell Stock",
      frequency: 100,
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock",
      topics: ["Array", "Dynamic Programming"]
    }
  ]
  }
};

export default companyData;
