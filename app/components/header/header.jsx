'use client'

import { useState } from "react"
import DarkMode from "../darkMode/toggle";

export default function DynamicHeader() {
  const [title, setTitle] = useState('Welcome');

  return (
    <header className="flex flex-row p-4 bg-gray-800 text-white">
      <h1>{title}</h1>
      < DarkMode />
    </header>
  )
}