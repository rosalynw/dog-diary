'use client'

import DarkMode from "../darkMode/toggle";
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
        <div className="flex justify-around w-full py-2 px-4 items-center">
          <Link href="/" className="logo text-2xl font-bold text-white">
            Dog Diary
          </Link>
          <div className="flex flex-row space-x-3">
            <div className="profile-avatar">< AccountCircleIcon /></div>
            <div className=""><DarkMode /></div>
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