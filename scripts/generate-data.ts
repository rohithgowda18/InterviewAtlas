import fs from "fs";
import path from "path";
import Papa from "papaparse";

const COMPANIES_DIR = path.join(process.cwd(), "companies");
const OUTPUT_DIR = path.join(process.cwd(), "generated");
const COMPANIES_OUT_DIR = path.join(OUTPUT_DIR, "companies");

// Ensure output dirs exist
if (!fs.existsSync(COMPANIES_OUT_DIR)) {
  fs.mkdirSync(COMPANIES_OUT_DIR, { recursive: true });
}

function getCompanySlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function escapeString(str: string): string {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r');
}

const fileMap = {
  "1. Thirty Days.csv": "thirtyDays",
  "2. Three Months.csv": "threeMonths",
  "3. Six Months.csv": "sixMonths",
  "4. More Than Six Months.csv": "moreThanSixMonths",
  "5. All.csv": "all",
} as const;

interface Question {
  id: string;
  difficulty: "Easy" | "Medium" | "Hard";
  title: string;
  frequency: number;
  link: string;
  topics: string[];
}

let totalCompanies = 0;
let totalQuestionsCount = 0;
const topicsSet = new Set<string>();
const searchIndexItems: { id: string; title: string; companySlug: string }[] = [];

function parseCSVFile(filePath: string, companySlug: string): Question[] {
  if (!fs.existsSync(filePath)) return [];

  const csvContent = fs.readFileSync(filePath, "utf-8");
  const parsed = Papa.parse<any>(csvContent, {
    header: true,
    skipEmptyLines: true,
  });

  const questions: Question[] = [];
  const titlesSet = new Set<string>();

  (parsed.data || []).forEach((row: any) => {
    const title = row.Title ? String(row.Title).trim() : "";
    const difficultyRaw = row.Difficulty ? String(row.Difficulty).trim().toUpperCase() : "";

    if (!title || !difficultyRaw) {
      return;
    }

    let difficulty: "Easy" | "Medium" | "Hard" = "Easy";
    if (difficultyRaw === "MEDIUM" || difficultyRaw === "MED") {
      difficulty = "Medium";
    } else if (difficultyRaw === "HARD") {
      difficulty = "Hard";
    }

    const frequency = parseFloat(row.Frequency) || 0;
    
    const link = String(row.Link || "").trim();

    let topics: string[] = [];
    const rawTopics = row.Topics || "";
    if (rawTopics) {
      topics = String(rawTopics)
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
      topics.forEach((t) => topicsSet.add(t));
    }

    const id = `${companySlug}_${title.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`;

    if (titlesSet.has(title)) {
      return; // Deduplicate questions per sheet
    }
    titlesSet.add(title);

    questions.push({
      id,
      difficulty,
      title,
      frequency,
      link,
      topics,
    });
  });

  return questions;
}

function generateQuestionArrayStr(questions: Question[]): string {
  return `[\n${questions
    .map(
      (q) => `    {
      id: "${escapeString(q.id)}",
      difficulty: "${q.difficulty}",
      title: "${escapeString(q.title)}",
      frequency: ${q.frequency},
      link: "${escapeString(q.link)}",
      topics: [${q.topics.map((t) => `"${escapeString(t)}"`).join(", ")}]
    }`
    )
    .join(",\n")}\n  ]`;
}

