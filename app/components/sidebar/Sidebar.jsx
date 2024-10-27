'use client'

import DarkMode from "../darkMode/Toggle";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from "./Menu";
import Link from "next/link";
import { Pacifico } from "next/font/google";
import { supabase } from "@/utils/supabaseClient";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import { useState, useEffect } from "react";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});


export default function Sidebar() {

  const [profileImage, setProfileImage] = useState(null);

  const { data: pets, error, isLoading } = useSWR(`/api/pets`, fetcher);

  const retrieveUser = async () => {
    try {
      const { data: {user}, error } = await supabase.auth.getUser();
      if (user.aud === "authenticated") {
        const response = await fetch(`/api/users/${user.id}`);
        const result = await response.json();
        if (error) throw error;
        setProfileImage(result.profile_image);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    retrieveUser(); // Fetch user on component mount.
  }, []);

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
            <div className=""><DarkMode /></div>
            <Link href="/dashboard/profile">
              <div className="profile-avatar">
                {profileImage ? (
                  <img
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
        <Menu title="Pets" submenuItems={pets} />
        <Menu title="Owners" submenuItems={ownersMenuItems} />
        <Menu title="Account" submenuItems={accountMenuItems} />
      </nav>
    </aside>
  )
}