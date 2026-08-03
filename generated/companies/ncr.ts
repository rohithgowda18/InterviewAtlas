import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "ncr",
  name: "NCR",
  description: "Solve curated LeetCode questions asked in NCR interviews.",
  topics: ["Array", "Breadth-First Search", "Depth-First Search", "Design", "Doubly-Linked List", "Dynamic Programming", "Graph Theory", "Hash Table", "Linked List", "Queue", "Simulation", "Union-Find"],
  roadmaps: {
    all: [
    {
      id: "ncr_number_of_people_aware_of_a_secret",
      difficulty: "Medium",
      title: "Number of People Aware of a Secret",
      frequency: 100,
      link: "https://leetcode.com/problems/number-of-people-aware-of-a-secret",
      topics: ["Dynamic Programming", "Queue", "Simulation"]
    },
    {
      id: "ncr_minimize_malware_spread",
      difficulty: "Hard",
      title: "Minimize Malware Spread",
      frequency: 89.8,
      link: "https://leetcode.com/problems/minimize-malware-spread",
      topics: ["Array", "Hash Table", "Depth-First Search", "Breadth-First Search", "Union-Find", "Graph Theory"]
    },
    {
      id: "ncr_design_authentication_manager",
      difficulty: "Medium",
      title: "Design Authentication Manager",
      frequency: 89.8,
      link: "https://leetcode.com/problems/design-authentication-manager",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
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
      id: "ncr_number_of_people_aware_of_a_secret",
      difficulty: "Medium",
      title: "Number of People Aware of a Secret",
      frequency: 100,
      link: "https://leetcode.com/problems/number-of-people-aware-of-a-secret",
      topics: ["Dynamic Programming", "Queue", "Simulation"]
    },
    {
      id: "ncr_minimize_malware_spread",
      difficulty: "Hard",
      title: "Minimize Malware Spread",
      frequency: 89.9,
      link: "https://leetcode.com/problems/minimize-malware-spread",
      topics: ["Array", "Hash Table", "Depth-First Search", "Breadth-First Search", "Union-Find", "Graph Theory"]
    },
    {
      id: "ncr_design_authentication_manager",
      difficulty: "Medium",
      title: "Design Authentication Manager",
      frequency: 89.9,
      link: "https://leetcode.com/problems/design-authentication-manager",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    }
  ]
  }
};

export default companyData;
