import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function ProductActions() {
  const router = useRouter();
  
  return (
    <div className="pt-8 flex flex-col sm:flex-row gap-4">
      <Button size="lg" className="w-full sm:w-auto px-8 gap-2 text-base h-12 shadow-sm cursor-pointer">
        <ShoppingCart className="h-5 w-5" />
        Add to Cart
      </Button>
      <Button 
        size="lg" 
        variant="outline" 
        onClick={() => router.push('/')} 
        className="w-full sm:w-auto h-12 cursor-pointer"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Catalog
      </Button>
    </div>
  );
}
