"use client";

import { useState, useMemo, useRef } from "react";
import { CompanyAnalyticsSummary, computeTimeframeAnalytics, CompanyTopicAnalytics } from "@/lib/analyticsEngine";
import { Question } from "@/types";
import { ensureVisibleOnMobile } from "@/lib/mobileScroll";
import {
  BarChart3,
  Target,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ListOrdered,
  Layers,
  ArrowRight,
  Info,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CompanyAnalyticsSectionProps {
  companyName: string;
  questions: readonly Question[];
  solvedQuestionIds: Set<string>;
  activeTopicFilter: string;
  activeTimeframeLabel: string;
  onTopicClick: (topicName: string) => void;
}

export default function CompanyAnalyticsSection({
  companyName,
  questions,
  solvedQuestionIds,
  activeTopicFilter,
  activeTimeframeLabel,
  onTopicClick,
}: CompanyAnalyticsSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [expandedHigh, setExpandedHigh] = useState(false);
  const [expandedMedium, setExpandedMedium] = useState(false);
  const [expandedLow, setExpandedLow] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const highRef = useRef<HTMLDivElement>(null);
  const mediumRef = useRef<HTMLDivElement>(null);
  const lowRef = useRef<HTMLDivElement>(null);

  const handleToggleMain = () => {
    const nextState = !isExpanded;
    setIsExpanded(nextState);
    if (nextState) {
      ensureVisibleOnMobile(containerRef.current);
    }
  };

  const handleToggleHigh = () => {
    const nextState = !expandedHigh;
    setExpandedHigh(nextState);
    if (nextState) {
      ensureVisibleOnMobile(highRef.current);
    }
  };

  const handleToggleMedium = () => {
    const nextState = !expandedMedium;
    setExpandedMedium(nextState);
    if (nextState) {
      ensureVisibleOnMobile(mediumRef.current);
    }
  };

  const handleToggleLow = () => {
    const nextState = !expandedLow;
    setExpandedLow(nextState);
    if (nextState) {
      ensureVisibleOnMobile(lowRef.current);
    }
  };

  // Compute analytics dynamically per active timeframe questions
  const analytics: CompanyAnalyticsSummary | null = useMemo(() => {
    return computeTimeframeAnalytics(questions, solvedQuestionIds, activeTimeframeLabel);
  }, [questions, solvedQuestionIds, activeTimeframeLabel]);

  const hasAnySolved = solvedQuestionIds.size > 0;

  // Compute Readiness Label & Badge Styling
  const readinessTier = useMemo(() => {
    if (!analytics) return { label: "Not Started", colorClass: "border-slate-500/30 bg-slate-500/10 text-slate-400" };
    const score = analytics.companyReadinessScore;

    if (!hasAnySolved || score === 0) {
      return { label: "Not Started", colorClass: "border-slate-500/30 bg-slate-500/10 text-slate-400" };
    }
    if (score < 25) {
      return { label: "Beginner", colorClass: "border-blue-500/30 bg-blue-500/10 text-blue-500" };
    }
    if (score < 60) {
      return { label: "Improving", colorClass: "border-amber-500/30 bg-amber-500/10 text-amber-500" };
    }
    if (score < 85) {
      return { label: "Interview Ready", colorClass: "border-emerald-500/30 bg-emerald-500/10 text-emerald-500" };
    }
    return { label: "Excellent", colorClass: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400" };
  }, [analytics, hasAnySolved]);

  if (!analytics) return null;

  const maxTopicCount = analytics.topics[0]?.count || 1;
  const recommendedOrder = analytics.topics.slice(0, 5);

  const renderTopicChip = (t: CompanyTopicAnalytics, bgClass: string, borderClass: string, textClass: string) => {
    const isSelected = activeTopicFilter.toLowerCase() === t.topicName.toLowerCase();

    return (
      <button
        key={t.topicName}
        onClick={() => onTopicClick(t.topicName)}
        className={cn(
          "px-3 py-1.5 rounded-xl border text-xs font-bold transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 flex items-center gap-1.5",
          isSelected
            ? "ring-2 ring-indigo-500 border-indigo-500 bg-indigo-500/20 text-indigo-400 font-extrabold shadow-sm"
            : `${bgClass} ${borderClass} ${textClass} hover:opacity-90`
        )}
      >
        <span>{t.topicName}</span>
        {hasAnySolved && t.progressPercentage > 0 && (
          <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-black/20 dark:bg-white/10 font-mono">
            {t.progressPercentage}%
          </span>
        )}
      </button>
    );
  };

  return (
    <div ref={containerRef} className="my-6 rounded-2xl border border-border bg-card/60 shadow-sm overflow-hidden animate-fade-in transition-all">
      {/* Header Bar */}
      <div
        onClick={handleToggleMain}
        className="flex flex-col sm:flex-row sm:items-center justify-between px-5 py-4 bg-muted/30 cursor-pointer select-none border-b border-border/60 hover:bg-muted/50 transition-colors gap-3"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
            <BarChart3 className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-base text-foreground tracking-tight flex items-center gap-2">
              Topic Intelligence & Readiness ({activeTimeframeLabel})
            </h3>
            <p className="text-xs text-muted-foreground font-medium">
              Timeframe-aware frequency ranking & priority breakdown for {companyName}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          {/* Readiness Meter Badge */}
          <div className={cn("flex items-center gap-2 px-3.5 py-1.5 rounded-xl border transition-all", readinessTier.colorClass)}>
            <Target className="h-4 w-4" />
            <span className="text-xs font-extrabold">
              {readinessTier.label} ({analytics.companyReadinessScore}%)
            </span>
          </div>

          <button className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="p-5 flex flex-col gap-6">
          {!hasAnySolved && (
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-indigo-500/5 border border-indigo-500/20 text-xs font-medium text-muted-foreground">
              <Info className="h-4 w-4 text-indigo-400 shrink-0" />
              <span>Solve questions to start tracking your topic progress and readiness score for {activeTimeframeLabel}.</span>
            </div>
          )}

          {/* 1. Most Asked Topics (Frequency Bars) */}
          <div>
            <span className="text-xs font-extrabold text-muted-foreground uppercase tracking-wider block mb-3.5 flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5 text-indigo-400" />
              Most Asked Topics — {activeTimeframeLabel} ({analytics.totalQuestions} Questions)
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {analytics.topics.slice(0, 6).map((t) => {
                const barWidth = Math.max(10, Math.round((t.count / maxTopicCount) * 100));
                const isSelected = activeTopicFilter.toLowerCase() === t.topicName.toLowerCase();

                return (
                  <div
                    key={t.topicName}
                    onClick={() => onTopicClick(t.topicName)}
                    className={cn(
                      "flex flex-col gap-2 p-3.5 rounded-xl border cursor-pointer transition-all duration-200 group hover:scale-[1.01]",
                      isSelected
                        ? "border-indigo-500 bg-indigo-500/10 ring-1 ring-indigo-500"
                        : "border-border/60 bg-secondary/20 hover:bg-secondary/50 hover:border-indigo-500/40"
                    )}
                  >
                    <div className="flex items-center justify-between text-xs font-extrabold">
                      <span className="text-foreground group-hover:text-indigo-400 transition-colors">
                        {t.topicName}
                      </span>
                      <span className="text-muted-foreground font-mono">
                        {t.count} questions ({t.percentage}%)
                      </span>
                    </div>

                    <div className="w-full bg-secondary/80 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-400 h-2.5 rounded-full transition-all duration-700 ease-out"
                        style={{ width: `${barWidth}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. Timeframe Recommended Learning Order */}
          <div className="p-4 rounded-xl border border-border/60 bg-muted/20 flex flex-col gap-3">
            <span className="text-xs font-extrabold text-foreground uppercase tracking-wider flex items-center gap-1.5">
              <ListOrdered className="h-4 w-4 text-indigo-500" /> Recommended Learning Order ({activeTimeframeLabel})
            </span>

            <div className="flex flex-wrap items-center gap-2">
              {recommendedOrder.map((t, idx) => (
                <div key={t.topicName} className="flex items-center gap-2">
                  <button
                    onClick={() => onTopicClick(t.topicName)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-secondary/70 border border-border/80 hover:border-indigo-500 text-xs font-bold text-foreground hover:text-indigo-400 transition-all cursor-pointer"
                  >
                    <span className="h-4 w-4 rounded-full bg-indigo-500/20 text-indigo-500 flex items-center justify-center text-[10px] font-black">
                      {idx + 1}
                    </span>
                    <span>{t.topicName}</span>
                  </button>
                  {idx < recommendedOrder.length - 1 && (
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/40 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 3. Priority Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {/* HIGH PRIORITY */}
            <div ref={highRef} className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-emerald-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" /> High Priority (Top 25%)
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {(expandedHigh
                  ? analytics.highPriorityTopics
                  : analytics.highPriorityTopics.slice(0, 6)
                ).map((t) =>
                  renderTopicChip(
                    t,
                    "bg-emerald-500/10",
                    "border-emerald-500/30",
                    "text-emerald-600 dark:text-emerald-400"
                  )
                )}
              </div>

              {analytics.highPriorityTopics.length > 6 && (
                <button
                  type="button"
                  onClick={handleToggleHigh}
                  className="text-[11px] font-bold text-emerald-500 hover:underline self-start mt-1 cursor-pointer"
                >
                  {expandedHigh ? "Show Less" : `+${analytics.highPriorityTopics.length - 6} more`}
                </button>
              )}
            </div>

            {/* MEDIUM PRIORITY */}
            <div ref={mediumRef} className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-amber-500 uppercase tracking-wider flex items-center gap-1.5">
                  Medium Priority (Middle 50%)
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {(expandedMedium
                  ? analytics.mediumPriorityTopics
                  : analytics.mediumPriorityTopics.slice(0, 6)
                ).map((t) =>
                  renderTopicChip(
                    t,
                    "bg-amber-500/10",
                    "border-amber-500/30",
                    "text-amber-600 dark:text-amber-400"
                  )
                )}
              </div>

              {analytics.mediumPriorityTopics.length > 6 && (
                <button
                  type="button"
                  onClick={handleToggleMedium}
                  className="text-[11px] font-bold text-amber-500 hover:underline self-start mt-1 cursor-pointer"
                >
                  {expandedMedium ? "Show Less" : `+${analytics.mediumPriorityTopics.length - 6} more`}
                </button>
              )}
            </div>

            {/* LOW PRIORITY */}
            <div ref={lowRef} className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                  Low Priority (Bottom 25%)
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {(expandedLow
                  ? analytics.lowPriorityTopics
                  : analytics.lowPriorityTopics.slice(0, 6)
                ).map((t) =>
                  renderTopicChip(
                    t,
                    "bg-blue-500/10",
                    "border-blue-500/30",
                    "text-blue-500 dark:text-blue-400"
                  )
                )}
              </div>

              {analytics.lowPriorityTopics.length > 6 && (
                <button
                  type="button"
                  onClick={handleToggleLow}
                  className="text-[11px] font-bold text-blue-400 hover:underline self-start mt-1 cursor-pointer"
                >
                  {expandedLow ? "Show Less" : `+${analytics.lowPriorityTopics.length - 6} more`}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
