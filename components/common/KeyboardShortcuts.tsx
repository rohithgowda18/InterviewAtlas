"use client";

import { useEffect, useState } from "react";

interface KeyboardShortcutsProps {
  onOpen?: () => void;
}

const shortcuts = [
  { key: "/", description: "Focus search" },
  { key: "j", description: "Next question" },
  { key: "k", description: "Previous question" },
  { key: "b", description: "Bookmark focused question" },
  { key: "s", description: "Mark focused question solved" },
  { key: "Enter", description: "Open question on LeetCode" },
  { key: "Esc", description: "Clear filters / close" },
  { key: "?", description: "Open this help panel" },
];

export default function KeyboardShortcuts({ onOpen }: KeyboardShortcutsProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }
      if (e.key === "?" && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        setOpen((v) => !v);
        onOpen?.();
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onOpen]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="bg-card border border-border rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-4 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-foreground">
            Keyboard Shortcuts
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="text-xs font-bold text-muted-foreground hover:text-foreground border border-border rounded-md px-2 py-1 transition-colors"
          >
            Esc
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {shortcuts.map((s) => (
            <div
              key={s.key}
              className="flex items-center justify-between py-1.5 border-b border-border/50 last:border-0"
            >
              <span className="text-sm text-muted-foreground">
                {s.description}
              </span>
              <kbd className="inline-flex items-center justify-center min-w-[28px] h-6 px-1.5 rounded-md bg-secondary border border-border text-xs font-bold text-foreground font-mono shadow-sm">
                {s.key}
              </kbd>
            </div>
          ))}
        </div>

        <p className="text-[10px] text-muted-foreground/60 mt-4 text-center">
          Press <kbd className="font-mono text-[10px] bg-secondary px-1 rounded">?</kbd> again to close
        </p>
      </div>
    </div>
  );
}
