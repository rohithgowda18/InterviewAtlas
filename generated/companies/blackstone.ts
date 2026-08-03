import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "blackstone",
  name: "BlackStone",
  description: "Solve curated LeetCode questions asked in BlackStone interviews.",
  topics: ["Math", "Stack", "String"],
  roadmaps: {
    all: [
    {
      id: "blackstone_reaching_points",
      difficulty: "Hard",
      title: "Reaching Points",
      frequency: 100,
      link: "https://leetcode.com/problems/reaching-points",
      topics: ["Math"]
    },
    {
      id: "blackstone_make_the_string_great",
      difficulty: "Easy",
      title: "Make The String Great",
      frequency: 89.7,
      link: "https://leetcode.com/problems/make-the-string-great",
      topics: ["String", "Stack"]
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
      id: "blackstone_reaching_points",
      difficulty: "Hard",
      title: "Reaching Points",
      frequency: 100,
      link: "https://leetcode.com/problems/reaching-points",
      topics: ["Math"]
    },
    {
      id: "blackstone_make_the_string_great",
      difficulty: "Easy",
      title: "Make The String Great",
      frequency: 89.7,
      link: "https://leetcode.com/problems/make-the-string-great",
      topics: ["String", "Stack"]
    }
  ]
  }
};

export default companyData;
