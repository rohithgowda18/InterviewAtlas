import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "odoo",
  name: "Odoo",
  description: "Solve curated LeetCode questions asked in Odoo interviews.",
  topics: ["Design", "Stack", "String"],
  roadmaps: {
    all: [
    {
      id: "odoo_valid_parentheses",
      difficulty: "Easy",
      title: "Valid Parentheses",
      frequency: 100,
      link: "https://leetcode.com/problems/valid-parentheses",
      topics: ["String", "Stack"]
    },
    {
      id: "odoo_min_stack",
      difficulty: "Medium",
      title: "Min Stack",
      frequency: 82.8,
      link: "https://leetcode.com/problems/min-stack",
      topics: ["Stack", "Design"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [
    {
      id: "odoo_valid_parentheses",
      difficulty: "Easy",
      title: "Valid Parentheses",
      frequency: 100,
      link: "https://leetcode.com/problems/valid-parentheses",
      topics: ["String", "Stack"]
    }
  ],
    sixMonths: [
    {
      id: "odoo_valid_parentheses",
      difficulty: "Easy",
      title: "Valid Parentheses",
      frequency: 100,
      link: "https://leetcode.com/problems/valid-parentheses",
      topics: ["String", "Stack"]
    }
  ],
    moreThanSixMonths: [
    {
      id: "odoo_valid_parentheses",
      difficulty: "Easy",
      title: "Valid Parentheses",
      frequency: 100,
      link: "https://leetcode.com/problems/valid-parentheses",
      topics: ["String", "Stack"]
    }
  ]
  }
};

export default companyData;
