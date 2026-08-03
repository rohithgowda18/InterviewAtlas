import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "wissen-technology",
  name: "Wissen Technology",
  description: "Solve curated LeetCode questions asked in Wissen Technology interviews.",
  topics: ["Array", "Binary Search", "Hash Table", "Matrix", "Union-Find"],
  roadmaps: {
    all: [
    {
      id: "wissen-technology_longest_consecutive_sequence",
      difficulty: "Medium",
      title: "Longest Consecutive Sequence",
      frequency: 100,
      link: "https://leetcode.com/problems/longest-consecutive-sequence",
      topics: ["Array", "Hash Table", "Union-Find"]
    },
    {
      id: "wissen-technology_search_a_2d_matrix",
      difficulty: "Medium",
      title: "Search a 2D Matrix",
      frequency: 100,
      link: "https://leetcode.com/problems/search-a-2d-matrix",
      topics: ["Array", "Binary Search", "Matrix"]
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
      id: "wissen-technology_search_a_2d_matrix",
      difficulty: "Medium",
      title: "Search a 2D Matrix",
      frequency: 100,
      link: "https://leetcode.com/problems/search-a-2d-matrix",
      topics: ["Array", "Binary Search", "Matrix"]
    },
    {
      id: "wissen-technology_longest_consecutive_sequence",
      difficulty: "Medium",
      title: "Longest Consecutive Sequence",
      frequency: 100,
      link: "https://leetcode.com/problems/longest-consecutive-sequence",
      topics: ["Array", "Hash Table", "Union-Find"]
    }
  ]
  }
};

export default companyData;
