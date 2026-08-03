import { getCompaniesList, getAppMetadata } from "@/lib/data";
import CompanyGrid from "@/components/company/CompanyGrid";

export const revalidate = 3600;

export default async function Home() {
  const companies = getCompaniesList();
  const metadata = getAppMetadata();

  return (
    <div className="flex flex-col gap-6 py-2">
      {/* Hero section */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-foreground to-foreground/75 bg-clip-text text-transparent">
          Company Wise DSA Sheet
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
          Crack your tech interviews by solving over <span className="text-foreground font-bold">{metadata.totalQuestions}</span> curated questions asked in interviews at <span className="text-foreground font-bold">{metadata.totalCompanies}</span> top tech companies.
        </p>
      </div>

      {/* Main interactive grid component */}
      <CompanyGrid companies={companies} />
    </div>
  );
}
