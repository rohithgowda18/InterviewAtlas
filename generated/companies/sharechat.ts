import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "sharechat",
  name: "ShareChat",
  description: "Solve curated LeetCode questions asked in ShareChat interviews.",
  topics: ["Array", "Binary Search", "Binary Tree", "Breadth-First Search", "Counting", "Depth-First Search", "Hash Table", "Tree"],
  roadmaps: {
    all: [
    {
      id: "sharechat_maximum_count_of_positive_integer_and_negative_integer",
      difficulty: "Easy",
      title: "Maximum Count of Positive Integer and Negative Integer",
      frequency: 100,
      link: "https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer",
      topics: ["Array", "Binary Search", "Counting"]
    },
    {
      id: "sharechat_amount_of_time_for_binary_tree_to_be_infected",
      difficulty: "Medium",
      title: "Amount of Time for Binary Tree to Be Infected",
      frequency: 100,
      link: "https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected",
      topics: ["Hash Table", "Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"]
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
      id: "sharechat_amount_of_time_for_binary_tree_to_be_infected",
      difficulty: "Medium",
      title: "Amount of Time for Binary Tree to Be Infected",
      frequency: 100,
      link: "https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected",
      topics: ["Hash Table", "Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"]
    },
    {
      id: "sharechat_maximum_count_of_positive_integer_and_negative_integer",
      difficulty: "Easy",
      title: "Maximum Count of Positive Integer and Negative Integer",
      frequency: 100,
      link: "https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer",
      topics: ["Array", "Binary Search", "Counting"]
    }
  ]
  }
};

export default companyData;
