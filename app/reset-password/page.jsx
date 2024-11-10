'use client'

import { useState } from "react";
import { resetPassword } from "@/utils/auth";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const successMessage = await resetPassword(email);
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
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Email</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    <div>
        <button onClick={handleGoBack}>Cancel</button>
      </div>
    </>
  );
}
