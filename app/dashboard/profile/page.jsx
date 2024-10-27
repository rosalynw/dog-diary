'use client'
import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabaseClient";
import { SignOutButton } from "@/app/components/buttons/SignOutButton";

export default function Profile() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Session error:", error.message);
      } else {
        console.log(session); // Log the session for debugging
        setSession(session); // Update the session state
      }
    };

    fetchSession(); // Call the fetch function
  }, []); // Empty dependency array to run once on mount

  return (
    <div>
      Hola
      <SignOutButton />
    </div>
  )
}