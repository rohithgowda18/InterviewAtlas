"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ExternalLink, FileText, Bookmark, CheckSquare } from "lucide-react";
import { Question } from "@/types";
import DifficultyBadge from "@/components/common/DifficultyBadge";
import TopicBadge from "@/components/common/TopicBadge";
import { useDSA } from "@/hooks/useDSA";
import { cn } from "@/lib/utils";

interface QuestionTableProps {
  questions: readonly Question[];
  solvedIds: Set<string>;
  bookmarkedIds: Set<string>;
  toggleSolved: (id: string) => void;
  toggleBookmarked: (id: string) => void;
}

function FrequencyLabel({ freq }: { freq: number }) {
  if (freq >= 75) {
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/10 border border-rose-500/20 text-rose-400">
        Hot
      </span>
    );
  }
  if (freq >= 45) {
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 border border-amber-500/20 text-amber-400">
        High
      </span>
    );
  }
  if (freq >= 20) {
    return (
      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 border border-blue-500/20 text-blue-400">
        Med
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-secondary border border-border text-muted-foreground">
      Low
    </span>
  );
}

// Mobile card layout for a single question
function QuestionCard({
  q,
  isSolved,
  isBookmarked,
  noteText,
  isNotesExpanded,
  hideStats,
  focused,
  onToggleSolved,
  onToggleBookmarked,
  onToggleNotes,
  setNote,
}: {
  q: Question;
  isSolved: boolean;
  isBookmarked: boolean;
  noteText: string;
  isNotesExpanded: boolean;
  hideStats: boolean;
  focused: boolean;
  onToggleSolved: () => void;
  onToggleBookmarked: () => void;
  onToggleNotes: () => void;
  setNote: (id: string, text: string) => void;
}) {
  return (
    <div
      className={cn(
        "p-4 border-b border-border/60 transition-colors duration-150",
        isSolved && "bg-[#16c784]/[0.03]",
        focused && "bg-indigo-500/[0.05] border-l-2 border-l-indigo-500"
      )}
    >
      <div className="flex items-start gap-3">
        {/* Checkbox */}
        <button
          onClick={onToggleSolved}
          className={cn(
            "flex-shrink-0 h-5 w-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 mt-0.5",
            isSolved
              ? "bg-[#16c784] border-[#16c784] text-white"
              : "border-border hover:border-[#16c784]/50"
          )}
          aria-label={`Mark "${q.title}" as solved`}
        >
          {isSolved && <CheckSquare className="h-3 w-3" />}
        </button>

        <div className="flex-1 min-w-0">
          {/* Title */}
          <a
            href={q.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "font-bold text-sm text-foreground hover:text-indigo-400 transition-colors line-clamp-2",
              isSolved && "line-through text-muted-foreground"
            )}
          >
            {q.title}
          </a>

          {/* Badges row */}
          <div className="flex flex-wrap items-center gap-1.5 mt-2">
            {!hideStats && <DifficultyBadge difficulty={q.difficulty} />}
            {hideStats && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border bg-secondary/35 text-muted-foreground/80 border-border">
                ?
              </span>
            )}
            {!hideStats && <FrequencyLabel freq={q.frequency} />}
          </div>

          {/* Topics */}
          <div className="flex flex-wrap gap-1 mt-2">
            {q.topics.slice(0, 3).map((t) => (
              <TopicBadge key={t} topic={t} />
            ))}
            {q.topics.length > 3 && (
              <span className="text-[10px] text-muted-foreground">
                +{q.topics.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-1.5 flex-shrink-0">
          <button
            onClick={onToggleBookmarked}
            className={cn(
              "h-7 w-7 flex items-center justify-center rounded-lg border transition-all duration-200",
              isBookmarked
                ? "bg-amber-500/10 border-amber-500/30 text-amber-500"
                : "border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
            )}
          >
            <Bookmark
              className={cn(
                "h-3.5 w-3.5",
                isBookmarked && "fill-amber-500"
              )}
            />
          </button>
          <a
            href={q.link}
            target="_blank"
            rel="noopener noreferrer"
            className="h-7 w-7 flex items-center justify-center rounded-lg border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
            aria-label={`Solve "${q.title}" on LeetCode`}
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Notes */}
      {isNotesExpanded && (
        <div className="mt-3 ml-8 bg-secondary/10 rounded-lg p-3 border border-border/70">
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-1.5">
            My Notes
          </span>
          <textarea
            value={noteText}
            onChange={(e) => setNote(q.id, e.target.value)}
            placeholder="Write approach, complexity, tips..."
            className="w-full min-h-[70px] p-2 rounded-lg border border-border bg-background text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-all"
          />
        </div>
      )}
    </div>
  );
}

