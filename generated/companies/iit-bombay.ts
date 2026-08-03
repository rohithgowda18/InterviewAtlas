import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "iit-bombay",
  name: "IIT Bombay",
  description: "Solve curated LeetCode questions asked in IIT Bombay interviews.",
  topics: ["Array", "Bit Manipulation", "Greedy", "Matrix", "String", "String Matching", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "iit-bombay_score_after_flipping_matrix",
      difficulty: "Medium",
      title: "Score After Flipping Matrix",
      frequency: 100,
      link: "https://leetcode.com/problems/score-after-flipping-matrix",
      topics: ["Array", "Greedy", "Bit Manipulation", "Matrix"]
    },
    {
      id: "iit-bombay_find_the_index_of_the_first_occurrence_in_a_string",
      difficulty: "Easy",
      title: "Find the Index of the First Occurrence in a String",
      frequency: 68.4,
      link: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string",
      topics: ["Two Pointers", "String", "String Matching"]
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
      id: "iit-bombay_find_the_index_of_the_first_occurrence_in_a_string",
      difficulty: "Easy",
      title: "Find the Index of the First Occurrence in a String",
      frequency: 100,
      link: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string",
      topics: ["Two Pointers", "String", "String Matching"]
    },
    {
      id: "iit-bombay_score_after_flipping_matrix",
      difficulty: "Medium",
      title: "Score After Flipping Matrix",
      frequency: 100,
      link: "https://leetcode.com/problems/score-after-flipping-matrix",
      topics: ["Array", "Greedy", "Bit Manipulation", "Matrix"]
    }
  ]
  }
};

export default companyData;
