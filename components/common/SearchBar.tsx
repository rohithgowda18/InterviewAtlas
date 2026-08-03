"use client";

import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchBar({ value, onChange, placeholder = "Search...", className }: SearchBarProps) {
  return (
    <div className={cn("relative w-full flex items-center bg-white/70 dark:bg-black/70 backdrop-blur-lg rounded-lg", className)}>
      <Search className="absolute left-3 h-4.5 w-4.5 text-muted-foreground pointer-events-none" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-9 py-2 rounded-lg border border-border bg-white/70 dark:bg-black/70 backdrop-blur-lg text-foreground placeholder:text-muted-foreground/80 text-sm focus:outline-none focus:ring-1 focus:ring-ring focus:border-ring transition-all"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3 p-0.5 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Clear search"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}
