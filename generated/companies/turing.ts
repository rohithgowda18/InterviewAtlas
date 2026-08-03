import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "turing",
  name: "Turing",
  description: "Solve curated LeetCode questions asked in Turing interviews.",
  topics: ["Array", "Binary Search", "Bit Manipulation", "Breadth-First Search", "Counting", "Depth-First Search", "Divide and Conquer", "Dynamic Programming", "Enumeration", "Graph Theory", "Greedy", "Hash Function", "Hash Table", "Heap (Priority Queue)", "Math", "Matrix", "Prefix Sum", "Quickselect", "Rolling Hash", "Simulation", "Sliding Window", "Sorting", "Stack", "String", "String Matching", "Trie", "Two Pointers", "Union-Find"],
  roadmaps: {
    all: [
    {
      id: "turing_longest_substring_without_repeating_characters",
      difficulty: "Medium",
      title: "Longest Substring Without Repeating Characters",
      frequency: 100,
      link: "https://leetcode.com/problems/longest-substring-without-repeating-characters",
      topics: ["Hash Table", "String", "Sliding Window"]
    },
    {
      id: "turing_valid_parentheses",
      difficulty: "Easy",
      title: "Valid Parentheses",
      frequency: 92.1,
      link: "https://leetcode.com/problems/valid-parentheses",
      topics: ["String", "Stack"]
    },
    {
      id: "turing_validate_ip_address",
      difficulty: "Medium",
      title: "Validate IP Address",
      frequency: 90.1,
      link: "https://leetcode.com/problems/validate-ip-address",
      topics: ["String"]
    },
    {
      id: "turing_minimum_cost_for_tickets",
      difficulty: "Medium",
      title: "Minimum Cost For Tickets",
      frequency: 85.6,
      link: "https://leetcode.com/problems/minimum-cost-for-tickets",
      topics: ["Array", "Dynamic Programming"]
    },
    {
      id: "turing_koko_eating_bananas",
      difficulty: "Medium",
      title: "Koko Eating Bananas",
      frequency: 82.9,
      link: "https://leetcode.com/problems/koko-eating-bananas",
      topics: ["Array", "Binary Search"]
    },
    {
      id: "turing_baseball_game",
      difficulty: "Easy",
      title: "Baseball Game",
      frequency: 76.4,
      link: "https://leetcode.com/problems/baseball-game",
      topics: ["Array", "Stack", "Simulation"]
    },
    {
      id: "turing_minimum_length_of_anagram_concatenation",
      difficulty: "Medium",
      title: "Minimum Length of Anagram Concatenation",
      frequency: 76.4,
      link: "https://leetcode.com/problems/minimum-length-of-anagram-concatenation",
      topics: ["Hash Table", "String", "Counting"]
    },
    {
      id: "turing_longest_arithmetic_subsequence",
      difficulty: "Medium",
      title: "Longest Arithmetic Subsequence",
      frequency: 72.2,
      link: "https://leetcode.com/problems/longest-arithmetic-subsequence",
      topics: ["Array", "Hash Table", "Binary Search", "Dynamic Programming"]
    },
    {
      id: "turing_longest_palindromic_substring",
      difficulty: "Medium",
      title: "Longest Palindromic Substring",
      frequency: 67.2,
      link: "https://leetcode.com/problems/longest-palindromic-substring",
      topics: ["Two Pointers", "String", "Dynamic Programming"]
    },
    {
      id: "turing_apply_operations_to_make_sum_of_array_greater_than_or_equal_to_k",
      difficulty: "Medium",
      title: "Apply Operations to Make Sum of Array Greater Than or Equal to k",
      frequency: 67.2,
      link: "https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k",
      topics: ["Math", "Greedy", "Enumeration"]
    },
    {
      id: "turing_minimum_number_of_operations_to_satisfy_conditions",
      difficulty: "Medium",
      title: "Minimum Number of Operations to Satisfy Conditions",
      frequency: 67.2,
      link: "https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions",
      topics: ["Array", "Dynamic Programming", "Matrix"]
    },
    {
      id: "turing_minimum_adjacent_swaps_for_k_consecutive_ones",
      difficulty: "Hard",
      title: "Minimum Adjacent Swaps for K Consecutive Ones",
      frequency: 67.2,
      link: "https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones",
      topics: ["Array", "Greedy", "Sliding Window", "Prefix Sum"]
    },
    {
      id: "turing_longest_common_prefix",
      difficulty: "Easy",
      title: "Longest Common Prefix",
      frequency: 60.6,
      link: "https://leetcode.com/problems/longest-common-prefix",
      topics: ["Array", "String", "Trie"]
    },
    {
      id: "turing_number_of_islands",
      difficulty: "Medium",
      title: "Number of Islands",
      frequency: 60.6,
      link: "https://leetcode.com/problems/number-of-islands",
      topics: ["Array", "Depth-First Search", "Breadth-First Search", "Union-Find", "Matrix"]
    },
    {
      id: "turing_best_time_to_buy_and_sell_stock",
      difficulty: "Easy",
      title: "Best Time to Buy and Sell Stock",
      frequency: 60.6,
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock",
      topics: ["Array", "Dynamic Programming"]
    },
    {
      id: "turing_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 60.6,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "turing_find_the_town_judge",
      difficulty: "Easy",
      title: "Find the Town Judge",
      frequency: 51.5,
      link: "https://leetcode.com/problems/find-the-town-judge",
      topics: ["Array", "Hash Table", "Graph Theory"]
    },
    {
      id: "turing_maximum_subarray",
      difficulty: "Medium",
      title: "Maximum Subarray",
      frequency: 51.5,
      link: "https://leetcode.com/problems/maximum-subarray",
      topics: ["Array", "Divide and Conquer", "Dynamic Programming"]
    },
    {
      id: "turing_merge_intervals",
      difficulty: "Medium",
      title: "Merge Intervals",
      frequency: 51.5,
      link: "https://leetcode.com/problems/merge-intervals",
      topics: ["Array", "Sorting"]
    },
    {
      id: "turing_degree_of_an_array",
      difficulty: "Easy",
      title: "Degree of an Array",
      frequency: 51.5,
      link: "https://leetcode.com/problems/degree-of-an-array",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "turing_product_of_array_except_self",
      difficulty: "Medium",
      title: "Product of Array Except Self",
      frequency: 51.5,
      link: "https://leetcode.com/problems/product-of-array-except-self",
      topics: ["Array", "Prefix Sum"]
    },
    {
      id: "turing_maximum_repeating_substring",
      difficulty: "Easy",
      title: "Maximum Repeating Substring",
      frequency: 51.5,
      link: "https://leetcode.com/problems/maximum-repeating-substring",
      topics: ["String", "Dynamic Programming", "String Matching"]
    },
    {
      id: "turing_partition_array_into_three_parts_with_equal_sum",
      difficulty: "Easy",
      title: "Partition Array Into Three Parts With Equal Sum",
      frequency: 51.5,
      link: "https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum",
      topics: ["Array", "Greedy"]
    },
    {
      id: "turing_kth_largest_element_in_an_array",
      difficulty: "Medium",
      title: "Kth Largest Element in an Array",
      frequency: 51.5,
      link: "https://leetcode.com/problems/kth-largest-element-in-an-array",
      topics: ["Array", "Divide and Conquer", "Sorting", "Heap (Priority Queue)", "Quickselect"]
    },
    {
      id: "turing_find_first_and_last_position_of_element_in_sorted_array",
      difficulty: "Medium",
      title: "Find First and Last Position of Element in Sorted Array",
      frequency: 51.5,
      link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array",
      topics: ["Array", "Binary Search"]
    },
    {
      id: "turing_race_car",
      difficulty: "Hard",
      title: "Race Car",
      frequency: 51.5,
      link: "https://leetcode.com/problems/race-car",
      topics: ["Dynamic Programming"]
    },
    {
      id: "turing_jump_game",
      difficulty: "Medium",
      title: "Jump Game",
      frequency: 51.5,
      link: "https://leetcode.com/problems/jump-game",
      topics: ["Array", "Dynamic Programming", "Greedy"]
    },
    {
      id: "turing_minimum_number_of_operations_to_make_word_k_periodic",
      difficulty: "Medium",
      title: "Minimum Number of Operations to Make Word K-Periodic",
      frequency: 51.5,
      link: "https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic",
      topics: ["Hash Table", "String", "Counting"]
    },
    {
      id: "turing_group_anagrams",
      difficulty: "Medium",
      title: "Group Anagrams",
      frequency: 51.5,
      link: "https://leetcode.com/problems/group-anagrams",
      topics: ["Array", "Hash Table", "String", "Sorting"]
    },
    {
      id: "turing_sum_of_digit_differences_of_all_pairs",
      difficulty: "Medium",
      title: "Sum of Digit Differences of All Pairs",
      frequency: 51.5,
      link: "https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs",
      topics: ["Array", "Hash Table", "Math", "Counting"]
    },
    {
      id: "turing_3sum",
      difficulty: "Medium",
      title: "3Sum",
      frequency: 51.5,
      link: "https://leetcode.com/problems/3sum",
      topics: ["Array", "Two Pointers", "Sorting"]
    },
    {
      id: "turing_median_of_two_sorted_arrays",
      difficulty: "Hard",
      title: "Median of Two Sorted Arrays",
      frequency: 51.5,
      link: "https://leetcode.com/problems/median-of-two-sorted-arrays",
      topics: ["Array", "Binary Search", "Divide and Conquer"]
    },
    {
      id: "turing_k_divisible_elements_subarrays",
      difficulty: "Medium",
      title: "K Divisible Elements Subarrays",
      frequency: 51.5,
      link: "https://leetcode.com/problems/k-divisible-elements-subarrays",
      topics: ["Array", "Hash Table", "Trie", "Rolling Hash", "Hash Function", "Enumeration"]
    },
    {
      id: "turing_count_square_sum_triples",
      difficulty: "Easy",
      title: "Count Square Sum Triples",
      frequency: 51.5,
      link: "https://leetcode.com/problems/count-square-sum-triples",
      topics: ["Math", "Enumeration"]
    },
    {
      id: "turing_non_decreasing_array",
      difficulty: "Medium",
      title: "Non-decreasing Array",
      frequency: 51.5,
      link: "https://leetcode.com/problems/non-decreasing-array",
      topics: ["Array"]
    },
    {
      id: "turing_minimum_cost_walk_in_weighted_graph",
      difficulty: "Hard",
      title: "Minimum Cost Walk in Weighted Graph",
      frequency: 51.5,
      link: "https://leetcode.com/problems/minimum-cost-walk-in-weighted-graph",
      topics: ["Array", "Bit Manipulation", "Union-Find", "Graph Theory"]
    },
    {
      id: "turing_ugly_number_ii",
      difficulty: "Medium",
      title: "Ugly Number II",
      frequency: 51.5,
      link: "https://leetcode.com/problems/ugly-number-ii",
      topics: ["Hash Table", "Math", "Dynamic Programming", "Heap (Priority Queue)"]
    }
  ],
    thirtyDays: [

  ],
    threeMonths: [

  ],
    sixMonths: [
    {
      id: "turing_longest_arithmetic_subsequence",
      difficulty: "Medium",
      title: "Longest Arithmetic Subsequence",
      frequency: 100,
      link: "https://leetcode.com/problems/longest-arithmetic-subsequence",
      topics: ["Array", "Hash Table", "Binary Search", "Dynamic Programming"]
    },
    {
      id: "turing_minimum_adjacent_swaps_for_k_consecutive_ones",
      difficulty: "Hard",
      title: "Minimum Adjacent Swaps for K Consecutive Ones",
      frequency: 100,
      link: "https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones",
      topics: ["Array", "Greedy", "Sliding Window", "Prefix Sum"]
    },
    {
      id: "turing_validate_ip_address",
      difficulty: "Medium",
      title: "Validate IP Address",
      frequency: 92.6,
      link: "https://leetcode.com/problems/validate-ip-address",
      topics: ["String"]
    },
    {
      id: "turing_non_decreasing_array",
      difficulty: "Medium",
      title: "Non-decreasing Array",
      frequency: 82.1,
      link: "https://leetcode.com/problems/non-decreasing-array",
      topics: ["Array"]
    },
    {
      id: "turing_ugly_number_ii",
      difficulty: "Medium",
      title: "Ugly Number II",
      frequency: 82.1,
      link: "https://leetcode.com/problems/ugly-number-ii",
      topics: ["Hash Table", "Math", "Dynamic Programming", "Heap (Priority Queue)"]
    }
  ],
    moreThanSixMonths: [
    {
      id: "turing_longest_substring_without_repeating_characters",
      difficulty: "Medium",
      title: "Longest Substring Without Repeating Characters",
      frequency: 100,
      link: "https://leetcode.com/problems/longest-substring-without-repeating-characters",
      topics: ["Hash Table", "String", "Sliding Window"]
    },
    {
      id: "turing_valid_parentheses",
      difficulty: "Easy",
      title: "Valid Parentheses",
      frequency: 93.5,
      link: "https://leetcode.com/problems/valid-parentheses",
      topics: ["String", "Stack"]
    },
    {
      id: "turing_minimum_cost_for_tickets",
      difficulty: "Medium",
      title: "Minimum Cost For Tickets",
      frequency: 87,
      link: "https://leetcode.com/problems/minimum-cost-for-tickets",
      topics: ["Array", "Dynamic Programming"]
    },
    {
      id: "turing_validate_ip_address",
      difficulty: "Medium",
      title: "Validate IP Address",
      frequency: 84.4,
      link: "https://leetcode.com/problems/validate-ip-address",
      topics: ["String"]
    },
    {
      id: "turing_koko_eating_bananas",
      difficulty: "Medium",
      title: "Koko Eating Bananas",
      frequency: 84.4,
      link: "https://leetcode.com/problems/koko-eating-bananas",
      topics: ["Array", "Binary Search"]
    },
    {
      id: "turing_baseball_game",
      difficulty: "Easy",
      title: "Baseball Game",
      frequency: 77.9,
      link: "https://leetcode.com/problems/baseball-game",
      topics: ["Array", "Stack", "Simulation"]
    },
    {
      id: "turing_minimum_length_of_anagram_concatenation",
      difficulty: "Medium",
      title: "Minimum Length of Anagram Concatenation",
      frequency: 77.9,
      link: "https://leetcode.com/problems/minimum-length-of-anagram-concatenation",
      topics: ["Hash Table", "String", "Counting"]
    },
    {
      id: "turing_longest_palindromic_substring",
      difficulty: "Medium",
      title: "Longest Palindromic Substring",
      frequency: 68.7,
      link: "https://leetcode.com/problems/longest-palindromic-substring",
      topics: ["Two Pointers", "String", "Dynamic Programming"]
    },
    {
      id: "turing_apply_operations_to_make_sum_of_array_greater_than_or_equal_to_k",
      difficulty: "Medium",
      title: "Apply Operations to Make Sum of Array Greater Than or Equal to k",
      frequency: 68.7,
      link: "https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k",
      topics: ["Math", "Greedy", "Enumeration"]
    },
    {
      id: "turing_longest_common_prefix",
      difficulty: "Easy",
      title: "Longest Common Prefix",
      frequency: 62.3,
      link: "https://leetcode.com/problems/longest-common-prefix",
      topics: ["Array", "String", "Trie"]
    },
    {
      id: "turing_best_time_to_buy_and_sell_stock",
      difficulty: "Easy",
      title: "Best Time to Buy and Sell Stock",
      frequency: 62.3,
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock",
      topics: ["Array", "Dynamic Programming"]
    },
    {
      id: "turing_minimum_number_of_operations_to_satisfy_conditions",
      difficulty: "Medium",
      title: "Minimum Number of Operations to Satisfy Conditions",
      frequency: 62.3,
      link: "https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions",
      topics: ["Array", "Dynamic Programming", "Matrix"]
    },
    {
      id: "turing_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 62.3,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "turing_find_the_town_judge",
      difficulty: "Easy",
      title: "Find the Town Judge",
      frequency: 53.2,
      link: "https://leetcode.com/problems/find-the-town-judge",
      topics: ["Array", "Hash Table", "Graph Theory"]
    },
    {
      id: "turing_merge_intervals",
      difficulty: "Medium",
      title: "Merge Intervals",
      frequency: 53.2,
      link: "https://leetcode.com/problems/merge-intervals",
      topics: ["Array", "Sorting"]
    },
    {
      id: "turing_number_of_islands",
      difficulty: "Medium",
      title: "Number of Islands",
      frequency: 53.2,
      link: "https://leetcode.com/problems/number-of-islands",
      topics: ["Array", "Depth-First Search", "Breadth-First Search", "Union-Find", "Matrix"]
    },
    {
      id: "turing_maximum_subarray",
      difficulty: "Medium",
      title: "Maximum Subarray",
      frequency: 53.2,
      link: "https://leetcode.com/problems/maximum-subarray",
      topics: ["Array", "Divide and Conquer", "Dynamic Programming"]
    },
    {
      id: "turing_product_of_array_except_self",
      difficulty: "Medium",
      title: "Product of Array Except Self",
      frequency: 53.2,
      link: "https://leetcode.com/problems/product-of-array-except-self",
      topics: ["Array", "Prefix Sum"]
    },
    {
      id: "turing_maximum_repeating_substring",
      difficulty: "Easy",
      title: "Maximum Repeating Substring",
      frequency: 53.2,
      link: "https://leetcode.com/problems/maximum-repeating-substring",
      topics: ["String", "Dynamic Programming", "String Matching"]
    },
    {
      id: "turing_kth_largest_element_in_an_array",
      difficulty: "Medium",
      title: "Kth Largest Element in an Array",
      frequency: 53.2,
      link: "https://leetcode.com/problems/kth-largest-element-in-an-array",
      topics: ["Array", "Divide and Conquer", "Sorting", "Heap (Priority Queue)", "Quickselect"]
    },
    {
      id: "turing_partition_array_into_three_parts_with_equal_sum",
      difficulty: "Easy",
      title: "Partition Array Into Three Parts With Equal Sum",
      frequency: 53.2,
      link: "https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum",
      topics: ["Array", "Greedy"]
    },
    {
      id: "turing_group_anagrams",
      difficulty: "Medium",
      title: "Group Anagrams",
      frequency: 53.2,
      link: "https://leetcode.com/problems/group-anagrams",
      topics: ["Array", "Hash Table", "String", "Sorting"]
    },
    {
      id: "turing_find_first_and_last_position_of_element_in_sorted_array",
      difficulty: "Medium",
      title: "Find First and Last Position of Element in Sorted Array",
      frequency: 53.2,
      link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array",
      topics: ["Array", "Binary Search"]
    },
    {
      id: "turing_race_car",
      difficulty: "Hard",
      title: "Race Car",
      frequency: 53.2,
      link: "https://leetcode.com/problems/race-car",
      topics: ["Dynamic Programming"]
    },
    {
      id: "turing_jump_game",
      difficulty: "Medium",
      title: "Jump Game",
      frequency: 53.2,
      link: "https://leetcode.com/problems/jump-game",
      topics: ["Array", "Dynamic Programming", "Greedy"]
    },
    {
      id: "turing_3sum",
      difficulty: "Medium",
      title: "3Sum",
      frequency: 53.2,
      link: "https://leetcode.com/problems/3sum",
      topics: ["Array", "Two Pointers", "Sorting"]
    },
    {
      id: "turing_minimum_number_of_operations_to_make_word_k_periodic",
      difficulty: "Medium",
      title: "Minimum Number of Operations to Make Word K-Periodic",
      frequency: 53.2,
      link: "https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic",
      topics: ["Hash Table", "String", "Counting"]
    },
    {
      id: "turing_sum_of_digit_differences_of_all_pairs",
      difficulty: "Medium",
      title: "Sum of Digit Differences of All Pairs",
      frequency: 53.2,
      link: "https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs",
      topics: ["Array", "Hash Table", "Math", "Counting"]
    },
    {
      id: "turing_median_of_two_sorted_arrays",
      difficulty: "Hard",
      title: "Median of Two Sorted Arrays",
      frequency: 53.2,
      link: "https://leetcode.com/problems/median-of-two-sorted-arrays",
      topics: ["Array", "Binary Search", "Divide and Conquer"]
    },
    {
      id: "turing_count_square_sum_triples",
      difficulty: "Easy",
      title: "Count Square Sum Triples",
      frequency: 53.2,
      link: "https://leetcode.com/problems/count-square-sum-triples",
      topics: ["Math", "Enumeration"]
    },
    {
      id: "turing_k_divisible_elements_subarrays",
      difficulty: "Medium",
      title: "K Divisible Elements Subarrays",
      frequency: 53.2,
      link: "https://leetcode.com/problems/k-divisible-elements-subarrays",
      topics: ["Array", "Hash Table", "Trie", "Rolling Hash", "Hash Function", "Enumeration"]
    }
  ]
  }
};

export default companyData;
