import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "groupon",
  name: "Groupon",
  description: "Solve curated LeetCode questions asked in Groupon interviews.",
  topics: ["Array", "Binary Search", "Dynamic Programming", "Greedy", "Heap (Priority Queue)", "Math", "Sorting"],
  roadmaps: {
    all: [
    {
      id: "groupon_sell_diminishing_valued_colored_balls",
      difficulty: "Medium",
      title: "Sell Diminishing-Valued Colored Balls",
      frequency: 100,
      link: "https://leetcode.com/problems/sell-diminishing-valued-colored-balls",
      topics: ["Array", "Math", "Binary Search", "Greedy", "Sorting", "Heap (Priority Queue)"]
    },
    {
      id: "groupon_jump_game_ii",
      difficulty: "Medium",
      title: "Jump Game II",
      frequency: 68.5,
      link: "https://leetcode.com/problems/jump-game-ii",
      topics: ["Array", "Dynamic Programming", "Greedy"]
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
      id: "groupon_sell_diminishing_valued_colored_balls",
      difficulty: "Medium",
      title: "Sell Diminishing-Valued Colored Balls",
      frequency: 100,
      link: "https://leetcode.com/problems/sell-diminishing-valued-colored-balls",
      topics: ["Array", "Math", "Binary Search", "Greedy", "Sorting", "Heap (Priority Queue)"]
    },
    {
      id: "groupon_jump_game_ii",
      difficulty: "Medium",
      title: "Jump Game II",
      frequency: 100,
      link: "https://leetcode.com/problems/jump-game-ii",
      topics: ["Array", "Dynamic Programming", "Greedy"]
    }
  ]
  }
};

export default companyData;
