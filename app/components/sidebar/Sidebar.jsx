'use client'

import DarkMode from "../darkMode/toggle";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Sidebar() {


  return (
    <header className="header flex flex-row h-14">
      <nav className="flex justify-around w-full py-2 px-4 items-center">
        <div className="">
          <h1 className="text-lg font-bold">Dog Diary</h1>
        </div>
        <div className="flex flex-row space-x-3">
          <div className="profile-avatar">< AccountCircleIcon /></div>
          <div className=""><DarkMode /></div>
        </div>
      </nav>
    </header>
  )
}