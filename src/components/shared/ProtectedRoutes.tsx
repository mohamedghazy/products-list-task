'use client';

import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProtectedRoutes({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Wait until mounted to avoid hydration mismatch
    if (isMounted && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isMounted, router]);

  if (!isMounted) {
    return null; // Don't render anything while hydrating
  }

  return isAuthenticated ? <>{children}</> : null;
}
