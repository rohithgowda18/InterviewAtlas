import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "navi",
  name: "Navi",
  description: "Solve curated LeetCode questions asked in Navi interviews.",
  topics: ["Array", "Binary Search", "Dynamic Programming", "Greedy", "Monotonic Stack", "Sorting", "Stack", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "navi_minimize_the_maximum_difference_of_pairs",
      difficulty: "Medium",
      title: "Minimize the Maximum Difference of Pairs",
      frequency: 100,
      link: "https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs",
      topics: ["Array", "Binary Search", "Dynamic Programming", "Greedy", "Sorting"]
    },
    {
      id: "navi_jump_game",
      difficulty: "Medium",
      title: "Jump Game",
      frequency: 75.1,
      link: "https://leetcode.com/problems/jump-game",
      topics: ["Array", "Dynamic Programming", "Greedy"]
    },
    {
      id: "navi_trapping_rain_water",
      difficulty: "Hard",
      title: "Trapping Rain Water",
      frequency: 66.7,
      link: "https://leetcode.com/problems/trapping-rain-water",
      topics: ["Array", "Two Pointers", "Dynamic Programming", "Stack", "Monotonic Stack"]
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
      id: "navi_minimize_the_maximum_difference_of_pairs",
      difficulty: "Medium",
      title: "Minimize the Maximum Difference of Pairs",
      frequency: 100,
      link: "https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs",
      topics: ["Array", "Binary Search", "Dynamic Programming", "Greedy", "Sorting"]
    },
    {
      id: "navi_trapping_rain_water",
      difficulty: "Hard",
      title: "Trapping Rain Water",
      frequency: 100,
      link: "https://leetcode.com/problems/trapping-rain-water",
      topics: ["Array", "Two Pointers", "Dynamic Programming", "Stack", "Monotonic Stack"]
    },
    {
      id: "navi_jump_game",
      difficulty: "Medium",
      title: "Jump Game",
      frequency: 100,
      link: "https://leetcode.com/problems/jump-game",
      topics: ["Array", "Dynamic Programming", "Greedy"]
    }
  ]
  }
};

export default companyData;
