'use client'

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signOut } from "@/utils/auth";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export default function CreateProfile({params}) {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const {id} = params;

  console.log(id);

  const { data: users, error, isLoading } = useSWR(`/api/users/${id}`, fetcher);

  console.log(users)

  useEffect(() => {
    if (users) {
      console.log("Fetched user data:", users);
    } else if (error) {
      console.error("Error fetching user data:", error);
    }
  }, [users, error]);
  const handleSignOut = async () => {
    try {
      await signOut();
      setMessage("Logged out successfully!");
      router.push('/sign-in')
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

    // Handle loading state
    if (isLoading) {
      return <div>Loading...</div>;
    }  

  return (
    <div>
      <div className="relative flex min-h-screen items-center justify-center">
        <div className='flex items-center space-x-10 space-y-4'>
          <div className="container flex flex-col py-6 pr-12 pl-4 space-y-3 w-fit max-w-4xl rounded-lg shadow-lg">
            <div className="grid grid-cols-2">
              <div className="self-center space-y-4 text-center">
                <h3 className="font-semibold text-regal">Profile picture</h3>
                <img className="inline-block h-60 w-60 rounded-full" src="/images/cat.jpg" width={100} height={100}/>
              </div>
              <div className="space-y-12">
                <h1 className={`${pacifico.variable} font-sans text-4xl text-center py-5`}>Create Profile</h1>
                <form className="grid grid-cols-2">
                  <label className="mr-2">First Name:
                    <input
                      className="p-2 rounded-lg w-full"
                      type="text"
                      value={users.first_name}
                      readOnly
                    />
                  </label>
                  <label className="ml-2">Last Name:
                    <input
                      className="p-2 rounded-lg w-full"
                      type="text"
                      value={users.last_name}
                      readOnly
                    />
                  </label>
                  <label className="col-span-2 py-2">Email:
                    <input
                      className="p-2 rounded-lg w-full"
                      type="email"
                      value={users.email}
                      readOnly
                    />
                  </label>
                  <label className="col-span-2 py-2">Phone: <span className="text-slate-400">(optional)</span>
                    <input
                      className="p-2 rounded-lg w-full"
                      type="tel"
                      value={phoneNumber}
                      placeholder="123-456-7890"
                      onChange={handlePhoneChange}
                    />
                  </label>
                  <div className="pet-buttons grid grid-cols-2 gap-4 col-span-2">
                    <button 
                      type="submit" 
                      className="font-semibold text-gray-300 bg-french hover:text-gray-50 rounded-lg py-2 px-6">
                      Submit
                    </button>
                    <button
                      className="font-semibold border border-regal hover:bg-regal hover:text-gray-300 dark:text-gray-300 rounded-lg py-2 px-6 h-fit"
                      onClick={handleSignOut} 
                      type="button"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
                {message && <p>{message}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
