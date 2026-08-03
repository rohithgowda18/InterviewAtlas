"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center p-20 text-center border border-border bg-card rounded-2xl max-w-xl mx-auto my-12 gap-5 shadow-sm">
      <div className="p-3 rounded-full bg-rose-500/10 text-rose-500">
        <AlertTriangle className="h-8 w-8" />
      </div>
      <div className="flex flex-col gap-1.5">
        <h2 className="text-xl font-bold tracking-tight text-foreground">Something went wrong!</h2>
        <p className="text-sm text-muted-foreground">
          An error occurred while loading this company&apos;s DSA sheet.
        </p>
      </div>
      <button
        onClick={() => reset()}
        className="inline-flex items-center gap-1.5 px-4.5 py-2 text-sm font-bold rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200"
      >
        <RefreshCw className="h-4 w-4" />
        <span>Try Again</span>
      </button>
    </div>
  );
}
