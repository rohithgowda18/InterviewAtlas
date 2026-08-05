"use client";

import { useState, useRef, useEffect } from "react";
import { ensureVisibleOnMobile } from "@/lib/mobileScroll";
import { cn } from "@/lib/utils";

interface OverflowTopicChipProps {
  hiddenTopics: readonly string[];
  totalHidden: number;
  className?: string;
}

/**
 * OverflowTopicChip Component
 * Renders a rounded pill matching TopicBadge design system tokens ("+2 more" or "More").
 * Shows a popover/tooltip on desktop hover or mobile tap with all hidden topics.
 */
export default function OverflowTopicChip({
  hiddenTopics,
  totalHidden,
  className,
}: OverflowTopicChipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close popover when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        className={cn(
          "inline-flex items-center px-2.5 py-1 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer select-none",
          "bg-secondary/50 text-muted-foreground border border-border/80 hover:bg-secondary hover:text-foreground hover:border-border shadow-xs",
          isOpen && "bg-secondary text-foreground border-border ring-1 ring-ring/30",
          className
        )}
        title="View all topics"
        aria-expanded={isOpen}
        aria-label={`+${totalHidden} more topics`}
      >
        <span className="hidden xs:inline">+{totalHidden} more</span>
        <span className="xs:hidden">+{totalHidden}</span>
      </button>

      {/* Popover / Tooltip */}
      {isOpen && (
        <div
          ref={(el) => ensureVisibleOnMobile(el)}
          onClick={(e) => e.stopPropagation()}
          className="absolute left-0 bottom-full mb-1.5 z-50 min-w-[160px] max-w-[240px] p-2 rounded-xl border border-border bg-popover/95 text-popover-foreground shadow-xl backdrop-blur-md animate-fade-in text-xs"
        >
          <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1 px-1 border-b border-border/50 pb-1">
            Additional Topics
          </div>
          <div className="flex flex-wrap gap-1 pt-1 max-h-36 overflow-y-auto scrollbar-none">
            {hiddenTopics.map((topic) => (
              <span
                key={topic}
                className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-secondary text-secondary-foreground border border-border/50"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
