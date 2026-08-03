import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "riot-games",
  name: "Riot Games",
  description: "Solve curated LeetCode questions asked in Riot Games interviews.",
  topics: ["Array", "Backtracking", "Counting", "Hash Table", "Matrix", "Simulation", "Sorting", "String"],
  roadmaps: {
    all: [
    {
      id: "riot-games_teemo_attacking",
      difficulty: "Easy",
      title: "Teemo Attacking",
      frequency: 100,
      link: "https://leetcode.com/problems/teemo-attacking",
      topics: ["Array", "Simulation"]
    },
    {
      id: "riot-games_sudoku_solver",
      difficulty: "Hard",
      title: "Sudoku Solver",
      frequency: 71.5,
      link: "https://leetcode.com/problems/sudoku-solver",
      topics: ["Array", "Hash Table", "Backtracking", "Matrix"]
    },
    {
      id: "riot-games_better_compression_of_string",
      difficulty: "Medium",
      title: "Better Compression of String",
      frequency: 71.5,
      link: "https://leetcode.com/problems/better-compression-of-string",
      topics: ["Hash Table", "String", "Sorting", "Counting"]
    },
    {
      id: "riot-games_game_of_life",
      difficulty: "Medium",
      title: "Game of Life",
      frequency: 63.6,
      link: "https://leetcode.com/problems/game-of-life",
      topics: ["Array", "Matrix", "Simulation"]
    },
    {
      id: "riot-games_valid_sudoku",
      difficulty: "Medium",
      title: "Valid Sudoku",
      frequency: 63.6,
      link: "https://leetcode.com/problems/valid-sudoku",
      topics: ["Array", "Hash Table", "Matrix"]
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
      id: "riot-games_teemo_attacking",
      difficulty: "Easy",
      title: "Teemo Attacking",
      frequency: 100,
      link: "https://leetcode.com/problems/teemo-attacking",
      topics: ["Array", "Simulation"]
    },
    {
      id: "riot-games_sudoku_solver",
      difficulty: "Hard",
      title: "Sudoku Solver",
      frequency: 93.1,
      link: "https://leetcode.com/problems/sudoku-solver",
      topics: ["Array", "Hash Table", "Backtracking", "Matrix"]
    },
    {
      id: "riot-games_better_compression_of_string",
      difficulty: "Medium",
      title: "Better Compression of String",
      frequency: 93.1,
      link: "https://leetcode.com/problems/better-compression-of-string",
      topics: ["Hash Table", "String", "Sorting", "Counting"]
    },
    {
      id: "riot-games_game_of_life",
      difficulty: "Medium",
      title: "Game of Life",
      frequency: 83.4,
      link: "https://leetcode.com/problems/game-of-life",
      topics: ["Array", "Matrix", "Simulation"]
    }
  ]
  }
};

export default companyData;
