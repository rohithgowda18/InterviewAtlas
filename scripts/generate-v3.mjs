/**
 * generate-v3.mjs  (Hardened, Modular & Deterministic Production Generator)
 *
 * Output target: generated-v3/
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { performance } from "perf_hooks";

const startTime = performance.now();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const GENERATED_COMPANIES_DIR = path.join(ROOT, "generated", "companies");
const GENERATED_COMPANIES_LIST = path.join(ROOT, "generated", "companies.ts");
const OUT_DIR = path.join(ROOT, "generated-v3");
const OUT_COMPANIES_DIR = path.join(OUT_DIR, "companies");
const OUT_REPOS_DIR = path.join(OUT_DIR, "repositories");

// ============================================================
// SECTION 1: CONSTANTS & ENUMS
// ============================================================
const TIMEFRAME = Object.freeze({
  all: 0,
  thirtyDays: 1,
  threeMonths: 2,
  sixMonths: 3,
  moreThanSixMonths: 4,
});

// ============================================================
// SECTION 2: STABLE ID GENERATION (FNV-1a 32-bit Hash)
// ============================================================
function fnv1a32(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
    h = h >>> 0;
  }
  return h || 1;
}

function makeStableId(str, usedIds, contextInfo = "") {
  const norm = str.toLowerCase().trim();
  let candidate = fnv1a32(norm);
  let attempt = 0;
  while (usedIds.has(candidate)) {
    attempt++;
    const altStr = `${norm}__collision_${attempt}`;
    candidate = fnv1a32(altStr);
    console.warn(`⚠ Hash collision detected for "${str}" [${contextInfo}], resolved to ${candidate} on attempt ${attempt}`);
  }
  usedIds.add(candidate);
  return candidate;
}

// ============================================================
// SECTION 3: PARSING UTILITIES & DIAGNOSTICS
// ============================================================
function stripTS(raw) {
  return raw
    .replace(/^import\s+.*?;?\s*\n/gm, "")
    .replace(/:\s*CompanyData\b/g, "")
    .replace(/:\s*Company\b/g, "")
    .replace(/:\s*Metadata\b/g, "")
    .replace(/:\s*readonly\s+\S+(?:\[\])?/g, "")
    .replace(/\s+as\s+const/g, "");
}

function parseCompanyFile(filePath) {
  const fileName = path.basename(filePath);
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const stripped = stripTS(raw)
      .replace(/export\s+const\s+companyData/, "const companyData")
      .replace(/export\s+default\s+companyData;?/, "");
    // eslint-disable-next-line no-new-func
    return new Function(`${stripped}; return companyData;`)();
  } catch (err) {
    throw new Error(`Failed to parse company file "${fileName}" at ${filePath}: ${err.message}`);
  }
}

function parseCompaniesList(filePath) {
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const stripped = stripTS(raw)
      .replace(/:\s*readonly\s+\w+\[\]/g, "")
      .replace(/:\s*\w+\[\]/g, "")
      .replace(/export\s+const\s+companies/, "const companies")
      .replace(/export\s+default\s+companies;?/, "");
    // eslint-disable-next-line no-new-func
    return new Function(`${stripped}; return companies;`)();
  } catch (err) {
    throw new Error(`Failed to parse company list at ${filePath}: ${err.message}`);
  }
}

function normalizeLink(l) {
  return l.toLowerCase().replace(/\/$/, "").trim();
}
function normalizeTitle(t) {
  return t.toLowerCase().trim();
}
function dedupKey(q) {
  return `${normalizeTitle(q.title)}||${normalizeLink(q.link)}`;
}

// Tokenize strings into alphanumeric lower-case search tokens
function tokenize(text) {
  if (!text) return [];
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((token) => token.length > 0);
}

// ============================================================
// SECTION 4: MAIN GENERATION FLOW
// ============================================================
console.log("=== Interview Atlas — Hardened V3 Generator ===\n");

// 1. Read input sources deterministically
const companiesList = parseCompaniesList(GENERATED_COMPANIES_LIST);
// Sort list by slug for deterministic execution
companiesList.sort((a, b) => a.slug.localeCompare(b.slug));

const companyFiles = fs
  .readdirSync(GENERATED_COMPANIES_DIR)
  .filter((f) => f.endsWith(".ts"))
  .sort();

const allCompanyData = [];
for (const file of companyFiles) {
  allCompanyData.push(parseCompanyFile(path.join(GENERATED_COMPANIES_DIR, file)));
}
allCompanyData.sort((a, b) => a.slug.localeCompare(b.slug));

// 2. Topic Generation (Sorted alphabetically for deterministic IDs)
const allTopicNames = new Set();
for (const data of allCompanyData) {
  for (const tfKey of Object.keys(data.roadmaps || {})) {
    for (const q of data.roadmaps[tfKey] || []) {
      for (const t of q.topics || []) allTopicNames.add(t);
    }
  }
}
const topicNamesSorted = Array.from(allTopicNames).sort();
const topicIdSet = new Set();
const topicRegistry = new Map(); // name -> { id, name, questionCount }

for (const name of topicNamesSorted) {
  const id = makeStableId(`topic:${name}`, topicIdSet, `topic:${name}`);
  topicRegistry.set(name, { id, name, questionCount: 0 });
}

// 3. Question Generation & Deduplication
const questionIdSet = new Set();
const uniqueQuestionsMap = new Map(); // dedupKey -> Question
let rawQuestionCountV1 = 0;

function processQuestion(q) {
  const key = dedupKey(q);
  const qTopicIds = (q.topics || [])
    .map((t) => topicRegistry.get(t)?.id)
    .filter(Boolean);

  if (!uniqueQuestionsMap.has(key)) {
    const id = makeStableId(`question:${normalizeLink(q.link)}`, questionIdSet, `question:${q.title}`);
    uniqueQuestionsMap.set(key, {
      id,
      title: q.title,
      difficulty: q.difficulty,
      topicIds: Array.from(new Set(qTopicIds)).sort((a, b) => a - b),
      link: q.link,
    });
  } else {
    // Merge any new topicIds from secondary occurrences
    const existing = uniqueQuestionsMap.get(key);
    const merged = Array.from(new Set([...existing.topicIds, ...qTopicIds])).sort((a, b) => a - b);
    existing.topicIds = merged;
  }

  for (const t of q.topics || []) {
    if (topicRegistry.has(t)) topicRegistry.get(t).questionCount++;
  }
}

for (const data of allCompanyData) {
  const questions = data.roadmaps.all || [];
  rawQuestionCountV1 += questions.length;

  for (const q of questions) {
    processQuestion(q);
  }

  // Scan remaining timeframes
  for (const tf of ["thirtyDays", "threeMonths", "sixMonths", "moreThanSixMonths"]) {
    for (const q of data.roadmaps[tf] || []) {
      processQuestion(q);
    }
  }
}

// Sort unique questions by ID deterministically
const uniqueQuestions = Array.from(uniqueQuestionsMap.values()).sort((a, b) => a.id - b.id);

// 4. Company Generation
const companyIdSet = new Set();
const companyRegistry = new Map(); // slug -> { id, slug, name }

for (const c of companiesList) {
  const id = makeStableId(`company:${c.slug}`, companyIdSet, `company:${c.slug}`);
  companyRegistry.set(c.slug, {
    id,
    slug: c.slug,
    name: c.name,
  });
}

// 5. Build Maps (questionMap, difficultyMap, topicQuestionMap)
const questionMap = {};
const difficultyMap = { Easy: [], Medium: [], Hard: [] };
const topicQuestionMap = {};

for (const q of uniqueQuestions) {
  questionMap[q.id] = q;
  difficultyMap[q.difficulty].push(q.id);

  for (const tId of q.topicIds) {
    if (!topicQuestionMap[tId]) topicQuestionMap[tId] = [];
    topicQuestionMap[tId].push(q.id);
  }
}

// Sort difficultyMap arrays deterministically
difficultyMap.Easy.sort((a, b) => a - b);
difficultyMap.Medium.sort((a, b) => a - b);
difficultyMap.Hard.sort((a, b) => a - b);

// Sort topicQuestionMap arrays deterministically
for (const tId of Object.keys(topicQuestionMap)) {
  topicQuestionMap[tId].sort((a, b) => a - b);
}

// 6. Build Expanded Search Index (title, company name/slug, topic name, difficulty)
const searchIndexTemp = new Map(); // token -> Set<number>

function indexToken(token, qId) {
  if (!token || token.length === 0) return;
  if (!searchIndexTemp.has(token)) {
    searchIndexTemp.set(token, new Set());
  }
  searchIndexTemp.get(token).add(qId);
}

// Index Question Titles & Difficulties
for (const q of uniqueQuestions) {
  for (const t of tokenize(q.title)) {
    indexToken(t, q.id);
  }
  indexToken(q.difficulty.toLowerCase(), q.id);
}

// Index Topics & Company Associations
for (const [tName, tObj] of topicRegistry.entries()) {
  const qIds = topicQuestionMap[tObj.id] || [];
  const tTokens = tokenize(tName);
  for (const token of tTokens) {
    for (const qId of qIds) {
      indexToken(token, qId);
    }
  }
}

for (const data of allCompanyData) {
  const cTokens = [...tokenize(data.name), ...tokenize(data.slug)];
  const qSet = new Set();
  for (const q of data.roadmaps.all || []) {
    const qEntry = uniqueQuestionsMap.get(dedupKey(q));
    if (qEntry) qSet.add(qEntry.id);
  }
  for (const token of cTokens) {
    for (const qId of qSet) {
      indexToken(token, qId);
    }
  }
}

// Format searchIndex deterministically
const sortedTokens = Array.from(searchIndexTemp.keys()).sort();
const searchIndex = {};
for (const token of sortedTokens) {
  searchIndex[token] = Array.from(searchIndexTemp.get(token)).sort((a, b) => a - b);
}

// ============================================================
// SECTION 5: FILE GENERATION & DETERMINISTIC OUTPUT
// ============================================================
if (fs.existsSync(OUT_DIR)) {
  fs.rmSync(OUT_DIR, { recursive: true });
}
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.mkdirSync(OUT_COMPANIES_DIR, { recursive: true });
fs.mkdirSync(OUT_REPOS_DIR, { recursive: true });

// Build 470 Company Files & companyStats.ts
const companyStatsMap = {};

for (const data of allCompanyData) {
  const companyInfo = companyRegistry.get(data.slug);
  if (!companyInfo) continue;

  const questionIdsSet = new Set();
  const questionIds = [];
  const frequencyMap = {};
  const topicCountsInCompany = {};

  let easyCount = 0;
  let mediumCount = 0;
  let hardCount = 0;

  for (const q of data.roadmaps.all || []) {
    const qEntry = uniqueQuestionsMap.get(dedupKey(q));
    if (!qEntry) continue;

    if (!questionIdsSet.has(qEntry.id)) {
      questionIdsSet.add(qEntry.id);
      questionIds.push(qEntry.id);
    }

    if (q.difficulty === "Easy") easyCount++;
    else if (q.difficulty === "Medium") mediumCount++;
    else if (q.difficulty === "Hard") hardCount++;

    for (const tId of qEntry.topicIds) {
      topicCountsInCompany[tId] = (topicCountsInCompany[tId] || 0) + 1;
    }

    frequencyMap[qEntry.id] = {
      frequency: q.frequency,
      timeframe: TIMEFRAME.all,
    };
  }

  for (const [tfKey, tfInt] of Object.entries(TIMEFRAME)) {
    if (tfKey === "all") continue;
    for (const q of data.roadmaps[tfKey] || []) {
      const qEntry = uniqueQuestionsMap.get(dedupKey(q));
      if (!qEntry) continue;

      if (!questionIdsSet.has(qEntry.id)) {
        questionIdsSet.add(qEntry.id);
        questionIds.push(qEntry.id);
      }

      if (!frequencyMap[qEntry.id]) {
        frequencyMap[qEntry.id] = {
          frequency: q.frequency,
          timeframe: tfInt,
        };
      }
    }
  }

  // Sort frequencyMap keys deterministically
  const sortedFreqKeys = Object.keys(frequencyMap).map(Number).sort((a, b) => a - b);
  const sortedFrequencyMap = {};
  for (const key of sortedFreqKeys) {
    sortedFrequencyMap[key] = frequencyMap[key];
  }

  const topTopics = Object.entries(topicCountsInCompany)
    .map(([tId, count]) => ({ topicId: Number(tId), count }))
    .sort((a, b) => b.count - a.count || a.topicId - b.topicId);

  const companyFileContent = `// generated-v3/companies/${data.slug}.ts
/**
 * Company Data: ${data.name}
 * Imports: Loaded lazily by CompanyRepository.getCompanyBySlug("${data.slug}")
 * Complexity: O(1) file module evaluation
 */
