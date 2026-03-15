import { Button } from '@/components/ui/button';
import { PackageX } from 'lucide-react';

interface ProductEmptyStateProps {
  onClearFilters: () => void;
}

export function ProductEmptyState({ onClearFilters }: ProductEmptyStateProps) {
  return (
    <div className="flex h-[50vh] flex-col items-center justify-center rounded-xl border border-dashed border-border/60 bg-muted/20">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted/50 mb-6">
        <PackageX className="h-10 w-10 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-foreground">No Products Found</h3>
      <p className="text-muted-foreground mb-6 max-w-sm text-center">
        We couldn&apos;t find any products matching your current filters. Try adjusting your search query or category.
      </p>
      <Button 
        variant="outline" 
        onClick={onClearFilters}
        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
      >
        Clear All Filters
      </Button>
    </div>
  );
}
