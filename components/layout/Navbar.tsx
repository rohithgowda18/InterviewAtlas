"use client";

import Link from "next/link";
import { Github, BookOpen, Star } from "lucide-react";
import ThemeToggle from "@/components/common/ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-white/70 dark:bg-black/70 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="bg-gradient-to-br from-indigo-500 to-blue-600 text-white p-1.5 rounded-lg transition-transform group-hover:scale-105 duration-200 shadow-sm">
            <BookOpen className="h-4 w-4" />
          </div>
          <span className="font-extrabold text-base tracking-tight">
            Interview{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Atlas
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/rohithgowda18/InterviewAtlas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-amber-500 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors px-3 py-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 shadow-sm"
          >
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <Github className="h-3.5 w-3.5 text-foreground ml-0.5" />
            <span>Star on GitHub</span>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
