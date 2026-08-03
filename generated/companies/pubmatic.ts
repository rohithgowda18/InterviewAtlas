import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "pubmatic",
  name: "PubMatic",
  description: "Solve curated LeetCode questions asked in PubMatic interviews.",
  topics: ["Array", "Dynamic Programming", "Greedy", "Heap (Priority Queue)", "Monotonic Stack", "Prefix Sum", "Sorting", "Stack", "String", "Trie", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "pubmatic_longest_common_prefix",
      difficulty: "Easy",
      title: "Longest Common Prefix",
      frequency: 100,
      link: "https://leetcode.com/problems/longest-common-prefix",
      topics: ["String", "Trie"]
    },
    {
      id: "pubmatic_trapping_rain_water",
      difficulty: "Hard",
      title: "Trapping Rain Water",
      frequency: 89.5,
      link: "https://leetcode.com/problems/trapping-rain-water",
      topics: ["Array", "Two Pointers", "Dynamic Programming", "Stack", "Monotonic Stack"]
    },
    {
      id: "pubmatic_meeting_rooms_ii",
      difficulty: "Medium",
      title: "Meeting Rooms II",
      frequency: 89.5,
      link: "https://leetcode.com/problems/meeting-rooms-ii",
      topics: ["Array", "Two Pointers", "Greedy", "Sorting", "Heap (Priority Queue)", "Prefix Sum"]
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
      id: "pubmatic_longest_common_prefix",
      difficulty: "Easy",
      title: "Longest Common Prefix",
      frequency: 100,
      link: "https://leetcode.com/problems/longest-common-prefix",
      topics: ["String", "Trie"]
    },
    {
      id: "pubmatic_trapping_rain_water",
      difficulty: "Hard",
      title: "Trapping Rain Water",
      frequency: 89.6,
      link: "https://leetcode.com/problems/trapping-rain-water",
      topics: ["Array", "Two Pointers", "Dynamic Programming", "Stack", "Monotonic Stack"]
    },
    {
      id: "pubmatic_meeting_rooms_ii",
      difficulty: "Medium",
      title: "Meeting Rooms II",
      frequency: 89.6,
      link: "https://leetcode.com/problems/meeting-rooms-ii",
      topics: ["Array", "Two Pointers", "Greedy", "Sorting", "Heap (Priority Queue)", "Prefix Sum"]
    }
  ]
  }
};

export default companyData;
