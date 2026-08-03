import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "apollo-io",
  name: "Apollo.io",
  description: "Solve curated LeetCode questions asked in Apollo.io interviews.",
  topics: ["Array", "Binary Search", "Hash Table", "Math", "Sliding Window", "Stack", "String"],
  roadmaps: {
    all: [
    {
      id: "apollo-io_evaluate_reverse_polish_notation",
      difficulty: "Medium",
      title: "Evaluate Reverse Polish Notation",
      frequency: 100,
      link: "https://leetcode.com/problems/evaluate-reverse-polish-notation",
      topics: ["Array", "Math", "Stack"]
    },
    {
      id: "apollo-io_capacity_to_ship_packages_within_d_days",
      difficulty: "Medium",
      title: "Capacity To Ship Packages Within D Days",
      frequency: 100,
      link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days",
      topics: ["Array", "Binary Search"]
    },
    {
      id: "apollo-io_minimum_window_substring",
      difficulty: "Hard",
      title: "Minimum Window Substring",
      frequency: 90.3,
      link: "https://leetcode.com/problems/minimum-window-substring",
      topics: ["Hash Table", "String", "Sliding Window"]
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
      id: "apollo-io_evaluate_reverse_polish_notation",
      difficulty: "Medium",
      title: "Evaluate Reverse Polish Notation",
      frequency: 100,
      link: "https://leetcode.com/problems/evaluate-reverse-polish-notation",
      topics: ["Array", "Math", "Stack"]
    },
    {
      id: "apollo-io_capacity_to_ship_packages_within_d_days",
      difficulty: "Medium",
      title: "Capacity To Ship Packages Within D Days",
      frequency: 100,
      link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days",
      topics: ["Array", "Binary Search"]
    },
    {
      id: "apollo-io_minimum_window_substring",
      difficulty: "Hard",
      title: "Minimum Window Substring",
      frequency: 90.3,
      link: "https://leetcode.com/problems/minimum-window-substring",
      topics: ["Hash Table", "String", "Sliding Window"]
    }
  ]
  }
};

export default companyData;
