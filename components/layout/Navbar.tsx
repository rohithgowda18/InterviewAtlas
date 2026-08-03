"use client";

import Link from "next/link";
import { Terminal } from "lucide-react";
import ThemeToggle from "@/components/common/ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-white/70 dark:bg-black/70 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg transition-transform group-hover:scale-105 duration-200">
            <Terminal className="h-5 w-5" />
          </div>
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-foreground to-foreground/75 bg-clip-text text-transparent">
            LeetDSA Sheets
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