import type { CompanyFile } from "../types";

export const companyData: CompanyFile = {
  id: ${companyInfo.id},
  slug: ${JSON.stringify(data.slug)},
  name: ${JSON.stringify(data.name)},
  totalQuestions: ${questionIds.length},
  easy: ${easyCount},
  medium: ${mediumCount},
  hard: ${hardCount},
  questionIds: ${JSON.stringify(questionIds)},
  frequencyMap: ${JSON.stringify(sortedFrequencyMap, null, 2)}
};

export default companyData;
`;
  fs.writeFileSync(path.join(OUT_COMPANIES_DIR, `${data.slug}.ts`), companyFileContent);

  companyStatsMap[companyInfo.id] = {
    id: companyInfo.id,
    totalQuestions: questionIds.length,
    easy: easyCount,
    medium: mediumCount,
    hard: hardCount,
    topTopics,
  };
}

// Sort companyStatsMap keys deterministically
const sortedCompanyStatKeys = Object.keys(companyStatsMap).map(Number).sort((a, b) => a - b);
const sortedCompanyStatsMap = {};
for (const key of sortedCompanyStatKeys) {
  sortedCompanyStatsMap[key] = companyStatsMap[key];
}

// Write Core Files

// types.ts
const typesContent = `// generated-v3/types.ts
/**
 * Data Architecture Type Definitions
 * Purpose: Central interface contract for V3 entities and repositories.
 */

