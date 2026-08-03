import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "kakao",
  name: "Kakao",
  description: "Solve curated LeetCode questions asked in Kakao interviews.",
  topics: ["Array", "Backtracking", "Bit Manipulation", "Breadth-First Search", "Enumeration", "Matrix"],
  roadmaps: {
    all: [
    {
      id: "kakao_maximum_points_in_an_archery_competition",
      difficulty: "Medium",
      title: "Maximum Points in an Archery Competition",
      frequency: 100,
      link: "https://leetcode.com/problems/maximum-points-in-an-archery-competition",
      topics: ["Array", "Backtracking", "Bit Manipulation", "Enumeration"]
    },
    {
      id: "kakao_minimum_moves_to_reach_target_with_rotations",
      difficulty: "Hard",
      title: "Minimum Moves to Reach Target with Rotations",
      frequency: 100,
      link: "https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations",
      topics: ["Array", "Breadth-First Search", "Matrix"]
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
      id: "kakao_minimum_moves_to_reach_target_with_rotations",
      difficulty: "Hard",
      title: "Minimum Moves to Reach Target with Rotations",
      frequency: 100,
      link: "https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations",
      topics: ["Array", "Breadth-First Search", "Matrix"]
    },
    {
      id: "kakao_maximum_points_in_an_archery_competition",
      difficulty: "Medium",
      title: "Maximum Points in an Archery Competition",
      frequency: 100,
      link: "https://leetcode.com/problems/maximum-points-in-an-archery-competition",
      topics: ["Array", "Backtracking", "Bit Manipulation", "Enumeration"]
    }
  ]
  }
};

export default companyData;
