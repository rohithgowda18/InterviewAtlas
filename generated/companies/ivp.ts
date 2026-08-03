import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "ivp",
  name: "IVP",
  description: "Solve curated LeetCode questions asked in IVP interviews.",
  topics: ["Array", "Backtracking", "Bit Manipulation", "Bitmask", "Depth-First Search", "Dynamic Programming", "Graph"],
  roadmaps: {
    all: [
    {
      id: "ivp_minimum_time_to_break_locks_i",
      difficulty: "Medium",
      title: "Minimum Time to Break Locks I",
      frequency: 100,
      link: "https://leetcode.com/problems/minimum-time-to-break-locks-i",
      topics: ["Array", "Dynamic Programming", "Backtracking", "Bit Manipulation", "Depth-First Search", "Bitmask"]
    },
    {
      id: "ivp_minimum_time_to_break_locks_ii",
      difficulty: "Hard",
      title: "Minimum Time to Break Locks II",
      frequency: 100,
      link: "https://leetcode.com/problems/minimum-time-to-break-locks-ii",
      topics: ["Array", "Depth-First Search", "Graph"]
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
      id: "ivp_minimum_time_to_break_locks_i",
      difficulty: "Medium",
      title: "Minimum Time to Break Locks I",
      frequency: 100,
      link: "https://leetcode.com/problems/minimum-time-to-break-locks-i",
      topics: ["Array", "Dynamic Programming", "Backtracking", "Bit Manipulation", "Depth-First Search", "Bitmask"]
    },
    {
      id: "ivp_minimum_time_to_break_locks_ii",
      difficulty: "Hard",
      title: "Minimum Time to Break Locks II",
      frequency: 100,
      link: "https://leetcode.com/problems/minimum-time-to-break-locks-ii",
      topics: ["Array", "Depth-First Search", "Graph"]
    }
  ]
  }
};

export default companyData;
