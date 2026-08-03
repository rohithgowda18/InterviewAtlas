import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "netease",
  name: "NetEase",
  description: "Solve curated LeetCode questions asked in NetEase interviews.",
  topics: ["Array", "Binary Search", "Dynamic Programming", "Greedy", "Sorting", "String", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "netease_strange_printer",
      difficulty: "Hard",
      title: "Strange Printer",
      frequency: 100,
      link: "https://leetcode.com/problems/strange-printer",
      topics: ["String", "Dynamic Programming"]
    },
    {
      id: "netease_most_profit_assigning_work",
      difficulty: "Medium",
      title: "Most Profit Assigning Work",
      frequency: 98.1,
      link: "https://leetcode.com/problems/most-profit-assigning-work",
      topics: ["Array", "Two Pointers", "Binary Search", "Greedy", "Sorting"]
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
      id: "netease_strange_printer",
      difficulty: "Hard",
      title: "Strange Printer",
      frequency: 100,
      link: "https://leetcode.com/problems/strange-printer",
      topics: ["String", "Dynamic Programming"]
    },
    {
      id: "netease_most_profit_assigning_work",
      difficulty: "Medium",
      title: "Most Profit Assigning Work",
      frequency: 91.1,
      link: "https://leetcode.com/problems/most-profit-assigning-work",
      topics: ["Array", "Two Pointers", "Binary Search", "Greedy", "Sorting"]
    }
  ]
  }
};

export default companyData;
