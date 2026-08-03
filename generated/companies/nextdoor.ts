import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "nextdoor",
  name: "Nextdoor",
  description: "Solve curated LeetCode questions asked in Nextdoor interviews.",
  topics: ["Array", "Design", "Doubly-Linked List", "Hash Table", "Linked List", "Sorting", "String", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "nextdoor_compare_version_numbers",
      difficulty: "Medium",
      title: "Compare Version Numbers",
      frequency: 100,
      link: "https://leetcode.com/problems/compare-version-numbers",
      topics: ["Two Pointers", "String"]
    },
    {
      id: "nextdoor_all_o_one_data_structure",
      difficulty: "Hard",
      title: "All O`one Data Structure",
      frequency: 94.7,
      link: "https://leetcode.com/problems/all-oone-data-structure",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    },
    {
      id: "nextdoor_merge_intervals",
      difficulty: "Medium",
      title: "Merge Intervals",
      frequency: 87.4,
      link: "https://leetcode.com/problems/merge-intervals",
      topics: ["Array", "Sorting"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [

  ],
    sixMonths: [
    {
      id: "nextdoor_merge_intervals",
      difficulty: "Medium",
      title: "Merge Intervals",
      frequency: 100,
      link: "https://leetcode.com/problems/merge-intervals",
      topics: ["Array", "Sorting"]
    }
  ],
    moreThanSixMonths: [
    {
      id: "nextdoor_compare_version_numbers",
      difficulty: "Medium",
      title: "Compare Version Numbers",
      frequency: 100,
      link: "https://leetcode.com/problems/compare-version-numbers",
      topics: ["Two Pointers", "String"]
    },
    {
      id: "nextdoor_all_o_one_data_structure",
      difficulty: "Hard",
      title: "All O`one Data Structure",
      frequency: 94.7,
      link: "https://leetcode.com/problems/all-oone-data-structure",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    },
    {
      id: "nextdoor_merge_intervals",
      difficulty: "Medium",
      title: "Merge Intervals",
      frequency: 76.3,
      link: "https://leetcode.com/problems/merge-intervals",
      topics: ["Array", "Sorting"]
    }
  ]
  }
};

export default companyData;
