import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "zoom",
  name: "Zoom",
  description: "Solve curated LeetCode questions asked in Zoom interviews.",
  topics: ["Array", "Backtracking", "Database", "Design", "Doubly-Linked List", "Hash Table", "Linked List", "Matrix", "String", "Trie"],
  roadmaps: {
    all: [
    {
      id: "zoom_user_activity_for_the_past_30_days_i",
      difficulty: "Easy",
      title: "User Activity for the Past 30 Days I",
      frequency: 100,
      link: "https://leetcode.com/problems/user-activity-for-the-past-30-days-i",
      topics: ["Database"]
    },
    {
      id: "zoom_user_activity_for_the_past_30_days_ii",
      difficulty: "Easy",
      title: "User Activity for the Past 30 Days II",
      frequency: 100,
      link: "https://leetcode.com/problems/user-activity-for-the-past-30-days-ii",
      topics: ["Database"]
    },
    {
      id: "zoom_word_search_ii",
      difficulty: "Hard",
      title: "Word Search II",
      frequency: 74.6,
      link: "https://leetcode.com/problems/word-search-ii",
      topics: ["Array", "String", "Backtracking", "Trie", "Matrix"]
    },
    {
      id: "zoom_lru_cache",
      difficulty: "Medium",
      title: "LRU Cache",
      frequency: 66.1,
      link: "https://leetcode.com/problems/lru-cache",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [

  ],
    sixMonths: [
    {
      id: "zoom_word_search_ii",
      difficulty: "Hard",
      title: "Word Search II",
      frequency: 100,
      link: "https://leetcode.com/problems/word-search-ii",
      topics: ["Array", "String", "Backtracking", "Trie", "Matrix"]
    }
  ],
    moreThanSixMonths: [
    {
      id: "zoom_user_activity_for_the_past_30_days_i",
      difficulty: "Easy",
      title: "User Activity for the Past 30 Days I",
      frequency: 100,
      link: "https://leetcode.com/problems/user-activity-for-the-past-30-days-i",
      topics: ["Database"]
    },
    {
      id: "zoom_user_activity_for_the_past_30_days_ii",
      difficulty: "Easy",
      title: "User Activity for the Past 30 Days II",
      frequency: 100,
      link: "https://leetcode.com/problems/user-activity-for-the-past-30-days-ii",
      topics: ["Database"]
    }
  ]
  }
};

export default companyData;
