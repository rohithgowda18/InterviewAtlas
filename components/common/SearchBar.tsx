"use client";

import { Search, X, Command } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  className?: string;
  showShortcut?: boolean;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
  className,
  showShortcut = false,
}: SearchBarProps) {
  return (
    <div
      className={cn(
        "relative w-full flex items-center bg-white/70 dark:bg-black/70 backdrop-blur-lg rounded-xl border border-border shadow-sm",
        className
      )}
    >
      <Search className="absolute left-3.5 h-4 w-4 text-muted-foreground pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-24 py-2.5 rounded-xl bg-transparent text-foreground placeholder:text-muted-foreground/70 text-sm focus:outline-none transition-all"
      />
      <div className="absolute right-2 flex items-center gap-1.5">
        {value && (
          <button
            onClick={() => onChange("")}
            className="p-1 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
        {showShortcut && !value && (
          <div className="hidden sm:flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-secondary border border-border text-muted-foreground select-none">
            <Command className="h-3 w-3" />
            <span className="text-[10px] font-bold">K</span>
          </div>
        )}
      </div>
    </div>
  );
}
