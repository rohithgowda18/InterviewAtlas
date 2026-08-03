import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "activision",
  name: "Activision",
  description: "Solve curated LeetCode questions asked in Activision interviews.",
  topics: ["Array", "Hash Table", "Recursion", "Stack", "String"],
  roadmaps: {
    all: [
    {
      id: "activision_reformat_phone_number",
      difficulty: "Easy",
      title: "Reformat Phone Number",
      frequency: 100,
      link: "https://leetcode.com/problems/reformat-phone-number",
      topics: ["String"]
    },
    {
      id: "activision_decode_string",
      difficulty: "Medium",
      title: "Decode String",
      frequency: 81,
      link: "https://leetcode.com/problems/decode-string",
      topics: ["String", "Stack", "Recursion"]
    },
    {
      id: "activision_number_of_divisible_triplet_sums",
      difficulty: "Medium",
      title: "Number of Divisible Triplet Sums",
      frequency: 66.7,
      link: "https://leetcode.com/problems/number-of-divisible-triplet-sums",
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
      id: "activision_decode_string",
      difficulty: "Medium",
      title: "Decode String",
      frequency: 100,
      link: "https://leetcode.com/problems/decode-string",
      topics: ["String", "Stack", "Recursion"]
    },
    {
      id: "activision_reformat_phone_number",
      difficulty: "Easy",
      title: "Reformat Phone Number",
      frequency: 89.4,
      link: "https://leetcode.com/problems/reformat-phone-number",
      topics: ["String"]
    },
    {
      id: "activision_number_of_divisible_triplet_sums",
      difficulty: "Medium",
      title: "Number of Divisible Triplet Sums",
      frequency: 89.4,
      link: "https://leetcode.com/problems/number-of-divisible-triplet-sums",
      topics: ["Array", "Hash Table"]
    }
  ]
  }
};

export default companyData;
