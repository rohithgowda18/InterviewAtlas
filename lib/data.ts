import { Company, CompanyData, Metadata } from "@/types";
import { companies } from "@/generated/companies";
import { metadata } from "@/generated/metadata";
import { topics } from "@/generated/topics";

// Return the summary information list of all companies
export function getCompaniesList(): readonly Company[] {
  return companies;
}

// Return the precomputed statistics metadata
export function getAppMetadata(): Metadata {
  return metadata;
}

// Return the precomputed unique topics array
export function getTopicsList(): readonly string[] {
  return topics;
}

// Dynamically import the individual company's compiled TS module at runtime from V1
export async function getCompanyData(slug: string): Promise<CompanyData | null> {
  try {
    const compModule = await import(`@/generated/companies/${slug}`);
    return compModule.default || compModule.companyData;
  } catch (error) {
    console.error(`Failed to load company data for slug: ${slug}`, error);
    return null;
  }
}
