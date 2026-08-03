"use client";

import { Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookmarkButtonProps {
  isBookmarked: boolean;
  onToggle: () => void;
  className?: string;
}

export default function BookmarkButton({ isBookmarked, onToggle, className }: BookmarkButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      className={cn(
        "p-1.5 rounded-lg border transition-all duration-200",
        isBookmarked
          ? "bg-amber-500/10 border-amber-500/30 text-amber-500 hover:bg-amber-500/20"
          : "bg-transparent border-border hover:bg-secondary text-muted-foreground hover:text-foreground",
        className
      )}
      aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
    >
      <Bookmark className={cn("h-4 w-4", isBookmarked && "fill-amber-500")} />
    </button>
  );
}
