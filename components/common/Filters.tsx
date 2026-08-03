"use client";

import { Bookmark, SlidersHorizontal, X } from "lucide-react";
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

const selectClass =
  "h-8 px-2.5 pr-7 rounded-lg border border-border bg-secondary/40 text-foreground text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-ring transition-all appearance-none cursor-pointer hover:bg-secondary";

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
    <div className="flex flex-wrap items-center gap-2 px-3 py-2 rounded-xl border border-border bg-card/60 shadow-sm">
      {/* Filter icon */}
      <div className="flex items-center gap-1.5 text-muted-foreground pr-2 border-r border-border/60">
        <SlidersHorizontal className="h-3.5 w-3.5" />
        <span className="text-xs font-bold hidden sm:inline">Filters</span>
      </div>

      {/* Difficulty */}
      <div className="relative">
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className={cn(selectClass, difficulty !== "all" && "border-indigo-500/50 bg-indigo-500/10 text-indigo-400")}
          title="Difficulty"
        >
          <option value="all">Difficulty ▾</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      {/* Topic */}
      <div className="relative">
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className={cn(selectClass, "max-w-[130px]", topic !== "all" && "border-indigo-500/50 bg-indigo-500/10 text-indigo-400")}
          title="Topic"
        >
          <option value="all">Topic ▾</option>
          {topicsList.map((t) => (
            <option key={t} value={t.toLowerCase()}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Status */}
      <div className="relative">
        <select
          value={showSolved}
          onChange={(e) => setShowSolved(e.target.value as "all" | "solved" | "unsolved")}
          className={cn(selectClass, showSolved !== "all" && "border-indigo-500/50 bg-indigo-500/10 text-indigo-400")}
          title="Status"
        >
          <option value="all">Status ▾</option>
          <option value="solved">Solved</option>
          <option value="unsolved">Unsolved</option>
        </select>
      </div>

      {/* Sort */}
      <div className="relative flex items-center gap-1">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "frequency" | "alphabetical" | "difficulty")}
          className={cn(selectClass)}
          title="Sort by"
        >
          <option value="frequency">Sort: Freq ▾</option>
          <option value="difficulty">Sort: Difficulty ▾</option>
          <option value="alphabetical">Sort: A-Z ▾</option>
        </select>
        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="h-8 w-8 flex items-center justify-center rounded-lg border border-border bg-secondary/40 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all text-xs font-bold"
          title={sortOrder === "asc" ? "Ascending" : "Descending"}
        >
          {sortOrder === "asc" ? "↑" : "↓"}
        </button>
      </div>

      {/* Divider */}
      <div className="h-5 w-px bg-border/60 hidden sm:block" />

      {/* Bookmarked Toggle */}
      <button
        onClick={() => setShowBookmarked(!showBookmarked)}
        className={cn(
          "h-8 flex items-center gap-1.5 px-2.5 rounded-lg text-xs font-bold border transition-all duration-200",
          showBookmarked
            ? "bg-amber-500/10 border-amber-500/30 text-amber-500"
            : "bg-secondary/40 border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
        )}
        title="Show bookmarked only"
      >
        <Bookmark className={cn("h-3.5 w-3.5", showBookmarked && "fill-amber-500")} />
        <span className="hidden sm:inline">Saved</span>
      </button>

      {/* Solved quick toggle */}
      <button
        onClick={() => setShowSolved(showSolved === "solved" ? "all" : "solved")}
        className={cn(
          "h-8 flex items-center gap-1.5 px-2.5 rounded-lg text-xs font-bold border transition-all duration-200",
          showSolved === "solved"
            ? "bg-[#16c784]/10 border-[#16c784]/30 text-[#16c784]"
            : "bg-secondary/40 border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
        )}
        title="Show solved only"
      >
        ✓ <span className="hidden sm:inline">Solved</span>
      </button>

      {/* Reset */}
      {isFiltered && (
        <button
          onClick={onClearAll}
          className="ml-auto h-8 flex items-center gap-1 px-2.5 rounded-lg text-xs font-bold text-muted-foreground hover:text-foreground border border-border hover:bg-secondary transition-all duration-200"
          title="Clear all filters"
        >
          <X className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Reset</span>
        </button>
      )}
    </div>
  );
}
