import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "turvo",
  name: "Turvo",
  description: "Solve curated LeetCode questions asked in Turvo interviews.",
  topics: ["Array", "Dynamic Programming", "Enumeration"],
  roadmaps: {
    all: [
    {
      id: "turvo_minimum_difficulty_of_a_job_schedule",
      difficulty: "Hard",
      title: "Minimum Difficulty of a Job Schedule",
      frequency: 100,
      link: "https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule",
      topics: ["Array", "Dynamic Programming"]
    },
    {
      id: "turvo_count_good_triplets",
      difficulty: "Easy",
      title: "Count Good Triplets",
      frequency: 100,
      link: "https://leetcode.com/problems/count-good-triplets",
      topics: ["Array", "Enumeration"]
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
      id: "turvo_count_good_triplets",
      difficulty: "Easy",
      title: "Count Good Triplets",
      frequency: 100,
      link: "https://leetcode.com/problems/count-good-triplets",
      topics: ["Array", "Enumeration"]
    },
    {
      id: "turvo_minimum_difficulty_of_a_job_schedule",
      difficulty: "Hard",
      title: "Minimum Difficulty of a Job Schedule",
      frequency: 100,
      link: "https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule",
      topics: ["Array", "Dynamic Programming"]
    }
  ]
  }
};

export default companyData;
