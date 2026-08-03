import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "fpt",
  name: "FPT",
  description: "Solve curated LeetCode questions asked in FPT interviews.",
  topics: ["Array", "Hash Table", "Math", "Simulation"],
  roadmaps: {
    all: [
    {
      id: "fpt_find_three_consecutive_integers_that_sum_to_a_given_number",
      difficulty: "Medium",
      title: "Find Three Consecutive Integers That Sum to a Given Number",
      frequency: 100,
      link: "https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number",
      topics: ["Math", "Simulation"]
    },
    {
      id: "fpt_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 65.9,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
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
      id: "fpt_find_three_consecutive_integers_that_sum_to_a_given_number",
      difficulty: "Medium",
      title: "Find Three Consecutive Integers That Sum to a Given Number",
      frequency: 100,
      link: "https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number",
      topics: ["Math", "Simulation"]
    },
    {
      id: "fpt_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 100,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
    }
  ]
  }
};

export default companyData;
