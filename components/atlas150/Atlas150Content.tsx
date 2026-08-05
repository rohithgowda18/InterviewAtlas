"use client";

import { useState, useMemo, useEffect } from "react";
import { atlas150Data, Atlas150Question } from "@/generated-v3/atlas150";
import { useDSA } from "@/hooks/useDSA";
import SearchBar from "@/components/common/SearchBar";
import DifficultyBadge from "@/components/common/DifficultyBadge";
import Pagination from "@/components/common/Pagination";
import CompanyListModal from "./CompanyListModal";
import {
  Sparkles,
  Trophy,
  Building2,
  ExternalLink,
  CheckCircle2,
  Bookmark,
} from "lucide-react";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 10;

export default function Atlas150Content() {
  const { solvedQuestions, bookmarkedQuestions, toggleSolved, toggleBookmarked } = useDSA();

  const [search, setSearch] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
  const [topicFilter, setTopicFilter] = useState<string>("all");
  const [companyMinFilter, setCompanyMinFilter] = useState<number>(0);
  const [sortBy, setSortBy] = useState<"mostCompanies" | "difficulty" | "alphabetical">("mostCompanies");
  const [selectedQuestionForModal, setSelectedQuestionForModal] = useState<Atlas150Question | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const solvedSet = useMemo(() => new Set(solvedQuestions), [solvedQuestions]);
  const bookmarkedSet = useMemo(() => new Set(bookmarkedQuestions), [bookmarkedQuestions]);

  // Unique topic list derived from dataset
  const allTopics = useMemo(() => {
    const topics = new Set<string>();
    atlas150Data.forEach((q) => q.topics.forEach((t) => topics.add(t)));
    return Array.from(topics).sort();
  }, []);

  // Compute Coverage metrics
  const solved150Count = useMemo(() => {
    return atlas150Data.filter((q) => solvedSet.has(q.title) || solvedSet.has(String(q.id))).length;
  }, [solvedSet]);

  const coveragePercentage = Math.round((solved150Count / 150) * 100);
  const estimatedInterviewCoverage = Math.round(coveragePercentage * 2.2); // Weighted coverage estimation

  // Filter & Sort questions
  const filteredQuestions = useMemo(() => {
    return atlas150Data
      .filter((q) => {
        // Search filter
        if (search.trim()) {
          const s = search.toLowerCase();
          const matchesTitle = q.title.toLowerCase().includes(s);
          const matchesTopic = q.topics.some((t) => t.toLowerCase().includes(s));
          if (!matchesTitle && !matchesTopic) return false;
        }

        // Difficulty filter
        if (difficultyFilter !== "all" && q.difficulty !== difficultyFilter) {
          return false;
        }

        // Topic filter
        if (topicFilter !== "all" && !q.topics.includes(topicFilter)) {
          return false;
        }

        // Min companies filter
        if (companyMinFilter > 0 && q.companyCount < companyMinFilter) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "mostCompanies") return b.companyCount - a.companyCount;
        if (sortBy === "alphabetical") return a.title.localeCompare(b.title);
        if (sortBy === "difficulty") {
          const order = { Easy: 1, Medium: 2, Hard: 3 };
          return order[a.difficulty] - order[b.difficulty];
        }
        return 0;
      });
  }, [search, difficultyFilter, topicFilter, companyMinFilter, sortBy]);

  // Reset pagination to page 1 when search or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, difficultyFilter, topicFilter, companyMinFilter, sortBy]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredQuestions.length / PAGE_SIZE) || 1;
  const paginatedQuestions = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredQuestions.slice(start, start + PAGE_SIZE);
  }, [filteredQuestions, currentPage]);

  return (
    <div className="flex flex-col gap-8 py-4 animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 via-card to-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-extrabold w-fit">
            <Sparkles className="h-3.5 w-3.5 fill-indigo-400" />
            <span>Signature Core Essentials</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Interview Atlas 150
          </h1>
          <p className="text-sm text-muted-foreground font-medium">
            The 150 most frequently asked coding interview questions ranked across 470+ companies.
            Solve these first for maximum interview coverage.
          </p>
        </div>

        {/* Coverage Score Metrics Card */}
        <div className="w-full md:w-auto p-5 rounded-2xl border border-border bg-card/80 flex flex-col gap-3 min-w-[260px] shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
              <Trophy className="h-4 w-4 text-amber-400" /> Coverage Progress
            </span>
            <span className="text-xs font-black text-indigo-400 font-mono">
              {solved150Count} / 150
            </span>
          </div>

          <div className="flex items-baseline justify-between">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-foreground">{coveragePercentage}%</span>
              <span className="text-[10px] text-muted-foreground font-bold">150 Solved</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-2xl font-black text-emerald-500">{Math.min(99, estimatedInterviewCoverage)}%</span>
              <span className="text-[10px] text-muted-foreground font-bold">Estimated Coverage</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${coveragePercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="p-4 rounded-2xl border border-border bg-card/60 flex flex-col gap-4 shadow-sm">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search 150 essentials by title or topic... (Press '/' to focus)"
          showShortcut
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {/* Difficulty Filter */}
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-border bg-secondary/60 text-xs font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:[&>option]:bg-zinc-900 dark:[&>option]:text-zinc-100"
          >
            <option value="all">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          {/* Topic Filter */}
          <select
            value={topicFilter}
            onChange={(e) => setTopicFilter(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-border bg-secondary/60 text-xs font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:[&>option]:bg-zinc-900 dark:[&>option]:text-zinc-100"
          >
            <option value="all">All Topics ({allTopics.length})</option>
            {allTopics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          {/* Min Companies Filter */}
          <select
            value={companyMinFilter}
            onChange={(e) => setCompanyMinFilter(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-xl border border-border bg-secondary/60 text-xs font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:[&>option]:bg-zinc-900 dark:[&>option]:text-zinc-100"
          >
            <option value={0}>Any Companies Count</option>
            <option value={50}>50+ Companies</option>
            <option value={80}>80+ Companies</option>
            <option value={100}>100+ Companies</option>
          </select>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="w-full px-3 py-2 rounded-xl border border-border bg-secondary/60 text-xs font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:[&>option]:bg-zinc-900 dark:[&>option]:text-zinc-100"
          >
            <option value="mostCompanies">Sort: Most Companies</option>
            <option value="difficulty">Sort: Difficulty</option>
            <option value="alphabetical">Sort: Alphabetical</option>
          </select>
        </div>
      </div>

      {/* Questions Cards List */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground font-semibold">
          <span>
            Showing{" "}
            <span className="text-foreground font-extrabold">
              {paginatedQuestions.length > 0 ? (currentPage - 1) * PAGE_SIZE + 1 : 0}-
              {Math.min(currentPage * PAGE_SIZE, filteredQuestions.length)}
            </span>{" "}
            of <span className="text-foreground font-extrabold">{filteredQuestions.length}</span> Questions
          </span>
          <span className="text-xs font-bold text-muted-foreground">
            Page {currentPage} of {totalPages}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {paginatedQuestions.map((q) => {
            const isSolved = solvedSet.has(q.title) || solvedSet.has(String(q.id));
            const isBookmarked = bookmarkedSet.has(q.title) || bookmarkedSet.has(String(q.id));
            const topCompanies = q.companies.slice(0, 5);
            const extraCompanyCount = Math.max(0, q.companyCount - topCompanies.length);

            return (
              <div
                key={q.id}
                className={cn(
                  "p-5 rounded-2xl border bg-card/80 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-200 shadow-sm hover:border-indigo-500/40",
                  isSolved ? "border-emerald-500/30 bg-emerald-500/5" : "border-border"
                )}
              >
                {/* Left: Rank, Title, Badges */}
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className="flex flex-col items-center justify-center shrink-0 w-10 h-10 rounded-xl bg-secondary text-foreground font-black text-sm border border-border">
                    #{q.rank}
                  </div>

                  <div className="flex flex-col gap-2 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href={q.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-extrabold text-base text-foreground hover:text-indigo-400 transition-colors flex items-center gap-1.5"
                      >
                        <span>{q.title}</span>
                        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                      </a>

                      <DifficultyBadge difficulty={q.difficulty} />

                      {/* Essential Badge */}
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] font-extrabold">
                        {q.essentialBadge}
                      </span>
                    </div>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-1.5">
                      {q.topics.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-secondary text-muted-foreground border border-border/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Company Breakdown */}
                    <div className="flex flex-wrap items-center gap-1.5 mt-1 text-xs text-muted-foreground">
                      <span className="font-bold text-foreground flex items-center gap-1">
                        <Building2 className="h-3.5 w-3.5 text-indigo-400" />
                        Appears in {q.companyCount} companies:
                      </span>

                      {topCompanies.map((cSlug) => (
                        <span
                          key={cSlug}
                          className="capitalize text-[11px] font-semibold px-2 py-0.5 rounded-md bg-secondary/80 border border-border/60 text-foreground"
                        >
                          {cSlug.replace(/-/g, " ")}
                        </span>
                      ))}

                      {extraCompanyCount > 0 && (
                        <button
                          onClick={() => setSelectedQuestionForModal(q)}
                          className="text-[11px] font-extrabold text-indigo-500 hover:underline cursor-pointer"
                        >
                          +{extraCompanyCount} more
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                  <button
                    onClick={() => toggleBookmarked(q.title)}
                    className={cn(
                      "p-2.5 rounded-xl border transition-all cursor-pointer",
                      isBookmarked
                        ? "bg-amber-500/10 border-amber-500/30 text-amber-500"
                        : "bg-secondary/60 border-border text-muted-foreground hover:text-foreground"
                    )}
                    title={isBookmarked ? "Bookmarked" : "Bookmark question"}
                  >
                    <Bookmark className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() => toggleSolved(q.title)}
                    className={cn(
                      "px-4 py-2.5 rounded-xl text-xs font-extrabold border transition-all flex items-center gap-1.5 cursor-pointer",
                      isSolved
                        ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-500"
                        : "bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white shadow-sm"
                    )}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    <span>{isSolved ? "Solved" : "Practice"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination controls */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Modal listing all companies for a question */}
      {selectedQuestionForModal && (
        <CompanyListModal
          questionTitle={selectedQuestionForModal.title}
          companies={selectedQuestionForModal.companies}
          isOpen={!!selectedQuestionForModal}
          onClose={() => setSelectedQuestionForModal(null)}
        />
      )}
    </div>
  );
}
