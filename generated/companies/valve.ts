import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "valve",
  name: "Valve",
  description: "Solve curated LeetCode questions asked in Valve interviews.",
  topics: ["Counting", "Design", "Greedy", "Queue", "Simulation", "String"],
  roadmaps: {
    all: [
    {
      id: "valve_dota2_senate",
      difficulty: "Medium",
      title: "Dota2 Senate",
      frequency: 100,
      link: "https://leetcode.com/problems/dota2-senate",
      topics: ["String", "Greedy", "Queue"]
    },
    {
      id: "valve_string_to_integer_atoi_",
      difficulty: "Medium",
      title: "String to Integer (atoi)",
      frequency: 86.1,
      link: "https://leetcode.com/problems/string-to-integer-atoi",
      topics: ["String"]
    },
    {
      id: "valve_deep_merge_of_two_objects",
      difficulty: "Medium",
      title: "Deep Merge of Two Objects",
      frequency: 67.8,
      link: "https://leetcode.com/problems/deep-merge-of-two-objects",
      topics: []
    },
    {
      id: "valve_design_parking_system",
      difficulty: "Easy",
      title: "Design Parking System",
      frequency: 67.8,
      link: "https://leetcode.com/problems/design-parking-system",
      topics: ["Design", "Simulation", "Counting"]
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
      id: "valve_string_to_integer_atoi_",
      difficulty: "Medium",
      title: "String to Integer (atoi)",
      frequency: 100,
      link: "https://leetcode.com/problems/string-to-integer-atoi",
      topics: ["String"]
    },
    {
      id: "valve_dota2_senate",
      difficulty: "Medium",
      title: "Dota2 Senate",
      frequency: 79.9,
      link: "https://leetcode.com/problems/dota2-senate",
      topics: ["String", "Greedy", "Queue"]
    },
    {
      id: "valve_deep_merge_of_two_objects",
      difficulty: "Medium",
      title: "Deep Merge of Two Objects",
      frequency: 79.9,
      link: "https://leetcode.com/problems/deep-merge-of-two-objects",
      topics: []
    },
    {
      id: "valve_design_parking_system",
      difficulty: "Easy",
      title: "Design Parking System",
      frequency: 79.9,
      link: "https://leetcode.com/problems/design-parking-system",
      topics: ["Design", "Simulation", "Counting"]
    }
  ]
  }
};

export default companyData;
