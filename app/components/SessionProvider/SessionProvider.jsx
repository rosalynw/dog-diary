'use client'

import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/utils/supabaseClient'
import { useRouter } from "next/navigation";

//add supabase get session to foward already authenticated users to their dashboard.

const SessionContext = createContext(null);

export const useSession = () => useContext(SessionContext);

export default function SessionProvider({children}) {
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch the session on initial render
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      if (!session && router.pathname !== '/sign-in') {
        router.push('/sign-in'); // Redirect to sign-in if not authenticated
      }
    };
    
    fetchSession();

    // Listen for auth state changes
    const { data: {subscription} } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      if (!session && router.pathname !== '/sign-in') {
        router.push('/sign-in'); // Redirect if signed out
      }
    });

    // Cleanup the subscription on unmount
    return () => subscription.unsubscribe();
  }, [router]);

  return (
      <SessionContext.Provider value={{session, setSession}} >
        {children}
      </SessionContext.Provider>
  );
}
