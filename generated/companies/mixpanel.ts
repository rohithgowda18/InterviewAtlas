import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "mixpanel",
  name: "Mixpanel",
  description: "Solve curated LeetCode questions asked in Mixpanel interviews.",
  topics: ["Array", "Depth-First Search", "Design", "Iterator", "Queue", "Stack", "Sweep Line", "Tree", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "mixpanel_flatten_nested_list_iterator",
      difficulty: "Medium",
      title: "Flatten Nested List Iterator",
      frequency: 100,
      link: "https://leetcode.com/problems/flatten-nested-list-iterator",
      topics: ["Stack", "Tree", "Depth-First Search", "Design", "Queue", "Iterator"]
    },
    {
      id: "mixpanel_interval_list_intersections",
      difficulty: "Medium",
      title: "Interval List Intersections",
      frequency: 95.1,
      link: "https://leetcode.com/problems/interval-list-intersections",
      topics: ["Array", "Two Pointers", "Sweep Line"]
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
      id: "mixpanel_flatten_nested_list_iterator",
      difficulty: "Medium",
      title: "Flatten Nested List Iterator",
      frequency: 100,
      link: "https://leetcode.com/problems/flatten-nested-list-iterator",
      topics: ["Stack", "Tree", "Depth-First Search", "Design", "Queue", "Iterator"]
    },
    {
      id: "mixpanel_interval_list_intersections",
      difficulty: "Medium",
      title: "Interval List Intersections",
      frequency: 95.1,
      link: "https://leetcode.com/problems/interval-list-intersections",
      topics: ["Array", "Two Pointers", "Sweep Line"]
    }
  ]
  }
};

export default companyData;
