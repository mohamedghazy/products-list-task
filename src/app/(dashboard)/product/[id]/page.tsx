'use client';

import { useProduct } from '@/hooks/useProducts';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { use } from 'react';

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const { data: product, isLoading, error } = useProduct(resolvedParams.id);

  if (isLoading) {
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

  if (error || !product) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 py-12">
        <h2 className="text-2xl font-semibold text-destructive">Failed to load product details</h2>
        <Button variant="outline" onClick={() => router.push('/')}>
          Return to Dashboard
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <Button variant="ghost" onClick={() => router.push('/')} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
      </Button>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        {/* Image Section */}
        <div className="flex h-[40vh] items-center justify-center rounded-xl bg-white p-8 shadow-sm md:h-[600px]">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-4 uppercase tracking-wider">
              {product.category}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{product.title}</h1>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
            <div className="flex items-center gap-1 border-l pl-4 text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-foreground">{product.rating.rate}</span>
              <span>({product.rating.count} reviews)</span>
            </div>
          </div>

          <div className="space-y-4 border-t pt-6">
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="leading-relaxed text-muted-foreground">
              {product.description}
            </p>
          </div>

          <div className="pt-6">
            <Button size="lg" className="w-full sm:w-auto">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
