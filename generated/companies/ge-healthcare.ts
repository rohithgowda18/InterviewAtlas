import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "ge-healthcare",
  name: "GE Healthcare",
  description: "Solve curated LeetCode questions asked in GE Healthcare interviews.",
  topics: ["Array", "Binary Search", "Breadth-First Search", "Depth-First Search", "Divide and Conquer", "Graph Theory", "Shortest Path", "Simulation", "String", "Union-Find"],
  roadmaps: {
    all: [
    {
      id: "ge-healthcare_concatenation_of_array",
      difficulty: "Easy",
      title: "Concatenation of Array",
      frequency: 100,
      link: "https://leetcode.com/problems/concatenation-of-array",
      topics: ["Array", "Simulation"]
    },
    {
      id: "ge-healthcare_evaluate_division",
      difficulty: "Medium",
      title: "Evaluate Division",
      frequency: 75.2,
      link: "https://leetcode.com/problems/evaluate-division",
      topics: ["Array", "String", "Depth-First Search", "Breadth-First Search", "Union-Find", "Graph Theory", "Shortest Path"]
    },
    {
      id: "ge-healthcare_median_of_two_sorted_arrays",
      difficulty: "Hard",
      title: "Median of Two Sorted Arrays",
      frequency: 66.8,
      link: "https://leetcode.com/problems/median-of-two-sorted-arrays",
      topics: ["Array", "Binary Search", "Divide and Conquer"]
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
      id: "ge-healthcare_evaluate_division",
      difficulty: "Medium",
      title: "Evaluate Division",
      frequency: 100,
      link: "https://leetcode.com/problems/evaluate-division",
      topics: ["Array", "String", "Depth-First Search", "Breadth-First Search", "Union-Find", "Graph Theory", "Shortest Path"]
    },
    {
      id: "ge-healthcare_concatenation_of_array",
      difficulty: "Easy",
      title: "Concatenation of Array",
      frequency: 89.4,
      link: "https://leetcode.com/problems/concatenation-of-array",
      topics: ["Array", "Simulation"]
    },
    {
      id: "ge-healthcare_median_of_two_sorted_arrays",
      difficulty: "Hard",
      title: "Median of Two Sorted Arrays",
      frequency: 89.4,
      link: "https://leetcode.com/problems/median-of-two-sorted-arrays",
      topics: ["Array", "Binary Search", "Divide and Conquer"]
    }
  ]
  }
};

export default companyData;
