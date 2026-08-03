import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "appdynamics",
  name: "AppDynamics",
  description: "Solve curated LeetCode questions asked in AppDynamics interviews.",
  topics: ["Counting", "Hash Table", "Math", "Sliding Window", "String"],
  roadmaps: {
    all: [
    {
      id: "appdynamics_maximum_number_of_balls_in_a_box",
      difficulty: "Easy",
      title: "Maximum Number of Balls in a Box",
      frequency: 100,
      link: "https://leetcode.com/problems/maximum-number-of-balls-in-a-box",
      topics: ["Hash Table", "Math", "Counting"]
    },
    {
      id: "appdynamics_longest_substring_with_at_most_k_distinct_characters",
      difficulty: "Medium",
      title: "Longest Substring with At Most K Distinct Characters",
      frequency: 100,
      link: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters",
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
      id: "appdynamics_longest_substring_with_at_most_k_distinct_characters",
      difficulty: "Medium",
      title: "Longest Substring with At Most K Distinct Characters",
      frequency: 100,
      link: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters",
      topics: ["Hash Table", "String", "Sliding Window"]
    },
    {
      id: "appdynamics_maximum_number_of_balls_in_a_box",
      difficulty: "Easy",
      title: "Maximum Number of Balls in a Box",
      frequency: 100,
      link: "https://leetcode.com/problems/maximum-number-of-balls-in-a-box",
      topics: ["Hash Table", "Math", "Counting"]
    }
  ]
  }
};

export default companyData;
