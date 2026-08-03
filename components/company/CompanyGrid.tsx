"use client";

import { useState, useMemo, useEffect } from "react";
import { Company } from "@/types";
import CompanyCard from "./CompanyCard";
import SearchBar from "@/components/common/SearchBar";
import Pagination from "@/components/common/Pagination";
import { useDSA } from "@/hooks/useDSA";
import { History } from "lucide-react";
import Link from "next/link";

interface CompanyGridProps {
  companies: readonly Company[];
}

export default function CompanyGrid({ companies }: CompanyGridProps) {
  const { recentlyVisited, clearRecentlyVisited } = useDSA();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
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

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search from 400+ tech companies..."
          className="max-w-xl w-full"
        />
        <div className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
          <span>Showing {filteredCompanies.length} of {companies.length} companies</span>
        </div>
      </div>

      {recentlyVisited.length > 0 && !search && (
        <div className="p-4 rounded-xl border border-border bg-card/65 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <History className="h-4 w-4" />
              <span>Recently Visited</span>
            </div>
            <button
              onClick={clearRecentlyVisited}
              className="text-xs text-muted-foreground hover:text-foreground font-semibold flex items-center gap-1 transition-colors"
            >
              Clear
            </button>
          </div>
          <div className="flex flex-wrap gap-2.5">
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
        </div>
      )}

      {paginatedCompanies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedCompanies.map((company) => (
            <CompanyCard key={company.slug} company={company} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-20 text-center border border-border bg-card rounded-2xl">
          <span className="text-lg font-semibold text-foreground mb-1">No companies found</span>
          <span className="text-sm text-muted-foreground">Try adjusting your search query.</span>
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
