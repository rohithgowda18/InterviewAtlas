import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "comcast",
  name: "Comcast",
  description: "Solve curated LeetCode questions asked in Comcast interviews.",
  topics: ["Array", "Binary Tree", "Breadth-First Search", "Depth-First Search", "Hash Table", "Matrix", "Sliding Window", "String", "Tree", "Union Find"],
  roadmaps: {
    all: [
    {
      id: "comcast_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 100,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "comcast_longest_substring_without_repeating_characters",
      difficulty: "Medium",
      title: "Longest Substring Without Repeating Characters",
      frequency: 87.3,
      link: "https://leetcode.com/problems/longest-substring-without-repeating-characters",
      topics: ["Hash Table", "String", "Sliding Window"]
    },
    {
      id: "comcast_symmetric_tree",
      difficulty: "Easy",
      title: "Symmetric Tree",
      frequency: 77.2,
      link: "https://leetcode.com/problems/symmetric-tree",
      topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"]
    },
    {
      id: "comcast_number_of_islands",
      difficulty: "Medium",
      title: "Number of Islands",
      frequency: 77.2,
      link: "https://leetcode.com/problems/number-of-islands",
      topics: ["Array", "Depth-First Search", "Breadth-First Search", "Union Find", "Matrix"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [

  ],
    sixMonths: [
    {
      id: "comcast_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 100,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "comcast_longest_substring_without_repeating_characters",
      difficulty: "Medium",
      title: "Longest Substring Without Repeating Characters",
      frequency: 100,
      link: "https://leetcode.com/problems/longest-substring-without-repeating-characters",
      topics: ["Hash Table", "String", "Sliding Window"]
    }
  ],
    moreThanSixMonths: [
    {
      id: "comcast_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 100,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "comcast_symmetric_tree",
      difficulty: "Easy",
      title: "Symmetric Tree",
      frequency: 88.9,
      link: "https://leetcode.com/problems/symmetric-tree",
      topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"]
    }
  ]
  }
};

export default companyData;
