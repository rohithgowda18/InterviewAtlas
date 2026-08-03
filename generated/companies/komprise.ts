import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "komprise",
  name: "Komprise",
  description: "Solve curated LeetCode questions asked in Komprise interviews.",
  topics: ["Array", "Greedy", "Queue", "Simulation"],
  roadmaps: {
    all: [
    {
      id: "komprise_time_needed_to_buy_tickets",
      difficulty: "Easy",
      title: "Time Needed to Buy Tickets",
      frequency: 100,
      link: "https://leetcode.com/problems/time-needed-to-buy-tickets",
      topics: ["Array", "Queue", "Simulation"]
    },
    {
      id: "komprise_candy",
      difficulty: "Hard",
      title: "Candy",
      frequency: 100,
      link: "https://leetcode.com/problems/candy",
      topics: ["Array", "Greedy"]
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
      id: "komprise_time_needed_to_buy_tickets",
      difficulty: "Easy",
      title: "Time Needed to Buy Tickets",
      frequency: 100,
      link: "https://leetcode.com/problems/time-needed-to-buy-tickets",
      topics: ["Array", "Queue", "Simulation"]
    },
    {
      id: "komprise_candy",
      difficulty: "Hard",
      title: "Candy",
      frequency: 100,
      link: "https://leetcode.com/problems/candy",
      topics: ["Array", "Greedy"]
    }
  ]
  }
};

export default companyData;
