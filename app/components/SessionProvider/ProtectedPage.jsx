'use client';

import { useSession } from './SessionProvider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedPage({ children }) {
  const { session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/sign-in');
    }
  }, [session, router]);

  // Render the content only if session exists
  return session ? children : null;
}
