import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "lti",
  name: "LTI",
  description: "Solve curated LeetCode questions asked in LTI interviews.",
  topics: ["Array", "Binary Search", "Bit Manipulation", "Bitmask", "Dynamic Programming", "Greedy", "Hash Table", "Math", "Prefix Sum", "Sliding Window", "Sorting", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "lti_maximum_white_tiles_covered_by_a_carpet",
      difficulty: "Medium",
      title: "Maximum White Tiles Covered by a Carpet",
      frequency: 100,
      link: "https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet",
      topics: ["Array", "Binary Search", "Greedy", "Sliding Window", "Sorting", "Prefix Sum"]
    },
    {
      id: "lti_reverse_integer",
      difficulty: "Medium",
      title: "Reverse Integer",
      frequency: 88.8,
      link: "https://leetcode.com/problems/reverse-integer",
      topics: ["Math"]
    },
    {
      id: "lti_closest_subsequence_sum",
      difficulty: "Hard",
      title: "Closest Subsequence Sum",
      frequency: 88.8,
      link: "https://leetcode.com/problems/closest-subsequence-sum",
      topics: ["Array", "Two Pointers", "Dynamic Programming", "Bit Manipulation", "Sorting", "Bitmask"]
    },
    {
      id: "lti_count_zero_request_servers",
      difficulty: "Medium",
      title: "Count Zero Request Servers",
      frequency: 88.8,
      link: "https://leetcode.com/problems/count-zero-request-servers",
      topics: ["Array", "Hash Table", "Sliding Window", "Sorting"]
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
      id: "lti_maximum_white_tiles_covered_by_a_carpet",
      difficulty: "Medium",
      title: "Maximum White Tiles Covered by a Carpet",
      frequency: 100,
      link: "https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet",
      topics: ["Array", "Binary Search", "Greedy", "Sliding Window", "Sorting", "Prefix Sum"]
    },
    {
      id: "lti_reverse_integer",
      difficulty: "Medium",
      title: "Reverse Integer",
      frequency: 89,
      link: "https://leetcode.com/problems/reverse-integer",
      topics: ["Math"]
    },
    {
      id: "lti_closest_subsequence_sum",
      difficulty: "Hard",
      title: "Closest Subsequence Sum",
      frequency: 89,
      link: "https://leetcode.com/problems/closest-subsequence-sum",
      topics: ["Array", "Two Pointers", "Dynamic Programming", "Bit Manipulation", "Sorting", "Bitmask"]
    },
    {
      id: "lti_count_zero_request_servers",
      difficulty: "Medium",
      title: "Count Zero Request Servers",
      frequency: 89,
      link: "https://leetcode.com/problems/count-zero-request-servers",
      topics: ["Array", "Hash Table", "Sliding Window", "Sorting"]
    }
  ]
  }
};

export default companyData;
