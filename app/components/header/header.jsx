'use client'

import DarkMode from "../darkMode/toggle";

export default function DynamicHeader() {


  return (
    <header className="header flex flex-row h-14">
      <nav className="flex justify-around w-full py-2 px-4 items-center">
        <div className="">
          <h1 className="text-lg font-bold">Dog Diary</h1>
        </div>
        <div className="">< DarkMode /></div>
      </nav>
    </header>
  )
}