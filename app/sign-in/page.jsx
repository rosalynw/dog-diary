"use client";

import { SignInButton } from "@/app/components/buttons/SignInButton";
import DarkMode from "@/app/components/darkMode/Toggle";
import { Pacifico } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { signIn, signUp } from "@/utils/auth";
import Link from "next/link";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export default function SignIn() {
  const captcha = useRef(null);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        await signIn(email, password);
        setMessage("Logged in successfully!");
        router.push("/dashboard");
      } else {
        const data = await signUp(email, password, firstName, lastName);
        console.log(data);
        setMessage("Signup successful!");
        router.push(`/new-user/${data.user.id}`);
      }
    } catch (error) {
      console.error("Error during signup/login:", error);
      setMessage(error.message || "An unexpected error occurred."); // Set error message
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      setMessage("Logged out successfully!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <main className="m-0 flex flex-row">
      <div className="flex w-5/12 bg-regal m-0 min-h-screen text-white justify-center">
        <div className="flex items-center">
          <div className="space-y-4 px-4">
            <h1 className={`${pacifico.variable} font-sans text-8xl`}>
              Dog Diary
            </h1>
            <h3 className="font-sans text-xl text-center border-t-2 border-white py-10">
              Store all your pet's info in one place
            </h3>
          </div>
        </div>
      </div>
      <div className="flex min-h-screen justify-center w-full">
        <div className="flex items-center">
          <div className="form-container flex flex-col py-6 px-12 min-w-3/12 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 space-y-5 text-center">
              <h1 className={`${pacifico.variable} font-sans text-2xl`}>
                {isLogin ? "Welcome Back!" : "Hello!"}
              </h1>

              <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
                {!isLogin && (
                  <>
                    <input
                      className="p-1 rounded-lg focus:outline-none focus:ring-regal focus:ring-2"
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    <input
                      className="p-1 rounded-lg focus:outline-none focus:ring-regal focus:ring-2"
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </>
                )}

                <input
                  className="p-1 rounded-lg focus:outline-none focus:ring-regal focus:ring-2"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="p-1 rounded-lg focus:outline-none focus:ring-regal focus:ring-2"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <div className="self-end">
                  <button
                    className="hover:underline underline-offset-1 decoration-regal decoration-2 px-2 font-semibold"
                    type="submit"
                  >
                    {isLogin ? "Login" : "Sign Up"}
                  </button>
                </div>
              </form>

              <Link href="/reset-password">Forgot Password?</Link>

              <button
                className="py-2 text-sm"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Not a member? Sign Up" : "Have an account? Login"}
              </button>
              {message && <p>{message}</p>}
            </div>
            <p className="text-sm text-slate-500 text-center">or</p>
            <hr />
            <p className="text-sm text-slate-500 text-center"> Continue with</p>
              <SignInButton />
          </div>
        </div>
      </div>
    </main>
  );
}
