import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "appfolio",
  name: "AppFolio",
  description: "Solve curated LeetCode questions asked in AppFolio interviews.",
  topics: ["Array", "Breadth-First Search", "Data Stream", "Design", "Doubly-Linked List", "Hash Table", "Linked List", "Matrix"],
  roadmaps: {
    all: [
    {
      id: "appfolio_shortest_path_in_a_grid_with_obstacles_elimination",
      difficulty: "Hard",
      title: "Shortest Path in a Grid with Obstacles Elimination",
      frequency: 100,
      link: "https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination",
      topics: ["Array", "Breadth-First Search", "Matrix"]
    },
    {
      id: "appfolio_logger_rate_limiter",
      difficulty: "Easy",
      title: "Logger Rate Limiter",
      frequency: 100,
      link: "https://leetcode.com/problems/logger-rate-limiter",
      topics: ["Hash Table", "Design", "Data Stream"]
    },
    {
      id: "appfolio_lru_cache",
      difficulty: "Medium",
      title: "LRU Cache",
      frequency: 100,
      link: "https://leetcode.com/problems/lru-cache",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
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
      id: "appfolio_shortest_path_in_a_grid_with_obstacles_elimination",
      difficulty: "Hard",
      title: "Shortest Path in a Grid with Obstacles Elimination",
      frequency: 100,
      link: "https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination",
      topics: ["Array", "Breadth-First Search", "Matrix"]
    },
    {
      id: "appfolio_logger_rate_limiter",
      difficulty: "Easy",
      title: "Logger Rate Limiter",
      frequency: 100,
      link: "https://leetcode.com/problems/logger-rate-limiter",
      topics: ["Hash Table", "Design", "Data Stream"]
    },
    {
      id: "appfolio_lru_cache",
      difficulty: "Medium",
      title: "LRU Cache",
      frequency: 100,
      link: "https://leetcode.com/problems/lru-cache",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    }
  ]
  }
};

export default companyData;
