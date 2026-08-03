import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "ge-digital",
  name: "GE Digital",
  description: "Solve curated LeetCode questions asked in GE Digital interviews.",
  topics: ["Array", "Enumeration", "Hash Table", "Math", "Stack", "String"],
  roadmaps: {
    all: [
    {
      id: "ge-digital_degree_of_an_array",
      difficulty: "Easy",
      title: "Degree of an Array",
      frequency: 100,
      link: "https://leetcode.com/problems/degree-of-an-array",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "ge-digital_minimum_cost_to_set_cooking_time",
      difficulty: "Medium",
      title: "Minimum Cost to Set Cooking Time",
      frequency: 76.2,
      link: "https://leetcode.com/problems/minimum-cost-to-set-cooking-time",
      topics: ["Math", "Enumeration"]
    },
    {
      id: "ge-digital_minimum_remove_to_make_valid_parentheses",
      difficulty: "Medium",
      title: "Minimum Remove to Make Valid Parentheses",
      frequency: 68.2,
      link: "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses",
      topics: ["String", "Stack"]
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
      id: "ge-digital_minimum_cost_to_set_cooking_time",
      difficulty: "Medium",
      title: "Minimum Cost to Set Cooking Time",
      frequency: 100,
      link: "https://leetcode.com/problems/minimum-cost-to-set-cooking-time",
      topics: ["Math", "Enumeration"]
    },
    {
      id: "ge-digital_degree_of_an_array",
      difficulty: "Easy",
      title: "Degree of an Array",
      frequency: 90.2,
      link: "https://leetcode.com/problems/degree-of-an-array",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "ge-digital_minimum_remove_to_make_valid_parentheses",
      difficulty: "Medium",
      title: "Minimum Remove to Make Valid Parentheses",
      frequency: 90.2,
      link: "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses",
      topics: ["String", "Stack"]
    }
  ]
  }
};

export default companyData;
