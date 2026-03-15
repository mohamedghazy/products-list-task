'use client';

import { useState } from 'react';
import { Login } from '@/components/auth/Login';
import { Signup } from '@/components/auth/Signup';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/30 p-4">
      {isLogin ? (
        <Login onToggle={() => setIsLogin(false)} />
      ) : (
        <Signup onToggle={() => setIsLogin(true)} />
      )}
    </div>
  );
}
