import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "cvent",
  name: "CVENT",
  description: "Solve curated LeetCode questions asked in CVENT interviews.",
  topics: ["Array", "Greedy", "Hash Table", "Linked List", "Sorting", "String"],
  roadmaps: {
    all: [
    {
      id: "cvent_copy_list_with_random_pointer",
      difficulty: "Medium",
      title: "Copy List with Random Pointer",
      frequency: 100,
      link: "https://leetcode.com/problems/copy-list-with-random-pointer",
      topics: ["Hash Table", "Linked List"]
    },
    {
      id: "cvent_largest_number",
      difficulty: "Medium",
      title: "Largest Number",
      frequency: 100,
      link: "https://leetcode.com/problems/largest-number",
      topics: ["Array", "String", "Greedy", "Sorting"]
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
      id: "cvent_copy_list_with_random_pointer",
      difficulty: "Medium",
      title: "Copy List with Random Pointer",
      frequency: 100,
      link: "https://leetcode.com/problems/copy-list-with-random-pointer",
      topics: ["Hash Table", "Linked List"]
    },
    {
      id: "cvent_largest_number",
      difficulty: "Medium",
      title: "Largest Number",
      frequency: 100,
      link: "https://leetcode.com/problems/largest-number",
      topics: ["Array", "String", "Greedy", "Sorting"]
    }
  ]
  }
};

export default companyData;
