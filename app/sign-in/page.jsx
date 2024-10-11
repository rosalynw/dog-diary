'use client'

import { SignInButton } from "@/app/components/buttons/SignInButton";
import  DarkMode  from "@/app/components/darkMode/Toggle";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico'
})

export default function SignIn() {
  return (
    <main className="m-0 flex flex-row">
      <div className="flex w-5/12 bg-regal m-0 min-h-screen text-white justify-center">
        <div className="flex items-center">
          <h1 className={`${pacifico.variable} font-sans text-8xl`}>Dog Diary</h1>
        </div>
      </div>
      <div className="flex min-h-screen justify-center w-full">
        <div className="flex items-center">
          <div className="form-container flex flex-col py-6 px-12 min-w-3/12 rounded-lg shadow-lg">
            <form>
              <input
                type="text"
                placeholder="hello"
                />
            </form>
              <SignInButton />
          </div>
        </div>
      </div>
    </main>
  )
}