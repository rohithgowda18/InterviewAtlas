import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "nordstrom",
  name: "Nordstrom",
  description: "Solve curated LeetCode questions asked in Nordstrom interviews.",
  topics: ["Array", "Breadth-First Search", "Depth-First Search", "Design", "Doubly-Linked List", "Graph Theory", "Hash Table", "Linked List", "Matrix", "Ordered Set", "Simulation", "Sorting", "String", "Topological Sort"],
  roadmaps: {
    all: [
    {
      id: "nordstrom_course_schedule",
      difficulty: "Medium",
      title: "Course Schedule",
      frequency: 100,
      link: "https://leetcode.com/problems/course-schedule",
      topics: ["Depth-First Search", "Breadth-First Search", "Graph Theory", "Topological Sort"]
    },
    {
      id: "nordstrom_lru_cache",
      difficulty: "Medium",
      title: "LRU Cache",
      frequency: 82.5,
      link: "https://leetcode.com/problems/lru-cache",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    },
    {
      id: "nordstrom_spiral_matrix",
      difficulty: "Medium",
      title: "Spiral Matrix",
      frequency: 82.5,
      link: "https://leetcode.com/problems/spiral-matrix",
      topics: ["Array", "Matrix", "Simulation"]
    },
    {
      id: "nordstrom_display_table_of_food_orders_in_a_restaurant",
      difficulty: "Medium",
      title: "Display Table of Food Orders in a Restaurant",
      frequency: 82.5,
      link: "https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant",
      topics: ["Array", "Hash Table", "String", "Sorting", "Ordered Set"]
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
      id: "nordstrom_course_schedule",
      difficulty: "Medium",
      title: "Course Schedule",
      frequency: 100,
      link: "https://leetcode.com/problems/course-schedule",
      topics: ["Depth-First Search", "Breadth-First Search", "Graph Theory", "Topological Sort"]
    },
    {
      id: "nordstrom_spiral_matrix",
      difficulty: "Medium",
      title: "Spiral Matrix",
      frequency: 82.5,
      link: "https://leetcode.com/problems/spiral-matrix",
      topics: ["Array", "Matrix", "Simulation"]
    },
    {
      id: "nordstrom_lru_cache",
      difficulty: "Medium",
      title: "LRU Cache",
      frequency: 82.5,
      link: "https://leetcode.com/problems/lru-cache",
      topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"]
    },
    {
      id: "nordstrom_display_table_of_food_orders_in_a_restaurant",
      difficulty: "Medium",
      title: "Display Table of Food Orders in a Restaurant",
      frequency: 82.5,
      link: "https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant",
      topics: ["Array", "Hash Table", "String", "Sorting", "Ordered Set"]
    }
  ]
  }
};

export default companyData;
