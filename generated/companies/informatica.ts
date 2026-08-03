import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "informatica",
  name: "Informatica",
  description: "Solve curated LeetCode questions asked in Informatica interviews.",
  topics: ["Array", "Breadth-First Search", "Design", "Dynamic Programming", "Greedy", "Matrix", "Stack"],
  roadmaps: {
    all: [
    {
      id: "informatica_rotting_oranges",
      difficulty: "Medium",
      title: "Rotting Oranges",
      frequency: 100,
      link: "https://leetcode.com/problems/rotting-oranges",
      topics: ["Array", "Breadth-First Search", "Matrix"]
    },
    {
      id: "informatica_min_stack",
      difficulty: "Medium",
      title: "Min Stack",
      frequency: 88.8,
      link: "https://leetcode.com/problems/min-stack",
      topics: ["Stack", "Design"]
    },
    {
      id: "informatica_jump_game",
      difficulty: "Medium",
      title: "Jump Game",
      frequency: 88.8,
      link: "https://leetcode.com/problems/jump-game",
      topics: ["Array", "Dynamic Programming", "Greedy"]
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
      id: "informatica_rotting_oranges",
      difficulty: "Medium",
      title: "Rotting Oranges",
      frequency: 100,
      link: "https://leetcode.com/problems/rotting-oranges",
      topics: ["Array", "Breadth-First Search", "Matrix"]
    },
    {
      id: "informatica_min_stack",
      difficulty: "Medium",
      title: "Min Stack",
      frequency: 89.3,
      link: "https://leetcode.com/problems/min-stack",
      topics: ["Stack", "Design"]
    }
  ]
  }
};

export default companyData;
