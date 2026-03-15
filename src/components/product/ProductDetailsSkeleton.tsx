import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export function ProductDetailsSkeleton() {
  return (
    <div className="space-y-8">
      <Button variant="ghost" disabled>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
      </Button>
      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        <Skeleton className="h-[400px] w-full rounded-xl" />
        <div className="space-y-6">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-8 w-1/3" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>
      </div>
    </div>
  );
}
