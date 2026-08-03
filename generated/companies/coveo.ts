import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "coveo",
  name: "Coveo",
  description: "Solve curated LeetCode questions asked in Coveo interviews.",
  topics: ["Array", "Dynamic Programming", "Greedy", "Monotonic Stack", "Stack", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "coveo_trapping_rain_water",
      difficulty: "Hard",
      title: "Trapping Rain Water",
      frequency: 100,
      link: "https://leetcode.com/problems/trapping-rain-water",
      topics: ["Array", "Two Pointers", "Dynamic Programming", "Stack", "Monotonic Stack"]
    },
    {
      id: "coveo_container_with_most_water",
      difficulty: "Medium",
      title: "Container With Most Water",
      frequency: 85.4,
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
      id: "coveo_trapping_rain_water",
      difficulty: "Hard",
      title: "Trapping Rain Water",
      frequency: 100,
      link: "https://leetcode.com/problems/trapping-rain-water",
      topics: ["Array", "Two Pointers", "Dynamic Programming", "Stack", "Monotonic Stack"]
    },
    {
      id: "coveo_container_with_most_water",
      difficulty: "Medium",
      title: "Container With Most Water",
      frequency: 85.4,
      link: "https://leetcode.com/problems/container-with-most-water",
      topics: ["Array", "Two Pointers", "Greedy"]
    }
  ]
  }
};

export default companyData;
