'use client'
import { signIn } from "next-auth/react"

export function SignInButton() {
  return (
    <button className="hover:text-gray-300" onClick={() => signIn("google", { callbackUrl: "/dashboard"})}>Sign In with Google</button>
  )
}