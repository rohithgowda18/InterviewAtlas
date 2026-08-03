"use client";

import Link from "next/link";
import { Github, BookOpen } from "lucide-react";
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
            href="https://github.com/rohithgowda18"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg border border-border hover:bg-secondary/50"
          >
            <Github className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
