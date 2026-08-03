import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "patreon",
  name: "Patreon",
  description: "Solve curated LeetCode questions asked in Patreon interviews.",
  topics: ["Array", "Data Stream", "Design", "Hash Table", "Sorting", "Stack", "String"],
  roadmaps: {
    all: [
    {
      id: "patreon_simplify_path",
      difficulty: "Medium",
      title: "Simplify Path",
      frequency: 100,
      link: "https://leetcode.com/problems/simplify-path",
      topics: ["String", "Stack"]
    },
    {
      id: "patreon_shortest_word_distance",
      difficulty: "Easy",
      title: "Shortest Word Distance",
      frequency: 80,
      link: "https://leetcode.com/problems/shortest-word-distance",
      topics: ["Array", "String"]
    },
    {
      id: "patreon_merge_intervals",
      difficulty: "Medium",
      title: "Merge Intervals",
      frequency: 74.3,
      link: "https://leetcode.com/problems/merge-intervals",
      topics: ["Array", "Sorting"]
    },
    {
      id: "patreon_logger_rate_limiter",
      difficulty: "Easy",
      title: "Logger Rate Limiter",
      frequency: 66.2,
      link: "https://leetcode.com/problems/logger-rate-limiter",
      topics: ["Hash Table", "Design", "Data Stream"]
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
      id: "patreon_simplify_path",
      difficulty: "Medium",
      title: "Simplify Path",
      frequency: 100,
      link: "https://leetcode.com/problems/simplify-path",
      topics: ["String", "Stack"]
    },
    {
      id: "patreon_merge_intervals",
      difficulty: "Medium",
      title: "Merge Intervals",
      frequency: 76.2,
      link: "https://leetcode.com/problems/merge-intervals",
      topics: ["Array", "Sorting"]
    },
    {
      id: "patreon_shortest_word_distance",
      difficulty: "Easy",
      title: "Shortest Word Distance",
      frequency: 76.2,
      link: "https://leetcode.com/problems/shortest-word-distance",
      topics: ["Array", "String"]
    },
    {
      id: "patreon_logger_rate_limiter",
      difficulty: "Easy",
      title: "Logger Rate Limiter",
      frequency: 68.2,
      link: "https://leetcode.com/problems/logger-rate-limiter",
      topics: ["Hash Table", "Design", "Data Stream"]
    }
  ]
  }
};

export default companyData;
