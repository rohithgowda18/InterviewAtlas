import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "honeywell",
  name: "Honeywell",
  description: "Solve curated LeetCode questions asked in Honeywell interviews.",
  topics: ["Array", "Greedy", "Hash Table", "Matrix", "Sliding Window", "Sorting"],
  roadmaps: {
    all: [
    {
      id: "honeywell_minimum_distance_to_the_target_element",
      difficulty: "Easy",
      title: "Minimum Distance to the Target Element",
      frequency: 100,
      link: "https://leetcode.com/problems/minimum-distance-to-the-target-element",
      topics: ["Array"]
    },
    {
      id: "honeywell_count_zero_request_servers",
      difficulty: "Medium",
      title: "Count Zero Request Servers",
      frequency: 75.5,
      link: "https://leetcode.com/problems/count-zero-request-servers",
      topics: ["Array", "Hash Table", "Sliding Window", "Sorting"]
    },
    {
      id: "honeywell_maximum_matrix_sum",
      difficulty: "Medium",
      title: "Maximum Matrix Sum",
      frequency: 67.3,
      link: "https://leetcode.com/problems/maximum-matrix-sum",
      topics: ["Array", "Greedy", "Matrix"]
    },
    {
      id: "honeywell_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 67.3,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
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
      id: "honeywell_count_zero_request_servers",
      difficulty: "Medium",
      title: "Count Zero Request Servers",
      frequency: 100,
      link: "https://leetcode.com/problems/count-zero-request-servers",
      topics: ["Array", "Hash Table", "Sliding Window", "Sorting"]
    },
    {
      id: "honeywell_minimum_distance_to_the_target_element",
      difficulty: "Easy",
      title: "Minimum Distance to the Target Element",
      frequency: 89.6,
      link: "https://leetcode.com/problems/minimum-distance-to-the-target-element",
      topics: ["Array"]
    },
    {
      id: "honeywell_maximum_matrix_sum",
      difficulty: "Medium",
      title: "Maximum Matrix Sum",
      frequency: 89.6,
      link: "https://leetcode.com/problems/maximum-matrix-sum",
      topics: ["Array", "Greedy", "Matrix"]
    }
  ]
  }
};

export default companyData;
