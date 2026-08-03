function Shimmer({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded animate-shimmer ${className}`}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm gap-4">
      {/* Header row */}
      <div className="flex items-center gap-4">
        <Shimmer className="h-11 w-11 rounded-xl flex-shrink-0" />
        <div className="flex-1 flex flex-col gap-2">
          <Shimmer className="h-4 w-3/4" />
          <Shimmer className="h-3 w-1/2" />
        </div>
      </div>

      {/* Difficulty breakdown */}
      <div className="flex gap-2">
        <Shimmer className="h-5 w-16 rounded-full" />
        <Shimmer className="h-5 w-16 rounded-full" />
        <Shimmer className="h-5 w-16 rounded-full" />
      </div>

      {/* Progress bar */}
      <Shimmer className="h-1.5 w-full rounded-full" />

      {/* Button */}
      <Shimmer className="h-8 w-full rounded-lg" />
    </div>
  );
}

export function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {Array.from({ length: 12 }).map((_, idx) => (
        <SkeletonCard key={idx} />
      ))}
    </div>
  );
}

export function SkeletonTable() {
  return (
    <div className="w-full overflow-hidden border border-border bg-card rounded-xl">
      <div className="h-10 animate-shimmer border-b border-border" />
      <div className="divide-y divide-border/60">
        {Array.from({ length: 10 }).map((_, rIdx) => (
          <div key={rIdx} className="p-3.5 flex items-center gap-4">
            <Shimmer className="h-4.5 w-4.5 rounded flex-shrink-0" />
            <Shimmer className="h-4 flex-1 max-w-[260px]" />
            <Shimmer className="h-4 w-28 hidden md:block" />
            <Shimmer className="h-5 w-14 rounded-full" />
            <Shimmer className="h-4 w-10" />
            <div className="flex gap-1.5 ml-auto">
              <Shimmer className="h-7 w-7 rounded-lg" />
              <Shimmer className="h-7 w-7 rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
