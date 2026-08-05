"use client";

import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Question, Roadmap } from "@/types";
import { useDSA } from "@/hooks/useDSA";
import {
  filterQuestions,
  sortQuestions,
  calculateProgressPercentage,
  cn,
} from "@/lib/utils";

import Filters from "@/components/common/Filters";
import QuestionTable from "@/components/question/QuestionTable";
import Pagination from "@/components/common/Pagination";
import SearchBar from "@/components/common/SearchBar";
import ProgressCircle from "@/components/common/ProgressCircle";
import KeyboardShortcuts from "@/components/common/KeyboardShortcuts";

import {
  Copy,
  Share2,
  Shuffle,
  Eye,
  EyeOff,
  CheckCircle2,
  Bookmark,
  BarChart2,
  Play,
} from "lucide-react";

import { QuestionTableSkeleton, StatsCardsSkeleton } from "@/components/common/Skeleton";
import CompanyAnalyticsSection from "@/components/company/CompanyAnalyticsSection";
import InterviewSimulatorModal from "@/components/company/InterviewSimulatorModal";

interface CompanyPageContentProps {
  companyName: string;
  companySlug: string;
  topicsList: readonly string[];
  questionsMap: Roadmap;
}

export default function CompanyPageContent({
  companyName,
  companySlug,
  topicsList,
  questionsMap,
}: CompanyPageContentProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const {
    solvedQuestions,
    bookmarkedQuestions,
    toggleSolved,
    toggleBookmarked,
    addRecentlyVisited,
    practiceMode,
    togglePracticeMode,
    isHydrated,
  } = useDSA();

  useEffect(() => {
    addRecentlyVisited(companyName, companySlug);
  }, [companyName, companySlug, addRecentlyVisited]);

  const initialSearch = searchParams.get("search") || "";
  const initialDifficulty = searchParams.get("difficulty") || "all";
  const initialTopic = searchParams.get("topic") || "all";
  const initialShowSolved = (searchParams.get("status") as any) || "all";
  const initialTab = (searchParams.get("tab") as any) || "all";

  const [activeTab, setActiveTab] = useState<
    "all" | "thirtyDays" | "threeMonths" | "sixMonths" | "moreThanSixMonths"
  >(initialTab);

  const [search, setSearch] = useState(initialSearch);
  const [difficulty, setDifficulty] = useState(initialDifficulty);
  const [topic, setTopic] = useState(initialTopic);
  const [showSolved, setShowSolved] = useState<"all" | "solved" | "unsolved">(
    initialShowSolved
  );
  const [showBookmarked, setShowBookmarked] = useState(
    searchParams.get("bookmarked") === "true"
  );
  const [sortBy, setSortBy] = useState<
    "frequency" | "alphabetical" | "difficulty"
  >("frequency");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const itemsPerPage = 20;
  const handleTabChange = useCallback((tabKey: typeof activeTab) => {
    setActiveTab(tabKey);
  }, []);

  const handleTopicClickFromAnalytics = useCallback((topicName: string) => {
    setTopic(topicName.toLowerCase());
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (difficulty !== "all") params.set("difficulty", difficulty);
    if (topic !== "all") params.set("topic", topic);
    if (showSolved !== "all") params.set("status", showSolved);
    if (showBookmarked) params.set("bookmarked", "true");
    if (activeTab !== "all") params.set("tab", activeTab);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [
    search,
    difficulty,
    topic,
    showSolved,
    showBookmarked,
    activeTab,
    router,
    pathname,
  ]);

  const rawQuestions = useMemo(() => {
    return questionsMap[activeTab] || [];
  }, [questionsMap, activeTab]);

  const solvedIdsSet = useMemo(
    () => new Set(solvedQuestions),
    [solvedQuestions]
  );
  const bookmarkedIdsSet = useMemo(
    () => new Set(bookmarkedQuestions),
    [bookmarkedQuestions]
  );

  // Stats for the dashboard
  const totalQ = rawQuestions.length;
  const easyCount = rawQuestions.filter((q) => q.difficulty === "Easy").length;
  const mediumCount = rawQuestions.filter((q) => q.difficulty === "Medium").length;
  const hardCount = rawQuestions.filter((q) => q.difficulty === "Hard").length;
  const companySolvedCount = useMemo(
    () => rawQuestions.filter((q) => solvedIdsSet.has(q.id)).length,
    [rawQuestions, solvedIdsSet]
  );
  const companyBookmarkedCount = useMemo(
    () => rawQuestions.filter((q) => bookmarkedIdsSet.has(q.id)).length,
    [rawQuestions, bookmarkedIdsSet]
  );
  const solvedPercentage = useMemo(
    () => calculateProgressPercentage(companySolvedCount, totalQ),
    [companySolvedCount, totalQ]
  );

  const filteredAndSortedQuestions = useMemo(() => {
    const filtered = filterQuestions(
      rawQuestions,
      { search, difficulty, topic, showSolved, showBookmarked },
      solvedIdsSet,
      bookmarkedIdsSet
    );
    return sortQuestions(filtered, sortBy, sortOrder);
  }, [
    rawQuestions,
    search,
    difficulty,
    topic,
    showSolved,
    showBookmarked,
    sortBy,
    sortOrder,
    solvedIdsSet,
    bookmarkedIdsSet,
  ]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, search, difficulty, topic, showSolved, showBookmarked, sortBy, sortOrder]);

  const paginatedQuestions = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedQuestions.slice(start, start + itemsPerPage);
  }, [filteredAndSortedQuestions, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedQuestions.length / itemsPerPage);

  const handleSurpriseMe = useCallback(() => {
    const unsolved = filteredAndSortedQuestions.filter(
      (q) => !solvedIdsSet.has(q.id)
    );
    const listToChoose =
      unsolved.length > 0 ? unsolved : filteredAndSortedQuestions;
    if (listToChoose.length === 0) return;
    const randomQuestion =
      listToChoose[Math.floor(Math.random() * listToChoose.length)];
    window.open(randomQuestion.link, "_blank");
  }, [filteredAndSortedQuestions, solvedIdsSet]);

  const handleClearAllFilters = useCallback(() => {
    setSearch("");
    setDifficulty("all");
    setTopic("all");
    setShowSolved("all");
    setShowBookmarked(false);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        if (e.key === "Escape") target.blur();
        return;
      }

      if (e.key === "/") {
        e.preventDefault();
        const input = document.querySelector(
          'input[type="text"]'
        ) as HTMLInputElement;
        input?.focus();
      } else if (e.key === "Escape") {
        handleClearAllFilters();
      } else if (e.key.toLowerCase() === "s" && !e.ctrlKey && !e.metaKey) {
        handleSurpriseMe();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleSurpriseMe, handleClearAllFilters]);

  const [copiedShare, setCopiedShare] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  const handleCopyUrl = () => {
    if (typeof window === "undefined") return;
    navigator.clipboard.writeText(window.location.href);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  const handleShare = () => {
    if (typeof window === "undefined") return;
    const text = `Solve company wise DSA sheet for ${companyName}! ${window.location.href}`;
    navigator.clipboard.writeText(text);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const isFiltered =
    search !== "" ||
    difficulty !== "all" ||
    topic !== "all" ||
    showSolved !== "all" ||
    showBookmarked;

  const tabsConfig = [
    { key: "all", label: "All" },
    { key: "thirtyDays", label: "30 Days" },
    { key: "threeMonths", label: "3 Months" },
    { key: "sixMonths", label: "6 Months" },
    { key: "moreThanSixMonths", label: "6 Months+" },
  ] as const;

  return (
    <div className="flex flex-col gap-6 w-full py-2 animate-fade-in">
      {/* ===== DASHBOARD HEADER ===== */}
      <div className="rounded-2xl border border-border bg-card/60 p-5 md:p-6 flex flex-col gap-5">
        {/* Top row: logo + name + actions */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-500 flex items-center justify-center text-white font-extrabold text-2xl shadow-md flex-shrink-0">
              {companyName.charAt(0)}
            </div>
            <div className="flex flex-col gap-0.5">
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                {companyName}
              </h1>
              <p className="text-sm text-muted-foreground font-medium">
                Interview Questions
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setIsSimulatorOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-extrabold rounded-lg bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white shadow-sm transition-all duration-200 cursor-pointer"
            >
              <Play className="h-3.5 w-3.5 fill-white" />
              <span>Interview Simulator</span>
            </button>

            <button
              onClick={handleSurpriseMe}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 text-indigo-400 transition-all duration-200"
              title="Press 'S' to trigger"
            >
              <Shuffle className="h-3.5 w-3.5" />
              Surprise Me
            </button>

            <button
              onClick={togglePracticeMode}
              className={cn(
                "inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg border transition-all duration-200",
                practiceMode
                  ? "bg-amber-500/10 border-amber-500/30 text-amber-500 hover:bg-amber-500/20"
                  : "bg-secondary/85 border-border hover:bg-secondary text-foreground"
              )}
              title="Hides difficulty & frequency until solved"
            >
              {practiceMode ? (
                <EyeOff className="h-3.5 w-3.5" />
              ) : (
                <Eye className="h-3.5 w-3.5" />
              )}
              Practice: {practiceMode ? "ON" : "OFF"}
            </button>

            <button
              onClick={handleCopyUrl}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg bg-secondary/80 hover:bg-secondary border border-border text-foreground transition-all duration-200"
            >
              <Copy className="h-3.5 w-3.5" />
              {copiedUrl ? "Copied!" : "Copy Link"}
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200"
            >
              <Share2 className="h-3.5 w-3.5" />
              {copiedShare ? "Copied!" : "Share"}
            </button>
          </div>
        </div>

        {/* Stats tiles */}
        {!isHydrated ? (
          <StatsCardsSkeleton />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {/* Progress circle tile */}
            <div className="col-span-2 sm:col-span-1 flex items-center justify-center p-3 rounded-xl border border-border bg-secondary/20">
              <ProgressCircle
                percentage={solvedPercentage}
                size={72}
                strokeWidth={6}
                label="Solved"
                sublabel={`${companySolvedCount}/${totalQ}`}
                color="#16c784"
              />
            </div>

            {/* Stat: Total */}
            <div className="flex flex-col items-center justify-center p-3 rounded-xl border border-border bg-secondary/20 gap-0.5">
              <BarChart2 className="h-4 w-4 text-muted-foreground mb-1" />
              <span className="text-xl font-extrabold text-foreground">{totalQ}</span>
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                Total
              </span>
            </div>

            {/* Stat: Easy */}
            <div className="flex flex-col items-center justify-center p-3 rounded-xl border border-[#16c784]/20 bg-[#16c784]/5 gap-0.5">
              <span className="text-xl font-extrabold text-[#16c784]">{easyCount}</span>
              <span className="text-[10px] font-bold text-[#16c784]/70 uppercase tracking-wide">
                Easy
              </span>
            </div>

            {/* Stat: Medium */}
            <div className="flex flex-col items-center justify-center p-3 rounded-xl border border-[#f59e0b]/20 bg-[#f59e0b]/5 gap-0.5">
              <span className="text-xl font-extrabold text-[#f59e0b]">{mediumCount}</span>
              <span className="text-[10px] font-bold text-[#f59e0b]/70 uppercase tracking-wide">
                Medium
              </span>
            </div>

            {/* Stat: Hard */}
            <div className="flex flex-col items-center justify-center p-3 rounded-xl border border-[#ef4444]/20 bg-[#ef4444]/5 gap-0.5">
              <span className="text-xl font-extrabold text-[#ef4444]">{hardCount}</span>
              <span className="text-[10px] font-bold text-[#ef4444]/70 uppercase tracking-wide">
                Hard
              </span>
            </div>

            {/* Stat: Bookmarked */}
            <div className="flex flex-col items-center justify-center p-3 rounded-xl border border-amber-500/20 bg-amber-500/5 gap-0.5">
              <Bookmark className="h-4 w-4 text-amber-500 mb-1" />
              <span className="text-xl font-extrabold text-amber-500">
                {companyBookmarkedCount}
              </span>
              <span className="text-[10px] font-bold text-amber-500/70 uppercase tracking-wide">
                Saved
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Feature 3 — Timeframe-Specific Company Topic Intelligence Section */}
      <CompanyAnalyticsSection
        companyName={companyName}
        questions={rawQuestions}
        solvedQuestionIds={solvedIdsSet}
        activeTopicFilter={topic}
        activeTimeframeLabel={
          tabsConfig.find((t) => t.key === activeTab)?.label || "All"
        }
        onTopicClick={handleTopicClickFromAnalytics}
      />

      {/* Feature 1 — Interview Simulator Modal */}
      <InterviewSimulatorModal
        companySlug={companySlug}
        companyName={companyName}
        questions={questionsMap.all}
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
      />

      {/* Tabs */}
      <div className="flex border-b border-border overflow-x-auto scrollbar-none gap-0">
        {tabsConfig.map((tab) => {
          const tabQuestions = questionsMap[tab.key] || [];
          if (tab.key !== "all" && tabQuestions.length === 0) return null;

          return (
            <button
              key={tab.key}
              type="button"
              onClick={(e) => {
                e.currentTarget.blur();
                handleTabChange(tab.key);
              }}
              className={cn(
                "px-4 py-2.5 font-bold text-sm border-b-2 whitespace-nowrap transition-all duration-200 flex items-center gap-1.5",
                activeTab === tab.key
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
              <span
                className={cn(
                  "text-[10px] px-1.5 py-0.5 rounded-full font-bold",
                  activeTab === tab.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
                )}
              >
                {tabQuestions.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search + filters */}
      <div className="flex flex-col gap-2">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search questions... (Press '/' to focus)"
          className="max-w-lg"
          showShortcut
        />
        <Filters
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          topic={topic}
          setTopic={setTopic}
          topicsList={topicsList as string[]}
          showSolved={showSolved}
          setShowSolved={setShowSolved}
          showBookmarked={showBookmarked}
          setShowBookmarked={setShowBookmarked}
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          onClearAll={handleClearAllFilters}
          isFiltered={isFiltered}
        />
      </div>

      {/* Table view */}
      <div className="flex flex-col gap-3 min-h-[600px]">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-semibold">
            Showing{" "}
            <span className="text-foreground font-bold">
              {filteredAndSortedQuestions.length}
            </span>{" "}
            of{" "}
            <span className="text-foreground font-bold">{totalQ}</span> questions
          </span>
          <span className="text-[10px] text-muted-foreground/60 hidden sm:flex items-center gap-1">
            Press <kbd className="bg-secondary border border-border rounded px-1 font-mono text-[10px]">?</kbd> for shortcuts
          </span>
        </div>
        {!isHydrated ? (
          <QuestionTableSkeleton rows={10} />
        ) : (
          <QuestionTable
            questions={paginatedQuestions}
            solvedIds={solvedIdsSet}
            bookmarkedIds={bookmarkedIdsSet}
            toggleSolved={toggleSolved}
            toggleBookmarked={toggleBookmarked}
          />
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Keyboard shortcuts modal */}
      <KeyboardShortcuts />
    </div>
  );
}
