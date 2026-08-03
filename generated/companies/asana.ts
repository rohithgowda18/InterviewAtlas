import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "asana",
  name: "Asana",
  description: "Solve curated LeetCode questions asked in Asana interviews.",
  topics: ["Array", "Divide and Conquer", "Dynamic Programming", "Geometry", "Graph Theory", "Heap (Priority Queue)", "Math", "Prefix Sum", "Quickselect", "Shortest Path", "Sorting", "String", "String Matching"],
  roadmaps: {
    all: [
    {
      id: "asana_k_closest_points_to_origin",
      difficulty: "Medium",
      title: "K Closest Points to Origin",
      frequency: 100,
      link: "https://leetcode.com/problems/k-closest-points-to-origin",
      topics: ["Array", "Math", "Divide and Conquer", "Geometry", "Sorting", "Heap (Priority Queue)", "Quickselect"]
    },
    {
      id: "asana_product_of_array_except_self",
      difficulty: "Medium",
      title: "Product of Array Except Self",
      frequency: 97.1,
      link: "https://leetcode.com/problems/product-of-array-except-self",
      topics: ["Array", "Prefix Sum"]
    },
    {
      id: "asana_maximum_repeating_substring",
      difficulty: "Easy",
      title: "Maximum Repeating Substring",
      frequency: 91.9,
      link: "https://leetcode.com/problems/maximum-repeating-substring",
      topics: ["String", "Dynamic Programming", "String Matching"]
    },
    {
      id: "asana_minimum_cost_path_with_edge_reversals",
      difficulty: "Medium",
      title: "Minimum Cost Path with Edge Reversals",
      frequency: 87.4,
      link: "https://leetcode.com/problems/minimum-cost-path-with-edge-reversals",
      topics: ["Graph Theory", "Heap (Priority Queue)", "Shortest Path"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [

  ],
    sixMonths: [
    {
      id: "asana_k_closest_points_to_origin",
      difficulty: "Medium",
      title: "K Closest Points to Origin",
      frequency: 100,
      link: "https://leetcode.com/problems/k-closest-points-to-origin",
      topics: ["Array", "Math", "Divide and Conquer", "Geometry", "Sorting", "Heap (Priority Queue)", "Quickselect"]
    },
    {
      id: "asana_product_of_array_except_self",
      difficulty: "Medium",
      title: "Product of Array Except Self",
      frequency: 100,
      link: "https://leetcode.com/problems/product-of-array-except-self",
      topics: ["Array", "Prefix Sum"]
    }
  ],
    moreThanSixMonths: [
    {
      id: "asana_k_closest_points_to_origin",
      difficulty: "Medium",
      title: "K Closest Points to Origin",
      frequency: 100,
      link: "https://leetcode.com/problems/k-closest-points-to-origin",
      topics: ["Array", "Math", "Divide and Conquer", "Geometry", "Sorting", "Heap (Priority Queue)", "Quickselect"]
    },
    {
      id: "asana_product_of_array_except_self",
      difficulty: "Medium",
      title: "Product of Array Except Self",
      frequency: 95.5,
      link: "https://leetcode.com/problems/product-of-array-except-self",
      topics: ["Array", "Prefix Sum"]
    },
    {
      id: "asana_maximum_repeating_substring",
      difficulty: "Easy",
      title: "Maximum Repeating Substring",
      frequency: 67.4,
      link: "https://leetcode.com/problems/maximum-repeating-substring",
      topics: ["String", "Dynamic Programming", "String Matching"]
    }
  ]
  }
};

export default companyData;
