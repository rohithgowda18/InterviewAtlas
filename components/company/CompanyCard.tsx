"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Company } from "@/types";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CompanyCardProps {
  company: Company;
}

const GRADIENTS = [
  { from: "from-blue-600", to: "to-cyan-500", ring: "ring-blue-500/20" },
  { from: "from-violet-600", to: "to-purple-500", ring: "ring-violet-500/20" },
  { from: "from-emerald-600", to: "to-teal-500", ring: "ring-emerald-500/20" },
  { from: "from-orange-600", to: "to-amber-500", ring: "ring-orange-500/20" },
  { from: "from-rose-600", to: "to-pink-500", ring: "ring-rose-500/20" },
  { from: "from-indigo-600", to: "to-blue-500", ring: "ring-indigo-500/20" },
];

function getGradient(name: string) {
  let sum = 0;
  for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
  return GRADIENTS[sum % GRADIENTS.length];
}

function FreqBar({
  value,
  total,
  color,
}: {
  value: number;
  total: number;
  color: string;
}) {
  const pct = total > 0 ? (value / total) * 100 : 0;
  return (
    <div
      style={{ width: `${pct}%`, background: color }}
      className="h-full first:rounded-l-full last:rounded-r-full"
      title={`${value} (${pct.toFixed(0)}%)`}
    />
  );
}

export default function CompanyCard({ company }: CompanyCardProps) {
  const gradient = getGradient(company.name);
  const total = company.totalQuestions || 1;
  const easy = company.difficultyCounts.Easy;
  const medium = company.difficultyCounts.Medium;
  const hard = company.difficultyCounts.Hard;

  const easyPct = Math.round((easy / total) * 100);
  const mediumPct = Math.round((medium / total) * 100);
  const hardPct = Math.round((hard / total) * 100);

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="group relative flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-md transition-all duration-200"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-3.5">
        <div
          className={cn(
            "h-11 w-11 rounded-xl bg-gradient-to-br flex items-center justify-center text-white font-extrabold text-lg shadow-sm flex-shrink-0",
            gradient.from,
            gradient.to
          )}
        >
          {company.name.charAt(0)}
        </div>
        <div className="flex flex-col gap-0.5 min-w-0">
          <h3 className="font-extrabold text-sm text-foreground tracking-tight group-hover:text-primary transition-colors truncate">
            {company.name}
          </h3>
          <span className="text-xs text-muted-foreground font-medium">
            {total} Questions
          </span>
        </div>
      </div>

      {/* Difficulty breakdown — counts */}
      <div className="flex items-center gap-2 mb-2.5">
        <div className="flex items-center gap-1">
          <span className="text-[10px] font-bold text-[#16c784]">{easyPct}%</span>
          <span className="text-[10px] text-muted-foreground">Easy</span>
        </div>
        <span className="text-border">·</span>
        <div className="flex items-center gap-1">
          <span className="text-[10px] font-bold text-[#f59e0b]">{mediumPct}%</span>
          <span className="text-[10px] text-muted-foreground">Med</span>
        </div>
        <span className="text-border">·</span>
        <div className="flex items-center gap-1">
          <span className="text-[10px] font-bold text-[#ef4444]">{hardPct}%</span>
          <span className="text-[10px] text-muted-foreground">Hard</span>
        </div>
      </div>

      {/* Difficulty absolute counts */}
      <div className="flex gap-1.5 mb-3">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#16c784]/15 border border-[#16c784]/30 text-[#16c784] text-[10px] font-bold">
          {easy} E
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#f59e0b]/15 border border-[#f59e0b]/30 text-[#f59e0b] text-[10px] font-bold">
          {medium} M
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ef4444]/15 border border-[#ef4444]/30 text-[#ef4444] text-[10px] font-bold">
          {hard} H
        </span>
      </div>

      {/* Segmented progress bar (8px thick) */}
      <div className="flex h-2 w-full overflow-hidden rounded-full bg-secondary/80 mb-3.5">
        <FreqBar value={easy} total={total} color="#16c784" />
        <FreqBar value={medium} total={total} color="#f59e0b" />
        <FreqBar value={hard} total={total} color="#ef4444" />
      </div>

      {/* Open Sheet button */}
      <Link
        href={`/company/${company.slug}`}
        className="mt-auto flex items-center justify-between w-full px-3.5 py-2 rounded-lg bg-secondary/50 hover:bg-secondary border border-border/60 group-hover:border-border text-xs font-bold text-foreground transition-all duration-200"
      >
        <span>Open Sheet</span>
        <ChevronRight className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </motion.div>
  );
}
