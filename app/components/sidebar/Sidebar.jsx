'use client'

import DarkMode from "../darkMode/Toggle";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from "./Menu";
import Link from "next/link";

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
    <aside className="sidebar h-screen min-w-72 border-regal border-r text-white">
      <header className="header flex flex-row h-14">
        <div className="flex justify-between w-full py-2 px-5 items-center">
          <Link href="/dashboard" className="logo text-2xl font-bold text-white hover:ring-2 dark:hover:text-white">
            Dog Diary
          </Link>
          <div className="flex flex-row space-x-5">
            <div className=""><DarkMode /></div>
            <Link href="/profile">
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