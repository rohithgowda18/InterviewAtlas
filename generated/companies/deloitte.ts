import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "deloitte",
  name: "Deloitte",
  description: "Solve curated LeetCode questions asked in Deloitte interviews.",
  topics: ["Array", "Binary Indexed Tree", "Binary Search", "Bit Manipulation", "Breadth-First Search", "Counting", "Database", "Divide and Conquer", "Dynamic Programming", "Greedy", "Hash Table", "Heap (Priority Queue)", "Linked List", "Math", "Memoization", "Merge Sort", "Monotonic Stack", "Ordered Set", "Prefix Sum", "Queue", "Quickselect", "Segment Tree", "Simulation", "Sliding Window", "Sorting", "Stack", "String", "Trie", "Two Pointers", "Union-Find"],
  roadmaps: {
    all: [
    {
      id: "deloitte_merge_k_sorted_lists",
      difficulty: "Hard",
      title: "Merge k Sorted Lists",
      frequency: 100,
      link: "https://leetcode.com/problems/merge-k-sorted-lists",
      topics: ["Linked List", "Divide and Conquer", "Heap (Priority Queue)", "Merge Sort"]
    },
    {
      id: "deloitte_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 96.1,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "deloitte_change_null_values_in_a_table_to_the_previous_value",
      difficulty: "Medium",
      title: "Change Null Values in a Table to the Previous Value",
      frequency: 85.4,
      link: "https://leetcode.com/problems/change-null-values-in-a-table-to-the-previous-value",
      topics: ["Database"]
    },
    {
      id: "deloitte_valid_parentheses",
      difficulty: "Easy",
      title: "Valid Parentheses",
      frequency: 77.3,
      link: "https://leetcode.com/problems/valid-parentheses",
      topics: ["String", "Stack"]
    },
    {
      id: "deloitte_second_highest_salary",
      difficulty: "Medium",
      title: "Second Highest Salary",
      frequency: 77.3,
      link: "https://leetcode.com/problems/second-highest-salary",
      topics: ["Database"]
    },
    {
      id: "deloitte_best_time_to_buy_and_sell_stock",
      difficulty: "Easy",
      title: "Best Time to Buy and Sell Stock",
      frequency: 73.8,
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock",
      topics: ["Array", "Dynamic Programming"]
    },
    {
      id: "deloitte_longest_palindromic_substring",
      difficulty: "Medium",
      title: "Longest Palindromic Substring",
      frequency: 73.8,
      link: "https://leetcode.com/problems/longest-palindromic-substring",
      topics: ["Two Pointers", "String", "Dynamic Programming"]
    },
    {
      id: "deloitte_longest_substring_without_repeating_characters",
      difficulty: "Medium",
      title: "Longest Substring Without Repeating Characters",
      frequency: 73.8,
      link: "https://leetcode.com/problems/longest-substring-without-repeating-characters",
      topics: ["Hash Table", "String", "Sliding Window"]
    },
    {
      id: "deloitte_palindrome_number",
      difficulty: "Easy",
      title: "Palindrome Number",
      frequency: 64.6,
      link: "https://leetcode.com/problems/palindrome-number",
      topics: ["Math"]
    },
    {
      id: "deloitte_longest_common_prefix",
      difficulty: "Easy",
      title: "Longest Common Prefix",
      frequency: 64.6,
      link: "https://leetcode.com/problems/longest-common-prefix",
      topics: ["Array", "String", "Trie"]
    },
    {
      id: "deloitte_container_with_most_water",
      difficulty: "Medium",
      title: "Container With Most Water",
      frequency: 64.6,
      link: "https://leetcode.com/problems/container-with-most-water",
      topics: ["Array", "Two Pointers", "Greedy"]
    },
    {
      id: "deloitte_managers_with_at_least_5_direct_reports",
      difficulty: "Medium",
      title: "Managers with at Least 5 Direct Reports",
      frequency: 58.1,
      link: "https://leetcode.com/problems/managers-with-at-least-5-direct-reports",
      topics: ["Database"]
    },
    {
      id: "deloitte_minimum_time_to_repair_cars",
      difficulty: "Medium",
      title: "Minimum Time to Repair Cars",
      frequency: 58.1,
      link: "https://leetcode.com/problems/minimum-time-to-repair-cars",
      topics: ["Array", "Binary Search"]
    },
    {
      id: "deloitte_merge_intervals",
      difficulty: "Medium",
      title: "Merge Intervals",
      frequency: 58.1,
      link: "https://leetcode.com/problems/merge-intervals",
      topics: ["Array", "Sorting"]
    },
    {
      id: "deloitte_maximum_subarray",
      difficulty: "Medium",
      title: "Maximum Subarray",
      frequency: 58.1,
      link: "https://leetcode.com/problems/maximum-subarray",
      topics: ["Array", "Divide and Conquer", "Dynamic Programming"]
    },
    {
      id: "deloitte_first_unique_character_in_a_string",
      difficulty: "Easy",
      title: "First Unique Character in a String",
      frequency: 58.1,
      link: "https://leetcode.com/problems/first-unique-character-in-a-string",
      topics: ["Hash Table", "String", "Queue", "Counting"]
    },
    {
      id: "deloitte_nth_highest_salary",
      difficulty: "Medium",
      title: "Nth Highest Salary",
      frequency: 58.1,
      link: "https://leetcode.com/problems/nth-highest-salary",
      topics: ["Database"]
    },
    {
      id: "deloitte_group_anagrams",
      difficulty: "Medium",
      title: "Group Anagrams",
      frequency: 58.1,
      link: "https://leetcode.com/problems/group-anagrams",
      topics: ["Array", "Hash Table", "String", "Sorting"]
    },
    {
      id: "deloitte_3sum",
      difficulty: "Medium",
      title: "3Sum",
      frequency: 58.1,
      link: "https://leetcode.com/problems/3sum",
      topics: ["Array", "Two Pointers", "Sorting"]
    },
    {
      id: "deloitte_remove_duplicates_from_sorted_array",
      difficulty: "Easy",
      title: "Remove Duplicates from Sorted Array",
      frequency: 58.1,
      link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array",
      topics: ["Array", "Two Pointers"]
    },
    {
      id: "deloitte_add_binary",
      difficulty: "Easy",
      title: "Add Binary",
      frequency: 58.1,
      link: "https://leetcode.com/problems/add-binary",
      topics: ["Math", "String", "Bit Manipulation", "Simulation"]
    },
    {
      id: "deloitte_climbing_stairs",
      difficulty: "Easy",
      title: "Climbing Stairs",
      frequency: 58.1,
      link: "https://leetcode.com/problems/climbing-stairs",
      topics: ["Math", "Dynamic Programming", "Memoization"]
    },
    {
      id: "deloitte_valid_palindrome",
      difficulty: "Easy",
      title: "Valid Palindrome",
      frequency: 58.1,
      link: "https://leetcode.com/problems/valid-palindrome",
      topics: ["Two Pointers", "String"]
    },
    {
      id: "deloitte_edit_distance",
      difficulty: "Medium",
      title: "Edit Distance",
      frequency: 48.9,
      link: "https://leetcode.com/problems/edit-distance",
      topics: ["String", "Dynamic Programming"]
    },
    {
      id: "deloitte_coin_change",
      difficulty: "Medium",
      title: "Coin Change",
      frequency: 48.9,
      link: "https://leetcode.com/problems/coin-change",
      topics: ["Array", "Dynamic Programming", "Breadth-First Search"]
    },
    {
      id: "deloitte_rising_temperature",
      difficulty: "Easy",
      title: "Rising Temperature",
      frequency: 48.9,
      link: "https://leetcode.com/problems/rising-temperature",
      topics: ["Database"]
    },
    {
      id: "deloitte_max_consecutive_ones",
      difficulty: "Easy",
      title: "Max Consecutive Ones",
      frequency: 48.9,
      link: "https://leetcode.com/problems/max-consecutive-ones",
      topics: ["Array"]
    },
    {
      id: "deloitte_kth_largest_element_in_an_array",
      difficulty: "Medium",
      title: "Kth Largest Element in an Array",
      frequency: 48.9,
      link: "https://leetcode.com/problems/kth-largest-element-in-an-array",
      topics: ["Array", "Divide and Conquer", "Sorting", "Heap (Priority Queue)", "Quickselect"]
    },
    {
      id: "deloitte_customers_who_never_order",
      difficulty: "Easy",
      title: "Customers Who Never Order",
      frequency: 48.9,
      link: "https://leetcode.com/problems/customers-who-never-order",
      topics: ["Database"]
    },
    {
      id: "deloitte_roman_to_integer",
      difficulty: "Easy",
      title: "Roman to Integer",
      frequency: 48.9,
      link: "https://leetcode.com/problems/roman-to-integer",
      topics: ["Hash Table", "Math", "String"]
    },
    {
      id: "deloitte_reverse_pairs",
      difficulty: "Hard",
      title: "Reverse Pairs",
      frequency: 48.9,
      link: "https://leetcode.com/problems/reverse-pairs",
      topics: ["Array", "Binary Search", "Divide and Conquer", "Binary Indexed Tree", "Segment Tree", "Merge Sort", "Ordered Set"]
    },
    {
      id: "deloitte_longest_consecutive_sequence",
      difficulty: "Medium",
      title: "Longest Consecutive Sequence",
      frequency: 48.9,
      link: "https://leetcode.com/problems/longest-consecutive-sequence",
      topics: ["Array", "Hash Table", "Union-Find"]
    },
    {
      id: "deloitte_remove_k_balanced_substrings",
      difficulty: "Medium",
      title: "Remove K-Balanced Substrings",
      frequency: 48.9,
      link: "https://leetcode.com/problems/remove-k-balanced-substrings",
      topics: ["String", "Stack", "Simulation"]
    },
    {
      id: "deloitte_split_array_largest_sum",
      difficulty: "Hard",
      title: "Split Array Largest Sum",
      frequency: 48.9,
      link: "https://leetcode.com/problems/split-array-largest-sum",
      topics: ["Array", "Binary Search", "Dynamic Programming", "Greedy", "Prefix Sum"]
    },
    {
      id: "deloitte_shortest_unsorted_continuous_subarray",
      difficulty: "Medium",
      title: "Shortest Unsorted Continuous Subarray",
      frequency: 48.9,
      link: "https://leetcode.com/problems/shortest-unsorted-continuous-subarray",
      topics: ["Array", "Two Pointers", "Stack", "Greedy", "Sorting", "Monotonic Stack"]
    },
    {
      id: "deloitte_rotate_array",
      difficulty: "Medium",
      title: "Rotate Array",
      frequency: 48.9,
      link: "https://leetcode.com/problems/rotate-array",
      topics: ["Array", "Math", "Two Pointers"]
    },
    {
      id: "deloitte_valid_anagram",
      difficulty: "Easy",
      title: "Valid Anagram",
      frequency: 48.9,
      link: "https://leetcode.com/problems/valid-anagram",
      topics: ["Hash Table", "String", "Sorting"]
    },
    {
      id: "deloitte_remove_k_digits",
      difficulty: "Medium",
      title: "Remove K Digits",
      frequency: 48.9,
      link: "https://leetcode.com/problems/remove-k-digits",
      topics: ["String", "Stack", "Greedy", "Monotonic Stack"]
    },
    {
      id: "deloitte_remove_all_adjacent_duplicates_in_string",
      difficulty: "Easy",
      title: "Remove All Adjacent Duplicates In String",
      frequency: 48.9,
      link: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string",
      topics: ["String", "Stack"]
    },
    {
      id: "deloitte_subarray_sum_equals_k",
      difficulty: "Medium",
      title: "Subarray Sum Equals K",
      frequency: 48.9,
      link: "https://leetcode.com/problems/subarray-sum-equals-k",
      topics: ["Array", "Hash Table", "Prefix Sum"]
    },
    {
      id: "deloitte_next_permutation",
      difficulty: "Medium",
      title: "Next Permutation",
      frequency: 48.9,
      link: "https://leetcode.com/problems/next-permutation",
      topics: ["Array", "Two Pointers"]
    },
    {
      id: "deloitte_reverse_vowels_of_a_string",
      difficulty: "Easy",
      title: "Reverse Vowels of a String",
      frequency: 48.9,
      link: "https://leetcode.com/problems/reverse-vowels-of-a-string",
      topics: ["Two Pointers", "String"]
    },
    {
      id: "deloitte_super_ugly_number",
      difficulty: "Medium",
      title: "Super Ugly Number",
      frequency: 48.9,
      link: "https://leetcode.com/problems/super-ugly-number",
      topics: ["Array", "Math", "Dynamic Programming"]
    }
  ],
    thirtyDays: [
    {
      id: "deloitte_merge_k_sorted_lists",
      difficulty: "Hard",
      title: "Merge k Sorted Lists",
      frequency: 100,
      link: "https://leetcode.com/problems/merge-k-sorted-lists",
      topics: ["Linked List", "Divide and Conquer", "Heap (Priority Queue)", "Merge Sort"]
    }
  ],
    threeMonths: [
    {
      id: "deloitte_climbing_stairs",
      difficulty: "Easy",
      title: "Climbing Stairs",
      frequency: 100,
      link: "https://leetcode.com/problems/climbing-stairs",
      topics: ["Math", "Dynamic Programming", "Memoization"]
    },
    {
      id: "deloitte_valid_palindrome",
      difficulty: "Easy",
      title: "Valid Palindrome",
      frequency: 100,
      link: "https://leetcode.com/problems/valid-palindrome",
      topics: ["Two Pointers", "String"]
    },
    {
      id: "deloitte_longest_substring_without_repeating_characters",
      difficulty: "Medium",
      title: "Longest Substring Without Repeating Characters",
      frequency: 100,
      link: "https://leetcode.com/problems/longest-substring-without-repeating-characters",
      topics: ["Hash Table", "String", "Sliding Window"]
    },
    {
      id: "deloitte_merge_k_sorted_lists",
      difficulty: "Hard",
      title: "Merge k Sorted Lists",
      frequency: 100,
      link: "https://leetcode.com/problems/merge-k-sorted-lists",
      topics: ["Linked List", "Divide and Conquer", "Heap (Priority Queue)", "Merge Sort"]
    }
  ],
    sixMonths: [
    {
      id: "deloitte_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 100,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "deloitte_longest_substring_without_repeating_characters",
      difficulty: "Medium",
      title: "Longest Substring Without Repeating Characters",
      frequency: 89.9,
      link: "https://leetcode.com/problems/longest-substring-without-repeating-characters",
      topics: ["Hash Table", "String", "Sliding Window"]
    },
    {
      id: "deloitte_merge_k_sorted_lists",
      difficulty: "Hard",
      title: "Merge k Sorted Lists",
      frequency: 89.9,
      link: "https://leetcode.com/problems/merge-k-sorted-lists",
      topics: ["Linked List", "Divide and Conquer", "Heap (Priority Queue)", "Merge Sort"]
    },
    {
      id: "deloitte_add_binary",
      difficulty: "Easy",
      title: "Add Binary",
      frequency: 82.7,
      link: "https://leetcode.com/problems/add-binary",
      topics: ["Math", "String", "Bit Manipulation", "Simulation"]
    },
    {
      id: "deloitte_longest_common_prefix",
      difficulty: "Easy",
      title: "Longest Common Prefix",
      frequency: 72.5,
      link: "https://leetcode.com/problems/longest-common-prefix",
      topics: ["Array", "String", "Trie"]
    },
    {
      id: "deloitte_remove_k_digits",
      difficulty: "Medium",
      title: "Remove K Digits",
      frequency: 72.5,
      link: "https://leetcode.com/problems/remove-k-digits",
      topics: ["String", "Stack", "Greedy", "Monotonic Stack"]
    },
    {
      id: "deloitte_climbing_stairs",
      difficulty: "Easy",
      title: "Climbing Stairs",
      frequency: 72.5,
      link: "https://leetcode.com/problems/climbing-stairs",
      topics: ["Math", "Dynamic Programming", "Memoization"]
    },
    {
      id: "deloitte_valid_palindrome",
      difficulty: "Easy",
      title: "Valid Palindrome",
      frequency: 72.5,
      link: "https://leetcode.com/problems/valid-palindrome",
      topics: ["Two Pointers", "String"]
    }
  ],
    moreThanSixMonths: [
    {
      id: "deloitte_merge_k_sorted_lists",
      difficulty: "Hard",
      title: "Merge k Sorted Lists",
      frequency: 100,
      link: "https://leetcode.com/problems/merge-k-sorted-lists",
      topics: ["Linked List", "Divide and Conquer", "Heap (Priority Queue)", "Merge Sort"]
    },
    {
      id: "deloitte_two_sum",
      difficulty: "Easy",
      title: "Two Sum",
      frequency: 90.6,
      link: "https://leetcode.com/problems/two-sum",
      topics: ["Array", "Hash Table"]
    },
    {
      id: "deloitte_second_highest_salary",
      difficulty: "Medium",
      title: "Second Highest Salary",
      frequency: 82.3,
      link: "https://leetcode.com/problems/second-highest-salary",
      topics: ["Database"]
    },
    {
      id: "deloitte_longest_palindromic_substring",
      difficulty: "Medium",
      title: "Longest Palindromic Substring",
      frequency: 78.7,
      link: "https://leetcode.com/problems/longest-palindromic-substring",
      topics: ["Two Pointers", "String", "Dynamic Programming"]
    },
    {
      id: "deloitte_valid_parentheses",
      difficulty: "Easy",
      title: "Valid Parentheses",
      frequency: 78.7,
      link: "https://leetcode.com/problems/valid-parentheses",
      topics: ["String", "Stack"]
    },
    {
      id: "deloitte_best_time_to_buy_and_sell_stock",
      difficulty: "Easy",
      title: "Best Time to Buy and Sell Stock",
      frequency: 78.7,
      link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock",
      topics: ["Array", "Dynamic Programming"]
    },
    {
      id: "deloitte_container_with_most_water",
      difficulty: "Medium",
      title: "Container With Most Water",
      frequency: 69.3,
      link: "https://leetcode.com/problems/container-with-most-water",
      topics: ["Array", "Two Pointers", "Greedy"]
    },
    {
      id: "deloitte_palindrome_number",
      difficulty: "Easy",
      title: "Palindrome Number",
      frequency: 62.6,
      link: "https://leetcode.com/problems/palindrome-number",
      topics: ["Math"]
    },
    {
      id: "deloitte_managers_with_at_least_5_direct_reports",
      difficulty: "Medium",
      title: "Managers with at Least 5 Direct Reports",
      frequency: 62.6,
      link: "https://leetcode.com/problems/managers-with-at-least-5-direct-reports",
      topics: ["Database"]
    },
    {
      id: "deloitte_minimum_time_to_repair_cars",
      difficulty: "Medium",
      title: "Minimum Time to Repair Cars",
      frequency: 62.6,
      link: "https://leetcode.com/problems/minimum-time-to-repair-cars",
      topics: ["Array", "Binary Search"]
    },
    {
      id: "deloitte_merge_intervals",
      difficulty: "Medium",
      title: "Merge Intervals",
      frequency: 62.6,
      link: "https://leetcode.com/problems/merge-intervals",
      topics: ["Array", "Sorting"]
    },
    {
      id: "deloitte_first_unique_character_in_a_string",
      difficulty: "Easy",
      title: "First Unique Character in a String",
      frequency: 62.6,
      link: "https://leetcode.com/problems/first-unique-character-in-a-string",
      topics: ["Hash Table", "String", "Queue", "Counting"]
    },
    {
      id: "deloitte_3sum",
      difficulty: "Medium",
      title: "3Sum",
      frequency: 62.6,
      link: "https://leetcode.com/problems/3sum",
      topics: ["Array", "Two Pointers", "Sorting"]
    },
    {
      id: "deloitte_change_null_values_in_a_table_to_the_previous_value",
      difficulty: "Medium",
      title: "Change Null Values in a Table to the Previous Value",
      frequency: 53.3,
      link: "https://leetcode.com/problems/change-null-values-in-a-table-to-the-previous-value",
      topics: ["Database"]
    },
    {
      id: "deloitte_longest_common_prefix",
      difficulty: "Easy",
      title: "Longest Common Prefix",
      frequency: 53.3,
      link: "https://leetcode.com/problems/longest-common-prefix",
      topics: ["Array", "String", "Trie"]
    },
    {
      id: "deloitte_rising_temperature",
      difficulty: "Easy",
      title: "Rising Temperature",
      frequency: 53.3,
      link: "https://leetcode.com/problems/rising-temperature",
      topics: ["Database"]
    },
    {
      id: "deloitte_reverse_pairs",
      difficulty: "Hard",
      title: "Reverse Pairs",
      frequency: 53.3,
      link: "https://leetcode.com/problems/reverse-pairs",
      topics: ["Array", "Binary Search", "Divide and Conquer", "Binary Indexed Tree", "Segment Tree", "Merge Sort", "Ordered Set"]
    },
    {
      id: "deloitte_edit_distance",
      difficulty: "Medium",
      title: "Edit Distance",
      frequency: 53.3,
      link: "https://leetcode.com/problems/edit-distance",
      topics: ["String", "Dynamic Programming"]
    },
    {
      id: "deloitte_coin_change",
      difficulty: "Medium",
      title: "Coin Change",
      frequency: 53.3,
      link: "https://leetcode.com/problems/coin-change",
      topics: ["Array", "Dynamic Programming", "Breadth-First Search"]
    },
    {
      id: "deloitte_remove_k_balanced_substrings",
      difficulty: "Medium",
      title: "Remove K-Balanced Substrings",
      frequency: 53.3,
      link: "https://leetcode.com/problems/remove-k-balanced-substrings",
      topics: ["String", "Stack", "Simulation"]
    },
    {
      id: "deloitte_max_consecutive_ones",
      difficulty: "Easy",
      title: "Max Consecutive Ones",
      frequency: 53.3,
      link: "https://leetcode.com/problems/max-consecutive-ones",
      topics: ["Array"]
    },
    {
      id: "deloitte_kth_largest_element_in_an_array",
      difficulty: "Medium",
      title: "Kth Largest Element in an Array",
      frequency: 53.3,
      link: "https://leetcode.com/problems/kth-largest-element-in-an-array",
      topics: ["Array", "Divide and Conquer", "Sorting", "Heap (Priority Queue)", "Quickselect"]
    },
    {
      id: "deloitte_maximum_subarray",
      difficulty: "Medium",
      title: "Maximum Subarray",
      frequency: 53.3,
      link: "https://leetcode.com/problems/maximum-subarray",
      topics: ["Array", "Divide and Conquer", "Dynamic Programming"]
    },
    {
      id: "deloitte_longest_substring_without_repeating_characters",
      difficulty: "Medium",
      title: "Longest Substring Without Repeating Characters",
      frequency: 53.3,
      link: "https://leetcode.com/problems/longest-substring-without-repeating-characters",
      topics: ["Hash Table", "String", "Sliding Window"]
    },
    {
      id: "deloitte_nth_highest_salary",
      difficulty: "Medium",
      title: "Nth Highest Salary",
      frequency: 53.3,
      link: "https://leetcode.com/problems/nth-highest-salary",
      topics: ["Database"]
    },
    {
      id: "deloitte_remove_duplicates_from_sorted_array",
      difficulty: "Easy",
      title: "Remove Duplicates from Sorted Array",
      frequency: 53.3,
      link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array",
      topics: ["Array", "Two Pointers"]
    },
    {
      id: "deloitte_roman_to_integer",
      difficulty: "Easy",
      title: "Roman to Integer",
      frequency: 53.3,
      link: "https://leetcode.com/problems/roman-to-integer",
      topics: ["Hash Table", "Math", "String"]
    },
    {
      id: "deloitte_split_array_largest_sum",
      difficulty: "Hard",
      title: "Split Array Largest Sum",
      frequency: 53.3,
      link: "https://leetcode.com/problems/split-array-largest-sum",
      topics: ["Array", "Binary Search", "Dynamic Programming", "Greedy", "Prefix Sum"]
    },
    {
      id: "deloitte_group_anagrams",
      difficulty: "Medium",
      title: "Group Anagrams",
      frequency: 53.3,
      link: "https://leetcode.com/problems/group-anagrams",
      topics: ["Array", "Hash Table", "String", "Sorting"]
    },
    {
      id: "deloitte_longest_consecutive_sequence",
      difficulty: "Medium",
      title: "Longest Consecutive Sequence",
      frequency: 53.3,
      link: "https://leetcode.com/problems/longest-consecutive-sequence",
      topics: ["Array", "Hash Table", "Union-Find"]
    },
    {
      id: "deloitte_customers_who_never_order",
      difficulty: "Easy",
      title: "Customers Who Never Order",
      frequency: 53.3,
      link: "https://leetcode.com/problems/customers-who-never-order",
      topics: ["Database"]
    },
    {
      id: "deloitte_rotate_array",
      difficulty: "Medium",
      title: "Rotate Array",
      frequency: 53.3,
      link: "https://leetcode.com/problems/rotate-array",
      topics: ["Array", "Math", "Two Pointers"]
    },
    {
      id: "deloitte_next_permutation",
      difficulty: "Medium",
      title: "Next Permutation",
      frequency: 53.3,
      link: "https://leetcode.com/problems/next-permutation",
      topics: ["Array", "Two Pointers"]
    }
  ]
  }
};

export default companyData;
