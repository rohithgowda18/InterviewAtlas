import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "machine-zone",
  name: "Machine Zone",
  description: "Solve curated LeetCode questions asked in Machine Zone interviews.",
  topics: ["Database", "Design", "Ordered Set", "Segment Tree"],
  roadmaps: {
    all: [
    {
      id: "machine-zone_range_module",
      difficulty: "Hard",
      title: "Range Module",
      frequency: 100,
      link: "https://leetcode.com/problems/range-module",
      topics: ["Design", "Segment Tree", "Ordered Set"]
    },
    {
      id: "machine-zone_number_of_transactions_per_visit",
      difficulty: "Hard",
      title: "Number of Transactions per Visit",
      frequency: 100,
      link: "https://leetcode.com/problems/number-of-transactions-per-visit",
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

  ]
  }
};

export default companyData;
