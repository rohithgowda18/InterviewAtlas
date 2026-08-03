import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "credit-karma",
  name: "Credit Karma",
  description: "Solve curated LeetCode questions asked in Credit Karma interviews.",
  topics: [],
  roadmaps: {
    all: [

  ],
    thirtyDays: [

  ],
    threeMonths: [

  ],
    sixMonths: [

  ],
    moreThanSixMonths: [
    {
      id: "credit-karma_trapping_rain_water",
      difficulty: "Hard",
      title: "Trapping Rain Water",
      frequency: 100,
      link: "https://leetcode.com/problems/trapping-rain-water",
      topics: ["Array", "Two Pointers", "Dynamic Programming", "Stack", "Monotonic Stack"]
    },
    {
      id: "credit-karma_monotone_increasing_digits",
      difficulty: "Medium",
      title: "Monotone Increasing Digits",
      frequency: 90.6,
      link: "https://leetcode.com/problems/monotone-increasing-digits",
      topics: ["Math", "Greedy"]
    },
    {
      id: "credit-karma_basic_calculator_ii",
      difficulty: "Medium",
      title: "Basic Calculator II",
      frequency: 90.6,
      link: "https://leetcode.com/problems/basic-calculator-ii",
      topics: ["Math", "String", "Stack"]
    }
  ]
  }
};

export default companyData;
