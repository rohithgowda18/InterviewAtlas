import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "hotstar",
  name: "Hotstar",
  description: "Solve curated LeetCode questions asked in Hotstar interviews.",
  topics: ["Array", "Binary Tree", "Breadth-First Search", "Depth-First Search", "Dynamic Programming", "Math", "Matrix", "Tree", "Union Find"],
  roadmaps: {
    all: [
    {
      id: "hotstar_three_equal_parts",
      difficulty: "Hard",
      title: "Three Equal Parts",
      frequency: 100,
      link: "https://leetcode.com/problems/three-equal-parts",
      topics: ["Array", "Math"]
    },
    {
      id: "hotstar_number_of_islands",
      difficulty: "Medium",
      title: "Number of Islands",
      frequency: 66.6,
      link: "https://leetcode.com/problems/number-of-islands",
      topics: ["Array", "Depth-First Search", "Breadth-First Search", "Union Find", "Matrix"]
    },
    {
      id: "hotstar_binary_tree_maximum_path_sum",
      difficulty: "Hard",
      title: "Binary Tree Maximum Path Sum",
      frequency: 66.6,
      link: "https://leetcode.com/problems/binary-tree-maximum-path-sum",
      topics: ["Dynamic Programming", "Tree", "Depth-First Search", "Binary Tree"]
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
      id: "hotstar_number_of_islands",
      difficulty: "Medium",
      title: "Number of Islands",
      frequency: 100,
      link: "https://leetcode.com/problems/number-of-islands",
      topics: ["Array", "Depth-First Search", "Breadth-First Search", "Union Find", "Matrix"]
    },
    {
      id: "hotstar_three_equal_parts",
      difficulty: "Hard",
      title: "Three Equal Parts",
      frequency: 100,
      link: "https://leetcode.com/problems/three-equal-parts",
      topics: ["Array", "Math"]
    }
  ]
  }
};

export default companyData;
