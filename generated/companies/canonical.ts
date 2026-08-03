import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "canonical",
  name: "Canonical",
  description: "Solve curated LeetCode questions asked in Canonical interviews.",
  topics: ["Array", "Math", "Simulation", "Sorting", "Stack", "String", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "canonical_divide_a_string_into_groups_of_size_k",
      difficulty: "Easy",
      title: "Divide a String Into Groups of Size k",
      frequency: 100,
      link: "https://leetcode.com/problems/divide-a-string-into-groups-of-size-k",
      topics: ["String", "Simulation"]
    },
    {
      id: "canonical_evaluate_reverse_polish_notation",
      difficulty: "Medium",
      title: "Evaluate Reverse Polish Notation",
      frequency: 81.1,
      link: "https://leetcode.com/problems/evaluate-reverse-polish-notation",
      topics: ["Array", "Math", "Stack"]
    },
    {
      id: "canonical_merge_sorted_array",
      difficulty: "Easy",
      title: "Merge Sorted Array",
      frequency: 66.8,
      link: "https://leetcode.com/problems/merge-sorted-array",
      topics: ["Array", "Two Pointers", "Sorting"]
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
      id: "canonical_evaluate_reverse_polish_notation",
      difficulty: "Medium",
      title: "Evaluate Reverse Polish Notation",
      frequency: 100,
      link: "https://leetcode.com/problems/evaluate-reverse-polish-notation",
      topics: ["Array", "Math", "Stack"]
    },
    {
      id: "canonical_divide_a_string_into_groups_of_size_k",
      difficulty: "Easy",
      title: "Divide a String Into Groups of Size k",
      frequency: 83.3,
      link: "https://leetcode.com/problems/divide-a-string-into-groups-of-size-k",
      topics: ["String", "Simulation"]
    },
    {
      id: "canonical_merge_sorted_array",
      difficulty: "Easy",
      title: "Merge Sorted Array",
      frequency: 83.3,
      link: "https://leetcode.com/problems/merge-sorted-array",
      topics: ["Array", "Two Pointers", "Sorting"]
    }
  ]
  }
};

export default companyData;
