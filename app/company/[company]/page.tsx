import { getCompanyData, getCompaniesList } from "@/lib/data";
import CompanyPageContent from "@/components/company/CompanyPageContent";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Suspense } from "react";
import { SkeletonTable } from "@/components/common/Skeletons";

export async function generateStaticParams() {
  const companies = getCompaniesList();
  return companies.map((c) => ({
    company: c.slug,
  }));
}

interface PageProps {
  params: Promise<{
    company: string;
  }>;
}

// Generate dynamic metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { company } = await params;
  const companySummary = getCompaniesList().find((c) => c.slug === company);
  if (!companySummary) {
    return {
      title: "Company Not Found",
    };
  }

  return {
    title: `${companySummary.name} DSA Interview Sheet - LeetDSA Sheets`,
    description: `Solve curated LeetCode DSA questions asked in interviews at ${companySummary.name}. Track progress, bookmark questions, and filter by topics.`,
  };
}

function CompanyPageSkeleton() {
  return (
    <div className="flex flex-col gap-8 w-full py-4">
      <div className="flex flex-col gap-3 pb-6 border-b border-border animate-pulse">
        <div className="flex items-center gap-4.5">
          <div className="h-16 w-16 rounded-2xl bg-secondary" />
          <div className="flex flex-col gap-2 flex-1">
            <div className="h-6 bg-secondary rounded w-1/4" />
            <div className="h-4 bg-secondary rounded w-1/2" />
          </div>
        </div>
      </div>
      <SkeletonTable />
    </div>
  );
}

export default async function CompanyPage({ params }: PageProps) {
  const { company } = await params;
  const companyData = await getCompanyData(company);

  if (!companyData) {
    notFound();
  }

  return (
    <Suspense fallback={<CompanyPageSkeleton />}>
      <CompanyPageContent
        companyName={companyData.name}
        companySlug={companyData.slug}
        topicsList={companyData.topics}
        questionsMap={companyData.roadmaps}
      />
    </Suspense>
  );
}
