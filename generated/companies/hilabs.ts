import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "hilabs",
  name: "HiLabs",
  description: "Solve curated LeetCode questions asked in HiLabs interviews.",
  topics: ["Bit Manipulation", "Bitmask", "Dynamic Programming", "Math", "Recursion", "Simulation", "Stack", "String"],
  roadmaps: {
    all: [
    {
      id: "hilabs_maximize_the_number_of_partitions_after_operations",
      difficulty: "Hard",
      title: "Maximize the Number of Partitions After Operations",
      frequency: 100,
      link: "https://leetcode.com/problems/maximize-the-number-of-partitions-after-operations",
      topics: ["String", "Dynamic Programming", "Bit Manipulation", "Bitmask"]
    },
    {
      id: "hilabs_water_bottles",
      difficulty: "Easy",
      title: "Water Bottles",
      frequency: 67.9,
      link: "https://leetcode.com/problems/water-bottles",
      topics: ["Math", "Simulation"]
    },
    {
      id: "hilabs_parsing_a_boolean_expression",
      difficulty: "Hard",
      title: "Parsing A Boolean Expression",
      frequency: 67.9,
      link: "https://leetcode.com/problems/parsing-a-boolean-expression",
      topics: ["String", "Stack", "Recursion"]
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
      id: "hilabs_maximize_the_number_of_partitions_after_operations",
      difficulty: "Hard",
      title: "Maximize the Number of Partitions After Operations",
      frequency: 100,
      link: "https://leetcode.com/problems/maximize-the-number-of-partitions-after-operations",
      topics: ["String", "Dynamic Programming", "Bit Manipulation", "Bitmask"]
    },
    {
      id: "hilabs_water_bottles",
      difficulty: "Easy",
      title: "Water Bottles",
      frequency: 100,
      link: "https://leetcode.com/problems/water-bottles",
      topics: ["Math", "Simulation"]
    },
    {
      id: "hilabs_parsing_a_boolean_expression",
      difficulty: "Hard",
      title: "Parsing A Boolean Expression",
      frequency: 100,
      link: "https://leetcode.com/problems/parsing-a-boolean-expression",
      topics: ["String", "Stack", "Recursion"]
    }
  ]
  }
};

export default companyData;
