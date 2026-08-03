import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "amadeus",
  name: "Amadeus",
  description: "Solve curated LeetCode questions asked in Amadeus interviews.",
  topics: ["Array", "Hash Table", "Simulation", "Sorting", "String"],
  roadmaps: {
    all: [
    {
      id: "amadeus_watering_plants",
      difficulty: "Medium",
      title: "Watering Plants",
      frequency: 100,
      link: "https://leetcode.com/problems/watering-plants",
      topics: ["Array", "Simulation"]
    },
    {
      id: "amadeus_valid_anagram",
      difficulty: "Easy",
      title: "Valid Anagram",
      frequency: 82.2,
      link: "https://leetcode.com/problems/valid-anagram",
      topics: ["Hash Table", "String", "Sorting"]
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
      id: "amadeus_watering_plants",
      difficulty: "Medium",
      title: "Watering Plants",
      frequency: 100,
      link: "https://leetcode.com/problems/watering-plants",
      topics: ["Array", "Simulation"]
    },
    {
      id: "amadeus_valid_anagram",
      difficulty: "Easy",
      title: "Valid Anagram",
      frequency: 82.3,
      link: "https://leetcode.com/problems/valid-anagram",
      topics: ["Hash Table", "String", "Sorting"]
    }
  ]
  }
};

export default companyData;
