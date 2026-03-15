'use client';

import { useState, useMemo } from 'react';
import { useProducts, useCategories } from '@/hooks/useProducts';
import { ProductCard } from '@/components/product/ProductCard';
import { ProductFilters } from '@/components/product/ProductFilters';
import { ProductGridSkeleton } from '@/components/product/ProductGridSkeleton';
import { ProductEmptyState } from '@/components/product/ProductEmptyState';
import { ProductPagination } from '@/components/product/ProductPagination';

const ITEMS_PER_PAGE = 8;

export default function DashboardPage() {
  const { data: products, isLoading, error } = useProducts();
  const { data: categories } = useCategories();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter products based on search query and category
  const filteredProducts = useMemo(() => {
    if (!products) return [];
    return products.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  // Client-side pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  // Reset to first page when filters change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (val: string | null) => {
    if (!val) return;
    setSelectedCategory(val);
    setCurrentPage(1);
  };

  if (error) {
    return (
      <div className="flex h-[50vh] flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-semibold text-destructive">Failed to load products</h2>
        <p className="text-muted-foreground">Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground">Manage and view your product inventory.</p>
        </div>
        
        <ProductFilters 
          searchQuery={searchQuery}
          onSearchChange={handleSearch}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          categories={categories}
        />
      </div>

      {isLoading ? (
        <ProductGridSkeleton />
      ) : paginatedProducts.length === 0 ? (
        <ProductEmptyState 
          onClearFilters={() => { setSearchQuery(''); setSelectedCategory('all'); }} 
        />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <ProductPagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}
