"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { Company } from "@/types";
import CompanyCard from "./CompanyCard";
import SearchBar from "@/components/common/SearchBar";
import Pagination from "@/components/common/Pagination";
import { useDSA } from "@/hooks/useDSA";
import { History, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface CompanyGridProps {
  companies: readonly Company[];
  totalQuestions: number;
}

export default function CompanyGrid({
  companies,
  totalQuestions,
}: CompanyGridProps) {
  const { recentlyVisited, clearRecentlyVisited } = useDSA();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isSticky, setIsSticky] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 24;

  const filteredCompanies = useMemo(() => {
    return companies.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [companies, search]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const paginatedCompanies = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredCompanies.slice(start, start + itemsPerPage);
  }, [filteredCompanies, currentPage]);

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);

  // Sticky search bar detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
    );
    if (searchRef.current) observer.observe(searchRef.current);
    return () => observer.disconnect();
  }, []);

  // ⌘K / Ctrl+K to focus search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        const input = document.querySelector(
          'input[type="text"]'
        ) as HTMLInputElement;
        input?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Sticky search bar — appears on scroll */}
      <AnimatePresence>
        {isSticky && (
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 right-0 z-30 border-b border-border bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-md"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-4">
              <SearchBar
                value={search}
                onChange={setSearch}
                placeholder="Search companies..."
                className="max-w-md"
                showShortcut
              />
              <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">
                {filteredCompanies.length} of {companies.length} companies
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search + count row (original position) */}
      <div ref={searchRef} className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search 470+ tech companies... (⌘K)"
          className="max-w-xl w-full"
          showShortcut
        />
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-secondary/40 text-xs font-bold text-muted-foreground">
            <span className="text-foreground">{filteredCompanies.length}</span> companies
          </span>
          {search && (
            <button
              onClick={() => setSearch("")}
              className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Recently Visited */}
      <AnimatePresence>
        {recentlyVisited.length > 0 && !search && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="p-4 rounded-xl border border-border bg-card/65 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <History className="h-3.5 w-3.5" />
                <span>Recently Visited</span>
              </div>
              <button
                onClick={clearRecentlyVisited}
                className="text-xs text-muted-foreground hover:text-foreground font-semibold flex items-center gap-1 transition-colors"
              >
                <X className="h-3 w-3" />
                Clear
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {recentlyVisited.map((item) => (
                <Link
                  key={item.slug}
                  href={`/company/${item.slug}`}
                  className="inline-flex items-center px-3 py-1.5 rounded-lg bg-secondary/60 hover:bg-secondary border border-border text-xs font-bold text-foreground transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Companies grid */}
      {paginatedCompanies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {paginatedCompanies.map((company, idx) => (
            <motion.div
              key={company.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.02, duration: 0.25 }}
            >
              <CompanyCard company={company} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-20 text-center border border-border bg-card rounded-2xl">
          <span className="text-lg font-semibold text-foreground mb-1">
            No companies found
          </span>
          <span className="text-sm text-muted-foreground">
            Try adjusting your search query.
          </span>
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
