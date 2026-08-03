import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "careem",
  name: "Careem",
  description: "Solve curated LeetCode questions asked in Careem interviews.",
  topics: ["Array", "Binary Search", "Data Stream", "Design", "Hash Table", "Queue", "Sorting", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "careem_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 100,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "careem_3sum",
      difficulty: "Medium",
      title: "3Sum",
      frequency: 89.3,
      link: "https://leetcode.com/problems/3sum",
      topics: ["Array", "Two Pointers", "Sorting"]
    },
    {
      id: "careem_design_hit_counter",
      difficulty: "Medium",
      title: "Design Hit Counter",
      frequency: 89.3,
      link: "https://leetcode.com/problems/design-hit-counter",
      topics: ["Array", "Binary Search", "Design", "Queue", "Data Stream"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [

  ],
    sixMonths: [
    {
      id: "careem_design_hit_counter",
      difficulty: "Medium",
      title: "Design Hit Counter",
      frequency: 100,
      link: "https://leetcode.com/problems/design-hit-counter",
      topics: ["Array", "Binary Search", "Design", "Queue", "Data Stream"]
    }
  ],
    moreThanSixMonths: [
    {
      id: "careem_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 100,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "careem_3sum",
      difficulty: "Medium",
      title: "3Sum",
      frequency: 89.8,
      link: "https://leetcode.com/problems/3sum",
      topics: ["Array", "Two Pointers", "Sorting"]
    }
  ]
  }
};

export default companyData;
