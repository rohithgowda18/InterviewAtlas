import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "mckinsey",
  name: "McKinsey",
  description: "Solve curated LeetCode questions asked in McKinsey interviews.",
  topics: ["Array", "Bit Manipulation", "Breadth-First Search", "Depth-First Search", "Dynamic Programming", "Graph", "Greedy", "Heap (Priority Queue)", "Matrix", "Memoization", "Union Find"],
  roadmaps: {
    all: [
    {
      id: "mckinsey_maximal_score_after_applying_k_operations",
      difficulty: "Medium",
      title: "Maximal Score After Applying K Operations",
      frequency: 100,
      link: "https://leetcode.com/problems/maximal-score-after-applying-k-operations",
      topics: ["Array", "Greedy", "Heap (Priority Queue)"]
    },
    {
      id: "mckinsey_shortest_bridge",
      difficulty: "Medium",
      title: "Shortest Bridge",
      frequency: 100,
      link: "https://leetcode.com/problems/shortest-bridge",
      topics: ["Array", "Depth-First Search", "Breadth-First Search", "Matrix"]
    },
    {
      id: "mckinsey_number_of_operations_to_make_network_connected",
      difficulty: "Medium",
      title: "Number of Operations to Make Network Connected",
      frequency: 97.7,
      link: "https://leetcode.com/problems/number-of-operations-to-make-network-connected",
      topics: ["Depth-First Search", "Breadth-First Search", "Union Find", "Graph"]
    },
    {
      id: "mckinsey_minimum_one_bit_operations_to_make_integers_zero",
      difficulty: "Hard",
      title: "Minimum One Bit Operations to Make Integers Zero",
      frequency: 80.2,
      link: "https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero",
      topics: ["Dynamic Programming", "Bit Manipulation", "Memoization"]
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
      id: "mckinsey_number_of_operations_to_make_network_connected",
      difficulty: "Medium",
      title: "Number of Operations to Make Network Connected",
      frequency: 100,
      link: "https://leetcode.com/problems/number-of-operations-to-make-network-connected",
      topics: ["Depth-First Search", "Breadth-First Search", "Union Find", "Graph"]
    },
    {
      id: "mckinsey_minimum_one_bit_operations_to_make_integers_zero",
      difficulty: "Hard",
      title: "Minimum One Bit Operations to Make Integers Zero",
      frequency: 82.9,
      link: "https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero",
      topics: ["Dynamic Programming", "Bit Manipulation", "Memoization"]
    },
    {
      id: "mckinsey_maximal_score_after_applying_k_operations",
      difficulty: "Medium",
      title: "Maximal Score After Applying K Operations",
      frequency: 68.4,
      link: "https://leetcode.com/problems/maximal-score-after-applying-k-operations",
      topics: ["Array", "Greedy", "Heap (Priority Queue)"]
    },
    {
      id: "mckinsey_shortest_bridge",
      difficulty: "Medium",
      title: "Shortest Bridge",
      frequency: 68.4,
      link: "https://leetcode.com/problems/shortest-bridge",
      topics: ["Array", "Depth-First Search", "Breadth-First Search", "Matrix"]
    }
  ]
  }
};

export default companyData;
