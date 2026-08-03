import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "hertz",
  name: "Hertz",
  description: "Solve curated LeetCode questions asked in Hertz interviews.",
  topics: ["Array", "Ordered Set", "Prefix Sum", "Recursion", "Sorting", "Stack", "String"],
  roadmaps: {
    all: [
    {
      id: "hertz_decode_string",
      difficulty: "Medium",
      title: "Decode String",
      frequency: 100,
      link: "https://leetcode.com/problems/decode-string",
      topics: ["String", "Stack", "Recursion"]
    },
    {
      id: "hertz_brightest_position_on_street",
      difficulty: "Medium",
      title: "Brightest Position on Street",
      frequency: 90.3,
      link: "https://leetcode.com/problems/brightest-position-on-street",
      topics: ["Array", "Sorting", "Prefix Sum", "Ordered Set"]
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
      id: "hertz_decode_string",
      difficulty: "Medium",
      title: "Decode String",
      frequency: 100,
      link: "https://leetcode.com/problems/decode-string",
      topics: ["String", "Stack", "Recursion"]
    },
    {
      id: "hertz_brightest_position_on_street",
      difficulty: "Medium",
      title: "Brightest Position on Street",
      frequency: 100,
      link: "https://leetcode.com/problems/brightest-position-on-street",
      topics: ["Array", "Sorting", "Prefix Sum", "Ordered Set"]
    }
  ]
  }
};

export default companyData;
