import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "works-applications",
  name: "Works Applications",
  description: "Solve curated LeetCode questions asked in Works Applications interviews.",
  topics: ["Array", "Dynamic Programming", "Greedy", "Heap (Priority Queue)", "Sorting", "String", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "works-applications_3sum",
      difficulty: "Medium",
      title: "3Sum",
      frequency: 100,
      link: "https://leetcode.com/problems/3sum",
      topics: ["Array", "Two Pointers", "Sorting"]
    },
    {
      id: "works-applications_course_schedule_iii",
      difficulty: "Hard",
      title: "Course Schedule III",
      frequency: 100,
      link: "https://leetcode.com/problems/course-schedule-iii",
      topics: ["Array", "Greedy", "Sorting", "Heap (Priority Queue)"]
    },
    {
      id: "works-applications_k_inverse_pairs_array",
      difficulty: "Hard",
      title: "K Inverse Pairs Array",
      frequency: 100,
      link: "https://leetcode.com/problems/k-inverse-pairs-array",
      topics: ["Dynamic Programming"]
    },
    {
      id: "works-applications_largest_number",
      difficulty: "Medium",
      title: "Largest Number",
      frequency: 100,
      link: "https://leetcode.com/problems/largest-number",
      topics: ["Array", "String", "Greedy", "Sorting"]
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
      id: "works-applications_largest_number",
      difficulty: "Medium",
      title: "Largest Number",
      frequency: 100,
      link: "https://leetcode.com/problems/largest-number",
      topics: ["Array", "String", "Greedy", "Sorting"]
    },
    {
      id: "works-applications_k_inverse_pairs_array",
      difficulty: "Hard",
      title: "K Inverse Pairs Array",
      frequency: 100,
      link: "https://leetcode.com/problems/k-inverse-pairs-array",
      topics: ["Dynamic Programming"]
    },
    {
      id: "works-applications_course_schedule_iii",
      difficulty: "Hard",
      title: "Course Schedule III",
      frequency: 100,
      link: "https://leetcode.com/problems/course-schedule-iii",
      topics: ["Array", "Greedy", "Sorting", "Heap (Priority Queue)"]
    },
    {
      id: "works-applications_3sum",
      difficulty: "Medium",
      title: "3Sum",
      frequency: 100,
      link: "https://leetcode.com/problems/3sum",
      topics: ["Array", "Two Pointers", "Sorting"]
    }
  ]
  }
};

export default companyData;
