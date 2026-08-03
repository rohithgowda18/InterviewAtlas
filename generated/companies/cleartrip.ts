import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "cleartrip",
  name: "Cleartrip",
  description: "Solve curated LeetCode questions asked in Cleartrip interviews.",
  topics: ["Array", "Breadth-First Search", "Dynamic Programming", "Graph", "Greedy", "Hash Table", "Heap (Priority Queue)", "Math", "Matrix", "Memoization", "Shortest Path", "String", "Trie"],
  roadmaps: {
    all: [
    {
      id: "cleartrip_word_break",
      difficulty: "Medium",
      title: "Word Break",
      frequency: 100,
      link: "https://leetcode.com/problems/word-break",
      topics: ["Array", "Hash Table", "String", "Dynamic Programming", "Trie", "Memoization"]
    },
    {
      id: "cleartrip_house_robber",
      difficulty: "Medium",
      title: "House Robber",
      frequency: 100,
      link: "https://leetcode.com/problems/house-robber",
      topics: ["Array", "Dynamic Programming"]
    },
    {
      id: "cleartrip_minimum_cost_to_make_at_least_one_valid_path_in_a_grid",
      difficulty: "Hard",
      title: "Minimum Cost to Make at Least One Valid Path in a Grid",
      frequency: 100,
      link: "https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid",
      topics: ["Array", "Breadth-First Search", "Graph", "Heap (Priority Queue)", "Matrix", "Shortest Path"]
    },
    {
      id: "cleartrip_rabbits_in_forest",
      difficulty: "Medium",
      title: "Rabbits in Forest",
      frequency: 100,
      link: "https://leetcode.com/problems/rabbits-in-forest",
      topics: ["Array", "Hash Table", "Math", "Greedy"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [

  ],
    sixMonths: [
    {
      id: "cleartrip_minimum_cost_to_make_at_least_one_valid_path_in_a_grid",
      difficulty: "Hard",
      title: "Minimum Cost to Make at Least One Valid Path in a Grid",
      frequency: 100,
      link: "https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid",
      topics: ["Array", "Breadth-First Search", "Graph", "Heap (Priority Queue)", "Matrix", "Shortest Path"]
    }
  ],
    moreThanSixMonths: [
    {
      id: "cleartrip_word_break",
      difficulty: "Medium",
      title: "Word Break",
      frequency: 100,
      link: "https://leetcode.com/problems/word-break",
      topics: ["Array", "Hash Table", "String", "Dynamic Programming", "Trie", "Memoization"]
    },
    {
      id: "cleartrip_house_robber",
      difficulty: "Medium",
      title: "House Robber",
      frequency: 100,
      link: "https://leetcode.com/problems/house-robber",
      topics: ["Array", "Dynamic Programming"]
    }
  ]
  }
};

export default companyData;
