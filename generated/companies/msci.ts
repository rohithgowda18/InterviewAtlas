import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "msci",
  name: "MSCI",
  description: "Solve curated LeetCode questions asked in MSCI interviews.",
  topics: ["Array", "Hash Table", "Sorting", "String"],
  roadmaps: {
    all: [
    {
      id: "msci_group_anagrams",
      difficulty: "Medium",
      title: "Group Anagrams",
      frequency: 100,
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
      id: "msci_group_anagrams",
      difficulty: "Medium",
      title: "Group Anagrams",
      frequency: 100,
      link: "https://leetcode.com/problems/group-anagrams",
      topics: ["Array", "Hash Table", "String", "Sorting"]
    }
  ]
  }
};

export default companyData;
