import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "sentry",
  name: "Sentry",
  description: "Solve curated LeetCode questions asked in Sentry interviews.",
  topics: ["Array", "Binary Search", "Data Stream", "Design", "Queue", "Simulation", "String"],
  roadmaps: {
    all: [
    {
      id: "sentry_text_justification",
      difficulty: "Hard",
      title: "Text Justification",
      frequency: 100,
      link: "https://leetcode.com/problems/text-justification",
      topics: ["Array", "String", "Simulation"]
    },
    {
      id: "sentry_design_hit_counter",
      difficulty: "Medium",
      title: "Design Hit Counter",
      frequency: 68.1,
      link: "https://leetcode.com/problems/design-hit-counter",
      topics: ["Array", "Binary Search", "Design", "Queue", "Data Stream"]
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
      id: "sentry_text_justification",
      difficulty: "Hard",
      title: "Text Justification",
      frequency: 100,
      link: "https://leetcode.com/problems/text-justification",
      topics: ["Array", "String", "Simulation"]
    },
    {
      id: "sentry_design_hit_counter",
      difficulty: "Medium",
      title: "Design Hit Counter",
      frequency: 69.5,
      link: "https://leetcode.com/problems/design-hit-counter",
      topics: ["Array", "Binary Search", "Design", "Queue", "Data Stream"]
    }
  ]
  }
};

export default companyData;
