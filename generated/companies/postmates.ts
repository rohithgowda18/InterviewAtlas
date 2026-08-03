import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "postmates",
  name: "Postmates",
  description: "Solve curated LeetCode questions asked in Postmates interviews.",
  topics: ["Array", "Binary Search", "Counting", "Hash Table", "Math", "Sliding Window", "Sorting", "String"],
  roadmaps: {
    all: [
    {
      id: "postmates_determine_if_two_strings_are_close",
      difficulty: "Medium",
      title: "Determine if Two Strings Are Close",
      frequency: 100,
      link: "https://leetcode.com/problems/determine-if-two-strings-are-close",
      topics: ["Hash Table", "String", "Sorting", "Counting"]
    },
    {
      id: "postmates_most_beautiful_item_for_each_query",
      difficulty: "Medium",
      title: "Most Beautiful Item for Each Query",
      frequency: 98.1,
      link: "https://leetcode.com/problems/most-beautiful-item-for-each-query",
      topics: ["Array", "Binary Search", "Sorting"]
    },
    {
      id: "postmates_find_the_k_beauty_of_a_number",
      difficulty: "Easy",
      title: "Find the K-Beauty of a Number",
      frequency: 98.1,
      link: "https://leetcode.com/problems/find-the-k-beauty-of-a-number",
      topics: ["Math", "String", "Sliding Window"]
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
      id: "postmates_determine_if_two_strings_are_close",
      difficulty: "Medium",
      title: "Determine if Two Strings Are Close",
      frequency: 100,
      link: "https://leetcode.com/problems/determine-if-two-strings-are-close",
      topics: ["Hash Table", "String", "Sorting", "Counting"]
    },
    {
      id: "postmates_most_beautiful_item_for_each_query",
      difficulty: "Medium",
      title: "Most Beautiful Item for Each Query",
      frequency: 90.5,
      link: "https://leetcode.com/problems/most-beautiful-item-for-each-query",
      topics: ["Array", "Binary Search", "Sorting"]
    },
    {
      id: "postmates_find_the_k_beauty_of_a_number",
      difficulty: "Easy",
      title: "Find the K-Beauty of a Number",
      frequency: 90.5,
      link: "https://leetcode.com/problems/find-the-k-beauty-of-a-number",
      topics: ["Math", "String", "Sliding Window"]
    }
  ]
  }
};

export default companyData;
