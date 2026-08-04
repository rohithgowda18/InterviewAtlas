import Skeleton, { CompanyGridSkeleton } from "@/components/common/Skeleton";

export default function HomeLoading() {
  return (
    <div className="flex flex-col gap-8 py-1 animate-fade-in">
      {/* Hero section skeleton */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 pt-2">
        <Skeleton className="h-6 w-40 rounded-full" />
        <div className="flex flex-col items-center gap-2">
          <Skeleton className="h-12 w-64 md:w-96 rounded-xl" />
          <Skeleton className="h-5 w-48 md:w-80 rounded-lg" />
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <Skeleton className="h-9 w-40 rounded-full" />
          <Skeleton className="h-9 w-32 rounded-full" />
          <Skeleton className="h-9 w-36 rounded-full" />
        </div>
      </div>

      {/* Main search and grid skeleton */}
      <div className="flex flex-col gap-6">
        <Skeleton className="h-12 w-full max-w-lg mx-auto rounded-xl" />
        <CompanyGridSkeleton count={12} />
      </div>
    </div>
  );
}
