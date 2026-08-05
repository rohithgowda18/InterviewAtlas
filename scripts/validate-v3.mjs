/**
 * validate-v3.mjs  (Strict & Comprehensive V3 Validation Suite)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const V3_DIR = path.join(ROOT, "generated-v3");
const V2_DIR = path.join(ROOT, "generated-v2");

console.log("=== V3 Hardened Validation & Integrity Suite ===\n");

function evalTSFile(filePath, varName) {
  const raw = fs.readFileSync(filePath, "utf8");
  const stripped = raw
    .replace(/^import\s+.*?;?\s*\n/gm, "")
    .replace(/export\s+const\s+(\w+)[^=]*=/g, "const $1 =")
    .replace(/export\s+default\s+[^;]+;?/g, "")
    .replace(/\s+as\s+const/g, "");
  // eslint-disable-next-line no-new-func
  return new Function(`${stripped}; return ${varName};`)();
}

let failureCount = 0;
function assert(cond, msg) {
  if (!cond) {
    console.error(`❌ STRICT FAIL: ${msg}`);
    failureCount++;
  } else {
    console.log(`✓ PASS: ${msg}`);
  }
}

// 1. Load Datasets
const questionsV3 = evalTSFile(path.join(V3_DIR, "questions.ts"), "questions");
const questionMapV3 = evalTSFile(path.join(V3_DIR, "questionMap.ts"), "questionMap");
const topicsV3 = evalTSFile(path.join(V3_DIR, "topics.ts"), "topics");
const topicQuestionMapV3 = evalTSFile(path.join(V3_DIR, "topicQuestionMap.ts"), "topicQuestionMap");
const difficultyMapV3 = evalTSFile(path.join(V3_DIR, "difficultyMap.ts"), "difficultyMap");
const searchIndexV3 = evalTSFile(path.join(V3_DIR, "searchIndex.ts"), "searchIndex");
const companyStatsV3 = evalTSFile(path.join(V3_DIR, "companyStats.ts"), "companyStats");
const metadataV3 = evalTSFile(path.join(V3_DIR, "metadata.ts"), "metadata");

const metadataV2 = evalTSFile(path.join(V2_DIR, "metadata.ts"), "metadata");

console.log("--- 1. Equivalence & Count Checks ---");
assert(questionsV3.length === metadataV2.totalUniqueQuestions, `Question count (${questionsV3.length}) matches V2`);
assert(Object.keys(companyStatsV3).length === metadataV2.totalCompanies, `Company count (${metadataV2.totalCompanies}) matches V2`);
assert(topicsV3.length === metadataV2.totalTopics, `Topic count (${topicsV3.length}) matches V2`);

console.log("\n--- 2. Duplicate ID & Hash Collision Checks ---");
const questionIdsSet = new Set();
let dupQIds = 0;
for (const q of questionsV3) {
  if (questionIdsSet.has(q.id)) dupQIds++;
  questionIdsSet.add(q.id);
}
assert(dupQIds === 0, "No duplicate Question IDs or hash collisions");

const topicIdsSet = new Set();
let dupTIds = 0;
for (const t of topicsV3) {
  if (topicIdsSet.has(t.id)) dupTIds++;
  topicIdsSet.add(t.id);
}
assert(dupTIds === 0, "No duplicate Topic IDs or hash collisions");

const companyIdsSet = new Set();
let dupCIds = 0;
for (const cId of Object.keys(companyStatsV3).map(Number)) {
  if (companyIdsSet.has(cId)) dupCIds++;
  companyIdsSet.add(cId);
}
assert(dupCIds === 0, "No duplicate Company IDs or hash collisions");

console.log("\n--- 3. Referential Integrity & Orphan Checks ---");
// Check Question Topic IDs
const referencedTopicIds = new Set();
let invalidQuestionTopicRefs = 0;
for (const q of questionsV3) {
  for (const tId of q.topicIds) {
    if (!topicIdsSet.has(tId)) invalidQuestionTopicRefs++;
    referencedTopicIds.add(tId);
  }
}
assert(invalidQuestionTopicRefs === 0, "All question topicIds reference valid Topic IDs");

// Check Orphan Topics
let orphanTopicCount = 0;
for (const t of topicsV3) {
  if (!referencedTopicIds.has(t.id)) {
    orphanTopicCount++;
    console.error(`Orphan topic detected: "${t.name}" (ID: ${t.id})`);
  }
}
assert(orphanTopicCount === 0, "No orphan topics (every topic is referenced by at least one question)");

// Check Difficulty Map Validity & Duplicates
let diffMapErrors = 0;
for (const [diff, ids] of Object.entries(difficultyMapV3)) {
  const seenInDiff = new Set();
  for (const id of ids) {
    if (!questionIdsSet.has(id) || seenInDiff.has(id)) diffMapErrors++;
    seenInDiff.add(id);
  }
}
assert(diffMapErrors === 0, "DifficultyMap contains valid Question IDs without duplicates");

// Check Search Index Entry Validity & Duplicates
let searchDupErrors = 0;
let searchInvalidErrors = 0;
for (const [token, ids] of Object.entries(searchIndexV3)) {
  const seenInToken = new Set();
  for (const id of ids) {
    if (!questionIdsSet.has(id)) searchInvalidErrors++;
    if (seenInToken.has(id)) searchDupErrors++;
    seenInToken.add(id);
  }
}
assert(searchInvalidErrors === 0, "All searchIndex question IDs are valid");
assert(searchDupErrors === 0, "No duplicate question IDs in searchIndex entries");

console.log("\n--- 4. Company Modular Files Integrity ---");
const companyFiles = fs.readdirSync(path.join(V3_DIR, "companies")).filter((f) => f.endsWith(".ts"));
assert(companyFiles.length === 470, "Generated 470 modular company files");

const referencedQuestionIds = new Set();
let invalidCompanyQRefs = 0;
let dupCompanyQRefs = 0;

for (const file of companyFiles) {
  const companyData = evalTSFile(path.join(V3_DIR, "companies", file), "companyData");
  if (!companyIdsSet.has(companyData.id)) {
    assert(false, `Company file ${file} has unregistered companyId ${companyData.id}`);
  }

  const seenInCompany = new Set();
  for (const qId of companyData.questionIds) {
    if (!questionIdsSet.has(qId)) invalidCompanyQRefs++;
    if (seenInCompany.has(qId)) dupCompanyQRefs++;
    seenInCompany.add(qId);
    referencedQuestionIds.add(qId);
  }
}
assert(invalidCompanyQRefs === 0, "All questionIds inside company files reference valid questionMap IDs");
assert(dupCompanyQRefs === 0, "No duplicate questionIds inside individual company files");

// Check Orphan Questions
let orphanQuestionCount = 0;
for (const q of questionsV3) {
  if (!referencedQuestionIds.has(q.id)) {
    orphanQuestionCount++;
  }
}
assert(orphanQuestionCount === 0, "All unique questions belong to at least one company (no orphan questions)");

console.log("\n--- 5. Metadata & Repository Integrity ---");
assert(metadataV3.totalCompanies === companyFiles.length, "Metadata totalCompanies matches company files count");
assert(metadataV3.totalUniqueQuestions === questionsV3.length, "Metadata totalUniqueQuestions matches questions count");
assert(metadataV3.totalTopics === topicsV3.length, "Metadata totalTopics matches topics count");

console.log("\n============================================================");
if (failureCount === 0) {
  console.log("  ✅ ALL STRICT VALIDATION CHECKS PASSED PERFECTLY!");
  console.log("============================================================\n");
} else {
  console.error(`  💥 STRICT VALIDATION FAILED WITH ${failureCount} ERRORS.`);
  console.log("============================================================\n");
  process.exit(1);
}
