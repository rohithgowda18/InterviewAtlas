/**
 * generate-v2.mjs  (v2.1 — improved architecture)
 *
 * Improvements over v2.0:
 *  1. Stable FNV-1a 32-bit IDs for questions (from link), companies (from slug), topics (from name)
 *  2. companyId (number) replaces company string in mappings
 *  3. topicIds (number[]) replaces topic names in questions
 *  4. Timeframe stored as integer enum (0-4) instead of string
 *  5. Compact field names in companyMappings: { qId, cId, tf, f }
 *  6. Lookup maps: questionMap (id->obj), companyQuestionMap (cId->[qIds]), topicQuestionMap (tId->[qIds])
 *  7. topics.ts as a separate registry with id + name + questionCount
 *  8. Company easy/medium/hard counts derived from actual question data
 *  9. No repeated string data in hot paths
 * 10. No application code or generated/ folder touched
 *
 * Run: node scripts/generate-v2.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const GENERATED_COMPANIES_DIR = path.join(ROOT, "generated", "companies");
const GENERATED_COMPANIES_LIST = path.join(ROOT, "generated", "companies.ts");
const OUT_DIR = path.join(ROOT, "generated-v2");

// ============================================================
// Timeframe enum
// ============================================================
const TIMEFRAME = {
  all: 0,
  thirtyDays: 1,
  threeMonths: 2,
  sixMonths: 3,
  moreThanSixMonths: 4,
};
const TIMEFRAME_NAME = ["All", "30 Days", "3 Months", "6 Months", "6+ Months"];

// ============================================================
// FNV-1a 32-bit stable hash → unsigned integer ID
// Never returns 0 (reserved).
// ============================================================
function fnv1a32(str) {
  let h = 2166136261; // FNV offset basis
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
    h = h >>> 0; // force unsigned 32-bit
  }
  return h || 1;
}

/**
 * Generate a stable collision-free ID.
 * If the hash collides with an already-used ID, append a counter suffix and rehash.
 */
function makeStableId(str, usedIds) {
  let candidate = fnv1a32(str.toLowerCase().trim());
  let attempt = 0;
  while (usedIds.has(candidate)) {
    attempt++;
    candidate = fnv1a32(`${str.toLowerCase().trim()}__collision_${attempt}`);
  }
  usedIds.add(candidate);
  return candidate;
}

// ============================================================
// TypeScript-in-JS parsers (strip TS types, eval as JS)
// ============================================================
function stripTS(raw) {
  return raw
    .replace(/^import\s+.*?;?\s*\n/gm, "")
    .replace(/:\s*CompanyData\b/g, "")
    .replace(/:\s*Company\b/g, "")
    .replace(/:\s*Metadata\b/g, "")
    .replace(/:\s*readonly\s+\S+(?:\[\])?/g, "")
    .replace(/:\s*"[^"]+"\s*\|/g, "|") // union type literals - partial
    .replace(/\s+as\s+const/g, "");
}

function parseCompanyFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const stripped = stripTS(raw)
    .replace(/export\s+const\s+companyData/, "const companyData")
    .replace(/export\s+default\s+companyData;?/, "");
  // eslint-disable-next-line no-new-func
  return new Function(`${stripped}; return companyData;`)();
}

function parseCompaniesList(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const stripped = stripTS(raw)
    .replace(/:\s*readonly\s+\w+\[\]/g, "")
    .replace(/:\s*\w+\[\]/g, "")
    .replace(/export\s+const\s+companies/, "const companies")
    .replace(/export\s+default\s+companies;?/, "");
  // eslint-disable-next-line no-new-func
  return new Function(`${stripped}; return companies;`)();
}

// ============================================================
// Normalisation helpers for dedup
// ============================================================
function normalizeLink(l) {
  return l.toLowerCase().replace(/\/$/, "").trim();
}
function normalizeTitle(t) {
  return t.toLowerCase().trim();
}
function dedupKey(q) {
  return `${normalizeTitle(q.title)}||${normalizeLink(q.link)}`;
}

// ============================================================
// MAIN
// ============================================================
console.log("=== Interview Atlas — V2.1 Data Generator ===\n");

