import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "pwc",
  name: "Pwc",
  description: "Solve curated LeetCode questions asked in Pwc interviews.",
  topics: ["Array", "Binary Search", "Divide and Conquer", "Hash Table", "Math", "String", "Trie"],
  roadmaps: {
    all: [
    {
      id: "pwc_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 100,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "pwc_longest_common_prefix",
      difficulty: "Easy",
      title: "Longest Common Prefix",
      frequency: 83.4,
      link: "https://leetcode.com/problems/longest-common-prefix",
      topics: ["Array", "String", "Trie"]
    },
    {
      id: "pwc_median_of_two_sorted_arrays",
      difficulty: "Hard",
      title: "Median of Two Sorted Arrays",
      frequency: 73.7,
      link: "https://leetcode.com/problems/median-of-two-sorted-arrays",
      topics: ["Array", "Binary Search", "Divide and Conquer"]
    },
    {
      id: "pwc_roman_to_integer",
      difficulty: "Easy",
      title: "Roman to Integer",
      frequency: 73.7,
      link: "https://leetcode.com/problems/roman-to-integer",
      topics: ["Hash Table", "Math", "String"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [

  ],
    sixMonths: [
    {
      id: "pwc_longest_common_prefix",
      difficulty: "Easy",
      title: "Longest Common Prefix",
      frequency: 100,
      link: "https://leetcode.com/problems/longest-common-prefix",
      topics: ["Array", "String", "Trie"]
    }
  ],
    moreThanSixMonths: [
    {
      id: "pwc_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 100,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "pwc_median_of_two_sorted_arrays",
      difficulty: "Hard",
      title: "Median of Two Sorted Arrays",
      frequency: 74.3,
      link: "https://leetcode.com/problems/median-of-two-sorted-arrays",
      topics: ["Array", "Binary Search", "Divide and Conquer"]
    },
    {
      id: "pwc_roman_to_integer",
      difficulty: "Easy",
      title: "Roman to Integer",
      frequency: 74.3,
      link: "https://leetcode.com/problems/roman-to-integer",
      topics: ["Hash Table", "Math", "String"]
    }
  ]
  }
};

export default companyData;
