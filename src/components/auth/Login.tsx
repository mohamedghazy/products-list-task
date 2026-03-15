'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

export function Login({ onToggle }: { onToggle: () => void }) {
  const { login } = useAuthStore();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const mockPromise = new Promise((resolve) => {
      setTimeout(() => {
        const mockToken = 'mock-jwt-token-' + Math.random().toString(36).substr(2);
        login(mockToken);
        resolve('Success');
      }, 1200);
    });

    toast.promise(mockPromise, {
      loading: 'Signing in...',
      success: () => {
        router.push('/');
        return 'Successfully logged in!';
      },
      error: 'An error occurred during authentication.',
    });
  };

  return (
    <Card className="w-full max-w-sm shadow-xl border-border/50">
      <CardHeader className="space-y-1 items-center mb-2">
        <CardTitle className="text-2xl font-bold tracking-tight text-center">
          Welcome back
        </CardTitle>
        <CardDescription className="text-center text-sm">
          Enter your email below to login to your dashboard.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleLogin}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none ">Email</label>
            <Input 
              id="email" 
              type="email" 
              placeholder="m@example.com" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium leading-none">Password</label>
            <Input 
              id="password" 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 border-0 bg-transparent">
          <Button className="w-full p-5 text-lg font-semibold" type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </Button>
          <div className="text-sm text-center text-muted-foreground w-full">
            Don&apos;t have an account?{' '}
            <button 
              type="button" 
              onClick={onToggle} 
              className="underline text-lg text-primary transition-colors cursor-pointer font-medium"
              disabled={loading}
            >
              Sign up
            </button>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
