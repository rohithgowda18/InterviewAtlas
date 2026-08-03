import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "clari",
  name: "Clari",
  description: "Solve curated LeetCode questions asked in Clari interviews.",
  topics: ["Array", "Binary Search Tree", "Binary Tree", "Database", "Dynamic Programming", "Hash Table", "Math", "Tree"],
  roadmaps: {
    all: [
    {
      id: "clari_create_binary_tree_from_descriptions",
      difficulty: "Medium",
      title: "Create Binary Tree From Descriptions",
      frequency: 100,
      link: "https://leetcode.com/problems/create-binary-tree-from-descriptions",
      topics: ["Array", "Hash Table", "Tree", "Binary Tree"]
    },
    {
      id: "clari_group_employees_of_the_same_salary",
      difficulty: "Medium",
      title: "Group Employees of the Same Salary",
      frequency: 100,
      link: "https://leetcode.com/problems/group-employees-of-the-same-salary",
      topics: ["Database"]
    },
    {
      id: "clari_unique_binary_search_trees",
      difficulty: "Medium",
      title: "Unique Binary Search Trees",
      frequency: 81.1,
      link: "https://leetcode.com/problems/unique-binary-search-trees",
      topics: ["Math", "Dynamic Programming", "Tree", "Binary Search Tree", "Binary Tree"]
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
      id: "clari_unique_binary_search_trees",
      difficulty: "Medium",
      title: "Unique Binary Search Trees",
      frequency: 100,
      link: "https://leetcode.com/problems/unique-binary-search-trees",
      topics: ["Math", "Dynamic Programming", "Tree", "Binary Search Tree", "Binary Tree"]
    },
    {
      id: "clari_create_binary_tree_from_descriptions",
      difficulty: "Medium",
      title: "Create Binary Tree From Descriptions",
      frequency: 90.1,
      link: "https://leetcode.com/problems/create-binary-tree-from-descriptions",
      topics: ["Array", "Hash Table", "Tree", "Binary Tree"]
    },
    {
      id: "clari_group_employees_of_the_same_salary",
      difficulty: "Medium",
      title: "Group Employees of the Same Salary",
      frequency: 90.1,
      link: "https://leetcode.com/problems/group-employees-of-the-same-salary",
      topics: ["Database"]
    }
  ]
  }
};

export default companyData;