// ── 1. Load source data ──────────────────────────────────────
console.log("Loading source data...");
const companiesList = parseCompaniesList(GENERATED_COMPANIES_LIST);
const companyFiles = fs
  .readdirSync(GENERATED_COMPANIES_DIR)
  .filter((f) => f.endsWith(".ts"))
  .sort();

const allCompanyData = [];
let parseErrors = 0;
for (const file of companyFiles) {
  try {
    allCompanyData.push(parseCompanyFile(path.join(GENERATED_COMPANIES_DIR, file)));
  } catch (err) {
    console.warn(`  ⚠ Could not parse ${file}: ${err.message}`);
    parseErrors++;
  }
}
console.log(`  Companies list:  ${companiesList.length}`);
console.log(`  Company files:   ${companyFiles.length} (${parseErrors} parse errors)`);
console.log(`  Parsed OK:       ${allCompanyData.length}\n`);

// ── 2. Build topic registry ───────────────────────────────────
// Collect all unique topic names first (sorted alphabetically for stable IDs)
const allTopicNames = new Set();
for (const data of allCompanyData) {
  for (const q of data.roadmaps.all || []) {
    for (const t of q.topics || []) allTopicNames.add(t);
  }
}

const topicNamesSorted = Array.from(allTopicNames).sort();
const topicIdSet = new Set();
// topic name -> { id, name }
const topicRegistry = new Map(); // name -> { id, name, questionCount }
for (const name of topicNamesSorted) {
  const id = makeStableId(`topic:${name}`, topicIdSet);
  topicRegistry.set(name, { id, name, questionCount: 0 });
}

console.log(`Topic registry: ${topicRegistry.size} unique topics`);

// ── 3. Build question registry (dedup by title+link) ─────────
const questionIdSet = new Set();
// dedupKey -> { id, title, difficulty, topicIds, link }
const uniqueQuestionsMap = new Map();

let totalRawObjects = 0;

for (const data of allCompanyData) {
  const questions = data.roadmaps.all || [];
  totalRawObjects += questions.length;

  for (const q of questions) {
    const key = dedupKey(q);
    if (!uniqueQuestionsMap.has(key)) {
      const id = makeStableId(`question:${normalizeLink(q.link)}`, questionIdSet);
      const topicIds = (q.topics || []).map((t) => topicRegistry.get(t)?.id).filter(Boolean);
      uniqueQuestionsMap.set(key, {
        id,
        title: q.title,
        difficulty: q.difficulty,
        topicIds,
        link: q.link,
      });
    }
    // Increment topic question counts
    for (const t of q.topics || []) {
      if (topicRegistry.has(t)) {
        topicRegistry.get(t).questionCount++;
      }
    }
  }

  // Also scan non-all timeframes to catch any that appear only there (rare)
  for (const tf of ["thirtyDays", "threeMonths", "sixMonths", "moreThanSixMonths"]) {
    for (const q of data.roadmaps[tf] || []) {
      const key = dedupKey(q);
      if (!uniqueQuestionsMap.has(key)) {
        const id = makeStableId(`question:${normalizeLink(q.link)}`, questionIdSet);
        const topicIds = (q.topics || []).map((t) => topicRegistry.get(t)?.id).filter(Boolean);
        uniqueQuestionsMap.set(key, {
          id,
          title: q.title,
          difficulty: q.difficulty,
          topicIds,
          link: q.link,
        });
      }
    }
  }
}

const uniqueQuestions = Array.from(uniqueQuestionsMap.values()).sort(
  (a, b) => a.id - b.id
);

console.log(`Unique questions: ${uniqueQuestions.length.toLocaleString()}`);
console.log(`Dedup reduction:  ${(((totalRawObjects - uniqueQuestions.length) / totalRawObjects) * 100).toFixed(1)}%\n`);

// ── 4. Build company registry ─────────────────────────────────
const companyIdSet = new Set();
// slug -> { id, slug, name, totalQuestions, easy, medium, hard }
const companyRegistry = new Map();

for (const c of companiesList) {
  const id = makeStableId(`company:${c.slug}`, companyIdSet);
  companyRegistry.set(c.slug, {
    id,
    slug: c.slug,
    name: c.name,
    // Counts will be overwritten from actual question data below
    totalQuestions: 0,
    easy: 0,
    medium: 0,
    hard: 0,
  });
}

