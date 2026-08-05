"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Building2, ExternalLink } from "lucide-react";

interface CompanyListModalProps {
  questionTitle: string;
  companies: string[];
  isOpen: boolean;
  onClose: () => void;
}

export default function CompanyListModal({
  questionTitle,
  companies,
  isOpen,
  onClose,
}: CompanyListModalProps) {
  const [search, setSearch] = useState("");

  if (!isOpen) return null;

  const filteredCompanies = companies.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/40">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-extrabold text-base text-foreground tracking-tight">
                Appears in {companies.length} Companies
              </h2>
              <span className="text-xs text-muted-foreground font-medium">
                {questionTitle}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search input */}
        <div className="p-4 border-b border-border bg-card">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search company name..."
            className="w-full px-3.5 py-2 rounded-xl border border-border bg-secondary/50 text-xs font-semibold placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* List of Companies */}
        <div className="p-4 overflow-y-auto flex-1 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {filteredCompanies.map((slug) => {
            const formattedName = slug
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ");

            return (
              <Link
                key={slug}
                href={`/company/${slug}`}
                onClick={onClose}
                className="flex items-center justify-between p-2.5 rounded-xl border border-border/70 bg-secondary/30 hover:bg-secondary/80 hover:border-indigo-500/50 text-xs font-bold text-foreground transition-all group"
              >
                <span className="truncate">{formattedName}</span>
                <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
