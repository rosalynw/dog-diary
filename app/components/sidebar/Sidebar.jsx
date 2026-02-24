'use client'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from "./Menu";
import Link from "next/link";
import { Pacifico } from "next/font/google";
import { supabase } from "@/utils/supabaseClient";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import { useState, useEffect } from "react";
import { getUserProfile } from "@/utils/auth";
import Image from 'next/image';


const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});


export default function Sidebar() {
  const [pets, setPets] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState(null); // To handle error state

  //const { data: pets, error, isLoading } = useSWR(`/api/pets`, fetcher);
useEffect(() => {
  const retrieveUser = async () => {
    try {
      const user = await getUserProfile();
      if (user) {
        const response = await fetch(`/api/users?id=${user.id}`);
        const result = await response.json();
        if (error) throw error;
        setProfileImage(result.profile_image);
      }

      const petsResponse = await fetch(`/api/pets?user_id=${user.id}`);
      if (!petsResponse.ok) {
        throw new Error(`Failed to fetch pets: ${petsResponse.statusText}`);
      }
      const petsData = await petsResponse.json();
      setPets(petsData.pets);
    } catch (error) {
      console.error("Error:", error);
    }
  };

    retrieveUser(); // Fetch user on component mount.
  }, [error]);

  const updatePets = (newPet) => {
    setPets((prevPets) => [...prevPets, newPet]);
  };

  const ownersMenuItems = [
    { name: 'Emily Johnson'},
    { name: 'Sarah Brown'},
    { name: 'Add Owner'},
  ]

  const accountMenuItems = [
    { name: 'Share Profile'},
    { name: 'Account Settings'},
  ]


  return (
    <aside className="sidebar h-screen min-w-72 border-regal border-r text-white dark:border-french">
      <header className="header flex flex-row h-20">
        <div className="flex justify-between w-full py-2 px-5 items-center">
          <Link href="/dashboard" className={`${pacifico.variable} font-sans logo text-3xl font-bold text-white hover:underline px-2 underline-offset-8`}>
            Dog Diary
          </Link>
          <div className="flex flex-row space-x-5 items-center">
            
            <Link href="/dashboard/profile">
              <div className="profile-avatar">
                {profileImage ? (
                  <Image
                    className="rounded-full max-w-10"  
                    src={profileImage}
                    alt="Profile Image"
                    />
                ) : (
                  <AccountCircleIcon />
                )}
                </div>
            </Link>
          </div>
        </div>
      </header>
      <nav className="flex flex-col w-full">
        <Menu title="Pets" submenuItems={[...pets || [], { name: 'Add Pet', link: '/dashboard/pets/add-pet' }]} />
        <Menu title="Owners" submenuItems={ownersMenuItems} />
        <Menu title="Account" submenuItems={accountMenuItems} />
      </nav>
    </aside>
  )
}