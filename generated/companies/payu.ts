import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "payu",
  name: "PayU",
  description: "Solve curated LeetCode questions asked in PayU interviews.",
  topics: ["Hash Table", "Math", "Simulation", "Sliding Window", "String"],
  roadmaps: {
    all: [
    {
      id: "payu_count_operations_to_obtain_zero",
      difficulty: "Easy",
      title: "Count Operations to Obtain Zero",
      frequency: 100,
      link: "https://leetcode.com/problems/count-operations-to-obtain-zero",
      topics: ["Math", "Simulation"]
    },
    {
      id: "payu_longest_repeating_character_replacement",
      difficulty: "Medium",
      title: "Longest Repeating Character Replacement",
      frequency: 65.9,
      link: "https://leetcode.com/problems/longest-repeating-character-replacement",
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
      id: "payu_count_operations_to_obtain_zero",
      difficulty: "Easy",
      title: "Count Operations to Obtain Zero",
      frequency: 100,
      link: "https://leetcode.com/problems/count-operations-to-obtain-zero",
      topics: ["Math", "Simulation"]
    }
  ]
  }
};

export default companyData;
