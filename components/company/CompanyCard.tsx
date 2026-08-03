"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Company } from "@/types";
import { motion } from "framer-motion";

interface CompanyCardProps {
  company: Company;
}

export default function CompanyCard({ company }: CompanyCardProps) {
  const getGradient = (name: string) => {
    const gradients = [
      "from-blue-600 to-cyan-500",
      "from-purple-600 to-pink-500",
      "from-emerald-600 to-teal-500",
      "from-orange-600 to-amber-500",
      "from-rose-600 to-purple-500",
      "from-indigo-600 to-blue-500",
    ];
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
      sum += name.charCodeAt(i);
    }
    return gradients[sum % gradients.length];
  };

  const gradientClass = getGradient(company.name);

  const total = company.totalQuestions || 1;
  const easyPct = (company.difficultyCounts.Easy / total) * 100;
  const mediumPct = (company.difficultyCounts.Medium / total) * 100;
  const hardPct = (company.difficultyCounts.Hard / total) * 100;

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative flex flex-col justify-between rounded-xl border border-border/80 bg-white/70 dark:bg-black/70 backdrop-blur-lg p-6 shadow-sm hover:shadow-xl transition-all"
    >
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-6">
          <div
            className={`h-12 w-12 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center text-white font-extrabold text-xl shadow-sm`}
          >
            {company.name.charAt(0)}
          </div>
          <div className="flex flex-col gap-0.5">
            <h3 className="font-extrabold text-lg text-foreground tracking-tight group-hover:text-primary transition-colors">
              {company.name}
            </h3>

          </div>
        </div>

        {/* Difficulty distribution progress bar */}
        <div className="flex flex-col gap-1">
          <div className="flex h-1 w-full overflow-hidden rounded-full bg-secondary/50">
            <div style={{ width: `${easyPct}%` }} className="bg-emerald-500" title={`Easy: ${company.difficultyCounts.Easy}`} />
            <div style={{ width: `${mediumPct}%` }} className="bg-amber-500" title={`Medium: ${company.difficultyCounts.Medium}`} />
            <div style={{ width: `${hardPct}%` }} className="bg-rose-500" title={`Hard: ${company.difficultyCounts.Hard}`} />
          </div>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground font-semibold">
            <span>TOTAL QUESTIONS</span>
            <span className="text-foreground font-bold">{company.totalQuestions}</span>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <Link
          href={`/company/${company.slug}`}
          className={cn(
                  "px-5 py-3 font-bold text-sm border-b-2 whitespace-nowrap transition-all duration-200",
                  "border-transparent text-muted-foreground hover:text-foreground"
                )}
        >
          <span>Open Sheet</span>
          <ChevronRight className="h-3.5 w-3.5 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
