'use client';

import { useProduct } from '@/hooks/useProducts';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { use } from 'react';

import { ProductBreadcrumb } from '@/components/product/ProductBreadcrumb';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductInfo } from '@/components/product/ProductInfo';
import { ProductActions } from '@/components/product/ProductActions';
import { ProductDetailsSkeleton } from '@/components/product/ProductDetailsSkeleton';

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const { data: product, isLoading, error } = useProduct(resolvedParams.id);

  if (isLoading) {
    return <ProductDetailsSkeleton />;
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
    <div className="space-y-8 max-w-6xl mx-auto">
      <ProductBreadcrumb category={product.category} title={product.title} />

      <div className="grid gap-12 lg:grid-cols-2 items-start">
        <ProductGallery image={product.image} title={product.title} />

        <div className="space-y-8">
          <ProductInfo product={product} />
          <ProductActions />
        </div>
      </div>
    </div>
  );
}
