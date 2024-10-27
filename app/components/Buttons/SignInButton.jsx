'use client'
import { signIn } from "next-auth/react"

export function SignInButton() {
  return (
    <button className="self-center border-2 rounded-lg py-2 px-4 border-regal mt-4 hover:bg-regal font-semibold hover:text-gray-300" onClick={() => signIn("google", { callbackUrl: "/dashboard"})}>Sign In with Google</button>
  )
}