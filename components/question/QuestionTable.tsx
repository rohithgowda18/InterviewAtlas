"use client";

import { useState } from "react";
import { ExternalLink, FileText } from "lucide-react";
import { Question } from "@/types";
import DifficultyBadge from "@/components/common/DifficultyBadge";
import TopicBadge from "@/components/common/TopicBadge";
import BookmarkButton from "@/components/common/BookmarkButton";
import { useDSA } from "@/hooks/useDSA";

interface QuestionTableProps {
  questions: readonly Question[];
  solvedIds: Set<string>;
  bookmarkedIds: Set<string>;
  toggleSolved: (id: string) => void;
  toggleBookmarked: (id: string) => void;
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

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center border border-border bg-card rounded-xl">
        <span className="text-muted-foreground text-sm font-medium">No questions found matching the criteria.</span>
      </div>
    );
  }

  const toggleNotes = (id: string) => {
    setExpandedNotesId(expandedNotesId === id ? null : id);
  };

  return (
    <div className="w-full overflow-hidden border border-border bg-white/70 dark:bg-black/70 backdrop-blur-lg rounded-xl shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-white/70 dark:bg-black/70 backdrop-blur-lg text-xs font-bold text-muted-foreground uppercase tracking-wider sticky top-0 z-10 select-none">
              <th className="py-2.5 px-4 w-14 text-center">Status</th>
              <th className="py-2.5 px-4 min-w-[200px]">Title</th>
              <th className="py-2.5 px-4 min-w-[220px]">Topics</th>
              <th className="py-2.5 px-4 w-28">Difficulty</th>
              <th className="py-2.5 px-4 w-28 text-right">Frequency</th>
              <th className="py-2.5 px-4 w-20 text-center">Notes</th>
              <th className="py-2.5 px-4 w-20 text-center">Bookmark</th>
              <th className="py-2.5 px-4 w-24 text-center">Solve</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {questions.map((q) => {
              const isSolved = solvedIds.has(q.id);
              const isBookmarked = bookmarkedIds.has(q.id);
              const noteText = notes[q.id] || "";
              const isNotesExpanded = expandedNotesId === q.id;

              const hideStats = practiceMode && !isSolved;

              return (
                                <tr
                  key={q.id}
                  className={`group border-b border-border bg-white/70 dark:bg-black/70 backdrop-blur-lg hover:bg-white/60 dark:hover:bg-black/60 ${isSolved ? "bg-emerald-500/[0.015]" : ""}`}
                >
                  {/* Solve Status Checkbox */}
                  <td className="py-2 px-4 text-center">
                    <input
                      type="checkbox"
                      checked={isSolved}
                      onChange={() => toggleSolved(q.id)}
                      className="h-4.5 w-4.5 rounded border-border/80 bg-secondary/50 text-emerald-500 focus:ring-emerald-500/20 focus:ring-offset-0 cursor-pointer transition-all accent-emerald-500"
                      aria-label={`Mark "${q.title}" as solved`}
                    />
                  </td>

                  {/* Title Link */}
                  <td className="py-2 px-4 font-bold text-foreground">
                    <a
                      href={q.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                    >
                      {q.title}
                    </a>
                  </td>

                  {/* Topic Badges */}
                  <td className="py-2 px-4">
                    <div className="flex flex-wrap gap-1.5 max-w-md">
                      {q.topics.map((topic) => (
                        <TopicBadge key={topic} topic={topic} />
                      ))}
                    </div>
                  </td>

                  {/* Difficulty Badge */}
                  <td className="py-2 px-4">
                    {hideStats ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border bg-secondary/35 text-muted-foreground/80 border-border select-none">
                        Locked
                      </span>
                    ) : (
                      <DifficultyBadge difficulty={q.difficulty} />
                    )}
                  </td>

                  {/* Frequency Progress Bar */}
                  <td className="py-2 px-4 text-right font-semibold text-foreground/85">{q.frequency.toFixed(0)}%</td>

                  {/* Expand Notes Button */}
                  <td className="py-2 px-4 text-center">
                    <button
                      onClick={() => toggleNotes(q.id)}
                      className={`p-1.5 rounded-lg border transition-all duration-200 ${
                        noteText
                          ? "bg-blue-500/10 border-blue-500/30 text-blue-500 hover:bg-blue-500/20"
                          : "bg-transparent border-border hover:bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                      title={noteText ? "Edit notes (Notes present)" : "Add notes"}
                      aria-label="Toggle notes"
                    >
                      <FileText className="h-4 w-4" />
                    </button>
                  </td>

                  {/* Bookmark Button */}
                  <td className="py-2 px-4 text-center">
                    <BookmarkButton
                      isBookmarked={isBookmarked}
                      onToggle={() => toggleBookmarked(q.id)}
                    />
                  </td>

                  {/* Solve External Link */}
                  <td className="py-2 px-4 text-center">
                    <a
                      href={q.link}
                      target="_blank"
                      rel="noopener noreferrer"
                       className="inline-flex items-center justify-center p-2 rounded-lg bg-white/70 dark:bg-black/70 backdrop-blur border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      aria-label={`Solve "${q.title}" on Leetcode`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </td>

                  {/* Inline Expanded Notes Editor */}
                  {isNotesExpanded && (
                    <td colSpan={8} className="bg-secondary/10 p-4 border-b border-border/70">
                      <div className="flex flex-col gap-2 max-w-3xl">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider select-none">
                          My Revision Notes
                        </span>
                        <textarea
                          value={noteText}
                          onChange={(e) => setNote(q.id, e.target.value)}
                          placeholder="Write approach details, optimal code snippets, time/space complexity tips..."
                          className="w-full min-h-[90px] p-3 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-all"
                        />
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
