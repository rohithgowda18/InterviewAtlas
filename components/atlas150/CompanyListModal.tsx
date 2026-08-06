"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);
  const scrollYRef = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    scrollYRef.current = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollYRef.current);
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  const filteredCompanies = companies.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Companies for ${questionTitle}`}
        className="relative w-full max-w-lg bg-card border-0 md:border md:border-border md:rounded-2xl shadow-2xl overflow-hidden flex flex-col h-full max-h-none md:h-auto md:max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 md:px-6 py-3.5 md:py-4 border-b border-border bg-muted/40 shrink-0"
          style={{
            paddingTop: "calc(env(safe-area-inset-top, 0px) + 0.875rem)",
          }}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 shrink-0">
              <Building2 className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h2 className="font-extrabold text-base text-foreground tracking-tight truncate">
                Appears in {companies.length} Companies
              </h2>
              <span className="text-xs text-muted-foreground font-medium truncate block">
                {questionTitle}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer shrink-0 ml-2"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search input */}
        <div className="p-4 border-b border-border bg-card shrink-0">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search company name..."
            className="w-full px-3.5 py-2 rounded-xl border border-border bg-secondary/50 text-xs font-semibold placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* List of Companies */}
        <div
          className="p-4 overflow-y-auto flex-1 grid grid-cols-2 sm:grid-cols-3 gap-2"
          style={{
            paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)",
          }}
        >
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
    </div>,
    document.body
  );
}
