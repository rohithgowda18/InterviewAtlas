import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "tesco",
  name: "Tesco",
  description: "Solve curated LeetCode questions asked in Tesco interviews.",
  topics: ["Array", "Sorting"],
  roadmaps: {
    all: [
    {
      id: "tesco_merge_intervals",
      difficulty: "Medium",
      title: "Merge Intervals",
      frequency: 100,
      link: "https://leetcode.com/problems/merge-intervals",
      topics: ["Array", "Sorting"]
    },
    {
      id: "tesco_insert_interval",
      difficulty: "Medium",
      title: "Insert Interval",
      frequency: 65.7,
      link: "https://leetcode.com/problems/insert-interval",
      topics: ["Array"]
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
      id: "tesco_merge_intervals",
      difficulty: "Medium",
      title: "Merge Intervals",
      frequency: 100,
      link: "https://leetcode.com/problems/merge-intervals",
      topics: ["Array", "Sorting"]
    },
    {
      id: "tesco_insert_interval",
      difficulty: "Medium",
      title: "Insert Interval",
      frequency: 67.3,
      link: "https://leetcode.com/problems/insert-interval",
      topics: ["Array"]
    }
  ]
  }
};

export default companyData;
