import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "zendesk",
  name: "Zendesk",
  description: "Solve curated LeetCode questions asked in Zendesk interviews.",
  topics: ["Greedy", "Math"],
  roadmaps: {
    all: [
    {
      id: "zendesk_categorize_box_according_to_criteria",
      difficulty: "Easy",
      title: "Categorize Box According to Criteria",
      frequency: 100,
      link: "https://leetcode.com/problems/categorize-box-according-to-criteria",
      topics: ["Math"]
    },
    {
      id: "zendesk_distribute_money_to_maximum_children",
      difficulty: "Easy",
      title: "Distribute Money to Maximum Children",
      frequency: 100,
      link: "https://leetcode.com/problems/distribute-money-to-maximum-children",
      topics: ["Math", "Greedy"]
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
      id: "zendesk_categorize_box_according_to_criteria",
      difficulty: "Easy",
      title: "Categorize Box According to Criteria",
      frequency: 100,
      link: "https://leetcode.com/problems/categorize-box-according-to-criteria",
      topics: ["Math"]
    },
    {
      id: "zendesk_distribute_money_to_maximum_children",
      difficulty: "Easy",
      title: "Distribute Money to Maximum Children",
      frequency: 100,
      link: "https://leetcode.com/problems/distribute-money-to-maximum-children",
      topics: ["Math", "Greedy"]
    }
  ]
  }
};

export default companyData;
