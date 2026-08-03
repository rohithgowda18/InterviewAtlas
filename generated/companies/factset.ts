import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "factset",
  name: "FactSet",
  description: "Solve curated LeetCode questions asked in FactSet interviews.",
  topics: ["Array", "Greedy", "Hash Table", "Monotonic Stack", "Sorting", "Stack", "String"],
  roadmaps: {
    all: [
    {
      id: "factset_remove_duplicate_letters",
      difficulty: "Medium",
      title: "Remove Duplicate Letters",
      frequency: 100,
      link: "https://leetcode.com/problems/remove-duplicate-letters",
      topics: ["String", "Stack", "Greedy", "Monotonic Stack"]
    },
    {
      id: "factset_smallest_subsequence_of_distinct_characters",
      difficulty: "Medium",
      title: "Smallest Subsequence of Distinct Characters",
      frequency: 97.8,
      link: "https://leetcode.com/problems/smallest-subsequence-of-distinct-characters",
      topics: ["String", "Stack", "Greedy", "Monotonic Stack"]
    },
    {
      id: "factset_remove_all_adjacent_duplicates_in_string_ii",
      difficulty: "Medium",
      title: "Remove All Adjacent Duplicates in String II",
      frequency: 97.8,
      link: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii",
      topics: ["String", "Stack"]
    },
    {
      id: "factset_group_anagrams",
      difficulty: "Medium",
      title: "Group Anagrams",
      frequency: 61.6,
      link: "https://leetcode.com/problems/group-anagrams",
      topics: ["Array", "Hash Table", "String", "Sorting"]
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
      id: "factset_remove_duplicate_letters",
      difficulty: "Medium",
      title: "Remove Duplicate Letters",
      frequency: 100,
      link: "https://leetcode.com/problems/remove-duplicate-letters",
      topics: ["String", "Stack", "Greedy", "Monotonic Stack"]
    },
    {
      id: "factset_remove_all_adjacent_duplicates_in_string_ii",
      difficulty: "Medium",
      title: "Remove All Adjacent Duplicates in String II",
      frequency: 88,
      link: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii",
      topics: ["String", "Stack"]
    },
    {
      id: "factset_smallest_subsequence_of_distinct_characters",
      difficulty: "Medium",
      title: "Smallest Subsequence of Distinct Characters",
      frequency: 88,
      link: "https://leetcode.com/problems/smallest-subsequence-of-distinct-characters",
      topics: ["String", "Stack", "Greedy", "Monotonic Stack"]
    }
  ]
  }
};

export default companyData;