export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Question {
  id: number;
  title: string;
  difficulty: Difficulty;
  topicIds: number[];
  link: string;
}

export interface Topic {
  id: number;
  name: string;
  questionCount: number;
}

export interface CompanyFile {
  id: number;
  slug: string;
  name: string;
  totalQuestions: number;
  easy: number;
  medium: number;
  hard: number;
  questionIds: number[];
  frequencyMap: {
    [questionId: number]: {
      frequency: number;
      timeframe: 0 | 1 | 2 | 3 | 4;
    };
  };
}

export interface CompanyStat {
  id: number;
  totalQuestions: number;
  easy: number;
  medium: number;
  hard: number;
  topTopics: {
    topicId: number;
    count: number;
  }[];
}
`;
fs.writeFileSync(path.join(OUT_DIR, "types.ts"), typesContent);

// questions.ts
const questionsContent = `// generated-v3/questions.ts
/**
 * Unique Questions Registry (${uniqueQuestions.length.toLocaleString()} items)
 * Purpose: Canonical normalized store of all unique LeetCode questions.
 */
import type { Question } from "./types";

export const questions: readonly Question[] = ${JSON.stringify(uniqueQuestions, null, 2)};
export default questions;
`;
fs.writeFileSync(path.join(OUT_DIR, "questions.ts"), questionsContent);

// questionMap.ts
const questionMapContent = `// generated-v3/questionMap.ts
/**
 * O(1) Question Map Lookup ({ [id: number]: Question })
 * Purpose: Provides constant-time question resolution by ID.
 */
