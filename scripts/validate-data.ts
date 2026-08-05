import fs from "fs";
import path from "path";
import Papa from "papaparse";

const COMPANIES_DIR = path.join(process.cwd(), "companies");

function getCompanySlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function validate() {
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

  let warningCount = 0;
  let totalQuestionsChecked = 0;
  const slugsSet = new Set<string>();

  folders.forEach((folder) => {
    const slug = getCompanySlug(folder);
    if (slugsSet.has(slug)) {
      console.warn(`[Warning] Duplicate company slug detected: "${slug}" for folder "${folder}"`);
      warningCount++;
    }
    slugsSet.add(slug);

    const companyFolder = path.join(COMPANIES_DIR, folder);
    const files = fs.readdirSync(companyFolder).filter((f) => f.endsWith(".csv"));

    const companyUrls = new Set<string>();
    const companyTitles = new Set<string>();

    files.forEach((file) => {
      const filePath = path.join(companyFolder, file);
      const csvContent = fs.readFileSync(filePath, "utf-8");
      const parsed = Papa.parse<any>(csvContent, {
        header: true,
        skipEmptyLines: true,
      });

      const companyFileKey = `${folder}/${file}`;

      // Check CSV Headers (Optional columns default gracefully during generation)
      const headers = parsed.meta.fields || [];
      const requiredHeaders = ["Difficulty", "Title", "Link"];
      requiredHeaders.forEach((rh) => {
        if (!headers.includes(rh)) {
          console.warn(`[Warning] ${companyFileKey} is missing required column: "${rh}"`);
          warningCount++;
        }
      });

      (parsed.data || []).forEach((row: any, idx: number) => {
        const lineNum = idx + 2;

        const rowValues = Object.values(row).map((v: any) => String(v).trim()).filter(Boolean);
        if (rowValues.length === 0) {
          return; // Skip empty rows
        }

        const title = row.Title ? String(row.Title).trim() : "";
        if (!title) {
          console.warn(`[Warning] ${companyFileKey}: Line ${lineNum} is missing Title.`);
          warningCount++;
          return;
        }

        const difficulty = row.Difficulty ? String(row.Difficulty).trim().toUpperCase() : "";
        if (!difficulty) {
          console.warn(`[Warning] ${companyFileKey}: Line ${lineNum} ("${title}") is missing Difficulty.`);
          warningCount++;
        } else if (!["EASY", "MEDIUM", "MED", "HARD"].includes(difficulty)) {
          console.warn(`[Warning] ${companyFileKey}: Line ${lineNum} ("${title}") has invalid Difficulty "${row.Difficulty}".`);
          warningCount++;
        }

        const link = row.Link ? String(row.Link).trim() : "";
        if (!link) {
          console.warn(`[Warning] ${companyFileKey}: Line ${lineNum} ("${title}") is missing Link URL.`);
          warningCount++;
        } else {
          if (!link.startsWith("http://") && !link.startsWith("https://")) {
            console.warn(`[Warning] ${companyFileKey}: Line ${lineNum} ("${title}") has malformed URL "${row.Link}".`);
            warningCount++;
          }
          if (companyUrls.has(link)) {
            console.warn(`[Warning] ${companyFileKey}: Line ${lineNum} has duplicate link: "${link}"`);
            warningCount++;
          }
          companyUrls.add(link);
        }

        const normalizedTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, "_");
        if (companyTitles.has(normalizedTitle)) {
          console.warn(`[Warning] ${companyFileKey}: Line ${lineNum} contains duplicate question title "${title}".`);
          warningCount++;
        }
        companyTitles.add(normalizedTitle);

        const frequency = parseFloat(row.Frequency);
        if (row.Frequency && (isNaN(frequency) || frequency < 0 || frequency > 100)) {
          console.warn(`[Warning] ${companyFileKey}: Line ${lineNum} ("${title}") has invalid Frequency value "${row.Frequency}".`);
          warningCount++;
        }

        totalQuestionsChecked++;
      });
    });
  });

  console.log(`\n======================================`);
  console.log(`✅ Validation complete!`);
  console.log(`Checked ${folders.length} companies`);
  console.log(`Validated ${totalQuestionsChecked} total rows`);
  console.log(`Logged ${warningCount} data warnings`);
  console.log(`======================================\n`);
}

validate();