export default function QuestionTable({
  questions,
  solvedIds,
  bookmarkedIds,
  toggleSolved,
  toggleBookmarked,
}: QuestionTableProps) {
  const { notes, setNote, practiceMode } = useDSA();
  const [expandedNotesId, setExpandedNotesId] = useState<string | null>(null);
  const [focusedIdx, setFocusedIdx] = useState<number>(-1);
  const tableRef = useRef<HTMLDivElement>(null);

  const toggleNotes = (id: string) => {
    setExpandedNotesId(expandedNotesId === id ? null : id);
  };

  // j/k keyboard navigation + b/s shortcuts
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      )
        return;

      if (e.key === "j") {
        e.preventDefault();
        setFocusedIdx((i) => Math.min(i + 1, questions.length - 1));
      } else if (e.key === "k") {
        e.preventDefault();
        setFocusedIdx((i) => Math.max(i - 1, 0));
      } else if (e.key === "b" && focusedIdx >= 0) {
        const q = questions[focusedIdx];
        if (q) toggleBookmarked(q.id);
      } else if (e.key === "Enter" && focusedIdx >= 0) {
        const q = questions[focusedIdx];
        if (q) window.open(q.link, "_blank");
      }
    },
    [questions, focusedIdx, toggleBookmarked]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center border border-border bg-card rounded-xl">
        <span className="text-muted-foreground text-sm font-medium">
          No questions found matching the criteria.
        </span>
      </div>
    );
  }

  return (
    <div
      ref={tableRef}
      className="w-full overflow-hidden border border-border bg-white/70 dark:bg-black/70 backdrop-blur-lg rounded-xl shadow-sm"
    >
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary/20 text-[10px] font-bold text-muted-foreground uppercase tracking-wider sticky top-0 z-10 select-none">
              <th className="py-2.5 px-3 w-10 text-center">#</th>
              <th className="py-2.5 px-3 min-w-[220px]">Title</th>
              <th className="py-2.5 px-3 min-w-[200px]">Topics</th>
              <th className="py-2.5 px-3 w-24">Difficulty</th>
              <th className="py-2.5 px-3 w-20 text-center">Freq</th>
              <th className="py-2.5 px-3 w-9 text-center">
                <FileText className="h-3.5 w-3.5 inline" />
              </th>
              <th className="py-2.5 px-3 w-9 text-center">
                <Bookmark className="h-3.5 w-3.5 inline" />
              </th>
              <th className="py-2.5 px-3 w-9 text-center">↗</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {questions.map((q, idx) => {
              const isSolved = solvedIds.has(q.id);
              const isBookmarked = bookmarkedIds.has(q.id);
              const noteText = notes[q.id] || "";
              const isNotesExpanded = expandedNotesId === q.id;
              const hideStats = practiceMode && !isSolved;
              const isFocused = focusedIdx === idx;

              return (
                <>
                  <tr
                    key={q.id}
                    onClick={() => setFocusedIdx(idx)}
                    className={cn(
                      "group transition-colors duration-100 cursor-pointer",
                      isSolved
                        ? "bg-[#16c784]/[0.03] hover:bg-[#16c784]/[0.06]"
                        : "hover:bg-secondary/20",
                      isFocused &&
                        "bg-indigo-500/[0.05] ring-1 ring-inset ring-indigo-500/20"
                    )}
                  >
                    {/* Solved checkbox */}
                    <td className="py-2.5 px-3 text-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSolved(q.id);
                        }}
                        className={cn(
                          "h-5 w-5 rounded-full border-2 flex items-center justify-center mx-auto transition-all duration-200",
                          isSolved
                            ? "bg-[#16c784] border-[#16c784] text-white"
                            : "border-border hover:border-[#16c784]/50"
                        )}
                        aria-label={`Mark "${q.title}" as solved`}
                      >
                        {isSolved && (
                          <svg
                            className="h-2.5 w-2.5"
                            viewBox="0 0 12 12"
                            fill="currentColor"
                          >
                            <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                          </svg>
                        )}
                      </button>
                    </td>

                    {/* Title */}
                    <td className="py-2.5 px-3">
                      <a
                        href={q.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={cn(
                          "font-bold text-sm hover:text-indigo-400 transition-colors",
                          isSolved
                            ? "line-through text-muted-foreground"
                            : "text-foreground"
                        )}
                      >
                        {q.title}
                      </a>
                    </td>

                    {/* Topics */}
                    <td className="py-2.5 px-3">
                      <div className="flex flex-wrap gap-1 max-w-xs">
                        {q.topics.slice(0, 3).map((t) => (
                          <TopicBadge key={t} topic={t} />
                        ))}
                        {q.topics.length > 3 && (
                          <span className="text-[10px] text-muted-foreground self-center">
                            +{q.topics.length - 3}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Difficulty */}
                    <td className="py-2.5 px-3">
                      {hideStats ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border bg-secondary/35 text-muted-foreground/80 border-border select-none">
                          ?
                        </span>
                      ) : (
                        <DifficultyBadge difficulty={q.difficulty} />
                      )}
                    </td>

                    {/* Frequency */}
                    <td className="py-2.5 px-3 text-center">
                      {hideStats ? (
                        <span className="text-muted-foreground text-xs">—</span>
                      ) : (
                        <FrequencyLabel freq={q.frequency} />
                      )}
                    </td>

                    {/* Notes button */}
                    <td className="py-2.5 px-3 text-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleNotes(q.id);
                        }}
                        className={cn(
                          "p-1.5 rounded-lg border transition-all duration-200",
                          noteText
                            ? "bg-blue-500/10 border-blue-500/30 text-blue-400 hover:bg-blue-500/20"
                            : "border-border text-muted-foreground hover:bg-secondary hover:text-foreground"
                        )}
                        title={noteText ? "Edit notes" : "Add notes"}
                      >
                        <FileText className="h-3.5 w-3.5" />
                      </button>
                    </td>

                    {/* Bookmark */}
                    <td className="py-2.5 px-3 text-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBookmarked(q.id);
                        }}
                        className={cn(
                          "p-1.5 rounded-lg border transition-all duration-200",
                          isBookmarked
                            ? "bg-amber-500/10 border-amber-500/30 text-amber-500 hover:bg-amber-500/20"
                            : "border-border text-muted-foreground hover:bg-secondary hover:text-foreground"
                        )}
                        aria-label={isBookmarked ? "Remove bookmark" : "Bookmark"}
                      >
                        <Bookmark
                          className={cn(
                            "h-3.5 w-3.5",
                            isBookmarked && "fill-amber-500"
                          )}
                        />
                      </button>
                    </td>

                    {/* External link */}
                    <td className="py-2.5 px-3 text-center">
                      <a
                        href={q.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg border border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 inline-flex items-center justify-center"
                        aria-label={`Open "${q.title}" on LeetCode`}
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </td>
                  </tr>

                  {/* Notes expansion row */}
                  {isNotesExpanded && (
                    <tr key={`${q.id}-notes`} className="bg-secondary/10">
                      <td colSpan={8} className="px-4 py-3 border-b border-border/60">
                        <div className="flex flex-col gap-2 max-w-3xl">
                          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                            My Revision Notes
                          </span>
                          <textarea
                            value={noteText}
                            onChange={(e) => setNote(q.id, e.target.value)}
                            placeholder="Write approach, optimal code, time/space complexity..."
                            className="w-full min-h-[80px] p-3 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-all"
                          />
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile card layout */}
      <div className="md:hidden divide-y divide-border/50">
        {questions.map((q, idx) => {
          const isSolved = solvedIds.has(q.id);
          const isBookmarked = bookmarkedIds.has(q.id);
          const noteText = notes[q.id] || "";
          const isNotesExpanded = expandedNotesId === q.id;
          const hideStats = practiceMode && !isSolved;
          const isFocused = focusedIdx === idx;

          return (
            <QuestionCard
              key={q.id}
              q={q}
              isSolved={isSolved}
              isBookmarked={isBookmarked}
              noteText={noteText}
              isNotesExpanded={isNotesExpanded}
              hideStats={hideStats}
              focused={isFocused}
              onToggleSolved={() => toggleSolved(q.id)}
              onToggleBookmarked={() => toggleBookmarked(q.id)}
              onToggleNotes={() => toggleNotes(q.id)}
              setNote={setNote}
            />
          );
        })}
      </div>
    </div>
  );
}
