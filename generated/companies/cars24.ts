import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "cars24",
  name: "CARS24",
  description: "Solve curated LeetCode questions asked in CARS24 interviews.",
  topics: ["Array", "Dynamic Programming", "Greedy", "Hash Table", "Math", "Sorting"],
  roadmaps: {
    all: [
    {
      id: "cars24_rabbits_in_forest",
      difficulty: "Medium",
      title: "Rabbits in Forest",
      frequency: 100,
      link: "https://leetcode.com/problems/rabbits-in-forest",
      topics: ["Array", "Hash Table", "Math", "Greedy"]
    },
    {
      id: "cars24_house_robber",
      difficulty: "Medium",
      title: "House Robber",
      frequency: 100,
      link: "https://leetcode.com/problems/house-robber",
      topics: ["Array", "Dynamic Programming"]
    },
    {
      id: "cars24_merge_intervals",
      difficulty: "Medium",
      title: "Merge Intervals",
      frequency: 100,
      link: "https://leetcode.com/problems/merge-intervals",
      topics: ["Array", "Sorting"]
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
      id: "cars24_rabbits_in_forest",
      difficulty: "Medium",
      title: "Rabbits in Forest",
      frequency: 100,
      link: "https://leetcode.com/problems/rabbits-in-forest",
      topics: ["Array", "Hash Table", "Math", "Greedy"]
    },
    {
      id: "cars24_merge_intervals",
      difficulty: "Medium",
      title: "Merge Intervals",
      frequency: 100,
      link: "https://leetcode.com/problems/merge-intervals",
      topics: ["Array", "Sorting"]
    },
    {
      id: "cars24_house_robber",
      difficulty: "Medium",
      title: "House Robber",
      frequency: 100,
      link: "https://leetcode.com/problems/house-robber",
      topics: ["Array", "Dynamic Programming"]
    }
  ]
  }
};

export default companyData;
