import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "indmoney",
  name: "INDmoney",
  description: "Solve curated LeetCode questions asked in INDmoney interviews.",
  topics: ["Binary Tree", "Data Stream", "Depth-First Search", "Design", "Monotonic Stack", "Stack", "Tree"],
  roadmaps: {
    all: [
    {
      id: "indmoney_online_stock_span",
      difficulty: "Medium",
      title: "Online Stock Span",
      frequency: 100,
      link: "https://leetcode.com/problems/online-stock-span",
      topics: ["Stack", "Design", "Monotonic Stack", "Data Stream"]
    },
    {
      id: "indmoney_count_nodes_equal_to_average_of_subtree",
      difficulty: "Medium",
      title: "Count Nodes Equal to Average of Subtree",
      frequency: 100,
      link: "https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree",
      topics: ["Tree", "Depth-First Search", "Binary Tree"]
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
      id: "indmoney_count_nodes_equal_to_average_of_subtree",
      difficulty: "Medium",
      title: "Count Nodes Equal to Average of Subtree",
      frequency: 100,
      link: "https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree",
      topics: ["Tree", "Depth-First Search", "Binary Tree"]
    },
    {
      id: "indmoney_online_stock_span",
      difficulty: "Medium",
      title: "Online Stock Span",
      frequency: 100,
      link: "https://leetcode.com/problems/online-stock-span",
      topics: ["Stack", "Design", "Monotonic Stack", "Data Stream"]
    }
  ]
  }
};

export default companyData;
