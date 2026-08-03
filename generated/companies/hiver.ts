import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "hiver",
  name: "Hiver",
  description: "Solve curated LeetCode questions asked in Hiver interviews.",
  topics: ["Array", "Dynamic Programming", "Recursion", "String"],
  roadmaps: {
    all: [
    {
      id: "hiver_regular_expression_matching",
      difficulty: "Hard",
      title: "Regular Expression Matching",
      frequency: 100,
      link: "https://leetcode.com/problems/regular-expression-matching",
      topics: ["String", "Dynamic Programming", "Recursion"]
    },
    {
      id: "hiver_maximum_product_subarray",
      difficulty: "Medium",
      title: "Maximum Product Subarray",
      frequency: 100,
      link: "https://leetcode.com/problems/maximum-product-subarray",
      topics: ["Array", "Dynamic Programming"]
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
      id: "hiver_regular_expression_matching",
      difficulty: "Hard",
      title: "Regular Expression Matching",
      frequency: 100,
      link: "https://leetcode.com/problems/regular-expression-matching",
      topics: ["String", "Dynamic Programming", "Recursion"]
    },
    {
      id: "hiver_maximum_product_subarray",
      difficulty: "Medium",
      title: "Maximum Product Subarray",
      frequency: 100,
      link: "https://leetcode.com/problems/maximum-product-subarray",
      topics: ["Array", "Dynamic Programming"]
    }
  ]
  }
};

export default companyData;
