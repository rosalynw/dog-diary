'use client'
import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabaseClient";
import { getUserProfile } from "@/utils/auth";
import { SignOutButton } from "@/app/components/buttons/SignOutButton";

export default function Profile() {
  const [session, setSession] = useState(null);
  const [profileData, setProfileData] = useState([]);
  const [error, setError] = useState(null); // To handle error state

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const user = await getUserProfile();
        const response = await fetch(`/api/users/?id=${user.id}`); // Call the API route
        const data = await response.json();

        if (response.ok) {
          console.log(user);
          setProfileData(data); // Set the profile data if the request is successful
        } else {
          throw new Error(data.error || "Failed to load profile");
        }
      } catch (error) {
        console.log(error);
        console.error("Error fetching profile data");
      }
    };
    fetchSession(); // Call the fetch function
  }, []); // Empty dependency array to run once on mount

  return ( 
      <div>
      <div className="relative flex min-h-screen items-center justify-center">
        <div className='flex items-center space-x-10 space-y-4'>
          <div className="container flex flex-col py-6 px-12 space-y-3 w-fit max-w-4xl rounded-lg shadow-lg">
            <div className="flex flex-row space-x-10">
              <>
                <div>
                  <img className="inline-block h-24 w-24 rounded-full" src={profileData.profile_image} width={24} height={24}/>
                </div>
                <div className="grow">
                  <h1 className="font-bold text-4xl mb-4">{profileData.first_name} {profileData.last_name}</h1>
                  <div className='space-y-2 mb-4'>
                  <p className='font-bold'>Owner: </p>
                  <p className='font-bold'>Breed: </p>
                  <p>Age:</p>
                  <p>Food:</p>
                  <p>Behavior:</p>
                  </div>
                </div>
              </>
              <button type="button" className="font-semibold border border-regal hover:bg-regal hover:text-gray-300 dark:text-gray-300 rounded-lg py-2 px-6 h-fit">
                Delete Profile
              </button>
            </div>
            <div className="pet-buttons grid grid-cols-3 gap-4">
              <button
               className="font-semibold text-gray-300 bg-french hover:text-gray-50 rounded-lg py-2 px-6"
               type="button"
      
               >
                Create Reminder
              </button>
              <button className="font-semibold text-gray-300 bg-french hover:text-gray-50 rounded-lg py-2 px-6">
                Add Owner
              </button>
              <button className="font-semibold text-gray-300 bg-french hover:text-gray-50 rounded-lg py-2 px-6">
                Share Profile
              </button>
            </div>
          </div>
        </div>
      </div>
        <SignOutButton />
      </div>
  )
}