import Link from "next/link";
import { Github, Bug, BookOpen, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-indigo-500 to-blue-600 text-white p-1 rounded-md">
                <BookOpen className="h-3.5 w-3.5" />
              </div>
              <span className="font-extrabold text-sm tracking-tight">
                Interview{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Atlas
                </span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground max-w-xs">
              Curated company-wise interview questions. Not affiliated with LeetCode.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="https://github.com/rohithgowda18"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
            <a
              href="https://github.com/rohithgowda18/InterviewAtlas/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              <Bug className="h-3.5 w-3.5" />
              Report Issue
            </a>
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Privacy
            </Link>
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Terms
            </Link>
          </div>

          {/* Made by */}
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-3 w-3 fill-rose-500 text-rose-500" />
            <span>by</span>
            <a
              href="https://github.com/rohithgowda18"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground hover:text-indigo-400 transition-colors"
            >
              Rohith
            </a>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Interview Atlas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
