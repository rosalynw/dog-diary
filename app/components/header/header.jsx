'use client'

import { useState } from "react"
import DarkMode from "../darkMode/toggle";

export default function DynamicHeader() {
  const [title, setTitle] = useState('Welcome');

  return (
    <header className="header flex flex-row bg-tacao h-14">
      <nav className="flex justify-around w-full py-2 px-4 items-center">
        <div className="">
          <h1 className="text-lg font-bold">{title}</h1>
        </div>
        <div className="">< DarkMode /></div>
      </nav>
    </header>
  )
}