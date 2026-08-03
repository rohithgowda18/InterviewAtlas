import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "godaddy",
  name: "GoDaddy",
  description: "Solve curated LeetCode questions asked in GoDaddy interviews.",
  topics: ["Array", "Binary Search", "Enumeration", "Graph Theory", "Math", "Sorting", "Stack", "String", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "godaddy_arranging_coins",
      difficulty: "Easy",
      title: "Arranging Coins",
      frequency: 100,
      link: "https://leetcode.com/problems/arranging-coins",
      topics: ["Math", "Binary Search"]
    },
    {
      id: "godaddy_string_compression",
      difficulty: "Medium",
      title: "String Compression",
      frequency: 100,
      link: "https://leetcode.com/problems/string-compression",
      topics: ["Two Pointers", "String"]
    },
    {
      id: "godaddy_merge_intervals",
      difficulty: "Medium",
      title: "Merge Intervals",
      frequency: 84.9,
      link: "https://leetcode.com/problems/merge-intervals",
      topics: ["Array", "Sorting"]
    },
    {
      id: "godaddy_valid_parentheses",
      difficulty: "Easy",
      title: "Valid Parentheses",
      frequency: 73.8,
      link: "https://leetcode.com/problems/valid-parentheses",
      topics: ["String", "Stack"]
    },
    {
      id: "godaddy_minimum_degree_of_a_connected_trio_in_a_graph",
      difficulty: "Hard",
      title: "Minimum Degree of a Connected Trio in a Graph",
      frequency: 64.9,
      link: "https://leetcode.com/problems/minimum-degree-of-a-connected-trio-in-a-graph",
      topics: ["Graph Theory", "Enumeration"]
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
      id: "godaddy_merge_intervals",
      difficulty: "Medium",
      title: "Merge Intervals",
      frequency: 100,
      link: "https://leetcode.com/problems/merge-intervals",
      topics: ["Array", "Sorting"]
    },
    {
      id: "godaddy_valid_parentheses",
      difficulty: "Easy",
      title: "Valid Parentheses",
      frequency: 92.7,
      link: "https://leetcode.com/problems/valid-parentheses",
      topics: ["String", "Stack"]
    },
    {
      id: "godaddy_arranging_coins",
      difficulty: "Easy",
      title: "Arranging Coins",
      frequency: 82.5,
      link: "https://leetcode.com/problems/arranging-coins",
      topics: ["Math", "Binary Search"]
    },
    {
      id: "godaddy_string_compression",
      difficulty: "Medium",
      title: "String Compression",
      frequency: 82.5,
      link: "https://leetcode.com/problems/string-compression",
      topics: ["Two Pointers", "String"]
    },
    {
      id: "godaddy_minimum_degree_of_a_connected_trio_in_a_graph",
      difficulty: "Hard",
      title: "Minimum Degree of a Connected Trio in a Graph",
      frequency: 82.5,
      link: "https://leetcode.com/problems/minimum-degree-of-a-connected-trio-in-a-graph",
      topics: ["Graph Theory", "Enumeration"]
    }
  ]
  }
};

export default companyData;
