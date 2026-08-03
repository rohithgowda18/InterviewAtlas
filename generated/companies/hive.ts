import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "hive",
  name: "Hive",
  description: "Solve curated LeetCode questions asked in Hive interviews.",
  topics: ["Array", "Bucket Sort", "Counting Sort", "Divide and Conquer", "Dynamic Programming", "Heap (Priority Queue)", "Merge Sort", "Monotonic Stack", "Radix Sort", "Sorting", "Stack", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "hive_trapping_rain_water",
      difficulty: "Hard",
      title: "Trapping Rain Water",
      frequency: 100,
      link: "https://leetcode.com/problems/trapping-rain-water",
      topics: ["Array", "Two Pointers", "Dynamic Programming", "Stack", "Monotonic Stack"]
    },
    {
      id: "hive_sort_an_array",
      difficulty: "Medium",
      title: "Sort an Array",
      frequency: 100,
      link: "https://leetcode.com/problems/sort-an-array",
      topics: ["Array", "Divide and Conquer", "Sorting", "Heap (Priority Queue)", "Merge Sort", "Bucket Sort", "Radix Sort", "Counting Sort"]
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
      id: "hive_trapping_rain_water",
      difficulty: "Hard",
      title: "Trapping Rain Water",
      frequency: 100,
      link: "https://leetcode.com/problems/trapping-rain-water",
      topics: ["Array", "Two Pointers", "Dynamic Programming", "Stack", "Monotonic Stack"]
    },
    {
      id: "hive_sort_an_array",
      difficulty: "Medium",
      title: "Sort an Array",
      frequency: 100,
      link: "https://leetcode.com/problems/sort-an-array",
      topics: ["Array", "Divide and Conquer", "Sorting", "Heap (Priority Queue)", "Merge Sort", "Bucket Sort", "Radix Sort", "Counting Sort"]
    }
  ]
  }
};

export default companyData;
