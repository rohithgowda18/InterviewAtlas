// generated-v3/repositories/CompanyRepository.ts
import { companyStats } from "../companyStats";
import { metadata } from "../metadata";
import type { CompanyFile, CompanyStat } from "../types";

export class CompanyRepository {
  /**
   * Fetch pre-computed stats/summary for all companies
   * O(1) object lookup
   */
  static getStatById(id: number): CompanyStat | undefined {
    return companyStats[id];
  }

  /**
   * Fetch all stats map
   */
  static getAllStats(): Readonly<Record<number, CompanyStat>> {
    return companyStats;
  }

  /**
   * Dynamically load full company lazy chunk module by slug
   */
  static async getCompanyBySlug(slug: string): Promise<CompanyFile | null> {
    try {
      const compModule = await import(`../companies/${slug}`);
      return compModule.companyData || compModule.default || null;
    } catch (err) {
      console.warn(`[CompanyRepository] Could not load company chunk for slug: ${slug}`, err);
      return null;
    }
  }
}
