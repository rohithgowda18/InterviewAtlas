import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "zalando",
  name: "Zalando",
  description: "Solve curated LeetCode questions asked in Zalando interviews.",
  topics: ["Array", "Greedy", "Sorting", "String"],
  roadmaps: {
    all: [
    {
      id: "zalando_string_without_aaa_or_bbb",
      difficulty: "Medium",
      title: "String Without AAA or BBB",
      frequency: 100,
      link: "https://leetcode.com/problems/string-without-aaa-or-bbb",
      topics: ["String", "Greedy"]
    },
    {
      id: "zalando_lemonade_change",
      difficulty: "Easy",
      title: "Lemonade Change",
      frequency: 65.9,
      link: "https://leetcode.com/problems/lemonade-change",
      topics: ["Array", "Greedy"]
    },
    {
      id: "zalando_merge_intervals",
      difficulty: "Medium",
      title: "Merge Intervals",
      frequency: 65.9,
      link: "https://leetcode.com/problems/merge-intervals",
      topics: ["Array", "Sorting"]
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
      id: "zalando_string_without_aaa_or_bbb",
      difficulty: "Medium",
      title: "String Without AAA or BBB",
      frequency: 100,
      link: "https://leetcode.com/problems/string-without-aaa-or-bbb",
      topics: ["String", "Greedy"]
    },
    {
      id: "zalando_lemonade_change",
      difficulty: "Easy",
      title: "Lemonade Change",
      frequency: 89.6,
      link: "https://leetcode.com/problems/lemonade-change",
      topics: ["Array", "Greedy"]
    },
    {
      id: "zalando_merge_intervals",
      difficulty: "Medium",
      title: "Merge Intervals",
      frequency: 89.6,
      link: "https://leetcode.com/problems/merge-intervals",
      topics: ["Array", "Sorting"]
    }
  ]
  }
};

export default companyData;
