import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-card border-border/50">
      <div className="relative h-56 w-full bg-white p-6 flex flex-col items-center justify-center border-b border-border/10">
        <Badge variant="secondary" className="absolute top-3 left-3 capitalize text-[10px] px-2 py-0.5">
          {product.category}
        </Badge>
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
      </div>
      <CardContent className="flex-1 p-5 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="line-clamp-2 font-medium leading-tight text-foreground" title={product.title}>
            {product.title}
          </h3>
          <p className="font-semibold text-lg whitespace-nowrap text-primary">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <p className="line-clamp-2 text-sm text-muted-foreground">
            {product.description}
          </p>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
          <span className="font-medium text-foreground">{product.rating.rate}</span>
          <span>({product.rating.count})</span>
        </div>
      </CardContent>
      <CardFooter className="p-5  mt-auto border-0 bg-transparent">
        <Link href={`/product/${product.id}`} className="w-full">
          <Button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors group p-5 cursor-pointer">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
