import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import { Product } from '@/types';

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <>
      <div>
        <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-0 uppercase tracking-wider text-xs px-3 py-1">
          {product.category}
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight text-foreground">
          {product.title}
        </h1>
      </div>

      <div className="flex items-center gap-6 pb-6 border-b border-border/50">
        <span className="text-4xl font-bold text-primary">${product.price.toFixed(2)}</span>
        <div className="flex items-center gap-1.5 border-l border-border pl-6 text-sm text-muted-foreground">
          <div className="flex items-center text-yellow-500">
            <Star className="h-5 w-5 fill-current mr-1" />
            <span className="font-semibold text-foreground text-base">{product.rating.rate}</span>
          </div>
          <span>({product.rating.count} reviews)</span>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground">Product Description</h3>
        <p className="leading-relaxed text-muted-foreground text-lg">
          {product.description}
        </p>
      </div>
    </>
  );
}
