import { Home, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ProductBreadcrumbProps {
  category: string;
  title: string;
}

export function ProductBreadcrumb({ category, title }: ProductBreadcrumbProps) {
  const router = useRouter();

  return (
    <nav className="flex items-center text-sm text-muted-foreground mb-6">
      <button 
        onClick={() => router.push('/')} 
        className="hover:text-primary transition-colors flex items-center cursor-pointer"
      >
        <Home className="h-4 w-4 mr-1" />
        Products List
      </button>
      <ChevronRight className="h-4 w-4 mx-2" />
      <span className="capitalize">{category}</span>
      <ChevronRight className="h-4 w-4 mx-2" />
      <span className="text-foreground font-medium truncate max-w-[200px]">{title}</span>
    </nav>
  );
}
