import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "celigo",
  name: "Celigo",
  description: "Solve curated LeetCode questions asked in Celigo interviews.",
  topics: ["Array", "Hash Table", "String"],
  roadmaps: {
    all: [
    {
      id: "celigo_reformat_date",
      difficulty: "Easy",
      title: "Reformat Date",
      frequency: 100,
      link: "https://leetcode.com/problems/reformat-date",
      topics: ["String"]
    },
    {
      id: "celigo_first_missing_positive",
      difficulty: "Hard",
      title: "First Missing Positive",
      frequency: 100,
      link: "https://leetcode.com/problems/first-missing-positive",
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
      id: "celigo_reformat_date",
      difficulty: "Easy",
      title: "Reformat Date",
      frequency: 100,
      link: "https://leetcode.com/problems/reformat-date",
      topics: ["String"]
    },
    {
      id: "celigo_first_missing_positive",
      difficulty: "Hard",
      title: "First Missing Positive",
      frequency: 100,
      link: "https://leetcode.com/problems/first-missing-positive",
      topics: ["Array", "Hash Table"]
    }
  ]
  }
};

export default companyData;
