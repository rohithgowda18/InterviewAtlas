import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "waymo",
  name: "Waymo",
  description: "Solve curated LeetCode questions asked in Waymo interviews.",
  topics: ["Array", "Backtracking", "Binary Search", "Breadth-First Search", "Bucket Sort", "Data Stream", "Depth-First Search", "Design", "Dynamic Programming", "Geometry", "Graph Theory", "Greedy", "Hash Table", "Heap (Priority Queue)", "Interactive", "Math", "Matrix", "Monotonic Stack", "Prefix Sum", "Radix Sort", "Randomized", "Recursion", "Simulation", "Sorting", "Stack", "String", "Topological Sort", "Two Pointers", "Union-Find"],
  roadmaps: {
    all: [
    {
      id: "waymo_max_points_on_a_line",
      difficulty: "Hard",
      title: "Max Points on a Line",
      frequency: 100,
      link: "https://leetcode.com/problems/max-points-on-a-line",
      topics: ["Array", "Hash Table", "Math", "Geometry"]
    },
    {
      id: "waymo_number_of_islands",
      difficulty: "Medium",
      title: "Number of Islands",
      frequency: 87.4,
      link: "https://leetcode.com/problems/number-of-islands",
      topics: ["Array", "Depth-First Search", "Breadth-First Search", "Union-Find", "Matrix"]
    },
    {
      id: "waymo_logger_rate_limiter",
      difficulty: "Easy",
      title: "Logger Rate Limiter",
      frequency: 79.5,
      link: "https://leetcode.com/problems/logger-rate-limiter",
      topics: ["Hash Table", "Design", "Data Stream"]
    },
    {
      id: "waymo_random_pick_with_weight",
      difficulty: "Medium",
      title: "Random Pick with Weight",
      frequency: 79.5,
      link: "https://leetcode.com/problems/random-pick-with-weight",
      topics: ["Array", "Math", "Binary Search", "Prefix Sum", "Randomized"]
    },
    {
      id: "waymo_meeting_rooms_ii",
      difficulty: "Medium",
      title: "Meeting Rooms II",
      frequency: 74.2,
      link: "https://leetcode.com/problems/meeting-rooms-ii",
      topics: ["Array", "Two Pointers", "Greedy", "Sorting", "Heap (Priority Queue)", "Prefix Sum"]
    },
    {
      id: "waymo_number_of_visible_people_in_a_queue",
      difficulty: "Hard",
      title: "Number of Visible People in a Queue",
      frequency: 74.2,
      link: "https://leetcode.com/problems/number-of-visible-people-in-a-queue",
      topics: ["Array", "Stack", "Monotonic Stack"]
    },
    {
      id: "waymo_design_tic_tac_toe",
      difficulty: "Medium",
      title: "Design Tic-Tac-Toe",
      frequency: 67.5,
      link: "https://leetcode.com/problems/design-tic-tac-toe",
      topics: ["Array", "Hash Table", "Design", "Matrix", "Simulation"]
    },
    {
      id: "waymo_shortest_distance_from_all_buildings",
      difficulty: "Hard",
      title: "Shortest Distance from All Buildings",
      frequency: 67.5,
      link: "https://leetcode.com/problems/shortest-distance-from-all-buildings",
      topics: ["Array", "Breadth-First Search", "Matrix"]
    },
    {
      id: "waymo_minimum_knight_moves",
      difficulty: "Medium",
      title: "Minimum Knight Moves",
      frequency: 67.5,
      link: "https://leetcode.com/problems/minimum-knight-moves",
      topics: ["Breadth-First Search"]
    },
    {
      id: "waymo_design_excel_sum_formula",
      difficulty: "Hard",
      title: "Design Excel Sum Formula",
      frequency: 67.5,
      link: "https://leetcode.com/problems/design-excel-sum-formula",
      topics: ["Array", "Hash Table", "String", "Graph Theory", "Design", "Topological Sort", "Matrix"]
    },
    {
      id: "waymo_minimum_area_rectangle",
      difficulty: "Medium",
      title: "Minimum Area Rectangle",
      frequency: 67.5,
      link: "https://leetcode.com/problems/minimum-area-rectangle",
      topics: ["Array", "Hash Table", "Math", "Geometry", "Sorting"]
    },
    {
      id: "waymo_minimum_number_of_refueling_stops",
      difficulty: "Hard",
      title: "Minimum Number of Refueling Stops",
      frequency: 67.5,
      link: "https://leetcode.com/problems/minimum-number-of-refueling-stops",
      topics: ["Array", "Dynamic Programming", "Greedy", "Heap (Priority Queue)"]
    },
    {
      id: "waymo_divide_array_in_sets_of_k_consecutive_numbers",
      difficulty: "Medium",
      title: "Divide Array in Sets of K Consecutive Numbers",
      frequency: 58,
      link: "https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers",
      topics: ["Array", "Hash Table", "Greedy", "Sorting"]
    },
    {
      id: "waymo_find_peak_element",
      difficulty: "Medium",
      title: "Find Peak Element",
      frequency: 58,
      link: "https://leetcode.com/problems/find-peak-element",
      topics: ["Array", "Binary Search"]
    },
    {
      id: "waymo_text_justification",
      difficulty: "Hard",
      title: "Text Justification",
      frequency: 58,
      link: "https://leetcode.com/problems/text-justification",
      topics: ["Array", "String", "Simulation"]
    },
    {
      id: "waymo_largest_rectangle_in_histogram",
      difficulty: "Hard",
      title: "Largest Rectangle in Histogram",
      frequency: 58,
      link: "https://leetcode.com/problems/largest-rectangle-in-histogram",
      topics: ["Array", "Stack", "Monotonic Stack"]
    },
    {
      id: "waymo_path_with_minimum_effort",
      difficulty: "Medium",
      title: "Path With Minimum Effort",
      frequency: 58,
      link: "https://leetcode.com/problems/path-with-minimum-effort",
      topics: ["Array", "Binary Search", "Depth-First Search", "Breadth-First Search", "Union-Find", "Heap (Priority Queue)", "Matrix"]
    },
    {
      id: "waymo_regular_expression_matching",
      difficulty: "Hard",
      title: "Regular Expression Matching",
      frequency: 58,
      link: "https://leetcode.com/problems/regular-expression-matching",
      topics: ["String", "Dynamic Programming", "Recursion"]
    },
    {
      id: "waymo_alien_dictionary",
      difficulty: "Hard",
      title: "Alien Dictionary",
      frequency: 58,
      link: "https://leetcode.com/problems/alien-dictionary",
      topics: ["Array", "String", "Depth-First Search", "Breadth-First Search", "Graph Theory", "Topological Sort"]
    },
    {
      id: "waymo_maximum_earnings_from_taxi",
      difficulty: "Medium",
      title: "Maximum Earnings From Taxi",
      frequency: 58,
      link: "https://leetcode.com/problems/maximum-earnings-from-taxi",
      topics: ["Array", "Hash Table", "Binary Search", "Dynamic Programming", "Sorting"]
    },
    {
      id: "waymo_range_sum_query_2d_immutable",
      difficulty: "Medium",
      title: "Range Sum Query 2D - Immutable",
      frequency: 58,
      link: "https://leetcode.com/problems/range-sum-query-2d-immutable",
      topics: ["Array", "Design", "Matrix", "Prefix Sum"]
    },
    {
      id: "waymo_robot_room_cleaner",
      difficulty: "Hard",
      title: "Robot Room Cleaner",
      frequency: 58,
      link: "https://leetcode.com/problems/robot-room-cleaner",
      topics: ["Backtracking", "Interactive"]
    },
    {
      id: "waymo_number_of_islands_ii",
      difficulty: "Hard",
      title: "Number of Islands II",
      frequency: 58,
      link: "https://leetcode.com/problems/number-of-islands-ii",
      topics: ["Array", "Hash Table", "Union-Find"]
    },
    {
      id: "waymo_car_fleet",
      difficulty: "Medium",
      title: "Car Fleet",
      frequency: 58,
      link: "https://leetcode.com/problems/car-fleet",
      topics: ["Array", "Stack", "Sorting", "Monotonic Stack"]
    },
    {
      id: "waymo_maximum_gap",
      difficulty: "Medium",
      title: "Maximum Gap",
      frequency: 58,
      link: "https://leetcode.com/problems/maximum-gap",
      topics: ["Array", "Sorting", "Bucket Sort", "Radix Sort"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [
    {
      id: "waymo_number_of_islands",
      difficulty: "Medium",
      title: "Number of Islands",
      frequency: 100,
      link: "https://leetcode.com/problems/number-of-islands",
      topics: ["Array", "Depth-First Search", "Breadth-First Search", "Union-Find", "Matrix"]
    },
    {
      id: "waymo_random_pick_with_weight",
      difficulty: "Medium",
      title: "Random Pick with Weight",
      frequency: 89.2,
      link: "https://leetcode.com/problems/random-pick-with-weight",
      topics: ["Array", "Math", "Binary Search", "Prefix Sum", "Randomized"]
    },
    {
      id: "waymo_logger_rate_limiter",
      difficulty: "Easy",
      title: "Logger Rate Limiter",
      frequency: 89.2,
      link: "https://leetcode.com/problems/logger-rate-limiter",
      topics: ["Hash Table", "Design", "Data Stream"]
    },
    {
      id: "waymo_maximum_gap",
      difficulty: "Medium",
      title: "Maximum Gap",
      frequency: 89.2,
      link: "https://leetcode.com/problems/maximum-gap",
      topics: ["Array", "Sorting", "Bucket Sort", "Radix Sort"]
    }
  ],
    sixMonths: [
    {
      id: "waymo_number_of_visible_people_in_a_queue",
      difficulty: "Hard",
      title: "Number of Visible People in a Queue",
      frequency: 100,
      link: "https://leetcode.com/problems/number-of-visible-people-in-a-queue",
      topics: ["Array", "Stack", "Monotonic Stack"]
    },
    {
      id: "waymo_random_pick_with_weight",
      difficulty: "Medium",
      title: "Random Pick with Weight",
      frequency: 100,
      link: "https://leetcode.com/problems/random-pick-with-weight",
      topics: ["Array", "Math", "Binary Search", "Prefix Sum", "Randomized"]
    },
    {
      id: "waymo_number_of_islands",
      difficulty: "Medium",
      title: "Number of Islands",
      frequency: 100,
      link: "https://leetcode.com/problems/number-of-islands",
      topics: ["Array", "Depth-First Search", "Breadth-First Search", "Union-Find", "Matrix"]
    },
    {
      id: "waymo_minimum_number_of_refueling_stops",
      difficulty: "Hard",
      title: "Minimum Number of Refueling Stops",
      frequency: 92.2,
      link: "https://leetcode.com/problems/minimum-number-of-refueling-stops",
      topics: ["Array", "Dynamic Programming", "Greedy", "Heap (Priority Queue)"]
    },
    {
      id: "waymo_logger_rate_limiter",
      difficulty: "Easy",
      title: "Logger Rate Limiter",
      frequency: 92.2,
      link: "https://leetcode.com/problems/logger-rate-limiter",
      topics: ["Hash Table", "Design", "Data Stream"]
    },
    {
      id: "waymo_maximum_gap",
      difficulty: "Medium",
      title: "Maximum Gap",
      frequency: 81.2,
      link: "https://leetcode.com/problems/maximum-gap",
      topics: ["Array", "Sorting", "Bucket Sort", "Radix Sort"]
    }
  ],
    moreThanSixMonths: [
    {
      id: "waymo_max_points_on_a_line",
      difficulty: "Hard",
      title: "Max Points on a Line",
      frequency: 100,
      link: "https://leetcode.com/problems/max-points-on-a-line",
      topics: ["Array", "Hash Table", "Math", "Geometry"]
    },
    {
      id: "waymo_meeting_rooms_ii",
      difficulty: "Medium",
      title: "Meeting Rooms II",
      frequency: 77,
      link: "https://leetcode.com/problems/meeting-rooms-ii",
      topics: ["Array", "Two Pointers", "Greedy", "Sorting", "Heap (Priority Queue)", "Prefix Sum"]
    },
    {
      id: "waymo_number_of_islands",
      difficulty: "Medium",
      title: "Number of Islands",
      frequency: 70.5,
      link: "https://leetcode.com/problems/number-of-islands",
      topics: ["Array", "Depth-First Search", "Breadth-First Search", "Union-Find", "Matrix"]
    },
    {
      id: "waymo_minimum_knight_moves",
      difficulty: "Medium",
      title: "Minimum Knight Moves",
      frequency: 70.5,
      link: "https://leetcode.com/problems/minimum-knight-moves",
      topics: ["Breadth-First Search"]
    },
    {
      id: "waymo_minimum_area_rectangle",
      difficulty: "Medium",
      title: "Minimum Area Rectangle",
      frequency: 70.5,
      link: "https://leetcode.com/problems/minimum-area-rectangle",
      topics: ["Array", "Hash Table", "Math", "Geometry", "Sorting"]
    },
    {
      id: "waymo_design_excel_sum_formula",
      difficulty: "Hard",
      title: "Design Excel Sum Formula",
      frequency: 70.5,
      link: "https://leetcode.com/problems/design-excel-sum-formula",
      topics: ["Array", "Hash Table", "String", "Graph Theory", "Design", "Topological Sort", "Matrix"]
    },
    {
      id: "waymo_design_tic_tac_toe",
      difficulty: "Medium",
      title: "Design Tic-Tac-Toe",
      frequency: 61.3,
      link: "https://leetcode.com/problems/design-tic-tac-toe",
      topics: ["Array", "Hash Table", "Design", "Matrix", "Simulation"]
    },
    {
      id: "waymo_divide_array_in_sets_of_k_consecutive_numbers",
      difficulty: "Medium",
      title: "Divide Array in Sets of K Consecutive Numbers",
      frequency: 61.3,
      link: "https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers",
      topics: ["Array", "Hash Table", "Greedy", "Sorting"]
    },
    {
      id: "waymo_shortest_distance_from_all_buildings",
      difficulty: "Hard",
      title: "Shortest Distance from All Buildings",
      frequency: 61.3,
      link: "https://leetcode.com/problems/shortest-distance-from-all-buildings",
      topics: ["Array", "Breadth-First Search", "Matrix"]
    },
    {
      id: "waymo_find_peak_element",
      difficulty: "Medium",
      title: "Find Peak Element",
      frequency: 61.3,
      link: "https://leetcode.com/problems/find-peak-element",
      topics: ["Array", "Binary Search"]
    },
    {
      id: "waymo_text_justification",
      difficulty: "Hard",
      title: "Text Justification",
      frequency: 61.3,
      link: "https://leetcode.com/problems/text-justification",
      topics: ["Array", "String", "Simulation"]
    },
    {
      id: "waymo_largest_rectangle_in_histogram",
      difficulty: "Hard",
      title: "Largest Rectangle in Histogram",
      frequency: 61.3,
      link: "https://leetcode.com/problems/largest-rectangle-in-histogram",
      topics: ["Array", "Stack", "Monotonic Stack"]
    },
    {
      id: "waymo_logger_rate_limiter",
      difficulty: "Easy",
      title: "Logger Rate Limiter",
      frequency: 61.3,
      link: "https://leetcode.com/problems/logger-rate-limiter",
      topics: ["Hash Table", "Design", "Data Stream"]
    }
  ]
  }
};

export default companyData;
