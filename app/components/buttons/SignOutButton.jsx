'use client'
import { signOut } from "@/utils/auth";
import { useRouter } from "next/navigation";

export function SignOutButton() {
  const router = useRouter();
  
  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/sign-in")
    } catch (error) {
      console.error("Sign out error:", error);
      // Handle the error (e.g., show a notification)
    }
  };

  return (
    <button 
      onClick={handleSignOut} 
      className="sign-out-button"
      aria-label="Sign Out"
    >
      Sign Out
    </button>
  );
}
