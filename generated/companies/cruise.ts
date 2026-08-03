import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "cruise",
  name: "Cruise",
  description: "Solve curated LeetCode questions asked in Cruise interviews.",
  topics: ["Array", "Backtracking", "Breadth-First Search", "Depth-First Search", "Graph Theory", "Hash Table", "Sort", "String", "Topological Sort", "Union-Find"],
  roadmaps: {
    all: [
    {
      id: "cruise_synonymous_sentences",
      difficulty: "Medium",
      title: "Synonymous Sentences",
      frequency: 100,
      link: "https://leetcode.com/problems/synonymous-sentences",
      topics: ["Array", "Hash Table", "String", "Backtracking", "Sort", "Union-Find"]
    },
    {
      id: "cruise_course_schedule",
      difficulty: "Medium",
      title: "Course Schedule",
      frequency: 68.7,
      link: "https://leetcode.com/problems/course-schedule",
      topics: ["Depth-First Search", "Breadth-First Search", "Graph Theory", "Topological Sort"]
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
      id: "cruise_synonymous_sentences",
      difficulty: "Medium",
      title: "Synonymous Sentences",
      frequency: 100,
      link: "https://leetcode.com/problems/synonymous-sentences",
      topics: ["Array", "Hash Table", "String", "Backtracking", "Sort", "Union-Find"]
    },
    {
      id: "cruise_course_schedule",
      difficulty: "Medium",
      title: "Course Schedule",
      frequency: 100,
      link: "https://leetcode.com/problems/course-schedule",
      topics: ["Depth-First Search", "Breadth-First Search", "Graph Theory", "Topological Sort"]
    }
  ]
  }
};

export default companyData;
