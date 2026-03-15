import { Skeleton } from '@/components/ui/skeleton';

interface ProductGridSkeletonProps {
  count?: number;
}

export function ProductGridSkeleton({ count = 8 }: ProductGridSkeletonProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm h-[400px]">
          <Skeleton className="h-56 w-full rounded-none" />
          <div className="p-5 space-y-4 flex-1">
            <div className="space-y-2 relative top-2">
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-3/5" />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Skeleton className="h-4 w-8" />
              <Skeleton className="h-4 w-12" />
            </div>
            <Skeleton className="h-10 w-full rounded-md mt-auto absolute bottom-5 left-5 right-5 w-[calc(100%-40px)]" />
          </div>
        </div>
      ))}
    </div>
  );
}
