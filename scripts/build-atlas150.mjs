import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const V3_DIR = path.join(ROOT, "generated-v3");

function evalTSFile(filePath, varName) {
  const raw = fs.readFileSync(filePath, "utf8");
  const stripped = raw
    .replace(/^import\s+.*?;?\s*\n/gm, "")
    .replace(/export\s+const\s+(\w+)[^=]*=/g, "const $1 =")
    .replace(/export\s+default\s+[^;]+;?/g, "")
    .replace(/\s+as\s+const/g, "");
  return new Function(`${stripped}; return ${varName};`)();
}

const questionsV3 = evalTSFile(path.join(V3_DIR, "questions.ts"), "questions");
const questionMapV3 = evalTSFile(path.join(V3_DIR, "questionMap.ts"), "questionMap");
const topicsV3 = evalTSFile(path.join(V3_DIR, "topics.ts"), "topics");

const companyFilesDir = path.join(V3_DIR, "companies");
const companyFiles = fs.readdirSync(companyFilesDir).filter((f) => f.endsWith(".ts"));

console.log(`Loaded ${companyFiles.length} modular company files from generated-v3`);

// Map questionId -> Set of company slugs
const questionCompanyMap = new Map();

for (const file of companyFiles) {
  const slug = file.replace(".ts", "");
  const companyData = evalTSFile(path.join(companyFilesDir, file), "companyData");
  if (companyData && companyData.questionIds) {
    for (const qId of companyData.questionIds) {
      if (!questionCompanyMap.has(qId)) {
        questionCompanyMap.set(qId, new Set());
      }
      questionCompanyMap.get(qId).add(slug);
    }
  }
}

const topicMap = new Map(topicsV3.map((t) => [t.id, t.name]));

// Deterministic ranking: companyCount desc -> title asc
const rankedList = Array.from(questionCompanyMap.entries())
  .map(([qId, companySet]) => {
    const qObj = questionMapV3[qId];
    if (!qObj) return null;
    const companySlugs = Array.from(companySet).sort();
    return {
      id: qId,
      title: qObj.title,
      difficulty: qObj.difficulty,
      link: qObj.link,
      topics: qObj.topicIds.map((tid) => topicMap.get(tid) || "").filter(Boolean),
      companyCount: companySlugs.length,
      companies: companySlugs,
    };
  })
  .filter(Boolean)
  .sort((a, b) => {
    if (b.companyCount !== a.companyCount) {
      return b.companyCount - a.companyCount;
    }
    return a.title.localeCompare(b.title);
  });

console.log(`Computed occurrence ranking for ${rankedList.length} unique questions.`);
console.log(`\nTop 5 Questions across all 470 companies:`);
rankedList.slice(0, 5).forEach((item, index) => {
  console.log(`#${index + 1}: ${item.title} -> ${item.companyCount} companies`);
});

// Output top 150 dataset
const top150Data = rankedList.slice(0, 150).map((q, rankIndex) => {
  const rank = rankIndex + 1;
  let essentialBadge = "★★ Recommended";
  if (rank <= 25) essentialBadge = "★★★★★ Must Know";
  else if (rank <= 50) essentialBadge = "★★★★ Essential";
  else if (rank <= 100) essentialBadge = "★★★ Highly Recommended";

  return {
    rank,
    id: q.id,
    title: q.title,
    difficulty: q.difficulty,
    link: q.link,
    topics: q.topics,
    companyCount: q.companyCount,
    essentialBadge,
    companies: q.companies,
  };
});

const outputCode = `// generated-v3/atlas150.ts
/**
 * Interview Atlas 150 Core Dataset
 * Top 150 most asked questions ranked across all 470+ companies
 * Derived from generated-v3 normalized architecture
 */

export interface Atlas150Question {
  rank: number;
  id: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  link: string;
  topics: string[];
  companyCount: number;
  essentialBadge: string;
  companies: string[];
}

export const atlas150Data: readonly Atlas150Question[] = ${JSON.stringify(top150Data, null, 2)};

export default atlas150Data;
`;

fs.writeFileSync(path.join(V3_DIR, "atlas150.ts"), outputCode);
console.log(`Successfully generated generated-v3/atlas150.ts containing Top 150 questions.`);
