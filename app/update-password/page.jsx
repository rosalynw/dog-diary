'use client'

import { useState } from "react";
import { updatePassword } from "@/utils/auth";
import { useRouter } from "next/navigation";

// Turn this into a component to be uses within dashboard (potentially)

export default function UpdatePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    try {
      const successMessage = await updatePassword(newPassword);
      setMessage(successMessage);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleGoBack = () => {
    router.back();
  }
  
  return (
    <>
      <div>
        <h2>Reset Your Password</h2>
        <form onSubmit={handleUpdatePassword}>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button type="submit">Update Password</button>
        </form>
        {message && <p>{message}</p>}
      </div>
      <div>
        <button onClick={handleGoBack}>Cancel</button>
      </div>
    </>
  )
}