"use client";

import { SignInButton } from "@/app/components/buttons/SignInButton";
import DarkMode from "@/app/components/darkMode/Toggle";
import { Pacifico } from "next/font/google";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import {signIn} from "@/utils/auth"
import {signUp} from "@/utils/auth"

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export default function SignIn() {
  const captcha = useRef(null);
  const [captchaToken, setCaptchaToken] = useState();
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
      const token = captcha.current.getResponse();
      setCaptchaToken(token);
      if (isLogin) {
        await signIn(email, password, token);
        setMessage("Logged in successfully!");
        router.push("/dashboard");
      } else {
        await signUp(email, password, token, firstName, lastName);
        setMessage("Signup successful! Check your email for confirmation.");
        router.push("/profile")
      }
    } catch (error) {
      setMessage(error.message);
      captcha.current.resetCaptcha()
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
          <div className="space-y-4">
            <h1 className={`${pacifico.variable} font-sans text-8xl py-`}>
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

                <HCaptcha
                  ref={captcha}
                  sitekey="b6128d2c-4112-4fb6-80d8-ca0228ae63be"
                  size="invisible"
                  onVerify={(token) => {
                    setCaptchaToken(token)
                  }}
                />
              </form>

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
            <p className="text-sm text-slate-500 text-center"> Register with</p>
            <div className="self-center border-2 rounded-lg py-2 px-4 border-regal mt-4 hover:bg-regal font-semibold">
              <SignInButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
