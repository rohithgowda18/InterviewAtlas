import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "airwallex",
  name: "Airwallex",
  description: "Solve curated LeetCode questions asked in Airwallex interviews.",
  topics: ["Array", "Monotonic Stack", "Stack"],
  roadmaps: {
    all: [
    {
      id: "airwallex_daily_temperatures",
      difficulty: "Medium",
      title: "Daily Temperatures",
      frequency: 100,
      link: "https://leetcode.com/problems/daily-temperatures",
      topics: ["Array", "Stack", "Monotonic Stack"]
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
      id: "airwallex_daily_temperatures",
      difficulty: "Medium",
      title: "Daily Temperatures",
      frequency: 100,
      link: "https://leetcode.com/problems/daily-temperatures",
      topics: ["Array", "Stack", "Monotonic Stack"]
    }
  ]
  }
};

export default companyData;
