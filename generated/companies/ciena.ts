import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "ciena",
  name: "ciena",
  description: "Solve curated LeetCode questions asked in ciena interviews.",
  topics: ["Array", "Database", "Hash Table", "Sliding Window"],
  roadmaps: {
    all: [
    {
      id: "ciena_active_users",
      difficulty: "Medium",
      title: "Active Users",
      frequency: 100,
      link: "https://leetcode.com/problems/active-users",
      topics: ["Database"]
    },
    {
      id: "ciena_number_of_unique_flavors_after_sharing_k_candies",
      difficulty: "Medium",
      title: "Number of Unique Flavors After Sharing K Candies",
      frequency: 100,
      link: "https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies",
      topics: ["Array", "Hash Table", "Sliding Window"]
    },
    {
      id: "ciena_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 100,
      link: "https://leetcode.com/problems/two-sum",
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
      id: "ciena_active_users",
      difficulty: "Medium",
      title: "Active Users",
      frequency: 100,
      link: "https://leetcode.com/problems/active-users",
      topics: ["Database"]
    },
    {
      id: "ciena_number_of_unique_flavors_after_sharing_k_candies",
      difficulty: "Medium",
      title: "Number of Unique Flavors After Sharing K Candies",
      frequency: 100,
      link: "https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies",
      topics: ["Array", "Hash Table", "Sliding Window"]
    }
  ]
  }
};

export default companyData;
