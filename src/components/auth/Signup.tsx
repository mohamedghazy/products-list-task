'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

export function Signup({ onToggle }: { onToggle: () => void }) {
  const { login } = useAuthStore();
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error('Name is required for registration.');
      return;
    }

    setLoading(true);
    const mockPromise = new Promise((resolve) => {
      setTimeout(() => {
        const mockToken = 'mock-jwt-token-' + Math.random().toString(36).substr(2);
        login(mockToken);
        resolve('Success');
      }, 1200);
    });

    toast.promise(mockPromise, {
      loading: 'Creating your account...',
      success: () => {
        router.push('/');
        return 'Account created successfully!';
      },
      error: 'An error occurred during authentication.',
    });
  };

  return (
    <Card className="w-full max-w-sm shadow-xl border-border/50">
      <CardHeader className="space-y-1 items-center mb-2">
        <CardTitle className="text-2xl font-bold tracking-tight text-center">
          Create an account
        </CardTitle>
        <CardDescription className="text-center text-sm">
          Enter your information to create an account.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSignup}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium leading-none">Name</label>
            <Input 
              id="name" 
              type="text" 
              placeholder="John Doe" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
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
          <Button className="w-full p-5" type="submit" disabled={loading}>
            {loading ? 'Creating account...' : 'Create an account'}
          </Button>
          <div className="text-sm text-center text-muted-foreground w-full">
            Already have an account?{' '}
            <button 
              type="button" 
              onClick={onToggle} 
              className="underline text-lg font-medium text-primary transition-colors cursor-pointer"
              disabled={loading}
            >
              Sign in
            </button>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
