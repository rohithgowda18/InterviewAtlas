import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "toptal",
  name: "Toptal",
  description: "Solve curated LeetCode questions asked in Toptal interviews.",
  topics: ["Brainteaser", "Dynamic Programming", "Math", "Probability and Statistics", "String"],
  roadmaps: {
    all: [
    {
      id: "toptal_string_compression_ii",
      difficulty: "Hard",
      title: "String Compression II",
      frequency: 100,
      link: "https://leetcode.com/problems/string-compression-ii",
      topics: ["String", "Dynamic Programming"]
    },
    {
      id: "toptal_airplane_seat_assignment_probability",
      difficulty: "Medium",
      title: "Airplane Seat Assignment Probability",
      frequency: 68.7,
      link: "https://leetcode.com/problems/airplane-seat-assignment-probability",
      topics: ["Math", "Dynamic Programming", "Brainteaser", "Probability and Statistics"]
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
      id: "toptal_string_compression_ii",
      difficulty: "Hard",
      title: "String Compression II",
      frequency: 100,
      link: "https://leetcode.com/problems/string-compression-ii",
      topics: ["String", "Dynamic Programming"]
    },
    {
      id: "toptal_airplane_seat_assignment_probability",
      difficulty: "Medium",
      title: "Airplane Seat Assignment Probability",
      frequency: 100,
      link: "https://leetcode.com/problems/airplane-seat-assignment-probability",
      topics: ["Math", "Dynamic Programming", "Brainteaser", "Probability and Statistics"]
    }
  ]
  }
};

export default companyData;
