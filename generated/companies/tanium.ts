import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "tanium",
  name: "Tanium",
  description: "Solve curated LeetCode questions asked in Tanium interviews.",
  topics: ["Array", "Breadth-First Search", "Depth-First Search", "String", "Two Pointers"],
  roadmaps: {
    all: [
    {
      id: "tanium_jump_game_iii",
      difficulty: "Medium",
      title: "Jump Game III",
      frequency: 100,
      link: "https://leetcode.com/problems/jump-game-iii",
      topics: ["Array", "Depth-First Search", "Breadth-First Search"]
    },
    {
      id: "tanium_reverse_only_letters",
      difficulty: "Easy",
      title: "Reverse Only Letters",
      frequency: 80.6,
      link: "https://leetcode.com/problems/reverse-only-letters",
      topics: ["Two Pointers", "String"]
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
      id: "tanium_jump_game_iii",
      difficulty: "Medium",
      title: "Jump Game III",
      frequency: 100,
      link: "https://leetcode.com/problems/jump-game-iii",
      topics: ["Array", "Depth-First Search", "Breadth-First Search"]
    },
    {
      id: "tanium_reverse_only_letters",
      difficulty: "Easy",
      title: "Reverse Only Letters",
      frequency: 80.6,
      link: "https://leetcode.com/problems/reverse-only-letters",
      topics: ["Two Pointers", "String"]
    }
  ]
  }
};

export default companyData;
