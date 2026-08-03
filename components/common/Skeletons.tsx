export function SkeletonCard() {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm animate-pulse gap-6 h-[208px]">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-secondary" />
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="h-4 bg-secondary rounded w-3/4" />
            <div className="h-3 bg-secondary rounded w-1/2" />
          </div>
        </div>
        <div className="h-3 bg-secondary rounded w-full" />
        <div className="h-3 bg-secondary rounded w-5/6" />
      </div>
      <div className="h-8 bg-secondary rounded-lg w-full" />
    </div>
  );
}

export function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 12 }).map((_, idx) => (
        <SkeletonCard key={idx} />
      ))}
    </div>
  );
}

export function SkeletonTable() {
  return (
    <div className="w-full overflow-hidden border border-border bg-card rounded-xl animate-pulse">
      <div className="h-10 bg-secondary/35 border-b border-border" />
      <div className="divide-y divide-border/60">
        {Array.from({ length: 10 }).map((_, rIdx) => (
          <div key={rIdx} className="p-4 flex items-center justify-between gap-4">
            <div className="h-4.5 bg-secondary rounded w-5" />
            <div className="h-4 bg-secondary rounded flex-1 max-w-[240px]" />
            <div className="h-4 bg-secondary rounded w-28" />
            <div className="h-4.5 bg-secondary rounded w-16" />
            <div className="h-4 bg-secondary rounded w-12" />
            <div className="h-8 bg-secondary rounded w-8" />
          </div>
        ))}
      </div>
    </div>
  );
}
