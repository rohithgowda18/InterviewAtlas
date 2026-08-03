import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "circle",
  name: "Circle",
  description: "Solve curated LeetCode questions asked in Circle interviews.",
  topics: ["Array", "Design", "Hash Table", "Simulation", "Sorting", "String", "Trie"],
  roadmaps: {
    all: [
    {
      id: "circle_simple_bank_system",
      difficulty: "Medium",
      title: "Simple Bank System",
      frequency: 100,
      link: "https://leetcode.com/problems/simple-bank-system",
      topics: ["Array", "Hash Table", "Design", "Simulation"]
    },
    {
      id: "circle_design_in_memory_file_system",
      difficulty: "Hard",
      title: "Design In-Memory File System",
      frequency: 90.6,
      link: "https://leetcode.com/problems/design-in-memory-file-system",
      topics: ["Hash Table", "String", "Design", "Trie", "Sorting"]
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
      id: "circle_design_in_memory_file_system",
      difficulty: "Hard",
      title: "Design In-Memory File System",
      frequency: 100,
      link: "https://leetcode.com/problems/design-in-memory-file-system",
      topics: ["Hash Table", "String", "Design", "Trie", "Sorting"]
    },
    {
      id: "circle_simple_bank_system",
      difficulty: "Medium",
      title: "Simple Bank System",
      frequency: 100,
      link: "https://leetcode.com/problems/simple-bank-system",
      topics: ["Array", "Hash Table", "Design", "Simulation"]
    }
  ]
  }
};

export default companyData;
