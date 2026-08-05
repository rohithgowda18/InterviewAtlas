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
    .replace(/export\s+interface\s+[\s\S]*?\n\}/gm, "")
    .replace(/export\s+type\s+.*?;/gm, "")
    .replace(/export\s+const\s+(\w+)[^=]*=/g, "const $1 =")
    .replace(/export\s+default\s+[^;]+;?/g, "")
    .replace(/\s+as\s+const/g, "");
  return new Function(`${stripped}; return ${varName};`)();
}

console.log("=== Phase 1 Verification: Interview Atlas 150 Integrity ===");

const questionsV3 = evalTSFile(path.join(V3_DIR, "questions.ts"), "questions");
const questionMapV3 = evalTSFile(path.join(V3_DIR, "questionMap.ts"), "questionMap");
const topicsV3 = evalTSFile(path.join(V3_DIR, "topics.ts"), "topics");
const atlas150Data = evalTSFile(path.join(V3_DIR, "atlas150.ts"), "atlas150Data");

const companyFilesDir = path.join(V3_DIR, "companies");
const companyFiles = fs.readdirSync(companyFilesDir).filter((f) => f.endsWith(".ts"));

let inconsistencies = [];

// Check 1: Unique companies count per question
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

const totalUniqueQuestions = questionsV3.length;
const totalRankedQuestions = questionCompanyMap.size;

if (totalUniqueQuestions !== totalRankedQuestions) {
  inconsistencies.push(`Unique questions mismatch: V3 has ${totalUniqueQuestions}, but ranked ${totalRankedQuestions}`);
}

// Check 2: Verify Top 150 items against V3 mapping
if (atlas150Data.length !== 150) {
  inconsistencies.push(`Top 150 length mismatch: Expected 150, got ${atlas150Data.length}`);
}

const seenIds = new Set();
atlas150Data.forEach((q, idx) => {
  if (seenIds.has(q.id)) {
    inconsistencies.push(`Duplicate question ID ${q.id} in Top 150`);
  }
  seenIds.add(q.id);

  const realCompanySet = questionCompanyMap.get(q.id);
  if (!realCompanySet) {
    inconsistencies.push(`Orphan question ID ${q.id} not found in any company`);
  } else {
    if (q.companyCount !== realCompanySet.size) {
      inconsistencies.push(`Company count mismatch for ${q.title}: atlas150 has ${q.companyCount}, expected ${realCompanySet.size}`);
    }
  }

  const v3Obj = questionMapV3[q.id];
  if (!v3Obj) {
    inconsistencies.push(`Question ID ${q.id} missing from V3 questionMap`);
  } else {
    if (q.title !== v3Obj.title) inconsistencies.push(`Title mismatch for ID ${q.id}`);
    if (q.difficulty !== v3Obj.difficulty) inconsistencies.push(`Difficulty mismatch for ID ${q.id}`);
    if (q.link !== v3Obj.link) inconsistencies.push(`Link mismatch for ID ${q.id}`);
  }
});

console.log(`Total Unique Questions in V3: ${totalUniqueQuestions}`);
console.log(`Total Ranked Questions: ${totalRankedQuestions}`);
console.log(`\n--- Top 20 Questions with Company Counts ---`);
atlas150Data.slice(0, 20).forEach((q) => {
  console.log(`#${String(q.rank).padStart(2, " ")} | ${q.title.padEnd(50, " ")} | ${q.companyCount} companies`);
});

console.log("\n--- Verification Report Summary ---");
if (inconsistencies.length === 0) {
  console.log("Inconsistencies Found: NONE (0)");
  console.log("=======================================");
  console.log("  ✅ RESULT: PASS");
  console.log("=======================================");
} else {
  console.log(`Inconsistencies Found (${inconsistencies.length}):`);
  inconsistencies.forEach((err) => console.log(` - ${err}`));
  console.log("=======================================");
  console.log("  ❌ RESULT: FAIL");
  console.log("=======================================");
  process.exit(1);
}
