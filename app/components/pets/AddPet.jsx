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

export default function AddPet({handleSignOut}) {
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
            <div className="space-y-8">
              <h1 className={`${pacifico.variable} font-sans text-5xl text-center py-5`}>Add a Pet</h1>
                    <form className="grid grid-cols-2">
                      <label className="mr-2 py-2" ht>Name:
                      <input
                        className="p-2 rounded-lg w-full"
                        type="text"
                       
                        readOnly
                      />
                      </label>
                      <label className="ml-2 py-2">Species:
                      <input
                        className="p-2 rounded-lg w-full"
                        type="text"
                        name="species"
                        id="species"
                        placeholder="Dog"
                      />
                      </label>
                      <label className="mr-2 py-2" htmlFor="breed">Breed:
                      <input
                        className="p-2 rounded-lg w-full"
                        type="text"
                        name="breed"
                        id="breed"
                        placeholder="Golden Doodle"
                      />
                      </label>
                      <label className="ml-2 py-2">Age:
                      <input
                        className="p-2 rounded-lg w-full"
                        type="number"
                        name="age"
                        id="age"
                        placeholder="8 years/ 6 months"
                      />
                      </label>
                      <label className="mr-2 py-2" htmlFor="food">Food:
                      <input
                        className="p-2 rounded-lg w-full"
                        type="tel"
                        name="food"
                        id="food"
                        placeholder="Purina kibble"
                      />
                      </label>
                      <label className="ml-2 py-2" htmlFor="birthday">Birthday:
                      <input
                        className="p-2 rounded-lg w-full"
                        type="date"
                        name="birthday"
                        id="birthday"
                        placeholder="Purina kibble"
                      />
                      </label>
                      <label className="col-span-2 py-2" htmlFor="behavior">Behavior:
                      <textarea
                        className="p-2 rounded-lg w-full"
                        type="textarea"
                        name="behavior"
                        id="behavior"
                        placeholder="Purina kibble"
                      />
                      </label>
                    </form>
                    <div className="pet-buttons grid grid-cols-2 gap-4">
            <button className="font-semibold text-gray-300 bg-french hover:text-gray-50 rounded-lg py-2 px-6">
              Submit
            </button>
            <button
              className="font-semibold border border-regal hover:bg-regal hover:text-gray-300 dark:text-gray-300 dark:border-french dark:bg-zinc-700 dark:hover:bg-regal rounded-lg py-2 px-6 h-fit"
              onClick={handleSignOut} 
              type="button"
            >
              Cancel
            </button>
          </div>
                    {/* {message && <p>{message}</p>} */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}