import type { Question } from "./types";

export const questionMap: Readonly<Record<number, Question>> = ${JSON.stringify(questionMap, null, 2)};
export default questionMap;
`;
fs.writeFileSync(path.join(OUT_DIR, "questionMap.ts"), questionMapContent);

// topics.ts
const topicsArr = Array.from(topicRegistry.values()).sort((a, b) => a.id - b.id);
const topicsContent = `// generated-v3/topics.ts
/**
 * Topic Registry (${topicsArr.length} items)
 * Purpose: Central topic metadata store with FNV-1a numeric IDs.
 */
import type { Topic } from "./types";

export const topics: readonly Topic[] = ${JSON.stringify(topicsArr, null, 2)};
export default topics;
`;
fs.writeFileSync(path.join(OUT_DIR, "topics.ts"), topicsContent);

// topicQuestionMap.ts
const sortedTopicQKeys = Object.keys(topicQuestionMap).map(Number).sort((a, b) => a - b);
const sortedTopicQuestionMap = {};
for (const k of sortedTopicQKeys) {
  sortedTopicQuestionMap[k] = topicQuestionMap[k];
}
const topicQuestionMapContent = `// generated-v3/topicQuestionMap.ts
/**
 * O(1) Topic -> Question IDs Map
 * Purpose: Pre-indexed arrays mapping topicId directly to questionIds.
 */

