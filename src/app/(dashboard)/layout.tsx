'use client';

import ProtectedRoutes from '@/components/shared/ProtectedRoutes';
import { useAuthStore } from '@/store/authStore';
import { LogOut, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { logout } = useAuthStore();

  return (
    <ProtectedRoutes>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 shadow-sm">
          <nav className="flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 flex-1">
            <div className="flex items-center gap-2 text-lg font-semibold md:text-base">
              <Package className="h-6 w-6" />
              <span>ProductManager</span>
            </div>
          </nav>
          <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <Button variant="outline" size="sm" onClick={() => logout()}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-8">
          {children}
        </main>
      </div>
    </ProtectedRoutes>
  );
}
