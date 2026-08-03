import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "acko",
  name: "Acko",
  description: "Solve curated LeetCode questions asked in Acko interviews.",
  topics: ["Array", "Combinatorics", "Database", "Dynamic Programming", "Graph Theory", "Math", "Topological Sort"],
  roadmaps: {
    all: [
    {
      id: "acko_fill_missing_data",
      difficulty: "Easy",
      title: "Fill Missing Data",
      frequency: 100,
      link: "https://leetcode.com/problems/fill-missing-data",
      topics: []
    },
    {
      id: "acko_count_all_valid_pickup_and_delivery_options",
      difficulty: "Hard",
      title: "Count All Valid Pickup and Delivery Options",
      frequency: 100,
      link: "https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options",
      topics: ["Math", "Dynamic Programming", "Combinatorics"]
    },
    {
      id: "acko_parallel_courses_iii",
      difficulty: "Hard",
      title: "Parallel Courses III",
      frequency: 89.2,
      link: "https://leetcode.com/problems/parallel-courses-iii",
      topics: ["Array", "Dynamic Programming", "Graph Theory", "Topological Sort"]
    },
    {
      id: "acko_invalid_tweets",
      difficulty: "Easy",
      title: "Invalid Tweets",
      frequency: 89.2,
      link: "https://leetcode.com/problems/invalid-tweets",
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
    {
      id: "acko_fill_missing_data",
      difficulty: "Easy",
      title: "Fill Missing Data",
      frequency: 100,
      link: "https://leetcode.com/problems/fill-missing-data",
      topics: []
    },
    {
      id: "acko_count_all_valid_pickup_and_delivery_options",
      difficulty: "Hard",
      title: "Count All Valid Pickup and Delivery Options",
      frequency: 100,
      link: "https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options",
      topics: ["Math", "Dynamic Programming", "Combinatorics"]
    },
    {
      id: "acko_parallel_courses_iii",
      difficulty: "Hard",
      title: "Parallel Courses III",
      frequency: 89.2,
      link: "https://leetcode.com/problems/parallel-courses-iii",
      topics: ["Array", "Dynamic Programming", "Graph Theory", "Topological Sort"]
    },
    {
      id: "acko_invalid_tweets",
      difficulty: "Easy",
      title: "Invalid Tweets",
      frequency: 89.2,
      link: "https://leetcode.com/problems/invalid-tweets",
      topics: ["Database"]
    }
  ]
  }
};

export default companyData;
