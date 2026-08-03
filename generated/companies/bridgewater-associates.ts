import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "bridgewater-associates",
  name: "Bridgewater Associates",
  description: "Solve curated LeetCode questions asked in Bridgewater Associates interviews.",
  topics: ["Array", "Dynamic Programming", "Math"],
  roadmaps: {
    all: [
    {
      id: "bridgewater-associates_count_strictly_increasing_subarrays",
      difficulty: "Medium",
      title: "Count Strictly Increasing Subarrays",
      frequency: 100,
      link: "https://leetcode.com/problems/count-strictly-increasing-subarrays",
      topics: ["Array", "Math", "Dynamic Programming"]
    },
    {
      id: "bridgewater-associates_knight_dialer",
      difficulty: "Medium",
      title: "Knight Dialer",
      frequency: 86.2,
      link: "https://leetcode.com/problems/knight-dialer",
      topics: ["Dynamic Programming"]
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
      id: "bridgewater-associates_knight_dialer",
      difficulty: "Medium",
      title: "Knight Dialer",
      frequency: 100,
      link: "https://leetcode.com/problems/knight-dialer",
      topics: ["Dynamic Programming"]
    },
    {
      id: "bridgewater-associates_count_strictly_increasing_subarrays",
      difficulty: "Medium",
      title: "Count Strictly Increasing Subarrays",
      frequency: 84.3,
      link: "https://leetcode.com/problems/count-strictly-increasing-subarrays",
      topics: ["Array", "Math", "Dynamic Programming"]
    }
  ]
  }
};

export default companyData;
