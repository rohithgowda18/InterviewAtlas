import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "cred",
  name: "CRED",
  description: "Solve curated LeetCode questions asked in CRED interviews.",
  topics: ["Array", "Counting", "Hash Table", "Sliding Window", "String"],
  roadmaps: {
    all: [
    {
      id: "cred_count_elements_with_maximum_frequency",
      difficulty: "Easy",
      title: "Count Elements With Maximum Frequency",
      frequency: 100,
      link: "https://leetcode.com/problems/count-elements-with-maximum-frequency",
      topics: ["Array", "Hash Table", "Counting"]
    },
    {
      id: "cred_longest_repeating_character_replacement",
      difficulty: "Medium",
      title: "Longest Repeating Character Replacement",
      frequency: 100,
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
      id: "cred_count_elements_with_maximum_frequency",
      difficulty: "Easy",
      title: "Count Elements With Maximum Frequency",
      frequency: 100,
      link: "https://leetcode.com/problems/count-elements-with-maximum-frequency",
      topics: ["Array", "Hash Table", "Counting"]
    },
    {
      id: "cred_longest_repeating_character_replacement",
      difficulty: "Medium",
      title: "Longest Repeating Character Replacement",
      frequency: 100,
      link: "https://leetcode.com/problems/longest-repeating-character-replacement",
      topics: ["Hash Table", "String", "Sliding Window"]
    }
  ]
  }
};

export default companyData;
