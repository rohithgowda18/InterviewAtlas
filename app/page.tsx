import { getCompaniesList, getAppMetadata } from "@/lib/data";
import CompanyGrid from "@/components/company/CompanyGrid";
import { Zap, Building2, BookOpen } from "lucide-react";

export const revalidate = 3600;

export default async function Home() {
  const companies = getCompaniesList();
  const metadata = getAppMetadata();

  const stats = [
    {
      icon: BookOpen,
      value: metadata.totalQuestions.toLocaleString(),
      label: "Curated Questions",
      color: "text-indigo-400",
      bg: "bg-indigo-500/10 border-indigo-500/20",
    },
    {
      icon: Building2,
      value: metadata.totalCompanies.toLocaleString(),
      label: "Companies",
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: Zap,
      value: "100%",
      label: "Free Forever",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
  ];

  return (
    <div className="flex flex-col gap-10 py-2 animate-fade-in">
      {/* Hero section */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6 pt-4">
        {/* Product badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold">
          <Zap className="h-3 w-3" />
          Interview Prep Platform
        </div>

        {/* Main heading */}
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
            <span className="bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-white/60">
              Interview
            </span>{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Atlas
            </span>
          </h1>
          <p className="text-base md:text-xl text-muted-foreground font-medium leading-relaxed">
            Master Company-wise Interview Preparation
          </p>
        </div>

        {/* Stat pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border ${stat.bg} transition-transform hover:scale-105 duration-200`}
              >
                <Icon className={`h-4 w-4 ${stat.color}`} />
                <span className={`text-sm font-black ${stat.color}`}>
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground font-semibold">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main interactive grid */}
      <CompanyGrid
        companies={companies}
        totalQuestions={metadata.totalQuestions}
      />
    </div>
  );
}
