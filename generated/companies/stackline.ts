import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "stackline",
  name: "Stackline",
  description: "Solve curated LeetCode questions asked in Stackline interviews.",
  topics: ["Array", "Breadth-First Search", "Depth-First Search", "Graph Theory", "Greedy", "Heap (Priority Queue)", "Sorting", "Topological Sort"],
  roadmaps: {
    all: [
    {
      id: "stackline_minimum_height_trees",
      difficulty: "Medium",
      title: "Minimum Height Trees",
      frequency: 100,
      link: "https://leetcode.com/problems/minimum-height-trees",
      topics: ["Depth-First Search", "Breadth-First Search", "Graph Theory", "Topological Sort"]
    },
    {
      id: "stackline_ipo",
      difficulty: "Hard",
      title: "IPO",
      frequency: 80.8,
      link: "https://leetcode.com/problems/ipo",
      topics: ["Array", "Greedy", "Sorting", "Heap (Priority Queue)"]
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
      id: "stackline_minimum_height_trees",
      difficulty: "Medium",
      title: "Minimum Height Trees",
      frequency: 100,
      link: "https://leetcode.com/problems/minimum-height-trees",
      topics: ["Depth-First Search", "Breadth-First Search", "Graph Theory", "Topological Sort"]
    },
    {
      id: "stackline_ipo",
      difficulty: "Hard",
      title: "IPO",
      frequency: 80.8,
      link: "https://leetcode.com/problems/ipo",
      topics: ["Array", "Greedy", "Sorting", "Heap (Priority Queue)"]
    }
  ]
  }
};

export default companyData;
