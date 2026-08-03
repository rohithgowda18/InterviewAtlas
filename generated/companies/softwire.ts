import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "softwire",
  name: "Softwire",
  description: "Solve curated LeetCode questions asked in Softwire interviews.",
  topics: ["Dynamic Programming", "Hash Table", "String", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "softwire_second_largest_digit_in_a_string",
      difficulty: "Easy",
      title: "Second Largest Digit in a String",
      frequency: 100,
      link: "https://leetcode.com/problems/second-largest-digit-in-a-string",
      topics: ["Hash Table", "String"]
    },
    {
      id: "softwire_longest_palindromic_substring",
      difficulty: "Medium",
      title: "Longest Palindromic Substring",
      frequency: 76.2,
      link: "https://leetcode.com/problems/longest-palindromic-substring",
      topics: ["Two Pointers", "String", "Dynamic Programming"]
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
      id: "softwire_second_largest_digit_in_a_string",
      difficulty: "Easy",
      title: "Second Largest Digit in a String",
      frequency: 100,
      link: "https://leetcode.com/problems/second-largest-digit-in-a-string",
      topics: ["Hash Table", "String"]
    },
    {
      id: "softwire_longest_palindromic_substring",
      difficulty: "Medium",
      title: "Longest Palindromic Substring",
      frequency: 100,
      link: "https://leetcode.com/problems/longest-palindromic-substring",
      topics: ["Two Pointers", "String", "Dynamic Programming"]
    }
  ]
  }
};

export default companyData;