function generate() {
  if (!fs.existsSync(COMPANIES_DIR)) {
    console.error(`Companies directory not found at ${COMPANIES_DIR}`);
    process.exit(1);
  }

  const folders = fs
    .readdirSync(COMPANIES_DIR)
    .filter((file) => {
      const fullPath = path.join(COMPANIES_DIR, file);
      return fs.statSync(fullPath).isDirectory();
    });

  const companiesList: any[] = [];
  let tsFilesGeneratedCount = 0;

  folders.forEach((folder) => {
    const slug = getCompanySlug(folder);
    const companyFolder = path.join(COMPANIES_DIR, folder);

    const roadmaps = {
      all: [] as Question[],
      thirtyDays: [] as Question[],
      threeMonths: [] as Question[],
      sixMonths: [] as Question[],
      moreThanSixMonths: [] as Question[],
    };

    Object.entries(fileMap).forEach(([fileName, key]) => {
      const filePath = path.join(companyFolder, fileName);
      roadmaps[key] = parseCSVFile(filePath, slug);
    });

    // Compute difficulty counts
    const difficultyCounts = { Easy: 0, Medium: 0, Hard: 0 };
    const companyTopicsSet = new Set<string>();
    roadmaps.all.forEach((q) => {
      difficultyCounts[q.difficulty]++;
      q.topics.forEach((t) => companyTopicsSet.add(t));
      searchIndexItems.push({
        id: q.id,
        title: q.title,
        companySlug: slug,
      });
    });
    const companyTopicsList = Array.from(companyTopicsSet).sort();

    // Write individual company TS file (e.g. generated/companies/google.ts)
    const companyContent = `import { CompanyData } from "@/types";

export const companyData: CompanyData = {
  slug: "${escapeString(slug)}",
  name: "${escapeString(folder)}",
  description: "Solve curated LeetCode questions asked in ${escapeString(folder)} interviews.",
  topics: [${companyTopicsList.map((t) => `"${escapeString(t)}"`).join(", ")}],
  roadmaps: {
    all: ${generateQuestionArrayStr(roadmaps.all)},
    thirtyDays: ${generateQuestionArrayStr(roadmaps.thirtyDays)},
    threeMonths: ${generateQuestionArrayStr(roadmaps.threeMonths)},
    sixMonths: ${generateQuestionArrayStr(roadmaps.sixMonths)},
    moreThanSixMonths: ${generateQuestionArrayStr(roadmaps.moreThanSixMonths)}
  }
};

export default companyData;
`;
    fs.writeFileSync(path.join(COMPANIES_OUT_DIR, `${slug}.ts`), companyContent);
    tsFilesGeneratedCount++;

    // Add company summary metadata
    companiesList.push({
      name: folder,
      slug,
      totalQuestions: roadmaps.all.length,
      difficultyCounts,
      description: `Solve ${roadmaps.all.length} curated Leetcode questions asked in ${folder} interviews.`,
    });

    totalQuestionsCount += roadmaps.all.length;
    totalCompanies++;
  });

  // Sort alphabetically
  companiesList.sort((a, b) => a.name.localeCompare(b.name));

  // Write companies.ts
  const companiesContent = `import { Company } from "@/types";

export const companies: readonly Company[] = [
${companiesList
  .map(
    (c) => `  {
    name: "${escapeString(c.name)}",
    slug: "${escapeString(c.slug)}",
    totalQuestions: ${c.totalQuestions},
    difficultyCounts: {
      Easy: ${c.difficultyCounts.Easy},
      Medium: ${c.difficultyCounts.Medium},
      Hard: ${c.difficultyCounts.Hard}
    },
    description: "${escapeString(c.description)}"
  }`
  )
  .join(",\n")}
];
export default companies;
`;
  fs.writeFileSync(path.join(OUTPUT_DIR, "companies.ts"), companiesContent);
  tsFilesGeneratedCount++;

  // Write topics.ts
  const topicsContent = `export const topics: readonly string[] = [
${Array.from(topicsSet)
  .sort()
  .map((t) => `  "${escapeString(t)}"`)
  .join(",\n")}
];
export default topics;
`;
  fs.writeFileSync(path.join(OUTPUT_DIR, "topics.ts"), topicsContent);
  tsFilesGeneratedCount++;

  // Write metadata.ts
  const metadataContent = `import { Metadata } from "@/types";

export const metadata: Metadata = {
  totalCompanies: ${totalCompanies},
  totalQuestions: ${totalQuestionsCount},
  topics: ${topicsSet.size}
};
export default metadata;
`;
  fs.writeFileSync(path.join(OUTPUT_DIR, "metadata.ts"), metadataContent);
  tsFilesGeneratedCount++;

  // Write search-index.ts
  const searchIndexContent = `export interface SearchIndexItem {
  readonly id: string;
  readonly title: string;
  readonly companySlug: string;
}

export const searchIndex: readonly SearchIndexItem[] = [
${searchIndexItems
  .map(
    (item) => `  {
    id: "${escapeString(item.id)}",
    title: "${escapeString(item.title)}",
    companySlug: "${escapeString(item.companySlug)}"
  }`
  )
  .join(",\n")}
];
export default searchIndex;
`;
  fs.writeFileSync(path.join(OUTPUT_DIR, "search-index.ts"), searchIndexContent);
  tsFilesGeneratedCount++;

  console.log(`\n======================================`);
  console.log(`Generated ${tsFilesGeneratedCount} TypeScript files`);
  console.log(`Parsed ${totalCompanies} companies`);
  console.log(`Total questions compiled: ${totalQuestionsCount}`);
  console.log(`Completed successfully`);
  console.log(`======================================\n`);
}

generate();
