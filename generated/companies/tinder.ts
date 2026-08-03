import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "tinder",
  name: "Tinder",
  description: "Solve curated LeetCode questions asked in Tinder interviews.",
  topics: ["Array", "Binary Search Tree", "Binary Tree", "Data Stream", "Design", "Heap (Priority Queue)", "Simulation", "Sorting", "String", "Tree", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "tinder_find_median_from_data_stream",
      difficulty: "Hard",
      title: "Find Median from Data Stream",
      frequency: 100,
      link: "https://leetcode.com/problems/find-median-from-data-stream",
      topics: ["Two Pointers", "Design", "Sorting", "Heap (Priority Queue)", "Data Stream"]
    },
    {
      id: "tinder_kth_largest_element_in_a_stream",
      difficulty: "Easy",
      title: "Kth Largest Element in a Stream",
      frequency: 92.9,
      link: "https://leetcode.com/problems/kth-largest-element-in-a-stream",
      topics: ["Tree", "Design", "Binary Search Tree", "Heap (Priority Queue)", "Binary Tree", "Data Stream"]
    },
    {
      id: "tinder_text_justification",
      difficulty: "Hard",
      title: "Text Justification",
      frequency: 73.5,
      link: "https://leetcode.com/problems/text-justification",
      topics: ["Array", "String", "Simulation"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [

  ],
    sixMonths: [
    {
      id: "tinder_find_median_from_data_stream",
      difficulty: "Hard",
      title: "Find Median from Data Stream",
      frequency: 100,
      link: "https://leetcode.com/problems/find-median-from-data-stream",
      topics: ["Two Pointers", "Design", "Sorting", "Heap (Priority Queue)", "Data Stream"]
    }
  ],
    moreThanSixMonths: [
    {
      id: "tinder_find_median_from_data_stream",
      difficulty: "Hard",
      title: "Find Median from Data Stream",
      frequency: 100,
      link: "https://leetcode.com/problems/find-median-from-data-stream",
      topics: ["Two Pointers", "Design", "Sorting", "Heap (Priority Queue)", "Data Stream"]
    },
    {
      id: "tinder_kth_largest_element_in_a_stream",
      difficulty: "Easy",
      title: "Kth Largest Element in a Stream",
      frequency: 100,
      link: "https://leetcode.com/problems/kth-largest-element-in-a-stream",
      topics: ["Tree", "Design", "Binary Search Tree", "Heap (Priority Queue)", "Binary Tree", "Data Stream"]
    }
  ]
  }
};

export default companyData;
