"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Question, Roadmap } from "@/types";
import { useDSA } from "@/hooks/useDSA";
import { filterQuestions, sortQuestions, calculateProgressPercentage, cn } from "@/lib/utils";

import Filters from "@/components/common/Filters";
import QuestionTable from "@/components/question/QuestionTable";
import Pagination from "@/components/common/Pagination";
import SearchBar from "@/components/common/SearchBar";

import {
  Copy,
  Share2,
  Shuffle,
  Eye,
  EyeOff,
  Keyboard,
  CheckCircle,
} from "lucide-react";

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
  const [showSolved, setShowSolved] = useState<"all" | "solved" | "unsolved">(initialShowSolved);
  const [showBookmarked, setShowBookmarked] = useState(searchParams.get("bookmarked") === "true");

  const [sortBy, setSortBy] = useState<"frequency" | "alphabetical" | "difficulty">(
    "frequency"
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (difficulty !== "all") params.set("difficulty", difficulty);
    if (topic !== "all") params.set("topic", topic);
    if (showSolved !== "all") params.set("status", showSolved);
    if (showBookmarked) params.set("bookmarked", "true");
    if (activeTab !== "all") params.set("tab", activeTab);

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [search, difficulty, topic, showSolved, showBookmarked, activeTab, router, pathname]);

  const rawQuestions = useMemo(() => {
    return questionsMap[activeTab] || [];
  }, [questionsMap, activeTab]);

  const solvedIdsSet = useMemo(() => new Set(solvedQuestions), [solvedQuestions]);
  const bookmarkedIdsSet = useMemo(() => new Set(bookmarkedQuestions), [bookmarkedQuestions]);

  const companySolvedCount = useMemo(() => {
    return rawQuestions.filter((q) => solvedIdsSet.has(q.id)).length;
  }, [rawQuestions, solvedIdsSet]);

  const solvedPercentage = useMemo(() => {
    return calculateProgressPercentage(companySolvedCount, rawQuestions.length);
  }, [companySolvedCount, rawQuestions.length]);

  const filteredAndSortedQuestions = useMemo(() => {
    const filtered = filterQuestions(
      rawQuestions,
      { search, difficulty, topic, showSolved, showBookmarked },
      solvedIdsSet,
      bookmarkedIdsSet
    );
    return sortQuestions(filtered, sortBy, sortOrder);
  }, [rawQuestions, search, difficulty, topic, showSolved, showBookmarked, sortBy, sortOrder, solvedIdsSet, bookmarkedIdsSet]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, search, difficulty, topic, showSolved, showBookmarked, sortBy, sortOrder]);

  const paginatedQuestions = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedQuestions.slice(start, start + itemsPerPage);
  }, [filteredAndSortedQuestions, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedQuestions.length / itemsPerPage);

  const handleSurpriseMe = useCallback(() => {
    const unsolved = filteredAndSortedQuestions.filter((q) => !solvedIdsSet.has(q.id));
    const listToChoose = unsolved.length > 0 ? unsolved : filteredAndSortedQuestions;
    if (listToChoose.length === 0) return;
    const randomQuestion = listToChoose[Math.floor(Math.random() * listToChoose.length)];
    window.open(randomQuestion.link, "_blank");
  }, [filteredAndSortedQuestions, solvedIdsSet]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
        if (e.key === "Escape") {
          target.blur();
        }
        return;
      }

      if (e.key === "/") {
        e.preventDefault();
        const input = document.querySelector('input[type="text"]') as HTMLInputElement;
        input?.focus();
      } else if (e.key === "Escape") {
        handleClearAllFilters();
      } else if (e.key.toLowerCase() === "s") {
        handleSurpriseMe();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleSurpriseMe]);

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

  const handleClearAllFilters = () => {
    setSearch("");
    setDifficulty("all");
    setTopic("all");
    setShowSolved("all");
    setShowBookmarked(false);
  };

  const tabsConfig = [
    { key: "all", label: "All Questions" },
    { key: "thirtyDays", label: "30 Days" },
    { key: "threeMonths", label: "3 Months" },
    { key: "sixMonths", label: "6 Months" },
    { key: "moreThanSixMonths", label: "More Than 6 Months" },
  ] as const;

  return (
    <div className="flex flex-col gap-8 w-full py-4">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-border">
        <div className="flex items-center gap-8">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-600 to-emerald-500 flex items-center justify-center text-white font-extrabold text-2xl shadow-md">
            {companyName.charAt(0)}
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-extrabold tracking-tight">{companyName} DSA Sheet</h1>
            <p className="text-sm text-muted-foreground font-medium">
              Solve curated questions asked in {companyName} technical interviews.
            </p>
            {/* Simple Text solved progress */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-500 mt-1">
              <CheckCircle className="h-3.5 w-3.5" />
              <span>Solved: {companySolvedCount} / {rawQuestions.length} ({solvedPercentage.toFixed(1)}%)</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleSurpriseMe}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 text-indigo-400 transition-all duration-200"
            title="Press 'S' hotkey to trigger"
          >
            <Shuffle className="h-3.5 w-3.5" />
            <span>Surprise Me</span>
          </button>

          <button
            onClick={togglePracticeMode}
            className={cn(
              "inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg border transition-all duration-200",
              practiceMode
                ? "bg-amber-500/10 border-amber-500/30 text-amber-500 hover:bg-amber-500/20"
                : "bg-secondary/85 border-border hover:bg-secondary text-foreground"
            )}
            title="Hide difficulty until you solve problems"
          >
            {practiceMode ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
            <span>Practice Mode: {practiceMode ? "ON" : "OFF"}</span>
          </button>

          <button
            onClick={handleCopyUrl}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg bg-secondary/80 hover:bg-secondary border border-border text-foreground transition-all duration-200"
          >
            <Copy className="h-3.5 w-3.5" />
            <span>{copiedUrl ? "Copied!" : "Copy Page Link"}</span>
          </button>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200"
          >
            <Share2 className="h-3.5 w-3.5" />
            <span>{copiedShare ? "Copied!" : "Share Progress"}</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border overflow-x-auto scrollbar-none gap-4">
        {tabsConfig.map((tab) => {
          const tabQuestions = questionsMap[tab.key] || [];
          if (tab.key !== "all" && tabQuestions.length === 0) return null;

          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                  "px-5 py-3 font-bold text-sm border-b-2 whitespace-nowrap transition-all duration-200",
                  activeTab === tab.key
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
            >
              {tab.label} ({tabQuestions.length})
            </button>
          );
        })}
      </div>

      {/* Instant Search input */}
      <div className="flex items-center gap-2">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search from sheet questions (Press '/' to focus)..."
          className="max-w-md"
        />
        <div className="p-2 rounded-lg bg-secondary/40 text-muted-foreground border border-border text-xs flex items-center gap-1 font-semibold select-none hidden sm:flex">
          <Keyboard className="h-3.5 w-3.5" />
          <span>Press &quot;/&quot; to search, &quot;Esc&quot; to clear</span>
        </div>
      </div>

      {/* Filters and sorting */}
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

      {/* Table view */}
      <div className="flex flex-col gap-4">
        <div className="text-xs text-muted-foreground font-semibold">
          Showing {filteredAndSortedQuestions.length} of {rawQuestions.length} questions
        </div>
        <QuestionTable
          questions={paginatedQuestions}
          solvedIds={solvedIdsSet}
          bookmarkedIds={bookmarkedIdsSet}
          toggleSolved={toggleSolved}
          toggleBookmarked={toggleBookmarked}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
