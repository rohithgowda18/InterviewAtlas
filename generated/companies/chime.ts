import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "chime",
  name: "Chime",
  description: "Solve curated LeetCode questions asked in Chime interviews.",
  topics: ["Array", "Backtracking", "Breadth-First Search", "Depth-First Search", "Geometry", "Graph", "Hash Table", "Math", "String"],
  roadmaps: {
    all: [
    {
      id: "chime_detonate_the_maximum_bombs",
      difficulty: "Medium",
      title: "Detonate the Maximum Bombs",
      frequency: 100,
      link: "https://leetcode.com/problems/detonate-the-maximum-bombs",
      topics: ["Array", "Math", "Depth-First Search", "Breadth-First Search", "Graph", "Geometry"]
    },
    {
      id: "chime_letter_combinations_of_a_phone_number",
      difficulty: "Medium",
      title: "Letter Combinations of a Phone Number",
      frequency: 66.5,
      link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number",
      topics: ["Hash Table", "String", "Backtracking"]
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
      id: "chime_detonate_the_maximum_bombs",
      difficulty: "Medium",
      title: "Detonate the Maximum Bombs",
      frequency: 100,
      link: "https://leetcode.com/problems/detonate-the-maximum-bombs",
      topics: ["Array", "Math", "Depth-First Search", "Breadth-First Search", "Graph", "Geometry"]
    },
    {
      id: "chime_letter_combinations_of_a_phone_number",
      difficulty: "Medium",
      title: "Letter Combinations of a Phone Number",
      frequency: 68.4,
      link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number",
      topics: ["Hash Table", "String", "Backtracking"]
    }
  ]
  }
};

export default companyData;
