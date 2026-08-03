import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "mindtree",
  name: "MindTree",
  description: "Solve curated LeetCode questions asked in MindTree interviews.",
  topics: ["Array", "Database", "Hash Table", "Math", "Simulation"],
  roadmaps: {
    all: [
    {
      id: "mindtree_count_integers_with_even_digit_sum",
      difficulty: "Easy",
      title: "Count Integers With Even Digit Sum",
      frequency: 100,
      link: "https://leetcode.com/problems/count-integers-with-even-digit-sum",
      topics: ["Math", "Simulation"]
    },
    {
      id: "mindtree_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 75.2,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "mindtree_average_time_of_process_per_machine",
      difficulty: "Easy",
      title: "Average Time of Process per Machine",
      frequency: 66.8,
      link: "https://leetcode.com/problems/average-time-of-process-per-machine",
      topics: ["Database"]
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
      id: "mindtree_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 100,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "mindtree_count_integers_with_even_digit_sum",
      difficulty: "Easy",
      title: "Count Integers With Even Digit Sum",
      frequency: 89.6,
      link: "https://leetcode.com/problems/count-integers-with-even-digit-sum",
      topics: ["Math", "Simulation"]
    }
  ]
  }
};

export default companyData;
