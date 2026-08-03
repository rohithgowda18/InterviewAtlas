import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "netsuite",
  name: "Netsuite",
  description: "Solve curated LeetCode questions asked in Netsuite interviews.",
  topics: ["Array", "Database", "Sorting"],
  roadmaps: {
    all: [
    {
      id: "netsuite_employee_bonus",
      difficulty: "Easy",
      title: "Employee Bonus",
      frequency: 100,
      link: "https://leetcode.com/problems/employee-bonus",
      topics: ["Database"]
    },
    {
      id: "netsuite_average_salary_excluding_the_minimum_and_maximum_salary",
      difficulty: "Easy",
      title: "Average Salary Excluding the Minimum and Maximum Salary",
      frequency: 100,
      link: "https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary",
      topics: ["Array", "Sorting"]
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
      id: "netsuite_average_salary_excluding_the_minimum_and_maximum_salary",
      difficulty: "Easy",
      title: "Average Salary Excluding the Minimum and Maximum Salary",
      frequency: 100,
      link: "https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary",
      topics: ["Array", "Sorting"]
    },
    {
      id: "netsuite_employee_bonus",
      difficulty: "Easy",
      title: "Employee Bonus",
      frequency: 100,
      link: "https://leetcode.com/problems/employee-bonus",
      topics: ["Database"]
    }
  ]
  }
};

export default companyData;
