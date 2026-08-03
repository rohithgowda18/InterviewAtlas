import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "luxoft",
  name: "Luxoft",
  description: "Solve curated LeetCode questions asked in Luxoft interviews.",
  topics: ["Array", "Hash Table", "Linked List", "Recursion"],
  roadmaps: {
    all: [
    {
      id: "luxoft_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 100,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "luxoft_reverse_linked_list",
      difficulty: "Easy",
      title: "Reverse Linked List",
      frequency: 89.2,
      link: "https://leetcode.com/problems/reverse-linked-list",
      topics: ["Linked List", "Recursion"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [
    {
      id: "luxoft_reverse_linked_list",
      difficulty: "Easy",
      title: "Reverse Linked List",
      frequency: 100,
      link: "https://leetcode.com/problems/reverse-linked-list",
      topics: ["Linked List", "Recursion"]
    }
  ],
    sixMonths: [
    {
      id: "luxoft_reverse_linked_list",
      difficulty: "Easy",
      title: "Reverse Linked List",
      frequency: 100,
      link: "https://leetcode.com/problems/reverse-linked-list",
      topics: ["Linked List", "Recursion"]
    }
  ],
    moreThanSixMonths: [
    {
      id: "luxoft_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 100,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
    }
  ]
  }
};

export default companyData;
