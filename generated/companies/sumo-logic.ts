import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "sumo-logic",
  name: "Sumo Logic",
  description: "Solve curated LeetCode questions asked in Sumo Logic interviews.",
  topics: ["Array", "Depth-First Search", "Graph Theory", "Heap (Priority Queue)", "Monotonic Queue", "Ordered Set", "Queue", "Sliding Window", "String", "Union-Find"],
  roadmaps: {
    all: [
    {
      id: "sumo-logic_satisfiability_of_equality_equations",
      difficulty: "Medium",
      title: "Satisfiability of Equality Equations",
      frequency: 100,
      link: "https://leetcode.com/problems/satisfiability-of-equality-equations",
      topics: ["Array", "String", "Union-Find", "Graph Theory"]
    },
    {
      id: "sumo-logic_minimize_hamming_distance_after_swap_operations",
      difficulty: "Medium",
      title: "Minimize Hamming Distance After Swap Operations",
      frequency: 75.2,
      link: "https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations",
      topics: ["Array", "Depth-First Search", "Union-Find"]
    },
    {
      id: "sumo-logic_longest_continuous_subarray_with_absolute_diff_less_than_or_equal_to_limit",
      difficulty: "Medium",
      title: "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit",
      frequency: 66.8,
      link: "https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit",
      topics: ["Array", "Queue", "Sliding Window", "Heap (Priority Queue)", "Ordered Set", "Monotonic Queue"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [

  ],
    sixMonths: [
    {
      id: "sumo-logic_minimize_hamming_distance_after_swap_operations",
      difficulty: "Medium",
      title: "Minimize Hamming Distance After Swap Operations",
      frequency: 100,
      link: "https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations",
      topics: ["Array", "Depth-First Search", "Union-Find"]
    }
  ],
    moreThanSixMonths: [
    {
      id: "sumo-logic_satisfiability_of_equality_equations",
      difficulty: "Medium",
      title: "Satisfiability of Equality Equations",
      frequency: 100,
      link: "https://leetcode.com/problems/satisfiability-of-equality-equations",
      topics: ["Array", "String", "Union-Find", "Graph Theory"]
    }
  ]
  }
};

export default companyData;
