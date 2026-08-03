import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "flexera",
  name: "Flexera",
  description: "Solve curated LeetCode questions asked in Flexera interviews.",
  topics: ["Greedy", "Hash Table", "Heap (Priority Queue)", "Simulation", "Stack", "String"],
  roadmaps: {
    all: [
    {
      id: "flexera_lexicographically_minimum_string_after_removing_stars",
      difficulty: "Medium",
      title: "Lexicographically Minimum String After Removing Stars",
      frequency: 100,
      link: "https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars",
      topics: ["Hash Table", "String", "Stack", "Greedy", "Heap (Priority Queue)"]
    },
    {
      id: "flexera_clear_digits",
      difficulty: "Easy",
      title: "Clear Digits",
      frequency: 100,
      link: "https://leetcode.com/problems/clear-digits",
      topics: ["String", "Stack", "Simulation"]
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
      id: "flexera_lexicographically_minimum_string_after_removing_stars",
      difficulty: "Medium",
      title: "Lexicographically Minimum String After Removing Stars",
      frequency: 100,
      link: "https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars",
      topics: ["Hash Table", "String", "Stack", "Greedy", "Heap (Priority Queue)"]
    },
    {
      id: "flexera_clear_digits",
      difficulty: "Easy",
      title: "Clear Digits",
      frequency: 100,
      link: "https://leetcode.com/problems/clear-digits",
      topics: ["String", "Stack", "Simulation"]
    }
  ]
  }
};

export default companyData;
