import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "compass",
  name: "Compass",
  description: "Solve curated LeetCode questions asked in Compass interviews.",
  topics: ["Array", "Binary Search", "Binary Tree", "Depth-First Search", "Design", "Hash Function", "Hash Table", "Math", "Recursion", "Simulation", "Sorting", "Stack", "String", "String Matching", "Tree", "Trie", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "compass_total_distance_traveled",
      difficulty: "Easy",
      title: "Total Distance Traveled",
      frequency: 100,
      link: "https://leetcode.com/problems/total-distance-traveled",
      topics: ["Math", "Simulation"]
    },
    {
      id: "compass_camelcase_matching",
      difficulty: "Medium",
      title: "Camelcase Matching",
      frequency: 89.4,
      link: "https://leetcode.com/problems/camelcase-matching",
      topics: ["Array", "Two Pointers", "String", "Trie", "String Matching"]
    },
    {
      id: "compass_group_anagrams",
      difficulty: "Medium",
      title: "Group Anagrams",
      frequency: 89.4,
      link: "https://leetcode.com/problems/group-anagrams",
      topics: ["Array", "Hash Table", "String", "Sorting"]
    },
    {
      id: "compass_subtree_of_another_tree",
      difficulty: "Easy",
      title: "Subtree of Another Tree",
      frequency: 89.4,
      link: "https://leetcode.com/problems/subtree-of-another-tree",
      topics: ["Tree", "Depth-First Search", "String Matching", "Binary Tree", "Hash Function"]
    },
    {
      id: "compass_time_based_key_value_store",
      difficulty: "Medium",
      title: "Time Based Key-Value Store",
      frequency: 89.4,
      link: "https://leetcode.com/problems/time-based-key-value-store",
      topics: ["Hash Table", "String", "Binary Search", "Design"]
    },
    {
      id: "compass_decode_string",
      difficulty: "Medium",
      title: "Decode String",
      frequency: 89.4,
      link: "https://leetcode.com/problems/decode-string",
      topics: ["String", "Stack", "Recursion"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [
    {
      id: "compass_decode_string",
      difficulty: "Medium",
      title: "Decode String",
      frequency: 100,
      link: "https://leetcode.com/problems/decode-string",
      topics: ["String", "Stack", "Recursion"]
    }
  ],
    sixMonths: [
    {
      id: "compass_decode_string",
      difficulty: "Medium",
      title: "Decode String",
      frequency: 100,
      link: "https://leetcode.com/problems/decode-string",
      topics: ["String", "Stack", "Recursion"]
    }
  ],
    moreThanSixMonths: [
    {
      id: "compass_total_distance_traveled",
      difficulty: "Easy",
      title: "Total Distance Traveled",
      frequency: 100,
      link: "https://leetcode.com/problems/total-distance-traveled",
      topics: ["Math", "Simulation"]
    },
    {
      id: "compass_group_anagrams",
      difficulty: "Medium",
      title: "Group Anagrams",
      frequency: 89.8,
      link: "https://leetcode.com/problems/group-anagrams",
      topics: ["Array", "Hash Table", "String", "Sorting"]
    },
    {
      id: "compass_camelcase_matching",
      difficulty: "Medium",
      title: "Camelcase Matching",
      frequency: 89.8,
      link: "https://leetcode.com/problems/camelcase-matching",
      topics: ["Array", "Two Pointers", "String", "Trie", "String Matching"]
    },
    {
      id: "compass_subtree_of_another_tree",
      difficulty: "Easy",
      title: "Subtree of Another Tree",
      frequency: 89.8,
      link: "https://leetcode.com/problems/subtree-of-another-tree",
      topics: ["Tree", "Depth-First Search", "String Matching", "Binary Tree", "Hash Function"]
    }
  ]
  }
};

export default companyData;