// Compute actual difficulty counts from question data
for (const data of allCompanyData) {
  const entry = companyRegistry.get(data.slug);
  if (!entry) continue;
  for (const q of data.roadmaps.all || []) {
    entry.totalQuestions++;
    if (q.difficulty === "Easy") entry.easy++;
    else if (q.difficulty === "Medium") entry.medium++;
    else if (q.difficulty === "Hard") entry.hard++;
  }
}

console.log(`Company registry: ${companyRegistry.size} companies\n`);

// ── 5. Build companyMappings (compact) ────────────────────────
// Each record: { qId, cId, tf, f }
const companyMappings = [];
const seenMappingKeys = new Set();

for (const data of allCompanyData) {
  const companyEntry = companyRegistry.get(data.slug);
  if (!companyEntry) continue;

  for (const [tfKey, tfInt] of Object.entries(TIMEFRAME)) {
    const questions = data.roadmaps[tfKey];
    if (!Array.isArray(questions)) continue;

    for (const q of questions) {
      const qEntry = uniqueQuestionsMap.get(dedupKey(q));
      if (!qEntry) continue;

      const mappingKey = `${qEntry.id}|${companyEntry.id}|${tfInt}`;
      if (seenMappingKeys.has(mappingKey)) continue;
      seenMappingKeys.add(mappingKey);

      companyMappings.push({
        qId: qEntry.id,
        cId: companyEntry.id,
        tf: tfInt,
        f: q.frequency,
      });
    }
  }
}

console.log(`Total mappings: ${companyMappings.length.toLocaleString()}`);

// ── 6. Build lookup maps ──────────────────────────────────────

// questionMap: id -> question
const questionMap = {};
for (const q of uniqueQuestions) {
  questionMap[q.id] = q;
}

// companyQuestionMap: companyId -> questionId[] (from "all" timeframe)
const companyQuestionMap = {};
for (const data of allCompanyData) {
  const companyEntry = companyRegistry.get(data.slug);
  if (!companyEntry) continue;

  const ids = new Set();
  for (const q of data.roadmaps.all || []) {
    const qEntry = uniqueQuestionsMap.get(dedupKey(q));
    if (qEntry) ids.add(qEntry.id);
  }
  if (ids.size > 0) {
    companyQuestionMap[companyEntry.id] = Array.from(ids);
  }
}

// topicQuestionMap: topicId -> questionId[]
const topicQuestionMap = {};
for (const q of uniqueQuestions) {
  for (const tId of q.topicIds) {
    if (!topicQuestionMap[tId]) topicQuestionMap[tId] = [];
    topicQuestionMap[tId].push(q.id);
  }
}

// ── 7. Build metadata ─────────────────────────────────────────
const difficultyCounts = { Easy: 0, Medium: 0, Hard: 0 };
for (const q of uniqueQuestions) {
  if (q.difficulty in difficultyCounts) difficultyCounts[q.difficulty]++;
}

const topicsDistribution = Array.from(topicRegistry.values())
  .sort((a, b) => b.questionCount - a.questionCount)
  .map(({ id, name, questionCount }) => ({ id, name, questionCount }));

const metadataV2 = {
  version: "2.1.0",
  generatedAt: new Date().toISOString(),
  totalCompanies: companyRegistry.size,
  totalUniqueQuestions: uniqueQuestions.length,
  totalMappings: companyMappings.length,
  totalTopics: topicRegistry.size,
  rawQuestionObjectsBeforeDedup: totalRawObjects,
  deduplicationReductionPercent: parseFloat(
    (((totalRawObjects - uniqueQuestions.length) / totalRawObjects) * 100).toFixed(2)
  ),
  difficultyCounts,
  timeframeEnum: {
    0: "All",
    1: "30 Days",
    2: "3 Months",
    3: "6 Months",
    4: "6+ Months",
  },
  idScheme: "FNV-1a 32-bit unsigned integer from normalized link/slug/name",
  notes: [
    "questions.ts — unique questions with topicIds (no duplicates)",
    "companies.ts — company metadata with numeric id, counts derived from data",
    "topics.ts    — topic registry with stable FNV-1a IDs",
    "questionMap.ts       — O(1) question lookup: id -> question",
    "companyQuestionMap.ts — O(1) company questions: companyId -> questionId[]",
    "topicQuestionMap.ts  — O(1) topic filter: topicId -> questionId[]",
    "companyMappings.ts   — compact {qId,cId,tf,f} timeframe+frequency records",
    "DO NOT import into the app — experimental v2 dataset only",
  ],
};

