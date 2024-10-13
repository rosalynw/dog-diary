'use client'

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getUserProfile, signOut } from "@/utils/auth";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export default function AddPet() {
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
              <h1 className={`${pacifico.variable} font-sans text-4xl text-center py-5`}>Add Pet</h1>
                    <form className="grid grid-cols-2">
                      <label className="mr-2">First Name:
                      <input
                        className="p-2 rounded-lg w-full"
                        type="text"
                        value={profile.first_name}
                        readOnly
                      />
                      </label>
                      <label className="ml-2">Last Name:
                      <input
                        className="p-2 rounded-lg w-full"
                        type="text"
                        value={profile.last_name}
                        readOnly
                      />
                      </label>
                      <label className="col-span-2 py-2">Email:
                      <input
                        className="p-2 rounded-lg w-full"
                        type="email"
                        value={profile.email}
                        readOnly
                      />
                      </label>
                      <label className="col-span-2 py-2">Phone:
                      <input
                        className="p-2 rounded-lg w-full"
                        type="tel"
                        value={profile.phone_number}
                        placeholder="123-456-7890"
                      />
                      </label>
                    </form>
                    <div className="pet-buttons grid grid-cols-2 gap-4">
            <button className="font-semibold text-gray-300 bg-french hover:text-gray-50 rounded-lg py-2 px-6">
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
                    {message && <p>{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}