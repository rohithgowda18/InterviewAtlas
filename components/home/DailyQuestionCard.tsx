"use client";

import { useMemo } from "react";
import atlas150Data from "@/generated-v3/atlas150";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DailyQuestionCard() {
  // Deterministic daily index using local date (YYYY-MM-DD)
  const dailyQuestion = useMemo(() => {
    const today = new Date();
    const dateStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    
    // Hash string date into a deterministic index from 0 to 149
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
      hash = (hash << 5) - hash + dateStr.charCodeAt(i);
      hash |= 0;
    }
    const index = Math.abs(hash) % atlas150Data.length;
    return atlas150Data[index];
  }, []);

  if (!dailyQuestion) return null;

  const difficultyColor =
    dailyQuestion.difficulty === "Easy"
      ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
      : dailyQuestion.difficulty === "Medium"
      ? "text-amber-500 bg-amber-500/10 border-amber-500/20"
      : "text-rose-500 bg-rose-500/10 border-rose-500/20";

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl border border-border bg-card/80 p-4 sm:p-5 shadow-sm backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4 transition-all hover:border-primary/30">
      <div className="flex flex-col items-center sm:items-start gap-1.5 text-center sm:text-left">
        <span className="text-xs font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
          🔥 Daily Interview Question
        </span>
        <h3 className="text-base sm:text-lg font-bold text-foreground">
          {dailyQuestion.title}
        </h3>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <span
          className={cn(
            "px-2.5 py-1 text-xs font-semibold rounded-lg border",
            difficultyColor
          )}
        >
          {dailyQuestion.difficulty}
        </span>
        <a
          href={dailyQuestion.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
        >
          Solve
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
