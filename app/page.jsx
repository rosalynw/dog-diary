'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
    // Redirect to login if the user is not authenticated
    if (status === "unauthenticated") {
      router.push("/sign-in");
    }
  }, [status, router]);

  // Show a loading indicator while session is being checked
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  return (
      <div >
        Hello
      </div>
  );
}
