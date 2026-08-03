import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "altimetrik",
  name: "Altimetrik",
  description: "Solve curated LeetCode questions asked in Altimetrik interviews.",
  topics: ["Array", "Counting", "Hash Table", "Linked List", "Recursion", "Stack", "String"],
  roadmaps: {
    all: [
    {
      id: "altimetrik_maximum_number_of_pairs_in_array",
      difficulty: "Easy",
      title: "Maximum Number of Pairs in Array",
      frequency: 100,
      link: "https://leetcode.com/problems/maximum-number-of-pairs-in-array",
      topics: ["Array", "Hash Table", "Counting"]
    },
    {
      id: "altimetrik_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 65.1,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "altimetrik_swap_nodes_in_pairs",
      difficulty: "Medium",
      title: "Swap Nodes in Pairs",
      frequency: 65.1,
      link: "https://leetcode.com/problems/swap-nodes-in-pairs",
      topics: ["Linked List", "Recursion"]
    },
    {
      id: "altimetrik_valid_parentheses",
      difficulty: "Easy",
      title: "Valid Parentheses",
      frequency: 65.1,
      link: "https://leetcode.com/problems/valid-parentheses",
      topics: ["String", "Stack"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [

  ],
    sixMonths: [
    {
      id: "altimetrik_valid_parentheses",
      difficulty: "Easy",
      title: "Valid Parentheses",
      frequency: 100,
      link: "https://leetcode.com/problems/valid-parentheses",
      topics: ["String", "Stack"]
    }
  ],
    moreThanSixMonths: [
    {
      id: "altimetrik_maximum_number_of_pairs_in_array",
      difficulty: "Easy",
      title: "Maximum Number of Pairs in Array",
      frequency: 100,
      link: "https://leetcode.com/problems/maximum-number-of-pairs-in-array",
      topics: ["Array", "Hash Table", "Counting"]
    }
  ]
  }
};

export default companyData;
