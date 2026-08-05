"use client";

import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * Reusable, production-grade Skeleton component matching the dark theme token system.
 * Features a 1.5s infinite shimmer animation with zero layout shifts.
 */
export default function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-secondary/70 animate-shimmer",
        className
      )}
      {...props}
    />
  );
}

/**
 * Skeleton loader for Question Table rows.
 * Renders 8–12 placeholder rows perfectly matching the real table layout:
 * [Selection checkbox circle, Title, Topic chips, Difficulty badge, Frequency badge, Action icons].
 */
export function QuestionTableSkeleton({ rows = 10 }: { rows?: number }) {
  return (
    <div className="w-full rounded-2xl border border-border bg-card shadow-sm overflow-hidden animate-fade-in">
      {/* Header bar skeleton */}
      <div className="hidden md:flex items-center justify-between px-4 py-3 bg-muted/40 border-b border-border text-xs font-bold">
        <div className="flex items-center gap-3 w-16">
          <Skeleton className="h-6 w-6 rounded-md" />
          <Skeleton className="h-4 w-6 rounded" />
        </div>
        <div className="flex-1 max-w-md">
          <Skeleton className="h-4 w-36 rounded" />
        </div>
        <div className="w-48 hidden lg:block">
          <Skeleton className="h-4 w-24 rounded" />
        </div>
        <div className="w-24">
          <Skeleton className="h-4 w-16 rounded" />
        </div>
        <div className="w-24">
          <Skeleton className="h-4 w-16 rounded" />
        </div>
        <div className="w-20 text-right">
          <Skeleton className="h-4 w-12 rounded ml-auto" />
        </div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-border/50">
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-4 gap-3 bg-card/60"
          >
            {/* Left: Checkbox + Title */}
            <div className="flex items-center gap-3.5 flex-1 min-w-0">
              <Skeleton className="h-6 w-6 rounded-md shrink-0" />
              <div className="flex flex-col gap-1.5 flex-1">
                <Skeleton
                  className="h-5 rounded-md"
                  style={{ width: `${Math.floor(35 + (i * 17) % 45)}%`, minWidth: "140px" }}
                />
              </div>
            </div>

            {/* Middle: Topics */}
            <div className="hidden lg:flex items-center gap-1.5 w-48 shrink-0">
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>

            {/* Difficulty Badge */}
            <div className="w-24 shrink-0 hidden sm:block">
              <Skeleton className="h-6 w-16 rounded-lg" />
            </div>

            {/* Frequency Badge */}
            <div className="w-24 shrink-0 hidden sm:block">
              <Skeleton className="h-6 w-14 rounded-lg" />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1.5 shrink-0 sm:ml-auto">
              <Skeleton className="h-8 w-8 rounded-lg" />
              <Skeleton className="h-8 w-8 rounded-lg" />
              <Skeleton className="h-8 w-8 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Skeleton loader for Company Cards in CompanyGrid.
 */
export function CompanyGridSkeleton({ count = 12 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fade-in">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="p-5 rounded-2xl border border-border bg-card/60 flex flex-col gap-3 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-32 rounded-lg" />
            <Skeleton className="h-5 w-12 rounded-md" />
          </div>
          <Skeleton className="h-4 w-24 rounded" />
          <div className="mt-2 flex items-center justify-between pt-3 border-t border-border/50">
            <Skeleton className="h-3.5 w-20 rounded" />
            <Skeleton className="h-3.5 w-16 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Skeleton loader for Company Detail Stats Cards.
 */
export function StatsCardsSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 animate-fade-in">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="p-4 rounded-xl border border-border bg-card/60 flex flex-col gap-2 shadow-sm"
        >
          <Skeleton className="h-3.5 w-16 rounded" />
          <Skeleton className="h-7 w-20 rounded-lg mt-1" />
          <Skeleton className="h-2 w-full rounded-full mt-2" />
        </div>
      ))}
    </div>
  );
}

/**
 * Skeleton loader for Topic Intelligence & Readiness Section.
 */
export function TopicIntelligenceSkeleton() {
  return (
    <div className="w-full rounded-2xl border border-border bg-card/60 p-6 flex flex-col gap-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-xl" />
          <div className="flex flex-col gap-1.5">
            <Skeleton className="h-5 w-48 rounded" />
            <Skeleton className="h-3.5 w-36 rounded" />
          </div>
        </div>
        <Skeleton className="h-8 w-32 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="p-4 rounded-xl border border-border bg-background/50 flex flex-col gap-3">
            <Skeleton className="h-4 w-28 rounded" />
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-6 w-20 rounded-lg" />
              <Skeleton className="h-6 w-24 rounded-lg" />
              <Skeleton className="h-6 w-16 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Skeleton loader for Interview Atlas 150 page (/atlas-150).
 */
export function Atlas150Skeleton() {
  return (
    <div className="flex flex-col gap-8 animate-fade-in py-2">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4">
        <Skeleton className="h-8 w-44 rounded-full" />
        <Skeleton className="h-10 w-72 md:w-96 rounded-xl" />
        <Skeleton className="h-4 w-60 md:w-80 rounded" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="p-4 rounded-xl border border-border bg-card/60 flex flex-col gap-2">
            <Skeleton className="h-3.5 w-20 rounded" />
            <Skeleton className="h-7 w-16 rounded-lg" />
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <Skeleton className="h-10 w-full max-w-md rounded-xl" />
        <div className="flex gap-2">
          <Skeleton className="h-10 w-28 rounded-lg" />
          <Skeleton className="h-10 w-32 rounded-lg" />
        </div>
      </div>

      <QuestionTableSkeleton rows={10} />
    </div>
  );
}
