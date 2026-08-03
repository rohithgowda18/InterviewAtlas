import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "redbus",
  name: "redbus",
  description: "Solve curated LeetCode questions asked in redbus interviews.",
  topics: ["Array", "Database", "Dynamic Programming", "Monotonic Stack", "Stack", "String", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "redbus_trapping_rain_water",
      difficulty: "Hard",
      title: "Trapping Rain Water",
      frequency: 100,
      link: "https://leetcode.com/problems/trapping-rain-water",
      topics: ["Array", "Two Pointers", "Dynamic Programming", "Stack", "Monotonic Stack"]
    },
    {
      id: "redbus_minimum_deletions_to_make_string_balanced",
      difficulty: "Medium",
      title: "Minimum Deletions to Make String Balanced",
      frequency: 100,
      link: "https://leetcode.com/problems/minimum-deletions-to-make-string-balanced",
      topics: ["String", "Dynamic Programming", "Stack"]
    },
    {
      id: "redbus_second_highest_salary",
      difficulty: "Medium",
      title: "Second Highest Salary",
      frequency: 100,
      link: "https://leetcode.com/problems/second-highest-salary",
      topics: ["Database"]
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
      id: "redbus_trapping_rain_water",
      difficulty: "Hard",
      title: "Trapping Rain Water",
      frequency: 100,
      link: "https://leetcode.com/problems/trapping-rain-water",
      topics: ["Array", "Two Pointers", "Dynamic Programming", "Stack", "Monotonic Stack"]
    },
    {
      id: "redbus_minimum_deletions_to_make_string_balanced",
      difficulty: "Medium",
      title: "Minimum Deletions to Make String Balanced",
      frequency: 100,
      link: "https://leetcode.com/problems/minimum-deletions-to-make-string-balanced",
      topics: ["String", "Dynamic Programming", "Stack"]
    }
  ]
  }
};

export default companyData;
