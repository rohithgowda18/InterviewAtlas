import Skeleton, {
  QuestionTableSkeleton,
  StatsCardsSkeleton,
  TopicIntelligenceSkeleton,
} from "@/components/common/Skeleton";

export default function CompanyLoading() {
  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      {/* Header section skeleton */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border">
        <div className="flex items-center gap-3">
          <Skeleton className="h-12 w-12 rounded-xl shrink-0" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-7 w-48 rounded-lg" />
            <Skeleton className="h-4 w-32 rounded" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Skeleton className="h-9 w-24 rounded-lg" />
          <Skeleton className="h-9 w-24 rounded-lg" />
        </div>
      </div>

      {/* Stats cards skeleton */}
      <StatsCardsSkeleton />

      {/* Topic Intelligence Skeleton */}
      <TopicIntelligenceSkeleton />

      {/* Filter controls skeleton */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <Skeleton className="h-10 w-full max-w-lg rounded-xl" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-28 rounded-lg" />
          <Skeleton className="h-10 w-28 rounded-lg" />
          <Skeleton className="h-10 w-28 rounded-lg" />
        </div>
      </div>

      {/* Question Table skeleton */}
      <QuestionTableSkeleton rows={10} />
    </div>
  );
}
