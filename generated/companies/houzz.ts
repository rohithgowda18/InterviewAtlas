import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "houzz",
  name: "Houzz",
  description: "Solve curated LeetCode questions asked in Houzz interviews.",
  topics: ["Math", "Recursion", "Stack", "String"],
  roadmaps: {
    all: [
    {
      id: "houzz_remove_9",
      difficulty: "Hard",
      title: "Remove 9",
      frequency: 100,
      link: "https://leetcode.com/problems/remove-9",
      topics: ["Math"]
    },
    {
      id: "houzz_basic_calculator_iii",
      difficulty: "Hard",
      title: "Basic Calculator III",
      frequency: 100,
      link: "https://leetcode.com/problems/basic-calculator-iii",
      topics: ["Math", "String", "Stack", "Recursion"]
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
      id: "houzz_basic_calculator_iii",
      difficulty: "Hard",
      title: "Basic Calculator III",
      frequency: 100,
      link: "https://leetcode.com/problems/basic-calculator-iii",
      topics: ["Math", "String", "Stack", "Recursion"]
    },
    {
      id: "houzz_remove_9",
      difficulty: "Hard",
      title: "Remove 9",
      frequency: 100,
      link: "https://leetcode.com/problems/remove-9",
      topics: ["Math"]
    }
  ]
  }
};

export default companyData;
