'use client'

import DarkMode from "../darkMode/Toggle";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from "./Menu";
import Link from "next/link";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});


export default function Sidebar() {

  const petMenuItems = [
    { name: 'Sparky'},
    { name: 'Whiskers'},
    { name: 'Bert'},
    { name: 'Add Pet'},
  ];

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
          <div className="flex flex-row space-x-5">
            <div className=""><DarkMode /></div>
            <Link href="/dashboard/profile">
              <div className="profile-avatar">< AccountCircleIcon /></div>
            </Link>
          </div>
        </div>
      </header>
      <nav className="flex flex-col w-full">
        <Menu title="Pets" submenuItems={petMenuItems} />
        <Menu title="Owners" submenuItems={ownersMenuItems} />
        <Menu title="Account" submenuItems={accountMenuItems} />
      </nav>
    </aside>
  )
}