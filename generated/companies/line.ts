import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "line",
  name: "LINE",
  description: "Solve curated LeetCode questions asked in LINE interviews.",
  topics: ["Array", "Backtracking", "Dynamic Programming", "Hash Table", "Heap (Priority Queue)", "Matrix", "Monotonic Queue", "Queue", "Sliding Window", "Sorting"],
  roadmaps: {
    all: [
    {
      id: "line_sliding_window_maximum",
      difficulty: "Hard",
      title: "Sliding Window Maximum",
      frequency: 100,
      link: "https://leetcode.com/problems/sliding-window-maximum",
      topics: ["Array", "Queue", "Sliding Window", "Heap (Priority Queue)", "Monotonic Queue"]
    },
    {
      id: "line_sudoku_solver",
      difficulty: "Hard",
      title: "Sudoku Solver",
      frequency: 83.7,
      link: "https://leetcode.com/problems/sudoku-solver",
      topics: ["Array", "Hash Table", "Backtracking", "Matrix"]
    },
    {
      id: "line_frog_jump",
      difficulty: "Hard",
      title: "Frog Jump",
      frequency: 83.7,
      link: "https://leetcode.com/problems/frog-jump",
      topics: ["Array", "Dynamic Programming"]
    },
    {
      id: "line_minimum_cost_to_cut_a_stick",
      difficulty: "Hard",
      title: "Minimum Cost to Cut a Stick",
      frequency: 83.7,
      link: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick",
      topics: ["Array", "Dynamic Programming", "Sorting"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [
    {
      id: "line_sliding_window_maximum",
      difficulty: "Hard",
      title: "Sliding Window Maximum",
      frequency: 100,
      link: "https://leetcode.com/problems/sliding-window-maximum",
      topics: ["Array", "Queue", "Sliding Window", "Heap (Priority Queue)", "Monotonic Queue"]
    }
  ],
    sixMonths: [
    {
      id: "line_sliding_window_maximum",
      difficulty: "Hard",
      title: "Sliding Window Maximum",
      frequency: 100,
      link: "https://leetcode.com/problems/sliding-window-maximum",
      topics: ["Array", "Queue", "Sliding Window", "Heap (Priority Queue)", "Monotonic Queue"]
    }
  ],
    moreThanSixMonths: [
    {
      id: "line_sudoku_solver",
      difficulty: "Hard",
      title: "Sudoku Solver",
      frequency: 100,
      link: "https://leetcode.com/problems/sudoku-solver",
      topics: ["Array", "Hash Table", "Backtracking", "Matrix"]
    },
    {
      id: "line_frog_jump",
      difficulty: "Hard",
      title: "Frog Jump",
      frequency: 100,
      link: "https://leetcode.com/problems/frog-jump",
      topics: ["Array", "Dynamic Programming"]
    },
    {
      id: "line_minimum_cost_to_cut_a_stick",
      difficulty: "Hard",
      title: "Minimum Cost to Cut a Stick",
      frequency: 100,
      link: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick",
      topics: ["Array", "Dynamic Programming", "Sorting"]
    }
  ]
  }
};

export default companyData;
