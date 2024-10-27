'use client'
import { signOut } from "@/utils/auth";

export function SignOutButton() {
  const handleSignOut = async () => {
    try {
      await signOut();
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
