import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "bolt",
  name: "Bolt",
  description: "Solve curated LeetCode questions asked in Bolt interviews.",
  topics: ["Array", "Breadth-First Search", "Counting", "Dynamic Programming", "Graph Theory", "Hash Table", "Prefix Sum", "Simulation", "Sorting", "Stack", "String"],
  roadmaps: {
    all: [
    {
      id: "bolt_check_if_all_characters_have_equal_number_of_occurrences",
      difficulty: "Easy",
      title: "Check if All Characters Have Equal Number of Occurrences",
      frequency: 100,
      link: "https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences",
      topics: ["Hash Table", "String", "Counting"]
    },
    {
      id: "bolt_best_time_to_buy_and_sell_stock",
      difficulty: "Easy",
      title: "Best Time to Buy and Sell Stock",
      frequency: 85.9,
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock",
      topics: ["Array", "Dynamic Programming"]
    },
    {
      id: "bolt_subarray_sum_equals_k",
      difficulty: "Medium",
      title: "Subarray Sum Equals K",
      frequency: 67.3,
      link: "https://leetcode.com/problems/subarray-sum-equals-k",
      topics: ["Array", "Hash Table", "Prefix Sum"]
    },
    {
      id: "bolt_minimum_string_length_after_removing_substrings",
      difficulty: "Easy",
      title: "Minimum String Length After Removing Substrings",
      frequency: 67.3,
      link: "https://leetcode.com/problems/minimum-string-length-after-removing-substrings",
      topics: ["String", "Stack", "Simulation"]
    },
    {
      id: "bolt_get_watched_videos_by_your_friends",
      difficulty: "Medium",
      title: "Get Watched Videos by Your Friends",
      frequency: 67.3,
      link: "https://leetcode.com/problems/get-watched-videos-by-your-friends",
      topics: ["Array", "Hash Table", "Breadth-First Search", "Graph Theory", "Sorting"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [

  ],
    sixMonths: [
    {
      id: "bolt_get_watched_videos_by_your_friends",
      difficulty: "Medium",
      title: "Get Watched Videos by Your Friends",
      frequency: 100,
      link: "https://leetcode.com/problems/get-watched-videos-by-your-friends",
      topics: ["Array", "Hash Table", "Breadth-First Search", "Graph Theory", "Sorting"]
    }
  ],
    moreThanSixMonths: [
    {
      id: "bolt_best_time_to_buy_and_sell_stock",
      difficulty: "Easy",
      title: "Best Time to Buy and Sell Stock",
      frequency: 100,
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock",
      topics: ["Array", "Dynamic Programming"]
    },
    {
      id: "bolt_check_if_all_characters_have_equal_number_of_occurrences",
      difficulty: "Easy",
      title: "Check if All Characters Have Equal Number of Occurrences",
      frequency: 79.7,
      link: "https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences",
      topics: ["Hash Table", "String", "Counting"]
    },
    {
      id: "bolt_subarray_sum_equals_k",
      difficulty: "Medium",
      title: "Subarray Sum Equals K",
      frequency: 79.7,
      link: "https://leetcode.com/problems/subarray-sum-equals-k",
      topics: ["Array", "Hash Table", "Prefix Sum"]
    }
  ]
  }
};

export default companyData;
