import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "deltax",
  name: "DeltaX",
  description: "Solve curated LeetCode questions asked in DeltaX interviews.",
  topics: ["Array", "Breadth-First Search", "Dynamic Programming", "Hash Table", "Math", "Memoization", "Recursion", "String"],
  roadmaps: {
    all: [
    {
      id: "deltax_roman_to_integer",
      difficulty: "Easy",
      title: "Roman to Integer",
      frequency: 100,
      link: "https://leetcode.com/problems/roman-to-integer",
      topics: ["Hash Table", "Math", "String"]
    },
    {
      id: "deltax_different_ways_to_add_parentheses",
      difficulty: "Medium",
      title: "Different Ways to Add Parentheses",
      frequency: 82.6,
      link: "https://leetcode.com/problems/different-ways-to-add-parentheses",
      topics: ["Math", "String", "Dynamic Programming", "Recursion", "Memoization"]
    },
    {
      id: "deltax_bus_routes",
      difficulty: "Hard",
      title: "Bus Routes",
      frequency: 82.6,
      link: "https://leetcode.com/problems/bus-routes",
      topics: ["Array", "Hash Table", "Breadth-First Search"]
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
      id: "deltax_roman_to_integer",
      difficulty: "Easy",
      title: "Roman to Integer",
      frequency: 100,
      link: "https://leetcode.com/problems/roman-to-integer",
      topics: ["Hash Table", "Math", "String"]
    },
    {
      id: "deltax_different_ways_to_add_parentheses",
      difficulty: "Medium",
      title: "Different Ways to Add Parentheses",
      frequency: 82.7,
      link: "https://leetcode.com/problems/different-ways-to-add-parentheses",
      topics: ["Math", "String", "Dynamic Programming", "Recursion", "Memoization"]
    },
    {
      id: "deltax_bus_routes",
      difficulty: "Hard",
      title: "Bus Routes",
      frequency: 82.7,
      link: "https://leetcode.com/problems/bus-routes",
      topics: ["Array", "Hash Table", "Breadth-First Search"]
    }
  ]
  }
};

export default companyData;