// ============================================================
// Write all output files
// ============================================================

// Clear and recreate output dir
if (fs.existsSync(OUT_DIR)) {
  fs.rmSync(OUT_DIR, { recursive: true });
}
fs.mkdirSync(OUT_DIR, { recursive: true });

const HEADER = (filename, description) =>
  `// generated-v2/${filename}
// ${description}
// DO NOT IMPORT THIS INTO THE APP — experimental normalized v2 dataset only
// Generated: ${new Date().toISOString()}
`;

// --- questions.ts ---
const questionsContent =
  HEADER("questions.ts", `${uniqueQuestions.length.toLocaleString()} unique questions — topicIds reference topics.ts`) +
  `
export interface QuestionV2 {
  id: number;        // Stable FNV-1a hash of normalized link
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  topicIds: number[]; // References topic IDs from topics.ts
  link: string;
}

export const questions: readonly QuestionV2[] = ${JSON.stringify(uniqueQuestions, null, 2)} as const;

export default questions;
`;
fs.writeFileSync(path.join(OUT_DIR, "questions.ts"), questionsContent);

// --- companies.ts ---
const companiesArr = Array.from(companyRegistry.values()).sort((a, b) =>
  a.name.localeCompare(b.name)
);
const companiesContent =
  HEADER("companies.ts", `${companiesArr.length} companies — difficulty counts derived from question data`) +
  `
export interface CompanyV2 {
  id: number;           // Stable FNV-1a hash of slug
  slug: string;
  name: string;
  totalQuestions: number; // Derived from roadmaps.all (not copied from old metadata)
  easy: number;
  medium: number;
  hard: number;
}

export const companies: readonly CompanyV2[] = ${JSON.stringify(companiesArr, null, 2)} as const;

export default companies;
`;
fs.writeFileSync(path.join(OUT_DIR, "companies.ts"), companiesContent);

// --- topics.ts ---
const topicsArr = Array.from(topicRegistry.values()).sort((a, b) =>
  a.name.localeCompare(b.name)
);
const topicsContent =
  HEADER("topics.ts", `${topicsArr.length} unique topics — stable FNV-1a IDs`) +
  `
export interface TopicV2 {
  id: number;           // Stable FNV-1a hash of name
  name: string;
  questionCount: number; // Across ALL companies (with duplicates — how many question objects mention it)
}

export const topics: readonly TopicV2[] = ${JSON.stringify(topicsArr, null, 2)} as const;

export default topics;
`;
fs.writeFileSync(path.join(OUT_DIR, "topics.ts"), topicsContent);

// --- questionMap.ts ---
const questionMapContent =
  HEADER("questionMap.ts", "O(1) question lookup — { [id]: QuestionV2 }") +
  `
import type { QuestionV2 } from "./questions";

export const questionMap: Readonly<Record<number, QuestionV2>> = ${JSON.stringify(questionMap, null, 2)};

export default questionMap;
`;
fs.writeFileSync(path.join(OUT_DIR, "questionMap.ts"), questionMapContent);

// --- companyQuestionMap.ts ---
const companyQuestionMapContent =
  HEADER("companyQuestionMap.ts", "O(1) company → question IDs from 'all' timeframe") +
  `
// { [companyId]: questionId[] }
// Usage:
//   const ids = companyQuestionMap[companyId];
//   const questions = ids.map(id => questionMap[id]);
export const companyQuestionMap: Readonly<Record<number, readonly number[]>> = ${JSON.stringify(
  companyQuestionMap,
  null,
  2
)};

export default companyQuestionMap;
`;
fs.writeFileSync(path.join(OUT_DIR, "companyQuestionMap.ts"), companyQuestionMapContent);

// --- topicQuestionMap.ts ---
const topicQuestionMapContent =
  HEADER("topicQuestionMap.ts", "O(1) topic → question IDs for instant filtering") +
  `
// { [topicId]: questionId[] }
// Usage:
//   const ids = topicQuestionMap[topicId];
//   const questions = ids.map(id => questionMap[id]);
export const topicQuestionMap: Readonly<Record<number, readonly number[]>> = ${JSON.stringify(
  topicQuestionMap,
  null,
  2
)};

export default topicQuestionMap;
`;
fs.writeFileSync(path.join(OUT_DIR, "topicQuestionMap.ts"), topicQuestionMapContent);

