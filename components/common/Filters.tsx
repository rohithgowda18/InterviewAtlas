"use client";

import { Bookmark, CheckSquare, Filter, ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FiltersProps {
  difficulty: string;
  setDifficulty: (val: string) => void;
  topic: string;
  setTopic: (val: string) => void;
  topicsList: string[];
  showSolved: "all" | "solved" | "unsolved";
  setShowSolved: (val: "all" | "solved" | "unsolved") => void;
  showBookmarked: boolean;
  setShowBookmarked: (val: boolean) => void;
  sortBy: "frequency" | "alphabetical" | "difficulty";
  setSortBy: (val: "frequency" | "alphabetical" | "difficulty") => void;
  sortOrder: "asc" | "desc";
  setSortOrder: (val: "asc" | "desc") => void;
  onClearAll: () => void;
  isFiltered: boolean;
}

export default function Filters({
  difficulty,
  setDifficulty,
  topic,
  setTopic,
  topicsList,
  showSolved,
  setShowSolved,
  showBookmarked,
  setShowBookmarked,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  onClearAll,
  isFiltered,
}: FiltersProps) {
  return (
    <div className="flex flex-col gap-2 p-3 rounded-xl border border-border bg-card shadow-sm">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="font-semibold text-sm">Filters & Sorting</span>
        </div>
        {isFiltered && (
          <button
            onClick={onClearAll}
            className="text-xs text-blue-500 hover:text-blue-400 font-medium transition-colors"
          >
            Clear All Filters
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        {/* Difficulty */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-muted-foreground">Difficulty</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-border bg-secondary/35 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-all"
          >
            <option value="all">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {/* Topics */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-muted-foreground">Topic</label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-border bg-secondary/35 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-all"
          >
            <option value="all">All Topics</option>
            {topicsList.map((t) => (
              <option key={t} value={t.toLowerCase()}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Solved Status */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-muted-foreground">Status</label>
          <select
            value={showSolved}
            onChange={(e) => setShowSolved(e.target.value as any)}
            className="w-full px-3 py-2 rounded-lg border border-border bg-secondary/35 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-all"
          >
            <option value="all">All Status</option>
            <option value="solved">Solved</option>
            <option value="unsolved">Unsolved</option>
          </select>
        </div>

        {/* Sort By */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-muted-foreground">Sort By</label>
          <div className="flex gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="flex-1 px-2 py-1.5 rounded-lg border border-border bg-secondary/35 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-ring transition-all"
            >
              <option value="frequency">Frequency</option>
              <option value="difficulty">Difficulty</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className="p-2 rounded-lg bg-secondary/35 border border-border hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-200"
              aria-label="Toggle sort order"
            >
              <ArrowUpDown className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-2 border-t border-border/60">
        {/* Bookmarked Filter Toggle */}
        <button
          onClick={() => setShowBookmarked(!showBookmarked)}
          className={cn(
            "flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200",
            showBookmarked
              ? "bg-amber-500/10 border-amber-500/30 text-amber-500"
              : "bg-secondary/35 border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
          )}
        >
          <Bookmark className={cn("h-3.5 w-3.5", showBookmarked && "fill-amber-500")} />
          <span>Bookmarked Only</span>
        </button>

        {/* Solved Quick Toggle */}
        <button
          onClick={() => setShowSolved(showSolved === "solved" ? "all" : "solved")}
          className={cn(
            "flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200",
            showSolved === "solved"
              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-500"
              : "bg-secondary/35 border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
          )}
        >
          <CheckSquare className="h-3.5 w-3.5" />
          <span>Solved Only</span>
        </button>
      </div>
    </div>
  );
}