export const topicQuestionMap: Readonly<Record<number, readonly number[]>> = ${JSON.stringify(sortedTopicQuestionMap, null, 2)};
export default topicQuestionMap;
`;
fs.writeFileSync(path.join(OUT_DIR, "topicQuestionMap.ts"), topicQuestionMapContent);

// difficultyMap.ts
const difficultyMapContent = `// generated-v3/difficultyMap.ts
/**
 * O(1) Difficulty -> Question IDs Map
 * Purpose: Instant difficulty filtering without runtime array scans.
 */
import type { Difficulty } from "./types";

export const difficultyMap: Readonly<Record<Difficulty, readonly number[]>> = ${JSON.stringify(difficultyMap, null, 2)};
export default difficultyMap;
`;
fs.writeFileSync(path.join(OUT_DIR, "difficultyMap.ts"), difficultyMapContent);

// searchIndex.ts
const searchIndexContent = `// generated-v3/searchIndex.ts
/**
 * Pre-indexed Lightweight Inverted Search Index
 * Purpose: Inverted token map providing O(k) text search across titles, slugs, and topics.
 */

export const searchIndex: Readonly<Record<string, readonly number[]>> = ${JSON.stringify(searchIndex, null, 2)};
export default searchIndex;
`;
fs.writeFileSync(path.join(OUT_DIR, "searchIndex.ts"), searchIndexContent);

// companyStats.ts
const companyStatsContent = `// generated-v3/companyStats.ts
/**
 * Pre-computed Company Statistics Map
 * Purpose: Instant company metric lookups and top topics ranking.
 */
import type { CompanyStat } from "./types";

export const companyStats: Readonly<Record<number, CompanyStat>> = ${JSON.stringify(sortedCompanyStatsMap, null, 2)};
export default companyStats;
`;
fs.writeFileSync(path.join(OUT_DIR, "companyStats.ts"), companyStatsContent);

// metadata.ts
const metadataV3 = {
  version: "3.1.0",
  generatedAt: new Date().toISOString(),
  totalCompanies: companyRegistry.size,
  totalUniqueQuestions: uniqueQuestions.length,
  totalTopics: topicRegistry.size,
  totalSearchTokens: Object.keys(searchIndex).length,
  rawQuestionObjectsV1: rawQuestionCountV1,
  deduplicationReductionPercent: parseFloat(
    (((rawQuestionCountV1 - uniqueQuestions.length) / rawQuestionCountV1) * 100).toFixed(2)
  ),
  difficultyCounts: {
    Easy: difficultyMap.Easy.length,
    Medium: difficultyMap.Medium.length,
    Hard: difficultyMap.Hard.length,
  },
};
const metadataContent = `// generated-v3/metadata.ts
/**
 * Global Dataset Metadata & Build Metrics
 */

export const metadata = ${JSON.stringify(metadataV3, null, 2)} as const;
export default metadata;
`;
fs.writeFileSync(path.join(OUT_DIR, "metadata.ts"), metadataContent);

// ============================================================
// SECTION 6: METRICS & BUILD REPORT
// ============================================================
const endTime = performance.now();
const durationMs = (endTime - startTime).toFixed(2);
const memUsage = (process.memoryUsage().heapUsed / (1024 * 1024)).toFixed(2);

function getDirSizeBytes(dirPath) {
  let totalBytes = 0;
  function walk(curr) {
    const items = fs.readdirSync(curr);
    for (const item of items) {
      const full = path.join(curr, item);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) walk(full);
      else totalBytes += stat.size;
    }
  }
  walk(dirPath);
  return totalBytes;
}

const totalOutputMB = (getDirSizeBytes(OUT_DIR) / (1024 * 1024)).toFixed(2);

console.log("============================================================");
console.log("  BUILD REPORT — GENERATED-V3");
console.log("============================================================");
console.log(`  Generation Time      : ${durationMs} ms`);
console.log(`  Question Count       : ${uniqueQuestions.length.toLocaleString()}`);
console.log(`  Topic Count          : ${topicRegistry.size}`);
console.log(`  Company Count        : ${companyRegistry.size}`);
console.log(`  Search Token Count   : ${Object.keys(searchIndex).length.toLocaleString()}`);
console.log(`  Output Dataset Size  : ${totalOutputMB} MB`);
console.log(`  Deduplication        : ${metadataV3.deduplicationReductionPercent}% reduction`);
console.log(`  Memory (Heap Used)   : ${memUsage} MB`);
console.log("============================================================\n");