// --- companyMappings.ts ---
const companyMappingsContent =
  HEADER(
    "companyMappings.ts",
    `${companyMappings.length.toLocaleString()} records — compact {qId,cId,tf,f} format`
  ) +
  `
// Timeframe (tf) enum:
//   0 = All
//   1 = 30 Days
//   2 = 3 Months
//   3 = 6 Months
//   4 = 6+ Months
export const TIMEFRAME_LABELS = ${JSON.stringify(TIMEFRAME_NAME)} as const;

export interface CompanyMappingV2 {
  qId: number;  // questionId — references questionMap
  cId: number;  // companyId  — references companies
  tf: 0 | 1 | 2 | 3 | 4; // timeframe enum
  f: number;    // frequency (0-100)
}

export const companyMappings: readonly CompanyMappingV2[] = ${JSON.stringify(
  companyMappings,
  null,
  2
)} as const;

export default companyMappings;
`;
fs.writeFileSync(path.join(OUT_DIR, "companyMappings.ts"), companyMappingsContent);

// --- metadata.ts ---
const metadataContent =
  HEADER("metadata.ts", "Global statistics and generation info") +
  `
export const metadata = ${JSON.stringify(metadataV2, null, 2)} as const;

export default metadata;
`;
fs.writeFileSync(path.join(OUT_DIR, "metadata.ts"), metadataContent);

// ============================================================
// File size report
// ============================================================
const files = fs.readdirSync(OUT_DIR).map((f) => {
  const stat = fs.statSync(path.join(OUT_DIR, f));
  return { file: f, sizeKB: (stat.size / 1024).toFixed(1) };
});

const totalKB = files.reduce((sum, f) => sum + parseFloat(f.sizeKB), 0);

// ============================================================
// Final summary
// ============================================================
console.log(`
============================================================
  GENERATION SUMMARY — V2.1
============================================================

  Unique questions            : ${uniqueQuestions.length.toLocaleString()}
  Companies                   : ${companyRegistry.size}
  Unique topics               : ${topicRegistry.size}
  Total mappings              : ${companyMappings.length.toLocaleString()}

  Raw question objects (v1)   : ${totalRawObjects.toLocaleString()}
  Unique questions (v2)       : ${uniqueQuestions.length.toLocaleString()}
  Dedup reduction             : ${metadataV2.deduplicationReductionPercent}%

  Difficulty (unique):
    Easy   : ${difficultyCounts.Easy.toLocaleString()}
    Medium : ${difficultyCounts.Medium.toLocaleString()}
    Hard   : ${difficultyCounts.Hard.toLocaleString()}

  Top 5 topics (by question count across all companies):
${topicsDistribution
  .slice(0, 5)
  .map((t) => `    [${String(t.id).padEnd(12)}] ${t.name.padEnd(36)} ${t.questionCount} refs`)
  .join("\n")}

  ID Scheme: FNV-1a 32-bit unsigned integer
    - Question IDs: hash("question:" + normalizedLink)
    - Company IDs:  hash("company:"  + slug)
    - Topic IDs:    hash("topic:"    + name)
    - Collision detection: yes (with counter-suffix rehash)
    - Parse errors: ${parseErrors}

  Timeframe enum (tf field in companyMappings):
    0 = All        1 = 30 Days    2 = 3 Months
    3 = 6 Months   4 = 6+ Months

  Architecture notes:
    - No repeated company/topic strings in hot data paths
    - O(1) lookups: questionMap[id], companyQuestionMap[cId], topicQuestionMap[tId]
    - Company counts derived from actual question data (not copied from metadata)
    - companyMappings uses compact field names: qId, cId, tf, f
    - Acceptance rate: not available in source data

  Output files (${OUT_DIR.split(path.sep).pop()}/):
${files.map((f) => `    ${f.file.padEnd(32)} ${f.sizeKB.padStart(8)} KB`).join("\n")}
${"".padEnd(55, "-")}
    ${"TOTAL".padEnd(31)} ${totalKB.toFixed(1).padStart(8)} KB

  ✅ generated-v2/ created successfully.
  ✅ No existing generated/ files were modified.
  ✅ No application code was changed.
============================================================
`);
